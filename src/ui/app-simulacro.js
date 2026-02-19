// === SIMULACRO ICFES + SABER 11 COMPLETO ===
// Extends App with all simulacro-related methods.
// Loaded after app.js; requires App to be defined.

Object.assign(App, {

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
  }

});
