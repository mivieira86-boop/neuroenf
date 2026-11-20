// NeuroEnf — Marchas: animações esquemáticas (originais) de cada tipo de marcha, vistas de lado e de frente.
// Os textos e as animações são originais da NeuroEnf. Não substituem a observação do doente.

const MARCHAS = {
  normal: {
    nome: "Marcha normal",
    observar: [
      "Passos regulares em comprimento e ritmo, com base estreita.",
      "O calcanhar toca primeiro no chão; o pé levanta-se o suficiente para não arrastar.",
      "Os braços balançam de forma alternada com as pernas."
    ],
    surge: "Referência para comparar com as marchas patológicas.",
    cuidados: []
  },
  parkinsonica: {
    nome: "Marcha parkinsónica",
    observar: [
      "Tronco e cabeça fletidos para a frente; passos curtos e arrastados.",
      "Braços quase sem balanço; pode haver tremor de repouso numa mão.",
      "Dificuldade em arrancar e em mudar de direção (bloqueio ou «congelamento»).",
      "Tendência a acelerar sem conseguir parar (festinação) e instabilidade postural.",
      "Na PSP, a postura tende a ser ereta (por vezes com o pescoço em extensão), com quedas para trás precoces."
    ],
    surge: "Doença de Parkinson, parkinsonismos atípicos e parkinsonismo induzido por fármacos (antipsicóticos, metoclopramida).",
    cuidados: [
      "Avaliar o risco de queda (Morse) e vigiar a marcha nos períodos «off»; levante faseado (risco de hipotensão ortostática).",
      "Para desbloquear: pistas visuais (uma linha no chão) ou ritmo (contar «um, dois»); rodar em arco largo.",
      "Dar a medicação antiparkinsónica no horário do doente; os atrasos agravam a marcha e a deglutição. Não atrasar nem suspender, mesmo em jejum (contactar o médico). Evitar metoclopramida e haloperidol.",
      "Calçado fechado, ambiente desimpedido e auxiliar de marcha, se prescrito."
    ]
  },
  cerebelosa: {
    nome: "Marcha atáxica cerebelosa",
    observar: [
      "Base alargada; passos irregulares em comprimento e ritmo.",
      "Desequilíbrio e desvio para os lados, pior ao virar ou ao parar.",
      "Braços afastados do corpo para se equilibrar.",
      "Não consegue andar com o calcanhar encostado à ponta do outro pé (marcha em tandem); fechar os olhos não agrava muito o desequilíbrio."
    ],
    surge: "Ataxias cerebelosas hereditárias (ex.: Machado-Joseph), AVC ou tumor da fossa posterior, esclerose múltipla, álcool e fármacos (fenitoína, lítio).",
    cuidados: [
      "Acompanhar na deambulação até a segurança estar avaliada; auxiliar de marcha conforme a fisioterapia.",
      "Agravamento súbito com cefaleia, vómitos ou sonolência é sinal de alarme (lesão da fossa posterior).",
      "Se a ataxia surgir ou piorar em doente com antiepiléticos, informar o médico (pode ser toxicidade, ex.: fenitoína).",
      "Ataxia com confusão ou alteração dos movimentos oculares em doente com consumo de álcool ou desnutrição: possível encefalopatia de Wernicke. Comunicar de imediato."
    ]
  },
  sensitiva: {
    nome: "Marcha atáxica sensitiva (talonante)",
    observar: [
      "Base alargada; levanta muito os pés e bate com o calcanhar no chão.",
      "Olha constantemente para os pés para compensar a falta de sensibilidade.",
      "Piora muito no escuro ou de olhos fechados (Romberg positivo)."
    ],
    surge: "Polineuropatias (diabetes, défice de vitamina B12), degenerescência combinada da medula e outras lesões dos cordões posteriores.",
    cuidados: [
      "Boa iluminação, sobretudo à noite (luz de presença); levantes acompanhados.",
      "Ensinar a não andar descalço e a observar os pés todos os dias (sensibilidade diminuída).",
      "Na higiene de pé ou no duche, ter sempre apoio: fechar os olhos (lavar a cara) pode provocar queda."
    ]
  },
  apraxica: {
    nome: "Marcha apráxica (magnética)",
    observar: [
      "Passos muito curtos e lentos, com os pés «colados ao chão».",
      "Base alargada; dificuldade em arrancar e em rodar (precisa de vários passos para virar).",
      "Deitado, consegue fazer o movimento de pedalar: o problema está em iniciar e organizar a marcha.",
      "Tronco direito e balanço dos braços mais preservado do que no Parkinson."
    ],
    surge: "Hidrocefalia de pressão normal, doença dos pequenos vasos cerebrais e outras lesões frontais.",
    cuidados: [
      "Registar a marcha antes e depois da punção lombar evacuadora (ex.: tempo e número de passos para andar 10 metros).",
      "Risco elevado de queda: acompanhar e usar andarilho, se prescrito.",
      "Vigiar em conjunto a incontinência urinária e o estado cognitivo.",
      "Após a punção lombar: vigiar o local da punção e a cefaleia, conforme o protocolo."
    ]
  },
  hemiparetica: {
    nome: "Marcha hemiparética (ceifante)",
    observar: [
      "Perna afetada rígida, em extensão, com o pé em equino (ponta do pé para baixo).",
      "Para não arrastar o pé, a perna descreve um arco para fora (circundução ou «ceifa»).",
      "Braço do mesmo lado fletido e encostado ao tronco, sem balanço."
    ],
    surge: "AVC, tumor ou outra lesão do primeiro neurónio motor num hemisfério cerebral.",
    cuidados: [
      "Apoiar pelo lado afetado; nunca puxar pelo braço parético (risco de subluxação do ombro).",
      "Posicionamento antiespástico e ortótese do pé, se prescrita.",
      "Treino de marcha em articulação com a fisioterapia; calçado firme e fechado."
    ]
  },
  espastica: {
    nome: "Marcha espástica em tesoura",
    observar: [
      "Ambas as pernas rígidas; passos curtos, lentos e com esforço.",
      "As coxas cruzam-se à frente a cada passo (adução, «tesoura»).",
      "Tende a andar em bicos de pés."
    ],
    surge: "Mielopatias (compressão cervical, mielite), esclerose múltipla, ELA, paraparesia espástica hereditária e paralisia cerebral.",
    cuidados: [
      "Vigiar a espasticidade e os espasmos; antiespásticos conforme a prescrição (baclofeno, tizanidina). Sonolência e hipotonia aumentam o risco de queda.",
      "Não suspender bruscamente o baclofeno (oral ou intratecal): risco de abstinência grave (febre, agitação, convulsões, rigidez). Com bomba intratecal, comunicar estes sinais de imediato.",
      "Avaliar o risco de queda e de úlceras por pressão.",
      "Perda rápida de força ou de sensibilidade nas pernas, ou retenção urinária: informar o médico de imediato (compressão medular)."
    ]
  },
  steppage: {
    nome: "Marcha em steppage (pé pendente)",
    observar: [
      "O pé cai durante o avanço porque não consegue levantar a ponta (fraqueza da dorsiflexão).",
      "Para não tropeçar, levanta muito o joelho, como quem sobe um degrau.",
      "A ponta do pé toca no chão antes do calcanhar, por vezes com um ruído de «chapada»."
    ],
    surge: "Lesão do nervo peroneal (fibular), radiculopatia L5, polineuropatias (ex.: paramiloidose), distrofia miotónica e ELA.",
    cuidados: [
      "Ortótese tibiotársica (tala de pé), se prescrita; vigiar a pele por baixo da tala.",
      "Retirar tapetes e obstáculos; calçado fechado e leve.",
      "No doente acamado, almofadar a face lateral do joelho e evitar cruzar as pernas (compressão do nervo peroneal)."
    ]
  },
  miopatica: {
    nome: "Marcha miopática (anserina)",
    observar: [
      "Bamboleia o tronco de um lado para o outro a cada passo, «como um pato».",
      "A bacia descai do lado da perna que avança (fraqueza dos músculos da anca).",
      "Lordose lombar acentuada; dificuldade em levantar-se da cadeira e em subir escadas."
    ],
    surge: "Miopatias e distrofias musculares, miosites e atrofia muscular espinhal.",
    cuidados: [
      "Ajudar nos levantes: cadeira mais alta, com apoio de braços, e alteador de sanita.",
      "Planear a atividade com períodos de descanso (fadiga).",
      "Vigiar dispneia, ortopneia, tosse fraca e voz anasalada; avaliar a deglutição (GUSS). Se agravar, informar o médico de imediato."
    ]
  },
  coreica: {
    nome: "Marcha coreica",
    observar: [
      "Movimentos involuntários rápidos e irregulares do tronco, dos braços e da cabeça.",
      "Passos de comprimento e ritmo variáveis, com aspeto «dançante».",
      "Desequilíbrio com risco de queda, embora muitas vezes consiga recuperar."
    ],
    surge: "Doença de Huntington, coreia induzida por fármacos (levodopa), coreia de origem vascular e doenças autoimunes (ex.: lúpus).",
    cuidados: [
      "Ambiente seguro: cama baixa, grades laterais almofadadas, sem objetos no caminho.",
      "Necessidades calóricas aumentadas: vigiar o peso.",
      "Cuidado com bebidas quentes e objetos cortantes; avaliar a deglutição (GUSS)."
    ]
  }
};

