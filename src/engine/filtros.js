// filtros.js — Lógica de filtrado cascading: ciclo → grados → área → eje
// No depende de IA. Funciona 100% offline.

const CICLOS = {
  'preescolar': { nombre: 'Preescolar', grados: ['0'], grupos: ['1-3'] },
  'basica-primaria': { nombre: 'Básica Primaria', grados: ['1','2','3','4','5'], grupos: ['1-3','4-5'] },
  'basica-secundaria': { nombre: 'Básica Secundaria', grados: ['6','7','8','9'], grupos: ['6-7','8-9'] },
  'media': { nombre: 'Media', grados: ['10','11'], grupos: ['10-11'] }
};

const GRUPOS_EBC_ORDEN = ['1-3', '4-5', '6-7', '8-9', '10-11'];

const AREAS_EBC = {
  'matematicas': { nombre: 'Matemáticas', color: '#4f83f1', icon: '∑' },
  'lenguaje': { nombre: 'Lenguaje', color: '#19c37d', icon: '✎' },
  'ciencias-naturales': { nombre: 'Ciencias Naturales', color: '#f59e0b', icon: '⚗' },
  'ciencias-sociales': { nombre: 'Ciencias Sociales', color: '#a78bfa', icon: '🌍' },
  'ingles': { nombre: 'Inglés', color: '#6366f1', icon: '🌐' }
};

function gradoAGrupoEBC(grado) {
  const g = parseInt(grado);
  if (g <= 3) return '1-3';
  if (g <= 5) return '4-5';
  if (g <= 7) return '6-7';
  if (g <= 9) return '8-9';
  return '10-11';
}

function grupoAGrados(grupo) {
  const map = { '1-3': [1,2,3], '4-5': [4,5], '6-7': [6,7], '8-9': [8,9], '10-11': [10,11] };
  return map[grupo] || [];
}

function getGradosPorCiclo(cicloId) {
  return CICLOS[cicloId]?.grados || [];
}

function getGruposPorCiclo(cicloId) {
  return CICLOS[cicloId]?.grupos || [];
}

function getEjesDeArea(areaId) {
  const areas = {
    'matematicas': typeof EBC_MATEMATICAS !== 'undefined' ? EBC_MATEMATICAS : null,
    'lenguaje': typeof EBC_LENGUAJE !== 'undefined' ? EBC_LENGUAJE : null,
    'ciencias-naturales': typeof EBC_NATURALES !== 'undefined' ? EBC_NATURALES : null,
    'ciencias-sociales': typeof EBC_SOCIALES !== 'undefined' ? EBC_SOCIALES : null,
    'ingles': typeof EBC_INGLES !== 'undefined' ? EBC_INGLES : null
  };
  return areas[areaId]?.ejes || [];
}

function getEstandares(areaId, grupoEBC, ejeId) {
  const areas = {
    'matematicas': typeof EBC_MATEMATICAS !== 'undefined' ? EBC_MATEMATICAS : null,
    'lenguaje': typeof EBC_LENGUAJE !== 'undefined' ? EBC_LENGUAJE : null,
    'ciencias-naturales': typeof EBC_NATURALES !== 'undefined' ? EBC_NATURALES : null,
    'ciencias-sociales': typeof EBC_SOCIALES !== 'undefined' ? EBC_SOCIALES : null,
    'ingles': typeof EBC_INGLES !== 'undefined' ? EBC_INGLES : null
  };
  const area = areas[areaId];
  if (!area || !area.grupos[grupoEBC]) return [];
  if (ejeId) {
    return area.grupos[grupoEBC].estandares[ejeId] || [];
  }
  // Todos los ejes
  const todos = [];
  for (const [eje, ests] of Object.entries(area.grupos[grupoEBC].estandares)) {
    todos.push(...ests.map(e => ({ eje, texto: e })));
  }
  return todos;
}

function getEstandarGeneral(areaId, grupoEBC) {
  const areas = {
    'matematicas': typeof EBC_MATEMATICAS !== 'undefined' ? EBC_MATEMATICAS : null,
    'lenguaje': typeof EBC_LENGUAJE !== 'undefined' ? EBC_LENGUAJE : null,
    'ciencias-naturales': typeof EBC_NATURALES !== 'undefined' ? EBC_NATURALES : null,
    'ciencias-sociales': typeof EBC_SOCIALES !== 'undefined' ? EBC_SOCIALES : null,
    'ingles': typeof EBC_INGLES !== 'undefined' ? EBC_INGLES : null
  };
  return areas[areaId]?.grupos[grupoEBC]?.estandarGeneral || '';
}

function getDBA(areaId, grado) {
  if (typeof DBA === 'undefined') return [];
  return DBA[areaId]?.[grado] || [];
}

function getPlanPeriodo(grado, periodo) {
  if (typeof PLANES_MATEMATICAS === 'undefined') return null;
  const plan = PLANES_MATEMATICAS[grado];
  if (!plan) return null;
  return plan.periodos.find(p => p.periodo === periodo) || null;
}

function getPlanGrado(grado) {
  if (typeof PLANES_MATEMATICAS === 'undefined') return null;
  return PLANES_MATEMATICAS[grado] || null;
}

// Obtener todas las áreas con sus datos disponibles
function getResumenAreas() {
  return Object.entries(AREAS_EBC).map(([id, info]) => ({
    id,
    ...info,
    ejes: getEjesDeArea(id),
    gruposDisponibles: GRUPOS_EBC_ORDEN.filter(g => getEstandares(id, g).length > 0)
  }));
}
