// busqueda.js — Búsqueda full-text en estándares EBC, DBA y planes

function normalizarTexto(texto) {
  return texto.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quitar tildes
    .replace(/[^\w\s]/g, ' ') // quitar puntuación
    .replace(/\s+/g, ' ').trim();
}

function buscarEstandares(query, filtroArea) {
  const queryNorm = normalizarTexto(query);
  if (!queryNorm || queryNorm.length < 2) return [];

  const palabras = queryNorm.split(' ').filter(p => p.length > 1);
  const resultados = [];

  const areas = filtroArea ? [filtroArea] : ['matematicas', 'lenguaje', 'ciencias-naturales', 'ciencias-sociales'];

  for (const areaId of areas) {
    for (const grupo of GRUPOS_EBC_ORDEN) {
      const estandaresGrupo = getEstandares(areaId, grupo);
      for (const est of estandaresGrupo) {
        const texto = typeof est === 'string' ? est : est.texto;
        const textoNorm = normalizarTexto(texto);
        const coincidencias = palabras.filter(p => textoNorm.includes(p)).length;

        if (coincidencias > 0) {
          resultados.push({
            tipo: 'estandar',
            area: areaId,
            grupo,
            eje: typeof est === 'object' ? est.eje : null,
            texto,
            relevancia: coincidencias / palabras.length
          });
        }
      }
    }
  }

  return resultados.sort((a, b) => b.relevancia - a.relevancia);
}

function buscarDBA(query, filtroArea) {
  if (typeof DBA === 'undefined') return [];

  const queryNorm = normalizarTexto(query);
  if (!queryNorm || queryNorm.length < 2) return [];

  const palabras = queryNorm.split(' ').filter(p => p.length > 1);
  const resultados = [];

  const areas = filtroArea ? [filtroArea] : Object.keys(DBA);

  for (const areaId of areas) {
    const areaDBA = DBA[areaId];
    if (!areaDBA) continue;

    for (const [grado, dbas] of Object.entries(areaDBA)) {
      for (const dba of dbas) {
        const textoNorm = normalizarTexto(dba);
        const coincidencias = palabras.filter(p => textoNorm.includes(p)).length;

        if (coincidencias > 0) {
          resultados.push({
            tipo: 'dba',
            area: areaId,
            grado,
            texto: dba,
            relevancia: coincidencias / palabras.length
          });
        }
      }
    }
  }

  return resultados.sort((a, b) => b.relevancia - a.relevancia);
}

function buscarTodo(query, filtroArea) {
  const estandares = buscarEstandares(query, filtroArea);
  const dbas = buscarDBA(query, filtroArea);
  const icfes = typeof buscarICFES === 'function' ? buscarICFES(query, filtroArea) : [];

  return [...estandares, ...dbas, ...icfes].sort((a, b) => b.relevancia - a.relevancia);
}
