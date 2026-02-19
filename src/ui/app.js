// app.js — Articulador Curricular - Main Application
// Router hash + rendering + event handlers

const EJE_SHORT_LABELS = {
  'Pensamiento Numérico y Sistemas Numéricos': 'Numérico',
  'Pensamiento Espacial y Sistemas Geométricos': 'Espacial',
  'Pensamiento Métrico y Sistemas de Medidas': 'Métrico',
  'Pensamiento Aleatorio y Sistemas de Datos': 'Aleatorio',
  'Pensamiento Variacional y Sistemas Algebraicos': 'Variacional',
  'Producción Textual': 'Producción',
  'Comprensión e Interpretación Textual': 'Comprensión',
  'Literatura': 'Literatura',
  'Medios de Comunicación y Otros Sistemas Simbólicos': 'Medios',
  'Ética de la Comunicación': 'Ética',
  'Entorno Vivo': 'Entorno Vivo',
  'Entorno Físico': 'Entorno Físico',
  'Ciencia, Tecnología y Sociedad': 'CTS',
  'Me Aproximo al Conocimiento como Científico Natural': 'Método Científico',
  'Relaciones con la Historia y las Culturas': 'Historia',
  'Relaciones Espaciales y Ambientales': 'Territorio',
  'Relaciones Ético-Políticas': 'Ético-Político'
};

// Mapeo eje EBC → componente ICFES (usado en renderICFESSection y renderEstandaresPorEje)
const EJE_A_COMPONENTE = {
  'numerico': 'numerico-variacional', 'variacional': 'numerico-variacional',
  'espacial': 'geometrico-metrico', 'metrico': 'geometrico-metrico',
  'aleatorio': 'aleatorio',
  'comprension': 'semantico', 'literatura': 'semantico',
  'produccion': 'sintactico', 'medios': 'pragmatico', 'etica': 'pragmatico',
  'entorno-vivo': 'entorno-vivo', 'entorno-fisico': 'entorno-fisico',
  'cts': 'cts', 'aprox-cientifica': 'cts',
  'historico-cultural': 'conocimientos-sociales', 'espacial-ambiental': 'conocimientos-sociales',
  'etico-politico': 'multiperspectividad',
  'escucha': 'pragmatico', 'lectura': 'lexical', 'escritura': 'gramatical',
  'monologo': 'pragmatico', 'conversacion': 'pragmatico'
};
const COMPONENTE_A_EJES = {};
for (const [eje, comp] of Object.entries(EJE_A_COMPONENTE)) {
  if (!COMPONENTE_A_EJES[comp]) COMPONENTE_A_EJES[comp] = [];
  COMPONENTE_A_EJES[comp].push(eje);
}

