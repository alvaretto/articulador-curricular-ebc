// almacenamiento.js — Persistencia en localStorage para institución, perfiles, preferencias

const STORAGE_PREFIX = 'articulador_ebc_';

const Storage = {
  _coberturaCache: new Map(),

  // Guardar/leer genérico
  set(key, value) {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('Error guardando en localStorage:', e);
      return false;
    }
  },

  get(key, defaultValue) {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + key);
      return raw ? JSON.parse(raw) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  },

  remove(key) {
    localStorage.removeItem(STORAGE_PREFIX + key);
  },

  // === INSTITUCIÓN ===
  getInstitucion() {
    return this.get('institucion', {
      nombre: '',
      dane: '',
      municipio: '',
      departamento: '',
      jornada: 'manana',
      annoLectivo: new Date().getFullYear()
    });
  },

  setInstitucion(data) {
    return this.set('institucion', data);
  },

  // === PREFERENCIAS ===
  getPreferencias() {
    return this.get('preferencias', {
      tema: 'auto', // 'dark', 'light', 'auto'
      areaDefault: null,
      cicloDefault: null,
      mostrarDBA: true,
      mostrarICFES: true,
      apiKeyGemini: ''
    });
  },

  setPreferencias(prefs) {
    return this.set('preferencias', prefs);
  },

  getApiKey() {
    return this.getPreferencias().apiKeyGemini || '';
  },

  setApiKey(key) {
    const prefs = this.getPreferencias();
    prefs.apiKeyGemini = key;
    return this.setPreferencias(prefs);
  },

  // === GRUPOS/CURSOS ===
  getGrupos() {
    return this.get('grupos', []);
  },

  addGrupo(grupo) {
    const grupos = this.getGrupos();
    grupo.id = grupo.id || 'g_' + Date.now();
    grupos.push(grupo);
    return this.set('grupos', grupos) ? grupo : null;
  },

  updateGrupo(id, data) {
    const grupos = this.getGrupos();
    const idx = grupos.findIndex(g => g.id === id);
    if (idx === -1) return false;
    grupos[idx] = { ...grupos[idx], ...data };
    return this.set('grupos', grupos);
  },

  removeGrupo(id) {
    const grupos = this.getGrupos().filter(g => g.id !== id);
    return this.set('grupos', grupos);
  },

  // === ESTUDIANTES CON NEE ===
  getEstudiantes(grupoId) {
    const todos = this.get('estudiantes', []);
    return grupoId ? todos.filter(e => e.grupoId === grupoId) : todos;
  },

  addEstudiante(est) {
    const todos = this.get('estudiantes', []);
    est.id = est.id || 'e_' + Date.now();
    todos.push(est);
    return this.set('estudiantes', todos) ? est : null;
  },

  updateEstudiante(id, data) {
    const todos = this.get('estudiantes', []);
    const idx = todos.findIndex(e => e.id === id);
    if (idx === -1) return false;
    todos[idx] = { ...todos[idx], ...data };
    return this.set('estudiantes', todos);
  },

  removeEstudiante(id) {
    const todos = this.get('estudiantes', []).filter(e => e.id !== id);
    return this.set('estudiantes', todos);
  },

  // === HISTORIAL IA ===
  getHistorialIA() {
    return this.get('historial_ia', []);
  },

  addHistorialIA(entrada) {
    const historial = this.getHistorialIA();
    entrada.fecha = new Date().toISOString();
    entrada.id = 'ia_' + Date.now();
    historial.unshift(entrada); // más reciente primero
    // Mantener solo últimos 50
    if (historial.length > 50) historial.length = 50;
    return this.set('historial_ia', historial);
  },

  // === HISTORIAL DE SIMULACROS ===
  saveSimulacroResult(result) {
    const historial = this.get('simulacro_historial', []);
    result.id = 'sim_' + Date.now();
    result.fecha = new Date().toISOString();
    historial.unshift(result);
    if (historial.length > 20) historial.length = 20;
    return this.set('simulacro_historial', historial);
  },

  getSimulacroResults(area) {
    const all = this.get('simulacro_historial', []);
    return area ? all.filter(r => r.area === area) : all;
  },

  getUltimoResultado(area, pruebaId) {
    const resultados = this.getSimulacroResults(area);
    return resultados.find(r => r.pruebaId === pruebaId) || null;
  },

  limpiarHistorialSimulacros() {
    this.remove('simulacro_historial');
  },

  // === ESTADO DE NAVEGACIÓN ===
  getUltimaVista() {
    return this.get('ultima_vista', { area: 'matematicas', grupo: '8-9', eje: null });
  },

  setUltimaVista(vista) {
    return this.set('ultima_vista', vista);
  },

  // === EXPORTAR/IMPORTAR TODO ===
  exportarTodo() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(STORAGE_PREFIX)) {
        data[key.replace(STORAGE_PREFIX, '')] = JSON.parse(localStorage.getItem(key));
      }
    }
    return data;
  },

  importarTodo(data) {
    for (const [key, value] of Object.entries(data)) {
      this.set(key, value);
    }
  },

  limpiarTodo() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(STORAGE_PREFIX)) keys.push(key);
    }
    keys.forEach(k => localStorage.removeItem(k));
    this._coberturaCache.clear();
  },

  // === COBERTURA DE ESTÁNDARES ===

  // Key para un área+grupo específico
  _coberturaKey(area, grupo) {
    return 'cobertura_' + area + '_' + grupo.replace('-', '_');
  },

  // Retorna Set de índices trabajados para un área+grupo
  getEstandaresTrabajados(area, grupo) {
    const key = this._coberturaKey(area, grupo);
    if (this._coberturaCache.has(key)) return this._coberturaCache.get(key);
    const arr = this.get(key, []);
    const s = new Set(arr);
    this._coberturaCache.set(key, s);
    return s;
  },

  // Toggle: marca o desmarca un estándar por índice
  toggleEstandarTrabajado(area, grupo, estandarIndex) {
    const trabajados = this.getEstandaresTrabajados(area, grupo);
    if (trabajados.has(estandarIndex)) {
      trabajados.delete(estandarIndex);
    } else {
      trabajados.add(estandarIndex);
    }
    this.set(this._coberturaKey(area, grupo), Array.from(trabajados));
  },

  // Progreso para un área+grupo: { trabajados, total, porcentaje }
  getProgreso(area, grupo, total) {
    const trabajados = this.getEstandaresTrabajados(area, grupo).size;
    const porcentaje = total > 0 ? Math.round((trabajados / total) * 100) : 0;
    return { trabajados, total, porcentaje };
  },

  // Progreso general de un área: promedia todos los grupos con al menos 1 estándar
  // grupos: array de { grupo, total } con el total de estándares por grupo
  getProgresoGeneral(area, gruposConTotales) {
    if (!gruposConTotales || !gruposConTotales.length) return { trabajados: 0, total: 0, porcentaje: 0 };
    let sumaTrabajados = 0;
    let sumaTotal = 0;
    for (const { grupo, total } of gruposConTotales) {
      if (total > 0) {
        sumaTrabajados += this.getEstandaresTrabajados(area, grupo).size;
        sumaTotal += total;
      }
    }
    const porcentaje = sumaTotal > 0 ? Math.round((sumaTrabajados / sumaTotal) * 100) : 0;
    return { trabajados: sumaTrabajados, total: sumaTotal, porcentaje };
  },

  // Reiniciar progreso de un área+grupo
  resetProgreso(area, grupo) {
    this.remove(this._coberturaKey(area, grupo));
    this._coberturaCache.delete(this._coberturaKey(area, grupo));
  }
};

