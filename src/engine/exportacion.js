// exportacion.js — Exportación: PDF (print), JSON, CSV

function exportarPDF() {
  window.print();
}

function exportarJSON(datos, nombreArchivo) {
  const json = JSON.stringify(datos, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  descargarBlob(blob, nombreArchivo || 'articulacion-ebc.json');
}

function exportarCSV(datos, nombreArchivo) {
  if (!Array.isArray(datos) || datos.length === 0) return;

  const headers = Object.keys(datos[0]);
  const filas = datos.map(fila =>
    headers.map(h => {
      let val = fila[h];
      if (Array.isArray(val)) val = val.join('; ');
      if (typeof val === 'object' && val !== null) val = JSON.stringify(val);
      val = String(val || '');
      // Escapar comillas y encerrar si contiene comas o saltos de línea
      if (val.includes(',') || val.includes('"') || val.includes('\n')) {
        val = '"' + val.replace(/"/g, '""') + '"';
      }
      return val;
    }).join(',')
  );

  const csv = [headers.join(','), ...filas].join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
  descargarBlob(blob, nombreArchivo || 'articulacion-ebc.csv');
}

function descargarBlob(blob, nombre) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nombre;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Exportar articulación vertical como tabla plana
function exportarArticulacionCSV(areaId, ejeId) {
  const linea = getLineaProgresion(areaId, ejeId);
  const filas = [];

  for (const item of linea) {
    for (const est of item.estandares) {
      filas.push({
        area: AREAS_EBC[areaId]?.nombre || areaId,
        eje: ejeId,
        grupo: item.grupo,
        estandar: est
      });
    }
  }

  const ejeNombre = getEjesDeArea(areaId).find(e => e.id === ejeId)?.nombre || ejeId;
  exportarCSV(filas, `articulacion-${areaId}-${ejeId}.csv`);
}

// Exportar plan de periodo como JSON
function exportarPlanJSON(grado, periodo) {
  const plan = getPlanPeriodo(String(grado), periodo);
  if (!plan) return;
  exportarJSON({ grado, periodo, ...plan }, `plan-matematicas-${grado}-P${periodo}.json`);
}

// Generar datos para exportar la vista actual
function prepararDatosExportacion(vista) {
  switch (vista.tipo) {
    case 'articulacion':
      return {
        titulo: `Articulación Vertical - ${AREAS_EBC[vista.area]?.nombre}`,
        area: vista.area,
        eje: vista.eje,
        datos: getLineaProgresion(vista.area, vista.eje)
      };
    case 'estandares':
      return {
        titulo: `Estándares - ${AREAS_EBC[vista.area]?.nombre} - Grupo ${vista.grupo}`,
        area: vista.area,
        grupo: vista.grupo,
        estandarGeneral: getEstandarGeneral(vista.area, vista.grupo),
        estandares: getEstandares(vista.area, vista.grupo)
      };
    case 'plan':
      return {
        titulo: `Plan de Periodo - Grado ${vista.grado} - Periodo ${vista.periodo}`,
        plan: getPlanPeriodo(String(vista.grado), vista.periodo)
      };
    default:
      return null;
  }
}
