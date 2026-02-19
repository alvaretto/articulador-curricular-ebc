// === COBERTURA: HELPERS + VISTA ===
// Extends App with all cobertura-related methods.
// Loaded after app.js; requires App to be defined.

Object.assign(App, {

  // === COBERTURA: HELPERS ===

  // Calcula total de estándares de un área+grupo sumando todos los ejes
  _totalEstandaresGrupo(area, grupo) {
    const ejes = getEjesDeArea(area);
    return ejes.reduce((sum, eje) => sum + getEstandares(area, grupo, eje.id).length, 0);
  },

  // Nivel visual según porcentaje
  _progressLevel(pct) {
    if (pct >= 70) return 'high';
    if (pct >= 30) return 'mid';
    return 'low';
  },

  // HTML de una barra de progreso
  _renderProgressBar(progreso) {
    const level = this._progressLevel(progreso.porcentaje);
    return `
      <div class="cobertura-progress" id="cob-bar-${progreso._id || ''}">
        <div class="cobertura-progress-track">
          <div class="cobertura-progress-bar" data-level="${level}" style="width:${progreso.porcentaje}%"></div>
        </div>
        <span class="cobertura-progress-label">${progreso.trabajados}/${progreso.total}</span>
        <span class="cobertura-progress-pct" data-level="${level}">${progreso.porcentaje}%</span>
      </div>
    `;
  },

  // Actualizar barras de progreso en DOM sin re-render completo
  _updateProgressBars(area, grupo) {
    const total = this._totalEstandaresGrupo(area, grupo);
    const progreso = Storage.getProgreso(area, grupo, total);
    const level = this._progressLevel(progreso.porcentaje);

    // Barra del grupo en vista área
    const barEl = document.getElementById('cob-area-bar');
    if (barEl) {
      barEl.querySelector('.cobertura-progress-bar').style.width = progreso.porcentaje + '%';
      barEl.querySelector('.cobertura-progress-bar').dataset.level = level;
      barEl.querySelector('.cobertura-progress-label').textContent = progreso.trabajados + '/' + total;
      const pctEl = barEl.querySelector('.cobertura-progress-pct');
      pctEl.textContent = progreso.porcentaje + '%';
      pctEl.dataset.level = level;
    }

    // Badge en sidebar
    const badge = document.getElementById('cob-sidebar-badge');
    if (badge) {
      const textoNuevo = this._calcProgresoGeneral();
      badge.textContent = textoNuevo;
      badge.style.display = textoNuevo ? '' : 'none';
    }
  },

  // Calcular progreso general de todas las áreas (para sidebar badge)
  _calcProgresoGeneral() {
    let sumaTrabajados = 0;
    let sumaTotal = 0;
    for (const areaId of Object.keys(AREAS_EBC)) {
      for (const grupo of GRUPOS_EBC_ORDEN) {
        const total = this._totalEstandaresGrupo(areaId, grupo);
        if (total > 0) {
          sumaTrabajados += Storage.getEstandaresTrabajados(areaId, grupo).size;
          sumaTotal += total;
        }
      }
    }
    if (sumaTotal === 0) return '';
    const pct = Math.round((sumaTrabajados / sumaTotal) * 100);
    return pct + '%';
  },

  // Badge para sidebar
  _sidebarCoberturaBadge() {
    const texto = this._calcProgresoGeneral();
    if (!texto) return '';
    return `<span id="cob-sidebar-badge" class="badge badge-muted ml-auto" style="font-size:0.65rem">${texto}</span>`;
  },

  // Barra de progreso del grupo actual en vista área
  renderCoberturaBarraArea(area, grupo) {
    const total = this._totalEstandaresGrupo(area, grupo);
    if (total === 0) return '';
    const progreso = Storage.getProgreso(area, grupo, total);
    const level = this._progressLevel(progreso.porcentaje);
    return `
      <div id="cob-area-bar" style="margin-bottom:var(--sp-2)">
        <div class="flex items-center justify-between" style="margin-bottom:2px">
          <span class="text-xs text-muted">Cobertura Grados ${grupo}</span>
          <a href="#/cobertura/${area}/${grupo}" class="text-xs" style="color:var(--accent)">Ver detalle →</a>
        </div>
        <div class="cobertura-progress" style="padding:0">
          <div class="cobertura-progress-track">
            <div class="cobertura-progress-bar" data-level="${level}" style="width:${progreso.porcentaje}%"></div>
          </div>
          <span class="cobertura-progress-label">${progreso.trabajados}/${progreso.total} estándares</span>
          <span class="cobertura-progress-pct" data-level="${level}">${progreso.porcentaje}%</span>
        </div>
      </div>
    `;
  },

  // Card de resumen de cobertura en home
  renderCoberturaResumen() {
    // Verificar si hay algún progreso
    let hayProgreso = false;
    for (const areaId of Object.keys(AREAS_EBC)) {
      for (const grupo of GRUPOS_EBC_ORDEN) {
        if (Storage.getEstandaresTrabajados(areaId, grupo).size > 0) {
          hayProgreso = true;
          break;
        }
      }
      if (hayProgreso) break;
    }

    return `
      <div class="card cobertura-summary mt-4">
        <div class="card-header">
          <span class="card-title">📊 Progreso de Cobertura</span>
          <a href="#/cobertura" class="btn btn-ghost btn-sm">Ver todo</a>
        </div>
        <div class="card-body">
          ${hayProgreso ? `
            <div class="cobertura-summary-grid">
              ${Object.entries(AREAS_EBC).map(([id, info]) => {
                const gruposConTotales = GRUPOS_EBC_ORDEN.map(g => ({ grupo: g, total: this._totalEstandaresGrupo(id, g) }));
                const prog = Storage.getProgresoGeneral(id, gruposConTotales);
                if (prog.total === 0) return '';
                const level = this._progressLevel(prog.porcentaje);
                return `
                  <div class="cobertura-summary-item" data-action="navigate" data-value="#/cobertura/${id}">
                    <div class="cobertura-summary-item-name">${info.nombre}</div>
                    <div class="cobertura-progress" style="padding:0; margin-top:var(--sp-2)">
                      <div class="cobertura-progress-track">
                        <div class="cobertura-progress-bar" data-level="${level}" style="width:${prog.porcentaje}%"></div>
                      </div>
                      <span class="cobertura-progress-pct" data-level="${level}">${prog.porcentaje}%</span>
                    </div>
                    <div style="font-size:var(--text-xs); color:var(--text-muted); margin-top:var(--sp-1)">${prog.trabajados}/${prog.total}</div>
                  </div>
                `;
              }).filter(Boolean).join('')}
            </div>
          ` : `
            <p class="text-sm text-secondary">
              Aun no has marcado ningún estándar como trabajado. Navega a un área y marca los estándares que ya has trabajado en clase.
            </p>
            <a href="#/cobertura" class="btn btn-secondary btn-sm mt-3">Ir a Cobertura</a>
          `}
        </div>
      </div>
    `;
  },

  // === VISTA: COBERTURA ===
  renderCobertura() {
    const area = this.state.coberturaArea;
    const grupo = this.state.coberturaGrupo;

    // Detalle de grupo específico
    if (area && grupo) {
      return this.renderCoberturaDetalleGrupo(area, grupo);
    }

    // Detalle de área (todos sus grupos)
    if (area) {
      return this.renderCoberturaDetalleArea(area);
    }

    // Vista general: todas las áreas
    return this.renderCoberturaGeneral();
  },

  renderCoberturaGeneral() {
    return `
      <h1 class="section-title">Cobertura de Estándares</h1>
      <p class="section-description">
        Seguimiento del avance en la enseñanza de los Estándares Básicos de Competencias.
        Marque los estándares trabajados en clase desde la vista de cada área.
      </p>

      <div class="cobertura-grid">
        ${Object.entries(AREAS_EBC).map(([id, info]) => {
          const gruposConTotales = GRUPOS_EBC_ORDEN.map(g => ({ grupo: g, total: this._totalEstandaresGrupo(id, g) }));
          const prog = Storage.getProgresoGeneral(id, gruposConTotales);
          const level = this._progressLevel(prog.porcentaje);
          const colorVar = id === 'matematicas' ? '--mat' : id === 'lenguaje' ? '--len' : id === 'ciencias-naturales' ? '--nat' : '--soc';
          return `
            <div class="cobertura-area-card" data-action="navigate" data-value="#/cobertura/${id}"
                 style="--accent:var(${colorVar})">
              <div class="cobertura-area-card-icon">${info.icon}</div>
              <div class="cobertura-area-card-name">${info.nombre}</div>
              <div class="cobertura-area-card-meta">${prog.total} estándares · 5 grupos</div>
              <div class="cobertura-progress" style="padding:0">
                <div class="cobertura-progress-track">
                  <div class="cobertura-progress-bar" data-level="${level}" style="width:${prog.porcentaje}%"></div>
                </div>
                <span class="cobertura-progress-pct" data-level="${level}">${prog.porcentaje}%</span>
              </div>
              <div style="font-size:var(--text-xs); color:var(--text-muted); margin-top:var(--sp-1)">${prog.trabajados}/${prog.total} trabajados</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  renderCoberturaDetalleArea(area) {
    const info = AREAS_EBC[area];
    const gruposConTotales = GRUPOS_EBC_ORDEN.map(g => ({ grupo: g, total: this._totalEstandaresGrupo(area, g) }));
    const progGeneral = Storage.getProgresoGeneral(area, gruposConTotales);
    const levelGeneral = this._progressLevel(progGeneral.porcentaje);

    return `
      <div class="flex items-center gap-3 mb-2">
        <button class="btn btn-ghost btn-sm" data-action="navigate" data-value="#/cobertura">← Todas las áreas</button>
      </div>

      <h1 class="section-title">${info?.icon || ''} ${info?.nombre || area} — Cobertura</h1>

      <div class="cobertura-progress" style="padding:0; margin-bottom:var(--sp-4)">
        <div class="cobertura-progress-track">
          <div class="cobertura-progress-bar" data-level="${levelGeneral}" style="width:${progGeneral.porcentaje}%"></div>
        </div>
        <span class="cobertura-progress-label">${progGeneral.trabajados}/${progGeneral.total} totales</span>
        <span class="cobertura-progress-pct" data-level="${levelGeneral}">${progGeneral.porcentaje}%</span>
      </div>

      <!-- Tabs de grupos -->
      <div class="cobertura-grupos-tabs">
        ${GRUPOS_EBC_ORDEN.map(g => {
          const total = this._totalEstandaresGrupo(area, g);
          if (total === 0) return '';
          const prog = Storage.getProgreso(area, g, total);
          const level = this._progressLevel(prog.porcentaje);
          return `
            <button class="tab" data-action="navigate" data-value="#/cobertura/${area}/${g}"
                    style="${prog.trabajados > 0 ? 'border-color:var(--' + (level === 'high' ? 'success' : level === 'mid' ? 'warning' : 'danger') + ')' : ''}">
              Grados ${g}
              ${prog.trabajados > 0 ? `<span class="badge ml-1" style="font-size:0.6rem;background:var(--${level === 'high' ? 'success' : level === 'mid' ? 'warning' : 'danger'});color:white">${prog.porcentaje}%</span>` : ''}
            </button>
          `;
        }).filter(Boolean).join('')}
      </div>

      <!-- Cards de grupos -->
      ${GRUPOS_EBC_ORDEN.map(g => {
        const total = this._totalEstandaresGrupo(area, g);
        if (total === 0) return '';
        const prog = Storage.getProgreso(area, g, total);
        const level = this._progressLevel(prog.porcentaje);
        return `
          <div class="cobertura-grupo-card">
            <div class="cobertura-grupo-header">
              <span class="cobertura-grupo-title">Grados ${g}</span>
              <div class="flex items-center gap-3" style="flex:1; margin-left:var(--sp-4)">
                <div class="cobertura-progress" style="padding:0; flex:1">
                  <div class="cobertura-progress-track">
                    <div class="cobertura-progress-bar" data-level="${level}" style="width:${prog.porcentaje}%"></div>
                  </div>
                  <span class="cobertura-progress-label">${prog.trabajados}/${prog.total}</span>
                  <span class="cobertura-progress-pct" data-level="${level}">${prog.porcentaje}%</span>
                </div>
              </div>
              <div class="flex gap-2">
                <button class="btn btn-ghost btn-sm" data-action="navigate" data-value="#/cobertura/${area}/${g}">
                  Ver detalle
                </button>
                ${prog.trabajados > 0 ? `
                  <button class="btn-reset-progreso" data-action="reset-progreso" data-area="${area}" data-grupo="${g}">
                    Reiniciar
                  </button>
                ` : ''}
              </div>
            </div>
          </div>
        `;
      }).filter(Boolean).join('')}
    `;
  },

  renderCoberturaDetalleGrupo(area, grupo) {
    const info = AREAS_EBC[area];
    const ejes = getEjesDeArea(area);
    const total = this._totalEstandaresGrupo(area, grupo);
    const prog = Storage.getProgreso(area, grupo, total);
    const level = this._progressLevel(prog.porcentaje);
    const trabajados = Storage.getEstandaresTrabajados(area, grupo);

    // Calcular offset global por eje
    let offsetIdx = 0;
    const ejeOffset = {};
    for (const eje of ejes) {
      ejeOffset[eje.id] = offsetIdx;
      offsetIdx += getEstandares(area, grupo, eje.id).length;
    }

    return `
      <div class="flex items-center gap-3 mb-2" style="flex-wrap:wrap">
        <button class="btn btn-ghost btn-sm" data-action="navigate" data-value="#/cobertura/${area}">← ${info?.nombre || area}</button>
        <button class="btn btn-ghost btn-sm" data-action="navigate" data-value="#/area/${area}/${grupo}">Ver estándares completos</button>
      </div>

      <h1 class="section-title">${info?.icon || ''} ${info?.nombre || area} — Grados ${grupo}</h1>

      <div id="cob-area-bar">
        <div class="cobertura-progress" style="padding:0; margin-bottom:var(--sp-4)">
          <div class="cobertura-progress-track">
            <div class="cobertura-progress-bar" data-level="${level}" style="width:${prog.porcentaje}%"></div>
          </div>
          <span class="cobertura-progress-label">${prog.trabajados}/${prog.total} trabajados</span>
          <span class="cobertura-progress-pct" data-level="${level}">${prog.porcentaje}%</span>
          ${prog.trabajados > 0 ? `
            <button class="btn-reset-progreso" data-action="reset-progreso" data-area="${area}" data-grupo="${grupo}" style="margin-left:var(--sp-2)">
              Reiniciar
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Estándares por eje con checkboxes -->
      ${ejes.map(eje => {
        const ests = getEstandares(area, grupo, eje.id);
        if (!ests.length) return '';
        const base = ejeOffset[eje.id];
        const trabajadosEje = ests.filter((_, i) => trabajados.has(base + i)).length;
        return `
          <div class="cobertura-grupo-card">
            <div class="cobertura-grupo-header">
              <span class="cobertura-grupo-title">${eje.nombre}</span>
              <span class="badge badge-muted">${trabajadosEje}/${ests.length}</span>
            </div>
            <div class="cobertura-grupo-body">
              ${ests.map((e, i) => {
                const globalIdx = base + i;
                const checked = trabajados.has(globalIdx);
                return `
                  <div class="cobertura-check-wrap ${checked ? 'checked' : ''}"
                       data-action="toggle-estandar"
                       data-area="${area}"
                       data-grupo="${grupo}"
                       data-idx="${globalIdx}">
                    <div class="cobertura-check ${checked ? 'checked' : ''}"
                         data-action="toggle-estandar"
                         data-area="${area}"
                         data-grupo="${grupo}"
                         data-idx="${globalIdx}"></div>
                    <span class="cobertura-estandar-texto">${e}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    `;
  }

});