// === ANALYTICS OFFLINE ===
const Analytics = {
  KEY: 'articulador-analytics',

  _getData() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || { vistas: {}, acciones: {}, sesiones: 0, ultimaSesion: null };
    } catch { return { vistas: {}, acciones: {}, sesiones: 0, ultimaSesion: null }; }
  },

  _save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch {}
  },

  // Registrar vista de página
  registrarVista(vista, detalles) {
    const data = this._getData();
    const key = detalles ? vista + ':' + detalles : vista;
    data.vistas[key] = (data.vistas[key] || 0) + 1;
    this._save(data);
  },

  // Registrar acción (exportar, simulacro, búsqueda, etc.)
  registrarAccion(accion) {
    const data = this._getData();
    data.acciones[accion] = (data.acciones[accion] || 0) + 1;
    this._save(data);
  },

  // Registrar nueva sesión (una por día)
  registrarSesion() {
    const data = this._getData();
    const hoy = new Date().toISOString().split('T')[0];
    if (data.ultimaSesion !== hoy) {
      data.sesiones++;
      data.ultimaSesion = hoy;
      this._save(data);
    }
  },

  // Obtener resumen para mostrar en config
  getResumen() {
    const data = this._getData();
    const topVistas = Object.entries(data.vistas)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    const topAcciones = Object.entries(data.acciones)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    return { topVistas, topAcciones, sesiones: data.sesiones, ultimaSesion: data.ultimaSesion };
  },

  // Limpiar analytics
  limpiar() {
    localStorage.removeItem(this.KEY);
  }
};
