// app-events.js — Event handlers, filter handlers, search, and IA handlers
// Extends App via Object.assign

Object.assign(App, {

  // === EVENTS ===
  bindEvents() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) return;
      const action = target.dataset.action;
      const val = target.dataset.value;

      switch (action) {
        case 'toggle-theme': this.toggleTheme(); break;
        case 'toggle-sidebar':
          this.state.sidebarOpen = !this.state.sidebarOpen;
          this.updateSidebar();
          break;
        case 'close-sidebar':
          this.state.sidebarOpen = false;
          this.updateSidebar();
          break;
        case 'navigate': this.navigate(val); break;
        case 'toggle-ia':
          this.state.iaPanelOpen = !this.state.iaPanelOpen;
          this.updateIAPanel();
          break;
        case 'export-pdf': Analytics.registrarAccion('export-pdf'); exportarPDF(); break;
        case 'export-json': {
          Analytics.registrarAccion('export-json');
          const data = prepararDatosExportacion({ tipo: this.state.vista, area: this.state.area, grupo: this.state.grupo, grado: this.state.grado, periodo: this.state.periodo });
          if (data) exportarJSON(data);
          break;
        }
        case 'export-institucional': Analytics.registrarAccion('export-institucional'); exportarPlanInstitucional(this.state.grado, this.state.periodo); break;
        case 'open-config': this.navigate('#/config'); break;
        case 'ia-action': this.handleIAAction(val); break;
        case 'ia-gemini': this.handleIAGemini(val); break;
        case 'start-simulacro': {
          const areaEl = document.getElementById('sim-select-area');
          const pruebaEl = document.getElementById('sim-select-prueba');
          const tiempoEl = document.getElementById('simulacro-tiempo');
          if (areaEl && pruebaEl) {
            this.state.simulacroTiempoConfig = tiempoEl ? parseInt(tiempoEl.value, 10) : 240;
            this.navigate(`#/simulacro/${areaEl.value}/${pruebaEl.value}`);
          }
          break;
        }
        case 'start-simulacro-card': {
          const tiempoEl = document.getElementById('simulacro-tiempo');
          this.state.simulacroTiempoConfig = tiempoEl ? parseInt(tiempoEl.value, 10) : 240;
          const areaCard = target.dataset.area;
          const pruebaCard = target.dataset.prueba;
          if (areaCard && pruebaCard) {
            this.navigate(`#/simulacro/${areaCard}/${pruebaCard}`);
          }
          break;
        }
        case 'simulacro-respuesta':
          if (this.state.simulacro && !this.state.simulacro.finalizado) {
            const idx = this.state.simulacro.actual;
            this.state.simulacro.respuestas[idx] = val;
            // Activar visualmente la opcion seleccionada
            document.querySelectorAll('.simulacro-opcion').forEach(el => {
              el.classList.toggle('selected', el.dataset.value === val);
            });
            // Habilitar boton siguiente/finalizar
            const btnNext = document.getElementById('sim-btn-next');
            if (btnNext) btnNext.disabled = false;
          }
          break;
        case 'simulacro-next':
          this.nextPregunta();
          break;
        case 'simulacro-finalizar':
          this.finalizarSimulacro();
          break;
        case 'simulacro-abandonar':
          if (confirm('Abandonar el simulacro. Se perderan las respuestas actuales. Continuar?')) {
            this.finalizarSimulacro(true);
          }
          break;
        case 'ver-especificaciones': {
          const areaSpec = target.dataset.area;
          const pruebaSpec = target.dataset.prueba;
          if (areaSpec && pruebaSpec) {
            let modalContainer = document.getElementById('modal-container');
            if (!modalContainer) {
              modalContainer = document.createElement('div');
              modalContainer.id = 'modal-container';
              document.body.appendChild(modalContainer);
            }
            modalContainer.innerHTML = this.renderEspecificacionesPrueba(areaSpec, pruebaSpec);
          }
          break;
        }
        case 'cerrar-especificaciones': {
          const cont = document.getElementById('modal-container');
          if (cont) cont.innerHTML = '';
          break;
        }
        case 'toggle-planes-para-aprendizaje': {
          const apId = target.dataset.aprendizaje;
          const areaAp = target.dataset.area;
          if (!apId || !areaAp) break;
          const containerId = 'planes-para-' + apId.replace(/[^a-z0-9-]/gi, '_');
          let container = document.getElementById(containerId);
          if (container) {
            container.style.display = container.style.display === 'none' ? 'block' : 'none';
            break;
          }
          container = document.createElement('div');
          container.id = containerId;
          container.className = 'planes-para-aprendizaje';
          const parentEl = target.closest('.icfes-aprendizaje');
          if (parentEl) parentEl.appendChild(container);
          const resultados = this._buscarAprendizajeEnPlanes(apId, areaAp);
          if (!resultados.length) {
            container.innerHTML = '<p class="text-xs text-muted" style="padding:4px 0">Este aprendizaje no aparece en ningun plan de periodo.</p>';
          } else {
            const prefixMap = { matematicas: 'plan', lenguaje: 'plan-lenguaje', naturales: 'plan-naturales', sociales: 'plan-sociales', ingles: 'plan-ingles' };
            const prefix = prefixMap[areaAp] || 'plan';
            container.innerHTML = '<div class="flex gap-2" style="flex-wrap:wrap;padding:4px 0">' +
              resultados.map(r => '<a class="badge badge-accent" style="cursor:pointer;text-decoration:none;font-size:0.7rem" data-action="navigate" data-value="#/' + prefix + '/' + r.grado + '/' + r.periodo + '">' + r.label + '</a>').join('') +
              '</div>';
          }
          break;
        }
        case 'toggle-estandar': {
          const area = target.dataset.area;
          const grupo = target.dataset.grupo;
          const idx = parseInt(target.dataset.idx, 10);
          Storage.toggleEstandarTrabajado(area, grupo, idx);
          // Toggle visual inmediato en el checkbox
          const wrap = target.closest('.cobertura-check-wrap');
          if (wrap) wrap.classList.toggle('checked');
          target.classList.toggle('checked');
          // Actualizar barra de progreso del eje/área si existe
          this._updateProgressBars(area, grupo);
          break;
        }
        case 'reset-progreso': {
          const area = target.dataset.area;
          const grupo = target.dataset.grupo;
          if (confirm('Reiniciar progreso de Grados ' + grupo + ' en ' + (AREAS_EBC[area]?.nombre || area) + '. Esta accion no se puede deshacer.')) {
            Storage.resetProgreso(area, grupo);
            this.render();
          }
          break;
        }
        case 'clear-analytics':
          if (confirm('Limpiar todas las estadísticas de uso. Esta acción no se puede deshacer.')) {
            Analytics.limpiar();
            this.render();
            this.showToast('Estadísticas borradas');
          }
          break;
        case 'limpiar-historial-simulacros':
          Storage.limpiarHistorialSimulacros();
          this.showToast('Historial limpiado');
          if (this.state.vista === 'dashboard') this.render();
          break;
        case 'start-simulacro-completo': {
          if (typeof PREGUNTAS_ICFES === 'undefined') {
            const mainEl = document.getElementById('main-content');
            if (mainEl) mainEl.innerHTML = '<div class="empty-state"><div class="empty-state-icon"><div class="loading-spinner"></div></div><div class="empty-state-title">Cargando preguntas...</div></div>';
            const scr = document.createElement('script');
            scr.src = 'src/data/preguntas-icfes.js';
            scr.onload = () => { this._initSimulacroCompletoState(); this.state.vista = 'simulacro-completo'; this.render(); };
            scr.onerror = () => { this.showToast('Error cargando preguntas.'); this.state.vista = 'simulacro'; this.render(); };
            document.head.appendChild(scr);
          } else {
            this._initSimulacroCompletoState();
            this.state.vista = 'simulacro-completo';
            this.render();
          }
          break;
        }
      }
    });

    // Keyboard navigation: Enter/Space on non-button elements with data-action
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const target = e.target.closest('[data-action]');
      if (!target) return;
      const tag = target.tagName.toLowerCase();
      if (tag === 'button' || tag === 'a' || tag === 'input' || tag === 'select') return;
      e.preventDefault();
      target.click();
    });

    // Search input
    document.addEventListener('input', (e) => {
      if (e.target.id === 'search-input') {
        this.handleSearch(e.target.value);
      }
    });

    // Select changes
    document.addEventListener('change', (e) => {
      if (e.target.id === 'select-ciclo') this.onCicloChange(e.target.value);
      if (e.target.id === 'select-grupo') this.onGrupoChange(e.target.value);
      if (e.target.id === 'select-area') this.onAreaChange(e.target.value);
      if (e.target.id === 'select-eje') this.onEjeChange(e.target.value);

      // Simulacro tiempo config
      if (e.target.id === 'simulacro-tiempo') {
        this.state.simulacroTiempoConfig = parseInt(e.target.value);
      }

      // Simulacro filter: area -> populate competencia/componente
      if (e.target.id === 'simulacro-filtro-area') {
        const area = e.target.value;
        this.state.simulacroFiltros.competencia = '';
        this.state.simulacroFiltros.componente = '';
        const compSel = document.getElementById('simulacro-filtro-competencia');
        const compoSel = document.getElementById('simulacro-filtro-componente');
        if (area && typeof getCompetenciasICFES === 'function') {
          const comps = getCompetenciasICFES(area);
          compSel.innerHTML = '<option value="">Todas</option>' + comps.map(c => '<option value="' + c + '">' + c + '</option>').join('');
          compSel.disabled = false;
          const componentes = getComponentesICFES(area);
          compoSel.innerHTML = '<option value="">Todos</option>' + componentes.map(c => '<option value="' + c + '">' + c + '</option>').join('');
          compoSel.disabled = false;
        } else {
          compSel.innerHTML = '<option value="">Todas</option>';
          compSel.disabled = true;
          compoSel.innerHTML = '<option value="">Todos</option>';
          compoSel.disabled = true;
        }
      }

      if (e.target.id === 'simulacro-filtro-competencia') {
        this.state.simulacroFiltros.competencia = e.target.value;
      }
      if (e.target.id === 'simulacro-filtro-componente') {
        this.state.simulacroFiltros.componente = e.target.value;
      }
      if (e.target.id === 'simulacro-filtro-num') {
        this.state.simulacroFiltros.numPreguntas = parseInt(e.target.value) || 0;
      }
      if (e.target.id === 'simulacro-filtro-repaso') {
        this.state.simulacroFiltros.modoRepaso = e.target.checked;
      }
      if (e.target.id === 'plan-filtro-competencia') {
        this.state.planFiltroCompetencia = e.target.value;
        const comp = e.target.value;
        document.querySelectorAll('.plan-section').forEach(sec => {
          if (!comp) { sec.classList.remove('plan-periodo-dim', 'plan-periodo-match'); return; }
          const text = sec.textContent.toLowerCase();
          if (text.includes(comp.toLowerCase())) {
            sec.classList.remove('plan-periodo-dim');
            sec.classList.add('plan-periodo-match');
          } else {
            sec.classList.remove('plan-periodo-match');
            sec.classList.add('plan-periodo-dim');
          }
        });
      }
    });
  },

  // === FILTER HANDLERS ===
  onCicloChange(ciclo) {
    const grupos = getGruposPorCiclo(ciclo);
    this.state.grupo = grupos[0] || '8-9';
    this.navigate(`#/area/${this.state.area || 'matematicas'}/${this.state.grupo}`);
  },

  onGrupoChange(grupo) {
    this.state.grupo = grupo;
    this.navigate(`#/area/${this.state.area || 'matematicas'}/${grupo}${this.state.eje ? '/' + this.state.eje : ''}`);
  },

  onAreaChange(area) {
    this.state.area = area;
    document.body.setAttribute('data-area', area);
    this.navigate(`#/area/${area}/${this.state.grupo || '8-9'}`);
  },

  onEjeChange(eje) {
    this.state.eje = eje || null;
    this.navigate(`#/area/${this.state.area}/${this.state.grupo}${eje ? '/' + eje : ''}`);
  },

  // === SEARCH ===
  handleSearch(query) {
    const results = document.getElementById('search-results');
    if (!results) return;

    if (query.length < 2) {
      results.innerHTML = '';
      results.style.display = 'none';
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.setAttribute('aria-expanded', 'false');
      return;
    }

    const items = buscarTodo(query);
    if (items.length === 0) {
      results.innerHTML = '<div class="search-result-item"><span class="text-muted text-sm">Sin resultados</span></div>';
      results.style.display = 'block';
      const searchInputNoRes = document.getElementById('search-input');
      if (searchInputNoRes) searchInputNoRes.setAttribute('aria-expanded', 'true');
      return;
    }

    const pruebaAGrupo = { 'saber-3': '1-3', 'saber-5': '4-5', 'saber-9': '8-9', 'saber-11': '10-11' };
    results.innerHTML = items.slice(0, 8).map(item => {
      const grupoNav = item.grupo || (item.prueba ? pruebaAGrupo[item.prueba] : null) || gradoAGrupoEBC(item.grado || '8');
      const grupoLabel = item.grupo || (item.prueba ? pruebaAGrupo[item.prueba] : null) || ('Grado ' + item.grado);
      return `
        <div class="search-result-item" role="option" data-action="navigate" data-value="#/area/${item.area}/${grupoNav}">
          <span class="search-result-type">${item.tipo.toUpperCase()} · ${AREAS_EBC[item.area]?.nombre || item.area}</span>
          <div class="search-result-text">${highlightText(item.texto, query)}</div>
          <span class="badge badge-muted">${grupoLabel}</span>
        </div>
      `;
    }).join('');
    results.style.display = 'block';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.setAttribute('aria-expanded', 'true');
  },

  // === IA HANDLERS ===
  async handleIAAction(tipo) {
    const resultado = await ejecutarIA(tipo, {
      area: this.state.area,
      grado: this.state.grado || (this.state.grupo ? grupoAGrados(this.state.grupo)[0] : 8),
      periodo: this.state.periodo || 1,
      plan: getPlanPeriodo(String(this.state.grado || 8), this.state.periodo || 1)
    });

    if (!resultado || resultado.error) {
      this.showIAResponse(resultado?.error || 'Error desconocido');
      return;
    }

    // Show token estimate
    this.updateTokenEstimate(resultado.tokensEstimados);

    // Execute
    const resp = await resultado.ejecutar();
    if (resp.error) {
      this.showIAResponse(`Error: ${resp.mensaje}`);
    } else {
      this.showIAResponse(resp.texto);
    }
  },

  handleIAGemini(tipo) {
    const resultado = ejecutarIA(tipo, {
      area: this.state.area,
      grado: this.state.grado || 8,
      periodo: this.state.periodo || 1,
      plan: getPlanPeriodo(String(this.state.grado || 8), this.state.periodo || 1)
    });

    // ejecutarIA is sync for prompt building
    if (resultado.then) {
      resultado.then(r => {
        if (r.prompt) IA.abrirEnGemini(r.prompt);
      });
    }
  },

  showIAResponse(texto) {
    const el = document.getElementById('ia-response');
    if (el) {
      el.textContent = texto;
      el.classList.remove('loading');
    }
  },

  updateTokenEstimate(tokens) {
    const fill = document.getElementById('ia-token-fill');
    const label = document.getElementById('ia-token-label');
    if (fill) fill.style.width = Math.min(tokens / 10, 100) + '%';
    if (label) label.textContent = `~${tokens} tokens`;
  },

  updateSidebar() {
    const sidebar = document.querySelector('.app-sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    if (sidebar) sidebar.classList.toggle('open', this.state.sidebarOpen);
    if (backdrop) backdrop.classList.toggle('open', this.state.sidebarOpen);
    const menuBtn = document.querySelector('[data-action="toggle-sidebar"]');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', this.state.sidebarOpen ? 'true' : 'false');
  },

  updateIAPanel() {
    const panel = document.querySelector('.ia-panel');
    if (panel) panel.classList.toggle('open', this.state.iaPanelOpen);
  },

});
