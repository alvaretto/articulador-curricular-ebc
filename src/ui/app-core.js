// app-core.js — Articulador Curricular - Core App object
// Defines the App object with state, init, theme, routing, and state persistence

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
  },
};

// === INIT ===
document.addEventListener('DOMContentLoaded', () => App.init());