// Marchas mostradas em cada tema (por ordem)
const MARCHAS_DO_TEMA = {
  "avc-isquemico": ["hemiparetica"], "avc-hemorragico": ["hemiparetica"], "territorios-arteriais": ["hemiparetica", "cerebelosa"],
  semiologia: ["normal", "parkinsonica", "cerebelosa", "sensitiva", "apraxica", "hemiparetica", "espastica", "steppage", "miopatica", "coreica"],
  movimento: ["parkinsonica", "apraxica", "coreica"],
  "parkinsonismos-atipicos": ["parkinsonica", "cerebelosa"],
  huntington: ["coreica"],
  ataxias: ["cerebelosa"],
  avc: ["hemiparetica"],
  hpn: ["apraxica"],
  neuropatias: ["sensitiva", "steppage"],
  paf: ["steppage"],
  sistemicas: ["sensitiva", "cerebelosa"],
  imunodeprimido: ["sensitiva"],
  tumores: ["hemiparetica"],
  mielopatias: ["espastica", "sensitiva"],
  desmielinizantes: ["espastica", "cerebelosa"],
  dnm: ["espastica", "steppage"],
  "distrofia-miotonica": ["steppage"],
  parkinson: ["parkinsonica"],
  dcl: ["parkinsonica"],
  "demencia-vascular": ["apraxica"],
  "esclerose-multipla": ["espastica", "cerebelosa"],
  nmo: ["espastica", "sensitiva"],
  miastenia: ["miopatica"],
  ame: ["miopatica"]
};

