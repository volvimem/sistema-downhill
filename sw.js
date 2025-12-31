const VERSAO = 'v7'; // <--- MUDE ESSE NÚMERO SEMPRE QUE FIZER ATUALIZAÇÃO NO SITE

self.addEventListener('install', (event) => {
  // O comando abaixo força o novo "motor" a instalar imediatamente
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // O comando abaixo faz o novo motor assumir o controle da página aberta na hora
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Estratégia: NETWORK FIRST (Internet Primeiro)
  // Tenta baixar a versão nova da internet. Se não tiver internet, usa o que tem salvo.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
