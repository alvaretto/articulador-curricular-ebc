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

// Exportar plan de periodo en formato institucional (tabla para imprimir)
function exportarPlanInstitucional(grado, periodo) {
  const planGrado = getPlanGrado(String(grado));
  const plan = getPlanPeriodo(String(grado), periodo);
  if (!planGrado || !plan) return;

  const inst = Storage.getInstitucion();
  const year = new Date().getFullYear();

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Plan de Periodo — Matemáticas ${grado}° · P${periodo}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #222; padding: 15px; }
  h1 { font-size: 14px; text-align: center; margin-bottom: 2px; }
  h2 { font-size: 12px; text-align: center; margin-bottom: 8px; color: #555; }
  .header-table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
  .header-table td { border: 1px solid #999; padding: 4px 8px; font-size: 10px; }
  .header-table .label { font-weight: bold; background: #f0f0f0; width: 20%; }
  table.plan { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
  table.plan th { background: #2563eb; color: white; padding: 5px 8px; text-align: left; font-size: 10px; font-weight: 600; }
  table.plan td { border: 1px solid #ccc; padding: 5px 8px; vertical-align: top; font-size: 10px; line-height: 1.5; }
  table.plan tr:nth-child(even) td { background: #f9fafb; }
  .section-title { background: #1e40af; color: white; padding: 4px 8px; font-size: 11px; font-weight: 600; margin: 8px 0 0 0; }
  ul { margin: 0; padding-left: 16px; }
  li { margin-bottom: 2px; }
  .eval-table td { text-align: center; }
  .eval-table .pct { font-weight: bold; font-size: 12px; }
  .footer { margin-top: 20px; font-size: 9px; color: #888; text-align: center; }
  @media print { body { padding: 0; } @page { margin: 1.5cm; size: letter; } }
</style>
</head>
<body>
<h1>${inst.nombre || 'INSTITUCIÓN EDUCATIVA'}</h1>
<h2>PLAN DE PERIODO — AÑO LECTIVO ${year}</h2>

<table class="header-table">
  <tr>
    <td class="label">ÁREA</td><td>Matemáticas</td>
    <td class="label">GRADO</td><td>${grado}°</td>
    <td class="label">PERIODO</td><td>${periodo}</td>
  </tr>
  <tr>
    <td class="label">DOCENTE</td><td>${inst.docente || '________________________'}</td>
    <td class="label">INTENSIDAD</td><td>${plan.horasSemana} h/semana · ${plan.horasTotales} h total</td>
    <td class="label">SEMANAS</td><td>${plan.semanas}</td>
  </tr>
  <tr>
    <td class="label">OBJETIVO DEL AÑO</td><td colspan="5">${planGrado.objetivo}</td>
  </tr>
</table>

<div class="section-title">1. ESTÁNDARES BÁSICOS DE COMPETENCIAS (EBC)</div>
<table class="plan">
  <tr><th style="width:100%">Estándares del periodo</th></tr>
  ${plan.estandares.map(e => `<tr><td>· ${e}</td></tr>`).join('')}
</table>

<div class="section-title">2. DERECHOS BÁSICOS DE APRENDIZAJE (DBA)</div>
<table class="plan">
  <tr><td>${plan.dba}</td></tr>
</table>

<div class="section-title">3. COMPETENCIAS ICFES</div>
<table class="plan">
  <tr><th>Razonamiento y argumentación</th><th>Comunicación y representación</th><th>Resolución de problemas</th></tr>
  <tr>
    <td>${plan.competenciasICFES.razonamiento}</td>
    <td>${plan.competenciasICFES.comunicacion}</td>
    <td>${plan.competenciasICFES.resolucionProblemas}</td>
  </tr>
</table>

<div class="section-title">4. MATRIZ DE REFERENCIA ICFES</div>
<table class="plan">
  <tr><th>Componente</th><th>Competencia</th><th>Nivel esperado</th></tr>
  <tr>
    <td>${plan.matrizReferencia.componente}</td>
    <td>${plan.matrizReferencia.competencia}</td>
    <td>${plan.nivelEsperado || '—'}</td>
  </tr>
  <tr><th colspan="3">Afirmaciones</th></tr>
  ${plan.matrizReferencia.afirmaciones.map(a => `<tr><td colspan="3">· ${a}</td></tr>`).join('')}
</table>

<div class="section-title">5. CONTENIDOS Y EJES TEMÁTICOS</div>
<table class="plan">
  <tr><th>Ejes temáticos</th><th>Tipos de pensamiento</th></tr>
  <tr>
    <td><ul>${plan.ejesTematicos.map(e => `<li>${e}</li>`).join('')}</ul></td>
    <td>${plan.tiposPensamiento.join(', ')}</td>
  </tr>
  <tr><th colspan="2">Pregunta problematizadora</th></tr>
  <tr><td colspan="2" style="font-style:italic">${plan.preguntaProblema}</td></tr>
</table>

<div class="section-title">6. DIAGNÓSTICO</div>
<table class="plan">
  <tr><td>${plan.diagnostico}</td></tr>
</table>

<div class="section-title">7. EVIDENCIAS DE APRENDIZAJE</div>
<table class="plan">
  ${plan.evidenciasAprendizaje.map(e => `<tr><td>· ${e}</td></tr>`).join('')}
</table>

<div class="section-title">8. ESTRATEGIAS METODOLÓGICAS</div>
<table class="plan">
  ${plan.estrategiasMetodologicas.map(e => `<tr><td>· ${e}</td></tr>`).join('')}
</table>

<div class="section-title">9. MATERIALES EDUCATIVOS</div>
<table class="plan">
  <tr><td><ul>${plan.materialesEducativos.map(e => `<li>${e}</li>`).join('')}</ul></td></tr>
</table>

<div class="section-title">10. CRITERIOS DE EVALUACIÓN</div>
<table class="plan eval-table">
  <tr>
    <th>SABER (${plan.criteriosEvaluacion.porcentajes.saber}%)</th>
    <th>HACER (${plan.criteriosEvaluacion.porcentajes.hacer}%)</th>
    <th>SER (${plan.criteriosEvaluacion.porcentajes.ser}%)</th>
  </tr>
  <tr>
    <td style="text-align:left"><ul>${plan.criteriosEvaluacion.saber.map(s => `<li>${s}</li>`).join('')}</ul></td>
    <td style="text-align:left"><ul>${plan.criteriosEvaluacion.hacer.map(s => `<li>${s}</li>`).join('')}</ul></td>
    <td style="text-align:left"><ul>${plan.criteriosEvaluacion.ser.map(s => `<li>${s}</li>`).join('')}</ul></td>
  </tr>
</table>

<div class="section-title">11. COMPETENCIA CIUDADANA</div>
<table class="plan">
  <tr><td>${plan.competenciaCiudadana}</td></tr>
</table>

<div class="footer">
  Generado por Articulador Curricular Saber ICFES · MEN Colombia · ${year}
</div>

<script>window.print();</script>
</body>
</html>`;

  const w = window.open('', '_blank');
  if (w) {
    w.document.write(html);
    w.document.close();
  }
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
