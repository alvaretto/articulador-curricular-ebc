#!/bin/bash
# build.sh — Genera articulador-saber-icfes.html autocontenido (standalone)
# Uso: bash build.sh

set -e
cd "$(dirname "$0")"

echo "🔨 Construyendo Articulador Curricular Saber ICFES (standalone)..."

# Leer CSS
CSS=$(cat src/ui/styles.css)

# Leer todos los JS de datos
DATA_JS=""
for f in src/data/ebc-matematicas.js src/data/ebc-lenguaje.js src/data/ebc-naturales.js src/data/ebc-sociales.js src/data/dba.js src/data/planes-matematicas.js src/data/progresion-vertical.js src/data/icfes-matematicas.js src/data/icfes-lectura-critica.js; do
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

# Generar HTML standalone
mkdir -p dist
cat > dist/articulador-saber-icfes.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Articulador Curricular Saber ICFES — MEN Colombia</title>
  <meta name="description" content="Articulador curricular alineado a pruebas Saber ICFES. EBC, DBA e ICFES articulados. Funciona 100% offline.">
  <meta name="theme-color" content="#0e1018">
  <style>
HTMLEOF

echo "$CSS" >> dist/articulador-saber-icfes.html

cat >> dist/articulador-saber-icfes.html << 'HTMLEOF'
  </style>
</head>
<body data-area="matematicas">

  <div class="app-layout">
    <header class="app-header">
      <div class="header-brand">
        <button class="btn btn-icon btn-ghost" id="menu-btn" data-action="toggle-sidebar" style="display:none" aria-label="Menú">☰</button>
        <div class="header-logo">ICFES</div>
        <div>
          <div class="header-title">Articulador Curricular Saber ICFES</div>
          <div class="header-subtitle">Asistente Pedagógico para el Docente Colombiano</div>
        </div>
      </div>
      <div class="header-actions">
        <span class="header-badge-men">MEN Colombia</span>
        <button class="theme-toggle" id="theme-toggle" data-action="toggle-theme" title="Cambiar tema" aria-label="Cambiar tema">◐</button>
      </div>
    </header>
    <aside class="app-sidebar" id="sidebar"><nav id="sidebar-nav"></nav></aside>
    <div class="sidebar-backdrop" data-action="close-sidebar"></div>
    <main class="app-main" id="main-content"></main>
  </div>

  <script>
HTMLEOF

echo "$DATA_JS" >> dist/articulador-saber-icfes.html
echo "$ENGINE_JS" >> dist/articulador-saber-icfes.html
echo "$IA_JS" >> dist/articulador-saber-icfes.html
echo "$UI_JS" >> dist/articulador-saber-icfes.html

cat >> dist/articulador-saber-icfes.html << 'HTMLEOF'

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

SIZE=$(wc -c < dist/articulador-saber-icfes.html)
SIZE_KB=$((SIZE / 1024))
echo "✅ Generado: dist/articulador-saber-icfes.html (${SIZE_KB} KB)"
echo "   Abrir en navegador: file://$(pwd)/dist/articulador-saber-icfes.html"
