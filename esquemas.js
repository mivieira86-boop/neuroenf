/* NeuroEnf — esquemas anatómicos originais (SVG), simplificados para orientação.
   Uso numa secção de tema: { t: "…", esquema: "lateral" }.
   As cores dos territórios vêm das classes .t-aca, .t-acm, .t-acp, .t-vb e .t-prof (estilos.css). */
const ESQUEMAS = (() => {
  // Contorno do hemisfério visto de lado (frente à esquerda)
  const CONTORNO = "M60,170 C50,110 95,55 170,42 C240,28 330,35 385,75 C425,105 440,150 425,185 C415,210 395,222 370,226 C350,240 320,246 290,240 C270,262 230,268 200,258 C170,262 140,252 125,232 C95,228 68,205 60,170 Z";
  const cerebeloTronco = `
    <path class="t-vb" d="M292,236 C300,262 302,282 306,298 L334,298 C330,280 330,258 334,238 Z"/>
    <ellipse class="t-vb" cx="368" cy="248" rx="58" ry="30"/>`;
  const rotulo = (x, y, txt, ancora = "middle") => `<text x="${x}" y="${y}" text-anchor="${ancora}">${txt}</text>`;
  const guia = (x1, y1, x2, y2) => `<line class="guia" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;

  const lateral = `<svg viewBox="0 0 490 310" role="img" aria-labelledby="esq-lat-t">
    <title id="esq-lat-t">Face lateral do hemisfério: territórios das artérias cerebrais anterior, média e posterior e da circulação vertebrobasilar</title>
    <defs><clipPath id="clip-lat"><path d="${CONTORNO}"/></clipPath></defs>
    ${cerebeloTronco}
    <g clip-path="url(#clip-lat)">
      <rect class="t-acm" x="0" y="0" width="480" height="310"/>
      <path class="t-aca" d="M30,0 H470 V58 C420,66 385,62 360,66 C300,72 220,58 160,68 C120,76 92,92 66,112 L30,112 Z"/>
      <path class="t-acp" d="M376,40 C370,92 384,150 360,194 C336,224 282,230 222,236 C204,238 192,250 190,310 H480 V40 Z"/>
    </g>
    <path class="contorno" d="${CONTORNO}"/>
    <path class="sulco" d="M140,175 C190,160 250,150 330,150"/>
    <path class="sulco" d="M245,46 C238,80 232,110 236,148"/>
    ${guia(230, 26, 230, 54)}${rotulo(230, 20, "ACA")}
    ${rotulo(205, 120, "ACM")}
    ${guia(440, 112, 410, 140)}${rotulo(444, 108, "ACP", "start")}
    ${guia(300, 288, 260, 292)}${rotulo(256, 296, "Vertebrobasilar", "end")}
    <text class="orient" x="6" y="112" text-anchor="start">Frente</text>
    <text class="orient" x="446" y="200" text-anchor="start">Trás</text>
  </svg>`;

  const medial = `<svg viewBox="0 0 490 310" role="img" aria-labelledby="esq-med-t">
    <title id="esq-med-t">Face medial do hemisfério: territórios das artérias cerebrais anterior e posterior</title>
    <defs><clipPath id="clip-med"><path d="${CONTORNO}"/></clipPath></defs>
    ${cerebeloTronco}
    <g clip-path="url(#clip-med)">
      <rect class="t-aca" x="0" y="0" width="480" height="310"/>
      <path class="t-acp" d="M362,30 C352,80 340,120 318,160 C290,200 250,214 214,224 C196,232 188,250 186,310 H480 V30 Z"/>
      <path class="t-acm" d="M80,200 C110,212 140,222 176,226 L186,310 H0 V200 Z"/>
    </g>
    <path class="contorno" d="${CONTORNO}"/>
    <path class="calo" d="M150,152 C186,112 300,104 344,140 C336,154 304,140 252,140 C206,140 178,154 160,166 Z"/>
    <ellipse class="t-acp talamo" cx="272" cy="176" rx="26" ry="15"/>
    <g clip-path="url(#clip-med)"><path class="sulco" d="M362,30 C352,80 340,120 318,160"/></g>
    ${guia(200, 26, 200, 70)}${rotulo(200, 20, "ACA")}
    ${guia(440, 104, 400, 140)}${rotulo(444, 100, "ACP", "start")}
    ${guia(272, 176, 300, 206)}${rotulo(304, 214, "Tálamo (ACP)", "start")}
    ${rotulo(250, 133, "Corpo caloso")}
    ${guia(118, 234, 92, 270)}${rotulo(88, 282, "Pólo temporal (ACM)", "start")}
    <text class="orient" x="6" y="112" text-anchor="start">Frente</text>
    <text class="orient" x="446" y="200" text-anchor="start">Trás</text>
  </svg>`;

  // Corte axial ao nível dos gânglios da base (frente em cima). Um hemisfério é desenhado e espelhado.
  const hemi = `
    <rect class="t-acm" x="80" y="20" width="160" height="270"/>
    <path class="t-aca" d="M240,20 L240,128 L214,118 C196,90 176,58 150,28 L150,20 Z"/>
    <path class="t-acp" d="M240,290 L240,182 L214,196 C196,222 176,252 150,284 L150,290 Z"/>
    <ellipse class="t-prof" cx="196" cy="140" rx="17" ry="30"/>
    <ellipse class="t-acp talamo" cx="224" cy="166" rx="13" ry="18"/>
    <path class="fronteira" d="M214,118 C196,90 176,58 150,28"/>
    <path class="fronteira" d="M214,196 C196,222 176,252 150,284"/>`;
  const axial = `<svg viewBox="0 0 480 320" role="img" aria-labelledby="esq-ax-t">
    <title id="esq-ax-t">Corte axial ao nível dos gânglios da base: territórios das artérias cerebrais anterior, média e posterior e das artérias perfurantes profundas</title>
    <defs>
      <clipPath id="clip-ax-e"><path d="M240,25 C160,25 90,80 90,155 C90,230 160,285 240,285 Z"/></clipPath>
      <clipPath id="clip-ax-d"><path d="M240,25 C320,25 390,80 390,155 C390,230 320,285 240,285 Z"/></clipPath>
    </defs>
    <g clip-path="url(#clip-ax-e)">${hemi}</g>
    <g clip-path="url(#clip-ax-d)"><g transform="translate(480,0) scale(-1,1)">${hemi}</g></g>
    <ellipse class="contorno" cx="240" cy="155" rx="150" ry="130"/>
    <line class="contorno" x1="240" y1="25" x2="240" y2="285"/>
    ${guia(300, 14, 262, 52)}${rotulo(306, 14, "ACA", "start")}
    ${rotulo(122, 160, "ACM")}${rotulo(358, 160, "ACM")}
    ${guia(300, 306, 262, 262)}${rotulo(306, 312, "ACP", "start")}
    ${guia(190, 128, 110, 50)}${rotulo(14, 26, "Perfurantes profundas", "start")}${rotulo(14, 42, "(lenticuloestriadas)", "start")}
    ${guia(224, 166, 150, 238)}${rotulo(40, 250, "Tálamo (ACP)", "start")}
    <text class="orient" x="460" y="40" text-anchor="end">Frente ↑</text>
  </svg>`;

  // Polígono de Willis e circulação posterior (vista inferior, esquemática). Lado esquerdo desenhado e espelhado.
  const willisLado = `
    <path class="vaso ant" d="M240,250 L240,170"/>
    <path class="vaso pos" d="M214,300 L240,252"/>
    <path class="vaso pos" d="M222,284 C204,288 186,290 168,298"/>
    <path class="vaso pos" d="M240,226 C222,226 204,228 186,234"/>
    <path class="vaso pos" d="M240,184 C222,180 204,178 184,180"/>
    <path class="vaso acp" d="M240,170 C224,166 206,162 190,160 C168,160 140,170 112,186"/>
    <path class="vaso" d="M190,160 L190,112"/>
    <path class="vaso aci" d="M190,112 L172,138"/>
    <path class="vaso acm" d="M190,112 C160,108 130,104 92,98"/>
    <path class="vaso aca" d="M190,112 C204,96 218,84 226,72 C228,56 228,40 226,24"/>`;
  const willis = `<svg viewBox="0 0 480 320" role="img" aria-labelledby="esq-wil-t">
    <title id="esq-wil-t">Polígono de Willis e circulação posterior, esquema simplificado</title>
    ${willisLado}
    <g transform="translate(480,0) scale(-1,1)">${willisLado}</g>
    <path class="vaso aca" d="M226,72 L254,72"/>
    <circle class="no" cx="190" cy="112" r="6"/><circle class="no" cx="290" cy="112" r="6"/>
    ${rotulo(240, 66, "ACoA")}
    ${rotulo(232, 18, "ACA", "end")}
    ${rotulo(86, 94, "ACM", "end")}
    ${rotulo(166, 154, "ACI", "end")}
    ${rotulo(198, 142, "ACoP", "start")}
    ${rotulo(104, 182, "ACP", "end")}
    ${rotulo(178, 206, "Cerebelosa superior", "end")}
    ${rotulo(180, 240, "AICA", "end")}
    ${rotulo(162, 304, "PICA", "end")}
    ${rotulo(248, 212, "Basilar", "start")}
    ${rotulo(286, 304, "Vertebrais", "start")}
    <text class="orient" x="460" y="40" text-anchor="end">Frente ↑</text>
  </svg>`;

  const L = (cls, txt) => ({ cls, txt });
  return {
    lateral: { titulo: "Face lateral do hemisfério", svg: lateral, legenda: [L("t-aca", "Artéria cerebral anterior (ACA)"), L("t-acm", "Artéria cerebral média (ACM)"), L("t-acp", "Artéria cerebral posterior (ACP)"), L("t-vb", "Vertebrobasilar: tronco cerebral e cerebelo")] },
    medial: { titulo: "Face medial do hemisfério", svg: medial, legenda: [L("t-aca", "ACA: face medial frontal e parietal"), L("t-acp", "ACP: lobo occipital, face inferior do temporal e tálamo"), L("t-acm", "ACM: pólo temporal"), L("t-vb", "Vertebrobasilar: tronco cerebral e cerebelo")] },
    axial: { titulo: "Corte axial (gânglios da base)", svg: axial, legenda: [L("t-aca", "ACA"), L("t-acm", "ACM (superficial)"), L("t-prof", "Perfurantes profundas da ACM: gânglios da base e cápsula interna (enfartes lacunares)"), L("t-acp", "ACP, incluindo o tálamo"), L("fronteira", "Zonas de fronteira entre territórios")] },
    willis: { titulo: "Polígono de Willis e circulação posterior", svg: willis, legenda: [L("aci", "Circulação anterior: carótidas internas (ACI) → ACA e ACM"), L("pos", "Circulação posterior: vertebrais → basilar → cerebelosas e ACP"), L("no", "Comunicantes (ACoA e ACoP) ligam as duas circulações")] }
  };
})();