// ── Motor de animação ──────────────────────────────────────────────────────────
// Figura de traços: vista de lado (plano sagital) e de frente (plano frontal), com o chão a deslizar.
// Ângulos em graus. Fase p (0–1) de cada perna: 0 = contacto do calcanhar, ~0,6 = início do avanço.
const NeuroMarcha = (function () {
  const R = Math.PI / 180;
  const g = (p, c, s) => { let d = Math.abs(p - c); d = Math.min(d, 1 - d); return Math.exp(-(d * d) / (2 * s * s)); };
  const ruido = (t, s) => (Math.sin(1.37 * t + s) + Math.sin(2.93 * t + 2.1 * s) + Math.sin(4.71 * t + 3.7 * s)) / 3;
  const fr = x => x - Math.floor(x);

  const BASE = {
    ciclo: 1.1, hipA: 22, hipB: 6, joelhoApoio: 12, joelhoAvanco: 58, joelhoB: 3, joelhoAvancoC: 0.73,
    tornozeloImpulso: 14, tornozeloAvanco: 0, tornozeloB: 0, ancaAvanco: 0, quedaContacto: 0,
    tronco: 3, cabeca: 0, bracoA: 18, bracoB: 0, cotovelo: 18, bracoAbd: 6,
    base: 3, oscilacao: 1.5, bacia: 2, circ: 0, irregular: 0, coreia: 0, tremor: 0, olhar: 0,
    D: {}, E: {}
  };
  const TIPOS = {
    normal: {},
    parkinsonica: { ciclo: 0.78, hipA: 8, hipB: 10, joelhoB: 18, joelhoApoio: 4, joelhoAvanco: 22, tornozeloImpulso: 3,
      tronco: 20, cabeca: 14, bracoA: 2, bracoB: -10, cotovelo: 42, bracoAbd: 8, base: 3, oscilacao: 0.8, tremor: 1 },
    cerebelosa: { ciclo: 1.35, hipA: 17, joelhoAvanco: 48, base: 11, oscilacao: 6, bracoAbd: 26, bracoA: 8, cotovelo: 25, irregular: 0.75 },
    sensitiva: { ciclo: 1.35, hipA: 20, hipB: 8, ancaAvanco: 26, joelhoAvanco: 70, joelhoAvancoC: 0.78, tornozeloAvanco: 10, tornozeloImpulso: 6,
      base: 9, oscilacao: 3, cabeca: 30, tronco: 10, bracoAbd: 14, irregular: 0.3, talonar: 1 },
    apraxica: { ciclo: 1.7, hipA: 6, hipB: 4, joelhoApoio: 2, joelhoAvanco: 9, joelhoB: 6, tornozeloImpulso: 0,
      base: 10, oscilacao: 2.5, tronco: 4, bracoA: 9, cotovelo: 20, irregular: 0.2 },
    hemiparetica: { ciclo: 1.6, hipA: 18, joelhoAvanco: 50, oscilacao: 3,
      D: { hipA: 13, joelhoAvanco: 6, joelhoApoio: 0, joelhoB: 0, tornozeloImpulso: 0, tornozeloB: -12, tornozeloAvanco: -6, circ: 16,
        bracoA: 0, bracoB: -4, cotovelo: 125, bracoAbd: -4 } },
    espastica: { ciclo: 1.5, hipA: 11, hipB: 8, joelhoB: 3, joelhoApoio: 2, joelhoAvanco: 14, tornozeloB: -18, tornozeloImpulso: 0,
      base: -5, tesoura: 9, oscilacao: 5, tronco: 6, bracoA: 8, bracoAbd: 14, cotovelo: 30 },
    steppage: { ciclo: 1.3, hipA: 18, hipB: 8, ancaAvanco: 34, quedaContacto: -30, joelhoAvanco: 85, joelhoAvancoC: 0.79, tornozeloAvanco: -34, tornozeloImpulso: 6, base: 4 },
    miopatica: { ciclo: 1.3, hipA: 15, joelhoAvanco: 48, tronco: -9, oscilacao: 11, bacia: 9, base: 6, bracoA: 12, bracoAbd: 12, cotovelo: 12 },
    coreica: { ciclo: 1.2, hipA: 20, base: 6, oscilacao: 3, irregular: 0.55, coreia: 1, bracoAbd: 10 }
  };

  // Comprimentos (unidades do desenho)
  const L = { coxa: 40, perna: 38, pe: 15, calc: 4, tronco: 52, pesc: 7, cabeca: 9, braco: 29, antebraco: 27, bacia: 9, ombro: 12 };
  const CHAO = 196;

  function parametros(tipo) {
    const p = Object.assign({}, BASE, TIPOS[tipo] || {});
    p.D = Object.assign({}, TIPOS[tipo] && TIPOS[tipo].D);
    p.E = Object.assign({}, TIPOS[tipo] && TIPOS[tipo].E);
    return p;
  }
  const lado = (p, s, k) => (p[s][k] !== undefined ? p[s][k] : p[k]);

  // Ângulos de uma perna na fase f (com variação por ciclo)
  function perna(p, s, f, amp) {
    const hipA = lado(p, s, "hipA") * amp, hipB = lado(p, s, "hipB");
    let anca = hipB + hipA * Math.cos(2 * Math.PI * f) + lado(p, s, "ancaAvanco") * g(f, 0.8, 0.09);
    const joelho = lado(p, s, "joelhoB") + lado(p, s, "joelhoApoio") * g(f, 0.14, 0.07)
      + lado(p, s, "joelhoAvanco") * amp * g(f, lado(p, s, "joelhoAvancoC"), 0.1);
    const emAvanco = f > 0.62 && f < 0.97 ? Math.sin(Math.PI * (f - 0.62) / 0.35) : 0;
    let tornozelo = lado(p, s, "tornozeloB") - lado(p, s, "tornozeloImpulso") * g(f, 0.58, 0.05)
      + lado(p, s, "tornozeloAvanco") * emAvanco
      + lado(p, s, "quedaContacto") * g(f, 0.995, 0.03); // pé ainda caído no contacto: a ponta toca primeiro
    if (p.talonar) anca += 6 * g(f, 0.88, 0.04) - 4 * g(f, 0.97, 0.025); // levanta alto e «bate» com o calcanhar
    const abd = lado(p, s, "base") + lado(p, s, "circ") * emAvanco - (p.tesoura || 0) * emAvanco;
    return { anca, joelho, tornozelo, abd, emAvanco };
  }

  // Cinemática de lado: posição relativa à anca (x para a frente, y para baixo)
  function cadeiaLado(a) {
    const t1 = a.anca * R, t2 = (a.anca - a.joelho) * R;
    const joelho = [Math.sin(t1) * L.coxa, Math.cos(t1) * L.coxa];
    const torn = [joelho[0] + Math.sin(t2) * L.perna, joelho[1] + Math.cos(t2) * L.perna];
    const tp = t2 + Math.PI / 2 - a.tornozelo * R; // pé perpendicular à perna quando tornozelo = 0
    const ponta = [torn[0] + Math.sin(tp) * L.pe * 0.8, torn[1] + Math.cos(tp) * L.pe * 0.8];
    const calc = [torn[0] - Math.sin(tp) * L.calc, torn[1] - Math.cos(tp) * L.calc];
    return { joelho, torn, ponta, calc, fundo: Math.max(ponta[1], calc[1], torn[1] + 2) };
  }

  function pose(p, t, estado) {
    // fase com irregularidade (ritmo e amplitude variáveis)
    const vel = 1 + p.irregular * 0.45 * ruido(t * 0.9, 1.3);
    estado.fase += (estado.dt / p.ciclo) * vel;
    const f = fr(estado.fase), ciclo = Math.floor(estado.fase);
    const amp = 1 + p.irregular * 0.35 * Math.sin(ciclo * 12.9898 + 4.1) * Math.sin(ciclo * 3.17 + 1.7);
    const fD = f, fE = fr(f + 0.5);
    const pd = perna(p, "D", fD, amp), pe = perna(p, "E", fE, amp);
    const co = p.coreia;
    if (co) {
      pd.anca += 7 * ruido(t * 2.1, 2); pe.anca += 7 * ruido(t * 2.3, 5);
      pd.abd += 5 * ruido(t * 1.9, 7); pe.abd += 5 * ruido(t * 1.7, 9);
    }
    const lD = cadeiaLado(pd), lE = cadeiaLado(pe);
    // altura da anca: o pé mais baixo assenta no chão
    const fundoD = lD.fundo * Math.cos(pd.abd * R), fundoE = lE.fundo * Math.cos(pe.abd * R);
    const ancaY = CHAO - Math.max(fundoD, fundoE);
    // oscilação lateral do tronco para o lado da perna em apoio (D em apoio quando fD < 0,6)
    const lateral = Math.sin(2 * Math.PI * f); // +1 a meio do apoio da perna direita
    const irr = p.irregular ? 1 + 0.6 * ruido(t * 0.7, 3) : 1;
    let osc = -p.oscilacao * lateral * irr; // tronco desloca-se para o lado da perna em apoio
    const bacia = p.bacia;
    let tronco = p.tronco, cabeca = p.cabeca, cabLat = 0;
    if (p.irregular) osc += 3 * p.irregular * ruido(t * 1.1, 11);
    if (co) { tronco += 8 * ruido(t * 1.6, 13); osc += 8 * ruido(t * 1.4, 17); cabeca += 12 * ruido(t * 2.4, 19); cabLat = 12 * ruido(t * 2.2, 23); }
    const braco = s => {
      const fOposta = s === "D" ? fE : fD; // o braço acompanha a perna do lado oposto
      let fl = lado(p, s, "bracoB") + lado(p, s, "bracoA") * amp * Math.cos(2 * Math.PI * fOposta);
      let cot = lado(p, s, "cotovelo"), abd = lado(p, s, "bracoAbd");
      if (p.tremor && s === "D") cot += 5 * Math.sin(t * 2 * Math.PI * 5);
      if (co) { fl += 25 * ruido(t * 2.6, s === "D" ? 29 : 31); cot += 30 * ruido(t * 3.1, s === "D" ? 37 : 41); abd += 20 * ruido(t * 2.2, s === "D" ? 43 : 47); }
      return { fl, cot, abd };
    };
    return { pd, pe, lD, lE, ancaY, osc, bacia, lateral, tronco, cabeca, cabLat, bD: braco("D"), bE: braco("E"), f };
  }

  // ── Desenho ──
  const NS = "http://www.w3.org/2000/svg";
  function el(pai, nome, at) { const e = document.createElementNS(NS, nome); for (const k in at) e.setAttribute(k, at[k]); pai.appendChild(e); return e; }
  const pts = a => a.map(q => q[0].toFixed(1) + "," + q[1].toFixed(1)).join(" ");

  function criarPainel(svg, x0) {
    const gr = el(svg, "g", { transform: `translate(${x0},0)` });
    el(gr, "line", { x1: 4, y1: CHAO + 1, x2: 136, y2: CHAO + 1, class: "nm-chao" });
    const marcas = [];
    for (let i = 0; i < 8; i++) marcas.push(el(gr, "line", { y1: CHAO + 5, y2: CHAO + 5, class: "nm-marca" }));
    const longe = el(gr, "g", { class: "nm-longe" }), perto = el(gr, "g", { class: "nm-perto" });
    const mk = (pai, n) => Array.from({ length: n }, () => el(pai, "polyline", {}));
    return {
      gr, marcas,
      longe: { perna: mk(longe, 1)[0], braco: mk(longe, 1)[0] },
      tronco: el(perto, "polyline", { class: "nm-tronco" }),
      bacia: el(perto, "line", {}),
      ombros: el(perto, "line", {}),
      cabeca: el(perto, "circle", { r: L.cabeca }),
      perto: { perna: mk(perto, 1)[0], braco: mk(perto, 1)[0] }
    };
  }

  function desenharLado(P, s, desloc) {
    const cx = 70, hy = s.ancaY;
    const tr = s.tronco * R;
    const pesc = [cx + Math.sin(tr) * L.tronco, hy - Math.cos(tr) * L.tronco];
    const cab = s.cabeca * R + tr;
    const cabC = [pesc[0] + Math.sin(cab) * (L.pesc + L.cabeca), pesc[1] - Math.cos(cab) * (L.pesc + L.cabeca)];
    P.tronco.setAttribute("points", pts([[cx, hy], pesc, [pesc[0] + Math.sin(cab) * L.pesc, pesc[1] - Math.cos(cab) * L.pesc]]));
    P.cabeca.setAttribute("cx", cabC[0].toFixed(1)); P.cabeca.setAttribute("cy", cabC[1].toFixed(1));
    const ombro = [cx + Math.sin(tr) * (L.tronco - 4), hy - Math.cos(tr) * (L.tronco - 4)];
    const braco = b => {
      const a1 = (b.fl) * R + tr, a2 = a1 + b.cot * R;
      const cot = [ombro[0] + Math.sin(a1) * L.braco, ombro[1] + Math.cos(a1) * L.braco];
      const mao = [cot[0] + Math.sin(a2) * L.antebraco, cot[1] + Math.cos(a2) * L.antebraco];
      return pts([ombro, cot, mao]);
    };
    const perna = l => pts([[cx, hy], [cx + l.joelho[0], hy + l.joelho[1]], [cx + l.torn[0], hy + l.torn[1]], [cx + l.calc[0], hy + l.calc[1]], [cx + l.ponta[0], hy + l.ponta[1]], [cx + l.torn[0], hy + l.torn[1]]]);
    // lado direito perto, esquerdo longe
    P.perto.perna.setAttribute("points", perna(s.lD)); P.longe.perna.setAttribute("points", perna(s.lE));
    P.perto.braco.setAttribute("points", braco(s.bD)); P.longe.braco.setAttribute("points", braco(s.bE));
    P.marcas.forEach((m, i) => { const x = 4 + fr((i * 17 - desloc) / 136) * 132; m.setAttribute("x1", x.toFixed(1)); m.setAttribute("x2", (x + 6).toFixed(1)); });
  }

  function desenharFrente(P, s) {
    const cx = 70, hy = s.ancaY;
    // Vista de frente: o lado direito do doente fica à esquerda de quem observa (sinal -1).
    const desc = s.bacia * s.lateral * 0.45; // a bacia descai do lado da perna em avanço
    const ancaD = [cx - L.bacia, hy - desc], ancaE = [cx + L.bacia, hy + desc];
    const os = s.osc * R;
    const pesc = [cx + Math.sin(os) * L.tronco, hy - Math.cos(os) * L.tronco];
    const cl = s.cabLat * R + os;
    const cabC = [pesc[0] + Math.sin(cl) * (L.pesc + L.cabeca), pesc[1] - Math.cos(cl) * (L.pesc + L.cabeca)];
    P.tronco.setAttribute("points", pts([[cx, hy], pesc, [pesc[0] + Math.sin(cl) * L.pesc, pesc[1] - Math.cos(cl) * L.pesc]]));
    P.cabeca.setAttribute("cx", cabC[0].toFixed(1)); P.cabeca.setAttribute("cy", cabC[1].toFixed(1));
    P.bacia.setAttribute("x1", ancaD[0].toFixed(1)); P.bacia.setAttribute("y1", ancaD[1].toFixed(1));
    P.bacia.setAttribute("x2", ancaE[0].toFixed(1)); P.bacia.setAttribute("y2", ancaE[1].toFixed(1));
    const oc = [cx + Math.sin(os) * (L.tronco - 4), hy - Math.cos(os) * (L.tronco - 4)];
    const oD = [oc[0] - Math.cos(os) * L.ombro, oc[1] - Math.sin(os) * L.ombro], oE = [oc[0] + Math.cos(os) * L.ombro, oc[1] + Math.sin(os) * L.ombro];
    P.ombros.setAttribute("x1", oD[0].toFixed(1)); P.ombros.setAttribute("y1", oD[1].toFixed(1));
    P.ombros.setAttribute("x2", oE[0].toFixed(1)); P.ombros.setAttribute("y2", oE[1].toFixed(1));
    const braco = (b, o, sinal) => {
      const a1 = b.abd * R; // abdução positiva = para fora
      const enc = Math.max(0.35, Math.abs(Math.cos(b.fl * R))); // a flexão encurta o braço visto de frente
      const cot = [o[0] + sinal * Math.sin(a1) * L.braco + Math.sin(os) * 4, o[1] + Math.cos(a1) * L.braco * enc];
      const fa = (b.fl + b.cot) * R;
      const mao = [cot[0] - sinal * L.antebraco * 0.55 * Math.abs(Math.sin(b.cot * R)) + sinal * Math.sin(a1) * 6, cot[1] + L.antebraco * Math.cos(fa)];
      return pts([o, cot, mao]);
    };
    const perna = (pp, ll, anca, sinal) => {
      const a = pp.abd * R;
      const jx = sinal * Math.sin(a) * ll.joelho[1], jy = Math.cos(a) * ll.joelho[1];
      const tx = sinal * Math.sin(a) * ll.torn[1], ty = Math.cos(a) * ll.torn[1];
      const fy = Math.max(ty, ll.fundo * Math.cos(a));
      return pts([anca, [anca[0] + jx, anca[1] + jy], [anca[0] + tx, anca[1] + ty], [anca[0] + tx, anca[1] + fy], [anca[0] + tx + sinal * 4, anca[1] + fy]]);
    };
    P.perto.perna.setAttribute("points", perna(s.pd, s.lD, ancaD, -1));
    P.longe.perna.setAttribute("points", perna(s.pe, s.lE, ancaE, 1));
    P.perto.braco.setAttribute("points", braco(s.bD, oD, -1));
    P.longe.braco.setAttribute("points", braco(s.bE, oE, 1));
    P.marcas.forEach(m => { m.setAttribute("x1", 0); m.setAttribute("x2", 0); });
  }

  // ── Instâncias ──
  const ativas = new Set();
  let rafId = 0, ultimo = 0;
  const reduzir = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  const visiveis = new WeakSet();
  const obs = "IntersectionObserver" in window
    ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) visiveis.add(e.target); else visiveis.delete(e.target); }), { rootMargin: "100px" })
    : null;

  function velocidadeChao(p) {
    // deslocamento do pé em apoio entre 10% e 40% do ciclo → velocidade do chão
    const a = cadeiaLado(perna(p, "D", 0.1, 1)), b = cadeiaLado(perna(p, "D", 0.4, 1));
    const c = cadeiaLado(perna(p, "E", 0.1, 1)), d = cadeiaLado(perna(p, "E", 0.4, 1));
    const dx = ((a.torn[0] - b.torn[0]) + (c.torn[0] - d.torn[0])) / 2;
    return Math.max(2, dx / (0.3 * p.ciclo));
  }

  function criar(caixa) {
    const tipo = caixa.dataset.marcha;
    const p = parametros(tipo);
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 290 210");
    svg.setAttribute("class", "nm-svg");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    el(svg, "text", { x: 70, y: 14, class: "nm-rotulo", "text-anchor": "middle" }).textContent = "De lado";
    el(svg, "text", { x: 220, y: 14, class: "nm-rotulo", "text-anchor": "middle" }).textContent = "De frente";
    el(svg, "line", { x1: 145, y1: 24, x2: 145, y2: 200, class: "nm-divisor" });
    const lado = criarPainel(svg, 0), frente = criarPainel(svg, 150);
    lado.bacia.remove(); lado.ombros.remove();
    (caixa.querySelector(".nm-tela") || caixa).appendChild(svg);
    const inst = { caixa, p, lado, frente, estado: { fase: 0, dt: 0 }, t: 0, desloc: 0, vChao: velocidadeChao(p), lento: false,
      parado: reduzir.matches };
    const btn = caixa.querySelector("[data-nm=pausa]"), btnL = caixa.querySelector("[data-nm=lento]");
    const atualizarBotoes = () => {
      if (btn) btn.textContent = inst.parado ? "Reproduzir" : "Pausar";
      if (btnL) btnL.setAttribute("aria-pressed", String(inst.lento));
    };
    if (btn) btn.onclick = () => { inst.parado = !inst.parado; atualizarBotoes(); arrancar(); };
    if (btnL) btnL.onclick = () => { inst.lento = !inst.lento; atualizarBotoes(); };
    atualizarBotoes();
    passo(inst, 0.001);
    ativas.add(inst);
    if (obs) obs.observe(caixa); else visiveis.add(caixa);
    return inst;
  }

  function passo(inst, dt) {
    inst.t += dt; inst.estado.dt = dt;
    const s = pose(inst.p, inst.t, inst.estado);
    inst.desloc += inst.vChao * dt * (1 + inst.p.irregular * 0.45 * ruido(inst.t * 0.9, 1.3));
    desenharLado(inst.lado, s, inst.desloc);
    desenharFrente(inst.frente, s);
  }

  function ciclo(agora) {
    const dt = Math.min(0.05, ultimo ? (agora - ultimo) / 1000 : 0.016); ultimo = agora;
    let algum = false;
    ativas.forEach(inst => {
      if (!inst.caixa.isConnected) { ativas.delete(inst); if (obs) obs.unobserve(inst.caixa); return; }
      if (inst.parado) return;
      algum = true;
      if (!visiveis.has(inst.caixa)) return;
      passo(inst, dt * (inst.lento ? 0.4 : 1));
    });
    rafId = algum ? requestAnimationFrame(ciclo) : 0;
    if (!algum) ultimo = 0;
  }
  function arrancar() { if (!rafId) { ultimo = 0; rafId = requestAnimationFrame(ciclo); } }

  function montar(raiz) {
    (raiz || document).querySelectorAll(".marcha-anim[data-marcha]:not([data-montada])").forEach(c => { c.dataset.montada = "1"; criar(c); });
    arrancar();
  }
  return { montar, tipos: Object.keys(TIPOS), _pose: (tipo, t) => pose(parametros(tipo), t, { fase: t / parametros(tipo).ciclo, dt: 0 }) };
})();
