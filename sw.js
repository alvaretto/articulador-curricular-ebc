// sw.js — Service Worker para Articulador Curricular
// Estrategia: Network-first con fallback a cache

const CACHE_VERSION = 'v7';
const CACHE_CORE = 'articulador-core-' + CACHE_VERSION;
const CACHE_DATA = 'articulador-data-' + CACHE_VERSION;
const CACHE_LAZY = 'articulador-lazy-' + CACHE_VERSION;
const ALL_CACHES = [CACHE_CORE, CACHE_DATA, CACHE_LAZY];

// Core: shell HTML, CSS, JS de app y engine (cambian con frecuencia)
const ASSETS_CORE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './src/ui/styles.css',
  './src/ui/app.js',
  './src/engine/filtros.js',
  './src/engine/articulacion.js',
  './src/engine/busqueda.js',
  './src/engine/exportacion.js',
  './src/engine/almacenamiento.js',
  './src/engine/icfes.js',
  './src/ia/connector.js',
  './src/ia/templates.js',
  './src/data/i18n.js',
];

// Data: datos curriculares estables (cambian raramente)
const ASSETS_DATA = [
  './src/data/ebc-matematicas.js',
  './src/data/ebc-lenguaje.js',
  './src/data/ebc-naturales.js',
  './src/data/ebc-sociales.js',
  './src/data/ebc-ingles.js',
  './src/data/dba.js',
  './src/data/planes-matematicas.js',
  './src/data/planes-lenguaje.js',
  './src/data/planes-naturales.js',
  './src/data/planes-sociales.js',
  './src/data/planes-ingles.js',
  './src/data/progresion-vertical.js',
  './src/data/icfes-matematicas.js',
  './src/data/icfes-lectura-critica.js',
  './src/data/icfes-naturales.js',
  './src/data/icfes-sociales.js',
  './src/data/icfes-ingles.js',
  './src/assets/logo-default.png',
  './src/assets/logo-azul.png',
  './src/assets/logo-morado.png',
  './src/assets/logo-verde.png',
  './src/assets/logo-naranja.png',
  './src/assets/logo-rojo.png',
];

// Lazy: preguntas-icfes.js se cachea en primer uso del simulacro
// No se incluye en install para reducir carga inicial

self.addEventListener('install', (e) => {
  e.waitUntil(
    Promise.all([
      caches.open(CACHE_CORE).then(c => c.addAll(ASSETS_CORE)),
      caches.open(CACHE_DATA).then(c => c.addAll(ASSETS_DATA)),
    ])
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => !ALL_CACHES.includes(k)).map(k => caches.delete(k))
      )
    ).then(() =>
      // Pre-cache preguntas-icfes.js in lazy cache if not already cached
      caches.open(CACHE_LAZY).then(cache =>
        cache.match('./src/data/preguntas-icfes.js').then(resp => {
          if (!resp) return cache.add('./src/data/preguntas-icfes.js');
        }).catch(() => {}) // Silently fail if offline
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        const clone = response.clone();
        const url = e.request.url;
        const cacheName = url.includes('preguntas-icfes')
          ? CACHE_LAZY
          : url.includes('/src/data/') || url.includes('/src/assets/')
            ? CACHE_DATA
            : CACHE_CORE;
        caches.open(cacheName).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
