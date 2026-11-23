// NeuroEnf — instalação como app (PWA). Só atua quando a página está num endereço https.
(function () {
  try {
    if (window.self !== window.top) return; // dentro de outra página (pré-visualização): não instalar
    if (!("serviceWorker" in navigator) || location.protocol !== "https:") return;
    window.addEventListener("load", () => {
      const tinhaVersao = !!navigator.serviceWorker.controller;
      navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then(reg => {
        // Procurar versão nova ao abrir e sempre que a app volta ao ecrã
        const procurar = () => reg.update().catch(() => {});
        document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") procurar(); });
        procurar();
      }).catch(() => {});
      // Quando a versão nova fica ativa, recarregar uma vez para a mostrar logo
      let recarregou = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!tinhaVersao || recarregou) return;
        recarregou = true;
        location.reload();
      });
    });
  } catch (e) { return; }

  const jaInstalada = () => window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  if (jaInstalada()) return;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  let pedido = null;

  function mostrarAviso(html, comBotao) {
    if (document.getElementById("aviso-instalar")) return;
    const el = document.createElement("div");
    el.id = "aviso-instalar";
    el.setAttribute("role", "region");
    el.setAttribute("aria-label", "Instalar a app");
    el.innerHTML = `<span class="aviso-instalar-txt">${html}</span>
      ${comBotao ? '<button type="button" class="aviso-instalar-btn" id="btn-instalar">Instalar</button>' : ""}
      <button type="button" class="aviso-instalar-fechar" aria-label="Fechar">×</button>`;
    document.body.appendChild(el);
    el.querySelector(".aviso-instalar-fechar").onclick = () => {
      el.remove();
      try { localStorage.setItem("neuroenf-instalar-fechado", "1"); } catch (e) {}
    };
    const b = document.getElementById("btn-instalar");
    if (b) b.onclick = async () => {
      if (!pedido) return;
      pedido.prompt();
      try { await pedido.userChoice; } catch (e) {}
      pedido = null; el.remove();
    };
  }
  let fechado = false;
  try { fechado = localStorage.getItem("neuroenf-instalar-fechado") === "1"; } catch (e) {}
  if (fechado) return;

  window.addEventListener("beforeinstallprompt", ev => {
    ev.preventDefault();
    pedido = ev;
    mostrarAviso("Instale a NeuroEnf no telemóvel para abrir sem rede.", true);
  });
  if (ios) {
    window.addEventListener("load", () => setTimeout(() =>
      mostrarAviso("Para instalar: toque em <strong>Partilhar</strong> e depois em <strong>Adicionar ao ecrã principal</strong>.", false), 1500));
  }
})();
