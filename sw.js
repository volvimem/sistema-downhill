const CACHE_NAME = 'dh-pe-v1';
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
