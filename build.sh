#!/bin/bash
# build.sh — Genera articulador-curricular.html autocontenido (standalone)
# Uso: bash build.sh
#
# NOTA PWA: El Service Worker y el manifest.json NO se incluyen en el build standalone
# porque el SW no puede registrarse desde file://, solo desde un servidor HTTP/HTTPS.
# Para usar la PWA completa (instalable, offline via SW), servir index.html con sus
# archivos fuente directamente desde GitHub Pages o cualquier servidor HTTP.

set -e
cd "$(dirname "$0")"

echo "🔨 Construyendo Articulador Curricular (standalone)..."

# Leer CSS
CSS=$(cat src/ui/styles.css)

# Leer todos los JS de datos
DATA_JS=""
for f in src/data/i18n.js src/data/ebc-matematicas.js src/data/ebc-lenguaje.js src/data/ebc-naturales.js src/data/ebc-sociales.js src/data/ebc-ingles.js src/data/dba.js src/data/planes-matematicas.js src/data/planes-lenguaje.js src/data/planes-naturales.js src/data/planes-sociales.js src/data/planes-ingles.js src/data/progresion-vertical.js src/data/icfes-matematicas.js src/data/icfes-lectura-critica.js src/data/icfes-naturales.js src/data/icfes-sociales.js src/data/icfes-ingles.js src/data/preguntas-icfes.js; do
  DATA_JS+="$(cat "$f")"$'\n'
done

# Leer JS del motor
ENGINE_JS=""
for f in src/engine/filtros.js src/engine/articulacion.js src/engine/busqueda.js src/engine/exportacion.js src/engine/almacenamiento.js src/engine/icfes.js; do
  ENGINE_JS+="$(cat "$f")"$'\n'
done

# Leer JS de IA
IA_JS="$(cat src/ia/connector.js)"$'\n'"$(cat src/ia/templates.js)"

# Leer JS de UI
UI_JS=$(cat src/ui/app.js)

# Generar base64 de logos para embeber en standalone
LOGO_DEFAULT=$(base64 -w0 src/assets/logo-default.png)
LOGO_AZUL=$(base64 -w0 src/assets/logo-azul.png)
LOGO_MORADO=$(base64 -w0 src/assets/logo-morado.png)
LOGO_VERDE=$(base64 -w0 src/assets/logo-verde.png)
LOGO_NARANJA=$(base64 -w0 src/assets/logo-naranja.png)
LOGO_ROJO=$(base64 -w0 src/assets/logo-rojo.png)

# Generar HTML standalone
mkdir -p dist
cat > dist/articulador-curricular.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Articulador Curricular — Continuo Cognitivo</title>
  <meta name="description" content="Articulador curricular colombiano. EBC, DBA e ICFES articulados en 5 áreas, grados 6-11. 460 preguntas ICFES, planes de periodo, simulacros cronometrados. 100% offline.">
  <meta name="theme-color" content="#0e1018">
  <style>
HTMLEOF

echo "$CSS" >> dist/articulador-curricular.html

cat >> dist/articulador-curricular.html << 'HTMLEOF'
  </style>
</head>
<body data-area="matematicas">
  <a class="skip-link" href="#main-content">Saltar al contenido</a>

  <div class="app-layout">
    <header class="app-header">
      <div class="header-brand">
        <button class="btn btn-icon btn-ghost" id="menu-btn" data-action="toggle-sidebar" style="display:none" aria-label="Menú">☰</button>
        <div class="header-logo"><img id="header-logo-img" src="" alt="Logo"></div>
        <div>
          <div class="header-title">Articulador Curricular</div>
          <div class="header-subtitle">Asistente Pedagógico para el Docente Colombiano</div>
        </div>
      </div>
      <div class="header-actions">
        <span class="header-badge-men"><strong>Continuo Cognitivo</strong><small>Formaci&oacute;n y Evaluaci&oacute;n</small></span>
        <button class="theme-toggle" id="theme-toggle" data-action="toggle-theme" title="Cambiar tema" aria-label="Cambiar tema">◐</button>
      </div>
    </header>
    <aside class="app-sidebar" id="sidebar"><nav id="sidebar-nav" role="navigation" aria-label="Navegación principal"></nav></aside>
    <div class="sidebar-backdrop" data-action="close-sidebar"></div>
    <main class="app-main" id="main-content"></main>
  </div>

  <script>
HTMLEOF

echo "$DATA_JS" >> dist/articulador-curricular.html
echo "$ENGINE_JS" >> dist/articulador-curricular.html
echo "$IA_JS" >> dist/articulador-curricular.html
echo "$UI_JS" >> dist/articulador-curricular.html

# Inyectar logos base64 como override para standalone
cat >> dist/articulador-curricular.html << LOGOEOF
  // Override logos para standalone (base64)
  App.LOGO_POR_AREA = {
    matematicas: 'data:image/png;base64,${LOGO_AZUL}',
    lenguaje: 'data:image/png;base64,${LOGO_MORADO}',
    naturales: 'data:image/png;base64,${LOGO_VERDE}',
    sociales: 'data:image/png;base64,${LOGO_NARANJA}',
    ingles: 'data:image/png;base64,${LOGO_ROJO}',
    _default: 'data:image/png;base64,${LOGO_DEFAULT}'
  };
LOGOEOF

cat >> dist/articulador-curricular.html << 'HTMLEOF'

  // Mobile menu
  (function() {
    var mq = window.matchMedia('(max-width: 768px)');
    var btn = document.getElementById('menu-btn');
    function update(e) { if (btn) btn.style.display = e.matches ? 'grid' : 'none'; }
    mq.addEventListener('change', update);
    update(mq);
  })();
  </script>
</body>
</html>
HTMLEOF

SIZE=$(wc -c < dist/articulador-curricular.html)
SIZE_KB=$((SIZE / 1024))
echo "✅ Generado: dist/articulador-curricular.html (${SIZE_KB} KB)"
echo "   Abrir en navegador: file://$(pwd)/dist/articulador-curricular.html"
