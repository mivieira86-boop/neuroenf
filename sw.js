// NeuroEnf — service worker: funciona sem rede e atualiza-se em segundo plano.
// Aumentar VERSAO a cada publicação para os telemóveis receberem a nova versão.
const VERSAO = "neuroenf-v19";
const FICHEIROS = [
  "./", "index.html", "estilos.css", "instalar.css", "conteudo.js", "farmacos.js", "marchas.js", "protocolos.js", "app.js", "instalar.js",
  "manifest.webmanifest", "fonts/InterVariable.woff2",
  "icons/icone-192.png", "icons/icone-512.png", "icons/icone-maskable-512.png", "icons/apple-touch-icon.png", "icons/favicon-32.png"
];

self.addEventListener("install", ev => {
  ev.waitUntil(caches.open(VERSAO).then(c => c.addAll(FICHEIROS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", ev => {
  ev.waitUntil(
    caches.keys().then(chaves => Promise.all(chaves.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Mostra logo o que está guardado e vai buscar a versão nova em segundo plano.
self.addEventListener("fetch", ev => {
  const pedido = ev.request;
  if (pedido.method !== "GET" || new URL(pedido.url).origin !== location.origin) return;
  ev.respondWith(
    caches.open(VERSAO).then(async cache => {
      const guardado = await cache.match(pedido, { ignoreSearch: true });
      const daRede = fetch(pedido).then(resp => {
        if (resp && resp.ok) cache.put(pedido, resp.clone());
        return resp;
      }).catch(() => null);
      if (guardado) { ev.waitUntil(daRede); return guardado; }
      const resp = await daRede;
      if (resp) return resp;
      if (pedido.mode === "navigate") return cache.match("index.html");
      return new Response("", { status: 504, statusText: "Sem rede" });
    })
  );
});
