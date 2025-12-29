const CACHE_NAME = 'dh-pe-v1';
const urlsToCache = [
  './',
  './index.html',
  './dashboard.html',
  './carteira.html',
  './style.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});