const App = {
  state: {
    area: null,
    grupo: null,
    eje: null,
    grado: null,
    periodo: null,
    vista: 'home', // home | area | plan | busqueda | config | simulacro | simulacro-activo | cobertura
    coberturaArea: null,  // área seleccionada en vista cobertura
    coberturaGrupo: null, // grupo seleccionado en vista cobertura
    sidebarOpen: false,
    iaPanelOpen: false,
    searchQuery: '',
    simulacro: null, // { area, pruebaId, preguntas, respuestas, actual, tiempoInicio, tiempoLimite, timerInterval, finalizado }
    simulacroFiltros: { competencia: '', componente: '', numPreguntas: 0, modoRepaso: false },
    planFiltroCompetencia: ''
  },

  init() {
    Analytics.registrarSesion();
    this.restoreState();
    this.bindEvents();
    this.applyTheme();
    this.render();
    window.addEventListener('hashchange', () => this.onHashChange());
    this.onHashChange();
  },

  // === THEME ===
  applyTheme() {
    const prefs = Storage.getPreferencias();
    if (prefs.tema === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else if (prefs.tema === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
  },

  toggleTheme() {
    const prefs = Storage.getPreferencias();
    const temas = ['auto', 'dark', 'light'];
    const idx = temas.indexOf(prefs.tema || 'auto');
    prefs.tema = temas[(idx + 1) % 3];
    Storage.setPreferencias(prefs);
    this.applyTheme();
    this.updateThemeIcon();
  },

  updateThemeIcon() {
    const prefs = Storage.getPreferencias();
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = prefs.tema === 'dark' ? '☽' : prefs.tema === 'light' ? '☀' : '◐';
  },

  // === ROUTING ===
  onHashChange() {
    const hash = location.hash.slice(1) || '/';
    const parts = hash.split('/').filter(Boolean);

    if (parts[0] === 'area' && parts[1]) {
      this.state.vista = 'area';
      this.state.area = parts[1];
      this.state.grupo = parts[2] || '8-9';
      this.state.eje = parts[3] || null;
    } else if (parts[0] === 'plan' && parts[1]) {
      this.state.vista = 'plan';
      this.state.grado = parts[1];
      this.state.periodo = parseInt(parts[2]) || 1;
      this.state.area = 'matematicas';
    } else if (parts[0] === 'plan-lenguaje' && parts[1]) {
      this.state.vista = 'plan';
      this.state.grado = parts[1];
      this.state.periodo = parseInt(parts[2]) || 1;
      this.state.area = 'lenguaje';
    } else if (parts[0] === 'plan-naturales' && parts[1]) {
      this.state.vista = 'plan';
      this.state.grado = parts[1];
      this.state.periodo = parseInt(parts[2]) || 1;
      this.state.area = 'naturales';
    } else if (parts[0] === 'plan-sociales' && parts[1]) {
      this.state.vista = 'plan';
      this.state.grado = parts[1];
      this.state.periodo = parseInt(parts[2]) || 1;
      this.state.area = 'sociales';
    } else if (parts[0] === 'plan-ingles' && parts[1]) {
      this.state.vista = 'plan';
      this.state.grado = parts[1];
      this.state.periodo = parseInt(parts[2]) || 1;
      this.state.area = 'ingles';
    } else if (parts[0] === 'busqueda') {
      this.state.vista = 'busqueda';
      this.state.searchQuery = decodeURIComponent(parts[1] || '');
    } else if (parts[0] === 'config') {
      this.state.vista = 'config';
    } else if (parts[0] === 'dashboard') {
      this.state.vista = 'dashboard';
    } else if (parts[0] === 'cobertura') {
      this.state.vista = 'cobertura';
      this.state.coberturaArea = parts[1] || null;
      this.state.coberturaGrupo = parts[2] || null;
    } else if (parts[0] === 'simulacro-completo') {
      this.state.vista = 'simulacro-completo';
    } else if (parts[0] === 'simulacro' && parts[1] && parts[2]) {
      // Simulacro activo: #/simulacro/{area}/{pruebaId}
      // Solo iniciar si no hay simulacro activo ya para ese area+prueba
      const area = parts[1];
      const pruebaId = parts[2];
      if (!this.state.simulacro || this.state.simulacro.area !== area || this.state.simulacro.pruebaId !== pruebaId) {
        this.startSimulacro(area, pruebaId);
      }
      this.state.vista = 'simulacro-activo';
    } else if (parts[0] === 'simulacro') {
      // Si había simulacro activo, detener el timer
      if (this.state.simulacro && this.state.simulacro.timerInterval) {
        clearInterval(this.state.simulacro.timerInterval);
        this.state.simulacro.timerInterval = null;
      }
      this.state.vista = 'simulacro';
    } else {
      this.state.vista = 'home';
    }

    Analytics.registrarVista(this.state.vista, this.state.area || this.state.grado || '');
    this.saveState();
    this.render();
    // Focus management for screen readers
    requestAnimationFrame(() => {
      const h1 = document.querySelector('#main-content h1, #main-content .section-title');
      if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus(); }
    });
  },

  navigate(hash) {
    location.hash = hash;
  },

  // === STATE PERSISTENCE ===
  saveState() {
    Storage.setUltimaVista({ area: this.state.area, grupo: this.state.grupo, eje: this.state.eje });
  },

  restoreState() {
    const last = Storage.getUltimaVista();
    if (last) {
      this.state.area = last.area;
      this.state.grupo = last.grupo;
      this.state.eje = last.eje;
    }
  },

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

  // === MAIN RENDER ===
  // Logo dinámico por área
  LOGO_POR_AREA: {
    matematicas: 'src/assets/logo-azul.png',
    lenguaje: 'src/assets/logo-morado.png',
    naturales: 'src/assets/logo-verde.png',
    sociales: 'src/assets/logo-naranja.png',
    ingles: 'src/assets/logo-rojo.png',
    _default: 'src/assets/logo-default.png'
  },

  updateLogo() {
    const img = document.getElementById('header-logo-img');
    if (!img) return;
    const area = this.state.area;
    img.src = this.LOGO_POR_AREA[area] || this.LOGO_POR_AREA._default;
  },

  render() {
    document.body.setAttribute('data-area', this.state.area || 'matematicas');
    this.updateThemeIcon();
    this.updateLogo();

    const main = document.getElementById('main-content');
    if (!main) return;

    switch (this.state.vista) {
      case 'home': main.innerHTML = this.renderHome(); break;
      case 'area': main.innerHTML = this.renderArea(); break;
      case 'plan': main.innerHTML = this.renderPlan(); break;
      case 'busqueda': main.innerHTML = this.renderBusqueda(); break;
      case 'config': main.innerHTML = this.renderConfig(); break;
      case 'simulacro': main.innerHTML = this.renderSimulacro(); break;
      case 'dashboard': main.innerHTML = this.renderDashboard(); break;
      case 'cobertura': main.innerHTML = this.renderCobertura(); break;
      case 'simulacro-completo':
        if (this.state.simulacro && this.state.simulacro.finalizado) {
          main.innerHTML = this.renderSimulacroCompletoResultados();
        } else if (this.state.simulacro && this.state.simulacro.esMultiArea) {
          main.innerHTML = this.renderSimulacroActivo();
          this.startTimer();
        } else {
          main.innerHTML = this.renderSimulacro();
        }
        break;
      case 'simulacro-activo':
        if (this.state.simulacro && this.state.simulacro.finalizado) {
          main.innerHTML = this.renderSimulacroResultados();
        } else {
          main.innerHTML = this.renderSimulacroActivo();
          this.startTimer();
        }
        break;
    }

    this.renderSidebar();
  },

  // === VIEW: HOME ===
  renderHome() {
    const inst = Storage.getInstitucion();
    return `
      <div class="print-header">
        <div class="print-header-title">Articulador Curricular</div>
        <div class="print-header-subtitle">${inst.nombre || 'Continuo Cognitivo'} · ${new Date().getFullYear()}</div>
      </div>

      <h1 class="section-title">Diseño Curricular</h1>
      <p class="section-description">
        Navegue los Estándares Básicos de Competencias, DBA y aprendizajes ICFES alineados a las pruebas Saber.
        Analice la progresión vertical entre grados y genere articulaciones curriculares. Seleccione un área para comenzar.
      </p>

      <div class="areas-grid">
        ${this.renderAreaCards()}
      </div>

      ${this.renderQuickFilters()}

      ${this.renderCoberturaResumen()}

      <div class="ia-panel" id="ia-panel-home">
        <div class="ia-panel-header" data-action="toggle-ia">
          <div class="ia-panel-title"><span class="ia-dot"></span> Inteligencia Pedagógica</div>
          <span class="badge badge-ia">Gemini</span>
        </div>
        <div class="ia-panel-body">
          <p class="text-sm text-secondary mb-4">
            Configure su API key de Gemini para obtener articulaciones personalizadas, o use el botón "Abrir en Gemini" para consultas sin costo.
          </p>
          <div class="flex gap-2">
            <button class="btn btn-secondary btn-sm" data-action="open-config">Configurar API Key</button>
            <button class="btn btn-ia btn-sm" data-action="ia-gemini" data-value="sugerenciaPedagogica">
              Abrir en Gemini
            </button>
          </div>
        </div>
      </div>
    `;
  },

  renderAreaCards() {
    return Object.entries(AREAS_EBC).map(([id, info]) => {
      const ejes = getEjesDeArea(id);
      return `
        <div class="area-card card-accent ${id.split('-')[0]}" data-action="navigate" data-value="#/area/${id}/8-9" style="--accent: var(--${id === 'matematicas' ? 'mat' : id === 'lenguaje' ? 'len' : id === 'ciencias-naturales' ? 'nat' : 'soc'})">
          <div class="area-card-icon">${info.icon}</div>
          <div class="area-card-name">${info.nombre}</div>
          <div class="chip-group mt-2">
            ${ejes.slice(0, 3).map(e => {
              const label = EJE_SHORT_LABELS[e.nombre] || e.nombre.split(' ')[0];
              return '<span class="badge badge-muted">' + label + '</span>';
            }).join('')}
            ${ejes.length > 3 ? `<span class="badge badge-muted">+${ejes.length - 3}</span>` : ''}
          </div>
          <div class="area-card-count mt-2">${ejes.length} ejes · 5 grupos de grados</div>
        </div>
      `;
    }).join('');
  },

  renderQuickFilters() {
    return `
      <div class="card mt-4">
        <div class="card-header">
          <span class="card-title">Acceso Rápido por Grado</span>
        </div>
        <div class="card-body">
          <div class="filter-bar" style="border:none; padding:0; background:none;">
            <div class="select-wrap">
              <label class="select-label">Ciclo</label>
              <select class="select" id="select-ciclo">
                ${Object.entries(CICLOS).map(([id, c]) => `<option value="${id}">${c.nombre}</option>`).join('')}
              </select>
            </div>
            <div class="select-wrap">
              <label class="select-label">Área</label>
              <select class="select" id="select-area">
                ${Object.entries(AREAS_EBC).map(([id, a]) => `<option value="${id}">${a.nombre}</option>`).join('')}
              </select>
            </div>
            <button class="btn btn-primary" onclick="App.navigate('#/area/' + document.getElementById('select-area').value + '/' + getGruposPorCiclo(document.getElementById('select-ciclo').value)[0])">
              Ver Estándares
            </button>
          </div>

          <div class="flex gap-2 mt-4" style="flex-wrap:wrap">
            ${['6','7','8','9','10','11'].map(g => `
              <button class="btn btn-secondary btn-sm" data-action="navigate" data-value="#/plan/${g}/1">
                Plan Matemáticas ${g}°
              </button>
            `).join('')}
          </div>
          <div class="flex gap-2 mt-2" style="flex-wrap:wrap">
            ${['6','7','8','9','10','11'].map(g => `
              <button class="btn btn-secondary btn-sm" data-action="navigate" data-value="#/plan-lenguaje/${g}/1">
                Plan Lenguaje ${g}°
              </button>
            `).join('')}
          </div>
          <div class="flex gap-2 mt-2" style="flex-wrap:wrap">
            ${['6','7','8','9','10','11'].map(g => `
              <button class="btn btn-secondary btn-sm" data-action="navigate" data-value="#/plan-naturales/${g}/1">
                Plan Naturales ${g}°
              </button>
            `).join('')}
          </div>
          <div class="flex gap-2 mt-2" style="flex-wrap:wrap">
            ${['6','7','8','9','10','11'].map(g => `
              <button class="btn btn-secondary btn-sm" data-action="navigate" data-value="#/plan-sociales/${g}/1">
                Plan Sociales ${g}°
              </button>
            `).join('')}
          </div>
          <div class="flex gap-2 mt-2" style="flex-wrap:wrap">
            ${['6','7','8','9','10','11'].map(g => `
              <button class="btn btn-secondary btn-sm" data-action="navigate" data-value="#/plan-ingles/${g}/1">
                Plan Inglés ${g}°
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // === VIEW: AREA (EBC + Articulación) ===
  renderArea() {
    const area = this.state.area || 'matematicas';
    const grupo = this.state.grupo || '8-9';
    const eje = this.state.eje;
    const info = AREAS_EBC[area];
    const ejes = getEjesDeArea(area);
    const estandarGeneral = getEstandarGeneral(area, grupo);

    return `
      <div class="print-header">
        <div class="print-header-title">${info?.nombre || area} — Grupo ${grupo}</div>
        <div class="print-header-subtitle">Articulador Curricular · Continuo Cognitivo</div>
      </div>

      <div class="flex items-center justify-between" style="flex-wrap:wrap; gap:var(--sp-3)">
        <h1 class="section-title">${info?.nombre || area}</h1>
        <div class="flex gap-2">
          <button class="btn btn-secondary btn-sm" data-action="export-pdf">Exportar PDF</button>
          <button class="btn btn-secondary btn-sm" data-action="export-json">Exportar JSON</button>
        </div>
      </div>

      ${this.renderCoberturaBarraArea(area, grupo)}

      <!-- Filtros -->
      <div class="filter-bar">
        <div class="select-wrap">
          <label class="select-label">Grupo de Grados</label>
          <select class="select" id="select-grupo">
            ${GRUPOS_EBC_ORDEN.map(g => `<option value="${g}" ${g === grupo ? 'selected' : ''}>Grados ${g}</option>`).join('')}
          </select>
        </div>
        <div class="select-wrap">
          <label class="select-label">Eje / Pensamiento</label>
          <select class="select" id="select-eje">
            <option value="">Todos los ejes</option>
            ${ejes.map(e => `<option value="${e.id}" ${e.id === eje ? 'selected' : ''}>${e.nombre}</option>`).join('')}
          </select>
        </div>
      </div>

      <!-- Estándar General -->
      ${estandarGeneral ? `
        <div class="card card-accent">
          <div class="card-body">
            <div class="text-xs font-bold uppercase text-muted mb-2">Estándar General — Grados ${grupo}</div>
            <p class="text-secondary" style="line-height:var(--leading-loose)">${estandarGeneral}</p>
          </div>
        </div>
      ` : ''}

      <!-- Estándares por eje -->
      ${this.renderEstandaresPorEje(area, grupo, eje, ejes)}

      <!-- Articulación Vertical -->
      <h2 class="section-title mt-4">Articulación Vertical</h2>
      <p class="section-description">Progresión de estándares entre grupos de grados: cómo evoluciona cada eje desde grados anteriores hacia los siguientes.</p>
      ${this.renderArticulacionVertical(area, grupo, eje, ejes)}

      <!-- DBA del grupo -->
      ${this.renderDBAGrupo(area, grupo)}

      <!-- ICFES: Aprendizajes, Evidencias y Niveles -->
      ${this.renderICFESSection(area, grupo, eje)}

      <!-- Panel IA -->
      ${this.renderIAPanel()}
    `;
  },

  renderEstandaresPorEje(area, grupo, ejeFiltro, ejes) {
    const ejesToRender = ejeFiltro ? ejes.filter(e => e.id === ejeFiltro) : ejes;

    // Calcular offset global de índice para cada eje (para que el índice sea único por área+grupo)
    let offsetIdx = 0;
    // Construir mapa eje->offset usando el orden de todos los ejes
    const ejeOffset = {};
    for (const eje of ejes) {
      ejeOffset[eje.id] = offsetIdx;
      const count = getEstandares(area, grupo, eje.id).length;
      offsetIdx += count;
    }

    const trabajados = Storage.getEstandaresTrabajados(area, grupo);

    return ejesToRender.map(eje => {
      const ests = getEstandares(area, grupo, eje.id);
      if (!ests.length) return '';
      const base = ejeOffset[eje.id];
      const trabajadosEje = ests.filter((_, i) => trabajados.has(base + i)).length;
      return `
        <div class="card card-accent mt-4" style="border-left-color: ${eje.color}">
          <div class="card-header">
            <div>
              <span class="card-title">${eje.nombre}</span>
              <span class="badge badge-muted ml-2">${ests.length} estándares</span>
              ${trabajadosEje > 0 ? `<span class="badge ml-1" style="background:var(--success);color:white;font-size:0.65rem">${trabajadosEje}/${ests.length} trabajados</span>` : ''}
            </div>
            <span class="chip-dot" style="background:${eje.color}; width:10px; height:10px; border-radius:50%; display:inline-block;"></span>
          </div>
          <div class="card-body">
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
                  ${(() => {
                    const compId = EJE_A_COMPONENTE[eje.id];
                    if (!compId || typeof getAprendizajesICFES !== 'function') return '';
                    const pruebaId = typeof getPruebaParaGrado === 'function' ? getPruebaParaGrado(grupo.split('-')[0]) : null;
                    if (!pruebaId) return '';
                    const icfesAp = getAprendizajesICFES(area, pruebaId, null, compId);
                    if (!icfesAp.length) return '';
                    return '<span class="estandar-icfes-badge badge badge-muted" title="' + icfesAp[0].enunciado.substring(0, 100) + '..." style="font-size:0.6rem;cursor:help;margin-left:4px">ICFES: ' + icfesAp.length + '</span>';
                  })()}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');
  },

  renderArticulacionVertical(area, grupo, ejeFiltro, ejes) {
    const ejeTarget = ejeFiltro || (ejes[0]?.id);
    if (!ejeTarget) return '<div class="empty-state"><p class="empty-state-text">Seleccione un eje para ver la articulación vertical.</p></div>';

    // Tabs for ejes
    const tabs = `
      <div class="tabs mb-4">
        ${ejes.map(e => `
          <button class="tab ${e.id === ejeTarget ? 'active' : ''}"
                  onclick="App.navigate('#/area/${area}/${grupo}/${e.id}')">
            ${EJE_SHORT_LABELS[e.nombre] || e.nombre}
          </button>
        `).join('')}
      </div>
    `;

    const prog = getProgresionVertical(area, ejeTarget, grupo);
    if (!prog) return tabs + '<div class="empty-state"><p class="empty-state-text">No hay datos de progresión para este eje.</p></div>';

    return tabs + `
      <div class="articulacion-panel">
        ${prog.anterior ? `
          <div class="articulacion-col anterior">
            <div class="articulacion-col-header">
              <span class="grupo-label">Grados ${prog.anterior.grupo}</span>
              <span class="grupo-badge text-muted">Anterior</span>
            </div>
            <div class="articulacion-col-body">
              ${prog.anterior.estandares.map(e => `<div class="estandar-item">${e}</div>`).join('')}
            </div>
          </div>
        ` : `
          <div class="articulacion-col anterior">
            <div class="articulacion-empty">Inicio del ciclo escolar</div>
          </div>
        `}

        <div class="articulacion-col actual">
          <div class="articulacion-col-header">
            <span class="grupo-label">Grados ${prog.actual.grupo}</span>
            <span class="grupo-badge badge badge-accent">Actual</span>
          </div>
          <div class="articulacion-col-body">
            ${prog.actual.estandares.map(e => `<div class="estandar-item highlight">${e}</div>`).join('')}
          </div>
        </div>

        ${prog.siguiente ? `
          <div class="articulacion-col siguiente">
            <div class="articulacion-col-header">
              <span class="grupo-label">Grados ${prog.siguiente.grupo}</span>
              <span class="grupo-badge text-muted">Siguiente</span>
            </div>
            <div class="articulacion-col-body">
              ${prog.siguiente.estandares.map(e => `<div class="estandar-item">${e}</div>`).join('')}
            </div>
          </div>
        ` : `
          <div class="articulacion-col siguiente">
            <div class="articulacion-empty">Fin del ciclo escolar</div>
          </div>
        `}
      </div>
    `;
  },

  renderDBAGrupo(area, grupo) {
    const grados = grupoAGrados(grupo);
    const dbaItems = grados.flatMap(g => {
      const dbas = getDBA(area, String(g));
      return dbas.map(d => ({ grado: g, texto: d }));
    });

    if (!dbaItems.length) return '';

    return `
      <div class="card mt-4">
        <div class="card-header">
          <span class="card-title">DBA — Derechos Básicos de Aprendizaje</span>
          <span class="badge badge-muted">Grados ${grupo}</span>
        </div>
        <div class="card-body">
          ${dbaItems.map(d => `
            <div class="estandar-item">
              <span class="badge badge-accent mb-2">${d.grado}°</span>
              ${d.texto}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // === ICFES SECTION ===
  renderICFESSection(area, grupo, ejeFiltro) {
    if (typeof articularEBCconICFES !== 'function') return '';
    const articulacion = articularEBCconICFES(area, grupo);
    if (!articulacion) return '';

    const { pruebaICFES, aprendizajes, competencias, componentes } = articulacion;
    const niveles = getNivelesDesempeno(area, pruebaICFES.id);

    const componenteFiltro = ejeFiltro ? EJE_A_COMPONENTE[ejeFiltro] : null;
    const componentesFiltrados = componenteFiltro
      ? componentes.filter(c => c.id === componenteFiltro)
      : componentes;

    // Agrupar aprendizajes por componente
    const porComponente = {};
    for (const comp of componentesFiltrados) {
      porComponente[comp.id] = aprendizajes.filter(a => a.componente === comp.id);
    }

    const totalAprendizajes = Object.values(porComponente).reduce((s, a) => s + a.length, 0);
    const filtroLabel = componenteFiltro
      ? componentesFiltrados[0]?.nombre || ''
      : 'todos los componentes';

    return `
      <h2 class="section-title mt-4">ICFES — ${pruebaICFES.nombre}</h2>
      <p class="section-description">
        ${componenteFiltro
          ? `Aprendizajes del componente <strong>${filtroLabel}</strong> (filtrado por eje seleccionado). <a href="#/area/${area}/${grupo}" class="text-accent" style="text-decoration:underline">Ver todos</a>`
          : 'Aprendizajes evaluados, evidencias y niveles de desempeño según el marco de referencia ICFES para este grupo de grados.'}
      </p>

      <!-- Competencias y componentes -->
      <div class="flex gap-2 mb-4" style="flex-wrap:wrap">
        ${competencias.map(c => `<span class="badge badge-accent">${c.nombre}</span>`).join('')}
        <span class="text-muted">·</span>
        ${componentes.map(c => `<span class="badge ${componenteFiltro && c.id === componenteFiltro ? 'badge-accent' : 'badge-muted'}">${c.nombre}</span>`).join('')}
      </div>

      <!-- Aprendizajes por componente -->
      ${componentesFiltrados.map(comp => {
        const aprends = porComponente[comp.id] || [];
        if (!aprends.length) return '';
        return `
          <div class="card card-accent mt-3">
            <div class="card-header">
              <span class="card-title">${comp.nombre}</span>
              <span class="badge badge-muted">${aprends.length} aprendizajes</span>
            </div>
            <div class="card-body">
              ${aprends.map(a => {
                const ejesRel = COMPONENTE_A_EJES[a.componente] || [];
                const ebcHtml = ejesRel.length ? '<div class="icfes-ebc-links"><span class="text-xs text-muted">EBC:</span>' +
                  ejesRel.map(eje => '<a class="badge badge-muted icfes-ebc-link" style="font-size:0.6rem;cursor:pointer" data-action="navigate" data-value="#/area/' + area + '/' + grupo + '/' + eje + '">' + eje + '</a>').join('') +
                  '</div>' : '';
                return `
                <details class="icfes-aprendizaje">
                  <summary class="estandar-item" style="cursor:pointer; list-style:none">
                    <div class="flex items-center gap-2" style="flex-wrap:wrap">
                      <span class="badge badge-accent" style="font-size:0.65rem">${a.competencia}</span>
                      <span>${a.enunciado}</span>
                      <button class="btn btn-ghost btn-sm" style="font-size:0.7rem;padding:2px 6px" data-action="toggle-planes-para-aprendizaje" data-aprendizaje="${a.id}" data-area="${area}">Ver en planes</button>
                    </div>
                  </summary>
                  ${ebcHtml}
                  <div class="icfes-evidencias">
                    ${a.evidencias.map(e => `
                      <div class="icfes-evidencia-item">
                        <span class="text-muted text-xs">${e.id}</span> ${e.enunciado}
                      </div>
                    `).join('')}
                  </div>
                </details>
              `;}).join('')}
            </div>
          </div>
        `;
      }).join('')}

      <!-- Niveles de desempeño -->
      <div class="card mt-4">
        <div class="card-header">
          <span class="card-title">Niveles de Desempeño — ${pruebaICFES.nombre}</span>
        </div>
        <div class="card-body">
          <div class="icfes-niveles-grid">
            ${niveles.map(nivel => `
              <div class="icfes-nivel" style="border-left: 4px solid ${nivel.color}">
                <div class="flex items-center gap-2 mb-2">
                  <span class="icfes-nivel-dot" style="background:${nivel.color}"></span>
                  <strong>${nivel.nombre}</strong>
                  <span class="text-muted text-xs">(${nivel.rango[0]}–${nivel.rango[1]})</span>
                </div>
                <p class="text-sm text-secondary" style="line-height:var(--leading-loose)">${nivel.descripcion}</p>
                ${nivel.aprendizajesEsperados.length > 0 ? `
                  <div class="flex gap-1 mt-2" style="flex-wrap:wrap">
                    ${nivel.aprendizajesEsperados.map(id => `<span class="badge badge-muted" style="font-size:0.6rem">${id}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Preguntas tipo ICFES -->
      ${this.renderPreguntasICFES(area, pruebaICFES.id, componenteFiltro)}
    `;
  },

  // === PREGUNTAS TIPO ICFES (offline) ===
  renderPreguntasICFES(area, pruebaId, componenteFiltro) {
    if (typeof PREGUNTAS_ICFES === 'undefined') return '';
    const preguntas = PREGUNTAS_ICFES[area]?.[pruebaId];
    if (!preguntas || !preguntas.length) return '';

    const filtradas = componenteFiltro
      ? preguntas.filter(p => p.componente === componenteFiltro)
      : preguntas;

    if (!filtradas.length) return '';

    return `
      <div class="card mt-4">
        <div class="card-header">
          <span class="card-title">Preguntas Tipo ICFES</span>
          <span class="badge badge-muted">${filtradas.length} preguntas · offline</span>
        </div>
        <div class="card-body">
          <p class="text-sm text-muted mb-3">Ejemplos para práctica en el aula. Formato Saber con 4 opciones de respuesta única.</p>
          ${filtradas.map((p, i) => `
            <details class="icfes-pregunta">
              <summary class="icfes-pregunta-header">
                <div class="flex items-center gap-2" style="flex-wrap:wrap">
                  <span class="badge badge-accent" style="font-size:0.65rem">${p.competencia}</span>
                  <span class="badge badge-muted" style="font-size:0.6rem">${p.componente}</span>
                  <span class="text-sm"><strong>${i + 1}.</strong> ${p.enunciado.length > 120 ? p.enunciado.substring(0, 120) + '...' : p.enunciado}</span>
                </div>
              </summary>
              <div class="icfes-pregunta-body">
                <div class="icfes-pregunta-enunciado">${p.enunciado}</div>
                <div class="icfes-opciones">
                  ${p.opciones.map(o => `
                    <div class="icfes-opcion ${o.letra === p.clave ? 'icfes-opcion-correcta' : ''}">
                      <span class="icfes-opcion-letra">${o.letra}</span>
                      <span>${o.texto}</span>
                    </div>
                  `).join('')}
                </div>
                <details class="icfes-justificacion">
                  <summary class="text-sm text-accent" style="cursor:pointer">Ver justificación</summary>
                  <p class="text-sm text-secondary mt-2" style="line-height:var(--leading-loose)">${p.justificacion}</p>
                </details>
              </div>
            </details>
          `).join('')}
        </div>
      </div>
    `;
  },

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

  // === VIEW: CONFIG ===
  renderConfig() {
    const inst = Storage.getInstitucion();
    const prefs = Storage.getPreferencias();

    return `
      <h1 class="section-title">Configuración</h1>

      <div class="card mt-4">
        <div class="card-header"><span class="card-title">Institución Educativa</span></div>
        <div class="card-body">
          <div class="plan-grid" style="gap:var(--sp-3)">
            <div class="form-group">
              <label class="form-label" for="cfg-nombre">Nombre</label>
              <input class="form-input" id="cfg-nombre" value="${inst.nombre}" placeholder="IE Pedacito de Cielo A.U.V">
            </div>
            <div class="form-group">
              <label class="form-label" for="cfg-dane">Código DANE</label>
              <input class="form-input" id="cfg-dane" value="${inst.dane}" placeholder="163401000298">
            </div>
            <div class="form-group">
              <label class="form-label" for="cfg-municipio">Municipio</label>
              <input class="form-input" id="cfg-municipio" value="${inst.municipio}" placeholder="La Tebaida">
            </div>
            <div class="form-group">
              <label class="form-label" for="cfg-depto">Departamento</label>
              <input class="form-input" id="cfg-depto" value="${inst.departamento}" placeholder="Quindío">
            </div>
          </div>
          <button class="btn btn-primary mt-4" onclick="Storage.setInstitucion({nombre:document.getElementById('cfg-nombre').value,dane:document.getElementById('cfg-dane').value,municipio:document.getElementById('cfg-municipio').value,departamento:document.getElementById('cfg-depto').value,jornada:'manana',annoLectivo:2026}); App.showToast('Institución guardada')">
            Guardar Institución
          </button>
        </div>
      </div>

      <div class="card mt-4">
        <div class="card-header"><span class="card-title">Inteligencia Artificial</span></div>
        <div class="card-body">
          <p class="text-sm text-secondary mb-4">
            Ingrese su API key de Google Gemini para usar las funciones de IA. Es gratuita (1M tokens/mes).
            <a href="https://aistudio.google.com/apikey" target="_blank">Obtener API key gratis →</a>
          </p>
          <div class="form-group">
            <label class="form-label" for="cfg-apikey">API Key de Gemini</label>
            <input class="form-input" id="cfg-apikey" type="password" value="${prefs.apiKeyGemini || ''}" placeholder="AIza...">
          </div>
          <div class="flex gap-2">
            <button class="btn btn-primary" onclick="Storage.setApiKey(document.getElementById('cfg-apikey').value); App.showToast('API key guardada')">
              Guardar API Key
            </button>
            <button class="btn btn-secondary" onclick="IA.verificarApiKey(document.getElementById('cfg-apikey').value).then(r => App.showToast(r.ok ? r.mensaje : 'Error: ' + r.mensaje))">
              Verificar
            </button>
          </div>
        </div>
      </div>

      <div class="card mt-4">
        <div class="card-header"><span class="card-title">Datos</span></div>
        <div class="card-body">
          <div class="flex gap-2">
            <button class="btn btn-secondary btn-sm" onclick="exportarJSON(Storage.exportarTodo(), 'articulador-backup.json')">Exportar configuración</button>
            <button class="btn btn-ghost btn-sm" onclick="if(confirm('¿Borrar toda la configuración?')) { Storage.limpiarTodo(); App.showToast('Configuración borrada'); }">Limpiar datos</button>
          </div>
        </div>
      </div>

      ${(() => {
        const resumen = Analytics.getResumen();
        const topVistasHtml = resumen.topVistas.length
          ? resumen.topVistas.map(([k, v]) => `<li class="text-sm text-secondary">${k} <span class="badge badge-muted">${v}</span></li>`).join('')
          : '<li class="text-sm text-muted">Sin datos aún</li>';
        const topAccionesHtml = resumen.topAcciones.length
          ? resumen.topAcciones.map(([k, v]) => `<li class="text-sm text-secondary">${k} <span class="badge badge-muted">${v}</span></li>`).join('')
          : '<li class="text-sm text-muted">Sin datos aún</li>';
        return `
          <div class="card mt-4">
            <div class="card-header"><span class="card-title">Estadísticas de Uso</span></div>
            <div class="card-body">
              <p class="text-sm text-secondary">Sesiones: <strong>${resumen.sesiones}</strong></p>
              <p class="text-sm text-secondary">Última sesión: <strong>${resumen.ultimaSesion || 'N/A'}</strong></p>
              <h4 class="text-sm font-bold mt-3 mb-1">Secciones más visitadas</h4>
              <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:var(--sp-1)">${topVistasHtml}</ul>
              <h4 class="text-sm font-bold mt-3 mb-1">Acciones más frecuentes</h4>
              <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:var(--sp-1)">${topAccionesHtml}</ul>
              <button class="btn btn-ghost btn-sm mt-3" data-action="clear-analytics">Limpiar estadísticas</button>
            </div>
          </div>
        `;
      })()}
    `;
  },

  // === VIEW: BÚSQUEDA ===
  renderBusqueda() {
    const query = this.state.searchQuery;
    const resultados = query ? buscarTodo(query) : [];

    return `
      <h1 class="section-title">Búsqueda</h1>
      <p class="section-description">Busque estándares EBC, DBA, aprendizajes ICFES y contenidos en todas las áreas.</p>

      <div class="search-container">
        <span class="search-icon">🔍</span>
        <input class="search-input" id="search-page-input" value="${query}" placeholder="Buscar aprendizajes, estándares, DBA, competencias...">
      </div>

      ${resultados.length > 0 ? `
        <p class="text-sm text-muted mt-4">${resultados.length} resultado${resultados.length > 1 ? 's' : ''}</p>
        ${(() => {
          const _pag = { 'saber-3': '1-3', 'saber-5': '4-5', 'saber-9': '8-9', 'saber-11': '10-11' };
          return resultados.slice(0, 20).map(r => {
            const gNav = r.grupo || (r.prueba ? _pag[r.prueba] : null) || gradoAGrupoEBC(r.grado || '8');
            const gLabel = r.grupo || (r.prueba ? _pag[r.prueba] : null) || ('Grado ' + r.grado);
            return `
              <div class="card card-accent mt-2" data-action="navigate" data-value="#/area/${r.area}/${gNav}" style="cursor:pointer">
                <div class="card-body">
                  <div class="flex gap-2 mb-2">
                    <span class="badge badge-${r.area === 'matematicas' ? 'mat' : r.area === 'lenguaje' ? 'len' : r.area === 'ciencias-naturales' ? 'nat' : 'soc'}">${AREAS_EBC[r.area]?.nombre || r.area}</span>
                    <span class="badge badge-muted">${r.tipo.toUpperCase()}</span>
                    <span class="badge badge-muted">${gLabel}</span>
                  </div>
                  <p class="text-sm text-secondary">${r.texto}</p>
                </div>
              </div>
            `;
          }).join('');
        })()}
      ` : query ? '<p class="text-muted mt-4">Sin resultados para "' + query + '"</p>' : ''}
    `;
  },

  // === SHARED: IA Panel ===
  renderIAPanel() {
    return `
      <div class="ia-panel mt-4" id="ia-panel">
        <div class="ia-panel-header" data-action="toggle-ia">
          <div class="ia-panel-title"><span class="ia-dot"></span> Inteligencia Pedagógica</div>
          <div class="flex gap-2 items-center">
            <span class="badge badge-ia">Gemini</span>
            <span class="text-muted text-xs">${Storage.getApiKey() ? 'Conectado' : 'Sin API key'}</span>
          </div>
        </div>
        <div class="ia-panel-body">
          <div class="ia-actions">
            <div class="ia-action-btn" data-action="ia-action" data-value="diferenciacion">
              <div class="ia-action-btn-title">Diferenciación NEE</div>
              <div class="ia-action-btn-desc">Actividades adaptadas para necesidades educativas especiales</div>
            </div>
            <div class="ia-action-btn" data-action="ia-action" data-value="preguntasICFES">
              <div class="ia-action-btn-title">Preguntas ICFES</div>
              <div class="ia-action-btn-desc">Generar preguntas tipo Saber 11 alineadas al estándar</div>
            </div>
            <div class="ia-action-btn" data-action="ia-action" data-value="interdisciplinar">
              <div class="ia-action-btn-title">Conexión Interdisciplinar</div>
              <div class="ia-action-btn-desc">Proyectos integradores entre dos áreas curriculares</div>
            </div>
            <div class="ia-action-btn" data-action="ia-action" data-value="sugerenciaPedagogica">
              <div class="ia-action-btn-title">Sugerencia Pedagógica</div>
              <div class="ia-action-btn-desc">Estrategias didácticas innovadoras para el tema actual</div>
            </div>
          </div>

          <div class="ia-token-estimate">
            <span>Tokens estimados:</span>
            <div class="ia-token-bar"><div class="ia-token-fill" id="ia-token-fill" style="width:0%"></div></div>
            <span id="ia-token-label">~0</span>
          </div>

          <div class="ia-response" id="ia-response">Seleccione una acción para generar contenido con IA.</div>

          <div class="ia-fallback" data-action="ia-gemini" data-value="sugerenciaPedagogica">
            Sin API key? → Abrir en Gemini (gratis, sin configuración)
          </div>
        </div>
      </div>
    `;
  },

  // === SIDEBAR ===
  renderSidebar() {
    const sidebar = document.getElementById('sidebar-nav');
    if (!sidebar) return;

    sidebar.innerHTML = `
      <div class="sidebar-section">
        <div class="search-container">
          <span class="search-icon" aria-hidden="true">🔍</span>
          <input class="search-input" id="search-input"
                 role="combobox"
                 aria-label="Buscar en el articulador"
                 aria-expanded="false"
                 aria-autocomplete="list"
                 aria-controls="search-results"
                 aria-haspopup="listbox"
                 placeholder="Buscar aprendizajes...">
          <div class="search-results" id="search-results" role="listbox" aria-label="Resultados de búsqueda" style="display:none"></div>
        </div>
      </div>

      <div class="sidebar-label">Navegación</div>
      <ul class="sidebar-nav">
        <li class="sidebar-item ${this.state.vista === 'home' ? 'active' : ''}" ${this.state.vista === 'home' ? 'aria-current="page"' : ''} data-action="navigate" data-value="#/">
          <span class="sidebar-item-icon" aria-hidden="true">🏠</span> Inicio
        </li>
      </ul>

      <div class="sidebar-label">Áreas Curriculares</div>
      <ul class="sidebar-nav">
        ${Object.entries(AREAS_EBC).map(([id, info]) => `
          <li class="sidebar-item ${this.state.area === id && this.state.vista === 'area' ? 'active' : ''}" ${this.state.area === id && this.state.vista === 'area' ? 'aria-current="page"' : ''} data-action="navigate" data-value="#/area/${id}/${this.state.grupo || '8-9'}">
            <span aria-hidden="true" class="sidebar-dot ${id === 'matematicas' ? 'mat' : id === 'lenguaje' ? 'len' : id === 'ciencias-naturales' ? 'nat' : 'soc'}"></span>
            ${info.nombre}
          </li>
        `).join('')}
      </ul>

      <div class="sidebar-label">Planes de Periodo — Matemáticas</div>
      <ul class="sidebar-nav">
        ${['6','7','8','9','10','11'].map(g => `
          <li class="sidebar-item ${this.state.grado === g && this.state.area === 'matematicas' && this.state.vista === 'plan' ? 'active' : ''}" ${this.state.grado === g && this.state.area === 'matematicas' && this.state.vista === 'plan' ? 'aria-current="page"' : ''} data-action="navigate" data-value="#/plan/${g}/1">
            <span class="sidebar-item-icon" aria-hidden="true">📋</span> Matemáticas ${g}°
          </li>
        `).join('')}
      </ul>

      <div class="sidebar-label">Planes de Periodo — Lenguaje</div>
      <ul class="sidebar-nav">
        ${['6','7','8','9','10','11'].map(g => `
          <li class="sidebar-item ${this.state.grado === g && this.state.area === 'lenguaje' && this.state.vista === 'plan' ? 'active' : ''}" ${this.state.grado === g && this.state.area === 'lenguaje' && this.state.vista === 'plan' ? 'aria-current="page"' : ''} data-action="navigate" data-value="#/plan-lenguaje/${g}/1">
            <span class="sidebar-item-icon" aria-hidden="true">📖</span> Lenguaje ${g}°
          </li>
        `).join('')}
      </ul>

      <div class="sidebar-label">Planes de Periodo — C. Naturales</div>
      <ul class="sidebar-nav">
        ${['6','7','8','9','10','11'].map(g => `
          <li class="sidebar-item ${this.state.grado === g && this.state.area === 'naturales' && this.state.vista === 'plan' ? 'active' : ''}" ${this.state.grado === g && this.state.area === 'naturales' && this.state.vista === 'plan' ? 'aria-current="page"' : ''} data-action="navigate" data-value="#/plan-naturales/${g}/1">
            <span class="sidebar-item-icon" aria-hidden="true">🔬</span> Naturales ${g}°
          </li>
        `).join('')}
      </ul>

      <div class="sidebar-label">Planes de Periodo — C. Sociales</div>
      <ul class="sidebar-nav">
        ${['6','7','8','9','10','11'].map(g => `
          <li class="sidebar-item ${this.state.grado === g && this.state.area === 'sociales' && this.state.vista === 'plan' ? 'active' : ''}" ${this.state.grado === g && this.state.area === 'sociales' && this.state.vista === 'plan' ? 'aria-current="page"' : ''} data-action="navigate" data-value="#/plan-sociales/${g}/1">
            <span class="sidebar-item-icon" aria-hidden="true">🏛</span> Sociales ${g}°
          </li>
        `).join('')}
      </ul>

      <div class="sidebar-label">Planes de Periodo — Inglés</div>
      <ul class="sidebar-nav">
        ${['6','7','8','9','10','11'].map(g => `
          <li class="sidebar-item ${this.state.grado === g && this.state.area === 'ingles' && this.state.vista === 'plan' ? 'active' : ''}" ${this.state.grado === g && this.state.area === 'ingles' && this.state.vista === 'plan' ? 'aria-current="page"' : ''} data-action="navigate" data-value="#/plan-ingles/${g}/1">
            <span class="sidebar-item-icon" aria-hidden="true">🌐</span> Inglés ${g}°
          </li>
        `).join('')}
      </ul>

      <div class="sidebar-label">Herramientas</div>
      <ul class="sidebar-nav">
        <li class="sidebar-item ${this.state.vista === 'simulacro' || this.state.vista === 'simulacro-activo' ? 'active' : ''}" ${this.state.vista === 'simulacro' || this.state.vista === 'simulacro-activo' ? 'aria-current="page"' : ''} data-action="navigate" data-value="#/simulacro">
          <span class="sidebar-item-icon" aria-hidden="true">📝</span> Simulacro ICFES
        </li>
        <li class="sidebar-item ${this.state.vista === 'cobertura' ? 'active' : ''}" ${this.state.vista === 'cobertura' ? 'aria-current="page"' : ''} data-action="navigate" data-value="#/cobertura">
          <span class="sidebar-item-icon" aria-hidden="true">📊</span> Cobertura
          ${this._sidebarCoberturaBadge()}
        </li>
        <li class="sidebar-item ${this.state.vista === 'dashboard' ? 'active' : ''}" ${this.state.vista === 'dashboard' ? 'aria-current="page"' : ''} data-action="navigate" data-value="#/dashboard">
          <span class="sidebar-item-icon" aria-hidden="true">📈</span> Estadisticas
        </li>
      </ul>

      <div class="sidebar-label" style="margin-top:auto">Sistema</div>
      <ul class="sidebar-nav">
        <li class="sidebar-item ${this.state.vista === 'config' ? 'active' : ''}" ${this.state.vista === 'config' ? 'aria-current="page"' : ''} data-action="navigate" data-value="#/config">
          <span class="sidebar-item-icon" aria-hidden="true">⚙</span> Configuración
        </li>
      </ul>
    `;
  },

  // === SIMULACRO ICFES ===

  // Configuracion de areas y pruebas disponibles para simulacro
  _simulacroAreas() {
    return [
      { id: 'matematicas', nombre: 'Matematicas', icon: '📐' },
      { id: 'lenguaje',    nombre: 'Lectura Critica', icon: '📖' },
      { id: 'naturales',   nombre: 'Ciencias Naturales', icon: '🔬' },
      { id: 'sociales',    nombre: 'Sociales y Ciudadanas', icon: '🏛' },
      { id: 'ingles',      nombre: 'Inglés', icon: '🌐' }
    ];
  },

  _simulacroPruebas() {
    return [
      { id: 'saber-9',  nombre: 'Saber 9°' },
      { id: 'saber-11', nombre: 'Saber 11°' }
    ];
  },

  // Fisher-Yates shuffle (inmutable: devuelve nuevo array)
  _shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  // Inicia el simulacro: lazy-load de preguntas si no estan en memoria
  startSimulacro(area, pruebaId) {
    if (this.state.simulacro && this.state.simulacro.timerInterval) {
      clearInterval(this.state.simulacro.timerInterval);
    }

    // Si ya estan cargadas, iniciar directo
    if (typeof PREGUNTAS_ICFES !== 'undefined') {
      this._initSimulacroState(area, pruebaId);
      return;
    }

    // Lazy load: mostrar estado de carga
    const main = document.getElementById('main-content');
    if (main) {
      main.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon"><div class="loading-spinner"></div></div>
          <div class="empty-state-title">Cargando banco de preguntas...</div>
          <p class="empty-state-text">Descargando preguntas ICFES para el simulacro</p>
        </div>`;
    }

    const script = document.createElement('script');
    script.src = 'src/data/preguntas-icfes.js';
    script.onload = () => {
      this._initSimulacroState(area, pruebaId);
      this.state.vista = 'simulacro-activo';
      this.render();
    };
    script.onerror = () => {
      this.showToast('Error cargando preguntas. Verifica tu conexión.');
      this.state.vista = 'simulacro';
      this.render();
    };
    document.head.appendChild(script);
  },

  _initSimulacroState(area, pruebaId) {
    let preguntas = (typeof PREGUNTAS_ICFES !== 'undefined' && PREGUNTAS_ICFES[area] && PREGUNTAS_ICFES[area][pruebaId])
      ? PREGUNTAS_ICFES[area][pruebaId].slice()
      : [];

    // Apply filters
    const filtros = this.state.simulacroFiltros;
    if (filtros.competencia) {
      preguntas = preguntas.filter(p => p.competencia === filtros.competencia);
    }
    if (filtros.componente) {
      preguntas = preguntas.filter(p => p.componente === filtros.componente);
    }
    // Modo Repaso: only wrong answers from last attempt
    if (filtros.modoRepaso) {
      const ultimo = Storage.getUltimoResultado(area, pruebaId);
      if (ultimo && ultimo.wrongIds && ultimo.wrongIds.length > 0) {
        const wrongSet = new Set(ultimo.wrongIds);
        preguntas = preguntas.filter(p => wrongSet.has(p.id));
      }
    }
    // Shuffle after filtering
    preguntas = this._shuffle(preguntas);
    // Limit number of questions
    if (filtros.numPreguntas > 0 && preguntas.length > filtros.numPreguntas) {
      preguntas = preguntas.slice(0, filtros.numPreguntas);
    }

    // Tiempo limite: usar el configurado por el usuario (en minutos) o calcular automaticamente
    const tiempoConfigMinutos = this.state.simulacroTiempoConfig;
    let tiempoLimite;
    if (tiempoConfigMinutos && tiempoConfigMinutos > 0) {
      tiempoLimite = tiempoConfigMinutos * 60; // convertir minutos a segundos
    } else if (tiempoConfigMinutos === 0) {
      tiempoLimite = 0; // sin limite: mostrar tiempo transcurrido
    } else {
      const minutosPorPregunta = 2;
      tiempoLimite = preguntas.length * minutosPorPregunta * 60;
    }

    this.state.simulacro = {
      area,
      pruebaId,
      preguntas,
      respuestas: {},
      actual: 0,
      tiempoInicio: Date.now(),
      tiempoLimite,
      tiempoRestante: tiempoLimite,
      timerInterval: null,
      finalizado: false
    };
  },

  // Arranca el timer de cuenta regresiva (llamado despues de render)
  startTimer() {
    if (!this.state.simulacro || this.state.simulacro.finalizado) return;
    // Limpiar timer previo
    if (this.state.simulacro.timerInterval) {
      clearInterval(this.state.simulacro.timerInterval);
    }

    this.state.simulacro.timerInterval = setInterval(() => {
      if (!this.state.simulacro || this.state.simulacro.finalizado) return;

      const elapsed = Math.floor((Date.now() - this.state.simulacro.tiempoInicio) / 1000);
      const sinLimite = this.state.simulacro.tiempoLimite === 0;
      const restante = sinLimite ? 0 : Math.max(0, this.state.simulacro.tiempoLimite - elapsed);
      this.state.simulacro.tiempoRestante = restante;

      // Actualizar display del timer
      const timerEl = document.getElementById('sim-timer');
      if (timerEl) {
        if (sinLimite) {
          // Modo sin limite: mostrar tiempo transcurrido
          const hh = String(Math.floor(elapsed / 3600)).padStart(2, '0');
          const mm = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
          const ss = String(elapsed % 60).padStart(2, '0');
          timerEl.textContent = `${hh}:${mm}:${ss}`;
          timerEl.classList.remove('warning', 'urgente');
        } else {
          const hh = String(Math.floor(restante / 3600)).padStart(2, '0');
          const mm = String(Math.floor((restante % 3600) / 60)).padStart(2, '0');
          const ss = String(restante % 60).padStart(2, '0');
          timerEl.textContent = `${hh}:${mm}:${ss}`;
          timerEl.classList.toggle('warning', restante > 60 && restante <= 300);
          timerEl.classList.toggle('urgente', restante <= 60);
        }
      }

      if (!sinLimite && restante <= 0) {
        this.finalizarSimulacro();
      }
    }, 1000);
  },

  // Avanza a la siguiente pregunta o finaliza (partial DOM update)
  nextPregunta() {
    if (!this.state.simulacro) return;
    const { preguntas, actual } = this.state.simulacro;

    if (actual + 1 >= preguntas.length) {
      this.finalizarSimulacro();
      return;
    }

    this.state.simulacro.actual = actual + 1;
    const sim = this.state.simulacro;
    const pregunta = sim.preguntas[sim.actual];
    const totalPreguntas = sim.preguntas.length;
    const progPct = Math.round((sim.actual / totalPreguntas) * 100);
    const esUltima = sim.actual + 1 >= totalPreguntas;
    const respActual = sim.respuestas[sim.actual];

    // Partial DOM updates (sin reemplazar innerHTML completo)
    const progressBar = document.getElementById('sim-progress-bar');
    if (progressBar) progressBar.style.width = progPct + '%';

    const numEl = document.getElementById('sim-question-num');
    if (numEl) numEl.textContent = `Pregunta ${sim.actual + 1} de ${totalPreguntas}`;

    const enunciadoEl = document.getElementById('sim-enunciado');
    if (enunciadoEl) enunciadoEl.innerHTML = pregunta.enunciado.replace(/\n/g, '<br>');

    const opcionesEl = document.getElementById('sim-opciones');
    if (opcionesEl) {
      opcionesEl.innerHTML = pregunta.opciones.map(op => `
        <div class="simulacro-opcion ${respActual === op.letra ? 'selected' : ''}"
             role="radio"
             aria-checked="${respActual === op.letra ? 'true' : 'false'}"
             tabindex="${respActual === op.letra ? '0' : '-1'}"
             data-action="simulacro-respuesta"
             data-value="${op.letra}">
          <span class="simulacro-opcion-letra" aria-hidden="true">${op.letra}</span>
          <span class="simulacro-opcion-texto">${op.texto}</span>
        </div>
      `).join('');
    }

    const btnNext = document.getElementById('sim-btn-next');
    if (btnNext) {
      btnNext.disabled = !respActual;
      btnNext.dataset.action = esUltima ? 'simulacro-finalizar' : 'simulacro-next';
      btnNext.textContent = esUltima ? 'Finalizar Simulacro' : 'Siguiente Pregunta';
    }
  },

  // Finaliza el simulacro y muestra resultados
  finalizarSimulacro(abandonar) {
    if (!this.state.simulacro) return;

    // Multi-area: finalize section instead of entire simulacro
    if (this.state.simulacro.esMultiArea && !abandonar) {
      this._finalizarSeccionMultiArea();
      return;
    }

    if (this.state.simulacro.timerInterval) {
      clearInterval(this.state.simulacro.timerInterval);
      this.state.simulacro.timerInterval = null;
    }
    this.state.simulacro.finalizado = true;
    this.state.simulacro.tiempoFin = Date.now();

    // Persistir resultado si no fue abandonado
    if (!abandonar) {
      const sim = this.state.simulacro;
      const preguntas = sim.preguntas;
      const respuestas = sim.respuestas;
      const porCompetencia = {};
      const porComponente = {};
      let correctas = 0;
      const wrongIds = [];
      preguntas.forEach((p, i) => {
        const ok = respuestas[i] === p.clave;
        if (ok) correctas++;
        else if (respuestas[i]) wrongIds.push(p.id);
        const comp = p.competencia || 'otro';
        const componente = p.componente || 'otro';
        if (!porCompetencia[comp]) porCompetencia[comp] = { total: 0, correctas: 0 };
        porCompetencia[comp].total++;
        if (ok) porCompetencia[comp].correctas++;
        if (!porComponente[componente]) porComponente[componente] = { total: 0, correctas: 0 };
        porComponente[componente].total++;
        if (ok) porComponente[componente].correctas++;
      });
      Storage.saveSimulacroResult({
        area: sim.area,
        pruebaId: sim.pruebaId,
        correctas,
        total: preguntas.length,
        porcentaje: Math.round((correctas / preguntas.length) * 100),
        tiempoUsado: Math.floor((sim.tiempoFin - sim.tiempoInicio) / 1000),
        porCompetencia,
        porComponente,
        wrongIds
      });
    }

    const main = document.getElementById('main-content');
    if (main) {
      main.innerHTML = this.renderSimulacroResultados(abandonar);
    }
  },

  _buscarAprendizajeEnPlanes(aprendizajeId, area) {
    const planesMap = {
      matematicas: typeof PLANES_MATEMATICAS !== 'undefined' ? PLANES_MATEMATICAS : null,
      lenguaje: typeof PLANES_LENGUAJE !== 'undefined' ? PLANES_LENGUAJE : null,
      naturales: typeof PLANES_NATURALES !== 'undefined' ? PLANES_NATURALES : null,
      sociales: typeof PLANES_SOCIALES !== 'undefined' ? PLANES_SOCIALES : null,
      ingles: typeof PLANES_INGLES !== 'undefined' ? PLANES_INGLES : null,
    };
    const planes = planesMap[area];
    if (!planes) return [];
    const resultados = [];
    for (const [grado, planGrado] of Object.entries(planes)) {
      const periodos = Array.isArray(planGrado.periodos) ? planGrado.periodos : Object.values(planGrado.periodos || {});
      for (const periodo of periodos) {
        if (Array.isArray(periodo.aprendizajesICFES) && periodo.aprendizajesICFES.includes(aprendizajeId)) {
          resultados.push({ grado, periodo: periodo.periodo, label: 'Grado ' + grado + ' P' + periodo.periodo });
        }
      }
    }
    return resultados;
  },

  renderEspecificacionesPrueba(area, pruebaId) {
    if (typeof getICFESData !== 'function') return '';
    const data = getICFESData(area);
    if (!data || !data.pruebas[pruebaId]) return '';
    const prueba = data.pruebas[pruebaId];
    const niveles = typeof getNivelesDesempeno === 'function' ? getNivelesDesempeno(area, pruebaId) : [];
    const competencias = typeof getCompetenciasICFES === 'function' ? getCompetenciasICFES(area) : [];
    const componentes = typeof getComponentesICFES === 'function' ? getComponentesICFES(area) : [];
    const numPreguntas = (typeof PREGUNTAS_ICFES !== 'undefined') ? (PREGUNTAS_ICFES[area]?.[pruebaId]?.length || 'N/D') : 'N/D';
    const tiempoSugerido = pruebaId === 'saber-11' ? '130 min' : pruebaId === 'saber-9' ? '80 min' : '60 min';

    return `
      <div class="especificaciones-modal" id="especif-modal" role="dialog" aria-modal="true">
        <div class="especificaciones-modal-overlay" data-action="cerrar-especificaciones"></div>
        <div class="especificaciones-modal-panel">
          <div class="especificaciones-modal-header">
            <h2 style="margin:0;font-size:var(--text-lg)">${prueba.nombre} — ${data.nombre}</h2>
            <button class="btn btn-ghost btn-sm" data-action="cerrar-especificaciones" aria-label="Cerrar">✕</button>
          </div>
          <div class="especificaciones-modal-body">
            <div class="especif-meta-grid">
              <div class="especif-meta-item">
                <span class="especif-meta-label">Preguntas</span>
                <span class="especif-meta-value">${numPreguntas}</span>
              </div>
              <div class="especif-meta-item">
                <span class="especif-meta-label">Tiempo</span>
                <span class="especif-meta-value">${tiempoSugerido}</span>
              </div>
              <div class="especif-meta-item">
                <span class="especif-meta-label">Grados</span>
                <span class="especif-meta-value">${prueba.grados?.join(', ') || 'N/D'}</span>
              </div>
            </div>
            <h3 class="especif-section-title">Competencias evaluadas</h3>
            ${competencias.map(c => '<div class="especif-comp-item"><strong>' + c.nombre + '</strong><p class="text-sm text-secondary">' + c.descripcion + '</p></div>').join('')}
            <h3 class="especif-section-title">Componentes</h3>
            ${componentes.map(c => '<div class="especif-comp-item"><strong>' + c.nombre + '</strong><p class="text-sm text-secondary">' + c.descripcion + '</p></div>').join('')}
            ${niveles.length ? '<h3 class="especif-section-title">Niveles de Desempeno</h3>' +
              niveles.map(n => '<div class="especif-nivel" style="border-left:3px solid ' + n.color + '"><strong>' + n.nombre + '</strong> <span class="text-xs text-muted">(' + n.rango[0] + '–' + n.rango[1] + ')</span></div>').join('') : ''}
          </div>
        </div>
      </div>
    `;
  },

  // Vista de seleccion de simulacro
  renderSimulacro() {
    const areas = this._simulacroAreas();
    const pruebas = this._simulacroPruebas();

    const cards = areas.flatMap(area =>
      pruebas.map(prueba => {
        const tienePreguntas = (typeof PREGUNTAS_ICFES !== 'undefined')
          && Array.isArray(PREGUNTAS_ICFES[area.id]?.[prueba.id])
          && PREGUNTAS_ICFES[area.id][prueba.id].length > 0;
        const numPreguntas = tienePreguntas ? PREGUNTAS_ICFES[area.id][prueba.id].length : 0;
        const minutos = numPreguntas * 2;

        return `
          <div class="simulacro-card card ${tienePreguntas ? '' : 'simulacro-card-disabled'}">
            <div class="card-body">
              ${tienePreguntas ? '<button class="btn btn-ghost btn-sm simulacro-card-info" data-action="ver-especificaciones" data-area="' + area.id + '" data-prueba="' + prueba.id + '" title="Especificaciones" aria-label="Ver especificaciones"><i>i</i></button>' : ''}
              <div class="simulacro-card-icon">${area.icon}</div>
              <div class="simulacro-card-area">${area.nombre}</div>
              <div class="simulacro-card-prueba">${prueba.nombre}</div>
              ${tienePreguntas ? `
                <div class="simulacro-card-meta">
                  <span class="badge badge-muted">${numPreguntas} preguntas</span>
                  <span class="badge badge-muted">~${minutos} min</span>
                </div>
                ${(() => {
                  const ultimo = Storage.getUltimoResultado(area.id, prueba.id);
                  if (!ultimo) return '';
                  const uColor = ultimo.porcentaje >= 70 ? 'var(--success)' : ultimo.porcentaje >= 50 ? 'var(--warning)' : 'var(--danger)';
                  return '<div class="simulacro-ultimo-resultado">' +
                    '<span class="text-xs text-muted">Ultimo:</span> ' +
                    '<span class="badge" style="background:' + uColor + ';color:white">' +
                      ultimo.correctas + '/' + ultimo.total + ' · ' + ultimo.porcentaje + '%' +
                    '</span> ' +
                    '<span class="text-xs text-muted">' + new Date(ultimo.fecha).toLocaleDateString('es-CO') + '</span>' +
                  '</div>';
                })()}
                <button class="btn btn-primary w-full mt-4"
                        data-action="start-simulacro-card"
                        data-area="${area.id}"
                        data-prueba="${prueba.id}">
                  Iniciar Simulacro
                </button>
              ` : `
                <p class="simulacro-unavail">No hay preguntas disponibles para esta prueba. Proximamente.</p>
                <button class="btn btn-secondary w-full mt-4" disabled>Proximamente</button>
              `}
            </div>
          </div>
        `;
      })
    ).join('');

    const tiempoGuardado = this.state.simulacroTiempoConfig != null ? this.state.simulacroTiempoConfig : 240;

    return `
      <h1 class="section-title">Simulacro ICFES</h1>
      <p class="section-description">
        Practica con preguntas tipo Saber en condiciones de examen. Las preguntas se presentan en orden aleatorio con temporizador.
        Al finalizar, recibiras tu puntaje, porcentaje de acierto y retroalimentacion por pregunta.
      </p>

      <div class="simulacro-config-bar">
        <label class="simulacro-config-label">Tiempo limite</label>
        <select class="simulacro-config-select" id="simulacro-tiempo">
          <option value="0" ${tiempoGuardado === 0 ? 'selected' : ''}>Sin limite</option>
          <option value="30" ${tiempoGuardado === 30 ? 'selected' : ''}>30 minutos</option>
          <option value="60" ${tiempoGuardado === 60 ? 'selected' : ''}>1 hora</option>
          <option value="120" ${tiempoGuardado === 120 ? 'selected' : ''}>2 horas</option>
          <option value="240" ${tiempoGuardado === 240 ? 'selected' : ''}>4 horas (Saber 11)</option>
        </select>
      </div>

      <div class="simulacro-filter-bar card">
        <div class="card-body">
          <div class="simulacro-filter-title text-xs text-muted" style="margin-bottom:var(--sp-2)">Filtros opcionales (aplicados al iniciar simulacro)</div>
          <div class="simulacro-filter-groups">
            <div class="simulacro-filter-group">
              <label class="text-xs text-muted">Area</label>
              <select class="simulacro-config-select" id="simulacro-filtro-area" data-action="simulacro-filtro-area-change">
                <option value="">Seleccionar area</option>
                <option value="matematicas">Matematicas</option>
                <option value="lenguaje">Lectura Critica</option>
                <option value="naturales">C. Naturales</option>
                <option value="sociales">Sociales</option>
                <option value="ingles">Ingles</option>
              </select>
            </div>
            <div class="simulacro-filter-group">
              <label class="text-xs text-muted">Competencia</label>
              <select class="simulacro-config-select" id="simulacro-filtro-competencia" disabled>
                <option value="">Todas</option>
              </select>
            </div>
            <div class="simulacro-filter-group">
              <label class="text-xs text-muted">Componente</label>
              <select class="simulacro-config-select" id="simulacro-filtro-componente" disabled>
                <option value="">Todos</option>
              </select>
            </div>
            <div class="simulacro-filter-group">
              <label class="text-xs text-muted">Num. preguntas</label>
              <select class="simulacro-config-select" id="simulacro-filtro-num">
                <option value="0" ${this.state.simulacroFiltros.numPreguntas === 0 ? 'selected' : ''}>Todas</option>
                <option value="5" ${this.state.simulacroFiltros.numPreguntas === 5 ? 'selected' : ''}>5</option>
                <option value="10" ${this.state.simulacroFiltros.numPreguntas === 10 ? 'selected' : ''}>10</option>
                <option value="15" ${this.state.simulacroFiltros.numPreguntas === 15 ? 'selected' : ''}>15</option>
                <option value="20" ${this.state.simulacroFiltros.numPreguntas === 20 ? 'selected' : ''}>20</option>
                <option value="30" ${this.state.simulacroFiltros.numPreguntas === 30 ? 'selected' : ''}>30</option>
              </select>
            </div>
            <div class="simulacro-filter-group">
              <label class="simulacro-filter-checkbox">
                <input type="checkbox" id="simulacro-filtro-repaso" ${this.state.simulacroFiltros.modoRepaso ? 'checked' : ''}>
                <span class="text-xs">Solo incorrectas (Repaso)</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="simulacro-grid">
        ${cards}
      </div>

      <div class="card simulacro-multiarea-card mt-4">
        <div class="card-body" style="text-align:center">
          <div style="font-size:1.5rem;margin-bottom:var(--sp-2)">📐📖🔬🏛🌐</div>
          <div class="card-title">Saber 11 Completo</div>
          <p class="text-sm text-muted mt-2">Simulacion completa de las 5 areas en secuencia. Matematicas (55 min), Lectura Critica (55 min), Naturales (50 min), Sociales (50 min), Ingles (40 min)</p>
          <p class="text-xs text-muted mt-1">4 horas 30 minutos</p>
          <button class="btn btn-primary mt-4" data-action="start-simulacro-completo">Iniciar Saber 11 Completo</button>
        </div>
      </div>
    `;
  },

  // Vista del simulacro en curso
  renderSimulacroActivo() {
    const sim = this.state.simulacro;
    if (!sim || !sim.preguntas.length) {
      return `
        <div class="empty-state">
          <div class="empty-state-icon">📝</div>
          <div class="empty-state-title">Sin preguntas disponibles</div>
          <p class="empty-state-text">No hay preguntas para esta combinacion.</p>
          <button class="btn btn-primary mt-4" data-action="navigate" data-value="#/simulacro">Volver al Simulacro</button>
        </div>
      `;
    }

    const { preguntas, actual, tiempoRestante, tiempoLimite, tiempoInicio, respuestas, pruebaId, area } = sim;
    const pregunta = preguntas[actual];
    const totalPreguntas = preguntas.length;
    const progPct = Math.round((actual / totalPreguntas) * 100);

    const sinLimite = tiempoLimite === 0;
    let timerTexto, timerClase;
    if (sinLimite) {
      const elapsed = Math.floor((Date.now() - tiempoInicio) / 1000);
      const hh = String(Math.floor(elapsed / 3600)).padStart(2, '0');
      const mm = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
      const ss = String(elapsed % 60).padStart(2, '0');
      timerTexto = `${hh}:${mm}:${ss}`;
      timerClase = '';
    } else {
      const hh = String(Math.floor(tiempoRestante / 3600)).padStart(2, '0');
      const mm = String(Math.floor((tiempoRestante % 3600) / 60)).padStart(2, '0');
      const ss = String(tiempoRestante % 60).padStart(2, '0');
      timerTexto = `${hh}:${mm}:${ss}`;
      timerClase = tiempoRestante <= 60 ? 'urgente' : tiempoRestante <= 300 ? 'warning' : '';
    }
    const esUltima = actual + 1 >= totalPreguntas;
    const respActual = respuestas[actual];

    const areaLabels = { matematicas: 'Matematicas', lenguaje: 'Lectura Critica', naturales: 'Ciencias Naturales', sociales: 'Sociales y Ciudadanas', ingles: 'Inglés' };
    const pruebaLabels = { 'saber-9': 'Saber 9°', 'saber-11': 'Saber 11°' };

    return `
      <!-- Barra superior -->
      <div class="simulacro-header">
        <div class="simulacro-header-info">
          <span class="badge badge-muted">${areaLabels[area] || area}</span>
          <span class="badge badge-muted">${pruebaLabels[pruebaId] || pruebaId}</span>
          <span class="simulacro-num" id="sim-question-num">Pregunta ${actual + 1} de ${totalPreguntas}</span>
        </div>
        <div class="simulacro-header-controls">
          <div class="simulacro-timer ${timerClase}" id="sim-timer" aria-label="Tiempo restante" role="timer">${timerTexto}</div>
          <button class="btn btn-ghost btn-sm" data-action="simulacro-abandonar">Abandonar</button>
        </div>
      </div>

      <!-- Barra de progreso -->
      <div class="simulacro-progress">
        <div class="simulacro-progress-bar" id="sim-progress-bar" style="width:${progPct}%"></div>
      </div>

      <!-- Pregunta actual -->
      <div class="simulacro-pregunta card">
        <div class="card-body">
          <div class="simulacro-enunciado" id="sim-enunciado">${pregunta.enunciado.replace(/\n/g, '<br>')}</div>

          <div class="simulacro-opciones" id="sim-opciones" role="radiogroup" aria-label="Opciones de respuesta">
            ${pregunta.opciones.map(op => `
              <div class="simulacro-opcion ${respActual === op.letra ? 'selected' : ''}"
                   role="radio"
                   aria-checked="${respActual === op.letra ? 'true' : 'false'}"
                   tabindex="${respActual === op.letra ? '0' : '-1'}"
                   data-action="simulacro-respuesta"
                   data-value="${op.letra}">
                <span class="simulacro-opcion-letra" aria-hidden="true">${op.letra}</span>
                <span class="simulacro-opcion-texto">${op.texto}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Controles de navegacion -->
      <div class="simulacro-nav">
        ${esUltima
          ? `<button class="btn btn-primary btn-lg" id="sim-btn-next"
                     data-action="simulacro-finalizar"
                     ${!respActual ? 'disabled' : ''}>
               Finalizar Simulacro
             </button>`
          : `<button class="btn btn-primary" id="sim-btn-next"
                     data-action="simulacro-next"
                     ${!respActual ? 'disabled' : ''}>
               Siguiente Pregunta
             </button>`
        }
      </div>
    `;
  },

  // Build narrative summary of strengths and opportunities
  _buildNarrativaSummary(porCompetencia, area) {
    const fortalezas = [];
    const oportunidades = [];
    for (const [comp, datos] of Object.entries(porCompetencia)) {
      const pct = datos.total > 0 ? Math.round((datos.correctas / datos.total) * 100) : 0;
      if (pct >= 70) fortalezas.push({ comp, pct });
      else if (pct < 50) oportunidades.push({ comp, pct });
    }
    if (fortalezas.length === 0 && oportunidades.length === 0) return '';
    let html = '<div class="sim-narrativa card"><div class="card-body">';
    html += '<div class="card-title" style="margin-bottom:var(--sp-2)">Analisis de Desempeno</div>';
    if (fortalezas.length > 0) {
      html += '<div class="sim-narrativa-seccion"><span class="sim-narrativa-label" style="color:var(--success)">Fortalezas:</span> ';
      html += fortalezas.map(f => '<span class="badge" style="background:var(--success);color:white;margin-right:var(--sp-1)">' + f.comp + ' (' + f.pct + '%)</span>').join('');
      html += '</div>';
    }
    if (oportunidades.length > 0) {
      html += '<div class="sim-narrativa-seccion" style="margin-top:var(--sp-2)"><span class="sim-narrativa-label" style="color:var(--danger)">Oportunidades de mejora:</span> ';
      html += oportunidades.map(o => '<span class="badge" style="background:var(--danger);color:white;margin-right:var(--sp-1)">' + o.comp + ' (' + o.pct + '%)</span>').join('');
      html += '</div>';
    }
    html += '</div></div>';
    return html;
  },

  // Build comparison with previous result
  _buildComparacion(area, pruebaId, porcentajeActual) {
    const historial = Storage.getSimulacroResults(area);
    // Find previous result (index 0 is the one just saved, index 1 is previous)
    const anterior = historial.length > 1 ? historial[1] : null;
    if (!anterior || anterior.pruebaId !== pruebaId) return '';
    const diff = porcentajeActual - anterior.porcentaje;
    if (diff === 0) return '<div class="sim-comparacion"><span class="text-muted text-sm">Mismo resultado que el intento anterior (' + anterior.porcentaje + '%)</span></div>';
    const flecha = diff > 0 ? '↑' : '↓';
    const color = diff > 0 ? 'var(--success)' : 'var(--danger)';
    const signo = diff > 0 ? '+' : '';
    return '<div class="sim-comparacion card"><div class="card-body" style="padding:var(--sp-3)">' +
      '<span class="text-sm text-muted">vs. anterior: </span>' +
      '<span style="color:' + color + ';font-weight:600;font-size:1.1rem">' + flecha + ' ' + signo + diff + '%</span>' +
      '<span class="text-sm text-muted" style="margin-left:var(--sp-2)">(' + anterior.porcentaje + '% → ' + porcentajeActual + '%)</span>' +
    '</div></div>';
  },

  // Build "Aprendizajes a Reforzar" section from incorrect answers
  _buildAprendizajesReforzar(detalles, area, pruebaId) {
    const incorrectas = detalles.filter(d => !d.esCorrecto && d.respuesta);
    if (incorrectas.length === 0) return '';
    // Group by competencia
    const porComp = {};
    for (const d of incorrectas) {
      const comp = d.pregunta.competencia || 'otro';
      if (!porComp[comp]) porComp[comp] = [];
      porComp[comp].push(d);
    }
    // Get relevant aprendizajes from ICFES data
    let html = '<div class="sim-reforzar card"><div class="card-header"><span class="card-title">Aprendizajes a Reforzar</span></div><div class="card-body">';
    for (const [comp, items] of Object.entries(porComp)) {
      html += '<div class="sim-reforzar-comp">';
      html += '<div class="sim-reforzar-comp-title">' + comp + ' <span class="badge badge-muted">' + items.length + ' incorrectas</span></div>';
      // Get top 3 aprendizajes for this competencia
      if (typeof getAprendizajesICFES === 'function') {
        const aprendizajes = getAprendizajesICFES(area, pruebaId, comp).slice(0, 3);
        if (aprendizajes.length > 0) {
          html += '<ul class="sim-reforzar-list">';
          for (const a of aprendizajes) {
            // Determine grupo for the area link
            const grupo = pruebaId === 'saber-9' ? '8-9' : '10-11';
            html += '<li class="sim-reforzar-item">';
            html += '<span class="text-sm">' + a.enunciado + '</span>';
            html += ' <a href="#/area/' + area + '/' + grupo + '" class="sim-reforzar-link text-xs">Ver en area →</a>';
            html += '</li>';
          }
          html += '</ul>';
        }
      }
      html += '</div>';
    }
    html += '</div></div>';
    return html;
  },

  // Pantalla de resultados
  renderSimulacroResultados(abandonado) {
    const sim = this.state.simulacro;
    if (!sim) {
      return `<div class="empty-state"><p class="empty-state-text">No hay simulacro activo.</p></div>`;
    }

    const { preguntas, respuestas, area, pruebaId } = sim;
    const total = preguntas.length;
    const respondidas = Object.keys(respuestas).length;

    // Calcular correctas
    let correctas = 0;
    const detalles = preguntas.map((p, i) => {
      const respuesta = respuestas[i];
      const esCorrecto = respuesta === p.clave;
      if (esCorrecto) correctas++;
      return { pregunta: p, respuesta, esCorrecto, indice: i };
    });

    const porcentaje = total > 0 ? Math.round((correctas / total) * 100) : 0;

    // Desglose por competencia
    const porCompetencia = {};
    for (const d of detalles) {
      const comp = d.pregunta.competencia || 'otro';
      if (!porCompetencia[comp]) porCompetencia[comp] = { total: 0, correctas: 0 };
      porCompetencia[comp].total++;
      if (d.esCorrecto) porCompetencia[comp].correctas++;
    }

    // Tiempo usado
    const tiempoUsado = sim.tiempoFin
      ? Math.floor((sim.tiempoFin - sim.tiempoInicio) / 1000)
      : (sim.tiempoLimite > 0 ? sim.tiempoLimite - (sim.tiempoRestante || 0) : Math.floor((Date.now() - sim.tiempoInicio) / 1000));
    const hhUsado = String(Math.floor(tiempoUsado / 3600)).padStart(2, '0');
    const mmUsado = String(Math.floor((tiempoUsado % 3600) / 60)).padStart(2, '0');
    const ssUsado = String(tiempoUsado % 60).padStart(2, '0');
    const tiempoUsadoTexto = parseInt(hhUsado) > 0 ? `${hhUsado}:${mmUsado}:${ssUsado}` : `${mmUsado}:${ssUsado}`;

    const areaLabels = { matematicas: 'Matematicas', lenguaje: 'Lectura Critica', naturales: 'Ciencias Naturales', sociales: 'Sociales y Ciudadanas', ingles: 'Inglés' };
    const pruebaLabels = { 'saber-9': 'Saber 9°', 'saber-11': 'Saber 11°' };

    const scoreColor = porcentaje >= 70 ? 'var(--success)' : porcentaje >= 50 ? 'var(--warning)' : 'var(--danger)';

    return `
      <div class="simulacro-resultados">
        <!-- Encabezado -->
        <div class="flex items-center justify-between" style="flex-wrap:wrap; gap:var(--sp-3)">
          <div>
            <h1 class="section-title">Resultados del Simulacro</h1>
            <p class="text-sm text-secondary">${areaLabels[area] || area} · ${pruebaLabels[pruebaId] || pruebaId}</p>
          </div>
          <button class="btn btn-secondary" data-action="navigate" data-value="#/simulacro">Nuevo Simulacro</button>
        </div>

        ${abandonado ? '<div class="badge badge-muted" style="margin-bottom:var(--sp-4)">Simulacro abandonado</div>' : ''}

        <!-- Puntaje principal -->
        <div class="simulacro-score-panel card">
          <div class="card-body">
            <div class="simulacro-score-center">
              <div class="simulacro-score" style="color:${scoreColor}">${correctas}/${total}</div>
              <div class="simulacro-score-pct" style="color:${scoreColor}">${porcentaje}% de acierto</div>
              <div class="simulacro-score-meta text-muted text-sm">
                Tiempo usado: ${tiempoUsadoTexto} &nbsp;·&nbsp; Respondidas: ${respondidas}/${total}
              </div>
            </div>
          </div>
        </div>

        ${!abandonado ? this._buildNarrativaSummary(porCompetencia, area) : ''}
        ${!abandonado ? this._buildComparacion(area, pruebaId, porcentaje) : ''}

        <!-- Desglose por competencia -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">Desglose por Competencia</span>
          </div>
          <div class="card-body">
            <div class="simulacro-competencias-grid">
              ${Object.entries(porCompetencia).map(([comp, datos]) => {
                const pct = datos.total > 0 ? Math.round((datos.correctas / datos.total) * 100) : 0;
                const color = pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
                return `
                  <div class="simulacro-comp-item">
                    <div class="simulacro-comp-nombre">${comp}</div>
                    <div class="simulacro-comp-barra-wrap">
                      <div class="simulacro-comp-barra">
                        <div class="simulacro-comp-fill" style="width:${pct}%; background:${color}"></div>
                      </div>
                      <span class="simulacro-comp-pct" style="color:${color}">${pct}%</span>
                    </div>
                    <div class="text-xs text-muted">${datos.correctas}/${datos.total} correctas</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Detalle por pregunta -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">Detalle por Pregunta</span>
            <span class="badge badge-muted">${total} preguntas</span>
          </div>
          <div class="card-body" style="padding:0">
            ${detalles.map((d, i) => `
              <div class="simulacro-detalle-item ${d.esCorrecto ? 'simulacro-correcta' : 'simulacro-incorrecta'}">
                <div class="simulacro-detalle-header">
                  <span class="simulacro-detalle-num">${i + 1}</span>
                  <span class="simulacro-mark">${d.esCorrecto ? '✓' : '✗'}</span>
                  <div class="simulacro-detalle-enunciado">${d.pregunta.enunciado.length > 140
                    ? d.pregunta.enunciado.substring(0, 140) + '...'
                    : d.pregunta.enunciado}</div>
                  <div class="flex gap-2 ml-auto">
                    <span class="badge badge-muted" style="font-size:0.6rem">${d.pregunta.competencia || ''}</span>
                  </div>
                </div>
                <div class="simulacro-detalle-respuestas">
                  ${!d.respuesta ? '<span class="text-muted text-xs">Sin respuesta</span>' : ''}
                  ${d.respuesta && !d.esCorrecto ? `
                    <span class="simulacro-resp-incorrecta">Tu respuesta: ${d.respuesta}</span>
                  ` : ''}
                  <span class="simulacro-resp-correcta">Correcta: ${d.pregunta.clave}</span>
                </div>
                <details class="simulacro-justificacion">
                  <summary class="text-xs text-accent" style="cursor:pointer; padding:var(--sp-2) var(--sp-4)">
                    Ver justificacion
                  </summary>
                  <p class="text-sm text-secondary simulacro-justif-texto">${d.pregunta.justificacion}</p>
                </details>
              </div>
            `).join('')}
          </div>
        </div>

        ${!abandonado ? this._buildAprendizajesReforzar(detalles, area, pruebaId) : ''}
      </div>
    `;
  },

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
  },

  // === DASHBOARD ===
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
  },

  // === SIMULACRO SABER 11 COMPLETO ===
  _initSimulacroCompletoState() {
    var secciones = [
      { area: 'matematicas', nombre: 'Matematicas', pruebaId: 'saber-11', tiempo: 55 * 60, icon: '📐' },
      { area: 'lenguaje', nombre: 'Lectura Critica', pruebaId: 'saber-11', tiempo: 55 * 60, icon: '📖' },
      { area: 'naturales', nombre: 'C. Naturales', pruebaId: 'saber-11', tiempo: 50 * 60, icon: '🔬' },
      { area: 'sociales', nombre: 'Sociales', pruebaId: 'saber-11', tiempo: 50 * 60, icon: '🏛' },
      { area: 'ingles', nombre: 'Ingles', pruebaId: 'saber-11', tiempo: 40 * 60, icon: '🌐' }
    ];
    var sec = secciones[0];
    var preguntas = [];
    if (typeof PREGUNTAS_ICFES !== 'undefined' && PREGUNTAS_ICFES[sec.area] && PREGUNTAS_ICFES[sec.area][sec.pruebaId]) {
      preguntas = this._shuffle(PREGUNTAS_ICFES[sec.area][sec.pruebaId]);
    }
    this.state.simulacro = {
      area: sec.area, pruebaId: sec.pruebaId, preguntas: preguntas,
      respuestas: {}, actual: 0, tiempoInicio: Date.now(),
      tiempoLimite: sec.tiempo, tiempoRestante: sec.tiempo,
      timerInterval: null, finalizado: false,
      esMultiArea: true, secciones: secciones, seccionActual: 0, resultadosSecciones: []
    };
  },

  _finalizarSeccionMultiArea() {
    var sim = this.state.simulacro;
    if (!sim || !sim.esMultiArea) return;
    var preguntas = sim.preguntas;
    var respuestas = sim.respuestas;
    var correctas = 0;
    var wrongIds = [];
    preguntas.forEach(function(p, i) {
      if (respuestas[i] === p.clave) correctas++;
      else if (respuestas[i]) wrongIds.push(p.id);
    });
    sim.resultadosSecciones.push({
      area: sim.area, pruebaId: sim.pruebaId,
      nombre: sim.secciones[sim.seccionActual].nombre,
      icon: sim.secciones[sim.seccionActual].icon,
      correctas: correctas, total: preguntas.length,
      porcentaje: preguntas.length > 0 ? Math.round((correctas / preguntas.length) * 100) : 0,
      tiempoUsado: Math.floor((Date.now() - sim.tiempoInicio) / 1000),
      wrongIds: wrongIds
    });
    if (sim.timerInterval) { clearInterval(sim.timerInterval); sim.timerInterval = null; }
    if (sim.seccionActual + 1 < sim.secciones.length) {
      sim.seccionActual++;
      this._showSeccionTransicion();
    } else {
      sim.finalizado = true;
      sim.tiempoFin = Date.now();
      var tc = 0, tp = 0, aw = [];
      for (var res of sim.resultadosSecciones) { tc += res.correctas; tp += res.total; aw = aw.concat(res.wrongIds); }
      Storage.saveSimulacroResult({
        area: 'multi', pruebaId: 'saber-11-completo',
        correctas: tc, total: tp,
        porcentaje: tp > 0 ? Math.round((tc / tp) * 100) : 0,
        tiempoUsado: sim.resultadosSecciones.reduce(function(s, r) { return s + r.tiempoUsado; }, 0),
        porCompetencia: {}, porComponente: {}, wrongIds: aw
      });
      var main = document.getElementById('main-content');
      if (main) main.innerHTML = this.renderSimulacroCompletoResultados();
    }
  },

  _showSeccionTransicion() {
    var sim = this.state.simulacro;
    var nextSec = sim.secciones[sim.seccionActual];
    var prevResult = sim.resultadosSecciones[sim.resultadosSecciones.length - 1];
    var main = document.getElementById('main-content');
    if (!main) return;
    main.innerHTML = '<div class="simulacro-transicion">' +
      '<div class="simulacro-transicion-check">✓</div>' +
      '<div class="card-title">' + prevResult.nombre + ' completada</div>' +
      '<div class="text-sm text-muted mt-2">' + prevResult.correctas + '/' + prevResult.total + ' (' + prevResult.porcentaje + '%)</div>' +
      '<div class="simulacro-transicion-next mt-4"><div class="text-lg">' + nextSec.icon + '</div>' +
      '<div class="card-title">Siguiente: ' + nextSec.nombre + '</div>' +
      '<div class="text-sm text-muted">' + Math.floor(nextSec.tiempo / 60) + ' minutos</div></div>' +
      '<div class="simulacro-transicion-countdown mt-4 text-lg" id="transicion-countdown">3</div></div>';
    var count = 3;
    var self = this;
    var interval = setInterval(function() {
      count--;
      var el = document.getElementById('transicion-countdown');
      if (el) el.textContent = count;
      if (count <= 0) { clearInterval(interval); self._loadSeccionMultiArea(); }
    }, 1000);
  },

  _loadSeccionMultiArea() {
    var sim = this.state.simulacro;
    var sec = sim.secciones[sim.seccionActual];
    var preguntas = [];
    if (typeof PREGUNTAS_ICFES !== 'undefined' && PREGUNTAS_ICFES[sec.area] && PREGUNTAS_ICFES[sec.area][sec.pruebaId]) {
      preguntas = this._shuffle(PREGUNTAS_ICFES[sec.area][sec.pruebaId]);
    }
    sim.area = sec.area; sim.pruebaId = sec.pruebaId; sim.preguntas = preguntas;
    sim.respuestas = {}; sim.actual = 0; sim.tiempoInicio = Date.now();
    sim.tiempoLimite = sec.tiempo; sim.tiempoRestante = sec.tiempo; sim.finalizado = false;
    this.render();
  },

  renderSimulacroCompletoResultados() {
    var sim = this.state.simulacro;
    if (!sim || !sim.resultadosSecciones) return '<div class="empty-state"><p class="empty-state-text">No hay resultados.</p></div>';
    var resultados = sim.resultadosSecciones;
    var tc = 0, tp = 0, tt = 0;
    for (var r of resultados) { tc += r.correctas; tp += r.total; tt += r.tiempoUsado; }
    var pctG = tp > 0 ? Math.round((tc / tp) * 100) : 0;
    var gc = pctG >= 70 ? 'var(--success)' : pctG >= 50 ? 'var(--warning)' : 'var(--danger)';
    var barras = '';
    for (var r of resultados) {
      var c = r.porcentaje >= 70 ? 'var(--success)' : r.porcentaje >= 50 ? 'var(--warning)' : 'var(--danger)';
      barras += '<div class="multiarea-result-row"><span class="multiarea-result-icon">' + r.icon + '</span><span class="multiarea-result-nombre">' + r.nombre + '</span><div class="multiarea-result-bar-wrap"><div class="multiarea-result-bar" style="width:' + r.porcentaje + '%;background:' + c + '"></div></div><span class="multiarea-result-pct" style="color:' + c + '">' + r.porcentaje + '%</span><span class="text-xs text-muted">' + r.correctas + '/' + r.total + '</span></div>';
    }
    return '<div class="simulacro-resultados"><div class="flex items-center justify-between" style="flex-wrap:wrap;gap:var(--sp-3)"><div><h1 class="section-title">Saber 11 Completo — Resultados</h1><p class="text-sm text-secondary">' + resultados.length + ' areas · ' + Math.floor(tt / 60) + ' min</p></div><button class="btn btn-secondary" data-action="navigate" data-value="#/simulacro">Nuevo Simulacro</button></div>' +
      '<div class="simulacro-score-panel card"><div class="card-body"><div class="simulacro-score-center"><div class="simulacro-score" style="color:' + gc + '">' + tc + '/' + tp + '</div><div class="simulacro-score-pct" style="color:' + gc + '">' + pctG + '% global</div></div></div></div>' +
      '<div class="card mt-4"><div class="card-header"><span class="card-title">Resultados por Area</span></div><div class="card-body">' + barras + '</div></div>' +
      '<div class="flex gap-2 mt-4"><button class="btn btn-primary" data-action="navigate" data-value="#/dashboard">Ver Estadisticas</button><button class="btn btn-secondary" data-action="navigate" data-value="#/simulacro">Volver</button></div></div>';
  },

  // === TOAST ===
  showToast(msg) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.setAttribute('aria-atomic', 'true');
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.remove('toast-hide');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => toast.classList.add('toast-hide'), 3000);
  }
};

// === HELPERS ===
const _highlightCache = new Map();
function highlightText(text, query) {
  if (!query) return text;
  const words = query.split(/\s+/).filter(w => w.length > 1);
  let result = text;
  for (const word of words) {
    let re = _highlightCache.get(word);
    if (!re) {
      re = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      _highlightCache.set(word, re);
      if (_highlightCache.size > 50) _highlightCache.delete(_highlightCache.keys().next().value);
    }
    result = result.replace(re, '<mark>$1</mark>');
  }
  return result;
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => App.init());
