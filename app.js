// NeuroEnf — lógica da app (navegação por #hash, pesquisa e escalas)
// Rotas: #inicio, #alarmes, #tema-<id>, #escalas, #escalas-<id>,
// #farmacos, #farmacos-az, #farmaco-<id>, #terapeutica-<temaId>, #protocolos, #protocolo-<id>
(function () {
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const main = $("#conteudo");
  const lateral = $("#menu");
  const nav = $("#menuNav");
  const veu = $("#veu");
  const botaoMenu = $("#botaoMenu");
  const campoPesquisa = $("#pesquisa");
  const formPesquisa = $("#formPesquisa");
  const LIVRO = "«A Neurologia que Todo Médico Deve Saber» (Nitrini & Bacheschi)";
  // Menu lateral fixo a partir de 961 px; abaixo disso, barra fina + gaveta
  const telemovel = window.matchMedia("(max-width: 960px)");

  // ── Ícones de linha (24×24, traço 1,8, currentColor). O campo «icone» dos temas não é usado. ──
  const ICONES = {
    protocolo: '<path d="M14 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8L14 3.5Z"/><path d="M14 3.5V8h4.5"/><path d="M8.5 12.5h7M8.5 16h5"/>',
    inicio: '<path d="M3.5 10.5 12 3.8l8.5 6.7"/><path d="M5.5 9v11h13V9"/><path d="M10 20v-5.5h4V20"/>',
    escalas: '<rect x="5" y="4.5" width="14" height="16.5" rx="2"/><path d="M9.5 3h5v3h-5z"/><path d="M8.5 11h7M8.5 14.5h7M8.5 18h4"/>',
    alarme: '<path d="M10.3 4.3 2.9 17.2A2 2 0 0 0 4.6 20.2h14.8a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z"/><path d="M12 9.5v4.2"/><path d="M12 17h.01"/>',
    pesquisa: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.3-4.3"/>',
    imprimir: '<path d="M7 9V3.5h10V9"/><path d="M7 17H5a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 5 9h14a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 19 17h-2"/><path d="M7 14h10v6.5H7z"/>',
    copiar: '<rect x="8.5" y="8.5" width="12" height="12" rx="2"/><path d="M15.5 8.5V5A1.5 1.5 0 0 0 14 3.5H5A1.5 1.5 0 0 0 3.5 5v9A1.5 1.5 0 0 0 5 15.5h3.5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    fechar: '<path d="M6 6l12 12M18 6 6 18"/>',
    seta: '<path d="m9.5 6 6 6-6 6"/>',
    voltar: '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
    avancar: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    baixo: '<path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>',
    visto: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
    limpar: '<path d="M4 7h16"/><path d="M9.5 7V4.5h5V7"/><path d="M6.5 7l1 13h9l1-13"/>',
    relogio: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    onda: '<path d="M3 12h3.5l2-5.5 3.5 11 2.5-7 1.5 1.5H21"/>',
    sirene: '<path d="M6.5 18v-5a5.5 5.5 0 0 1 11 0v5"/><path d="M4.5 18h15v2.5h-15z"/><path d="M12 3v1.5M4.2 6.2l1.1 1.1M19.8 6.2l-1.1 1.1"/>',
    // Precaução: escudo com ponto de exclamação (diferente do triângulo de alarme)
    // Cápsula (guia farmacológico) e ligação externa
    capsula: '<path d="m10.5 20.5 10-10a4.95 4.95 0 0 0-7-7l-10 10a4.95 4.95 0 0 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
    externo: '<path d="M14 4.5h5.5V10"/><path d="M19.5 4.5 11 13"/><path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>',
    precaucao: '<path d="M12 3.2 5 5.9v5.6c0 4.3 2.9 7.6 7 9.2 4.1-1.6 7-4.9 7-9.2V5.9Z"/><path d="M12 8.3v4.6"/><path d="M12 16.2h.01"/>',
    // Partes: p1 avaliação, p2 clínica, p3 cuidados transversais, p4 patologias
    avaliacao: '<path d="M6 3.5H4.5v5a4.5 4.5 0 0 0 9 0v-5H12"/><path d="M9 13v1.5a5 5 0 0 0 10 0V12"/><circle cx="19" cy="10" r="2"/>',
    clinica: '<path d="M12 5.2A3 3 0 0 0 6.6 4a3 3 0 0 0-2.4 3.6A3.2 3.2 0 0 0 3.5 13a3.4 3.4 0 0 0 3.3 4.6A3 3 0 0 0 12 19"/><path d="M12 5.2A3 3 0 0 1 17.4 4a3 3 0 0 1 2.4 3.6 3.2 3.2 0 0 1 .7 5.4 3.4 3.4 0 0 1-3.3 4.6A3 3 0 0 1 12 19"/><path d="M12 5.2V19"/><path d="M8 9.5c1 0 2 .7 2 2M16 9.5c-1 0-2 .7-2 2"/>',
    cuidados: '<path d="M12 19.5s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 6.8a4.2 4.2 0 0 1 7.5 2.5c0 5.6-7.5 10.2-7.5 10.2Z"/><path d="M12 10.5v5M9.5 13h5"/>',
    patologias: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v14a1.8 1.8 0 0 0-1.8-1.8H4Z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v14a1.8 1.8 0 0 1 1.8-1.8H20Z"/>'
  };
  const ic = (nome, cls = "") => `<svg class="ic${cls ? " " + cls : ""}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONES[nome] || ""}</svg>`;
  const ICONE_PARTE = { p1: "avaliacao", p2: "clinica", p3: "cuidados", p4: "patologias" };
  const icParte = (parte, cls) => ic(ICONE_PARTE[parte] || "patologias", cls);
  // Rótulos curtos para o menu lateral (o nome completo aparece no início)
  const NOME_CURTO_PARTE = { p1: "Avaliação", p2: "Clínica", p3: "Cuidados transversais", p4: "Patologias A–Z" };
  const nomeParte = id => (PARTES.find(p => p.id === id) || {}).nome || "";
  const ASSINATURA = `<footer class="assinatura" role="contentinfo">© 2026 Maria Isabel Pereira</footer>`;
  const marcaSvg = `<svg class="marca-sinal" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect x="1" y="1" width="30" height="30" rx="9"/><path d="M10 22V10l12 12V10"/></svg>`;

  const temAlarme = t => (t.seccoes || []).some(s => s.alarme);
  const ePrecaucao = s => !s.alarme && s.tipo === "precaucao";
  // Ordem de apresentação das secções: alarme, precaução, restantes (estável)
  const pesoSeccao = s => s.alarme ? 0 : ePrecaucao(s) ? 1 : 2;
  const ordenarSeccoes = lista => lista.map((s, k) => [s, k]).sort((a, b) => pesoSeccao(a[0]) - pesoSeccao(b[0]) || a[1] - b[1]);
  const nomeCurto = e => e.nome.split(" — ")[0];
  const rotuloEscala = e => nomeCurto(e).replace(/^Escala (de Coma )?de /, "");
  // Rótulo mínimo: sigla entre parênteses quando existe (mRS), senão o rótulo normal
  const rotuloCurto = e => { const m = /\(([^)]+)\)\s*$/.exec(nomeCurto(e)); return m ? m[1] : rotuloEscala(e); };
  const origem = t => t.cap ? `Cap. ${esc(t.cap)}` : (t.parte === "p3" ? "Enfermagem" : "Patologia");
  // Escalas ligadas a cada tema (botões no cabeçalho do tema)
  const ESCALAS_DO_TEMA = {
    avc: ["nihss", "glasgow", "rankin", "guss"], tce: ["glasgow"], coma: ["glasgow"], hic: ["glasgow"],
    semiologia: ["glasgow", "barthel"], demencias: [], sistemicas: [], seguranca: ["morse", "braden"],
    disfagia: [], ela: ["guss"], dnm: []
  };
  const escalasDoTema = id => (ESCALAS_DO_TEMA[id] || []).map(x => ESCALAS.find(e => e.id === x)).filter(Boolean);
  // Subtítulo de uma secção de alarme: só quando acrescenta algo ao «Sinais de alarme»
  const subtituloAlarme = s => {
    const r = String(s.t).replace(/^sinais de alarme\s*/i, "").replace(/^[—–-]\s*/, "").replace(/^\((.*)\)$/, "$1").trim();
    return r ? r.charAt(0).toUpperCase() + r.slice(1) : "";
  };

  // ── Guia farmacológico (farmacos.js é opcional: a app funciona sem ele) ──
  const FARM = (typeof FARMACOS !== "undefined" && Array.isArray(FARMACOS) ? FARMACOS : [])
    .filter(f => f && f.id && f.dci);
  const farmaco = id => FARM.find(f => f.id === id);
  const temaPorId = id => TEMAS.find(t => t.id === id);
  // Terapêutica por tema: só temas existentes e fármacos existentes (ids desconhecidos são ignorados)
  const TERAP = (typeof TERAPEUTICA !== "undefined" && Array.isArray(TERAPEUTICA) ? TERAPEUTICA : [])
    .filter(x => x && temaPorId(x.tema))
    .map(x => ({ ...x, grupos: (x.grupos || []).map(g => ({ t: g.t || "", farmacos: (g.farmacos || []).map(farmaco).filter(Boolean) })).filter(g => g.farmacos.length) }))
    .filter(x => x.grupos.length);
  const terapDoTema = id => TERAP.find(x => x.tema === id);
  const farmacosDoTema = x => [...new Set(x.grupos.flatMap(g => g.farmacos))];
  const usosDoFarmaco = id => TERAP.flatMap(x => x.grupos.filter(g => g.farmacos.some(f => f.id === id)).map(g => ({ tema: temaPorId(x.tema), grupo: g.t })));
  const porDci = (a, b) => a.dci.localeCompare(b.dci, "pt", { sensitivity: "base" });
  const etiquetaRisco = f => f.alto ? `<span class="etq-risco">${ic("alarme")}Alto risco</span>` : "";
  const AVISO_TERAP = "Ferramenta de apoio — confirmar sempre a prescrição e o RCM.";
  const INFOMED = "https://extranet.infarmed.pt/INFOMED-fo/";
  // Índice Nacional Terapêutico (indice.eu): ficha da DCI com endereço direto, sem colar nada.
  // Endereço = nome da DCI sem acentos, com hífenes; exceções verificadas a 18/11/2026.
  const INDICE = "https://www.indice.eu/pt/medicamentos/DCI/";
  const INDICE_PESQUISA = "https://www.indice.eu/pt/pesquisa-google?cx=005759960251267717830:sdfsdols638&ie=utf-8&hl=pt&q=";
  const INDICE_EXCECOES = {
    "ccp": "complexo-de-protrombina", "fitomenadiona": "fitomenadiona-vitamina-k1", "urapidil": "urapidilo",
    "nacl-hipertonico": "cloreto-de-sodio", "kcl-concentrado": "cloreto-de-potassio", "valproato": "acido-valproico-valproato-de-sodio",
    "anfotericina": "anfotericina-b", "lidocaina-penso": "lidocaina", "toxina-botulinica": "toxina-botulinica-a",
    "levodopa-gel": "levodopa-carbidopa", "interferao-beta": "interferao-beta-1a", "glicopirronio": "brometo-de-glicopirronio",
    "insulina": "insulina-humana", "vutrisirano": "vutrisiran", "patisirano": "patisiran", "tiamina": "tiamina-vitamina-b1",
    "ciproheptadina": "cipro-heptadina"
  };
  const INDICE_SO_PESQUISA = { "glicose-hipertonica": "glicose", "cianocobalamina": "cianocobalamina" };
  const slugDci = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  function ligacaoIndice(f) {
    if (INDICE_SO_PESQUISA[f.id]) return { url: INDICE_PESQUISA + encodeURIComponent(INDICE_SO_PESQUISA[f.id]), pesquisa: true };
    return { url: INDICE + (INDICE_EXCECOES[f.id] || slugDci(f.dci)) + "/informacao-geral", pesquisa: false };
  }

  // ── Elementos fixos: marca, ícones dos botões ──
  document.querySelectorAll(".marca").forEach(m => {
    m.innerHTML = `${marcaSvg}<span class="marca-txt"><span class="marca-nome">NeuroEnf</span><span class="marca-sub">Enfermagem em Neurologia</span></span>`;
  });
  $("#pesquisaIc").innerHTML = ic("pesquisa");
  botaoMenu.innerHTML = ic("menu");

  // A pesquisa vive no menu lateral (computador) ou na barra de topo (telemóvel)
  function colocarPesquisa() {
    const destino = telemovel.matches ? $("#lugarPesquisaTopo") : $("#lugarPesquisaLateral");
    if (formPesquisa.parentNode !== destino) destino.appendChild(formPesquisa);
  }

  // ── Mensagem temporária (substitui alert) ──
  const aviso = $("#avisoEstado");
  let tmpAviso;
  function mostrarAviso(txt) {
    aviso.innerHTML = `${ic("visto")}<span>${esc(txt)}</span>`;
    aviso.classList.add("visivel");
    clearTimeout(tmpAviso);
    tmpAviso = setTimeout(() => aviso.classList.remove("visivel"), 2600);
  }

  // ── Menu lateral ──
  function desenharMenu() {
    const item = (href, rota, icone, txt, cls = "") =>
      `<a href="${href}" data-r="${rota}"${cls ? ` class="${cls}"` : ""}>${icone}<span class="rot">${txt}</span></a>`;
    // «Consulta rápida» sempre visível, com ícones; cada parte é um <details> (temas sem ícone)
    let h = `<h2 class="sec-menu"><span>Consulta rápida</span></h2>`;
    h += item("#inicio", "inicio", ic("inicio"), "Início");
    h += item("#escalas", "escalas", ic("escalas"), "Escalas e avaliação");
    h += item("#alarmes", "alarmes", ic("alarme", "ic-alerta"), "Sinais de alarme");
    if (FARM.length) h += item("#farmacos", "farmacos", ic("capsula"), "Guia farmacológico");
    h += item("#protocolos", "protocolos", ic("protocolo"), "Protocolos do serviço");
    PARTES.forEach(p => {
      const temas = TEMAS.filter(t => t.parte === p.id);
      if (!temas.length) return;
      h += `<details class="grupo-menu" data-parte="${esc(p.id)}" open>
        <summary class="sec-menu"><span class="sec-nome">${esc(NOME_CURTO_PARTE[p.id] || p.nome)}</span><span class="traco" aria-hidden="true"></span><span class="cont">${temas.length}<span class="so-leitor"> temas</span></span>${ic("seta", "ic-sum")}</summary>`;
      temas.forEach(t => { h += item(`#tema-${esc(t.id)}`, `tema-${esc(t.id)}`, "", esc(t.titulo), "tema"); });
      h += `</details>`;
    });
    nav.innerHTML = h;
  }
  const gruposMenu = () => [...nav.querySelectorAll("details.grupo-menu")];
  const grupoAtual = () => { const a = nav.querySelector('a.tema[aria-current="page"]'); return a ? a.closest("details") : null; };
  function marcarMenu(rota) {
    nav.querySelectorAll("a").forEach(a => {
      if (a.dataset.r === rota) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    // No computador, garantir que a parte do tema atual está aberta (as outras ficam como estão)
    const g = grupoAtual();
    if (g && !telemovel.matches) g.open = true;
  }
  function abrirMenu(abrir) {
    const mudou = abrir !== menuAberto();
    lateral.classList.toggle("aberto", abrir);
    document.body.classList.toggle("menu-aberto", abrir);
    veu.hidden = !abrir;
    // Com a gaveta aberta, o conteúdo por trás fica inerte (leitores de ecrã e teclado)
    main.inert = abrir;
    botaoMenu.setAttribute("aria-expanded", String(abrir));
    botaoMenu.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
    if (mudou || !botaoMenu.firstChild) botaoMenu.innerHTML = ic(abrir ? "fechar" : "menu");
    if (abrir) {
      // Na gaveta só fica aberta a parte do tema atual
      const g = grupoAtual();
      gruposMenu().forEach(d => { d.open = d === g; });
      const atual = nav.querySelector('a[aria-current="page"]') || nav.querySelector("a");
      if (atual) { atual.scrollIntoView({ block: "center" }); atual.focus({ preventScroll: true }); }
    }
  }
  const menuAberto = () => lateral.classList.contains("aberto");
  // Foco preso na gaveta: botão do menu + elementos visíveis da gaveta
  function prenderFoco(ev) {
    const alvos = [botaoMenu, ...lateral.querySelectorAll("a[href], summary, button, input")]
      .filter(el => el === botaoMenu || el.getClientRects().length);
    if (!alvos.length) return;
    const i = alvos.indexOf(document.activeElement);
    let j;
    if (i < 0) j = ev.shiftKey ? alvos.length - 1 : 0;
    else j = (i + (ev.shiftKey ? -1 : 1) + alvos.length) % alvos.length;
    ev.preventDefault();
    alvos[j].focus();
  }

  // ── Vistas ──
  const linha = (href, titulo, sub, { icone = "", extra = "", cls = "", attrs = "" } = {}) =>
    `<a class="linha${cls ? " " + cls : ""}" href="${href}"${attrs}>${icone}<span class="linha-txt"><span class="linha-tit">${titulo}</span>${sub ? `<span class="linha-sub">${sub}</span>` : ""}</span>${extra}${ic("seta", "ic-seta")}</a>`;

  function vistaInicio() {
    document.title = "NeuroEnf — Guia de Enfermagem em Neurologia";
    const existeEscala = id => ESCALAS.some(e => e.id === id);
    const existeTema = id => TEMAS.some(t => t.id === id);
    const temasAlarme = TEMAS.filter(temAlarme).length;
    let h = `<header class="cab-pagina">
        <h1 tabindex="-1">Guia de Enfermagem em Neurologia</h1>
        <p class="sub">Adulto · ${TEMAS.length} temas · ${ESCALAS.length} escalas</p>
      </header>
      <section class="bloco bloco-rapido" aria-labelledby="t-rapido">
        <h2 class="etiqueta" id="t-rapido">Acesso rápido</h2>
        <div class="lista lista-rapida">`;
    h += linha("#alarmes", "Sinais de alarme", `${temasAlarme} temas`, { icone: ic("alarme", "ic-linha ic-alerta"), cls: "linha-alarme" });
    if (FARM.length) h += linha("#farmacos", "Guia farmacológico", `${FARM.length} ${FARM.length === 1 ? "fármaco" : "fármacos"}${TERAP.length ? ` · ${TERAP.length} ${TERAP.length === 1 ? "tema" : "temas"}` : ""}`, { icone: ic("capsula", "ic-linha"), cls: "linha-farmacos" });
    h += linha("#protocolos", "Protocolos do serviço", PROT.length ? `${PROT.length} ${PROT.length === 1 ? "protocolo" : "protocolos"}` : "Em construção", { icone: ic("protocolo", "ic-linha"), cls: "linha-protocolos" });
    const rapidos = [];
    [["glasgow", "Escala de Coma de Glasgow", "Escala · consciência"], ["nihss", "NIHSS", "Escala · AVC"], ["morse", "Escala de Morse", "Escala · risco de queda"]].forEach(([id, txt, sub]) => {
      if (existeEscala(id)) rapidos.push(linha(`#escalas-${id}`, txt, sub, { icone: ic("escalas", "ic-linha") }));
    });
    // «Estado de mal» abre a epilepsia já na secção de alarme
    const epi = TEMAS.find(t => t.id === "epilepsia");
    const kMal = epi ? (epi.seccoes || []).findIndex(s => s.alarme) : -1;
    [["avc", "relogio", "Via Verde AVC", "Doença cerebrovascular", -1], ["epilepsia", "onda", "Estado de mal", "Epilepsia · sinais de alarme", kMal], ["urgencias", "sirene", "Urgências neurológicas", "Cap. 20", -1]].forEach(([id, i, txt, sub, k]) => {
      if (existeTema(id)) rapidos.push(linha(`#tema-${id}`, txt, sub, { icone: ic(i, "ic-linha"), attrs: k >= 0 ? ` data-seccao="${k}"` : "" }));
    });
    h += `<div class="lista-grelha">${rapidos.join("")}</div></div>
      <p class="nota-aviso">${ic("info")}<span>Apoio à prática: não substitui os protocolos do serviço nem a prescrição médica.</span></p></section>`;
    PARTES.forEach(p => {
      const temas = TEMAS.filter(t => t.parte === p.id);
      if (!temas.length) return;
      h += `<section class="bloco" aria-labelledby="t-${esc(p.id)}">
        <h2 class="titulo-parte" id="t-${esc(p.id)}">${esc(p.nome)}<span class="cont">${temas.length}<span class="so-leitor"> temas</span></span></h2>
        <div class="lista lista-temas">`;
      temas.forEach(t => { h += linha(`#tema-${esc(t.id)}`, esc(t.titulo), origem(t)); });
      h += `</div></section>`;
    });
    h += `<p class="rodape">Temas organizados pelos capítulos 1–23 de ${LIVRO}; as páginas de cada capítulo estão no fim do tema. Inclui ainda cuidados de enfermagem transversais e patologias específicas.</p>`;
    return h;
  }

  function blocoSeccao(s, k) {
    const prec = ePrecaucao(s);
    return `<section class="cartao${s.alarme ? " alarme" : prec ? " precaucao" : ""}" id="sec-${k}" aria-labelledby="sec-${k}-t">
      ${s.alarme && !/alarme/i.test(s.t) ? `<p class="faixa-alarme">${ic("alarme")}Sinal de alarme</p>` : ""}
      ${prec ? `<p class="faixa-precaucao">${ic("precaucao")}Precaução</p>` : ""}
      <h2 id="sec-${k}-t" tabindex="-1">${s.alarme && /alarme/i.test(s.t) ? ic("alarme") : ""}${esc(s.t)}</h2>${corpoSeccao(s)}</section>`;
  }
  // Conteúdo de uma secção (lista e/ou tabela)
  function corpoSeccao(s) {
    let h = "";
    if (s.marchas) h += s.marchas.map(id => cartaoMarcha(id, s.tema)).join("");
    if (s.escala) h += escalaEmbutida(s.escala);
    if (s.itens) h += `<ul>${s.itens.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;
    if (s.tabela) {
      const cab = s.tabela.cab || [];
      h += `<div class="tabela-envolvente" role="region" aria-label="Tabela: ${esc(s.t)}" tabindex="0"><table>`;
      if (cab.length) h += `<thead><tr>${cab.map(c => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead>`;
      h += `<tbody>` + (s.tabela.lin || []).map(l => `<tr>${l.map((c, i) => i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`).join("")}</tr>`).join("");
      h += `</tbody></table></div>`;
      if (s.tabela.nota) h += `<p class="nota">${esc(s.tabela.nota)}</p>`;
    }
    return h;
  }

  // ── Marchas (marchas.js é opcional) ──
  const TEM_MARCHAS = typeof MARCHAS !== "undefined" && typeof MARCHAS_DO_TEMA !== "undefined";
  const marchasDoTema = id => TEM_MARCHAS ? (MARCHAS_DO_TEMA[id] || []).filter(m => MARCHAS[m]) : [];
  function cartaoMarcha(id, temaAtual) {
    const m = MARCHAS[id];
    const outros = Object.keys(MARCHAS_DO_TEMA).filter(tid => tid !== temaAtual && tid !== "semiologia" && MARCHAS_DO_TEMA[tid].includes(id))
      .map(tid => TEMAS.find(x => x.id === tid)).filter(Boolean);
    const idH = `marcha-${esc(id)}-t`;
    return `<article class="marcha" aria-labelledby="${idH}">
      <h3 id="${idH}">${esc(m.nome)}</h3>
      <figure class="marcha-anim" data-marcha="${esc(id)}">
        <div class="nm-tela" role="img" aria-label="Animação esquemática da ${esc(m.nome.toLowerCase())}, vista de lado e de frente"></div>
        <figcaption><span>Animação esquemática</span><span class="nm-botoes">
          <button type="button" class="btn-sec nm-btn" data-nm="pausa">Pausar</button>
          <button type="button" class="btn-sec nm-btn" data-nm="lento" aria-pressed="false">Lento</button></span></figcaption>
      </figure>
      <p class="marcha-sub">O que observar</p>
      <ul>${m.observar.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      <p class="marcha-surge"><strong>Onde surge:</strong> ${esc(m.surge)}</p>
      ${m.cuidados.length ? `<p class="marcha-sub">Cuidados de enfermagem</p><ul>${m.cuidados.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
      ${outros.length ? `<p class="marcha-ver">Ver também: ${outros.map(o => `<a href="#tema-${esc(o.id)}">${esc(o.titulo)}</a>`).join(" · ")}</p>` : ""}
    </article>`;
  }

  // ── Protocolos do serviço (protocolos.js é opcional) ──
  const PROT = (typeof PROTOCOLOS !== "undefined" && Array.isArray(PROTOCOLOS) ? PROTOCOLOS : []).filter(x => x && x.id && x.titulo);
  const CONTACTO_PROT = typeof PROTOCOLOS_CONTACTO === "string" ? PROTOCOLOS_CONTACTO.trim() : "";
  const EM_CONSTRUCAO = `<span class="etq-construcao">Em construção</span>`;
  const dataPT = d => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || ""); return m ? `${m[3]}/${m[2]}/${m[1]}` : (d || ""); };
  const aprovacaoProt = x => x.aprovacao || x.data || "";
  // «A rever»: passou a data de revisão
  const aRever = x => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(x.revisao || ""); return !!m && new Date(+m[1], m[2] - 1, +m[3], 23, 59) < new Date(); };
  const ETQ_REVER = `<span class="etq-rever">A rever</span>`;
  const blocoRegras = () => `<section class="cartao regras-protocolos" aria-labelledby="t-regras">
      <h2 id="t-regras">Como entram os protocolos</h2>
      <ul class="lista-regras">
        <li><strong>Só protocolos aprovados pela instituição</strong>, com autorização para serem divulgados nesta app.</li>
        <li><strong>Ficha de bolso validada</strong> pelo responsável do protocolo, com código, versão e data de aprovação.</li>
        <li><strong>O documento oficial prevalece sempre</strong>: cada ficha liga ao original na intranet.</li>
        <li><strong>Data de revisão</strong>: quando passa, a app mostra «A rever» até ser confirmada a versão em vigor.</li>
        <li><strong>Propostas e correções</strong> dos colegas são bem-vindas, mas nada é publicado sem validação.</li>
      </ul>
      <p class="propor">${CONTACTO_PROT
        ? `<a class="btn-sec" href="mailto:${esc(CONTACTO_PROT)}?subject=${encodeURIComponent("NeuroEnf — proposta de protocolo")}">${ic("protocolo")}<span>Propor um protocolo ou uma correção</span></a>`
        : "Para propor um protocolo ou uma correção, fale com a enfermeira gestora ou com o elo de referência do serviço."}</p>
    </section>`;
  function vistaProtocolos() {
    document.title = "Protocolos do serviço — NeuroEnf";
    let h = `<header class="cab-pagina">
        <h1 tabindex="-1">Protocolos do serviço</h1>
        <p class="sub">Serviço de Neurologia ${PROT.length ? "" : EM_CONSTRUCAO}</p>
      </header>`;
    if (!PROT.length) {
      return h + `<section class="cartao vazio-protocolos" aria-labelledby="t-constr">
        <p class="ic-grande" aria-hidden="true">${ic("protocolo")}</p>
        <h2 id="t-constr">Área em construção</h2>
        <p>Aqui vão ficar os protocolos aprovados no Serviço de Neurologia, em fichas de bolso para consulta rápida à cabeceira.</p>
        <p>Até estarem disponíveis, siga os protocolos em vigor no serviço e na intranet do hospital.</p>
      </section>` + blocoRegras();
    }
    h += `<section class="bloco"><div class="lista">`;
    h += PROT.map(x => linha(`#protocolo-${esc(x.id)}`, esc(x.titulo),
      [x.codigo ? esc(x.codigo) : "", x.versao ? `Versão ${esc(x.versao)}` : "", aprovacaoProt(x) ? esc(dataPT(aprovacaoProt(x))) : ""].filter(Boolean).join(" · "),
      { icone: ic("protocolo", "ic-linha"), extra: aRever(x) ? ETQ_REVER : "" })).join("");
    h += `</div></section>` + blocoRegras();
    return h;
  }
  function vistaProtocolo(id) {
    const x = PROT.find(p => p.id === id);
    if (!x) return null;
    document.title = `${x.titulo} — NeuroEnf`;
    const secs = x.seccoes || [];
    const meta = [x.codigo ? esc(x.codigo) : "", x.versao ? `Versão ${esc(x.versao)}` : "", aprovacaoProt(x) ? `aprovado a ${esc(dataPT(aprovacaoProt(x)))}` : "",
      x.revisao ? `revisão a ${esc(dataPT(x.revisao))}` : ""].filter(Boolean).join(" · ");
    let h = `<header class="cab-tema">
        <a class="voltar" href="#protocolos">${ic("voltar")}<span>Protocolos do serviço</span></a>
        <div class="cab-tema-linha"><div class="cab-tema-txt">
          <h1 tabindex="-1">${esc(x.titulo)} ${aRever(x) ? ETQ_REVER : ""}</h1>
          <p class="meta">${meta}</p>
          ${x.responsavel || x.validadoPor ? `<p class="meta">${[x.responsavel ? `Responsável: ${esc(x.responsavel)}` : "", x.validadoPor ? `Validado por: ${esc(x.validadoPor)}` : ""].filter(Boolean).join(" · ")}</p>` : ""}
        </div><button type="button" class="btn-sec btn-imprimir" data-acao="imprimir">${ic("imprimir")}<span>Imprimir</span></button></div>
        ${x.resumo ? `<p class="resumo">${esc(x.resumo)}</p>` : ""}
        ${x.fonte ? `<div class="botoes-farmaco"><a class="btn-pri" href="${esc(x.fonte)}" target="_blank" rel="noopener">${ic("externo")}<span>Abrir o documento oficial</span><span class="so-leitor"> (abre noutro separador; pode exigir a rede do hospital)</span></a></div>` : ""}
      </header>`;
    if (aRever(x)) h += `<section class="cartao precaucao"><p class="faixa-precaucao">${ic("precaucao")}A rever</p><p>A data de revisão deste protocolo já passou. Confirme a versão em vigor no documento oficial antes de o seguir.</p></section>`;
    h += ordenarSeccoes(secs).map(([s, k]) => blocoSeccao(s, k)).join("");
    h += `<p class="rodape">Ficha de bolso do protocolo do Serviço de Neurologia. O documento oficial prevalece sempre.</p>`;
    return h;
  }

  function vistaTema(id) {
    const i = TEMAS.findIndex(t => t.id === id);
    if (i < 0) return null;
    const t = TEMAS[i], ant = TEMAS[i - 1], seg = TEMAS[i + 1];
    const seccoes = (t.seccoes || []).slice();
    const extra = [];
    if (t.id === "semiologia" && typeof MRC !== "undefined") {
      extra.push({ t: "Escala de força muscular (MRC)", tabela: { cab: ["Grau", "Descrição"], lin: MRC.map(([g, d]) => [String(g), d]) } });
    }
    const marchasTema = marchasDoTema(t.id);
    if (marchasTema.length) extra.push({ t: marchasTema.length > 1 ? "Marchas" : "Marcha", marchas: marchasTema, tema: t.id });
    const todas = seccoes.concat(extra);
    document.title = `${t.titulo} — NeuroEnf`;
    const escTema = escalasDoTema(t.id);
    const terTema = terapDoTema(t.id);
    let h = `<header class="cab-tema">
        <a class="voltar" href="#inicio">${ic("voltar")}<span>${esc(nomeParte(t.parte) || "Início")}</span></a>
        <div class="cab-tema-linha">
          <div class="cab-tema-txt">
            <h1 tabindex="-1">${esc(t.titulo)}</h1>
            <p class="meta">${t.cap ? `Capítulo ${esc(t.cap)}` : (t.parte === "p3" ? "Cuidados de enfermagem transversais" : "Patologia específica")} · ${todas.length} ${todas.length === 1 ? "secção" : "secções"}</p>
          </div>
          <button type="button" class="btn-sec btn-imprimir" data-acao="imprimir">${ic("imprimir")}<span>Imprimir</span></button>
        </div>
        ${escTema.length || terTema ? `<div class="botoes-tema">${escTema.length ? `<div class="escalas-tema" role="group" aria-label="Escalas deste tema">${escTema.map(e =>
          `<a class="btn-sec" href="#escalas-${esc(e.id)}">${ic("escalas")}<span><span class="so-leitor">Escala </span>${esc(rotuloCurto(e))}</span></a>`).join("")}</div>` : ""}${terTema
          ? `<a class="btn-sec btn-terap" href="#terapeutica-${esc(t.id)}">${ic("capsula")}<span>Terapêutica</span></a>` : ""}</div>` : ""}
        <p class="resumo">${esc(t.resumo)}</p>
      </header>`;
    // Alarmes primeiro, depois precauções, depois as restantes (os índices k mantêm-se)
    const ordem = ordenarSeccoes(todas);
    if (todas.length > 1) {
      h += `<nav class="nesta-pagina" aria-label="Nesta página"><span class="etiqueta">Nesta página</span><ul class="separadores-sec">`;
      h += ordem.map(([s, k]) => s.alarme
        ? `<li><button type="button" class="sep-alarme" data-ir="${k}">${ic("alarme")}${esc(s.t)}${/alarme/i.test(s.t) ? "" : `<span class="so-leitor"> (sinal de alarme)</span>`}</button></li>`
        : ePrecaucao(s)
          ? `<li><button type="button" class="sep-precaucao" data-ir="${k}">${ic("precaucao")}${esc(s.t)}<span class="so-leitor"> (precaução)</span></button></li>`
          : `<li><button type="button" data-ir="${k}">${esc(s.t)}</button></li>`).join("");
      h += `</ul></nav>`;
    }
    h += ordem.map(([s, k]) => blocoSeccao(s, k)).join("");
    h += `<p class="rodape">${t.cap ? `Para aprofundar: ${LIVRO}, Cap. ${esc(t.cap)}, p. ${esc(t.pags)}. Texto desta app escrito para a equipa de enfermagem; não reproduz o livro.` : "Tema escrito para a equipa de enfermagem. Confirmar com as normas DGS e os protocolos do hospital."}</p>
      <nav class="navegar" aria-label="Tema anterior e seguinte">
      ${ant ? `<a class="ant" href="#tema-${esc(ant.id)}">${ic("voltar")}<span><small>Anterior</small>${esc(ant.titulo)}</span></a>` : ""}
      ${seg ? `<a class="seg" href="#tema-${esc(seg.id)}"><span><small>Seguinte</small>${esc(seg.titulo)}</span>${ic("avancar")}</a>` : ""}</nav>`;
    return h;
  }

  function vistaAlarmes() {
    document.title = "Sinais de alarme — NeuroEnf";
    const secs = (t, f) => (t.seccoes || []).map((s, k) => [s, k]).filter(([s]) => f(s));
    // Um cartão por tema: o nome do tema é o título; a cor fica na faixa lateral e no ícone
    const cartao = (t, lista, tipo) => {
      const id = `al-${esc(t.id)}-${tipo}`;
      let c = `<section class="cartao ${tipo} cartao-lista" id="sec-${esc(t.id)}-${tipo}" aria-labelledby="${id}">
        <h2 id="${id}" tabindex="-1"><a href="#tema-${esc(t.id)}" data-seccao="${lista[0][1]}">${ic(tipo === "alarme" ? "alarme" : "precaucao", "ic-tipo")}<span>${esc(t.titulo)}</span>${ic("seta", "ic-seta")}</a></h2>`;
      lista.forEach(([s]) => {
        const sub = tipo === "alarme" ? subtituloAlarme(s) : s.t;
        if (sub) c += `<h3>${esc(sub)}</h3>`;
        c += corpoSeccao(s);
      });
      return c + `</section>`;
    };
    const grupos = PARTES.map(p => ({ p, itens: TEMAS.filter(t => t.parte === p.id).map(t => [t, secs(t, s => s.alarme)]).filter(([, l]) => l.length) }))
      .filter(g => g.itens.length);
    const precs = TEMAS.map(t => [t, secs(t, ePrecaucao)]).filter(([, l]) => l.length);
    const nTemas = grupos.reduce((n, g) => n + g.itens.length, 0);
    let h = `<header class="cab-pagina"><h1 tabindex="-1">Sinais de alarme</h1>
      ${nTemas ? `<p class="sub">${nTemas} temas${precs.length ? ` · ${precs.length} precauções com fármacos` : ""}</p>` : ""}</header>`;
    if (!nTemas && !precs.length) return h + `<p class="sub">Ainda não há secções de alarme definidas.</p>`;
    h += `<nav class="nesta-pagina" aria-label="Ir para"><span class="etiqueta">Ir para</span><ul class="separadores-sec">`;
    h += grupos.map(g => `<li><button type="button" data-ir="p-${esc(g.p.id)}">${esc(NOME_CURTO_PARTE[g.p.id] || g.p.nome)}<span class="cont">${g.itens.length}</span></button></li>`).join("");
    if (precs.length) h += `<li><button type="button" class="sep-precaucao" data-ir="p-precaucoes">${ic("precaucao")}Precauções com fármacos<span class="cont">${precs.length}</span></button></li>`;
    h += `</ul></nav>`;
    grupos.forEach(g => {
      h += `<section class="grupo-lista" id="sec-p-${esc(g.p.id)}" aria-labelledby="g-${esc(g.p.id)}">
        <p class="etiqueta" id="g-${esc(g.p.id)}" tabindex="-1">${esc(g.p.nome)}</p>
        ${g.itens.map(([t, l]) => cartao(t, l, "alarme")).join("")}</section>`;
    });
    if (precs.length) {
      h += `<section class="grupo-lista" id="sec-p-precaucoes" aria-labelledby="g-precaucoes">
        <p class="etiqueta etiqueta-precaucao" id="g-precaucoes" tabindex="-1">Precauções com fármacos</p>
        ${precs.map(([t, l]) => cartao(t, l, "precaucao")).join("")}</section>`;
    }
    return h;
  }

  // ── Guia farmacológico ──
  const semDados = titulo => `<header class="cab-pagina"><h1 tabindex="-1">${esc(titulo)}</h1>
    <p class="sub">O guia farmacológico ainda não tem conteúdo.</p></header>`;
  const textoFiltro = (...xs) => esc(semAcentos(xs.join(" ")));
  let filtroFarm = "";

  // Cabeçalho comum: título, separadores «Por doença» / «A–Z» e filtro
  function cabFarmacos(vista) {
    const sub = `${FARM.length} ${FARM.length === 1 ? "fármaco" : "fármacos"}${TERAP.length ? ` · ${TERAP.length} ${TERAP.length === 1 ? "tema" : "temas"} com terapêutica` : ""}`;
    return `<header class="cab-pagina"><h1 tabindex="-1">Guia farmacológico</h1><p class="sub">${sub}</p></header>
      <nav class="separadores" aria-label="Organização do guia">
        <a href="#farmacos"${vista === "doenca" ? ' aria-current="page"' : ""}>Por doença</a>
        <a href="#farmacos-az"${vista === "az" ? ' aria-current="page"' : ""}>A–Z</a></nav>
      <div class="filtro-farm">
        <label class="so-leitor" for="filtroFarm">${vista === "az" ? "Filtrar por fármaco ou classe" : "Filtrar por doença, fármaco ou classe"}</label>
        <span class="pesquisa-ic" aria-hidden="true">${ic("pesquisa")}</span>
        <input id="filtroFarm" type="search" autocomplete="off" spellcheck="false" enterkeyhint="search"
          placeholder="${vista === "az" ? "Filtrar por fármaco ou classe" : "Filtrar por doença, fármaco ou classe"}">
      </div>
      <p class="sub filtro-estado" id="estadoFiltro" role="status" aria-live="polite"></p>`;
  }

  function vistaFarmacos(vista) {
    document.title = "Guia farmacológico — NeuroEnf";
    if (!FARM.length) return semDados("Guia farmacológico");
    let h = cabFarmacos(vista);
    if (vista === "az") {
      const letras = new Map();
      FARM.slice().sort(porDci).forEach(f => {
        const l = semAcentos(f.dci).charAt(0).toUpperCase();
        if (!letras.has(l)) letras.set(l, []);
        letras.get(l).push(f);
      });
      h += `<div class="lista-az">`;
      letras.forEach((lista, l) => {
        h += `<section class="grupo-letra" data-filtro-grupo aria-labelledby="letra-${esc(l)}">
          <h2 class="letra" id="letra-${esc(l)}">${esc(l)}</h2><div class="lista">`;
        h += lista.map(f => linha(`#farmaco-${esc(f.id)}`, esc(f.dci), esc(f.classe || ""),
          { extra: etiquetaRisco(f), attrs: ` data-filtro="${textoFiltro(f.dci, f.classe || "")}"` })).join("");
        h += `</div></section>`;
      });
      h += `</div>`;
    } else {
      if (!TERAP.length) return h + `<p class="sub">Ainda não há terapêutica associada a temas. Veja a lista <a href="#farmacos-az">A–Z</a>.</p>`;
      PARTES.forEach(p => {
        const lista = TEMAS.filter(t => t.parte === p.id).map(t => [t, terapDoTema(t.id)]).filter(([, x]) => x);
        if (!lista.length) return;
        h += `<section class="bloco grupo-doencas" data-filtro-grupo aria-labelledby="pd-${esc(p.id)}">
          <h2 class="etiqueta" id="pd-${esc(p.id)}">${esc(p.nome)}</h2><div class="lista lista-doencas">`;
        lista.forEach(([t, x]) => {
          const n = farmacosDoTema(x).length;
          h += `<details class="doenca" data-filtro-tema="${textoFiltro(t.titulo)}">
            <summary><span class="doenca-tit">${esc(t.titulo)}</span><span class="cont">${n} ${n === 1 ? "fármaco" : "fármacos"}</span>${ic("seta", "ic-sum")}</summary>
            <div class="doenca-corpo">`;
          x.grupos.forEach(g => {
            h += `<div class="grupo-farm" data-filtro-sub="${textoFiltro(g.t)}"><h3>${esc(g.t)}</h3><ul class="chips">`;
            h += g.farmacos.map(f => `<li data-filtro="${textoFiltro(f.dci, f.classe || "")}"><a class="chip${f.alto ? " chip-risco" : ""}" href="#farmaco-${esc(f.id)}">${esc(f.dci)}${etiquetaRisco(f)}</a></li>`).join("");
            h += `</ul></div>`;
          });
          if (x.nota) h += `<p class="nota">${esc(x.nota)}</p>`;
          h += `<a class="btn-ligacao" href="#terapeutica-${esc(t.id)}">Ver terapêutica de ${esc(t.titulo)}${ic("seta")}</a></div></details>`;
        });
        h += `</div></section>`;
      });
    }
    setTimeout(() => ligarFiltroFarm(vista), 0);
    return h;
  }

  // Filtro: sem redesenhar a página (o foco fica no campo). Com 2–3 letras procura no início das palavras.
  function bateFiltro(txt, q) {
    if (!q) return true;
    if (q.length > 3) return txt.includes(q);
    return new RegExp("(^|[^a-z0-9])" + escRe(q)).test(txt);
  }
  function ligarFiltroFarm(vista) {
    const campo = $("#filtroFarm"), estado = $("#estadoFiltro");
    if (!campo) return;
    campo.value = filtroFarm;
    const aplicar = () => {
      filtroFarm = campo.value;
      const q = semAcentos(campo.value.trim());
      let n = 0;
      if (vista === "az") {
        main.querySelectorAll(".grupo-letra").forEach(sec => {
          let vis = 0;
          sec.querySelectorAll("[data-filtro]").forEach(el => { const ok = bateFiltro(el.dataset.filtro, q); el.hidden = !ok; if (ok) vis++; });
          sec.hidden = !vis; n += vis;
        });
      } else {
        main.querySelectorAll(".grupo-doencas").forEach(sec => {
          let temas = 0;
          sec.querySelectorAll("details.doenca").forEach(d => {
            const todoTema = bateFiltro(d.dataset.filtroTema, q);
            let vis = 0;
            d.querySelectorAll(".grupo-farm").forEach(g => {
              const todoGrupo = todoTema || bateFiltro(g.dataset.filtroSub, q);
              let gv = 0;
              g.querySelectorAll("[data-filtro]").forEach(li => { const ok = todoGrupo || bateFiltro(li.dataset.filtro, q); li.hidden = !ok; if (ok) gv++; });
              g.hidden = !gv; vis += gv;
            });
            d.hidden = !vis;
            if (vis) temas++;
            // Abrir os temas que correspondem; ao limpar, fechar os que o filtro abriu
            if (q && vis) { if (!d.open) { d.open = true; d.dataset.auto = "1"; } }
            else if (!q && d.dataset.auto) { d.open = false; delete d.dataset.auto; }
          });
          sec.hidden = !temas; n += temas;
        });
      }
      const unid = vista === "az" ? ["fármaco", "fármacos"] : ["tema", "temas"];
      estado.textContent = q ? (n ? `${n} ${n === 1 ? unid[0] : unid[1]}` : "Sem resultados para este filtro.") : "";
    };
    campo.addEventListener("input", aplicar);
    campo.addEventListener("keydown", ev => { if (ev.key === "Escape" && campo.value) { ev.stopPropagation(); campo.value = ""; aplicar(); } });
    aplicar();
  }

  function vistaFarmaco(id) {
    const f = farmaco(id);
    if (!f) {
      document.title = "Fármaco não encontrado — NeuroEnf";
      return `<header class="cab-pagina"><h1 tabindex="-1">Fármaco não encontrado</h1>
        <p class="sub">Este fármaco não está no guia. <a href="#farmacos-az">Ver a lista A–Z</a>.</p></header>`;
    }
    document.title = `${f.dci} — NeuroEnf`;
    const usos = usosDoFarmaco(f.id);
    const li = ligacaoIndice(f);
    let h = `<header class="cab-tema cab-farmaco">
        <a class="voltar" href="#farmacos">${ic("voltar")}<span>Guia farmacológico</span></a>
        <h1 tabindex="-1"><span id="dciFarmaco">${esc(f.dci)}</span></h1>
        <p class="meta meta-farmaco">${f.classe ? `<span>${esc(f.classe)}</span>` : ""}${etiquetaRisco(f)}</p>
        <div class="acoes-farmaco">
          <div class="botoes-farmaco">
            <a class="btn-pri" href="${esc(li.url)}" target="_blank" rel="noopener">${ic("externo")}<span>${li.pesquisa ? "Pesquisar" : "Ver ficha"} no Índice Nacional Terapêutico</span><span class="so-leitor"> (abre noutro separador)</span></a>
            <a class="btn-sec" href="${INFOMED}" target="_blank" rel="noopener" data-acao="infomed" data-dci="${esc(f.dci)}" aria-describedby="explicaInfomed">${ic("externo")}<span>Abrir no INFOMED (INFARMED)</span><span class="so-leitor"> (abre noutro separador)</span></a>
          </div>
          <p class="msg-copia" id="msgInfomed" role="status" aria-live="polite"></p>
          <p class="nota-infomed" id="explicaInfomed"><strong>Índice Nacional Terapêutico</strong>: abre logo a ficha da DCI (site privado). <strong>INFOMED</strong>: fonte oficial com o RCM; não permite abrir a ficha diretamente, por isso a DCI é copiada — toque na caixa de pesquisa, «Colar», e escolha a DCI na lista.</p>
        </div>
      </header>`;
    if (f.alerta) h += `<section class="alerta-farmaco" aria-labelledby="alertaFarm"><p class="faixa-precaucao" id="alertaFarm">${ic("precaucao")}Atenção</p><p class="alerta-txt">${esc(f.alerta)}</p></section>`;
    const notas = Array.isArray(f.notas) ? f.notas : (f.notas ? [f.notas] : []);
    if (notas.length) h += `<section class="cartao" aria-labelledby="cuidadosFarm"><h2 id="cuidadosFarm">Cuidados de enfermagem</h2><ul>${notas.map(n => `<li>${esc(n)}</li>`).join("")}</ul></section>`;
    if (usos.length) {
      h += `<section class="cartao cartao-usos" aria-labelledby="usosFarm"><h2 id="usosFarm">Usado em</h2><div class="lista lista-usos">`;
      h += usos.map(u => linha(`#terapeutica-${esc(u.tema.id)}`, esc(u.tema.titulo), esc(u.grupo), { icone: icParte(u.tema.parte, "ic-linha") })).join("");
      h += `</div></section>`;
    }
    h += `<p class="rodape">${esc(AVISO_TERAP)}</p>`;
    return h;
  }

  function vistaTerapeutica(temaId) {
    const t = temaPorId(temaId), x = terapDoTema(temaId);
    if (!t || !x) {
      document.title = "Terapêutica — NeuroEnf";
      return `<header class="cab-pagina"><h1 tabindex="-1">Terapêutica</h1>
        <p class="sub">Este tema ainda não tem terapêutica no guia. <a href="#farmacos">Ver o guia farmacológico</a>.</p></header>`;
    }
    document.title = `Terapêutica — ${t.titulo} — NeuroEnf`;
    const n = farmacosDoTema(x).length;
    let h = `<header class="cab-tema">
        <a class="voltar" href="#tema-${esc(t.id)}">${ic("voltar")}<span>${esc(t.titulo)}</span></a>
        <h1 tabindex="-1">Terapêutica — ${esc(t.titulo)}</h1>
        <p class="meta">${n} ${n === 1 ? "fármaco" : "fármacos"} · <a href="#farmacos">Guia farmacológico</a></p>
        <p class="nota-aviso">${ic("info")}<span>${esc(AVISO_TERAP)}</span></p>
      </header>`;
    x.grupos.forEach((g, k) => {
      h += `<section class="bloco-terap" aria-labelledby="gt-${k}"><h2 class="etiqueta" id="gt-${k}">${esc(g.t)}</h2><div class="lista">`;
      h += g.farmacos.map(f => linha(`#farmaco-${esc(f.id)}`, esc(f.dci), esc(f.classe || ""), { icone: ic("capsula", "ic-linha"), extra: etiquetaRisco(f) })).join("");
      h += `</div></section>`;
    });
    if (x.nota) h += `<p class="nota-terap">${ic("info")}<span>${esc(x.nota)}</span></p>`;
    h += `<p class="rodape">Em cada fármaco: «Ver ficha no Índice Nacional Terapêutico» abre logo a ficha; «Abrir no INFOMED» leva à informação oficial (RCM).</p>`;
    return h;
  }

  // Copiar a DCI no clique do botão INFOMED (a ligação abre na mesma)
  function copiarDci(dci) {
    const msg = $("#msgInfomed");
    const ok = () => { if (msg) msg.innerHTML = `${ic("visto")}<span>${esc(dci)} copiado — no INFOMED, toque na caixa de pesquisa, «Colar» e escolha a DCI na lista.</span>`; };
    const falha = () => {
      // Alternativa: deixar a DCI selecionada na página para copiar à mão
      try {
        const alvo = $("#dciFarmaco"), sel = window.getSelection();
        if (alvo && sel) { sel.removeAllRanges(); const r = document.createRange(); r.selectNodeContents(alvo); sel.addRange(r); }
      } catch (e) { /* sem seleção possível */ }
      if (msg) msg.innerHTML = `${ic("info")}<span>Não foi possível copiar — a DCI ficou selecionada: copie-a e cole na pesquisa do INFOMED.</span>`;
    };
    const execCopia = () => {
      const ta = document.createElement("textarea");
      ta.value = dci; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      let r = false;
      try { r = document.execCommand("copy"); } catch (e) { r = false; }
      ta.remove();
      return r;
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(dci).then(ok, () => { if (execCopia()) ok(); else falha(); });
      } else if (execCopia()) ok();
      else falha();
    } catch (e) {
      falha();
    }
  }

  // ── Escalas ──
  const codigoItem = (it, k) => {
    let m = /\(([A-Z]{1,3})\)\s*$/.exec(it.nome);
    if (m) return { cod: m[1], letra: true };
    m = /^(\d+[a-z]?)\./.exec(it.nome);
    return { cod: m ? m[1] : String(k + 1), letra: false };
  };
  const eNT = txt => /^NT\b/.test(txt);

  // Itens de uma escala (rádios), com títulos de etapa quando existem
  function itensEscala(e) {
    let h = "";
    e.itens.forEach((it, k) => {
      const et = (e.etapas || []).findIndex(x => x.de === k);
      if (et >= 0) {
        const x = e.etapas[et];
        h += `<div class="etapa-escala" id="etapa-${et}"><h3>${esc(x.titulo)}</h3><span class="etapa-estado" id="estadoEtapa-${et}"></span>${x.texto ? `<p class="etapa-txt">${esc(x.texto)}</p>` : ""}</div>`;
      }
      h += `<fieldset class="item-escala" id="item-${k}"><legend><span>${esc(it.nome)}</span> <span class="estado" aria-hidden="true"></span></legend><div class="opcoes">`;
      it.opcoes.forEach(([v, txt], j) => {
        h += `<label><input type="radio" name="i${k}" value="${esc(v)}" data-j="${j}"><span class="txt">${esc(txt)}${eNT(txt) ? "" : `<span class="so-leitor"> (${esc(v)} ${Number(v) === 1 ? "ponto" : "pontos"})</span>`}</span><span class="pts" aria-hidden="true">${eNT(txt) ? "–" : esc(v)}</span></label>`;
      });
      h += `</div></fieldset>`;
    });
    return h;
  }
  // Escala dentro de um tema (ex.: GUSS na Disfagia): mesmo formulário e resultado da página de escalas
  function escalaEmbutida(id) {
    const e = ESCALAS.find(x => x.id === id);
    if (!e) return "";
    setTimeout(() => ligarEscala(e), 0);
    return `<div class="escala-embutida">${e.descricao ? `<p class="descricao">${esc(e.descricao)}</p>` : ""}
      <form id="formEscala" novalidate>${itensEscala(e)}</form>${e.nota ? `<p class="nota">${esc(e.nota)}</p>` : ""}
      <div class="resultado" id="resultado" role="region" aria-label="Resultado da escala"></div>
      <p class="so-leitor" id="anuncioEscala" aria-live="polite"></p></div>`;
  }

  function vistaEscalas(id) {
    if (!ESCALAS.length) return `<header class="cab-pagina"><h1 tabindex="-1">Escalas e avaliação</h1><p class="sub">Sem escalas definidas.</p></header>`;
    const e = ESCALAS.find(x => x.id === id) || ESCALAS[0];
    document.title = `${nomeCurto(e)} — NeuroEnf`;
    // Separadores: rótulo curto no telemóvel (mRS); máscara à direita quando há mais
    const rotSep = x => rotuloCurto(x) === rotuloEscala(x) ? esc(rotuloEscala(x))
      : `<span class="rot-longo">${esc(rotuloEscala(x))}</span><span class="rot-curto" aria-hidden="true">${esc(rotuloCurto(x))}</span>`;
    let h = `<header class="cab-pagina"><h1 tabindex="-1">Escalas e avaliação</h1></header>
      <nav class="separadores" id="separadoresEscalas" aria-label="Escolher escala">${ESCALAS.map(x =>
        `<a href="#escalas-${esc(x.id)}"${x.id === e.id ? ' aria-current="page"' : ""}>${rotSep(x)}</a>`).join("")}</nav>
      <section class="cartao cartao-escala" aria-labelledby="tituloEscala"><h2 id="tituloEscala">${esc(e.nome)}</h2>
      ${e.descricao ? `<p class="descricao">${esc(e.descricao)}</p>` : ""}
      <form id="formEscala" novalidate>`;
    h += itensEscala(e);
    h += `</form>${e.nota ? `<p class="nota">${esc(e.nota)}</p>` : ""}</section>
      <div class="resultado" id="resultado" role="region" aria-label="Resultado da escala"></div>
      <p class="so-leitor" id="anuncioEscala" aria-live="polite"></p>`;
    setTimeout(() => { ligarEscala(e); ligarSeparadores(); }, 0);
    return h;
  }

  // Esbatimento à direita enquanto houver separadores escondidos; o atual fica à vista
  function ligarSeparadores() {
    const sep = $("#separadoresEscalas");
    if (!sep) return;
    const atual = sep.querySelector('[aria-current="page"]');
    if (atual && atual.offsetLeft + atual.offsetWidth > sep.clientWidth - 40) sep.scrollLeft = atual.offsetLeft + atual.offsetWidth - sep.clientWidth + 48;
    const mascara = () => sep.classList.toggle("tem-mais", sep.scrollLeft + sep.clientWidth < sep.scrollWidth - 2);
    sep.addEventListener("scroll", mascara, { passive: true });
    mascara();
  }
  window.addEventListener("resize", () => { const sep = $("#separadoresEscalas"); if (sep) sep.classList.toggle("tem-mais", sep.scrollLeft + sep.clientWidth < sep.scrollWidth - 2); });

  function ligarEscala(e) {
    const form = $("#formEscala"), out = $("#resultado");
    if (!form || !out) return;
    const escolhido = k => {
      const s = form.querySelector(`input[name=i${k}]:checked`);
      if (!s) return null;
      const [v, txt] = e.itens[k].opcoes[Number(s.dataset.j)];
      return { v: Number(v), txt };
    };
    // Escalas por etapas (ex.: GUSS): só se passa à etapa seguinte com a pontuação mínima da anterior
    const ETAPAS = e.etapas || [];
    const etapaDe = k => ETAPAS.findIndex(x => k >= x.de && k <= x.ate);
    function estadoEtapas() {
      const est = [];
      ETAPAS.forEach((x, i) => {
        let soma = 0, resp = 0;
        for (let k = x.de; k <= x.ate; k++) { const r = escolhido(k); if (r) { resp++; soma += r.v; } }
        const n = x.ate - x.de + 1;
        const ativa = i === 0 || (est[i - 1].ativa && est[i - 1].completa && est[i - 1].soma >= ETAPAS[i - 1].minimo);
        est.push({ ativa, soma, completa: resp === n, resp, n });
      });
      return est;
    }
    // Texto para colar no registo de enfermagem
    function textoRegisto(total, interp) {
      if (ETAPAS.length) {
        const est = estadoEtapas();
        const det = ETAPAS.map((x, i) => `${x.titulo.replace(/^\d+\.\s*/, "").replace(/\s*\(.*\)$/, "")} ${est[i].ativa && est[i].completa ? est[i].soma : "—"}`).join(", ");
        return `${nomeCurto(e)}: ${total}/20 (${det}) — ${interp}`;
      }
      const resp = e.itens.map((it, k) => ({ ...codigoItem(it, k), r: escolhido(k) }));
      const val = x => eNT(x.r.txt) ? "NT" : String(x.r.v);
      let det = "";
      if (e.itens.length === 1) det = ` (${resp[0].r.txt})`;
      else if (resp.every(x => x.letra)) det = ` (${resp.map(x => x.cod + val(x)).join(" ")})`;
      else det = `. Itens: ${resp.map(x => `${x.cod}=${val(x)}`).join(", ")}`;
      return `${nomeCurto(e)}: ${total}${det} — ${interp}`;
    }
    let ultimoTexto = "";
    const atualizar = () => {
      let total = 0, resp = 0, primeiroEmFalta = -1, obrigatorios = e.itens.length, paragem = -1;
      if (ETAPAS.length) {
        // desativar (e limpar) as etapas a que ainda não se pode passar
        let est = estadoEtapas();
        ETAPAS.forEach((x, i) => {
          for (let k = x.de; k <= x.ate; k++) {
            const fs = form.querySelector(`#item-${k}`);
            if (!fs) continue;
            if (!est[i].ativa) fs.querySelectorAll("input").forEach(inp => { inp.checked = false; });
            fs.disabled = !est[i].ativa;
            fs.classList.toggle("bloqueado", !est[i].ativa);
          }
        });
        est = estadoEtapas();
        obrigatorios = 0;
        ETAPAS.forEach((x, i) => {
          if (est[i].ativa) obrigatorios += est[i].n;
          if (est[i].ativa && est[i].completa && est[i].soma < x.minimo && paragem < 0) paragem = i;
          const el = $(`#estadoEtapa-${i}`), bloco = $(`#etapa-${i}`);
          let txt = "", cls = "";
          if (!est[i].ativa) { txt = paragem >= 0 && i > paragem ? "Não fazer — o teste parou" : `Só com ${ETAPAS[i - 1].minimo} pontos na etapa anterior`; cls = "bloq"; }
          else if (est[i].completa) { txt = `${est[i].soma}/${x.minimo}${est[i].soma < x.minimo ? " — PARAR" : " — passa"}`; cls = est[i].soma < x.minimo ? "parar" : "passa"; }
          else if (est[i].resp) txt = `${est[i].soma} pontos até agora`;
          if (el) { el.textContent = txt; el.className = "etapa-estado" + (cls ? " " + cls : ""); }
          if (bloco) bloco.classList.toggle("bloqueada", !est[i].ativa);
        });
      }
      e.itens.forEach((_, k) => {
        const r = escolhido(k);
        const fs = form.querySelector(`#item-${k}`);
        const exigido = !ETAPAS.length || !fs || !fs.disabled;
        if (r) { resp++; total += r.v; } else if (exigido && primeiroEmFalta < 0) primeiroEmFalta = k;
        if (fs) {
          fs.querySelector(".estado").innerHTML = r ? ic("visto") : "";
          fs.classList.toggle("respondido", !!r);
          fs.classList.remove("em-falta");
        }
      });
      const falta = obrigatorios - resp;
      let nivel = "", h = "";
      const compacto = e.itens.every((it, k) => codigoItem(it, k).letra) && falta === 0
        ? e.itens.map((it, k) => codigoItem(it, k).cod + (eNT(escolhido(k).txt) ? "NT" : escolhido(k).v)).join(" ") : "";
      h += `<div class="bloco-total"><span class="rot-total">${compacto ? esc(compacto) : (falta ? "Total parcial" : "Total")}</span><span class="total">${total}</span></div>`;
      if (falta === 0) {
        const [n, txt] = e.interpretar(total);
        nivel = n;
        ultimoTexto = textoRegisto(total, txt);
        if (paragem >= 0) h += `<p class="paragem">${ic("alarme")}<span>Teste parado na etapa «${esc(ETAPAS[paragem].titulo.replace(/^\d+\.\s*/, ""))}».</span></p>`;
        h += `<div class="interp">${esc(txt)}</div>`;
      } else {
        ultimoTexto = "";
        h += `<div class="falta"><button type="button" class="btn-ligacao" id="irFalta">${falta === 1 ? "Falta 1 item" : `Faltam ${falta} itens`}${ic("baixo")}<span class="so-leitor"> — ir para o primeiro em falta</span></button></div>`;
      }
      h += `<div class="acoes">${resp ? `<button class="btn-sec" type="button" id="limpar">${ic("limpar")}<span>Limpar</span></button>` : ""}
        ${falta ? "" : `<button class="btn-pri" type="button" id="copiar">${ic("copiar")}<span>Copiar resultado</span></button>`}</div>`;
      out.className = "resultado" + (nivel ? " nivel-" + nivel : "") + (falta ? "" : " completo");
      const anuncio = $("#anuncioEscala");
      if (anuncio && resp) anuncio.textContent = falta ? `Total parcial ${total}; faltam ${falta}.` : `Total ${total}. ${e.interpretar(total)[1]}`;
      out.innerHTML = h;
      if ($("#limpar")) $("#limpar").onclick = () => { form.reset(); atualizar(); const p = form.querySelector("input"); if (p) p.focus({ preventScroll: true }); window.scrollTo(0, 0); };
      const irFalta = $("#irFalta");
      if (irFalta) irFalta.onclick = () => {
        const fs = form.querySelector(`#item-${primeiroEmFalta}`);
        if (!fs) return;
        fs.classList.add("em-falta");
        fs.scrollIntoView({ block: "start", behavior: "smooth" });
        const inp = fs.querySelector("input");
        if (inp) inp.focus({ preventScroll: true });
      };
      if ($("#copiar")) $("#copiar").onclick = () => copiar(ultimoTexto);
    };
    form.addEventListener("change", atualizar);
    atualizar();
  }

  async function copiar(texto) {
    if (!texto) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(texto);
      } else {
        const ta = document.createElement("textarea");
        ta.value = texto; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        const ok = document.execCommand("copy");
        ta.remove();
        if (!ok) throw new Error("copy falhou");
      }
      mostrarAviso("Resultado copiado — pode colar no registo.");
      const b = $("#copiar");
      if (b) { b.innerHTML = `${ic("visto")}<span>Copiado</span>`; setTimeout(() => { if (b.isConnected) b.innerHTML = `${ic("copiar")}<span>Copiar resultado</span>`; }, 2000); }
    } catch (err) {
      // Sem acesso à área de transferência: mostrar o texto para copiar à mão
      const out = $("#resultado");
      if (!out) return;
      let caixa = out.querySelector(".copia-manual");
      if (!caixa) {
        caixa = document.createElement("div");
        caixa.className = "copia-manual";
        out.appendChild(caixa);
      }
      caixa.innerHTML = `<label class="so-leitor" for="textoCopia">Texto do resultado</label><textarea id="textoCopia" rows="2" readonly>${esc(texto)}</textarea>`;
      const ta = caixa.querySelector("textarea");
      ta.focus(); ta.select();
      mostrarAviso("Não foi possível copiar automaticamente — o texto ficou selecionado para copiar.");
    }
  }

  // ── Pesquisa ──
  const semAcentos = s => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  function textoTema(t) {
    const partes = [{ txt: t.titulo, k: null }, { txt: t.resumo, k: null }];
    (t.seccoes || []).forEach((s, k) => {
      partes.push({ txt: s.t, k, s });
      (s.itens || []).forEach(i => partes.push({ txt: i, k, s }));
      if (s.tabela) (s.tabela.lin || []).forEach(l => partes.push({ txt: l.join(" — "), k, s }));
      if (s.tabela && s.tabela.nota) partes.push({ txt: s.tabela.nota, k, s });
    });
    return partes;
  }
  // Posição da pesquisa no texto já normalizado. Com 2–3 letras (ELA, AVC, TCE, EM) procura só a palavra inteira.
  const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function posicao(n, q) {
    if (q.length > 3) return n.indexOf(q);
    const m = new RegExp("(^|[^a-z0-9])" + escRe(q) + "(?=[^a-z0-9]|$)").exec(n);
    return m ? m.index + m[1].length : -1;
  }
  const contem = (txt, q) => posicao(semAcentos(txt), q) >= 0;
  function realcar(txt, q) {
    txt = String(txt);
    const n = semAcentos(txt), i = posicao(n, q);
    if (i < 0 || n.length !== txt.length) return esc(txt);
    return esc(txt.slice(0, i)) + "<mark>" + esc(txt.slice(i, i + q.length)) + "</mark>" + esc(txt.slice(i + q.length));
  }
  function vistaPesquisa(qOriginal) {
    const q = semAcentos(qOriginal.trim());
    document.title = `Pesquisa: ${qOriginal.trim()} — NeuroEnf`;
    let h = `<header class="cab-pagina"><h1 tabindex="-1">Pesquisa: «${esc(qOriginal.trim())}»</h1>`;
    if (q.length < 2) return h + `<p class="sub">Escreva pelo menos 2 letras.</p></header>`;
    const res = [];
    ESCALAS.forEach(e => {
      const txt = [e.nome, e.descricao || ""].concat(e.itens.map(i => i.nome)).join(" ");
      if (contem(txt, q)) {
        const corpo = `<div class="resultado-pesquisa"><a class="tit" href="#escalas-${esc(e.id)}">${ic("escalas")}<span class="tit-txt">${realcar(e.nome, q)}<span class="tit-meta">Escala</span></span>${ic("seta", "ic-seta")}</a>
          ${e.descricao ? `<p class="excerto-simples">${realcar(e.descricao, q)}</p>` : ""}</div>`;
        res.push({ pont: (contem(e.nome, q) ? 1000 : 0) + 5, html: corpo });
      }
    });
    FARM.forEach(f => {
      const dciBate = contem(f.dci, q), classeBate = contem(f.classe || "", q);
      if (!dciBate && !classeBate) return;
      const corpo = `<div class="resultado-pesquisa"><a class="tit" href="#farmaco-${esc(f.id)}">${ic("capsula")}<span class="tit-txt">${realcar(f.dci, q)}<span class="tit-meta">Fármaco${f.classe ? ` · ${realcar(f.classe, q)}` : ""}${f.alto ? " · Alto risco" : ""}</span></span>${ic("seta", "ic-seta")}</a></div>`;
      res.push({ pont: dciBate ? 1000 + (semAcentos(f.dci).startsWith(q) ? 20 : 3) : 40, html: corpo });
    });
    TEMAS.forEach(t => {
      const hits = textoTema(t).filter(p => contem(p.txt, q));
      if (!hits.length) return;
      let corpo = "";
      const pont = (contem(t.titulo, q) ? 1000 : 0) + (contem(t.resumo, q) ? 50 : 0) + hits.length;
      const tituloBate = contem(t.titulo, q);
      const icSec = s => s.alarme ? ic("alarme") : ePrecaucao(s) ? ic("precaucao") : "";
      const clsSec = s => s.alarme ? " e-alarme" : ePrecaucao(s) ? " e-precaucao" : "";
      const leitorSec = s => s.alarme ? `<span class="so-leitor"> (sinal de alarme)</span>` : ePrecaucao(s) ? `<span class="so-leitor"> (precaução)</span>` : "";
      corpo += `<div class="resultado-pesquisa"><a class="tit" href="#tema-${esc(t.id)}">${icParte(t.parte)}<span class="tit-txt">${realcar(t.titulo, q)}<span class="tit-meta">${origem(t)}</span></span>${ic("seta", "ic-seta")}</a>`;
      if (tituloBate) {
        // O tema inteiro corresponde: atalhos para as secções (alarme primeiro)
        corpo += `<ul class="atalhos-sec" aria-label="Secções de ${esc(t.titulo)}">${ordenarSeccoes(t.seccoes || []).map(([s, k]) =>
          `<li><a class="atalho${clsSec(s)}" href="#tema-${esc(t.id)}" data-seccao="${k}">${icSec(s)}${esc(s.t)}${leitorSec(s)}</a></li>`).join("")}</ul>`;
      } else {
        // Excertos: se a ocorrência é o próprio título da secção, mostrar o 1.º item; sem repetições
        const vistos = new Set(), exc = [];
        hits.filter(x => x.k !== null).forEach(x => {
          let txt = x.txt;
          if (txt === x.s.t) txt = (x.s.itens && x.s.itens[0]) || (x.s.tabela && x.s.tabela.lin && x.s.tabela.lin[0] ? x.s.tabela.lin[0].join(" — ") : "");
          const chave = x.k + "|" + txt;
          if (vistos.has(chave)) return;
          vistos.add(chave); exc.push({ ...x, txt });
        });
        exc.sort((a, b) => pesoSeccao(a.s) - pesoSeccao(b.s));
        if (exc.length) {
          corpo += `<ul>${exc.slice(0, 3).map(x => `<li><a class="excerto${clsSec(x.s)}" href="#tema-${esc(t.id)}" data-seccao="${x.k}">
            <span class="sec">${icSec(x.s)}${esc(x.s.t)}${leitorSec(x.s)}</span>${x.txt ? realcar(x.txt, q) : ""}</a></li>`).join("")}</ul>`;
          if (exc.length > 3) corpo += `<p class="mais">+ ${exc.length - 3} ${exc.length - 3 === 1 ? "ocorrência" : "ocorrências"} neste tema</p>`;
        }
      }
      corpo += `</div>`;
      res.push({ pont, html: corpo });
    });
    res.sort((x, y) => y.pont - x.pont);
    const n = res.length, corpo = res.map(r => r.html).join("");
    h += `<p class="sub" role="status">${n ? `${n} ${n === 1 ? "resultado" : "resultados"}` : "Sem resultados. Experimente outra palavra (ex.: «disfagia», «pupilas», «convulsão»)."}</p></header>`;
    return h + (n ? `<div class="lista-resultados">${corpo}</div>` : "");
  }

  // ── Router (#inicio, #alarmes, #escalas-glasgow, #tema-avc) ──
  let pesquisaAtual = "";
  let seccaoPendente = null;
  let focarTitulo = false;

  function irParaSeccao(k) {
    const sec = document.getElementById("sec-" + k);
    if (!sec) return;
    sec.scrollIntoView({ block: "start" });
    const t = sec.querySelector(".etiqueta[tabindex], h2");
    if (t) t.focus({ preventScroll: true });
    sec.classList.remove("destaque"); void sec.offsetWidth; sec.classList.add("destaque");
  }

  function render() {
    aviso.classList.remove("visivel");
    if (pesquisaAtual.trim()) { main.innerHTML = vistaPesquisa(pesquisaAtual) + ASSINATURA; marcarMenu(""); abrirMenu(false); window.scrollTo(0, 0); return; }
    const r = decodeURIComponent(location.hash.replace(/^#/, "")) || "inicio";
    let rotaMenu = "inicio", html = null;
    if (r.startsWith("tema-")) { html = vistaTema(r.slice(5)); rotaMenu = r; }
    else if (r === "escalas" || r.startsWith("escalas-")) { html = vistaEscalas(r.slice(8)); rotaMenu = "escalas"; }
    else if (r === "alarmes") { html = vistaAlarmes(); rotaMenu = "alarmes"; }
    else if (r === "farmacos" || r === "farmacos-az") { html = vistaFarmacos(r === "farmacos-az" ? "az" : "doenca"); rotaMenu = "farmacos"; }
    else if (r.startsWith("farmaco-")) { html = vistaFarmaco(r.slice(8)); rotaMenu = "farmacos"; }
    else if (r.startsWith("terapeutica-")) { html = vistaTerapeutica(r.slice(12)); rotaMenu = "farmacos"; }
    else if (r === "protocolos") { html = vistaProtocolos(); rotaMenu = "protocolos"; }
    else if (r.startsWith("protocolo-")) { html = vistaProtocolo(r.slice(10)); rotaMenu = "protocolos"; }
    if (html === null) { html = vistaInicio(); rotaMenu = "inicio"; }
    main.innerHTML = html + ASSINATURA;
    if (typeof NeuroMarcha !== "undefined") NeuroMarcha.montar(main);
    marcarMenu(rotaMenu);
    abrirMenu(false);
    if (seccaoPendente !== null) {
      const k = seccaoPendente; seccaoPendente = null; focarTitulo = false;
      irParaSeccao(k);
      return;
    }
    window.scrollTo(0, 0);
    if (focarTitulo) {
      focarTitulo = false;
      const h1 = main.querySelector("h1");
      if (h1) h1.focus({ preventScroll: true });
    }
  }
  function irPara(h) {
    pesquisaAtual = ""; campoPesquisa.value = "";
    focarTitulo = true;
    if (location.hash === h) render(); else location.hash = h;
  }

  // Ligações internas (conteúdo e menu)
  function tratarClique(ev) {
    const alvo = ev.target.closest("[data-ir]");
    if (alvo) { irParaSeccao(alvo.dataset.ir); return; }
    const acao = ev.target.closest("[data-acao]");
    if (acao && acao.dataset.acao === "imprimir") { window.print(); return; }
    // INFOMED: copiar a DCI e deixar a ligação abrir normalmente (noutro separador)
    if (acao && acao.dataset.acao === "infomed") { copiarDci(acao.dataset.dci); return; }
    const a = ev.target.closest("a[href^='#']");
    if (!a || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.button > 0) return;
    ev.preventDefault();
    if (a.dataset.seccao !== undefined) seccaoPendente = a.dataset.seccao;
    irPara(a.getAttribute("href"));
  }
  main.addEventListener("click", tratarClique);
  nav.addEventListener("click", tratarClique);
  document.querySelectorAll(".marca").forEach(m => m.addEventListener("click", ev => { ev.preventDefault(); irPara("#inicio"); }));

  // Saltar para o conteúdo (sem mudar o #hash)
  $(".saltar").addEventListener("click", ev => {
    ev.preventDefault();
    const h1 = main.querySelector("h1");
    (h1 || main).focus();
  });

  // Pesquisa
  const textoPesquisa = () => { campoPesquisa.placeholder = "Pesquisar"; };
  textoPesquisa();
  let tmp;
  campoPesquisa.addEventListener("input", ev => {
    clearTimeout(tmp);
    tmp = setTimeout(() => {
      const antes = pesquisaAtual.trim();
      pesquisaAtual = ev.target.value;
      render();
      if (antes && !pesquisaAtual.trim()) window.scrollTo(0, 0);
    }, 200);
  });
  formPesquisa.addEventListener("submit", ev => {
    ev.preventDefault();
    clearTimeout(tmp);
    pesquisaAtual = campoPesquisa.value;
    render();
    if (telemovel.matches) campoPesquisa.blur(); // fecha o teclado para ver os resultados
  });
  campoPesquisa.addEventListener("keydown", ev => {
    if (ev.key === "Escape" && campoPesquisa.value) { ev.preventDefault(); campoPesquisa.value = ""; pesquisaAtual = ""; render(); }
  });

  // Menu (telemóvel)
  botaoMenu.addEventListener("click", () => {
    const abrir = !menuAberto();
    abrirMenu(abrir);
    if (!abrir) botaoMenu.focus();
  });
  veu.addEventListener("click", () => { abrirMenu(false); botaoMenu.focus(); });
  document.addEventListener("keydown", ev => {
    if (ev.key === "Escape" && menuAberto()) { abrirMenu(false); botaoMenu.focus(); return; }
    if (ev.key === "Tab" && menuAberto()) { prenderFoco(ev); return; }
    // «/» foca a pesquisa (fora de campos de texto)
    if (ev.key === "/" && !ev.ctrlKey && !ev.metaKey && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
      ev.preventDefault(); campoPesquisa.focus(); campoPesquisa.select();
    }
  });
  telemovel.addEventListener && telemovel.addEventListener("change", () => {
    textoPesquisa();
    colocarPesquisa();
    if (!telemovel.matches) { abrirMenu(false); gruposMenu().forEach(d => { d.open = true; }); }
  });

  window.addEventListener("hashchange", () => { pesquisaAtual = ""; campoPesquisa.value = ""; render(); });

  colocarPesquisa();
  desenharMenu();
  render();
})();
