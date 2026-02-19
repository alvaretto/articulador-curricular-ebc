// app-views.js — Render methods for main views
// Extends the App object defined in app.js

Object.assign(App, {

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

});
