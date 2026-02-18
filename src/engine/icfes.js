// icfes.js — Acceso y articulación de datos ICFES (Saber 3°, 5°, 9°, 11°)
// Depende de: ICFES_MATEMATICAS, EBC_MATEMATICAS, DBA, GRUPOS_EBC_ORDEN, gradoAGrupoEBC(), normalizarTexto()

// Mapa de grados a prueba ICFES
const GRADO_A_PRUEBA = {
  '1': 'saber-3', '2': 'saber-3', '3': 'saber-3',
  '4': 'saber-5', '5': 'saber-5',
  '6': 'saber-9', '7': 'saber-9', '8': 'saber-9', '9': 'saber-9',
  '10': 'saber-11', '11': 'saber-11'
};

// Retorna el objeto ICFES completo para un área
function getICFESData(area) {
  if (area === 'matematicas') {
    return typeof ICFES_MATEMATICAS !== 'undefined' ? ICFES_MATEMATICAS : null;
  }
  if (area === 'lenguaje') {
    return typeof ICFES_LECTURA_CRITICA !== 'undefined' ? ICFES_LECTURA_CRITICA : null;
  }
  // Preparado para expandir: 'ciencias-naturales', 'ciencias-sociales'
  return null;
}

// Retorna array de pruebas disponibles: [{ id, nombre }, ...]
function getPruebasICFES(area) {
  const data = getICFESData(area);
  if (!data) return [];
  return Object.entries(data.pruebas).map(([id, prueba]) => ({
    id,
    nombre: prueba.nombre
  }));
}

// Dado un grado (string), retorna el id de la prueba ICFES correspondiente
function getPruebaParaGrado(grado) {
  return GRADO_A_PRUEBA[String(grado)] || null;
}

// Retorna aprendizajes filtrados de una prueba
// competencia y componente son opcionales
function getAprendizajesICFES(area, pruebaId, competencia, componente) {
  const data = getICFESData(area);
  if (!data || !data.pruebas[pruebaId]) return [];

  let aprendizajes = data.pruebas[pruebaId].aprendizajes || [];

  if (competencia) {
    aprendizajes = aprendizajes.filter(a => a.competencia === competencia);
  }
  if (componente) {
    aprendizajes = aprendizajes.filter(a => a.componente === componente);
  }

  return aprendizajes;
}

// Retorna las evidencias de un aprendizaje específico
function getEvidenciasICFES(area, pruebaId, aprendizajeId) {
  const data = getICFESData(area);
  if (!data || !data.pruebas[pruebaId]) return [];

  const aprendizaje = data.pruebas[pruebaId].aprendizajes.find(
    a => a.id === aprendizajeId
  );

  return aprendizaje?.evidencias || [];
}

// Retorna los niveles de desempeño de una prueba
function getNivelesDesempeno(area, pruebaId) {
  const data = getICFESData(area);
  if (!data || !data.pruebas[pruebaId]) return [];
  return data.pruebas[pruebaId].niveles || [];
}

// Dado un puntaje numérico, retorna el nivel de desempeño correspondiente
function getNivelPorPuntaje(area, pruebaId, puntaje) {
  const niveles = getNivelesDesempeno(area, pruebaId);
  return niveles.find(nivel => {
    const [min, max] = nivel.rango;
    return puntaje >= min && puntaje < max;
  }) || null;
}

// Articula estándares EBC con aprendizajes ICFES para un grupo de grados
// Retorna los datos agrupados para que la UI los muestre juntos (sin matching automático)
function articularEBCconICFES(area, grupoEBC) {
  const data = getICFESData(area);
  if (!data) return null;

  // Determina la prueba según el primer grado del grupo
  const primerGrado = grupoEBC.split('-')[0];
  const pruebaId = getPruebaParaGrado(primerGrado);
  if (!pruebaId || !data.pruebas[pruebaId]) return null;

  const prueba = data.pruebas[pruebaId];

  // Estándares EBC del grupo
  const estandaresGrupo = getEstandares(area, grupoEBC);

  return {
    grupoEBC,
    pruebaICFES: { id: pruebaId, nombre: prueba.nombre, grados: prueba.grados },
    aprendizajes: prueba.aprendizajes || [],
    componentes: data.componentes || [],
    competencias: data.competencias || [],
    estandaresEBC: estandaresGrupo
  };
}

// Retorna las competencias ICFES del área
function getCompetenciasICFES(area) {
  const data = getICFESData(area);
  return data?.competencias || [];
}

// Retorna los componentes ICFES del área
function getComponentesICFES(area) {
  const data = getICFESData(area);
  return data?.componentes || [];
}

// Búsqueda full-text en aprendizajes y evidencias ICFES
// Sigue el patrón de buscarEstandares() y buscarDBA()
function buscarICFES(query, filtroArea) {
  const queryNorm = normalizarTexto(query);
  if (!queryNorm || queryNorm.length < 2) return [];

  const palabras = queryNorm.split(' ').filter(p => p.length > 1);
  const resultados = [];

  const areas = filtroArea ? [filtroArea] : ['matematicas'];

  for (const area of areas) {
    const data = getICFESData(area);
    if (!data) continue;

    for (const [pruebaId, prueba] of Object.entries(data.pruebas)) {
      const aprendizajes = prueba.aprendizajes || [];

      for (const aprendizaje of aprendizajes) {
        // Buscar en el enunciado del aprendizaje
        const textoNorm = normalizarTexto(aprendizaje.enunciado);
        const coincidencias = palabras.filter(p => textoNorm.includes(p)).length;

        if (coincidencias > 0) {
          resultados.push({
            tipo: 'aprendizaje-icfes',
            area,
            prueba: pruebaId,
            id: aprendizaje.id,
            texto: aprendizaje.enunciado,
            competencia: aprendizaje.competencia,
            componente: aprendizaje.componente,
            relevancia: coincidencias / palabras.length
          });
        }

        // Buscar en cada evidencia del aprendizaje
        for (const evidencia of (aprendizaje.evidencias || [])) {
          const evNorm = normalizarTexto(evidencia.enunciado);
          const evCoincidencias = palabras.filter(p => evNorm.includes(p)).length;

          if (evCoincidencias > 0) {
            resultados.push({
              tipo: 'evidencia-icfes',
              area,
              prueba: pruebaId,
              id: evidencia.id,
              aprendizajeId: aprendizaje.id,
              texto: evidencia.enunciado,
              competencia: aprendizaje.competencia,
              componente: aprendizaje.componente,
              relevancia: evCoincidencias / palabras.length
            });
          }
        }
      }
    }
  }

  return resultados.sort((a, b) => b.relevancia - a.relevancia);
}
