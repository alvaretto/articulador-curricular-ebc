// app-plan.js — Plan rendering methods
// Extends the App object defined in app.js

Object.assign(App, {

  // === VIEW: PLAN DE PERIODO ===
  renderPlan() {
    const grado = this.state.grado || '8';
    const periodo = this.state.periodo || 1;
    const area = this.state.area || 'matematicas';

    // Seleccionar el objeto de planes según el área
    const PLANES_MAP = {
      matematicas: typeof PLANES_MATEMATICAS !== 'undefined' ? PLANES_MATEMATICAS : null,
      lenguaje: typeof PLANES_LENGUAJE !== 'undefined' ? PLANES_LENGUAJE : null,
      naturales: typeof PLANES_NATURALES !== 'undefined' ? PLANES_NATURALES : null,
      sociales: typeof PLANES_SOCIALES !== 'undefined' ? PLANES_SOCIALES : null,
      ingles: typeof PLANES_INGLES !== 'undefined' ? PLANES_INGLES : null
    };
    const AREA_NOMBRES = { matematicas: 'Matemáticas', lenguaje: 'Lenguaje', naturales: 'Ciencias Naturales', sociales: 'Ciencias Sociales', ingles: 'Inglés' };
    const PLAN_BASES = { matematicas: 'plan', lenguaje: 'plan-lenguaje', naturales: 'plan-naturales', sociales: 'plan-sociales', ingles: 'plan-ingles' };

    const planesObj = PLANES_MAP[area] || null;
    const planGrado = planesObj ? planesObj[grado] : null;
    // Soportar periodos como array o como objeto { 1: {...}, 2: {...} }
    const plan = planGrado
      ? (Array.isArray(planGrado.periodos)
          ? (planGrado.periodos.find(p => p.periodo === periodo) || null)
          : (planGrado.periodos[periodo] || null))
      : null;

    const areaNombre = AREA_NOMBRES[area] || area;
    const planBase = PLAN_BASES[area] || 'plan';

    if (!planGrado || !plan) {
      return `
        <div class="empty-state">
          <div class="empty-state-icon">📋</div>
          <div class="empty-state-title">Plan no disponible</div>
          <p class="empty-state-text">Los planes de periodo detallados están disponibles para ${areaNombre} grados 6° a 11°.</p>
          <button class="btn btn-primary mt-4" data-action="navigate" data-value="#/">Volver al inicio</button>
        </div>
      `;
    }

    // Renderizar competencias ICFES según el área
    const competenciasICFESHtml = area === 'lenguaje'
      ? `
        <div class="icfes-item">
          <div class="icfes-item-label">Identificar</div>
          <div class="icfes-item-text">${plan.competenciasICFES.identificar || ''}</div>
        </div>
        <div class="icfes-item">
          <div class="icfes-item-label">Comprender</div>
          <div class="icfes-item-text">${plan.competenciasICFES.comprender || ''}</div>
        </div>
        <div class="icfes-item">
          <div class="icfes-item-label">Reflexionar</div>
          <div class="icfes-item-text">${plan.competenciasICFES.reflexionar || ''}</div>
        </div>`
      : `
        <div class="icfes-item">
          <div class="icfes-item-label">Razonamiento</div>
          <div class="icfes-item-text">${plan.competenciasICFES.razonamiento || ''}</div>
        </div>
        <div class="icfes-item">
          <div class="icfes-item-label">Comunicación</div>
          <div class="icfes-item-text">${plan.competenciasICFES.comunicacion || ''}</div>
        </div>
        <div class="icfes-item">
          <div class="icfes-item-label">Resolución de Problemas</div>
          <div class="icfes-item-text">${plan.competenciasICFES.resolucionProblemas || ''}</div>
        </div>`;

    return `
      <div class="print-header">
        <div class="print-header-title">Plan de Periodo — ${areaNombre} ${grado}° · Periodo ${periodo}</div>
        <div class="print-header-subtitle">${Storage.getInstitucion().nombre || 'Articulador Curricular'}</div>
      </div>

      <div class="flex items-center justify-between" style="flex-wrap:wrap; gap:var(--sp-3)">
        <div>
          <h1 class="section-title">${areaNombre} ${grado}° — Periodo ${periodo}</h1>
          <p class="text-sm text-secondary">${planGrado.objetivo}</p>
        </div>
        <div class="flex gap-2">
          <button class="btn-print" data-action="export-pdf">🖨 Imprimir / PDF</button>
          <button class="btn btn-secondary btn-sm" data-action="export-json">JSON</button>
          <button class="btn btn-primary btn-sm" data-action="export-institucional">Formato Institucional</button>
        </div>
      </div>

      <!-- Tabs de periodos -->
      <div class="tabs">
        ${[1,2,3,4].map(p => `
          <button class="tab ${p === periodo ? 'active' : ''}" data-action="navigate" data-value="#/${planBase}/${grado}/${p}">
            Periodo ${p}
          </button>
        `).join('')}
      </div>

      <!-- Info general -->
      <div class="flex gap-4 mt-4" style="flex-wrap:wrap">
        <span class="badge badge-muted">${plan.semanas} semanas</span>
        <span class="badge badge-muted">${plan.horasSemana} h/semana</span>
        <span class="badge badge-muted">${plan.horasTotales} horas total</span>
        ${plan.tiposPensamiento.map(t => `<span class="badge badge-accent">${t}</span>`).join('')}
      </div>

      <div class="plan-filtro-comp-bar mt-4">
        <label class="text-xs text-muted">Filtrar por competencia ICFES:</label>
        <select class="simulacro-config-select" id="plan-filtro-competencia" style="max-width:220px">
          <option value="">Todas</option>
          ${(typeof getCompetenciasICFES === 'function' ? getCompetenciasICFES(area) : []).map(c =>
            '<option value="' + c + '"' + (this.state.planFiltroCompetencia === c ? ' selected' : '') + '>' + c + '</option>'
          ).join('')}
        </select>
      </div>

      <!-- Plan Grid -->
      <div class="plan-grid mt-4">
        <!-- Estándares -->
        <div class="plan-section plan-section-full">
          <div class="plan-section-title">Estándares EBC</div>
          <ul class="plan-list">
            ${plan.estandares.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>

        <!-- DBA -->
        <div class="plan-section">
          <div class="plan-section-title">DBA</div>
          <p class="text-sm text-secondary" style="line-height:var(--leading-loose)">${plan.dba}</p>
        </div>

        <!-- Diagnóstico -->
        <div class="plan-section">
          <div class="plan-section-title">Diagnóstico</div>
          <p class="text-sm text-secondary" style="line-height:var(--leading-loose)">${plan.diagnostico}</p>
        </div>

        <!-- Ejes temáticos -->
        <div class="plan-section">
          <div class="plan-section-title">Ejes Temáticos</div>
          <ul class="plan-list">
            ${plan.ejesTematicos.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>

        <!-- Pregunta problema -->
        <div class="plan-section">
          <div class="plan-section-title">Pregunta Problema</div>
          <p class="text-sm text-secondary" style="line-height:var(--leading-loose); font-style:italic">${plan.preguntaProblema}</p>
        </div>

        <!-- Competencias ICFES -->
        <div class="plan-section plan-section-full">
          <div class="plan-section-title">Competencias ICFES</div>
          <div class="icfes-grid">
            ${competenciasICFESHtml}
          </div>
        </div>

        <!-- Evidencias -->
        <div class="plan-section">
          <div class="plan-section-title">Evidencias de Aprendizaje</div>
          <ul class="plan-list">
            ${plan.evidenciasAprendizaje.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>

        <!-- Matriz de referencia -->
        <div class="plan-section">
          <div class="plan-section-title">Matriz de Referencia ICFES</div>
          <div class="text-sm text-secondary">
            <p><strong>Componente:</strong> ${plan.matrizReferencia.componente}</p>
            <p><strong>Competencia:</strong> ${plan.matrizReferencia.competencia}</p>
            <p class="mt-2"><strong>Afirmaciones:</strong></p>
            <ul class="plan-list">${plan.matrizReferencia.afirmaciones.map(a => `<li>${a}</li>`).join('')}</ul>
          </div>
        </div>

        <!-- Estrategias -->
        <div class="plan-section">
          <div class="plan-section-title">Estrategias Metodológicas</div>
          <ul class="plan-list">
            ${plan.estrategiasMetodologicas.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>

        <!-- Materiales -->
        <div class="plan-section">
          <div class="plan-section-title">Materiales Educativos</div>
          <ul class="plan-list">
            ${plan.materialesEducativos.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>

        <!-- Evaluación -->
        <div class="plan-section plan-section-full">
          <div class="plan-section-title">Criterios de Evaluación</div>
          <div class="icfes-grid">
            <div class="icfes-item">
              <div class="icfes-item-label">Saber (${plan.criteriosEvaluacion.porcentajes.saber}%)</div>
              ${plan.criteriosEvaluacion.saber.map(s => `<div class="icfes-item-text">· ${s}</div>`).join('')}
            </div>
            <div class="icfes-item">
              <div class="icfes-item-label">Hacer (${plan.criteriosEvaluacion.porcentajes.hacer}%)</div>
              ${plan.criteriosEvaluacion.hacer.map(s => `<div class="icfes-item-text">· ${s}</div>`).join('')}
            </div>
            <div class="icfes-item">
              <div class="icfes-item-label">Ser (${plan.criteriosEvaluacion.porcentajes.ser}%)</div>
              ${plan.criteriosEvaluacion.ser.map(s => `<div class="icfes-item-text">· ${s}</div>`).join('')}
            </div>
          </div>
          <div class="eval-bars mt-4">
            <div class="eval-bar">
              <div class="eval-bar-track"><div class="eval-bar-fill saber" style="width:${plan.criteriosEvaluacion.porcentajes.saber}%"></div></div>
              <div class="eval-bar-label">Saber</div>
              <div class="eval-bar-pct">${plan.criteriosEvaluacion.porcentajes.saber}%</div>
            </div>
            <div class="eval-bar">
              <div class="eval-bar-track"><div class="eval-bar-fill hacer" style="width:${plan.criteriosEvaluacion.porcentajes.hacer}%"></div></div>
              <div class="eval-bar-label">Hacer</div>
              <div class="eval-bar-pct">${plan.criteriosEvaluacion.porcentajes.hacer}%</div>
            </div>
            <div class="eval-bar">
              <div class="eval-bar-track"><div class="eval-bar-fill ser" style="width:${plan.criteriosEvaluacion.porcentajes.ser}%"></div></div>
              <div class="eval-bar-label">Ser</div>
              <div class="eval-bar-pct">${plan.criteriosEvaluacion.porcentajes.ser}%</div>
            </div>
          </div>
        </div>

        <!-- Competencia ciudadana -->
        <div class="plan-section plan-section-full">
          <div class="plan-section-title">Competencia Ciudadana</div>
          <p class="text-sm text-secondary" style="line-height:var(--leading-loose)">${plan.competenciaCiudadana}</p>
        </div>
      </div>

      <!-- Articulación ICFES: Aprendizajes resueltos + Nivel de Desempeño -->
      ${this.renderPlanICFES(grado, plan)}

      <!-- Progresión Vertical compacta -->
      ${this.renderPlanProgresion(grado, plan)}

      <!-- Panel IA -->
      ${this.renderIAPanel()}

      <!-- Nav entre grados -->
      <div class="flex justify-between mt-4">
        ${parseInt(grado) > 8 ? `<button class="btn btn-ghost" data-action="navigate" data-value="#/${planBase}/${parseInt(grado)-1}/${periodo}">← Grado ${parseInt(grado)-1}°</button>` : '<span></span>'}
        ${parseInt(grado) < 11 ? `<button class="btn btn-ghost" data-action="navigate" data-value="#/${planBase}/${parseInt(grado)+1}/${periodo}">Grado ${parseInt(grado)+1}° →</button>` : '<span></span>'}
      </div>
    `;
  },

  // === PLAN: ICFES Aprendizajes resueltos + Nivel de Desempeño ===
  renderPlanICFES(grado, plan) {
    if (typeof getAprendizajesICFES !== 'function') return '';
    if (!plan.aprendizajesICFES || !plan.aprendizajesICFES.length) return '';

    const pruebaId = getPruebaParaGrado(grado);
    if (!pruebaId) return '';

    const areaICFES = this.state.area || 'matematicas';
    const todosAprendizajes = getAprendizajesICFES(areaICFES, pruebaId);
    const aprendizajesResueltos = plan.aprendizajesICFES
      .map(id => todosAprendizajes.find(a => a.id === id))
      .filter(Boolean);

    if (!aprendizajesResueltos.length) return '';

    // Nivel de desempeño
    const niveles = getNivelesDesempeno(areaICFES, pruebaId);
    const nivelActivo = niveles.find(n => n.nombre === plan.nivelEsperado);

    // Colores semánticos por nombre de nivel (fallback si no hay .color en datos)
    const NIVEL_COLORES = {
      'Insuficiente':  '#ef4444',
      'Mínimo':        '#f59e0b',
      'Satisfactorio': '#3b82f6',
      'Avanzado':      '#10b981',
    };

    return `
      <h2 class="section-title mt-4">Articulación ICFES — ${plan.nivelEsperado || ''}</h2>
      <p class="section-description">Aprendizajes y evidencias ICFES vinculados a este periodo. Nivel de desempeño esperado al finalizar.</p>

      <!-- Aprendizajes resueltos -->
      <div class="card card-accent mt-3">
        <div class="card-header">
          <span class="card-title">Aprendizajes ICFES Resueltos</span>
          <span class="badge badge-muted">${aprendizajesResueltos.length} aprendizajes</span>
        </div>
        <div class="card-body">
          ${aprendizajesResueltos.map(a => {
            const evidencias = (plan.evidenciasICFES || []).length > 0
              ? (a.evidencias.filter(e => plan.evidenciasICFES.includes(e.id)).length > 0
                  ? a.evidencias.filter(e => plan.evidenciasICFES.includes(e.id))
                  : a.evidencias)
              : a.evidencias;
            return `
            <details class="icfes-aprendizaje">
              <summary class="estandar-item" style="cursor:pointer; list-style:none">
                <div class="flex items-center gap-2" style="flex-wrap:wrap">
                  <span class="badge badge-accent" style="font-size:0.65rem">${a.competencia}</span>
                  <span class="badge badge-muted" style="font-size:0.6rem">${a.componente}</span>
                  <span>${a.enunciado}</span>
                </div>
              </summary>
              <div class="icfes-evidencias">
                ${evidencias.map(e => `
                  <div class="icfes-evidencia-item">
                    <span class="text-muted text-xs">${e.id}</span> ${e.enunciado}
                  </div>
                `).join('')}
              </div>
            </details>`;
          }).join('')}
        </div>
      </div>

      <!-- Nivel de Desempeño detallado: todos los niveles, activo destacado -->
      <div class="card mt-3">
        <div class="card-header">
          <span class="card-title">Nivel de Desempeño Detallado</span>
          <span class="badge" style="background:${nivelActivo?.color || NIVEL_COLORES[plan.nivelEsperado] || 'var(--accent)'}; color:white; font-size:0.7rem">${plan.nivelEsperado}</span>
        </div>
        <div class="card-body">
          <div class="nivel-cards-grid">
            ${niveles.map(nivel => {
              const color = nivel.color || NIVEL_COLORES[nivel.nombre] || '#888';
              const esActivo = nivel.nombre === plan.nivelEsperado;
              return `
              <div class="nivel-card ${esActivo ? 'activo' : 'inactivo'}" style="--nivel-color:${color}">
                <div class="nivel-card-header">
                  <div class="flex items-center gap-2">
                    <span class="nivel-dot" style="background:${color}"></span>
                    <strong class="nivel-nombre">${nivel.nombre}</strong>
                    <span class="text-muted text-xs">${nivel.rango[0]}–${nivel.rango[1]}</span>
                  </div>
                  ${esActivo ? '<span class="badge" style="background:' + color + '; color:white; font-size:0.6rem">Nivel del periodo</span>' : ''}
                </div>
                <p class="nivel-desc">${nivel.descripcion}</p>
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // === PLAN: Progresión Vertical compacta ===
  renderPlanProgresion(grado, plan) {
    if (typeof getLineaProgresion !== 'function') return '';
    if (!plan.tiposPensamiento || !plan.tiposPensamiento.length) return '';

    const area = this.state.area || 'matematicas';

    const TIPO_A_EJE_MAT = {
      'Numérico': 'numerico', 'Espacial': 'espacial', 'Métrico': 'metrico',
      'Aleatorio': 'aleatorio', 'Variacional': 'variacional'
    };
    const TIPO_A_EJE_LEN = {
      'Producción': 'produccion-textual', 'Comprensión': 'comprension',
      'Literatura': 'literatura', 'Medios': 'medios-comunicacion', 'Ética': 'etica-comunicacion'
    };
    const GRADO_A_GRUPO = { '8': '8-9', '9': '8-9', '10': '10-11', '11': '10-11' };

    const mapaEje = area === 'lenguaje' ? TIPO_A_EJE_LEN : TIPO_A_EJE_MAT;
    const tipoPrimario = plan.tiposPensamiento[0];
    const ejeId = mapaEje[tipoPrimario];
    if (!ejeId) return '';

    const grupoActual = GRADO_A_GRUPO[String(grado)];
    const linea = getLineaProgresion(area, ejeId);
    if (!linea.length) return '';

    // 3 cards: grupo anterior, actual, siguiente
    const idxActual = linea.findIndex(l => l.grupo === grupoActual);
    if (idxActual < 0) return '';

    const contexto = linea.slice(Math.max(0, idxActual - 1), idxActual + 2);
    const MAX_EBC = 3;

    return `
      <h2 class="section-title mt-4">Progresión Vertical — ${tipoPrimario}</h2>
      <p class="section-description">Cómo evoluciona este eje desde el grupo anterior hacia el siguiente.</p>

      <div class="progresion-compact mt-3">
        ${contexto.map(item => {
          const esActual = item.grupo === grupoActual;
          const ebs = item.estandares || [];
          const mostrados = ebs.slice(0, MAX_EBC);
          const hayMas = ebs.length > MAX_EBC;
          return `
          <div class="progresion-card ${esActual ? 'actual' : ''}">
            <div class="progresion-card-header">
              <span class="progresion-card-title">Grados ${item.grupo}</span>
              ${esActual ? '<span class="badge badge-accent" style="font-size:0.6rem">Actual</span>' : ''}
            </div>
            <div class="progresion-card-body">
              ${mostrados.length > 0
                ? mostrados.map(e => `<p class="text-sm text-secondary mb-2" style="line-height:var(--leading-loose)">· ${e}</p>`).join('')
                  + (hayMas ? `<p class="text-muted text-xs">... y ${ebs.length - MAX_EBC} más</p>` : '')
                : '<p class="text-muted text-sm">Sin datos</p>'
              }
            </div>
          </div>`;
        }).join('')}
      </div>

      <div class="flex justify-center mt-3">
        <a href="#/area/${area}/${grupoActual}/${ejeId}" class="btn btn-secondary btn-sm">Ver progresión completa K-11 →</a>
      </div>
    `;
  },

});
