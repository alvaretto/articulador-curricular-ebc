// === DASHBOARD ===
// Extends App with the renderDashboard method.
// Loaded after app.js; requires App to be defined.

Object.assign(App, {

  renderDashboard() {
    var historial = Storage.getSimulacroResults();
    var areaLabels = { matematicas: 'Matematicas', lenguaje: 'Lectura Critica', naturales: 'C. Naturales', sociales: 'Sociales', ingles: 'Ingles' };
    var pruebaLabels = { 'saber-9': 'Saber 9', 'saber-11': 'Saber 11', 'saber-11-completo': 'Saber 11 Completo' };
    var tableRows = '';
    if (historial.length === 0) {
      tableRows = '<tr><td colspan="5" style="text-align:center;padding:var(--sp-4)" class="text-muted">No hay resultados aun. Completa un simulacro para ver estadisticas.</td></tr>';
    } else {
      for (var r of historial) {
        var color = r.porcentaje >= 70 ? 'var(--success)' : r.porcentaje >= 50 ? 'var(--warning)' : 'var(--danger)';
        var fecha = new Date(r.fecha).toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
        var min = Math.floor(r.tiempoUsado / 60);
        var seg = r.tiempoUsado % 60;
        tableRows += '<tr><td>' + fecha + '</td><td>' + (areaLabels[r.area] || r.area) + '</td><td>' + (pruebaLabels[r.pruebaId] || r.pruebaId) + '</td><td><span style="color:' + color + ';font-weight:600">' + r.porcentaje + '%</span> <span class="text-xs text-muted">(' + r.correctas + '/' + r.total + ')</span></td><td>' + min + ':' + String(seg).padStart(2, '0') + '</td></tr>';
      }
    }
    var trendHtml = '';
    var groups = {};
    for (var r of historial) {
      var key = r.area + '|' + r.pruebaId;
      if (!groups[key]) groups[key] = [];
      groups[key].push(r);
    }
    for (var gkey of Object.keys(groups)) {
      var items = groups[gkey];
      var parts = gkey.split('|');
      var last5 = items.slice(0, 5).reverse();
      var bars = '';
      for (var it of last5) {
        var bc = it.porcentaje >= 70 ? 'var(--success)' : it.porcentaje >= 50 ? 'var(--warning)' : 'var(--danger)';
        bars += '<div class="trend-bar-wrap"><div class="trend-bar" style="height:' + it.porcentaje + '%;background:' + bc + '" title="' + it.porcentaje + '%"></div><span class="trend-bar-label">' + it.porcentaje + '%</span></div>';
      }
      trendHtml += '<div class="trend-group"><div class="trend-group-title">' + (areaLabels[parts[0]] || parts[0]) + ' · ' + (pruebaLabels[parts[1]] || parts[1]) + '</div><div class="trend-bars">' + bars + '</div></div>';
    }
    var recoHtml = '';
    var areaAvgs = {};
    for (var r of historial) {
      if (!areaAvgs[r.area]) areaAvgs[r.area] = { sum: 0, count: 0 };
      areaAvgs[r.area].sum += r.porcentaje;
      areaAvgs[r.area].count++;
    }
    var lowAreas = Object.entries(areaAvgs).filter(function(e) { return (e[1].sum / e[1].count) < 60; }).sort(function(a, b) { return (a[1].sum / a[1].count) - (b[1].sum / b[1].count); });
    if (lowAreas.length > 0) {
      recoHtml = '<div class="card mt-4"><div class="card-header"><span class="card-title">Recomendaciones</span></div><div class="card-body"><ul class="reco-list">';
      for (var la of lowAreas) {
        var avg = Math.round(la[1].sum / la[1].count);
        recoHtml += '<li class="reco-item"><span class="badge" style="background:var(--danger);color:white">' + (areaLabels[la[0]] || la[0]) + ': ' + avg + '% promedio</span> <span class="text-sm">— Reforzar esta area. </span><a href="#/area/' + la[0] + '/8-9" class="text-sm" style="color:var(--accent)">Ver estandares</a></li>';
      }
      recoHtml += '</ul></div></div>';
    }
    return '<h1 class="section-title">Estadisticas ICFES</h1>' +
      '<p class="section-description">Historial de simulacros, tendencias y recomendaciones.</p>' +
      '<div class="card mt-4"><div class="card-header"><span class="card-title">Historial de Simulacros</span><span class="badge badge-muted">' + historial.length + ' intentos</span></div>' +
      '<div class="card-body" style="padding:0;overflow-x:auto"><table class="dashboard-tabla"><thead><tr><th>Fecha</th><th>Area</th><th>Prueba</th><th>Resultado</th><th>Tiempo</th></tr></thead><tbody>' + tableRows + '</tbody></table></div></div>' +
      (trendHtml ? '<div class="card mt-4"><div class="card-header"><span class="card-title">Tendencia</span></div><div class="card-body"><div class="trend-container">' + trendHtml + '</div></div></div>' : '') +
      recoHtml +
      '<div class="flex gap-2 mt-4"><button class="btn btn-secondary" data-action="navigate" data-value="#/simulacro">Nuevo Simulacro</button><button class="btn btn-ghost" data-action="limpiar-historial-simulacros">Limpiar Historial</button></div>';
  }

});
