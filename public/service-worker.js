// public/service-worker.js

const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-tiles-v1';
const OSM_TILE_REGEX = /^https:\/\/[abc]\.tile\.openstreetmap\.org\/.*\.png$/;

// Assets à pré-cacher (le build Vite, icônes, manifest…)
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/robots.txt',
  // ajoute ici tes bundles JS/CSS (ex : '/assets/index.[hash].js')
];

self.addEventListener('install', (event) => {
  console.log('SW install');
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  console.log('SW activate');
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
});

// Pour toutes les requêtes…
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // 1) Si c'est une tuile OSM → CacheFirst
  if (OSM_TILE_REGEX.test(request.url)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const copy = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, copy);
            // Optionnel : limiter le nombre d'entrées
            cache.keys().then((keys) => {
              if (keys.length > 200) cache.delete(keys[0]);
            });
          });
          return response;
        });
      })
    );
    return;
  }

  // 2) Pour le reste → NetworkFirst (puis fallback cache)
  event.respondWith(
    fetch(request)
      .then((response) => {
        // On met à jour le cache static pour navigation offline
        if (request.method === 'GET' && request.headers.get('accept')?.includes('text/html')) {
          const copy = response.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});