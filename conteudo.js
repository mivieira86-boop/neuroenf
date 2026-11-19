// NeuroEnf — conteúdo clínico (adulto)
// Texto original orientado para enfermagem. Organizado pelos capítulos 1–23 de
// «A Neurologia que Todo Médico Deve Saber» (Nitrini & Bacheschi, Atheneu) — as
// páginas indicadas remetem para o livro. A Parte 3 (Neurologia Infantil) não está incluída.

const PARTES = [
  { id: "p1", nome: "Avaliação e diagnóstico neurológico" },
  { id: "p2", nome: "Clínica neurológica" },
  { id: "p3", nome: "Cuidados de enfermagem transversais" },
  { id: "p4", nome: "Patologias específicas (A–Z)" }
];

const TEMAS = [
// ───────────────────────────── PARTE 1 ─────────────────────────────
{
  id: "fundamentos", cap: 1, parte: "p1", icone: "🧠",
  titulo: "Princípios fundamentais",
  pags: "3–52",
  resumo: "Bases de neuroanatomia e neurofisiologia para perceber de onde vêm os sinais que observamos: primeiro localizar a lesão, só depois pensar na causa.",
  seccoes: [
    { t: "Ideia central", itens: [
      "Em neurologia o raciocínio segue a ordem: sintomas/sinais → síndrome → topografia (onde está a lesão) → etiologia (o que a causa).",
      "Uma boa colheita de dados de enfermagem (início, evolução, o que o doente consegue/deixou de conseguir fazer) é tão útil como o exame."
    ]},
    { t: "Neurónio motor superior vs inferior", tabela: {
      cab: ["", "Neurónio motor superior (central)", "Neurónio motor inferior (periférico)"],
      lin: [
        ["Onde", "Córtex, cápsula interna, tronco, medula (vias)", "Corno anterior da medula, raízes, plexos, nervos"],
        ["Tónus", "Aumentado (espasticidade)", "Diminuído (flacidez)"],
        ["Reflexos", "Vivos/exaltados; Babinski presente", "Diminuídos ou abolidos"],
        ["Trofismo", "Atrofia tardia, ligeira", "Atrofia marcada; fasciculações"],
        ["Distribuição", "Hemicorpo, membros (padrão «em bloco»)", "Território de raiz ou nervo"]
      ],
      nota: "Na fase aguda de uma lesão central (ex.: AVC, traumatismo medular) pode haver flacidez e arreflexia transitórias («choque»)."
    }},
    { t: "Funções que convém lembrar", itens: [
      "Lobo frontal: movimento voluntário, comportamento, planeamento; área de Broca (expressão da linguagem) no hemisfério dominante.",
      "Lobo parietal: sensibilidade; à direita, atenção ao espaço — a lesão causa negligência do lado esquerdo.",
      "Lobo temporal: memória, audição; área de Wernicke (compreensão) no hemisfério dominante.",
      "Lobo occipital: visão — lesão causa defeito do campo visual (hemianopsia).",
      "Cerebelo: coordenação e equilíbrio — a lesão causa ataxia do mesmo lado.",
      "Tronco cerebral: pares cranianos, consciência, respiração, deglutição — lesões causam sinais «cruzados» (pares cranianos de um lado, membros do outro).",
      "Gânglios da base: controlo do movimento (parkinsonismo, coreia, distonia).",
      "O hemisfério esquerdo é dominante para a linguagem na grande maioria das pessoas, incluindo a maioria dos canhotos."
    ]},
    { t: "Vascularização (útil para o AVC)", itens: [
      "Artéria cerebral média: face e membro superior mais afetados que o inferior; afasia (esquerda) ou negligência (direita).",
      "Artéria cerebral anterior: membro inferior mais afetado; alterações de comportamento e controlo vesical.",
      "Artéria cerebral posterior: hemianopsia, alterações de memória.",
      "Território vertebrobasilar: vertigem, diplopia, disartria, disfagia, ataxia, sinais cruzados, alteração da consciência."
    ]}
  ]
},
{
  id: "semiologia", cap: 2, parte: "p1", icone: "🩺",
  titulo: "Semiologia — avaliação neurológica de enfermagem",
  pags: "53–68",
  resumo: "Roteiro prático do exame neurológico à cabeceira. Não é preciso aplicar todos os testes a todos os doentes — escolhe-se em função da queixa e do contexto.",
  seccoes: [
    { t: "Roteiro rápido (vigilância neurológica)", itens: [
      "Consciência: Escala de Coma de Glasgow (ver Escalas). Registar componentes separados (O, V, M), não só o total.",
      "Orientação: pessoa, espaço, tempo. Atenção: dizer os meses do ano ao contrário.",
      "Pupilas: tamanho (mm), simetria, reflexo fotomotor direto e consensual.",
      "Força: comparar lados — escala MRC 0–5; prova dos braços estendidos (desvio/pronação sugere défice discreto).",
      "Fala e linguagem: articulação (disartria) vs conteúdo/compreensão (afasia).",
      "Face: assimetria do sorriso, encerramento palpebral.",
      "Sinais vitais: TA, FC, padrão respiratório, temperatura, SpO2 e glicemia capilar."
    ]},
    { t: "Pares cranianos — o essencial", tabela: {
      cab: ["Par", "Como avaliar à cabeceira"],
      lin: [
        ["II — ótico", "Acuidade, campos visuais por confrontação, reflexo fotomotor (via aferente)"],
        ["III, IV, VI — oculomotores", "Seguir o dedo em «H»; diplopia; ptose e midríase sugerem lesão do III"],
        ["V — trigémio", "Sensibilidade da face; reflexo corneano; mastigação"],
        ["VII — facial", "Franzir a testa, fechar os olhos, sorrir. Central: poupa a testa. Periférico: atinge toda a hemiface"],
        ["VIII — vestibulococlear", "Audição; vertigem, nistagmo"],
        ["IX, X — glossofaríngeo, vago", "Voz, elevação do palato, tosse, deglutição"],
        ["XI — acessório", "Elevar os ombros, rodar a cabeça"],
        ["XII — hipoglosso", "Protrusão da língua (desvia para o lado da lesão periférica)"]
      ]
    }},
    { t: "Outros componentes", itens: [
      "Tónus: resistência ao movimento passivo — espasticidade (aumenta com a velocidade) vs rigidez (constante, «roda dentada» no parkinsonismo).",
      "Reflexos osteotendinosos e sinal de Babinski (extensão do hálux) — habitualmente avaliados pelo médico; registar se observado.",
      "Sensibilidade: dor/temperatura, tato, posição segmentar e vibração; procurar nível sensitivo no tronco (lesão medular).",
      "Coordenação: dedo-nariz, calcanhar-joelho, movimentos alternados rápidos.",
      "Marcha e equilíbrio: base alargada (cerebelosa), pequenos passos (parkinsónica), ceifante (hemiparética), Romberg.",
      "Sinais meníngeos: rigidez da nuca, Kernig, Brudzinski."
    ]},
    { t: "Avaliação inicial de enfermagem na admissão", itens: [
      "Nas primeiras horas após a admissão, e sempre que haja alteração clínica, transferência ou queda: risco de queda (Morse), risco de úlcera por pressão (Braden), funcionalidade (Barthel) e dor (escala adequada à capacidade de comunicar).",
      "Rastreio de disfagia antes de qualquer ingestão oral em doentes com AVC, alteração da consciência, doença neuromuscular ou bulbar, ou queixas de engasgamento.",
      "Vigiar sinais de delirium (alteração aguda e flutuante da atenção, do comportamento ou da vigília) em doentes com ≥ 65 anos, défice cognitivo conhecido ou alteração aguda do comportamento; comunicar ao médico.",
      "Rastreio do risco nutricional com o instrumento em uso no hospital; peso na admissão.",
      "Registar a avaliação neurológica de base (Glasgow por componentes, pupilas, força, fala) — sem ela não há termo de comparação.",
      "Qualquer alteração: registar hora, valores, a quem foi comunicada e a atitude tomada.",
      "Identificar o cuidador principal e as condições do domicílio desde o 1.º dia — a preparação da alta começa na admissão."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Qualquer descida mantida da Glasgow (sobretudo ≥ 1 ponto na resposta motora ou ≥ 2 pontos no total), agitação ou comportamento novo.",
      "Nova anisocoria ou pupila pouco reativa.",
      "Novo défice motor, de linguagem ou visual.",
      "Bradicardia com hipertensão e alteração respiratória (tríade de Cushing).",
      "Glicemia capilar alterada — corrigir e reavaliar antes de concluir.",
      "Nova disfagia: tosse ao engolir, voz molhada, sialorreia — suspender a via oral e comunicar."
    ]}
  ]
},
{
  id: "topografia", cap: 3, parte: "p1", icone: "📍",
  titulo: "Síndromes neurológicas e localização da lesão",
  pags: "69–82",
  resumo: "Combinações de sinais apontam para o local da lesão. Saber reconhecê-las ajuda a perceber a gravidade e a antecipar complicações.",
  seccoes: [
    { t: "Padrões e localização provável", tabela: {
      cab: ["Padrão observado", "Localização provável"],
      lin: [
        ["Hemiparésia + afasia", "Hemisfério esquerdo (córtex)"],
        ["Hemiparésia + negligência esquerda", "Hemisfério direito"],
        ["Hemiparésia proporcionada (face, braço e perna iguais) sem alterações corticais", "Cápsula interna / ponte (lacunar)"],
        ["Par craniano de um lado + défice dos membros do outro", "Tronco cerebral (síndrome alterna)"],
        ["Para/tetraparésia + nível sensitivo + alteração esfincteriana", "Medula espinal"],
        ["Dor radicular + défice num território", "Raiz nervosa"],
        ["Fraqueza e alteração sensitiva distal, simétrica, «em luva e meia»", "Nervos periféricos (polineuropatia)"],
        ["Fraqueza proximal simétrica sem alterações sensitivas", "Músculo"],
        ["Fraqueza flutuante que agrava com o esforço; ptose, diplopia", "Junção neuromuscular (ex.: miastenia)"],
        ["Ataxia, nistagmo, disartria", "Cerebelo e suas ligações"]
      ]
    }},
    { t: "Na prática", itens: [
      "Descrever o que se observa (ex.: «não move o braço direito, fala com troca de palavras») é mais útil do que tentar rotular.",
      "Lesões medulares e do tronco têm risco de compromisso respiratório e da deglutição — vigiar ativamente.",
      "Défices que se instalam em segundos/minutos sugerem causa vascular; em horas/dias, inflamação/infeção; em semanas/meses, tumor ou degenerescência."
    ]}
  ]
},
{
  id: "exames", cap: 4, parte: "p1", icone: "🧪",
  titulo: "Exames complementares: LCR, EEG e EMG",
  pags: "83–110",
  resumo: "Preparação do doente, colaboração no procedimento e cuidados após punção lombar, eletroencefalograma e eletromiografia.",
  seccoes: [
    { t: "Punção lombar / líquido cefalorraquidiano (p. 83)", itens: [
      "Antes: confirmar consentimento, coagulação e plaquetas, medicação anticoagulante/antiagregante (seguir protocolo), e se foi feita imagem quando há défice focal, alteração da consciência ou suspeita de hipertensão intracraniana.",
      "Posicionamento: decúbito lateral em posição fetal (permite medir a pressão de abertura) ou sentado inclinado para a frente.",
      "Identificar e numerar os tubos por ordem de colheita; enviar de imediato ao laboratório (células degradam-se).",
      "Após: vigiar local da punção, dor lombar, sinais neurológicos nos membros inferiores e retenção urinária. O repouso prolongado no leito não previne a cefaleia pós-punção — seguir o protocolo do serviço para o levante.",
      "Cefaleia pós-punção: agrava em pé e alivia deitado; pode surgir até alguns dias depois. Comunicar; hidratação e analgesia conforme prescrição."
    ]},
    { t: "LCR — valores de referência no adulto (orientativos)", tabela: {
      cab: ["Parâmetro", "Normal"],
      lin: [
        ["Aspeto", "Límpido e incolor («água de rocha»)"],
        ["Pressão de abertura (decúbito lateral)", "≈ 10–20 cmH2O (até ≈ 25 em obesos)"],
        ["Células", "≤ 4–5 /mm³ (linfócitos); sem eritrócitos"],
        ["Proteínas", "≈ 15–45 mg/dL"],
        ["Glicose", "≈ 60% da glicemia (razão LCR/sangue ≥ 0,6; < 0,4 é patológica) — colher glicemia antes ou no momento da punção"]
      ],
      nota: "Confirmar sempre os intervalos de referência do laboratório da instituição."
    }},
    { t: "Eletroencefalograma — EEG (p. 88)", itens: [
      "Cabelo lavado na véspera, seco, sem cremes, óleos, gel ou laca.",
      "Manter a medicação habitual, salvo indicação médica em contrário.",
      "Se pedido EEG com privação de sono: confirmar as horas de sono permitidas e garantir que o doente não conduz depois.",
      "Fazer refeição normal (a hipoglicemia altera o traçado).",
      "Vídeo-EEG prolongado: segurança para crises (grades almofadadas, cama baixa, oxigénio e aspiração disponíveis), registo de eventos com hora. Se houver redução da medicação antiepilética: acesso venoso permeável, medicação de resgate prescrita e acessível, acompanhar sempre ao WC/duche, ensinar o doente e a família a acionar o botão de evento."
    ]},
    { t: "Eletromiografia — EMG e estudos de condução nervosa (p. 91)", itens: [
      "Pele limpa, sem cremes nos membros a estudar; membros aquecidos (o frio altera as conduções).",
      "Informar o técnico/médico sobre anticoagulação, pacemaker/CDI e linfedema.",
      "Explicar que causa algum desconforto (choques breves e agulha).",
      "Após: vigiar pequenos hematomas nos locais de agulha."
    ]}
  ]
},
{
  id: "imagem", cap: 5, parte: "p1", icone: "🖥️",
  titulo: "Métodos de imagem em neurologia",
  pags: "111–144",
  resumo: "TC, RM e estudos vasculares: preparação, segurança e transporte do doente neurológico.",
  seccoes: [
    { t: "Quando cada exame", itens: [
      "TC cranioencefálica (TC-CE) sem contraste: primeira linha na urgência (AVC, TCE, suspeita de hemorragia) — rápida e disponível.",
      "Angio-TC / perfusão: AVC agudo candidato a trombectomia, suspeita de aneurisma ou disseção.",
      "RM: maior detalhe — AVC pequeno ou da fossa posterior, esclerose múltipla, tumores, encefalites, medula.",
      "Angiografia de subtração digital: exame invasivo (diagnóstico e tratamento endovascular)."
    ]},
    { t: "Checklist de segurança para RM", itens: [
      "Pacemaker, CDI, neuroestimulador (ex.: estimulação cerebral profunda), implante coclear, bomba implantada — confirmar compatibilidade.",
      "Clips de aneurisma, válvulas, próteses, stents — confirmar tipo e data.",
      "Corpos estranhos metálicos (sobretudo intraoculares, ex.: serralharia).",
      "Retirar pensos transdérmicos com metal, joias, piercings, aparelhos auditivos; atenção a tatuagens recentes.",
      "Equipamento: bombas infusoras, monitores e oxigénio têm de ser compatíveis com RM.",
      "Gravidez, claustrofobia (ponderar ansiolítico prescrito), capacidade de ficar imóvel.",
      "Gadolínio: função renal e reações prévias."
    ]},
    { t: "Contraste iodado (TC)", itens: [
      "Confirmar alergias e reações anteriores; função renal recente.",
      "Metformina e hidratação: seguir o protocolo da instituição.",
      "Acesso venoso calibroso e permeável, sobretudo para angio-TC."
    ]},
    { t: "Após angiografia", itens: [
      "Vigiar local de punção (femoral ou radial): hemorragia, hematoma, pulsos e perfusão distal.",
      "Repouso e posicionamento conforme o acesso e o dispositivo de encerramento usado.",
      "Vigilância neurológica: novo défice após o procedimento é emergência."
    ]}
  ]
},
// ───────────────────────────── PARTE 2 ─────────────────────────────
{
  id: "hic", cap: 6, parte: "p2", icone: "⬆️",
  titulo: "Hipertensão intracraniana",
  pags: "147–152",
  resumo: "O crânio é uma caixa fechada: quando o volume (cérebro, sangue ou LCR) aumenta, a pressão sobe e pode levar a herniação. A enfermagem tem papel decisivo na prevenção e na deteção precoce.",
  seccoes: [
    { t: "Reconhecer", itens: [
      "Cefaleia que agrava de manhã, com tosse ou esforço; vómitos; alterações visuais (visão turva, diplopia).",
      "Diminuição do nível de consciência — é o sinal mais sensível.",
      "Anisocoria (pupila dilatada do lado da lesão), parésia do VI par.",
      "Tríade de Cushing — hipertensão, bradicardia e respiração irregular — é sinal tardio de herniação."
    ]},
    { t: "Intervenções de enfermagem", itens: [
      "Cabeceira a 30° (salvo contraindicação), cabeça e pescoço alinhados, sem compressão das jugulares (fitas de tubos, colar apertado).",
      "Evitar aumentos da pressão intratorácica: obstipação/Valsalva, tosse, flexão da anca > 90°.",
      "Aspiração de secreções apenas quando necessária, breve, com pré-oxigenação.",
      "Manter normotermia, normoglicemia, oxigenação e (no doente ventilado) normocapnia, conforme alvos prescritos.",
      "Controlo da dor, agitação e crises convulsivas.",
      "Soros isotónicos; evitar soros hipotónicos (ex.: glicosado a 5% isolado), que agravam o edema cerebral. Se osmoterapia (manitol ou soro salino hipertónico): vigiar natremia, osmolalidade, diurese e balanço hídrico conforme prescrição.",
      "Agrupar cuidados com pausas; ambiente calmo.",
      "Se monitorização de PIC/derivação ventricular externa: nivelamento do transdutor e altura da drenagem conforme prescrição; registar débito e aspeto do LCR; clampar durante mobilizações conforme protocolo."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Queda da Glasgow, nova anisocoria, pupila fixa.",
      "Bradicardia + hipertensão + alteração do padrão respiratório.",
      "Postura em descerebração/decorticação."
    ]}
  ]
},
{
  id: "coma", cap: 7, parte: "p2", icone: "😶",
  titulo: "Coma e alterações do estado de consciência",
  pags: "153–176",
  resumo: "Da confusão ao coma: avaliar, estabilizar, procurar causas reversíveis e cuidar do doente que não se consegue proteger a si próprio.",
  seccoes: [
    { t: "Termos", itens: [
      "Confusão: desorientação e défice de atenção. Sonolência: acorda com estímulo verbal. Estupor: só acorda com estímulo vigoroso. Coma: não desperta.",
      "Estado vegetativo/vigília sem resposta: olhos abertos, ciclos sono-vigília, sem evidência de consciência.",
      "Síndrome de «locked-in» (encarceramento): consciente, mas só comunica por movimentos verticais dos olhos/pestanejo — não confundir com coma!"
    ]},
    { t: "Abordagem inicial", itens: [
      "Via aérea, ventilação, circulação. Glasgow ≤ 8: risco para a via aérea — chamar ajuda.",
      "Glicemia capilar imediata.",
      "Pupilas, movimentos oculares, padrão respiratório, postura motora.",
      "Na suspeita de défice nutricional/alcoolismo: administrar tiamina IV conforme prescrição. Se houver hipoglicemia, NUNCA atrasar a glicose — dar a tiamina em simultâneo ou logo a seguir.",
      "Pupilas mióticas e respiração lenta: pensar em opioides. Assimetrias apontam para lesão estrutural; quadro simétrico sugere causa tóxico-metabólica."
    ]},
    { t: "Cuidados ao doente inconsciente", itens: [
      "Posicionamento lateral de segurança se não intubado; prevenção de aspiração.",
      "Proteção ocular (lubrificação, encerramento palpebral) — risco de úlcera da córnea.",
      "Higiene oral frequente; prevenção de úlceras por pressão e de tromboembolismo.",
      "Alimentação por sonda: confirmar a posição antes de cada utilização segundo o protocolo (pH do aspirado e/ou radiografia — a auscultação não é fiável); cabeceira ≥ 30° durante e 30–60 min após.",
      "Posicionamentos que previnam contraturas; vigilância vesical e intestinal.",
      "Falar com o doente e explicar procedimentos — a audição pode estar preservada.",
      "Suspeita de morte cerebral: o diagnóstico é médico, segundo os critérios legais e da Ordem dos Médicos; manter o suporte de órgãos e a articulação com a coordenação hospitalar de doação; apoio à família."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Agravamento da Glasgow, nova assimetria pupilar ou motora.",
      "Respiração irregular, apneias.",
      "Crises convulsivas (considerar estado de mal não convulsivo se não recupera)."
    ]}
  ]
},
{
  id: "avc", cap: 8, parte: "p2", icone: "⚡",
  titulo: "Doença cerebrovascular (AVC)",
  pags: "177–186",
  resumo: "Tempo é cérebro. Reconhecer, ativar a Via Verde AVC, vigiar após trombólise/trombectomia e prevenir complicações.",
  seccoes: [
    { t: "Reconhecer (BE-FAST)", itens: [
      "Balance — desequilíbrio súbito; Eyes — perda de visão; Face — boca ao lado; Arm — falta de força num braço; Speech — dificuldade em falar; Time — registar a hora.",
      "Hora de início ou «última vez visto bem» é crucial para a decisão terapêutica.",
      "Excluir hipoglicemia (glicemia capilar) — pode simular AVC.",
      "AIT: sintomas de AVC que regridem totalmente — o risco de AVC é elevado nos dias seguintes; é urgência (avaliação no próprio dia), mesmo que o doente já esteja bem."
    ]},
    { t: "Fase aguda", itens: [
      "Ativar Via Verde AVC conforme protocolo; NIHSS (ver Escalas).",
      "Dois acessos venosos, colheitas, ECG; evitar punções arteriais e injeções IM se candidato a trombólise.",
      "Jejum absoluto (incluindo água e medicação oral) até rastreio de disfagia por enfermeiro treinado, com o instrumento do serviço (ex.: GUSS), nas primeiras horas após a admissão. Se não passar: manter jejum, pedir via alternativa para a medicação e avaliação por terapia da fala; repetir o rastreio a cada 24 h ou se houver melhoria. Registar o resultado e a consistência prescrita (ver «Disfagia e alimentação segura»).",
      "Trombólise IV (alteplase ou tenecteplase): até 4,5 h após o início/última vez visto bem; entre 4,5 e 9 h, ou AVC ao acordar/início desconhecido, só com seleção por imagem avançada. TA antes < 185/110 mmHg; durante e nas 24 h seguintes < 180/105 mmHg.",
      "Sem trombólise nem trombectomia: não baixar a TA por rotina — tratar só se > 220/120 mmHg (descida gradual) ou por outra indicação médica. Após trombectomia: manter < 180/105 mmHg, mas não descer a PAS abaixo de 140 mmHg salvo prescrição.",
      "Trombectomia: oclusão de grande vaso — até 6 h na circulação anterior e 6–24 h com seleção por imagem; oclusão basilar até 24 h. Não atrasar a trombólise à espera da trombectomia.",
      "Glicemia e temperatura: tratar hiperglicemia e febre (pioram o prognóstico)."
    ]},
    { t: "Vigilância pós-trombólise (esquema habitual)", itens: [
      "Avaliação neurológica e TA a cada 15 min nas primeiras 2 h, a cada 30 min nas 6 h seguintes e de hora a hora até às 24 h (confirmar protocolo local).",
      "Evitar SNG, algaliação e punções nas primeiras horas, salvo necessidade.",
      "Angioedema orolingual (sobretudo com IECA): vigiar lábios e língua.",
      "Não administrar antiagregantes nem anticoagulantes nas primeiras 24 h após trombólise sem indicação médica explícita (habitualmente após imagem de controlo)."
    ]},
    { t: "Prevenção de complicações", itens: [
      "Aspiração/pneumonia: rastreio de disfagia, cabeceira elevada, higiene oral.",
      "Ombro doloroso: apoiar o membro superior parético, não puxar pelo braço.",
      "Quedas (Morse) e úlceras por pressão (Braden): avaliar na admissão e reavaliar conforme protocolo. TVP: profilaxia conforme prescrição; as meias de compressão elástica graduada não estão recomendadas no AVC — pode ser prescrita compressão pneumática intermitente no doente imobilizado. Bexiga: evitar algaliação por rotina, vigiar retenção (resíduo pós-miccional) e retirar a algália o mais cedo possível. Intestino: registo diário de dejeções.",
      "Afasia: avaliar compreensão e expressão em separado; frases curtas, uma pergunta de cada vez, perguntas de sim/não (confirmar se o «sim/não» é fiável), gestos, imagens ou quadro de comunicação, dar tempo. Não falar mais alto nem completar as frases pelo doente; reduzir o ruído. Ensinar a família as mesmas estratégias; pedir avaliação por terapia da fala.",
      "Negligência: abordar inicialmente pelo lado preservado e estimular progressivamente o lado negligenciado.",
      "Humor: depressão e ansiedade pós-AVC são frequentes — perguntar diretamente pelo humor, observar apatia, choro, recusa em participar; comunicar ao médico e envolver a família. Labilidade emocional (choro ou riso desadequados e incontroláveis) não é o mesmo que depressão.",
      "Ensino: fatores de risco (TA, fibrilhação auricular, diabetes, tabaco, colesterol), adesão a antiagregação/anticoagulação."
    ]},
    { t: "Preparação para a alta e ensinos", itens: [
      "Ensinar doente e cuidador a reconhecer um novo AVC (BE-FAST) e a ligar 112 de imediato, registando a hora.",
      "Medicação: para que serve cada fármaco e o horário; não suspender antiagregante/anticoagulante sem indicação médica; sinais de hemorragia a vigiar.",
      "Alimentação: consistências e técnica segura definidas na avaliação da deglutição — o cuidador treina sob supervisão antes da alta.",
      "Mobilidade: treinar com o cuidador transferências, posicionamentos, proteção do ombro parético e uso de produtos de apoio.",
      "Domicílio: retirar tapetes, luz de presença à noite, barras de apoio; avaliar cama articulada, cadeira de rodas, cadeira sanitária.",
      "Articular atempadamente com serviço social, enfermagem de reabilitação e centro de saúde (carta de alta de enfermagem); referenciar para a RNCCI quando indicado.",
      "Condução: não conduzir até autorização médica.",
      "Humor, sexualidade e regresso ao trabalho: abordar com abertura e sinalizar à equipa."
    ]},
    { t: "AVC hemorrágico e hemorragia subaracnoideia", itens: [
      "Hemorragia intracerebral: baixar a TA cedo e de forma suave até ao alvo prescrito (habitualmente PAS ≈ 140 mmHg; evitar < 130 mmHg e grandes oscilações); reverter a anticoagulação o mais cedo possível conforme protocolo; controlar glicemia e temperatura; vigiar agravamento (expansão do hematoma, sobretudo nas primeiras 24 h).",
      "HSA: cefaleia súbita e intensa («a pior da vida»), pode ter rigidez da nuca e perda de consciência.",
      "Na HSA: vigiar vasospasmo/isquemia tardia (novo défice ou sonolência, sobretudo entre o 3.º e o 14.º dia), sódio (hiponatremia frequente) e hidrocefalia. Manter euvolemia e balanço hídrico rigoroso — não fazer restrição hídrica para corrigir a hiponatremia.",
      "Nimodipina conforme prescrição — vigiar hipotensão."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Durante/após trombólise: cefaleia intensa, vómitos, agravamento neurológico, subida súbita da TA, edema da língua/lábios → chamar o médico de imediato; se a alteplase ainda estiver em perfusão, suspendê-la (a tenecteplase é bólus único). Preparar TC urgente.",
      "Qualquer agravamento neurológico (ex.: aumento do NIHSS ≥ 2 pontos, queda da consciência, novo défice) → comunicar de imediato; não esperar por ≥ 4 pontos.",
      "Sinais de aspiração: tosse ao comer, voz molhada, febre, dessaturação."
    ]}
  ]
},
{
  id: "tce", cap: 9, parte: "p2", icone: "🤕",
  titulo: "Traumatismo cranioencefálico (TCE)",
  pags: "187–196",
  resumo: "Classificar a gravidade, detetar a deterioração precoce (hematomas) e proteger a coluna cervical.",
  seccoes: [
    { t: "Avaliação", itens: [
      "Gravidade pela Glasgow: 13–15 ligeiro, 9–12 moderado, ≤ 8 grave.",
      "Proteger a coluna cervical até exclusão de lesão.",
      "Mecanismo, perda de consciência, amnésia, vómitos, crises, uso de anticoagulantes/antiagregantes e álcool.",
      "Sinais de fratura da base do crânio: equimose periorbitária («olhos de guaxinim»), equimose retroauricular (sinal de Battle), saída de LCR pelo nariz ou ouvido."
    ]},
    { t: "Intervenções", itens: [
      "Vigilância neurológica seriada (Glasgow, pupilas, força) com frequência prescrita.",
      "Suspeita de fratura da base: não tamponar nariz/ouvido, não introduzir sonda pelo nariz, desencorajar assoar.",
      "Medidas de hipertensão intracraniana quando indicadas (ver tema próprio).",
      "Dor, náuseas e agitação: tratar e reavaliar — a agitação pode ser sinal de agravamento.",
      "Ensino na alta (TCE ligeiro): voltar se cefaleia progressiva, vómitos repetidos, sonolência, confusão, fraqueza, convulsão; presença de um adulto nas primeiras 24 h."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Intervalo lúcido seguido de deterioração (típico do hematoma epidural).",
      "Idoso ou anticoagulado com confusão ou cefaleia dias/semanas após queda (hematoma subdural).",
      "Queda da Glasgow, anisocoria, novo défice."
    ]}
  ]
},
{
  id: "infecoes", cap: 10, parte: "p2", icone: "🦠",
  titulo: "Doenças infeciosas do sistema nervoso",
  pags: "197–230",
  resumo: "Meningites, encefalites, abcessos e infeções oportunistas: reconhecer cedo, não atrasar o tratamento e proteger os contactos.",
  seccoes: [
    { t: "Meningite", itens: [
      "Febre, cefaleia, rigidez da nuca, fotofobia, vómitos, alteração da consciência (a tríade completa nem sempre está presente; idosos podem ter só confusão).",
      "Exantema petequial/purpúrico que não desaparece à pressão: suspeitar de meningococo — emergência.",
      "O antibiótico não deve ser atrasado à espera de exames (TC, punção): colher hemoculturas e administrar o mais rápido possível (idealmente na 1.ª hora) conforme prescrição. Se prescrita dexametasona, dar imediatamente antes ou com a 1.ª dose de antibiótico.",
      "Isolamento de gotículas na suspeita de meningite bacteriana (até 24 h de antibioterapia eficaz, conforme a CCI).",
      "Contactos próximos de doença meningocócica: articulação com a saúde pública para quimioprofilaxia."
    ]},
    { t: "Encefalite", itens: [
      "Febre com alteração do comportamento, confusão, crises, défices focais.",
      "Encefalite herpética: tratamento antiviral precoce conforme prescrição; vigiar função renal e hidratação.",
      "Encefalites autoimunes podem simular quadros psiquiátricos."
    ]},
    { t: "Outras infeções", itens: [
      "Abcesso cerebral: febre, cefaleia e défice focal; pode haver hipertensão intracraniana.",
      "Doente imunodeprimido (VIH, quimioterapia, transplante): infeções oportunistas (toxoplasmose, criptococo, LMP), quadros atípicos.",
      "Tuberculose do SNC, neurossífilis, neurocisticercose e infeções por parasitas: evolução mais arrastada."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Púrpura, hipotensão, alteração rápida da consciência.",
      "Crises convulsivas, sinais de hipertensão intracraniana."
    ]}
  ]
},
{
  id: "epilepsia", cap: 11, parte: "p2", icone: "〰️",
  titulo: "Epilepsia",
  pags: "231–268",
  resumo: "Observar e registar bem a crise, garantir segurança, reconhecer o estado de mal e promover adesão terapêutica.",
  seccoes: [
    { t: "Conceitos", itens: [
      "Crise epilética: evento transitório por atividade neuronal anormal. Epilepsia: tendência para crises recorrentes não provocadas.",
      "Crises focais (com ou sem perda de consciência) vs generalizadas (tónico-clónicas, ausências, mioclónicas, atónicas).",
      "Crises provocadas: hipoglicemia, hiponatremia, abstinência alcoólica, privação de sono, febre, fármacos."
    ]},
    { t: "Durante a crise", itens: [
      "Registar a hora de início. Ficar com o doente e pedir ajuda.",
      "Proteger a cabeça, afastar objetos, não conter os movimentos, não colocar nada na boca.",
      "Após os movimentos: posição lateral de segurança, aspirar se necessário, oxigénio, SpO2, glicemia capilar.",
      "Observar e registar: o que fazia, primeiros sinais, desvio dos olhos/cabeça, lado afetado, automatismos, duração, incontinência, mordedura lateral da língua."
    ]},
    { t: "Após a crise (pós-ictal)", itens: [
      "Confusão, sonolência, cefaleia; pode haver défice transitório (parésia de Todd).",
      "Vigilância neurológica até recuperação do estado prévio.",
      "Nada por boca até recuperar totalmente a consciência e a deglutição.",
      "Segurança: grades, cama baixa, acesso venoso, oxigénio e aspiração disponíveis."
    ]},
    { t: "Ensino e adesão", itens: [
      "Tomar os antiepiléticos a horas certas, não suspender bruscamente.",
      "Evitar privação de sono e excesso de álcool.",
      "Interações medicamentosas e contraceção/gravidez (alguns fármacos têm risco fetal — planear com o médico).",
      "Condução, banhos (preferir duche), alturas, natação acompanhada.",
      "Ensinar a família a atuar numa crise e quando chamar o 112.",
      "Se houver medicação de resgate prescrita (ex.: benzodiazepina bucal ou retal): treinar o cuidador antes da alta — quando e como administrar, e ligar 112 se a crise não parar ou se repetir.",
      "Diário de crises (data, hora, duração, desencadeante) para levar às consultas."
    ]},
    { t: "Sinais de alarme — estado de mal epilético", alarme: true, itens: [
      "Crise tónico-clónica ≥ 5 min (crise focal com alteração da consciência ≥ 10 min), ou crises repetidas sem recuperação do estado de consciência entre elas — é estado de mal: iniciar tratamento já.",
      "Etapas (conforme protocolo): 0–5 min estabilizar (via aérea, O2, glicemia, acesso venoso); 5–20 min benzodiazepina, que pode ser repetida uma vez; 20–40 min antiepilético IV de 2.ª linha; se persistir, estado de mal refratário → anestesia e UCI. Registar a hora de cada fármaco.",
      "Doente que não recupera a consciência após a crise: pensar em estado de mal não convulsivo (pedir EEG)."
    ]}
  ]
},
{
  id: "dor", cap: 12, parte: "p2", icone: "🔥",
  titulo: "Dor — fisiopatologia e avaliação",
  pags: "269–288",
  resumo: "Distinguir dor nociceptiva de neuropática para orientar a avaliação e a gestão. A dor é o 5.º sinal vital.",
  seccoes: [
    { t: "Tipos de dor", itens: [
      "Nociceptiva: lesão de tecidos (ex.: pós-operatório) — dor bem localizada, tipo moinha, pontada.",
      "Neuropática: lesão do sistema nervoso — queimadura, choque elétrico, formigueiro, alodinia (dor com um estímulo normalmente indolor como o toque da roupa).",
      "Exemplos neuropáticos: neuropatia diabética, nevralgia do trigémio, nevralgia pós-herpética, dor central pós-AVC, dor da lesão medular.",
      "Dor crónica tem componentes emocionais e sociais — abordagem multidimensional."
    ]},
    { t: "Avaliação", itens: [
      "Avaliar e registar a dor como 5.º sinal vital: na admissão, pelo menos uma vez por turno e após cada intervenção (reavaliar no tempo adequado à via de administração). Usar sempre a mesma escala no mesmo doente.",
      "Escala numérica 0–10 ou visual analógica no doente comunicativo.",
      "Doente que não consegue autoavaliar (demência, afasia, alteração da consciência): escala comportamental, ex.: PAINAD — 5 itens (respiração, vocalização, expressão facial, linguagem corporal, consolabilidade), cada um 0–2, total 0–10. Perguntar à família como o doente costuma mostrar dor.",
      "Questionário DN4 para rastreio de dor neuropática.",
      "Caracterizar: localização, irradiação, intensidade, tipo, fatores de agravamento/alívio, impacto no sono e atividades."
    ]},
    { t: "Intervenções", itens: [
      "Analgesia multimodal conforme prescrição; reavaliar após cada intervenção.",
      "Fármacos para dor neuropática (antiepiléticos, antidepressivos): vigiar sonolência, tonturas, quedas, hipotensão.",
      "Medidas não farmacológicas: posicionamento, calor/frio (cuidado com áreas de sensibilidade diminuída), relaxamento.",
      "Nas áreas com sensibilidade alterada: risco de queimaduras e feridas — inspeção da pele."
    ]}
  ]
},
{
  id: "cefaleias", cap: 13, parte: "p2", icone: "🤯",
  titulo: "Cefaleias",
  pags: "289–308",
  resumo: "A maioria é primária (enxaqueca, tensão), mas é essencial reconhecer os sinais de alarme de uma cefaleia secundária.",
  seccoes: [
    { t: "Tipos principais", itens: [
      "Enxaqueca: unilateral, pulsátil, moderada a intensa, com náuseas e/ou foto/fonofobia; pode ter aura (visual, sensitiva).",
      "Cefaleia de tensão: bilateral, em aperto, ligeira a moderada, sem náuseas importantes.",
      "Cefaleia em salvas: dor orbitária muito intensa, com lacrimejo/rinorreia do mesmo lado, agitação; crises diárias durante semanas.",
      "Cefaleia por uso excessivo de analgésicos: tomar analgésicos muitos dias por mês pode perpetuar a dor."
    ]},
    { t: "Intervenções", itens: [
      "Ambiente calmo, escuro e silencioso; hidratação.",
      "Analgesia/terapêutica de crise conforme prescrição o mais cedo possível na crise.",
      "Cefaleia em salvas: oxigénio a alto débito por máscara se prescrito.",
      "Ensino: diário de cefaleias, identificação de desencadeantes, limitar dias de analgésico, adesão à profilaxia."
    ]},
    { t: "Sinais de alarme (cefaleia secundária)", alarme: true, itens: [
      "Início súbito, intensidade máxima em segundos/minutos («em trovão»).",
      "Febre, rigidez da nuca, exantema.",
      "Défice neurológico, convulsão, alteração da consciência ou do comportamento.",
      "Cefaleia nova após os 50 anos (pensar em arterite de células gigantes: dor na têmpora, claudicação da mandíbula, alterações visuais — risco de cegueira: comunicar no próprio dia).",
      "Mudança de padrão, agravamento progressivo, despertar noturno, agravamento com tosse/esforço ou com a posição.",
      "Imunossupressão, cancro, gravidez/puerpério, anticoagulação, traumatismo recente."
    ]}
  ]
},
{
  id: "movimento", cap: 14, parte: "p2", icone: "🚶",
  titulo: "Doenças do movimento",
  pags: "309–336",
  resumo: "Doenças neurológicas que diminuem ou tornam mais lentos os movimentos voluntários (hipocinéticas, como o Parkinson) ou que provocam movimentos involuntários a mais (hipercinéticas: tremores, distonias, coreias, mioclonias, tiques). Para a enfermagem: horários da medicação, segurança, deglutição, fármacos a evitar e cuidados com toxina botulínica e estimulação cerebral profunda.",
  seccoes: [
    { t: "Classificação — reconhecer o movimento", tabela: {
      cab: ["Tipo", "Como se reconhece", "Exemplos"],
      lin: [
        ["Parkinsonismo (hipocinético)", "Lentidão, rigidez, tremor de repouso, marcha a pequenos passos, instabilidade", "Doença de Parkinson, parkinsonismos atípicos, parkinsonismo induzido por fármacos ou vascular"],
        ["Tremor", "Oscilação rítmica de uma parte do corpo", "Tremor essencial, tremor parkinsónico, tremor fisiológico exacerbado"],
        ["Distonia", "Contrações mantidas que causam posturas anómalas ou torções repetidas, muitas vezes com padrão fixo", "Distonia cervical, blefaroespasmo, cãibra do escrivão"],
        ["Coreia", "Movimentos rápidos, irregulares e imprevisíveis, que «fluem» de uma parte do corpo para outra", "Doença de Huntington, coreia vascular, coreia por fármacos"],
        ["Mioclonia", "Abalo muscular súbito e breve, como um choque", "Metabólica, por fármacos, pós-anóxica, epilética, DCJ"],
        ["Tique", "Movimento ou som repetitivo, precedido de uma vontade que se consegue suprimir por pouco tempo", "Síndrome de Tourette"],
        ["Ataxia", "Descoordenação e desequilíbrio (cerebelo)", "Ver «Ataxias cerebelosas e doença de Machado-Joseph»"]
      ],
      nota: "Descrever o que se observa (que parte do corpo, em repouso ou em ação, ritmo, o que agrava e alivia) é mais útil do que tentar rotular. Um vídeo curto, se o protocolo o permitir, ajuda muito o médico."
    }},
    { t: "Doença de Parkinson", itens: [
      "Sinais: tremor de repouso, rigidez, lentificação (bradicinesia), instabilidade postural; marcha a pequenos passos, «congelamento».",
      "Sintomas não motores: obstipação, hipotensão ortostática, alterações do sono, depressão, alucinações, défice cognitivo.",
      "Flutuações motoras: períodos «on» (bom efeito) e «off» (rigidez, bloqueio); discinesias (movimentos involuntários) no pico da dose."
    ]},
    { t: "Intervenções de enfermagem", itens: [
      "Medicação dopaminérgica a horas exatas — atrasos causam bloqueio, disfagia e quedas. Respeitar o horário do doente, não o da enfermaria.",
      "Na admissão, registar o horário real das tomas em casa e todos os antiparkinsónicos (incluindo formas de libertação prolongada e adesivos); garantir que a medicação está disponível no próprio turno.",
      "Refeições ricas em proteína podem reduzir a absorção da levodopa — ajustar conforme orientação.",
      "Se jejum ou incapacidade de deglutir: contactar médico de imediato para alternativa (não suspender).",
      "Rastreio de disfagia; prevenção de quedas; levante faseado (hipotensão ortostática).",
      "Doentes com estimulação cerebral profunda: trazer o comando; precauções com RM e bisturi elétrico.",
      "Perfusões contínuas (levodopa em gel intestinal por PEG-J, apomorfina ou levodopa subcutânea): não interromper sem indicação médica; conhecer o dispositivo e o contacto da equipa de referência."
    ]},
    { t: "Fármacos a evitar no parkinsonismo", tipo: "precaucao", itens: [
      "Antipsicóticos típicos (ex.: haloperidol) e também a maioria dos atípicos (ex.: risperidona, olanzapina), e antieméticos antidopaminérgicos (ex.: metoclopramida) — agravam muito os sintomas; na demência com corpos de Lewy podem causar reações graves.",
      "Se necessário tratar agitação/psicose ou náuseas: pedir alternativa ao médico (habitualmente quetiapina ou clozapina; domperidona como antiemético).",
      "Suspensão abrupta da medicação: risco de síndrome de hiperpirexia-parkinsonismo (febre, rigidez, alteração da consciência) — emergência."
    ]},
    { t: "Parkinsonismos atípicos e parkinsonismo secundário", itens: [
      "Atrofia multissistémica e paralisia supranuclear progressiva: parecem Parkinson, mas com quedas precoces, alterações da TA e da bexiga, dos movimentos oculares e resposta fraca à levodopa — ver «Parkinsonismos atípicos (PSP, AMS, DCB)».",
      "Parkinsonismo induzido por fármacos (antipsicóticos, metoclopramida, sulpirida e levossulpirida, flunarizina e cinarizina, valproato): habitualmente simétrico; pode demorar semanas a meses (por vezes perto de um ano) a melhorar após suspender o fármaco.",
      "Parkinsonismo vascular: predomina nas pernas («parkinsonismo da metade inferior»), em doentes com doença vascular cerebral."
    ]},
    { t: "Tremores", itens: [
      "Tipos: de repouso (típico do Parkinson, diminui com o movimento); postural (braços estendidos); de ação/cinético (ao escrever, beber); de intenção (aumenta ao aproximar do alvo — cerebeloso).",
      "Tremor essencial: o tremor mais frequente; de ação e postural, bilateral, nas mãos, por vezes na cabeça («sim-sim» ou «não-não») e na voz; muitas vezes familiar; pode aliviar com pequenas quantidades de álcool.",
      "Tremor fisiológico exacerbado: ansiedade, cafeína, privação de sono, hipertiroidismo, hipoglicemia, abstinência alcoólica, febre, fármacos (ex.: lítio, valproato, broncodilatadores, corticoides, alguns antidepressivos).",
      "Tratamento do tremor essencial: fármacos conforme prescrição; nos casos incapacitantes, estimulação cerebral profunda ou talamotomia por ultrassons focados guiados por RM.",
      "Enfermagem: avaliar o impacto nas atividades (comer, beber, escrever, vestir); produtos de apoio (talheres com peso, copos com tampa e palhinha, roupa sem botões); um tremor novo ou agravado no internamento → procurar causa (glicemia, abstinência, fármacos novos) e comunicar."
    ]},
    { t: "Distonias", itens: [
      "Contrações involuntárias que causam posturas anómalas ou movimentos repetitivos; muitas vezes pioram com o stress e com tarefas específicas e aliviam com um «truque sensorial» (ex.: tocar levemente no queixo).",
      "Distonia cervical (a mais frequente): contrações dos músculos do pescoço com rotação ou inclinação da cabeça, muitas vezes com dor.",
      "Blefaroespasmo: encerramento involuntário intermitente ou persistente das pálpebras — pode causar «cegueira funcional» apesar de a visão estar normal.",
      "Espasmo hemifacial: contrações de um lado da face, que começam habitualmente na pálpebra; geralmente por compressão do nervo facial por um vaso. É acompanhado na mesma consulta e também tratado com toxina botulínica.",
      "Distonia dos membros e distonias de tarefa: postura anómala de um membro ao realizar uma tarefa específica (ex.: cãibra do escrivão, distonia do músico).",
      "Distonia segmentar ou generalizada: atinge várias regiões; algumas formas são genéticas e começam cedo.",
      "Distonia aguda por fármacos: horas a dias após antipsicóticos ou metoclopramida — desvio dos olhos para cima (crise oculógira), torcicolo, contração da mandíbula ou da língua."
    ]},
    { t: "Toxina botulínica — cuidados", itens: [
      "Tratamento de primeira linha nas distonias focais e no espasmo hemifacial; injeções habitualmente repetidas a cada 3 meses, aproximadamente; não antecipar sem indicação médica (intervalos curtos podem levar a perda de eficácia).",
      "O efeito começa ao fim de alguns dias e atinge o máximo em cerca de 2 semanas.",
      "Antes: perguntar por doenças neuromusculares (ex.: miastenia, Lambert-Eaton, ELA), disfagia ou dificuldade respiratória prévias, aminoglicosídeos ou outros fármacos que potenciam o bloqueio neuromuscular, anticoagulação, gravidez ou amamentação, infeção no local, data da injeção anterior.",
      "Efeitos esperados e transitórios, conforme a zona: ptose ou olho seco (blefaroespasmo), dificuldade em engolir ou fraqueza do pescoço (distonia cervical), fraqueza local.",
      "Ensinar a registar o efeito e a sua duração para a consulta seguinte; na distonia cervical, alimentos moles e porções pequenas se houver disfagia ligeira."
    ]},
    { t: "Coreias", itens: [
      "Doença de Huntington: coreia com alterações cognitivas e psiquiátricas, hereditária — ver «Doença de Huntington».",
      "Outras causas no adulto: AVC dos núcleos da base (pode causar hemibalismo — movimentos amplos e violentos de um lado do corpo), hiperglicemia não cetótica grave, fármacos (sobretudo discinesias da levodopa; também antiepiléticos e estimulantes), lúpus e síndrome antifosfolipídica, gravidez, hipertiroidismo.",
      "Enfermagem: proteger de lesões (proteções almofadadas, cadeira estável, cama baixa), evitar contenção, reforço calórico (gasto energético aumentado), glicemia capilar na coreia de início súbito."
    ]},
    { t: "Mioclonias", itens: [
      "Fisiológicas: soluços, abalos ao adormecer.",
      "Metabólicas: insuficiência renal ou hepática, hiponatremia, hipoglicemia, hipercapnia.",
      "Por fármacos: opioides (sobretudo com insuficiência renal), gabapentinoides, alguns antibióticos (ex.: cefalosporinas, carbapenemos), lítio, antidepressivos; associadas a agitação, febre e diarreia, pensar em síndrome serotoninérgica.",
      "Pós-anóxicas (após paragem cardiorrespiratória) e epiléticas; rapidamente progressivas com demência — pensar em DCJ.",
      "Mioclonias subtis (face, pálpebras, dedos) num doente confuso ou em coma podem ser estado de mal não convulsivo — comunicar de imediato (pode ser necessário EEG).",
      "Enfermagem: registar quando surgem (repouso, ação, estímulo, sono), segurança (quedas, objetos quentes), rever com o médico/farmacêutico fármacos recentes e a função renal."
    ]},
    { t: "Tiques e síndrome de Tourette", itens: [
      "Tiques motores (pestanejar, encolher os ombros, caretas) e vocais (pigarrear, fungar, palavras); simples ou complexos.",
      "Começam habitualmente na infância e muitas vezes atenuam na idade adulta, mas podem persistir; pioram com stress, cansaço e excitação.",
      "Antes do tique há uma sensação de urgência; o doente consegue suprimi-lo por pouco tempo, à custa de desconforto.",
      "Tourette: vários tiques motores e pelo menos um vocal durante mais de um ano; frequentemente com perturbação de hiperatividade e défice de atenção, ou perturbação obsessivo-compulsiva.",
      "Tratamento: intervenção comportamental (ex.: CBIT) e, se necessário, fármacos ou toxina botulínica.",
      "Enfermagem: não pedir para «parar» nem chamar a atenção para os tiques; ambiente sem julgamento; explicar aos outros doentes se for útil, com consentimento."
    ]},
    { t: "Síndrome das pernas inquietas", itens: [
      "Necessidade imperiosa de mexer as pernas, com sensação desagradável, em repouso e ao fim do dia, que alivia com o movimento; perturba o sono.",
      "Associada a ferropenia, insuficiência renal, gravidez e neuropatia; agravada por antidepressivos, anti-histamínicos sedativos e antieméticos antidopaminérgicos.",
      "Enfermagem: registar a interferência no sono; confirmar se foi pedida ferritina; rever fármacos agravantes; com levodopa ou agonistas dopaminérgicos, comunicar sintomas mais cedo no dia ou a alastrar a outras partes do corpo (agravamento pelo tratamento).",
      "Ver também «Perturbações do sono»."
    ]},
    { t: "Estimulação cerebral profunda (ECP)", itens: [
      "Elétrodos no cérebro ligados a um neuroestimulador sob a pele do tórax; usada no Parkinson, tremor essencial e distonias selecionadas.",
      "Na admissão: registar modelo do sistema, se é recarregável (trazer o carregador e manter o carregamento durante o internamento), o comando do doente e o contacto da equipa de ECP; trazer o cartão do dispositivo.",
      "Diatermia (ondas curtas, micro-ondas ou ultrassons terapêuticos) contraindicada em qualquer parte do corpo, mesmo com o estimulador desligado — risco de lesão grave ou morte. Estimulação magnética transcraniana também contraindicada. RM só segundo as condições do fabricante e com a equipa de ECP. Bisturi elétrico: o monopolar exige as precauções do fabricante. Avisar antes de qualquer cirurgia, exame ou fisioterapia.",
      "Não desligar nem reprogramar sem orientação; se o estimulador parar (bateria esgotada, avaria), os sintomas podem reaparecer de forma súbita e grave.",
      "Vigiar a ferida e o trajeto do cabo (rubor, extrusão, dor), alterações do humor e do comportamento após ajustes."
    ]},
    { t: "Doenças do movimento funcionais", itens: [
      "Tremores, distonias, abalos ou alterações da marcha reais e incapacitantes, causados por uma alteração do funcionamento do sistema nervoso e não por lesão estrutural.",
      "Sinais típicos: variam com a atenção, diminuem com a distração, mudam de frequência ao acompanhar um ritmo com o outro membro.",
      "Não são «fingidos»: o doente não os controla. Tratamento com fisioterapia especializada e apoio psicológico.",
      "Enfermagem: abordagem sem julgamento; não comentar «é psicológico»; usar a mesma linguagem da equipa médica."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Parkinson sem medicação (jejum, disfagia, medicação em falta) ou suspensão abrupta: rigidez, febre e alteração da consciência — síndrome de hiperpirexia-parkinsonismo, emergência.",
      "Febre, rigidez, alteração da consciência e instabilidade autonómica após antipsicóticos ou outros bloqueadores da dopamina (ex.: metoclopramida, sulpirida): síndrome neuroléptica maligna — emergência.",
      "Distonia aguda por fármacos (crise oculógira, torcicolo, contração da mandíbula ou da língua): comunicar de imediato — reverte habitualmente em minutos com anticolinérgico (ex.: biperideno) IV/IM conforme prescrição; não repetir o fármaco causal; a contração da laringe com estridor é rara mas ameaça a via aérea.",
      "Distonia generalizada intensa e contínua, com dor, febre, taquicardia ou urina escura (estado distónico — risco de rabdomiólise e insuficiência respiratória): emergência.",
      "Agitação, mioclonias, tremor, febre, sudorese e diarreia após fármacos serotoninérgicos: síndrome serotoninérgica.",
      "Após toxina botulínica: dificuldade em engolir ou em respirar, voz fraca ou fraqueza generalizada — possível disseminação da toxina, comunicar de imediato.",
      "Estimulação cerebral profunda: agravamento súbito dos sintomas (estimulador parado) ou sinais de infeção da ferida."
    ]}
  ]
},

{
  id: "demencias", cap: 15, parte: "p2", icone: "🧩",
  titulo: "Demências",
  pags: "337–354",
  resumo: "Distinguir demência de delirium, procurar causas tratáveis e adaptar a comunicação e o ambiente.",
  seccoes: [
    { t: "Principais tipos", itens: [
      "Doença de Alzheimer: perda de memória recente progressiva, depois linguagem, orientação e funções executivas.",
      "Demência vascular: evolução em degraus, associada a AVC e fatores de risco vasculares.",
      "Demência com corpos de Lewy: flutuações, alucinações visuais, parkinsonismo — sensibilidade grave a antipsicóticos.",
      "Demência frontotemporal: alterações de comportamento/personalidade ou de linguagem, muitas vezes antes dos 65 anos.",
      "Causas potencialmente tratáveis: défice de B12, hipotiroidismo, depressão, hidrocefalia de pressão normal (alteração da marcha + incontinência + défice cognitivo), fármacos."
    ]},
    { t: "Demência vs delirium", tabela: {
      cab: ["", "Delirium", "Demência"],
      lin: [
        ["Início", "Agudo (horas/dias)", "Insidioso (meses/anos)"],
        ["Curso", "Flutuante", "Progressivo"],
        ["Atenção", "Muito alterada", "Preservada nas fases iniciais"],
        ["Consciência", "Alterada", "Normal até fases avançadas"],
        ["Reversível", "Geralmente, se tratada a causa", "Habitualmente não"]
      ],
      nota: "O delirium é frequentíssimo em doentes com demência internados — vigiar alterações agudas da atenção e do comportamento e comunicar ao médico."
    }},
    { t: "Intervenções", itens: [
      "Comunicação: chamar pelo nome, frases curtas, uma instrução de cada vez, tom calmo, contacto visual, não discutir.",
      "Ambiente: relógio e calendário visíveis, iluminação adequada, óculos e prótese auditiva, objetos familiares, rotinas.",
      "Sono: promover atividade diurna, reduzir ruído e luz noturna.",
      "Comportamentos (agitação, deambulação): procurar primeiro causas — dor (avaliar com PAINAD), retenção urinária, obstipação, fome, sede, infeção, fármacos, ruído. Contenção física só como último recurso, segundo a Orientação DGS 021/2011 e o protocolo do hospital (ver «Segurança: quedas, úlceras por pressão e contenção»).",
      "Apoio e ensino ao cuidador; articulação com serviço social."
    ]}
  ]
},
{
  id: "desmielinizantes", cap: 16, parte: "p2", icone: "🔆",
  titulo: "Esclerose múltipla, neuromielite ótica e ADEM",
  pags: "355–362",
  resumo: "Doenças inflamatórias e desmielinizantes do SNC — esclerose múltipla, neuromielite ótica, doença anti-MOG (MOGAD) e ADEM: reconhecer surtos, cuidar durante pulsos de corticoide e acompanhar terapêuticas modificadoras.",
  seccoes: [
    { t: "Esclerose múltipla (EM)", itens: [
      "Mais frequente em adultos jovens, sobretudo mulheres.",
      "Surtos: sintomas novos ou agravados durante > 24 h — nevrite ótica (dor ao mover o olho, perda de visão), alterações sensitivas, fraqueza, diplopia, ataxia, alterações vesicais.",
      "Fadiga, alterações cognitivas, depressão e espasticidade são muito frequentes.",
      "Fenómeno de Uhthoff: o calor (febre, banho quente, exercício) agrava temporariamente sintomas antigos.",
      "Pseudo-surto: agravamento por infeção (sobretudo urinária) ou febre — excluir antes de tratar como surto.",
      "Ensino: gerir a fadiga (planear o dia com pausas, tarefas exigentes nas horas de mais energia, evitar calor excessivo) e reconhecer sinais de infeção urinária, causa frequente de pseudo-surto."
    ]},
    { t: "Neuromielite ótica (NMO) e ADEM", itens: [
      "NMO: nevrites óticas graves e mielites extensas; soluços ou vómitos incoercíveis podem ser um sintoma (área postrema). Anticorpos anti-aquaporina-4.",
      "ADEM: encefalomielite aguda, habitualmente monofásica, após infeção ou vacinação; mais comum em crianças mas também ocorre no adulto."
    ]},
    { t: "Doença associada a anticorpos anti-MOG (MOGAD)", itens: [
      "Doença inflamatória do SNC associada a anticorpos contra a MOG (glicoproteína da mielina do oligodendrócito); distinta da EM e da NMO com anti-aquaporina-4. Afeta crianças e adultos, homens e mulheres de forma semelhante.",
      "Nevrite ótica: a forma mais frequente no adulto; muitas vezes bilateral, com dor ao mover os olhos e edema marcado do disco ótico; perda de visão por vezes grave, mas habitualmente com boa recuperação.",
      "Mielite: frequentemente extensa e na porção final da medula (cone medular) — retenção urinária, obstipação e disfunção sexual são muito frequentes e podem persistir.",
      "Outras formas: quadro tipo ADEM (mais em crianças), lesões do tronco cerebral, encefalite cortical com crises epiléticas e cefaleia.",
      "Evolução: ataque único ou doença com recaídas (cerca de metade dos doentes recai); as recaídas são mais prováveis quando os corticoides são reduzidos depressa.",
      "Diagnóstico: anticorpos anti-MOG no sangue (teste em células; um resultado positivo baixo só conta com achados clínicos ou de RM de apoio), RM do cérebro e da medula, avaliação oftalmológica, LCR; segue critérios internacionais (2023).",
      "Tratamento do surto: corticoides IV em dose alta, depois corticoide oral com redução lenta conforme prescrição; plasmaférese ou imunoglobulina nos casos graves.",
      "Prevenção de recaídas (quando indicada): imunoglobulina periódica, azatioprina, micofenolato, rituximab ou tocilizumab, conforme prescrição. Os fármacos modificadores da EM não mostraram reduzir as recaídas nesta doença — o diagnóstico correto muda o tratamento.",
      "Enfermagem: avaliação seriada da acuidade visual e da dor ocular; vigiar retenção urinária (resíduo pós-miccional) e obstipação; precauções para crises na forma cortical; ensino para cumprir o desmame lento do corticoide e reconhecer uma recaída (visão, força, sensibilidade, bexiga) e contactar logo a equipa — o tratamento precoce associa-se a melhor recuperação visual."
    ]},
    { t: "Pulsos de corticoide IV — cuidados", itens: [
      "Vigiar glicemia (mesmo em não diabéticos), TA, sono, humor/agitação, sabor metálico, dor epigástrica.",
      "Proteção gástrica e outras medidas conforme prescrição; despiste de infeção antes de iniciar.",
      "Plasmaférese em surtos graves sem resposta: cuidados com acesso venoso central, hipocalcemia, hipotensão."
    ]},
    { t: "Terapêuticas modificadoras da doença", itens: [
      "Ensinar a autoadministração (injetáveis), gestão de reações no local e sintomas pseudogripais.",
      "Vigiar infeções; alguns fármacos (ex.: natalizumab) exigem vigilância de leucoencefalopatia multifocal progressiva (LMP).",
      "Planeamento de gravidez com a equipa médica.",
      "Bexiga neurogénica: ensino de esvaziamento, cateterismo intermitente se indicado."
    ]}
  ]
},
{
  id: "sono", cap: 17, parte: "p2", icone: "🌙",
  titulo: "Perturbações do sono",
  pags: "363–372",
  resumo: "Insónia, apneia do sono, narcolepsia, pernas inquietas e parassónias: impacto no doente neurológico e cuidados no internamento.",
  seccoes: [
    { t: "Principais perturbações", itens: [
      "Insónia: dificuldade em iniciar/manter o sono — primeira abordagem é a higiene do sono e terapia comportamental.",
      "Síndrome de apneia obstrutiva do sono: ressonar, pausas respiratórias, sonolência diurna; aumenta risco vascular (AVC).",
      "Narcolepsia: sonolência diurna excessiva, por vezes cataplexia (perda súbita de tónus com emoções).",
      "Síndrome das pernas inquietas: necessidade de mexer as pernas ao fim do dia, alivia com o movimento; associada a ferropenia.",
      "Perturbação do comportamento do sono REM: «viver os sonhos», gritar, debater-se — pode anteceder Parkinson ou corpos de Lewy."
    ]},
    { t: "Intervenções no internamento", itens: [
      "Doentes com CPAP/BiPAP: pedir para trazerem o equipamento e manter o uso.",
      "Higiene do sono: reduzir ruído e luz noturna, agrupar cuidados, evitar sestas longas, cafeína ao fim do dia.",
      "Evitar benzodiazepinas/hipnóticos em idosos e em doentes com apneia (risco de quedas, depressão respiratória, delirium).",
      "Perturbação do comportamento do sono REM: segurança na cama (grades almofadadas, afastar objetos)."
    ]}
  ]
},
{
  id: "neuropatias", cap: 18, parte: "p2", icone: "🦶",
  titulo: "Neuropatias periféricas",
  pags: "373–388",
  resumo: "Polineuropatias, mononeuropatias e síndrome de Guillain-Barré: prevenção de lesões, vigilância respiratória e autonómica.",
  seccoes: [
    { t: "Tipos e causas", itens: [
      "Polineuropatia distal simétrica («luvas e meias»): diabetes, álcool, défice de B12, insuficiência renal, fármacos (quimioterapia), hereditárias.",
      "Mononeuropatias: síndrome do túnel cárpico (mediano), paralisia do peroneal (pé pendente — compressão ao cruzar as pernas ou por gesso/posicionamento), nervo cubital no cotovelo.",
      "Paramiloidose (polineuropatia amiloidótica familiar, «doença dos pezinhos»): particularmente relevante no Norte de Portugal.",
      "Polirradiculoneuropatia desmielinizante inflamatória crónica (PDIC): evolução > 8 semanas, responde a imunoterapia."
    ]},
    { t: "Síndrome de Guillain-Barré", itens: [
      "Fraqueza ascendente simétrica em dias, reflexos diminuídos/abolidos, parestesias, dor; frequentemente após infeção.",
      "Vigiar de forma seriada (frequência prescrita, mais apertada na fase de progressão): capacidade vital forçada se disponível, força da tosse, contagem numa expiração (inspirar fundo e contar em voz alta a ritmo regular — registar o número para ver a tendência), força cervical e deglutição. SpO2 baixa é sinal tardio.",
      "Disautonomia: arritmias, TA muito variável, retenção urinária, íleo — monitorização cardíaca.",
      "Imunoglobulina IV ou plasmaférese conforme prescrição (vigiar reações à perfusão, função renal, hipotensão).",
      "Prevenção de TVP, úlceras por pressão, disfagia/aspiração; controlo da dor; apoio psicológico (doente consciente e muito dependente)."
    ]},
    { t: "Cuidados gerais", itens: [
      "Pés: inspeção diária, calçado adequado, testar a temperatura da água com cotovelo/termómetro, hidratação da pele, cortar unhas a direito.",
      "Posicionamentos que evitem compressão de nervos (cabeça do peróneo, cotovelo).",
      "Prevenção de quedas (perda da sensibilidade postural, sobretudo no escuro)."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Regra 20/30/40: capacidade vital < 20 mL/kg, pressão inspiratória máxima menos negativa que −30 cmH2O ou pressão expiratória máxima < 40 cmH2O; ou queda > 30% da capacidade vital face ao valor basal. Também: tosse fraca, dificuldade em contar numa expiração, respiração paradoxal, uso de músculos acessórios → comunicar de imediato (avaliação para UCI).",
      "Disfagia, fraqueza cervical/facial bilateral.",
      "Arritmias, oscilações extremas da TA."
    ]}
  ]
},
{
  id: "miastenia", cap: 19, parte: "p2", icone: "💪",
  titulo: "Miopatias e miastenia",
  pags: "389–400",
  resumo: "Miastenia gravis: fraqueza flutuante com o esforço, horário da medicação, fármacos a evitar e risco de crise. Miopatias: fraqueza proximal.",
  seccoes: [
    { t: "Miastenia gravis", itens: [
      "Fraqueza que agrava com o esforço e ao fim do dia e melhora com repouso.",
      "Ptose, diplopia, disartria, disfagia, fraqueza cervical e proximal dos membros.",
      "Inibidores da colinesterase (ex.: piridostigmina): administrar a horas exatas, idealmente 30–60 min antes das refeições para facilitar a deglutição.",
      "Tratamento imunossupressor/timectomia conforme indicação; imunoglobulina ou plasmaférese nas crises.",
      "Vigilância seriada: ptose, voz, deglutição, força cervical e contagem numa expiração (ou capacidade vital, se prescrita), registando a tendência. Planear refeições e atividades para as horas de melhor efeito da medicação."
    ]},
    { t: "Crise miasténica vs crise colinérgica", tabela: {
      cab: ["", "Crise miasténica", "Crise colinérgica (excesso de medicação)"],
      lin: [
        ["Causa", "Infeção, cirurgia, fármacos, redução da medicação", "Doses elevadas de anticolinesterásico"],
        ["Sinais", "Fraqueza, ptose, disfagia, insuficiência respiratória", "Fraqueza + secreções abundantes, sudorese, cólicas, diarreia, bradicardia, miose, fasciculações"]
      ],
      nota: "Ambas podem causar insuficiência respiratória — vigilância respiratória como no Guillain-Barré (regra 20/30/40). A crise colinérgica é rara com doses habituais; perante fraqueza respiratória, a prioridade é a via aérea, seja qual for o tipo de crise."
    }},
    { t: "Sinais de alarme — crise miasténica", alarme: true, itens: [
      "Fraqueza cervical crescente (não levanta a cabeça da almofada), voz anasalada ou a apagar-se, disfagia nova, tosse fraca.",
      "Dispneia sobretudo deitado, uso de músculos acessórios, contagem numa expiração a diminuir — a SpO2 baixa é sinal tardio.",
      "Atuar: cabeceira elevada, nada por boca se disfagia, chamar o médico de imediato, preparar vigilância respiratória/UCI."
    ]},
    { t: "Fármacos que podem agravar a miastenia", tipo: "precaucao", itens: [
      "Antibióticos: aminoglicosídeos, fluoroquinolonas, macrólidos.",
      "Magnésio IV, bloqueadores neuromusculares, betabloqueantes, alguns antiarrítmicos (ex.: procainamida, quinidina), quinino e hidroxicloroquina, toxina botulínica, D-penicilamina, inibidores de checkpoint imunitário, contraste iodado (raro).",
      "Início de corticoide em dose alta pode agravar transitoriamente a fraqueza nos primeiros dias — reforçar a vigilância respiratória e da deglutição.",
      "Confirmar sempre com o médico/farmacêutico antes de administrar fármacos novos."
    ]},
    { t: "Miopatias", itens: [
      "Fraqueza proximal simétrica: dificuldade em levantar-se da cadeira, subir escadas, pentear-se.",
      "Miopatias inflamatórias (polimiosite, dermatomiosite — lesões cutâneas), distrofias musculares hereditárias, miopatias tóxicas (corticoides, estatinas, álcool) e endócrinas.",
      "Rabdomiólise: dor muscular, urina escura, CK muito elevada — risco de lesão renal: hidratação e vigiar diurese.",
      "Síndrome de Lambert-Eaton: fraqueza proximal que pode melhorar com esforço breve, boca seca; associada a cancro do pulmão."
    ]}
  ]
},
{
  id: "urgencias", cap: 20, parte: "p2", icone: "🚨",
  titulo: "Urgências neurológicas",
  pags: "401–432",
  resumo: "Situações que exigem ação imediata. Reconhecer, pedir ajuda, estabilizar e antecipar o que vai ser necessário.",
  seccoes: [
    { t: "Lista de urgências a reconhecer", itens: [
      "AVC agudo — ver tema AVC (Via Verde).",
      "Estado de mal epilético — crise ≥ 5 min ou repetidas sem recuperação.",
      "Hemorragia subaracnoideia — cefaleia súbita «em trovão».",
      "Meningite/encefalite — febre + cefaleia + alteração da consciência.",
      "Hipertensão intracraniana/herniação — queda da consciência, anisocoria, Cushing.",
      "Compressão medular — dor dorsal + fraqueza dos membros + nível sensitivo + retenção urinária/obstipação. Frequentemente doente oncológico. RM urgente.",
      "Síndrome da cauda equina — dor lombar, anestesia «em sela», retenção urinária, fraqueza dos membros inferiores.",
      "Insuficiência respiratória neuromuscular — Guillain-Barré, crise miasténica.",
      "Trombose venosa cerebral — cefaleia, crises, défices; mais frequente em mulheres jovens, puerpério, contraceção hormonal.",
      "Encefalopatia hipertensiva/PRES — cefaleia, alterações visuais, crises com TA muito elevada.",
      "Síndrome neuroléptica maligna e síndrome serotoninérgica."
    ]},
    { t: "Vertigem aguda: sinais que sugerem causa central", itens: [
      "Incapacidade de andar/estar em pé sem apoio.",
      "Diplopia, disartria, disfagia, défices motores ou sensitivos, ataxia de membros.",
      "Cefaleia ou dor cervical associada (disseção).",
      "Nesses casos, tratar como possível AVC da circulação posterior."
    ]},
    { t: "Atitude geral", itens: [
      "ABCDE, glicemia capilar, Glasgow e pupilas.",
      "Pedir ajuda precocemente; registar horas.",
      "Acesso venoso, colheitas, monitorização; preparar transporte para imagem com monitorização adequada."
    ]}
  ]
},
{
  id: "sistemicas", cap: 21, parte: "p2", icone: "🫀",
  titulo: "Manifestações neurológicas nas doenças sistémicas",
  pags: "433–450",
  resumo: "Muitas alterações neurológicas têm origem fora do sistema nervoso: metabólicas, carenciais, tóxicas, oncológicas ou autoimunes.",
  seccoes: [
    { t: "Metabólicas e carenciais", itens: [
      "Hipoglicemia: pode causar défices focais, convulsões, coma — glicemia capilar sempre.",
      "Hiponatremia: confusão, crises; sintomas graves (vómitos, sonolência, convulsões) são emergência (soro salino hipertónico, por prescrição). A correção demasiado rápida pode causar síndrome de desmielinização osmótica: habitualmente não ultrapassar 10 mmol/L nas primeiras 24 h e 8 mmol/L em cada 24 h seguintes (≤ 8 mmol/L/24 h nos doentes de risco: álcool, desnutrição, hipocaliemia, doença hepática, Na inicial muito baixo). Um aumento súbito da diurese (urina clara e abundante) pode indicar sobrecorreção — comunicar.",
      "Encefalopatia hepática: confusão, inversão sono-vigília, asterixis («flapping»); precipitantes: obstipação, hemorragia digestiva, infeção, sedativos.",
      "Encefalopatia urémica e encefalopatia associada à sépsis.",
      "Encefalopatia de Wernicke (défice de tiamina): confusão, alterações oculomotoras, ataxia (a tríade completa é rara — basta a suspeita). Doentes de risco: álcool, desnutrição, vómitos prolongados, cirurgia bariátrica. Tiamina IV precoce conforme prescrição; a hipoglicemia corrige-se de imediato, sem esperar pela tiamina.",
      "Défice de vitamina B12: neuropatia, alterações da marcha (degenerescência combinada da medula), défice cognitivo.",
      "Disfunção tiroideia: alterações cognitivas, miopatia, neuropatia."
    ]},
    { t: "Álcool", itens: [
      "Síndrome de abstinência: tremor, sudorese, ansiedade, taquicardia — monitorizar com escala (ex.: CIWA-Ar) conforme protocolo.",
      "Delirium tremens: confusão, alucinações, instabilidade autonómica — emergência.",
      "Crises de abstinência, neuropatia, degenerescência cerebelosa."
    ]},
    { t: "Oncologia e doenças autoimunes", itens: [
      "Metástases cerebrais e compressão medular por metástases vertebrais.",
      "Síndromes paraneoplásicas (encefalite, degenerescência cerebelosa, Lambert-Eaton).",
      "Neurotoxicidade de quimioterapia e imunoterapias (neuropatias, encefalopatia).",
      "Lúpus, vasculites, sarcoidose, síndrome de Sjögren: AVC, crises, neuropatias, alterações psiquiátricas."
    ]}
  ]
},
{
  id: "genetica", cap: 22, parte: "p2", icone: "🧬",
  titulo: "Biologia molecular em neurologia clínica",
  pags: "451–454",
  resumo: "Muitas doenças neurológicas têm base genética. O papel da enfermagem passa pelo apoio à família, confidencialidade e encaminhamento para aconselhamento genético.",
  seccoes: [
    { t: "Exemplos", itens: [
      "Doença de Huntington, ataxias hereditárias, distrofias musculares, neuropatias hereditárias (ex.: Charcot-Marie-Tooth).",
      "Paramiloidose (amiloidose hereditária por transtirretina): frequente no Norte de Portugal; existem terapêuticas modificadoras.",
      "Formas genéticas de doença de Alzheimer, Parkinson e esclerose lateral amiotrófica (minoria dos casos)."
    ]},
    { t: "Cuidados", itens: [
      "Testes preditivos (em pessoas sem sintomas) fazem-se em consulta de genética com aconselhamento antes e depois do resultado.",
      "Confidencialidade: a informação genética diz respeito a toda a família — não partilhar sem consentimento.",
      "Apoio emocional; informação sobre associações de doentes."
    ]}
  ]
},
{
  id: "especialidade", cap: 23, parte: "p2", icone: "🏥",
  titulo: "A neurologia como especialidade",
  pags: "455–458",
  resumo: "Capítulo sobre a especialidade médica de Neurologia (formação e áreas de diferenciação). Sem conteúdo clínico específico para a prática de enfermagem — consultar o livro.",
  seccoes: [
    { t: "Áreas de diferenciação com que a equipa de enfermagem se cruza", itens: [
      "Doenças cerebrovasculares/Unidade de AVC, epilepsia (vídeo-EEG), doenças do movimento, doenças desmielinizantes, doenças neuromusculares, demências, cefaleias, neurofisiologia."
    ]}
  ]
},
// ───────────────────── PARTE 3 — CUIDADOS TRANSVERSAIS ─────────────────────
{
  id: "disfagia", cap: null, parte: "p3", icone: "🥄",
  titulo: "Disfagia e alimentação segura",
  pags: null,
  resumo: "A disfagia é frequente no AVC, nas doenças neuromusculares, no Parkinson e na demência, e muitas vezes é silenciosa. Rastrear antes de dar qualquer coisa por boca, adaptar consistências e alimentar com técnica segura previne pneumonia de aspiração, desidratação e desnutrição.",
  seccoes: [
    { t: "Quem rastrear e quando", itens: [
      "Antes de qualquer ingestão oral (água e comprimidos incluídos): doentes com AVC, alteração da consciência, doença neuromuscular ou bulbar (miastenia, Guillain-Barré, ELA), Parkinson avançado, demência avançada ou queixas de engasgamento.",
      "Rastreio feito por enfermeiro treinado, com o instrumento adotado pelo serviço (ex.: GUSS).",
      "Pré-requisitos: doente desperto pelo menos 15 min, sentado o mais vertical possível, capaz de tossir ou pigarrear.",
      "Repetir o rastreio se houver alteração neurológica e antes de evoluir a consistência.",
      "Se não passar: manter jejum, pedir via alternativa para a medicação, avaliação por terapia da fala e, se indicado, avaliação instrumental (videofluoroscopia ou videoendoscopia da deglutição)."
    ]},
    { t: "GUSS — avaliar agora", escala: "guss" },
    { t: "Consistências", itens: [
      "Usar a mesma terminologia em toda a equipa, na cozinha e na carta de alta (referencial IDDSI: níveis 0–4 para líquidos, 3–7 para alimentos).",
      "Espessante: preparar segundo as instruções do produto e a consistência prescrita; respeitar o tempo de repouso — a consistência muda com o tempo e a temperatura.",
      "Evitar consistências mistas (sopa com pedaços, cereais com leite, fruta muito aquosa) e alimentos que se desfazem em migalhas."
    ]},
    { t: "Técnica de alimentação segura", itens: [
      "Sentado a 90° (cadeirão sempre que possível) ou o mais vertical que a situação permita; cabeça alinhada, queixo ligeiramente fletido ao engolir.",
      "Doente desperto e atento; ambiente calmo, sem televisão; não falar enquanto mastiga.",
      "Pequenas quantidades (colher de chá), ritmo lento; confirmar que engoliu e a boca está vazia antes da colherada seguinte.",
      "Hemiparésia ou negligência: oferecer pelo lado preservado e procurar restos de comida na bochecha do lado afetado.",
      "Não usar seringas nem palhinhas, salvo indicação da terapia da fala.",
      "Óculos, prótese dentária bem ajustada e prótese auditiva colocados.",
      "Manter sentado pelo menos 30 min após a refeição; higiene oral no fim.",
      "Supervisão conforme o nível de risco; registar a quantidade ingerida (ex.: em quartos do prato) e a ingestão de líquidos."
    ]},
    { t: "Medicação no doente com disfagia", itens: [
      "Nunca dar comprimidos com água fina a quem tem indicação de líquidos espessados.",
      "Antes de triturar ou abrir: confirmar com a farmácia — formas de libertação prolongada, gastrorresistentes e alguns citotóxicos não podem ser triturados.",
      "Se a via oral não é segura, pedir alternativa (solução oral, via sonda, outra via) — não omitir doses sem informar o médico, sobretudo antiparkinsónicos, antiepiléticos e piridostigmina."
    ]},
    { t: "Higiene oral", itens: [
      "Pelo menos duas vezes por dia e após as refeições, também nos doentes em jejum ou com sonda — a placa bacteriana é fonte de pneumonia de aspiração.",
      "Com risco de aspiração: escova macia, pouca água, aspiração disponível, doente sentado ou de lado.",
      "Hidratar lábios e mucosa; vigiar candidíase."
    ]},
    { t: "Sonda nasogástrica e gastrostomia (PEG)", itens: [
      "SNG: confirmar a posição após a colocação e antes de cada utilização segundo o protocolo (pH do aspirado e/ou radiografia). A auscultação de ar insuflado não é método fiável.",
      "Marcar e registar o comprimento externo; fixar sem pressão sobre a asa do nariz (úlcera por pressão por dispositivo).",
      "Cabeceira ≥ 30° durante a alimentação e 30–60 min depois; lavar a sonda com água antes e depois de cada fármaco e da alimentação.",
      "Doente agitado: risco de autorremoção — tentar alternativas (vigilância, distração, fixação adequada) antes de qualquer contenção.",
      "PEG: inspeção e limpeza diárias do estoma; mobilizar o disco e rodar a sonda após cicatrização, conforme protocolo (não rodar sondas com extensão jejunal); vigiar dor, extravasamento e sinais de infeção.",
      "Antes da alta, ensinar o cuidador: administração da alimentação e da medicação, lavagem, cuidados ao estoma, o que fazer se a sonda sair."
    ]},
    { t: "Nutrição e hidratação", itens: [
      "Rastreio do risco nutricional na admissão com o instrumento do hospital; pesar na admissão e semanalmente.",
      "Balanço hídrico nos doentes com líquidos espessados (tendem a beber pouco) — risco de desidratação, obstipação, infeção urinária e delirium.",
      "Articular com a nutrição/dietética se a ingestão for inferior a cerca de metade das necessidades durante vários dias."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Tosse, engasgamento ou voz molhada durante ou após a refeição → parar, sentar, aspirar se necessário, comunicar.",
      "Febre, dessaturação, taquipneia ou aumento de secreções sem outra causa: suspeitar de pneumonia de aspiração (pode ser silenciosa).",
      "Obstrução da via aérea por alimento: manobras de desobstrução e pedir ajuda.",
      "Saída acidental de gastrostomia: cobrir o estoma e contactar de imediato — o trajeto pode fechar em poucas horas."
    ]}
  ]
},
{
  id: "seguranca", cap: null, parte: "p3", icone: "🛡️",
  titulo: "Segurança: quedas, úlceras por pressão e contenção",
  pags: null,
  resumo: "O doente neurológico tem risco elevado de cair e de desenvolver úlceras por pressão: fraqueza, alteração da sensibilidade, negligência, confusão e imobilidade. Avaliar o risco com escalas, agir de forma individualizada e recorrer à contenção física só como último recurso.",
  seccoes: [
    { t: "Porque cai o doente neurológico", itens: [
      "Hemiparésia, ataxia, alteração da sensibilidade postural, alterações visuais.",
      "Negligência e impulsividade (sobretudo lesões do hemisfério direito): o doente não reconhece o défice e tenta levantar-se sozinho.",
      "Hipotensão ortostática (Parkinson, disautonomia, fármacos), urgência urinária, delirium.",
      "Fármacos sedativos, antiepiléticos, antipsicóticos, anti-hipertensores. A anticoagulação não aumenta o risco de cair, mas aumenta a gravidade da queda."
    ]},
    { t: "Avaliar o risco de queda", itens: [
      "Escala de Morse (ver Escalas) na admissão e após alteração clínica, transferência ou queda, segundo a Norma DGS 008/2019 e o protocolo do hospital.",
      "O juízo clínico prevalece: um doente com negligência ou impulsividade é de alto risco mesmo com pontuação baixa.",
      "Registar o risco e o plano de prevenção; transmitir na passagem de turno."
    ]},
    { t: "Prevenir quedas", itens: [
      "Cama na posição mais baixa e travada; campainha, óculos, água e objetos pessoais ao alcance, do lado preservado.",
      "Luz de presença à noite; chão seco e desimpedido; calçado fechado e antiderrapante.",
      "Esvaziamento vesical programado (ao acordar, antes das refeições e de deitar); acompanhar ao WC — não deixar sozinho o doente de alto risco.",
      "Levante faseado: sentar, pernas pendentes, só depois de pé; avaliar TA deitado e de pé se houver suspeita de hipotensão ortostática.",
      "Rever com o médico a medicação sedativa e a de risco.",
      "Grades: decidir caso a caso — num doente confuso que tenta sair da cama podem aumentar a gravidade da queda, e são uma forma de contenção.",
      "Sensores de cama/cadeira e vigilância próxima quando disponíveis; envolver e ensinar a família."
    ]},
    { t: "Após uma queda", itens: [
      "Não levantar de imediato: avaliar consciência, dor, deformidades, feridas, glicemia capilar.",
      "Se bateu com a cabeça, se a queda não foi presenciada ou se o doente está anticoagulado/antiagregado: informar o médico e fazer vigilância neurológica seriada conforme protocolo — o hematoma pode surgir horas ou dias depois.",
      "Levantar com técnica e meios adequados (elevador de transferência se necessário).",
      "Registar no processo e notificar (sistema NOTIFICA ou sistema interno); reavaliar o risco e o plano; informar a família."
    ]},
    { t: "Úlceras por pressão", itens: [
      "Escala de Braden (ver Escalas) nas primeiras 6 h após a admissão; reavaliar conforme a Orientação DGS 017/2011 e o protocolo e sempre que a situação mude.",
      "Inspeção diária da pele: sacro, calcâneos, trocânteres, região occipital e pele sob dispositivos (SNG, máscara de oxigénio ou VNI, colar cervical, ortóteses, algália).",
      "Lado parético e zonas com sensibilidade diminuída: o doente não sente a pressão — vigiar com mais atenção.",
      "Reposicionamento com horário individualizado e registado; decúbito lateral a 30°; calcâneos sem apoio (almofada sob a perna).",
      "Superfície de apoio adequada ao risco; cabeceira não acima de 30° sempre que possível, ponderando com o risco de aspiração.",
      "Pele limpa e seca; gestão da incontinência; produto barreira. Não massajar proeminências ósseas avermelhadas.",
      "Nutrição e hidratação adequadas (ver Disfagia e alimentação segura).",
      "Se houver lesão: classificar (categoria 1–4, não classificável, lesão dos tecidos profundos), medir e registar; articular com a consulta/equipa de feridas."
    ]},
    { t: "Contenção física", itens: [
      "Último recurso, segundo a Orientação DGS 021/2011 e o protocolo do hospital, só depois de esgotadas as alternativas: procurar a causa (dor, retenção urinária, hipoxia, delirium), presença da família, reorientação, vigilância próxima, mudar de quarto.",
      "São contenção: grades elevadas, cintos, imobilizadores de pulsos, mesas fixas à cadeira.",
      "Decisão médica; em situação urgente pode ser iniciada pela equipa e validada pelo médico o mais cedo possível, conforme protocolo.",
      "Explicar ao doente e informar a família; usar o método menos restritivo, pelo menor tempo possível; nunca em decúbito ventral.",
      "Vigilância regular (respiração, perfusão e pele distal, hidratação, eliminação, conforto) e reavaliação da necessidade com a periodicidade definida.",
      "Registar: motivo, alternativas tentadas, tipo de contenção, hora de início e de fim, vigilâncias, complicações, informação à família."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Após queda: sonolência, confusão nova, cefaleia, vómitos ou novo défice — sobretudo se anticoagulado.",
      "Dor na anca com membro encurtado e em rotação externa: suspeitar de fratura do colo do fémur.",
      "Na contenção: cianose, palidez, edema ou dor distal, dificuldade respiratória → aliviar de imediato e avaliar."
    ]}
  ]
},
{
  id: "eliminacao", cap: null, parte: "p3", icone: "🚻",
  titulo: "Eliminação vesical e intestinal no doente neurológico",
  pags: null,
  resumo: "Retenção, incontinência e obstipação são muito frequentes no AVC, na EM, no Parkinson, na lesão medular e no Guillain-Barré. Causam infeção, delirium, quedas e lesões da pele, e pesam muito na dignidade do doente. Uma avaliação sistemática e programas regulares de eliminação fazem diferença.",
  seccoes: [
    { t: "Padrões frequentes", itens: [
      "Retenção urinária: lesão medular aguda, cauda equina, Guillain-Barré, fármacos (anticolinérgicos, opioides), obstipação.",
      "Incontinência por urgência (bexiga hiperativa): AVC, EM, Parkinson, demência, hidrocefalia de pressão normal.",
      "Dissinergia (bexiga e esfíncter não coordenados): EM, lesão medular — esvaziamento incompleto.",
      "Incontinência funcional: o doente controla a bexiga mas não consegue pedir ou chegar a tempo (afasia, imobilidade, confusão)."
    ]},
    { t: "Avaliar", itens: [
      "Diário miccional: horas, volumes, perdas, urgência, ingestão de líquidos.",
      "Resíduo pós-miccional por ecografia vesical portátil se houver suspeita de retenção (valor considerado significativo conforme protocolo).",
      "Sinais de retenção: desconforto suprapúbico, globo vesical, micções pequenas e frequentes, agitação inexplicada.",
      "Infeção urinária no doente neurológico pode manifestar-se só por confusão, febre, aumento da espasticidade ou agravamento dos sintomas (pseudo-surto na EM)."
    ]},
    { t: "Intervenções vesicais", itens: [
      "Evitar algaliação permanente por rotina; se algaliado, indicação documentada, revisão diária da necessidade e retirada o mais cedo possível; sistema fechado.",
      "Retenção: cateterismo intermitente com frequência ajustada aos volumes, conforme prescrição e protocolo, evitando grandes distensões.",
      "Micção programada (horário fixo); urinol, arrastadeira ou cadeira sanitária ao alcance; responder de imediato à campainha.",
      "Ingestão hídrica adequada (salvo restrição); reduzir cafeína e líquidos ao fim do dia se houver noctúria.",
      "Incontinência: proteção cutânea; preferir coletor urinário externo ou idas programadas ao WC a fraldas sempre que possível — a fralda favorece dependência e lesões."
    ]},
    { t: "Intestino", itens: [
      "Obstipação muito frequente: imobilidade, fármacos, Parkinson, EM, lesão medular, pouca ingestão de líquidos por disfagia.",
      "Registo diário de dejeções (frequência e consistência, ex.: escala de Bristol).",
      "Programa intestinal: mesma hora todos os dias, aproveitando o reflexo gastrocólico (20–30 min após uma refeição); sentado na sanita ou cadeira sanitária, pés apoiados, privacidade.",
      "Fibras e líquidos dentro do que a deglutição permite; laxantes e supositórios conforme prescrição.",
      "Lesão medular: estimulação digital ou esvaziamento manual conforme protocolo e ensino.",
      "Diarreia num doente obstipado: suspeitar de fecaloma com extravasamento.",
      "Na hipertensão intracraniana e na HSA: evitar esforço defecatório — laxante prescrito de forma regular."
    ]},
    { t: "Ensino e alta", itens: [
      "Cateterismo intermitente limpo (autocateterismo ou pelo cuidador): treino com supervisão antes da alta, material, sinais de infeção.",
      "Programa intestinal adaptado ao horário de casa.",
      "Produtos de apoio (cadeira sanitária, elevador de sanita, urinol) e articulação com o centro de saúde."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Disreflexia autonómica (lesão medular a nível de T6 ou acima): subida súbita da TA, cefaleia intensa, rubor e sudorese acima da lesão, bradicardia. Sentar o doente com as pernas para baixo, desapertar roupa e meias, verificar algália (dobrada ou obstruída), bexiga cheia ou fecaloma, chamar o médico.",
      "Retenção urinária nova com dor lombar, fraqueza dos membros inferiores ou anestesia em sela: suspeitar de compressão medular ou cauda equina — urgência.",
      "Distensão abdominal, vómitos, ausência de dejeções e gases: suspeitar de íleo (Guillain-Barré, disautonomia) ou oclusão.",
      "Febre com confusão e urina turva: suspeitar de urossepsis."
    ]}
  ]
},
{
  id: "ela", cap: null, parte: "p3", icone: "🫁",
  titulo: "ELA e doente neuromuscular: respiração, VNI e traqueostomia",
  pags: null,
  resumo: "A esclerose lateral amiotrófica (ELA) e outras doenças neuromusculares levam à perda progressiva da força, da fala, da deglutição e da respiração. Os cuidados de enfermagem centram-se na vigilância respiratória, na ventilação, na comunicação e no planeamento antecipado de cuidados, com uma abordagem paliativa precoce.",
  seccoes: [
    { t: "ELA — o essencial", itens: [
      "Degenerescência dos neurónios motores superior e inferior: fraqueza progressiva dos membros (com fasciculações e atrofia), fala (disartria), deglutição e músculos respiratórios.",
      "Em geral preservam a sensibilidade, os movimentos oculares e o controlo dos esfíncteres.",
      "Parte dos doentes tem alterações cognitivas ou de comportamento (tipo frontotemporal); pode haver riso ou choro involuntários (labilidade emocional).",
      "Terapêutica modificadora conforme prescrição (benefício modesto); seguimento por equipa multidisciplinar."
    ]},
    { t: "Respiração — vigiar", itens: [
      "Sinais precoces de hipoventilação: falta de ar deitado (ortopneia), sono fragmentado, cefaleia matinal, sonolência diurna, cansaço, tosse fraca.",
      "Registar a capacidade vital e/ou a contagem numa expiração conforme prescrição, para comparar a tendência.",
      "Cabeceira elevada; técnicas de tosse assistida e insuflador-exsuflador mecânico se prescrito.",
      "Oxigénio: no doente que hipoventila, o oxigénio sem ventilação pode agravar a retenção de CO2 — cumprir o alvo de SpO2 prescrito (gasimetria)."
    ]},
    { t: "Ventilação não invasiva (VNI)", itens: [
      "Doente com ventilador domiciliário: trazer o equipamento e a interface; confirmar os parâmetros prescritos.",
      "Máscara bem ajustada, com fugas mínimas; proteger o dorso do nariz (úlcera por pressão por dispositivo); higiene diária da interface; humidificação conforme prescrição.",
      "Vigiar distensão gástrica, secura das mucosas, irritação ocular.",
      "Doente dependente de VNI: nunca sem ventilador; alarmes audíveis; campainha adaptada à sua força (de pressão ou de sopro) e vigilância próxima."
    ]},
    { t: "Traqueostomia", itens: [
      "Registar o tipo e o número da cânula; à cabeceira: cânula de reserva do mesmo número e de um número abaixo, aspirador, insuflador manual, oxigénio, seringa para o cuff.",
      "Aspiração só quando necessária, com técnica assética, curta, com pressão adequada; pré-oxigenar se necessário.",
      "Humidificação sempre (filtro permutador de calor e humidade ou humidificação ativa).",
      "Cuff: pressão verificada conforme protocolo (habitualmente 20–30 cmH2O).",
      "Cuidados ao estoma e troca da fixação por dois profissionais; limpeza ou troca da cânula interna conforme protocolo.",
      "Comunicação: válvula de fonação só com indicação e com o cuff desinsuflado; quadro de comunicação disponível.",
      "Ensino e treino do cuidador antes da alta (aspiração, cuidados ao estoma, atuação em emergência)."
    ]},
    { t: "Deglutição, nutrição e sialorreia", itens: [
      "Rastreio de disfagia e técnica segura (ver Disfagia e alimentação segura); pesar regularmente — a perda de peso agrava o prognóstico.",
      "Gastrostomia: discutir cedo, de preferência antes de compromisso respiratório importante.",
      "Sialorreia: posicionamento, aspiração oral, terapêutica conforme prescrição; secreções espessas: hidratação e humidificação."
    ]},
    { t: "Comunicação e autonomia", itens: [
      "Planear cedo a comunicação aumentativa (tabela alfabética, aplicações, sistemas de seguimento ocular) — antes de a fala se perder.",
      "Produtos de apoio: colar de suporte cervical, cadeira de rodas, elevador de transferência, campainha adaptada.",
      "Articular com terapia da fala, fisioterapia, terapia ocupacional, nutrição, serviço social e associação de doentes (APELA)."
    ]},
    { t: "Decisões antecipadas e cuidados paliativos", itens: [
      "Conversar cedo e repetidamente sobre as preferências do doente: gastrostomia, VNI, traqueostomia e ventilação invasiva, reanimação, local de cuidados.",
      "Informar sobre as Diretivas Antecipadas de Vontade (testamento vital) e o procurador de cuidados de saúde (Lei 25/2012), registáveis no RENTEV; registar no processo as decisões conhecidas.",
      "Referenciação precoce à equipa de cuidados paliativos; controlo de sintomas: dispneia, ansiedade, dor, cãibras, sialorreia, insónia.",
      "Apoio ao cuidador: risco de exaustão; informar sobre descanso do cuidador e apoios sociais."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Dispneia em repouso, respiração paradoxal (abdómen recolhe na inspiração), sonolência ou confusão nova (hipercapnia).",
      "Infeção respiratória: no doente neuromuscular a descompensação pode ser muito rápida.",
      "VNI: alarme de desconexão ou grande fuga, intolerância súbita à máscara.",
      "Traqueostomia: dificuldade respiratória, cânula deslocada ou obstruída, hemorragia — aspirar, retirar e limpar a cânula interna, chamar ajuda e seguir o protocolo de emergência."
    ]}
  ]
},
// ───────────────────── PARTE 4 — PATOLOGIAS ESPECÍFICAS (A–Z) ─────────────────────
{
  id: "ataxias", cap: null, parte: "p4", icone: "🌀",
  titulo: "Ataxias cerebelosas e doença de Machado-Joseph",
  pags: null,
  resumo: "Doenças que afetam o cerebelo e as suas ligações, com descoordenação da marcha, dos membros, da fala e da deglutição. A doença de Machado-Joseph é uma ataxia hereditária descrita em famílias de origem portuguesa e particularmente frequente nos Açores.",
  subtemas: [
    {nome: "Ataxias adquiridas", procura: "Causas adquiridas"},
    {nome: "Ataxias hereditárias", procura: "Ataxias hereditárias"},
    {nome: "Doença de Machado-Joseph (SCA3)", procura: "Machado-Joseph (SCA3)"}
  ],
  seccoes: [
    { t: "O essencial", itens: [
      "Ataxia: marcha de base alargada e instável, descoordenação dos membros (dismetria, tremor de intenção), fala arrastada e «escandida», nistagmo, disfagia.",
      "Causas adquiridas: álcool, fármacos (ex.: fenitoína, lítio), défice de vitamina B1, B12 ou E, hipotiroidismo, AVC ou tumor da fossa posterior, EM, síndromes paraneoplásicas, doença celíaca.",
      "Ataxias hereditárias: dominantes (ataxias espinocerebelosas — a mais frequente em Portugal é a doença de Machado-Joseph, SCA3) e recessivas (ex.: ataxia de Friedreich, com início na juventude, cardiomiopatia e diabetes).",
      "Machado-Joseph (SCA3): transmissão autossómica dominante; início habitual na idade adulta; ataxia progressiva com alterações dos movimentos oculares, disartria, disfagia, espasticidade ou distonia, neuropatia, alterações do sono e da bexiga; cognição geralmente preservada."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "RM (atrofia cerebelosa), análises para causas tratáveis, estudo genético com aconselhamento.",
      "Não há tratamento curativo para as formas hereditárias; tratar as causas reversíveis nas adquiridas.",
      "Reabilitação (fisioterapia, terapia da fala, terapia ocupacional) é a base do tratamento; tratamento sintomático da espasticidade, dor, cãibras e alterações vesicais."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Risco de queda elevado: Morse, levante acompanhado, auxiliares de marcha adequados, calçado seguro, ambiente desimpedido.",
      "Rastreio de disfagia e adaptação das consistências; vigiar perda de peso.",
      "Comunicação: dar tempo, frases curtas, confirmar a compreensão — a disartria não significa défice cognitivo.",
      "Fadiga e sono: planear atividades com pausas; avaliar a qualidade do sono.",
      "Família: transmissão genética — encaminhar para consulta de genética; teste preditivo só com aconselhamento; apoio psicológico e associações de doentes."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Ataxia de instalação súbita (horas), com cefaleia, vómitos, vertigem ou alteração da consciência: pensar em AVC ou hemorragia cerebelosa — emergência (risco de compressão do tronco e hidrocefalia).",
      "Engasgamento frequente, febre ou dessaturação: suspeitar de aspiração.",
      "Ataxia com confusão e alteração dos movimentos oculares em doente com consumo de álcool, desnutrição ou vómitos prolongados: possível encefalopatia de Wernicke — comunicar de imediato; tiamina IV precoce conforme prescrição (ver «Manifestações neurológicas nas doenças sistémicas»)."
    ]}
  ]
},
{
  id: "ame", cap: null, parte: "p4", icone: "🧍",
  titulo: "Atrofia muscular espinhal (AME) no adulto",
  pags: null,
  resumo: "Doença genética dos neurónios motores da medula, com fraqueza proximal progressiva. No adulto vemos sobretudo formas de início tardio e pessoas com formas da infância que chegam à idade adulta. Existem hoje terapêuticas modificadoras — uma delas administrada por punção lombar, frequentemente em hospital de dia de neurologia.",
  seccoes: [
    { t: "O essencial", itens: [
      "Doença autossómica recessiva por alteração do gene SMN1; a gravidade depende em parte do número de cópias do gene SMN2.",
      "Fraqueza e atrofia musculares, mais proximais e nos membros inferiores; fasciculações e tremor fino das mãos; reflexos diminuídos; sem alterações sensitivas; cognição normal.",
      "Formas mais graves: escoliose, contraturas, fraqueza respiratória e bulbar (disfagia), dependência de cadeira de rodas e de ventilação.",
      "Fadiga marcada com o esforço."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Diagnóstico genético.",
      "Nusinersen: administração intratecal por punção lombar (doses de carga e depois manutenção a cada 4 meses). Desde 2026 há na UE dois regimes (dose padrão e dose alta), com esquemas de carga diferentes: confirmar sempre na prescrição o regime e a data prevista. Pode exigir punção guiada por imagem quando há escoliose grave ou artrodese da coluna.",
      "Risdiplam: via oral diária (solução ou comprimido).",
      "Onasemnogene abeparvovec intratecal (terapia génica, dose única): aprovado na UE em 2026 a partir dos 2 anos, incluindo adultos. Exige corticoide oral desde a véspera e durante cerca de 2 meses, com vigilância das enzimas hepáticas, conforme protocolo. A formulação intravenosa não é usada no adulto. A disponibilidade em Portugal depende da decisão de financiamento.",
      "Equipa multidisciplinar: fisioterapia, apoio respiratório (tosse assistida, VNI), nutrição, ortopedia, apoio social."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Antes de cada administração de nusinersen: confirmar que foram feitas as análises pedidas (plaquetas, coagulação e proteínas na urina, de preferência na primeira urina da manhã) e comunicar alterações antes do procedimento.",
      "Punção lombar: posicionamento adaptado às contraturas e à escoliose; após o procedimento, vigiar cefaleia pós-punção, dor lombar, vómitos e o local de punção (ver «Exames complementares»).",
      "Comunicar sonolência ou alteração da consciência em doente tratado com nusinersen (foram descritos casos de hidrocefalia).",
      "Risdiplam: horário diário fixo; ensinar a conservação e a preparação da forma prescrita; contraceção e planeamento de gravidez com a equipa médica.",
      "Vigilância respiratória (contagem numa expiração, tosse, sinais de hipoventilação noturna) e da deglutição.",
      "Transferências seguras com produtos de apoio; prevenção de úlceras por pressão e de quedas; respeitar a autonomia e a forma como a pessoa costuma ser posicionada."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Infeção respiratória, tosse ineficaz ou dispneia: descompensação rápida — comunicar precocemente.",
      "Após punção lombar: cefaleia intensa, febre, dor lombar crescente ou défices novos nos membros inferiores.",
      "Oxigénio em doente que hipoventila: só com alvo prescrito e vigilância (risco de retenção de CO2)."
    ]}
  ]
},
{
  id: "botulismo", cap: null, parte: "p4", icone: "🥫",
  titulo: "Botulismo",
  pags: null,
  resumo: "Paralisia flácida descendente causada pela toxina do Clostridium botulinum. É rara mas potencialmente fatal: a suspeita clínica precoce, a vigilância respiratória e a articulação imediata com a saúde pública são decisivas. Em Portugal, os casos descritos estão sobretudo ligados ao consumo de presunto e conservas caseiras.",
  seccoes: [
    { t: "Formas", itens: [
      "Alimentar: ingestão de toxina em alimentos mal conservados (conservas, enchidos, presunto ou peixe de preparação caseira). Pode haver vários casos em quem partilhou a refeição.",
      "Por ferida: infeção de feridas, sobretudo em pessoas que injetam drogas; sem sintomas gastrointestinais, pode haver febre pela infeção da ferida.",
      "Iatrogénica: após injeção de toxina botulínica (terapêutica ou estética), habitualmente com doses elevadas.",
      "Não se transmite de pessoa para pessoa."
    ]},
    { t: "Como se manifesta", itens: [
      "Início horas a dias após a exposição; na forma alimentar pode haver primeiro náuseas, vómitos, dor abdominal ou diarreia.",
      "Começa pelos pares cranianos: visão turva, diplopia, ptose, por vezes pupilas dilatadas e pouco reativas (pupilas normais não excluem o diagnóstico), disartria, disfonia, disfagia, boca seca.",
      "Depois fraqueza simétrica e descendente: pescoço, braços, músculos respiratórios, pernas.",
      "Consciência e sensibilidade preservadas; habitualmente sem febre.",
      "Disautonomia: boca seca, obstipação, retenção urinária, hipotensão ortostática."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Diagnóstico clínico — não esperar pelos resultados laboratoriais para tratar.",
      "Antitoxina botulínica o mais cedo possível, por decisão médica. Colher o soro antes da perfusão, mas não atrasar a antitoxina à espera das outras amostras (fezes, vómito) nem dos resultados. A antitoxina trava a progressão da paralisia, mas não reverte a que já existe.",
      "Suporte ventilatório quando necessário (pode ser prolongado, semanas a meses); a recuperação é lenta.",
      "Forma por ferida: desbridamento cirúrgico e antibiótico.",
      "Doença de declaração obrigatória: notificação imediata pelo médico, para a saúde pública investigar a fonte e identificar outras pessoas expostas."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Colheitas conforme prescrição e orientação do laboratório: soro obrigatoriamente antes da antitoxina; fezes (se houver obstipação, pedir orientação, porque pode ser preciso enema com água estéril), vómito ou aspirado gástrico; na forma por ferida, amostra da ferida. Guardar os restos do alimento suspeito com a embalagem, refrigerados. Não atrasar a antitoxina por causa das colheitas.",
      "Vigilância respiratória seriada como no Guillain-Barré (contagem numa expiração, força da tosse, força cervical, capacidade vital se prescrita).",
      "Nada por boca até avaliação da deglutição; aspiração de secreções; cabeceira elevada.",
      "Antitoxina (de origem equina): perguntar por alergia a cavalos, asma ou soros equinos administrados antes; acesso venoso, monitorização durante e após a perfusão, adrenalina e material de anafilaxia preparados. Ensinar o doente e a família a reconhecer a doença do soro (febre, erupção, dores articulares e musculares), que surge habitualmente 10 a 21 dias depois, muitas vezes já após a alta.",
      "Fármacos que podem agravar o bloqueio neuromuscular (ex.: aminoglicosídeos, clindamicina, tetraciclinas, magnésio, bloqueadores neuromusculares): alertar o médico antes de administrar.",
      "Proteção ocular (encerramento palpebral incompleto), obstipação, retenção urinária, prevenção de úlceras por pressão e de TVP.",
      "Comunicação: o doente está consciente mas pode não conseguir falar — quadro de comunicação, perguntas de sim/não, explicar todos os procedimentos; apoio emocional.",
      "Precauções padrão; não é necessário isolamento."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Fraqueza cervical crescente, voz fraca, tosse ineficaz, dispneia ou respiração paradoxal: comunicar de imediato (preparar UCI).",
      "Outras pessoas com os mesmos sintomas que partilharam a refeição: informar o médico de imediato.",
      "Durante a antitoxina: urticária, broncospasmo, hipotensão — parar a perfusão e atuar segundo o protocolo de anafilaxia."
    ]}
  ]
},
{
  id: "distrofia-miotonica", cap: null, parte: "p4", icone: "✋",
  titulo: "Distrofia miotónica tipo 1 (doença de Steinert)",
  pags: null,
  resumo: "A distrofia muscular mais frequente no adulto. Além da fraqueza e da miotonia, atinge o coração, a respiração, os olhos, o sistema endócrino e o sono — e torna o doente muito sensível a sedativos e anestésicos.",
  seccoes: [
    { t: "O essencial", itens: [
      "Doença genética autossómica dominante (expansão no gene DMPK); pode agravar-se de geração em geração (antecipação).",
      "Miotonia: dificuldade em relaxar o músculo (ex.: largar a mão depois de a apertar).",
      "Fraqueza e atrofia da face (face alongada, ptose), pescoço e porção distal dos membros; disartria e disfagia.",
      "Multissistémica: perturbações da condução cardíaca e arritmias (risco de morte súbita), hipoventilação, sonolência diurna, cataratas precoces, diabetes, alterações gastrointestinais, alterações cognitivas e de comportamento (apatia)."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Diagnóstico genético; EMG (descargas miotónicas).",
      "Sem tratamento curativo; seguimento multidisciplinar: ECG/Holter regular (pode precisar de pacemaker/CDI), provas respiratórias, oftalmologia, endocrinologia.",
      "Ventilação não invasiva se hipoventilação; tratamento sintomático da miotonia e da sonolência conforme prescrição."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Monitorização cardíaca/ECG conforme prescrição; comunicar síncope, palpitações ou tonturas.",
      "Muito sensível a sedativos, opioides e anestésicos (risco de depressão respiratória): alertar a equipa antes de sedação ou cirurgia e vigiar SpO2, frequência respiratória e sonolência.",
      "Oxigénio: no doente que hipoventila, cumprir o alvo de SpO2 prescrito (risco de retenção de CO2).",
      "Disfagia: rastreio e técnica segura; prevenção de aspiração.",
      "Quedas (pé pendente, fraqueza), fadiga, obstipação; vigilância de glicemia.",
      "Família: aconselhamento genético, incluindo planeamento familiar."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Síncope, palpitações, bradicardia ou nova perturbação no ECG.",
      "Sonolência excessiva, cefaleia matinal ou confusão: possível hipercapnia.",
      "Após sedação ou anestesia: depressão respiratória tardia."
    ]}
  ]
},
{
  id: "dcj", cap: null, parte: "p4", icone: "🧫",
  titulo: "Doença de Creutzfeldt-Jakob (DCJ e vDCJ) e outras doenças priónicas",
  pags: null,
  resumo: "Doenças neurodegenerativas raras, rapidamente progressivas e fatais, causadas por priões (proteínas anómalas). Exigem cuidados paliativos e medidas específicas de controlo de infeção na manipulação de tecidos de alto risco — mas não exigem isolamento para os cuidados de rotina.",
  subtemas: [
    {nome: "DCJ esporádica", procura: "Esporádica (a mais frequente"},
    {nome: "DCJ genética ou familiar", procura: "Genética/familiar"},
    {nome: "DCJ iatrogénica", procura: "Iatrogénica (rara)"},
    {nome: "Variante da DCJ (vDCJ)", procura: "Variante (vDCJ)"}
  ],
  seccoes: [
    { t: "Formas", itens: [
      "Esporádica (a mais frequente, cerca de 85%): adultos mais velhos, sem causa conhecida.",
      "Genética/familiar (cerca de 10–15%): mutações do gene PRNP; inclui a insónia familiar fatal e a síndrome de Gerstmann-Sträussler-Scheinker.",
      "Iatrogénica (rara): transmissão por procedimentos médicos — instrumentos neurocirúrgicos contaminados, enxertos de dura-máter ou de córnea, hormona de crescimento de origem humana.",
      "Variante (vDCJ): ligada ao consumo de produtos bovinos com encefalopatia espongiforme bovina («doença das vacas loucas»); afeta pessoas mais jovens; em Portugal foram identificados dois casos."
    ]},
    { t: "Como se manifesta", itens: [
      "DCJ esporádica: demência rapidamente progressiva (semanas a meses), mioclonias (sobretudo desencadeadas por ruído ou toque), ataxia, alterações visuais, alterações do comportamento; evolui para mutismo acinético; a maioria morre no primeiro ano.",
      "vDCJ: início com sintomas psiquiátricos (depressão, ansiedade, isolamento) e dor ou alterações sensitivas persistentes; ataxia e demência mais tarde; evolução mais lenta (cerca de 1 ano ou mais)."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "RM com difusão (alterações típicas do córtex e dos núcleos da base; na vDCJ, sinal no pulvinar do tálamo), EEG, LCR (RT-QuIC e outros marcadores), estudo genético.",
      "Confirmação definitiva por estudo neuropatológico (autópsia).",
      "Não há tratamento que altere a evolução: abordagem paliativa precoce, controlo de sintomas (mioclonias, agitação, dor, secreções).",
      "Doença de declaração obrigatória em Portugal: notificação pelo médico no SINAVE."
    ]},
    { t: "Controlo de infeção", itens: [
      "Não se transmite por contacto social, pelo toque, pela tosse ou pela partilha de espaços: precauções padrão nos cuidados de rotina (higiene, alimentação, posicionamentos); não é necessário quarto de isolamento.",
      "Alto risco: cérebro, medula espinal, dura-máter, hipófise e olho posterior (retina, nervo ótico). Risco intermédio: epitélio olfativo e, na vDCJ, tecido linfoide (amígdalas, apêndice, baço, gânglios linfáticos). Baixo risco: LCR, sangue, saliva, urina e fezes — precauções padrão; manipular segundo o protocolo.",
      "Procedimentos invasivos (punção lombar, biópsia, cirurgia, endoscopia, cuidados oftálmicos): usar material de uso único sempre que possível; instrumentos reutilizáveis segundo o protocolo da instituição (quarentena/destruição) — articular com a CCI (PPCIRA) e o serviço de esterilização antes do procedimento.",
      "Amostras: identificar como risco biológico de suspeita de DCJ e avisar o laboratório.",
      "Derrames de sangue/LCR: procedimento de descontaminação da instituição.",
      "Doentes (e pessoas em risco) não podem dar sangue, órgãos ou tecidos.",
      "Após o óbito: seguir as orientações da instituição para o manuseamento do corpo e informar a família sobre a importância da autópsia."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Segurança: mioclonias e ataxia aumentam o risco de queda e de lesão; ambiente calmo (o ruído e o toque súbito desencadeiam mioclonias).",
      "Disfagia progressiva: rastreio, adaptação das consistências, decisões sobre alimentação artificial alinhadas com o plano de cuidados paliativos.",
      "Prevenção de úlceras por pressão, contraturas, aspiração; cuidados à boca e aos olhos.",
      "Comunicação com a família: doença rápida e fatal — apoio emocional, informação clara sobre transmissão (desfazer medos), envolvimento nas decisões; encaminhamento para aconselhamento genético se forma genética.",
      "Proteger a confidencialidade e evitar estigma na equipa."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Exposição de risco de um profissional (picada ou salpico com tecido de alto risco): lavar abundantemente e comunicar de imediato segundo o protocolo de acidentes de trabalho.",
      "Procedimento invasivo programado sem a CCI/esterilização avisada: não avançar até haver orientação."
    ]}
  ]
},
{
  id: "huntington", cap: null, parte: "p4", icone: "🧬",
  titulo: "Doença de Huntington",
  pags: null,
  resumo: "Doença neurodegenerativa hereditária que combina alterações do movimento (coreia), cognitivas e psiquiátricas. Os cuidados focam-se na segurança, na nutrição, na comunicação e no apoio à família.",
  seccoes: [
    { t: "O essencial", itens: [
      "Transmissão autossómica dominante (expansão CAG no gene HTT): cada filho tem 50% de probabilidade de herdar.",
      "Início habitual entre os 30 e os 50 anos.",
      "Motor: coreia (movimentos involuntários rápidos e irregulares), depois rigidez, distonia, disartria, disfagia, alteração da marcha e quedas.",
      "Cognitivo: lentificação, dificuldade em planear e organizar, perda de flexibilidade.",
      "Psiquiátrico: depressão, irritabilidade, apatia, impulsividade, alterações obsessivas; o risco de suicídio está aumentado."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Diagnóstico clínico e genético. O teste preditivo (em pessoas sem sintomas) segue um protocolo próprio com aconselhamento genético e apoio psicológico.",
      "Tratamento sintomático: fármacos para a coreia (ex.: tetrabenazina — pode agravar a depressão), antipsicóticos, antidepressivos; fisioterapia, terapia da fala e ocupacional."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Nutrição: a coreia aumenta muito o gasto energético — refeições frequentes e hipercalóricas, pesar regularmente, suplementos conforme dietista.",
      "Disfagia: rastreio e técnica segura; supervisão das refeições.",
      "Segurança: cama baixa, proteções almofadadas, cadeira estável; evitar contenção física (agrava a agitação e as lesões).",
      "Comunicação: ambiente calmo, rotinas, dar tempo para responder, uma informação de cada vez.",
      "Avaliar o humor e a ideação suicida; comunicar alterações.",
      "Apoio à família e ao cuidador; articulação com serviço social, cuidados continuados e associação de doentes."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Ideação ou comportamento suicida: não deixar sozinho, comunicar de imediato.",
      "Perda de peso rápida, engasgamento frequente, febre: risco de desnutrição e aspiração.",
      "Sonolência excessiva, rigidez nova ou febre após iniciar/ajustar antipsicóticos (possível síndrome maligna dos neurolépticos)."
    ]}
  ]
},
{
  id: "lyme", cap: null, parte: "p4", icone: "🕷️",
  titulo: "Doença de Lyme (neuroborreliose)",
  pags: null,
  resumo: "Infeção por bactérias do complexo Borrelia burgdorferi transmitida por picada de carraça. Em Portugal, a neuroborreliose de Lyme é de declaração obrigatória e a doença está provavelmente subdiagnosticada; o atingimento neurológico trata-se bem com antibiótico.",
  seccoes: [
    { t: "Como se manifesta", itens: [
      "Transmissão pela picada de carraça (Ixodes ricinus) — atividades em zonas rurais, florestais ou com vegetação alta. Muitos doentes não se lembram da picada. Não se transmite entre pessoas.",
      "Fase localizada (dias a semanas): eritema migrans — mancha avermelhada que alastra em anel a partir do local da picada.",
      "Neuroborreliose (semanas a meses): dor radicular intensa, pior à noite, com ou sem défice motor (síndrome de Bannwarth); paralisia facial periférica, por vezes bilateral; meningite linfocítica (cefaleia, febre baixa).",
      "Outras manifestações: cardite (bloqueios auriculoventriculares), artrite, lesões cutâneas tardias; raramente encefalomielite."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Diagnóstico clínico e epidemiológico, confirmado por serologia e análise do LCR (pleocitose linfocítica, produção intratecal de anticorpos).",
      "Antibiótico durante cerca de 2–3 semanas — por via oral ou endovenosa conforme o quadro e a prescrição.",
      "No início do antibiótico pode haver agravamento transitório (febre, mal-estar) — vigiar e comunicar.",
      "A neuroborreliose de Lyme é de declaração obrigatória — notificação pelo médico no SINAVE."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Na colheita de dados: perguntar por picada de carraça, mancha na pele, atividades ao ar livre e viagens.",
      "Dor radicular: avaliar com escala, analgesia conforme prescrição, posicionamento; reavaliar sobretudo à noite.",
      "Paralisia facial: proteção ocular (ver «Paralisia facial periférica»).",
      "Se houver suspeita de cardite: monitorização/ECG conforme prescrição; comunicar tonturas, síncope ou bradicardia.",
      "Administração e adesão ao antibiótico até ao fim; vigiar reações e diarreia.",
      "Ensino de prevenção: roupa clara e comprida, repelente, inspecionar o corpo após atividades ao ar livre; retirar a carraça cedo com pinça fina, junto à pele, puxando de forma firme e contínua, sem esmagar e sem aplicar óleo, álcool ou calor; vigiar o local durante 30 dias."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Síncope, bradicardia ou bloqueio no ECG (cardite).",
      "Fraqueza progressiva dos membros, alteração da consciência ou rigidez da nuca marcada."
    ]}
  ]
},
{
  id: "autoimunes", cap: null, parte: "p4", icone: "🛡️",
  titulo: "Doenças autoimunes e o sistema nervoso",
  pags: null,
  resumo: "Nas doenças autoimunes o sistema imunitário, que devia defender o corpo de vírus e bactérias, ataca as próprias células. Há mais de 100, e muitas atingem o sistema nervoso — diretamente (esclerose múltipla, miastenia, Guillain-Barré) ou como parte de uma doença sistémica (lúpus, vasculites, Sjögren). Os tratamentos imunológicos exigem cuidados de enfermagem específicos.",
  subtemas: [
    {nome: "Esclerose múltipla", tema: "esclerose-multipla"},
    {nome: "Neuromielite ótica e doença anti-MOG", tema: "nmo"},
    {nome: "Encefalites autoimunes", tema: "encefalite-autoimune"},
    {nome: "Miastenia gravis", tema: "miastenia-gravis"},
    {nome: "Síndrome de Guillain-Barré", tema: "sgb"},
    {nome: "Vasculites", tema: "vasculites"},
    {nome: "Neurossarcoidose", tema: "neurossarcoidose"},
    {nome: "Lúpus, Sjögren, Behçet e outras", procura: "Lúpus eritematoso sistémico"}
  ],
  seccoes: [
    { t: "O essencial", itens: [
      "As causas exatas não são conhecidas; contribuem a genética, o tabaco e o excesso de peso; são mais frequentes nas mulheres.",
      "Evoluem muitas vezes por fases: períodos de atividade (surtos) alternados com períodos de acalmia, com poucos ou nenhuns sintomas.",
      "Sintomas gerais precoces: cansaço sem explicação, dores musculares, febre baixa, dor ou inchaço das articulações; sinais de inflamação (rubor, calor, dor, edema).",
      "A mesma pessoa pode ter mais do que uma doença autoimune (ex.: miastenia com doença da tiroide).",
      "O diagnóstico pode demorar: os sintomas sobrepõem-se a outras doenças e juntam-se a clínica, análises (autoanticorpos), LCR, imagem e EMG.",
      "A maioria pode ser tratada de forma a permitir boa qualidade de vida."
    ]},
    { t: "Doenças autoimunes com atingimento neurológico", tabela: {
      cab: ["Doença", "O que atinge", "Na app"],
      lin: [
        ["Esclerose múltipla", "Mielina do cérebro, nervo ótico e medula", "Esclerose múltipla, neuromielite ótica e ADEM"],
        ["Neuromielite ótica (anti-AQP4) e doença anti-MOG", "Nervo ótico e medula; área postrema", "Esclerose múltipla, neuromielite ótica e ADEM (secção MOGAD)"],
        ["Encefalites autoimunes (anti-NMDA, anti-LGI1…)", "Cérebro — memória, comportamento, crises", "Encefalites autoimunes"],
        ["Miastenia gravis; síndrome de Lambert-Eaton", "Junção neuromuscular", "Miopatias e miastenia"],
        ["Guillain-Barré; PDIC", "Nervos periféricos e raízes", "Neuropatias periféricas"],
        ["Miopatias inflamatórias", "Músculo", "Miopatias e miastenia"],
        ["Vasculites (incluindo arterite de células gigantes)", "Vasos do cérebro, nervos, olho", "Vasculites do sistema nervoso central"],
        ["Lúpus eritematoso sistémico; síndrome antifosfolipídica", "Cérebro (crises, psicose, AVC, trombose venosa), nervos", "Manifestações neurológicas nas doenças sistémicas"],
        ["Síndrome de Sjögren", "Nervos sensitivos (neuropatia), por vezes cérebro e medula", "Manifestações neurológicas nas doenças sistémicas"],
        ["Doença de Behçet", "Vasos do cérebro, meninges, tronco cerebral", "Vasculites do sistema nervoso central"],
        ["Sarcoidose (neurossarcoidose)", "Meninges, nervos cranianos (ex.: paralisia facial), hipófise, medula", "Neurossarcoidose"],
        ["Doença celíaca", "Cerebelo (ataxia), nervos", "Ataxias cerebelosas"],
        ["Doenças autoimunes da tiroide (Hashimoto, Graves)", "Músculo, olhos; associação com miastenia", "Manifestações neurológicas nas doenças sistémicas"],
        ["Diabetes tipo 1", "Nervos (neuropatia); hipoglicemias simulam défices", "Neuropatias periféricas"],
        ["Síndromes paraneoplásicas", "Qualquer parte do sistema nervoso, associadas a cancro", "Encefalites autoimunes"]
      ],
      nota: "Outras doenças autoimunes (artrite reumatoide, doença inflamatória intestinal, psoríase) também podem associar-se a alterações neurológicas ou a tratamentos com efeitos neurológicos."
    }},
    { t: "Tratamentos imunológicos — cuidados de enfermagem", itens: [
      "Antes de iniciar imunossupressão: confirmar os rastreios pedidos (hepatites B e C, VIH, tuberculose latente, varicela-zóster; teste de gravidez se aplicável) e a situação vacinal; as vacinas devem idealmente ser feitas semanas antes de iniciar; vacinas vivas estão contraindicadas durante o tratamento e algum tempo depois — confirmar com o médico.",
      "Corticoides (pulsos ou orais): glicemia, TA, sono, humor, proteção gástrica e óssea conforme prescrição; após tratamento prolongado, desmame conforme prescrição — nunca suspender bruscamente. Na miastenia, o início em dose alta pode agravar transitoriamente a fraqueza — vigiar deglutição e respiração.",
      "Imunoglobulina IV: ritmo de perfusão crescente conforme protocolo; vigiar febre, arrepios, cefaleia, rubor, hipotensão; hidratação; atenção, até 2–3 dias depois, a cefaleia intensa com rigidez da nuca (meningite assética); sinais de trombose (défice neurológico novo, dor torácica, dor ou edema de um membro), com maior risco em idosos e doentes imobilizados; função renal e débito urinário; urina escura ou anemia (hemólise); dispneia.",
      "Plasmaférese: cuidados ao cateter venoso central; vigiar hipotensão e sinais de hipocalcemia (formigueiros à volta da boca e nos dedos, cãibras); alguns fármacos são removidos (incluindo imunoglobulina e anticorpos monoclonais) — confirmar o horário das tomas em relação à sessão. Os IECA são habitualmente suspensos 24–48 h antes (risco de hipotensão grave e rubor) — confirmar com o médico. Vigiar hemorragia (perda de fatores da coagulação, sobretudo com sessões em dias seguidos).",
      "Anticorpos monoclonais (ex.: rituximab, ocrelizumab, natalizumab, inibidores do complemento, inibidores do recetor FcRn): pré-medicação e vigilância durante e após a perfusão conforme protocolo.",
      "Inibidores do complemento (ex.: eculizumab, ravulizumab, zilucoplan): vacinação contra o meningococo (ACWY e B) pelo menos 2 semanas antes de iniciar; se for preciso iniciar antes, profilaxia antibiótica conforme prescrição até 2 semanas após a vacina. A vacina não elimina o risco. Entregar cartão de alerta — febre ou cefaleia intensa são urgência, mesmo em doente vacinado.",
      "Imunossupressores orais (ex.: azatioprina, micofenolato, metotrexato): análises regulares conforme prescrição; o micofenolato e o metotrexato são teratogénicos — contraceção eficaz e planeamento da gravidez com o médico.",
      "Metotrexato oral nas doenças autoimunes: uma toma por semana, num dia fixo — confirmar o dia na reconciliação terapêutica e na prescrição; tomas diárias por engano podem ser fatais.",
      "Natalizumab e outros imunomoduladores: vigiar sinais de leucoencefalopatia multifocal progressiva (défices novos e progressivos, alterações cognitivas ou visuais)."
    ]},
    { t: "Ensino e estilo de vida", itens: [
      "Reconhecer os sinais de surto ou agravamento da sua doença e quando contactar a equipa.",
      "Adesão à terapêutica e às análises de vigilância; não suspender fármacos por conta própria.",
      "Prevenir infeções: higiene das mãos, vacinação recomendada, procurar ajuda cedo se febre.",
      "Algumas doenças autoimunes (ex.: lúpus, artrite reumatoide, artrite psoriática) aumentam o risco cardiovascular: controlar TA e colesterol, alimentação equilibrada, exercício regular, não fumar.",
      "Gerir a fadiga: planear o dia com pausas; sono regular.",
      "Mulheres em idade fértil: planear a gravidez com a equipa (alguns fármacos têm de ser trocados)."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Febre ou sinais de infeção em doente imunossuprimido — mesmo sem febre se estiver com fármacos que a mascaram (ex.: tocilizumab, corticoides): comunicar de imediato.",
      "Durante perfusões (imunoglobulina, anticorpos monoclonais): dispneia, broncospasmo, urticária, hipotensão — parar a perfusão e atuar segundo o protocolo de anafilaxia.",
      "Doente sob inibidor do complemento com febre, cefaleia ou exantema: possível infeção meningocócica — emergência.",
      "Agravamento rápido da força, da deglutição ou da respiração (miastenia, Guillain-Barré): vigilância respiratória e comunicar de imediato.",
      "Plasmaférese: formigueiros peribucais, cãibras ou tetania (hipocalcemia), hipotensão."
    ]}
  ]
},
{
  id: "encefalite-autoimune", cap: null, parte: "p4", icone: "🛡️",
  titulo: "Encefalites autoimunes",
  pags: null,
  resumo: "Inflamação do cérebro causada por anticorpos contra o próprio tecido nervoso. Podem simular doença psiquiátrica e são tratáveis — o diagnóstico precoce muda o prognóstico.",
  subtemas: [
    {nome: "Encefalite anti-NMDA", procura: "Anti-NMDA:"},
    {nome: "Encefalite anti-LGI1", procura: "Anti-LGI1:"},
    {nome: "Encefalites paraneoplásicas", procura: "Encefalites paraneoplásicas"}
  ],
  seccoes: [
    { t: "Formas mais frequentes", itens: [
      "Anti-NMDA: sobretudo mulheres jovens; alterações psiquiátricas e do comportamento, crises, alteração da consciência, movimentos involuntários (sobretudo da boca e da face), instabilidade autonómica e hipoventilação. Pode associar-se a teratoma do ovário.",
      "Anti-LGI1: sobretudo adultos mais velhos; perda de memória, confusão, crises breves e muito frequentes com contração da face e do braço (crises distónicas faciobraquiais), hiponatremia.",
      "Encefalites paraneoplásicas: associadas a cancro (ex.: pulmão) — pior resposta ao tratamento."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "LCR, RM, EEG, pesquisa de anticorpos no sangue e no LCR, procura de tumor.",
      "Imunoterapia precoce: corticoides, imunoglobulina IV e/ou plasmaférese; depois, nas formas graves, outros imunossupressores; remoção do tumor quando existe.",
      "A recuperação pode ser lenta (meses) e exige reabilitação."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Segurança: agitação, alucinações e crises — ambiente calmo, vigilância próxima, cama baixa; contenção só como último recurso. Os antipsicóticos podem agravar o quadro (rigidez, febre, instabilidade autonómica, semelhante à síndrome maligna dos neurolépticos) — se prescritos, vigiar temperatura, rigidez e CK.",
      "Registo das crises e dos movimentos anómalos (hora, duração, descrição; vídeo se o protocolo permitir).",
      "Vigilância autonómica: FC, TA, temperatura, respiração; balanço hídrico e natremia (anti-LGI1).",
      "Cuidados durante imunoglobulina, plasmaférese e corticoides (ver temas respetivos).",
      "Apoio à família: o quadro assusta e parece «psiquiátrico» — explicar que é uma doença neurológica tratável."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Crises repetidas ou estado de mal; diminuição da consciência.",
      "Hipoventilação, bradicardia ou pausas cardíacas, oscilações extremas de TA ou temperatura."
    ]}
  ]
},
{
  id: "encefalopatia-hepatica", cap: null, parte: "p4", icone: "🟡",
  titulo: "Encefalopatia hepática",
  pags: null,
  resumo: "Disfunção cerebral provocada por insuficiência hepática ou derivação do sangue portal. Vai de alterações subtis do sono e da atenção até ao coma. Quase sempre há um fator precipitante — identificá-lo e tratá-lo é tão importante como o tratamento específico.",
  seccoes: [
    { t: "Como se manifesta (graus de West Haven)", tabela: {
      cab: ["Grau", "O que se observa"],
      lin: [
        ["Mínima", "Sem sinais ao exame clínico; só detetada em testes neuropsicológicos"],
        ["Grau I", "Alterações subtis da atenção e do cálculo, inversão do ritmo sono-vigília, ansiedade ou euforia; o doente parece «quase normal»"],
        ["Grau II", "Sonolência, desorientação no tempo, comportamento inadequado, asterixis («flapping»)"],
        ["Grau III", "Muito sonolento mas responde a estímulos, confusão marcada, desorientação no espaço"],
        ["Grau IV", "Coma"]
      ],
      nota: "Registar o grau a cada avaliação para ver a tendência."
    }},
    { t: "Fatores precipitantes", itens: [
      "Infeções (incluindo peritonite bacteriana espontânea, urinária, respiratória).",
      "Hemorragia digestiva.",
      "Obstipação.",
      "Desidratação e diuréticos em excesso; hipocaliemia e hiponatremia; insuficiência renal.",
      "Sedativos e opioides (sobretudo benzodiazepinas).",
      "Consumo de álcool; procedimentos (ex.: TIPS); não adesão à lactulose."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Diagnóstico clínico, depois de excluir outras causas de alteração da consciência: hipoglicemia, intoxicações, Wernicke, crises não convulsivas e hematoma subdural (frequente nestes doentes: quedas e alteração da coagulação).",
      "Tratar o fator precipitante.",
      "Lactulose ajustada para 2–3 dejeções moles por dia; rifaximina para prevenir recorrências, conforme prescrição.",
      "Não restringir proteínas por rotina: a desnutrição agrava o prognóstico."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Avaliar e registar o grau de encefalopatia, o estado de consciência e a asterixis a cada turno.",
      "Registo diário de dejeções (número e consistência): menos de 2 por dia ou diarreia excessiva → comunicar para ajustar a lactulose; vigiar desidratação e potássio.",
      "Balanço hídrico, peso, sinais de hemorragia digestiva (melenas, hematemeses) e de infeção.",
      "Glicemia capilar: hipoglicemia frequente na doença hepática avançada.",
      "Se for pedida amónia: colher sem garrote prolongado, colocar em gelo e enviar de imediato ao laboratório. Uma amónia normal torna o diagnóstico pouco provável e deve levar a pensar noutra causa. Um valor alto, só por si, não confirma o diagnóstico.",
      "Evitar sedativos; se o doente estiver agitado, procurar primeiro a causa e falar com o médico.",
      "Nutrição: refeições pequenas e frequentes, incluindo uma ceia tardia; rastreio de disfagia nos graus mais avançados.",
      "Segurança: quedas, aspiração (graus III–IV: posição lateral, proteção da via aérea), pele.",
      "Graus III–IV ou deglutição insegura: nada por boca; lactulose por sonda nasogástrica ou em enema, conforme prescrição. Não insistir na via oral.",
      "Ensino ao doente e família: tomar a lactulose todos os dias, reconhecer os primeiros sinais (troca do dia pela noite, confusão ligeira), não conduzir, abstinência alcoólica."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Agravamento do grau, sobretudo para III–IV: risco para a via aérea — comunicar de imediato.",
      "Melenas, hematemeses, hipotensão ou taquicardia (hemorragia digestiva).",
      "Febre, dor abdominal ou aumento da ascite (infeção).",
      "Assimetria pupilar ou défice focal: não é típico da encefalopatia hepática — pensar em hematoma subdural ou AVC."
    ]}
  ]
},
{
  id: "dnm", cap: null, parte: "p4", icone: "⚡",
  titulo: "Esclerose lateral amiotrófica (ELA) e doença do neurónio motor",
  pags: null,
  resumo: "Doença neurodegenerativa progressiva dos neurónios motores superior e inferior. A sobrevivência e a qualidade de vida dependem muito dos cuidados: ventilação, nutrição, comunicação e planeamento antecipado. Os cuidados detalhados estão no tema «ELA e doente neuromuscular: respiração, VNI e traqueostomia».",
  seccoes: [
    { t: "O essencial", itens: [
      "ELA é a forma mais frequente de doença do neurónio motor; início habitual após os 50 anos.",
      "Início nos membros (fraqueza, atrofia, fasciculações, cãibras, espasticidade) ou bulbar (disartria, disfagia, sialorreia) — o início bulbar tem pior prognóstico.",
      "Sinais de neurónio motor superior e inferior em simultâneo, sem alterações sensitivas; movimentos oculares e esfíncteres habitualmente preservados.",
      "Parte dos doentes tem alterações cognitivas ou do comportamento (demência frontotemporal); pode haver riso ou choro involuntários.",
      "Cerca de 10% são formas familiares (ex.: genes C9orf72, SOD1).",
      "Sobrevivência mediana de cerca de 2 a 4 anos desde o início dos sintomas, com grande variação."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Diagnóstico clínico com EMG; RM e análises para excluir outras causas; estudo genético quando indicado.",
      "Riluzol (prolonga modestamente a sobrevivência) — vigiar função hepática e sinais de infeção conforme prescrição.",
      "Tofersen (administração intratecal por punção lombar) para a ELA associada a mutação SOD1, aprovado na UE em 2024.",
      "VNI e gastrostomia no momento certo melhoram a sobrevivência e a qualidade de vida; seguimento por equipa multidisciplinar e cuidados paliativos precoces."
    ]},
    { t: "Cuidados de enfermagem (resumo)", itens: [
      "Vigilância respiratória: ortopneia, sono fragmentado, cefaleia matinal, sonolência diurna, tosse fraca.",
      "Disfagia, sialorreia e perda de peso: rastreio, consistências, pesagem regular, gastrostomia planeada a tempo.",
      "Comunicação aumentativa planeada antes de a fala se perder; campainha adaptada.",
      "Diretivas antecipadas de vontade, apoio ao cuidador, articulação com a associação de doentes (APELA).",
      "Detalhe completo: tema «ELA e doente neuromuscular: respiração, VNI e traqueostomia»."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Dispneia em repouso, respiração paradoxal, sonolência ou confusão nova (hipercapnia).",
      "Oxigénio sem ventilação pode agravar a retenção de CO2 — só com indicação e vigilância."
    ]}
  ]
},
{
  id: "hpn", cap: null, parte: "p4", icone: "💧",
  titulo: "Hidrocefalia de pressão normal",
  pags: null,
  resumo: "Acumulação de LCR nos ventrículos em adultos mais velhos, com a tríade de alteração da marcha, incontinência urinária e défice cognitivo. É uma das causas de demência potencialmente tratáveis.",
  seccoes: [
    { t: "O essencial", itens: [
      "Marcha lenta, de pequenos passos, base alargada e pés «colados ao chão» — é habitualmente o primeiro sintoma.",
      "Urgência e incontinência urinária.",
      "Lentificação, apatia, dificuldade de atenção.",
      "Pode ser confundida com Parkinson, demência ou simplesmente «idade»."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Imagem (ventrículos dilatados).",
      "Punção lombar evacuadora («tap test»): retirar LCR e comparar a marcha e a cognição antes e depois.",
      "Tratamento: derivação ventriculoperitoneal (DVP), habitualmente com válvula programável."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "No «tap test»: avaliar e registar a marcha antes e nas horas seguintes à punção, sempre com o mesmo método (ex.: tempo e número de passos em 10 m, ou o teste Timed Up and Go), e os cuidados habituais após punção lombar.",
      "Prevenção de quedas e programa de micção.",
      "Após DVP: vigilância neurológica, ferida operatória e trajeto do cateter (cabeça, pescoço, abdómen), dor, febre.",
      "Válvulas programáveis: a RM e ímanes fortes podem alterar a programação — confirmar o protocolo de verificação após RM; o doente deve ter consigo a informação do modelo da válvula."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Após DVP: cefaleia, vómitos, sonolência ou regressão dos sintomas (disfunção da derivação).",
      "Cefaleia que agrava em pé (hiperdrenagem) ou novo défice (hematoma subdural).",
      "Febre, rubor no trajeto do cateter ou dor abdominal (infeção)."
    ]}
  ]
},
{
  id: "hii", cap: null, parte: "p4", icone: "👁️",
  titulo: "Hipertensão intracraniana idiopática",
  pags: null,
  resumo: "Aumento da pressão intracraniana sem lesão ocupante de espaço, sobretudo em mulheres em idade fértil com excesso de peso. O grande risco é a perda de visão permanente.",
  seccoes: [
    { t: "O essencial", itens: [
      "Cefaleia, acufenos pulsáteis («ouvir o coração»), perdas transitórias de visão ao mudar de posição, diplopia (parésia do VI par).",
      "Papiledema no exame do fundo do olho.",
      "Fatores associados: obesidade e aumento de peso recente; alguns fármacos (ex.: tetraciclinas, retinoides, excesso de vitamina A)."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "RM e venografia (excluir trombose venosa cerebral e tumores), avaliação oftalmológica com campos visuais.",
      "Punção lombar com pressão de abertura elevada e LCR normal.",
      "Tratamento: perda de peso, acetazolamida ou outros fármacos; cirurgia (derivação de LCR, stent do seio venoso, fenestração da bainha do nervo ótico) se a visão estiver ameaçada."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Punção lombar: para medir a pressão, decúbito lateral com as pernas estendidas no momento da medição, doente relaxado.",
      "Acetazolamida: ensinar sobre formigueiros nas mãos e pés, sabor alterado das bebidas gaseificadas, cansaço, hidratação; comunicar dor lombar ou sangue na urina (cálculos renais); informar se gravidez ou alergia a sulfonamidas; vigiar potássio conforme prescrição.",
      "Apoio à perda de peso: articulação com nutrição; abordagem sem culpabilização.",
      "Ensino: cumprir as consultas de oftalmologia; registar as cefaleias."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Diminuição da visão ou agravamento das perdas transitórias de visão: comunicar de imediato (risco de perda visual irreversível).",
      "Cefaleia muito intensa e progressiva, vómitos repetidos."
    ]}
  ]
},
{
  id: "imunodeprimido", cap: null, parte: "p4", icone: "🧷",
  titulo: "Infeções do SNC no imunodeprimido (VIH, LMP) e neurossífilis",
  pags: null,
  resumo: "No doente com imunodepressão (VIH, transplante, quimioterapia, imunossupressores) surgem infeções oportunistas com sinais discretos. A neurossífilis voltou a ser frequente e tem várias formas de apresentação.",
  subtemas: [
    {nome: "Toxoplasmose cerebral", procura: "Toxoplasmose cerebral"},
    {nome: "Meningite criptocócica", procura: "Meningite criptocócica"},
    {nome: "Leucoencefalopatia multifocal progressiva (LMP)", procura: "Leucoencefalopatia multifocal"},
    {nome: "Linfoma primário do SNC", procura: "Linfoma primário do SNC"},
    {nome: "Síndrome inflamatória de reconstituição imune", procura: "Síndrome inflamatória de reconstituição"},
    {nome: "Neurossífilis", procura: "Neurossífilis:"}
  ],
  seccoes: [
    { t: "Quadros a conhecer", itens: [
      "Toxoplasmose cerebral: lesões múltiplas com défices focais, crises, febre — doente com VIH muito imunodeprimido.",
      "Meningite criptocócica: cefaleia, febre, alterações visuais; muitas vezes com pressão do LCR muito elevada que obriga a punções lombares evacuadoras repetidas.",
      "Leucoencefalopatia multifocal progressiva (LMP): infeção pelo vírus JC com défices progressivos (fraqueza, alterações visuais, cognitivas) — no VIH e com alguns imunomoduladores (ex.: natalizumab).",
      "Linfoma primário do SNC.",
      "Síndrome inflamatória de reconstituição imune: agravamento paradoxal semanas após iniciar antirretrovirais.",
      "Neurossífilis: meningite, AVC em jovens, alterações psiquiátricas/demência, perda de visão ou audição, alteração da sensibilidade e da marcha nas formas tardias."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Imagem, LCR (com pressão de abertura), serologias e PCR; contagem de linfócitos CD4 e carga viral no VIH.",
      "Tratamento dirigido (antimicrobianos, antifúngicos), terapêutica antirretroviral, suspensão do imunomodulador na LMP.",
      "Neurossífilis: penicilina endovenosa durante 10 a 14 dias, conforme prescrição; testar o VIH e outras infeções sexualmente transmissíveis."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Precauções padrão; se houver suspeita de tuberculose pulmonar associada (a meningite tuberculosa é frequente no VIH), precauções de via aérea até exclusão, conforme a CCI (PPCIRA); confidencialidade rigorosa sobre o diagnóstico.",
      "Horários rigorosos dos antimicrobianos e antirretrovirais; atenção a interações medicamentosas — confirmar com a farmácia.",
      "Meningite criptocócica: preparar e vigiar punções lombares repetidas; vigiar cefaleia e visão.",
      "Prevenção de infeção cruzada no doente muito imunodeprimido.",
      "Neurossífilis: nas primeiras horas de penicilina pode surgir febre, arrepios e mal-estar (reação de Jarisch-Herxheimer) — vigiar e comunicar.",
      "Ensino: adesão terapêutica, prevenção, comunicação aos parceiros com apoio da equipa/saúde pública."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Cefaleia progressiva, vómitos, alteração visual ou da consciência (hipertensão intracraniana).",
      "Agravamento neurológico após iniciar antirretrovirais.",
      "Crises convulsivas."
    ]}
  ]
},
{
  id: "mielopatias", cap: null, parte: "p4", icone: "🦴",
  titulo: "Lesão medular e mielopatias (mielite transversa, compressão medular)",
  pags: null,
  resumo: "Doenças da medula espinal — inflamatórias, compressivas, vasculares, carenciais ou traumáticas. Causam fraqueza, alteração da sensibilidade abaixo de um nível e alterações vesicais e intestinais; algumas são emergências cirúrgicas.",
  subtemas: [
    {nome: "Mielite transversa", procura: "Mielite transversa"},
    {nome: "Compressão medular", procura: "Compressão medular"},
    {nome: "Enfarte medular", procura: "Enfarte medular"},
    {nome: "Défice de vitamina B12 ou de cobre", procura: "Défices de vitamina B12"}
  ],
  seccoes: [
    { t: "Causas e apresentação", itens: [
      "Mielite transversa: inflamação da medula (EM, neuromielite ótica, anticorpos anti-MOG, infeções, causa desconhecida) — instala-se em horas a dias.",
      "Compressão medular: metástases vertebrais, abcesso epidural, hérnia discal, traumatismo, hematoma — dor nas costas e défices progressivos.",
      "Enfarte medular: início súbito, por vezes após cirurgia da aorta.",
      "Défices de vitamina B12 ou de cobre: evolução lenta com alteração da marcha e da sensibilidade.",
      "Sinais: para ou tetraparésia, nível sensitivo no tronco, retenção ou incontinência urinária, obstipação, espasticidade (fase aguda pode ser flácida)."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "RM urgente de toda a coluna; LCR e análises conforme suspeita.",
      "Compressão neoplásica: corticoides e radioterapia ou cirurgia urgentes. Abcesso epidural: antibiótico endovenoso e, habitualmente, drenagem cirúrgica urgente — sem corticoides por rotina.",
      "Mielite: corticoides em dose alta, plasmaférese se não houver resposta; tratamento da causa.",
      "Reabilitação precoce."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Vigilância neurológica seriada: força nos 4 membros, nível sensitivo (marcar na pele com caneta se o protocolo o permitir), função esfincteriana.",
      "Lesões cervicais altas (C3–C5): vigilância respiratória como no Guillain-Barré.",
      "Traumatismo ou instabilidade da coluna: imobilização e mobilização em bloco conforme prescrição.",
      "Bexiga e intestino: cateterismo intermitente ou algaliação conforme indicação; programa intestinal (ver «Eliminação vesical e intestinal»).",
      "Pele: alto risco de úlceras por pressão (sem sensibilidade); reposicionamentos e superfícies adequadas.",
      "TVP, hipotensão ortostática, alteração da regulação da temperatura, dor neuropática, espasticidade.",
      "Apoio psicológico e ensino para a autonomia (autocateterismo, transferências, prevenção de complicações)."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Dor nas costas com fraqueza das pernas, nível sensitivo ou retenção urinária de novo: emergência — comunicar de imediato.",
      "Subida do nível sensitivo, fraqueza dos braços ou dificuldade respiratória.",
      "Disreflexia autonómica (lesão a nível de T6 ou acima): TA muito elevada, cefaleia intensa, rubor e sudação acima da lesão, por vezes bradicardia — sentar com as pernas pendentes (se a coluna estiver estável), desapertar roupa e meias, verificar a bexiga (algália dobrada ou obstruída, globo vesical) e o intestino, medir a TA a cada 2–5 minutos e chamar o médico de imediato."
    ]}
  ]
},
{
  id: "neurossarcoidose", cap: null, parte: "p4", icone: "🫁",
  titulo: "Neurossarcoidose",
  pags: null,
  resumo: "A sarcoidose é uma doença inflamatória que forma pequenos nódulos (granulomas) em vários órgãos — sobretudo pulmões, gânglios, pele e olhos. Em cerca de 5 a 10% dos doentes atinge o sistema nervoso; por vezes é a primeira manifestação. Responde muitas vezes ao tratamento imunossupressor, mas recai com frequência quando este é reduzido ou suspenso, e exige vigilância de complicações endócrinas, visuais e cardíacas.",
  seccoes: [
    { t: "Como se manifesta", itens: [
      "Nervos cranianos (a forma mais frequente): paralisia facial periférica, uni ou bilateral; nevrite ótica; alterações da audição ou do equilíbrio.",
      "Meningite crónica: cefaleia persistente, por vezes com febre baixa e alterações de outros nervos cranianos; pode causar hidrocefalia.",
      "Hipotálamo e hipófise: diabetes insípida (urina abundante e sede intensa), alterações hormonais, sono, apetite e temperatura.",
      "Cérebro e medula: crises epiléticas, défices focais, alterações cognitivas ou de comportamento; mielite com fraqueza, alterações sensitivas e esfincterianas.",
      "Nervos periféricos e músculo: neuropatia (incluindo neuropatia de fibras finas, com dor em queimadura e disautonomia), miopatia.",
      "Fora do sistema nervoso, a ter em conta: pulmões (tosse, dispneia), olhos (uveíte — olho vermelho, dor, visão turva), pele, coração (bloqueios e arritmias), cálcio elevado (confusão, poliúria, obstipação).",
      "Síndrome de Heerfordt: febre, inflamação das parótidas, uveíte e paralisia facial."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "RM do cérebro e da medula com contraste (inflamação das meninges e nódulos), LCR, TC do tórax ou PET para procurar sarcoidose noutros órgãos.",
      "Biópsia: a de outro órgão (pulmão, gânglio ou pele — mais acessíveis) com granulomas não caseosos torna o diagnóstico provável; só a biópsia do sistema nervoso o torna definitivo, e é reservada a casos selecionados.",
      "É preciso excluir outras causas que se parecem: tuberculose, infeções fúngicas, linfoma e outras doenças inflamatórias.",
      "Tratamento: corticoides; depois, para permitir reduzir o corticoide, imunossupressores (ex.: metotrexato, micofenolato, azatioprina); nos casos graves ou refratários, anti-TNF (ex.: infliximab), conforme prescrição."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Vigilância neurológica seriada, incluindo nervos cranianos e visão.",
      "Diabetes insípida: balanço hídrico rigoroso, débito urinário, densidade urinária e natremia conforme prescrição; garantir acesso livre a água no doente consciente; peso diário.",
      "Desmopressina (se prescrita): vigiar natremia e balanço — o excesso de líquidos pode causar hiponatremia grave. Com atingimento da hipófise pode haver insuficiência suprarrenal: nunca suspender o corticoide de forma abrupta; hipotensão, vómitos, hipoglicemia ou sódio baixo exigem contacto médico imediato.",
      "Paralisia facial: proteção ocular (ver «Paralisia facial periférica»).",
      "Corticoides e imunossupressores: ver os cuidados em «Doenças autoimunes e o sistema nervoso» (incluindo metotrexato uma vez por semana).",
      "Anti-TNF (ex.: infliximab): confirmar o rastreio de tuberculose latente e de hepatite B (e C) antes da 1.ª perfusão; confirmar que não há insuficiência cardíaca moderada a grave nem doença desmielinizante (contraindicações); sem vacinas vivas durante o tratamento; vigilância durante e após a perfusão conforme protocolo; prevenção de infeções.",
      "Se houver suspeita de atingimento cardíaco: monitorização/ECG conforme prescrição.",
      "Ensino: sinais de infeção, adesão à terapêutica, reconhecer sede e urina excessivas, olho vermelho ou doloroso, palpitações ou desmaios."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Cefaleia progressiva, vómitos, sonolência ou alteração visual (hipertensão intracraniana, hidrocefalia).",
      "Diurese muito abundante com sede intensa, confusão ou sódio alto (diabetes insípida descompensada) — sobretudo se o doente não conseguir beber.",
      "Olho vermelho, doloroso ou visão turva (uveíte, nevrite ótica): avaliação oftalmológica urgente.",
      "Síncope, palpitações ou bradicardia (sarcoidose cardíaca).",
      "Febre ou sinais de infeção em doente imunossuprimido; confusão, poliúria e obstipação (hipercalcemia)."
    ]}
  ]
},
{
  id: "trigemio", cap: null, parte: "p4", icone: "⚡",
  titulo: "Nevralgia do trigémio",
  pags: null,
  resumo: "Dor facial em choques elétricos breves e muito intensos, desencadeada por estímulos banais. Tem grande impacto na alimentação, na higiene e no humor.",
  seccoes: [
    { t: "O essencial", itens: [
      "Dor paroxística unilateral, tipo choque, com duração de segundos, no território do nervo trigémio (habitualmente nos ramos maxilar e/ou mandibular).",
      "Desencadeada por falar, mastigar, lavar os dentes, barbear, tocar na face ou pelo vento.",
      "Mais frequente após os 50 anos; habitualmente causada por compressão do nervo por um vaso.",
      "Formas secundárias: esclerose múltipla, tumores — suspeitar em pessoas jovens, com dor bilateral ou com défice sensitivo."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "RM para excluir causas secundárias.",
      "Fármacos antiepiléticos (ex.: carbamazepina, oxcarbazepina) como primeira linha.",
      "Se não houver resposta ou houver intolerância: cirurgia (descompressão microvascular) ou procedimentos percutâneos/radiocirurgia."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Avaliar a dor e os desencadeantes; não tocar na face sem avisar.",
      "Alimentação: alimentos moles, mornos, mastigar do lado não afetado; vigiar o peso e a hidratação — há doentes que deixam de comer por medo da dor.",
      "Higiene oral adaptada (escova macia, água morna, bochechos); proteger a face do vento e do frio.",
      "Carbamazepina/oxcarbazepina: ensinar a reconhecer erupção cutânea, febre e lesões das mucosas (reações graves raras), sonolência, tonturas, desequilíbrio; vigiar o sódio conforme prescrição.",
      "Humor: dor crónica intensa pode causar depressão e isolamento — avaliar e comunicar."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Erupção cutânea, febre e lesões das mucosas após iniciar o fármaco: suspender a toma seguinte e comunicar de imediato.",
      "Confusão, sonolência ou náuseas (hiponatremia, toxicidade).",
      "Défice sensitivo persistente ou outros sintomas neurológicos (causa secundária)."
    ]}
  ]
},
{
  id: "bell", cap: null, parte: "p4", icone: "🙂",
  titulo: "Paralisia facial periférica (de Bell)",
  pags: null,
  resumo: "Paralisia de toda uma hemiface por lesão do nervo facial. A maioria recupera bem; o essencial é distingui-la de um AVC e proteger o olho.",
  seccoes: [
    { t: "O essencial", itens: [
      "Periférica: atinge toda a hemiface, incluindo a testa (não consegue franzir a testa nem fechar o olho). No AVC (central), a testa é poupada.",
      "Pode ter dor atrás da orelha, alteração do paladar, hipersensibilidade ao som, olho seco ou lacrimejo.",
      "Paralisia de Bell: sem causa identificada (provavelmente viral), instalação rápida, em menos de 72 h.",
      "Outras causas: herpes zóster (síndrome de Ramsay Hunt — vesículas no ouvido, dor intensa, hipoacusia, vertigem), doença de Lyme, diabetes, otite, tumores, Guillain-Barré (bilateral)."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Diagnóstico clínico; exames se houver atipias (bilateral, recorrente, outros défices, sem melhoria aos 3 meses).",
      "Corticoide oral se iniciado nas primeiras 72 h; antiviral associado em casos selecionados (ex.: Ramsay Hunt), conforme prescrição.",
      "A maioria recupera total ou parcialmente em semanas a meses."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Proteção ocular: lágrima artificial durante o dia, gel/pomada e oclusão ou proteção ocular à noite, óculos de sol na rua; não tapar com compressa que possa tocar na córnea.",
      "Alimentação: mastigar do lado são, retirar restos de comida da bochecha afetada, higiene oral após as refeições.",
      "Corticoide: vigiar glicemia e TA nos doentes com diabetes ou hipertensão.",
      "Exercícios faciais suaves orientados por fisioterapia; evitar estimulação elétrica sem indicação.",
      "Imagem corporal: abordar o impacto emocional e explicar o prognóstico habitualmente favorável."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Testa poupada, fraqueza dos membros, alteração da fala ou outros défices: pode ser AVC — ativar Via Verde.",
      "Olho vermelho, doloroso ou com diminuição da visão (queratite de exposição).",
      "Vesículas no ouvido com dor intensa, hipoacusia ou vertigem (Ramsay Hunt)."
    ]}
  ]
},
{
  id: "paf", cap: null, parte: "p4", icone: "👣",
  titulo: "Paramiloidose (polineuropatia amiloidótica familiar, PAF/ATTRv)",
  pags: null,
  resumo: "Amiloidose hereditária por transtirretina, descrita no Norte de Portugal e conhecida como «doença dos pezinhos». A ULS de Santo António (Unidade Corino de Andrade) é centro de referência. Hoje existem terapêuticas que travam a progressão — o diagnóstico precoce é decisivo.",
  seccoes: [
    { t: "O essencial", itens: [
      "Doença genética autossómica dominante; em Portugal, a variante mais frequente é a Val30Met (V30M), com focos importantes na região da Póvoa de Varzim e Vila do Conde, entre outros.",
      "Nos focos portugueses, o início clássico é entre os 25 e os 35 anos, mas o início tardio (após os 50 anos) é cada vez mais frequente — a idade não exclui o diagnóstico.",
      "Polineuropatia que começa nos pés: perda da sensibilidade à dor e à temperatura, dor neuropática, depois fraqueza e alterações da marcha, progredindo para as mãos.",
      "Disautonomia: hipotensão ortostática, alternância de diarreia e obstipação, náuseas, perda de peso, disfunção sexual, retenção urinária.",
      "Atingimento do coração (perturbações da condução, cardiomiopatia), rim e olhos (opacidades do vítreo, glaucoma)."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Estudo genético, biópsia com pesquisa de amiloide, EMG, avaliação cardíaca, oftalmológica e renal.",
      "Terapêuticas modificadoras: estabilizadores da transtirretina (via oral) e silenciadores génicos (subcutâneos ou endovenosos, alguns com pré-medicação e vigilância de reações à perfusão); o transplante hepático foi o primeiro tratamento e ainda tem papel em casos selecionados.",
      "Seguimento por equipa multidisciplinar em centro de referência."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Pés e mãos sem sensibilidade térmica e dolorosa: inspeção diária, calçado adequado, testar a temperatura da água com termómetro, cuidado com sacos de água quente e aquecedores (queimaduras).",
      "Hipotensão ortostática: TA deitado e de pé, levante faseado, hidratação, meias de compressão se prescritas.",
      "Prevenção de quedas.",
      "Nutrição e eliminação: pesagem regular, registo de dejeções, gestão da diarreia/obstipação, vigilância da retenção urinária.",
      "Perfusões de silenciadores génicos: pré-medicação e vigilância durante a perfusão conforme protocolo. Os silenciadores baixam a vitamina A — reforçar a toma do suplemento prescrito e ensinar a comunicar alterações da visão noturna.",
      "Família: aconselhamento genético, teste preditivo com acompanhamento, planeamento familiar; apoio psicológico e associação de doentes."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Síncope, bradicardia ou nova alteração no ECG (perturbação da condução — pode precisar de pacemaker).",
      "Desidratação por diarreia, perda de peso rápida.",
      "Durante a perfusão: rubor, dispneia, dor torácica, hipotensão — parar e comunicar."
    ]}
  ]
},
{
  id: "parkinsonismos-atipicos", cap: null, parte: "p4", icone: "🚶",
  titulo: "Parkinsonismos atípicos (PSP, AMS, degenerescência corticobasal)",
  pags: null,
  resumo: "Doenças que se parecem com a doença de Parkinson mas evoluem mais depressa, respondem pouco à levodopa e trazem cedo quedas, disfagia e disautonomia.",
  subtemas: [
    {nome: "Paralisia supranuclear progressiva (PSP)", procura: "Paralisia supranuclear progressiva"},
    {nome: "Atrofia de múltiplos sistemas (AMS)", procura: "Atrofia de múltiplos sistemas"},
    {nome: "Degenerescência corticobasal", procura: "Degenerescência corticobasal"},
    {nome: "Demência com corpos de Lewy (DCL)", tema: "dcl"}
  ],
  seccoes: [
    { t: "Principais formas", itens: [
      "Paralisia supranuclear progressiva (PSP): quedas precoces, sobretudo para trás; dificuldade em olhar para baixo; rigidez do pescoço; disartria e disfagia; alterações do comportamento.",
      "Atrofia de múltiplos sistemas (AMS): disautonomia marcada (hipotensão ortostática grave, retenção ou incontinência urinária, disfunção sexual) com parkinsonismo e/ou ataxia; ressonar e estridor noturno; perturbação do comportamento do sono REM.",
      "Degenerescência corticobasal: sintomas muito assimétricos — rigidez e distonia de um membro, dificuldade em executar gestos (apraxia), mioclonias, por vezes o membro «parece não obedecer».",
      "Demência com corpos de Lewy: ver «Demência com corpos de Lewy (DCL)» no grupo Demências (A–Z) e o tema «Demências»."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Diagnóstico clínico, apoiado por RM e outros exames.",
      "Resposta fraca ou temporária à levodopa; tratamento sintomático (hipotensão ortostática, bexiga, sialorreia, distonia).",
      "Reabilitação e cuidados paliativos precoces."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Prevenção de quedas muito ativa (as quedas são precoces e graves).",
      "TA deitado e de pé; levante faseado; cabeceira elevada à noite se prescrito; hidratação.",
      "Rastreio de disfagia e técnica segura; vigilância de aspiração.",
      "Vigilância vesical (resíduo pós-miccional) e intestinal.",
      "Comunicação e cognição: dar tempo; ambiente estruturado.",
      "Os fármacos a evitar no Parkinson aplicam-se igualmente (antipsicóticos típicos, metoclopramida)."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Estridor respiratório (ruído agudo na inspiração), sobretudo noturno, na AMS: comunicar — risco de obstrução da via aérea.",
      "Síncopes repetidas por hipotensão ortostática.",
      "Engasgamento frequente, febre ou dessaturação (aspiração)."
    ]}
  ]
},
{
  id: "pres", cap: null, parte: "p4", icone: "🌡️",
  titulo: "PRES — síndrome de encefalopatia posterior reversível",
  pags: null,
  resumo: "Edema cerebral, sobretudo nas regiões posteriores, associado a subidas bruscas da TA, eclâmpsia, insuficiência renal ou alguns fármacos. Geralmente reversível se a causa for corrigida a tempo.",
  seccoes: [
    { t: "O essencial", itens: [
      "Cefaleia, alterações visuais (visão turva, perda de visão de origem cortical), crises epiléticas, confusão ou sonolência.",
      "Fatores: hipertensão grave ou flutuações bruscas da TA, pré-eclâmpsia/eclâmpsia, insuficiência renal, imunossupressores (ex.: ciclosporina, tacrolimus), quimioterapia, doenças autoimunes, sépsis.",
      "Diagnóstico por RM."
    ]},
    { t: "Tratamento (visão geral)", itens: [
      "Descida controlada da TA até ao alvo prescrito (evitar descidas bruscas).",
      "Tratamento das crises; suspensão ou ajuste do fármaco causal.",
      "Na eclâmpsia: sulfato de magnésio e articulação com a obstetrícia."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "TA frequente conforme prescrição; registar a resposta aos anti-hipertensores.",
      "Vigilância neurológica e da visão; segurança (o doente pode não ver).",
      "Crises: precauções e registo (ver «Epilepsia»).",
      "Sulfato de magnésio: vigiar reflexos, frequência respiratória, diurese e sinais de toxicidade conforme protocolo.",
      "Rever com o médico os fármacos de risco."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Crises repetidas ou diminuição da consciência.",
      "Perda súbita de visão.",
      "Na terapêutica com magnésio: depressão respiratória, reflexos abolidos, oligúria — parar a perfusão e chamar o médico; ter gluconato de cálcio disponível conforme protocolo."
    ]}
  ]
},
{
  id: "tvc", cap: null, parte: "p4", icone: "🩸",
  titulo: "Trombose venosa cerebral",
  pags: null,
  resumo: "Trombose dos seios venosos ou das veias cerebrais, mais frequente em mulheres jovens. Apresenta-se de forma variável — da cefaleia isolada ao coma — e trata-se com anticoagulação.",
  seccoes: [
    { t: "O essencial", itens: [
      "Cefaleia progressiva (por vezes pior deitado ou com esforço), crises epiléticas, défices focais, alterações visuais por hipertensão intracraniana, alteração da consciência.",
      "Fatores: contraceção hormonal, gravidez e puerpério, trombofilias, cancro, infeções da cabeça e pescoço, desidratação, doenças inflamatórias.",
      "Pode associar-se a hemorragia cerebral."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "Angio-TC ou angio-RM venosa.",
      "Anticoagulação (heparina na fase aguda, depois anticoagulante oral) — indicada mesmo quando há hemorragia associada, por decisão médica.",
      "Tratamento das crises e da hipertensão intracraniana; tratamento endovascular ou cirúrgico em casos graves selecionados."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Vigilância neurológica seriada, incluindo visão.",
      "Anticoagulação: horários, controlo analítico conforme prescrição, vigilância de hemorragia.",
      "Precauções para crises; hidratação adequada.",
      "Ensino: adesão ao anticoagulante, contraceção (a hormonal combinada está habitualmente contraindicada — orientação médica), planeamento de gravidez futura."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Agravamento da cefaleia, vómitos, diminuição da consciência ou novo défice (hemorragia ou hipertensão intracraniana).",
      "Crises repetidas.",
      "Hemorragia em doente anticoagulado."
    ]}
  ]
},
{
  id: "tumores", cap: null, parte: "p4", icone: "🎗️",
  titulo: "Tumores do sistema nervoso central",
  pags: null,
  resumo: "Tumores primários (gliomas, meningiomas, linfoma) e metástases cerebrais. Os cuidados incluem a gestão de corticoides e antiepiléticos, a vigilância após craniotomia e uma abordagem paliativa centrada no doente e na família.",
  subtemas: [
    {nome: "Metástases cerebrais", procura: "Metástases"},
    {nome: "Gliomas (incluindo glioblastoma)", procura: "gliomas"},
    {nome: "Meningiomas", procura: "meningiomas"},
    {nome: "Linfoma primário do SNC", procura: "linfoma"}
  ],
  seccoes: [
    { t: "O essencial", itens: [
      "Metástases (pulmão, mama, melanoma, rim, cólon) são os tumores cerebrais mais frequentes no adulto.",
      "Primários: gliomas (incluindo glioblastoma, o mais agressivo), meningiomas (habitualmente benignos), linfoma primário do SNC.",
      "Sintomas: cefaleia, crises epiléticas, défices focais, alterações cognitivas e de personalidade, sinais de hipertensão intracraniana."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "RM com contraste; biópsia ou cirurgia para diagnóstico.",
      "Corticoides para o edema (na suspeita de linfoma, o médico pode adiá-los até à biópsia — confirmar com o médico antes de administrar a primeira dose).",
      "Cirurgia, radioterapia e quimioterapia conforme o tipo; antiepiléticos se houver crises."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Corticoides: glicemia, TA, insónia, agitação, infeções (incluindo candidíase oral), fraqueza muscular proximal; nunca suspender bruscamente — desmame conforme prescrição.",
      "Crises: precauções e ensino à família.",
      "Após craniotomia: vigilância neurológica e de sinais vitais seriada, penso e saída de líquido claro (LCR), dor, náuseas, febre, posicionamento da cabeceira conforme indicação.",
      "Balanço hídrico e natremia após cirurgia da região hipofisária/suprasselar (risco de diabetes insípida ou SIADH).",
      "Alto risco de TVP: profilaxia conforme prescrição e mobilização precoce.",
      "Comunicação e apoio: informação gradual, envolver a família, articulação precoce com cuidados paliativos quando indicado."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Queda da consciência, nova anisocoria, agravamento do défice (edema, hemorragia, hidrocefalia).",
      "Crises repetidas.",
      "Diurese muito abundante com sede intensa (diabetes insípida) ou confusão com sódio baixo.",
      "Febre, rigidez da nuca ou saída de líquido pela ferida (infeção, fístula de LCR)."
    ]}
  ]
},
{
  id: "vasculites", cap: null, parte: "p4", icone: "🔥",
  titulo: "Vasculites do sistema nervoso central",
  pags: null,
  resumo: "Inflamação dos vasos sanguíneos do cérebro, da medula ou dos nervos — isolada (angeíte primária do SNC) ou no contexto de doenças sistémicas ou infeções. Provocam AVC em pessoas sem fatores de risco, cefaleia e alterações cognitivas. O tratamento com imunossupressores exige cuidados de enfermagem específicos.",
  subtemas: [
    {nome: "Arterite de células gigantes (temporal)", procura: "Arterite de células gigantes"},
    {nome: "Angeíte primária do SNC", procura: "Angeíte primária"},
    {nome: "Vasculites sistémicas (lúpus, Behçet…)", procura: "Vasculites sistémicas"},
    {nome: "Vasculites infeciosas", procura: "Vasculites infeciosas"},
    {nome: "Síndrome de vasoconstrição cerebral reversível", procura: "vasoconstrição cerebral reversível"}
  ],
  seccoes: [
    { t: "Formas a conhecer", itens: [
      "Arterite de células gigantes (temporal): após os 50 anos; cefaleia temporal nova, dor ao mastigar, sensibilidade do couro cabeludo, sintomas gerais; risco de cegueira — urgência.",
      "Angeíte primária do SNC: rara; cefaleia, alterações cognitivas, AVC múltiplos, crises.",
      "Vasculites sistémicas com atingimento neurológico: lúpus, doença de Behçet (aftas orais e genitais), granulomatose com poliangeíte, poliarterite nodosa — também neuropatias (mononeurite múltipla).",
      "Vasculites infeciosas: varicela-zóster, sífilis, tuberculose, VIH.",
      "Diagnóstico diferencial importante: síndrome de vasoconstrição cerebral reversível — cefaleias súbitas «em trovão» repetidas, muitas vezes no puerpério ou associadas a fármacos vasoativos ou drogas. Perante cefaleia em trovão, excluir primeiro hemorragia subaracnoideia. O tratamento é diferente e os corticoides podem agravá-la: não iniciar imunossupressão sem diagnóstico."
    ]},
    { t: "Diagnóstico e tratamento (visão geral)", itens: [
      "RM, estudo vascular (angio-RM, angiografia), LCR, análises (VS, PCR, autoimunidade, serologias), biópsia (artéria temporal, cérebro/meninges).",
      "Suspeita de arterite de células gigantes: corticoides iniciados de imediato, sem esperar pela biópsia nem pela ecografia das artérias temporais, que devem ser feitas nos dias seguintes. Com sintomas visuais é uma emergência: a primeira dose não pode atrasar.",
      "Corticoides em dose alta e outros imunossupressores (ex.: ciclofosfamida, rituximab, tocilizumab), conforme o tipo; nas infeciosas, tratamento da infeção."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Vigilância neurológica seriada (novos défices = possível novo AVC) e da visão na arterite de células gigantes.",
      "Corticoides: glicemia, TA, sono, humor, proteção gástrica e óssea conforme prescrição, sinais de infeção; desmame conforme prescrição, nunca suspender bruscamente.",
      "Ciclofosfamida: hidratação e esvaziamento vesical frequente, vigiar hematúria (cistite hemorrágica), náuseas, leucopenia; manipular como citotóxico segundo o protocolo.",
      "Rituximab e outros biológicos: confirmar o rastreio de hepatite B antes da primeira perfusão; pré-medicação e vigilância de reações à perfusão conforme protocolo.",
      "Prevenção de infeções no doente imunossuprimido; vacinação e profilaxias conforme indicação médica.",
      "Tocilizumab: pode suprimir a febre e a PCR, e uma infeção pode manifestar-se só por mal-estar, taquicardia ou alteração do estado geral. Comunicar mesmo sem febre.",
      "Ensino: sinais de infeção, adesão à terapêutica, contraceção (a ciclofosfamida afeta a fertilidade e é teratogénica)."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Perda de visão, visão dupla ou turva num doente com suspeita de arterite de células gigantes: comunicar de imediato.",
      "Novo défice focal, crises ou diminuição da consciência.",
      "Febre ou sinais de infeção em doente imunossuprimido.",
      "Hematúria durante ou após ciclofosfamida."
    ]}
  ]
},
{
  id: "alzheimer", cap: null, parte: "p4", grupo: "demencias-az", icone: "🧠",
  titulo: "Doença de Alzheimer", pags: null,
  resumo: "A causa mais frequente de demência: perda progressiva da memória e de outras funções cognitivas, com perda gradual de autonomia. No internamento, o doente tem risco elevado de delirium, quedas, desnutrição e disfagia.",
  relacionados: ["demencias", "seguranca", "disfagia"],
  seccoes: [
    { t: "O essencial", itens: [
      "Doença neurodegenerativa com acumulação de proteínas anómalas no cérebro (beta-amiloide e tau); responsável por cerca de 60 a 70% das demências.",
      "O principal fator de risco é a idade. Outros: história familiar, hipertensão, diabetes, tabaco, sedentarismo, baixa escolaridade, perda auditiva não corrigida e isolamento social.",
      "As formas genéticas de início precoce (antes dos 65 anos) são raras.",
      "Evolução lenta, ao longo de anos, em fase ligeira, moderada e grave."
    ]},
    { t: "Como se manifesta", itens: [
      "Início típico com perda de memória recente: repete perguntas, esquece conversas e compromissos, perde objetos.",
      "Depois: desorientação no tempo e no espaço, dificuldade em encontrar palavras, em planear e em gerir dinheiro ou medicação.",
      "Alterações do comportamento e do humor: apatia, depressão, ansiedade, irritabilidade, desconfiança, deambulação e agitação ao fim do dia.",
      "Pouca consciência das próprias dificuldades: o relato do cuidador é essencial.",
      "Fase grave: dependência total, incontinência, disfagia e perda da marcha; as infeções (sobretudo a pneumonia de aspiração) são uma causa frequente de morte."
    ]},
    { t: "Diagnóstico (visão geral)", itens: [
      "Avaliação clínica e testes cognitivos (ex.: MoCA, MMSE), com entrevista ao cuidador.",
      "Análises para excluir causas tratáveis (ex.: vitamina B12, função tiroideia) e imagem cerebral (RM ou TC).",
      "Em casos selecionados: biomarcadores no LCR ou no sangue e PET, sobretudo se se considerar tratamento anti-amiloide."
    ]},
    { t: "Tratamento (visão geral)", itens: [
      "Inibidores da acetilcolinesterase (donepezilo, rivastigmina, galantamina) nas fases ligeira a moderada; memantina nas fases moderada a grave. Melhoram os sintomas de forma modesta, mas não travam a doença.",
      "Anticorpos antiamiloide (lecanemab, donanemab): só no défice cognitivo ligeiro ou na demência ligeira, com amiloide confirmado e sem duas cópias do gene APOE ε4, em centros com protocolo e acesso controlado; não se usam em doentes anticoagulados. Exigem RM de vigilância pelo risco de edema e micro-hemorragias cerebrais (ARIA).",
      "Alterações do comportamento: primeiro as medidas não farmacológicas e a procura de causas (dor, infeção, obstipação). Antipsicóticos só se necessário, na dose mais baixa e pelo menor tempo possível.",
      "Controlo dos fatores de risco vascular, atividade física, estimulação cognitiva e social; apoio ao cuidador."
    ]},
    { t: "Fármacos a evitar ou usar com cautela", tipo: "precaucao", itens: [
      "Anticolinérgicos (ex.: oxibutinina, anti-histamínicos de 1.ª geração, amitriptilina) e benzodiazepinas: agravam a confusão e o risco de queda.",
      "Antipsicóticos: aumentam o risco de AVC e de morte nos doentes com demência; só com prescrição e reavaliação frequente.",
      "Inibidores da acetilcolinesterase: podem causar bradicardia e síncope (vigiar FC), náuseas e perda de peso."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Conhecer o estado habitual do doente com o cuidador: cognição, autonomia, hábitos, sono, alimentação e comunicação; registar.",
      "Vigiar sinais de delirium (alteração aguda e flutuante da atenção ou da vigília) e procurar causas: infeção, dor, retenção urinária, obstipação, desidratação, fármacos.",
      "Orientação: relógio e calendário visíveis, luz natural de dia e penumbra à noite, óculos e aparelho auditivo colocados, rotinas estáveis; incentivar a presença da família.",
      "Comunicar com frases curtas, uma instrução de cada vez, em tom calmo e de frente para o doente; não discutir nem corrigir de forma insistente.",
      "Prevenção de quedas (Morse): cama baixa, campainha e objetos ao alcance, calçado adequado, acompanhar na deambulação. Evitar a contenção física; se for inevitável, só com prescrição, segundo a norma da DGS e o protocolo do serviço, com vigilância e registo.",
      "Risco de fuga: identificação visível (pulseira), vigilância das saídas do serviço e aviso à equipa nas passagens de turno.",
      "Fases avançadas: avaliar o risco de úlceras por pressão (Braden) e posicionar.",
      "Alimentação: ajudar nas refeições, vigiar ingestão e peso, rastrear disfagia (GUSS) e oferecer líquidos regularmente.",
      "Eliminação: horário miccional; vigiar retenção urinária e obstipação.",
      "Avaliar a dor com escalas para pessoas com demência (ex.: PAINAD): a dor não verbalizada provoca agitação.",
      "Medicação: confirmar a toma; rivastigmina transdérmica — um só adesivo de cada vez, retirar o anterior e mudar o local.",
      "Preparar a alta desde a admissão: avaliar a autonomia (Barthel) e envolver o serviço social (apoio domiciliário, RNCCI)."
    ]},
    { t: "Ensinos ao doente e ao cuidador", itens: [
      "Explicar a doença e a sua evolução; planear com antecedência as decisões futuras (diretivas antecipadas de vontade, procurador de cuidados de saúde).",
      "Segurança em casa: retirar tapetes, boa iluminação, supervisão da medicação, do fogão e da condução.",
      "Procurar ajuda se houver agravamento súbito da confusão, febre ou quedas.",
      "Apoio ao cuidador: descanso do cuidador, Estatuto do Cuidador Informal, associações de doentes (ex.: Alzheimer Portugal)."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Agravamento súbito da confusão, da vigília ou do comportamento (delirium): comunicar e procurar a causa.",
      "Febre, tosse ou engasgamento durante as refeições (pneumonia de aspiração).",
      "Queda, sobretudo com traumatismo craniano ou em doente anticoagulado.",
      "Recusa alimentar ou de líquidos e sinais de desidratação.",
      "Doente sob antiamiloide com cefaleia nova, confusão, alterações visuais ou crises: possível ARIA — comunicar de imediato.",
      "Doente sob antiamiloide com suspeita de AVC: informar logo a equipa da Via Verde (maior risco de hemorragia; a trombólise pode estar contraindicada)."
    ]}
  ]
},
{
  id: "demencia-vascular", cap: null, parte: "p4", grupo: "demencias-az", icone: "🧠",
  titulo: "Demência vascular", pags: null,
  resumo: "Declínio cognitivo causado por doença dos vasos cerebrais, após AVC ou por lesão difusa dos pequenos vasos. Prevenir novos AVC é a base do tratamento.",
  relacionados: ["avc", "demencias", "seguranca"],
  seccoes: [
    { t: "O essencial", itens: [
      "Segunda causa mais frequente de demência; coexiste muitas vezes com a doença de Alzheimer (demência mista).",
      "Causas: enfartes múltiplos ou em locais estratégicos, doença dos pequenos vasos (lesões da substância branca, enfartes lacunares) e hemorragias.",
      "Fatores de risco: hipertensão, diabetes, colesterol elevado, tabaco, fibrilhação auricular e AVC prévio.",
      "Evolução em degraus (agravamento após cada AVC) ou progressiva e lenta (doença dos pequenos vasos)."
    ]},
    { t: "Como se manifesta", itens: [
      "Lentificação do pensamento e dificuldade de atenção, planeamento e organização; a memória pode estar relativamente preservada no início.",
      "Alterações do humor: depressão, apatia, labilidade emocional (choro ou riso fácil).",
      "Marcha de pequenos passos, instabilidade e quedas; urgência ou incontinência urinária.",
      "Sinais de AVC anteriores: fraqueza de um lado, disartria, disfagia."
    ]},
    { t: "Diagnóstico (visão geral)", itens: [
      "Avaliação cognitiva e RM cerebral (lesões vasculares que expliquem o quadro).",
      "Estudo dos fatores de risco: TA, glicemia, perfil lipídico, ECG e Holter (fibrilhação auricular), ecodoppler dos vasos do pescoço."
    ]},
    { t: "Tratamento (visão geral)", itens: [
      "Prevenção secundária: controlo da TA, da diabetes e do colesterol (estatina), antiagregação ou anticoagulação conforme a causa, cessação tabágica e exercício.",
      "Os inibidores da acetilcolinesterase e a memantina têm benefício limitado; usam-se sobretudo na demência mista.",
      "Reabilitação (fisioterapia, terapia da fala, terapia ocupacional) e tratamento da depressão."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Vigiar TA e glicemia e a adesão à terapêutica preventiva; registar.",
      "Avaliação neurológica regular: um défice novo pode ser um novo AVC.",
      "Prevenção de quedas (Morse) e treino de marcha com a fisioterapia; auxiliares de marcha quando indicados.",
      "Rastreio de disfagia (GUSS) antes de dar alimentos ou medicação oral, sobretudo após AVC.",
      "Orientação, comunicação simples e rotinas, como na doença de Alzheimer; vigiar sinais de delirium.",
      "Eliminação: horário miccional e prevenção da obstipação; avaliar o resíduo pós-miccional se houver retenção.",
      "Avaliar o humor: a depressão e a apatia são frequentes e tratáveis.",
      "Fases avançadas: avaliar o risco de úlceras por pressão (Braden)."
    ]},
    { t: "Ensinos ao doente e ao cuidador", itens: [
      "Controlo dos fatores de risco: medicação diária, medir a TA, alimentação com pouco sal, cessação tabágica e atividade física.",
      "Reconhecer os sinais de AVC — face descaída, falta de força num braço, alteração da fala — e ligar 112.",
      "Adaptar a casa para prevenir quedas; apoio ao cuidador."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Défice neurológico de início súbito (assimetria da face, fraqueza de um lado, alteração da fala ou da visão): ativar a Via Verde AVC e registar a hora em que o doente foi visto bem pela última vez.",
      "Agravamento súbito da confusão ou da vigília.",
      "Quedas repetidas, ou queda em doente antiagregado ou anticoagulado.",
      "TA muito elevada, ou hipotensão (pode agravar a perfusão cerebral)."
    ]}
  ]
},
{
  id: "dcl", cap: null, parte: "p4", grupo: "demencias-az", icone: "🧠",
  titulo: "Demência com corpos de Lewy (DCL)", pags: null,
  resumo: "Demência com flutuações marcadas da atenção, alucinações visuais, parkinsonismo e perturbação do sono REM. Muita sensibilidade aos antipsicóticos: um erro de medicação pode ser grave.",
  relacionados: ["demencias", "movimento", "parkinsonismos-atipicos"],
  seccoes: [
    { t: "O essencial", itens: [
      "Doença neurodegenerativa por acumulação de alfa-sinucleína (corpos de Lewy), da mesma família da doença de Parkinson.",
      "Fala-se em DCL quando a demência surge antes do parkinsonismo ou até um ano depois; quando surge anos depois de uma doença de Parkinson estabelecida, chama-se demência da doença de Parkinson.",
      "É uma das causas mais frequentes de demência neurodegenerativa, a seguir à doença de Alzheimer."
    ]},
    { t: "Como se manifesta", itens: [
      "Flutuações da atenção e da vigília: períodos de confusão ou sonolência alternados com períodos lúcidos, no mesmo dia.",
      "Alucinações visuais bem formadas (pessoas, animais), muitas vezes precoces.",
      "Parkinsonismo: rigidez, lentidão e alteração da marcha; o tremor é menos frequente.",
      "Perturbação do comportamento do sono REM: fala, grita ou debate-se durante o sono, como se vivesse os sonhos.",
      "Disautonomia: hipotensão ortostática, síncopes, obstipação, incontinência urinária; quedas frequentes.",
      "No início, a atenção e a orientação no espaço estão muitas vezes mais afetadas do que a memória."
    ]},
    { t: "Diagnóstico (visão geral)", itens: [
      "Clínico, com avaliação cognitiva e entrevista ao cuidador.",
      "Exames de apoio: DaTSCAN (cintigrafia dos transportadores de dopamina), polissonografia (sono REM) e RM para excluir outras causas."
    ]},
    { t: "Tratamento (visão geral)", itens: [
      "Inibidores da acetilcolinesterase (rivastigmina, donepezilo): costumam melhorar a cognição, as flutuações e as alucinações.",
      "Parkinsonismo: levodopa em dose baixa e com cautela (pode agravar as alucinações).",
      "Alucinações com sofrimento ou risco: rever primeiro a medicação; se necessário, quetiapina ou clozapina em dose baixa, por indicação médica.",
      "Perturbação do sono REM: melatonina ou clonazepam (cuidado com as quedas) e quarto seguro.",
      "Hipotensão ortostática: medidas gerais e, se prescrito, midodrina ou fludrocortisona."
    ]},
    { t: "Sensibilidade grave aos antipsicóticos", tipo: "precaucao", itens: [
      "Haloperidol e muitos outros antipsicóticos podem provocar rigidez grave, confusão, quedas, síndrome maligna dos neurolépticos e morte. Não administrar sem confirmação médica, mesmo em SOS para agitação.",
      "Evitar a metoclopramida; para náuseas, usar a alternativa prescrita (ex.: domperidona).",
      "Benzodiazepinas e anticolinérgicos agravam a confusão e as quedas.",
      "Registar de forma visível no processo «sensibilidade a neurolépticos» e informar a equipa nas passagens de turno."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Registar o padrão das flutuações (horas de maior e menor lucidez) e planear cuidados e avaliações nos melhores períodos.",
      "Alucinações: manter a calma, não discutir o conteúdo, tranquilizar e distrair; boa iluminação, evitar sombras e reflexos; verificar os óculos.",
      "Prevenção de quedas: TA deitado e de pé, levante faseado, hidratação, cama baixa; acompanhar na marcha.",
      "Noite: vigiar comportamentos durante o sono, afastar objetos perigosos, cama baixa e grades almofadadas (não subir as grades se o doente tentar passar por cima delas); não acordar o doente bruscamente.",
      "Rastreio de disfagia (GUSS) e vigilância de aspiração.",
      "Vigiar sinais de delirium e procurar causas (infeção, retenção urinária, obstipação, fármacos).",
      "Antiparkinsónicos no horário do doente, como na doença de Parkinson.",
      "Fases avançadas: avaliar o risco de úlceras por pressão (Braden)."
    ]},
    { t: "Ensinos ao doente e ao cuidador", itens: [
      "Explicar que as flutuações e as alucinações fazem parte da doença.",
      "Levar sempre a lista de medicação e informar qualquer profissional da sensibilidade aos antipsicóticos, incluindo na urgência e antes de cirurgias.",
      "Segurança noturna (quarto e cama), levantar devagar, beber água e prevenir a obstipação."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Rigidez grave, febre, sudorese e alteração da consciência após um antipsicótico: suspeitar de síndrome maligna dos neurolépticos — comunicar de imediato.",
      "Agravamento súbito da confusão ou da vigília, para além das flutuações habituais.",
      "Síncope ou quedas repetidas.",
      "Engasgamento, febre ou dessaturação (aspiração)."
    ]}
  ]
},
{
  id: "epilepsia-az", cap: null, parte: "p4", icone: "⚡",
  titulo: "Epilepsia", pags: null,
  resumo: "Tendência para crises epiléticas recorrentes. Na enfermaria, o essencial é a segurança durante a crise, reconhecer o estado de mal (crise com 5 minutos ou mais) e não falhar as tomas dos antiepiléticos.",
  relacionados: ["epilepsia", "urgencias", "coma"],
  seccoes: [
    { t: "O essencial", itens: [
      "Crise epilética: alteração transitória causada por atividade elétrica anómala dos neurónios. Epilepsia: tendência para ter crises não provocadas recorrentes.",
      "Causas no adulto: AVC, tumores, traumatismo craniano, infeções, doenças neurodegenerativas e causas genéticas; muitas vezes a causa não é encontrada.",
      "Crises provocadas (não são epilepsia): hipoglicemia, hiponatremia, privação de álcool ou de benzodiazepinas, fármacos e infeção do SNC."
    ]},
    { t: "Tipos de crise", itens: [
      "Focal com consciência preservada: sintomas motores, sensitivos, visuais ou uma sensação estranha (aura); o doente lembra-se.",
      "Focal com alteração da consciência: olhar parado, não responde, automatismos (mastigar, mexer na roupa) e confusão no fim.",
      "Tónico-clónica (generalizada ou focal que generaliza): perda de consciência, rigidez e depois abalos dos quatro membros, mordedura lateral da língua, incontinência, confusão e sonolência a seguir.",
      "Ausências, crises mioclónicas e crises atónicas (quedas) são mais típicas das epilepsias generalizadas.",
      "Depois da crise: confusão, cefaleia, sonolência e, por vezes, fraqueza transitória de um lado (paralisia de Todd)."
    ]},
    { t: "Diagnóstico (visão geral)", itens: [
      "Descrição rigorosa da crise por uma testemunha — é a informação mais importante; um vídeo de telemóvel ajuda muito.",
      "Glicemia capilar imediata; análises (sódio, cálcio, magnésio, função renal e hepática, tóxicos, níveis de antiepiléticos).",
      "EEG, TC e RM cerebral; punção lombar se houver suspeita de infeção."
    ]},
    { t: "Tratamento (visão geral)", itens: [
      "Antiepiléticos de manutenção escolhidos conforme o tipo de crise, a idade, o sexo e as outras doenças (ex.: levetiracetam, lamotrigina, lacosamida, valproato, carbamazepina).",
      "Valproato: contraindicado em mulheres em idade fértil, salvo programa de prevenção da gravidez; nos homens também exige informação e cautela.",
      "Estado de mal: benzodiazepina (midazolam IM, bucal ou intranasal, ou diazepam ou midazolam EV; lorazepam EV se disponível) e depois antiepilético EV (levetiracetam, valproato, fenitoína ou lacosamida), segundo o protocolo.",
      "Epilepsia refratária: avaliação para cirurgia, estimulação do nervo vago ou dieta cetogénica."
    ]},
    { t: "Durante a crise", itens: [
      "Manter a calma, registar a hora de início, ficar junto do doente e pedir ajuda.",
      "Proteger a cabeça, afastar objetos e desapertar a roupa; não conter os movimentos nem pôr nada na boca.",
      "Quando os abalos param: posição lateral de segurança, aspirar secreções se necessário, oxigénio se SpO2 baixa e glicemia capilar. Nada pela boca até recuperar a consciência e a deglutição.",
      "Vigilância pós-crise: Glasgow, sinais vitais e SpO2 até o doente voltar ao estado basal; registar.",
      "Se durar 5 minutos ou mais, ou se houver crises seguidas sem recuperar: tratar como estado de mal (protocolo e médico de imediato).",
      "Registar: hora e duração, como começou (lado, desvio do olhar), tipo de movimentos, consciência, incontinência, mordedura da língua e recuperação."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Antiepiléticos à hora certa, sem omitir doses; em jejum ou com disfagia, pedir ao médico uma alternativa (EV ou por SNG).",
      "Fenitoína EV é medicação de alto risco: monitorização cardíaca e da TA durante a perfusão, diluir só em soro fisiológico, vigiar flebite e extravasamento.",
      "Cama baixa e grades almofadadas se as crises forem frequentes; aspirador e oxigénio prontos à cabeceira; acesso venoso nos doentes com crises frequentes.",
      "Durante a monitorização vídeo-EEG com redução de fármacos: não deixar o doente sozinho na casa de banho e garantir a campainha ao alcance.",
      "Vigiar efeitos adversos: sonolência, tonturas e ataxia (toxicidade), alterações do humor (levetiracetam), hiponatremia (carbamazepina, oxcarbazepina), erupção cutânea (lamotrigina, carbamazepina).",
      "Identificar e corrigir desencadeantes: privação de sono, febre, álcool e fármacos que baixam o limiar convulsivo ou interagem (ex.: tramadol; carbapenemos com valproato)."
    ]},
    { t: "Ensinos ao doente e à família", itens: [
      "Tomar a medicação todos os dias à mesma hora e nunca a suspender sem indicação médica.",
      "Evitar a privação de sono e o álcool em excesso; registar as crises num diário.",
      "Segurança: duche em vez de banho de imersão, não fechar a porta da casa de banho à chave, não nadar sozinho, cuidado com alturas e com o fogão.",
      "Condução: há restrições legais após uma crise — esclarecer com o médico.",
      "Ensinar a família a atuar numa crise e a usar o midazolam bucal ou intranasal, se prescrito (no adulto, uso fora da indicação aprovada).",
      "Contraceção e gravidez: planear com o neurologista (interações e risco de malformações); ácido fólico."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Crise com 5 minutos ou mais, ou crises repetidas sem recuperação da consciência entre elas: estado de mal — emergência.",
      "Não recupera a consciência após a crise, ou défice novo que não regride.",
      "Crise com traumatismo craniano (sobretudo se anticoagulado), dificuldade respiratória ou SpO2 baixa.",
      "Primeira crise, ou crise com febre e rigidez da nuca ou com cefaleia intensa: procurar uma causa urgente.",
      "Erupção cutânea com febre ou lesões nas mucosas depois de iniciar um antiepilético (reação grave)."
    ]}
  ]
},
{
  id: "parkinson", cap: null, parte: "p4", icone: "🚶",
  titulo: "Doença de Parkinson", pags: null,
  resumo: "Doença neurodegenerativa com lentidão, rigidez e tremor de repouso. No internamento, o horário exato da medicação é decisivo: os atrasos causam bloqueio, disfagia e quedas.",
  relacionados: ["movimento", "parkinsonismos-atipicos", "disfagia"],
  seccoes: [
    { t: "O essencial", itens: [
      "Perda de neurónios produtores de dopamina; doença neurodegenerativa frequente, sobretudo depois dos 60 anos.",
      "Evolução lenta ao longo de anos; com o tempo surgem flutuações motoras («on» e «off») e discinesias.",
      "Os sintomas não motores precedem muitas vezes os motores: perda do olfato, obstipação, depressão e perturbação do comportamento do sono REM."
    ]},
    { t: "Como se manifesta", itens: [
      "Lentidão e diminuição dos movimentos (bradicinesia), rigidez e tremor de repouso, geralmente assimétricos no início.",
      "Marcha de pequenos passos, sem balanço dos braços, com bloqueios (freezing); instabilidade postural e quedas nas fases mais avançadas.",
      "Face pouco expressiva, voz baixa, letra pequena, disfagia e sialorreia.",
      "Sintomas não motores: obstipação, hipotensão ortostática, urgência urinária, depressão, ansiedade, alucinações, défice cognitivo, dor e alterações do sono.",
      "Flutuações: «on» (a medicação está a fazer efeito) e «off» (os sintomas regressam); discinesias (movimentos involuntários) no pico da dose."
    ]},
    { t: "Diagnóstico (visão geral)", itens: [
      "Diagnóstico clínico; a boa resposta à levodopa apoia-o.",
      "RM para excluir outras causas; DaTSCAN nos casos de dúvida."
    ]},
    { t: "Tratamento (visão geral)", itens: [
      "Levodopa (com carbidopa ou benserazida), o fármaco mais eficaz; agonistas dopaminérgicos (pramipexol, ropinirol, rotigotina transdérmica); inibidores da MAO-B (rasagilina, safinamida); inibidores da COMT (entacapona, opicapona); amantadina.",
      "Doença avançada: apomorfina (caneta ou perfusão subcutânea), levodopa em perfusão intestinal (gel) ou subcutânea (foslevodopa/foscarbidopa) e estimulação cerebral profunda.",
      "Fisioterapia, terapia da fala e terapia ocupacional em todas as fases."
    ]},
    { t: "Medicação: horário e fármacos a evitar", tipo: "precaucao", itens: [
      "Dar a medicação antiparkinsónica no horário do doente, não no horário da enfermaria; não atrasar mais de 15 a 30 minutos.",
      "Nunca suspender de repente (risco de síndrome de hiperpirexia-parkinsonismo). Em jejum ou com disfagia, pedir ao médico uma alternativa (SNG, rotigotina transdérmica).",
      "Não triturar as formulações de libertação prolongada (levodopa de libertação prolongada, agonistas LP); por SNG, usar a formulação dispersível prescrita.",
      "Evitar haloperidol e outros antipsicóticos típicos, metoclopramida e prometazina: agravam o parkinsonismo. Para náuseas, domperidona (prolonga o QT: na dose e durante o tempo mínimos prescritos); para alucinações, quetiapina ou clozapina por indicação médica.",
      "Inibidores da MAO-B: há interações (ex.: tramadol, petidina, alguns antidepressivos) — confirmar com o médico ou o farmacêutico."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Registar à admissão o horário habitual da medicação; manter a autogestão pelo doente ou pela família quando for seguro.",
      "Avaliar e registar o estado motor ao longo do dia (períodos «on» e «off», discinesias).",
      "Prevenção de quedas (Morse): levante faseado, TA deitado e de pé, calçado adequado; pistas visuais (linha no chão) ou ritmo («um, dois») para os bloqueios.",
      "Rastreio de disfagia (GUSS); comprimidos com o doente sentado e em período «on»; vigiar aspiração.",
      "Obstipação: hidratação, fibras e laxantes conforme prescrição; vigiar retenção urinária.",
      "Vigiar alucinações, confusão (delirium), sono e humor.",
      "A levodopa absorve-se melhor longe das refeições (refeições ricas em proteína reduzem o efeito), mas o horário do doente tem sempre prioridade.",
      "Rotigotina: retirar o adesivo antes de RM ou de cardioversão.",
      "Fases avançadas: avaliar o risco de úlceras por pressão (Braden).",
      "Doentes com estimulação cerebral profunda: não usar diatermia; RM só segundo protocolo; confirmar o estado do neuroestimulador."
    ]},
    { t: "Ensinos ao doente e ao cuidador", itens: [
      "Cumprir os horários da medicação (alarmes, caixa semanal) e nunca a suspender por iniciativa própria.",
      "Exercício físico regular, estratégias para os bloqueios e adaptação da casa.",
      "Agonistas dopaminérgicos: avisar de alterações do controlo dos impulsos (jogo, compras, sexualidade, comida) e de adormecimento súbito, com implicações na condução.",
      "Procurar ajuda se houver quedas, engasgamento, alucinações ou obstipação prolongada.",
      "Associação de doentes (APDPk) e apoio ao cuidador."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Rigidez extrema, febre, sudorese e alteração da consciência após suspensão ou redução da medicação (síndrome de hiperpirexia-parkinsonismo): emergência.",
      "Incapacidade de engolir a medicação: comunicar de imediato para encontrar uma via alternativa.",
      "Engasgamento, febre ou dessaturação (pneumonia de aspiração).",
      "Confusão aguda ou alucinações novas (procurar infeção, desidratação ou fármacos).",
      "Quedas com traumatismo; síncope por hipotensão ortostática."
    ]}
  ]
},
{
  id: "esclerose-multipla", cap: null, parte: "p4", icone: "🧬",
  titulo: "Esclerose múltipla (EM)", pags: null,
  resumo: "Doença inflamatória e desmielinizante do sistema nervoso central, mais frequente em adultos jovens e em mulheres. Evolui por surtos e/ou de forma progressiva; as terapêuticas modificadoras reduzem os surtos e a incapacidade.",
  relacionados: ["desmielinizantes", "mielopatias", "nmo"],
  seccoes: [
    { t: "O essencial", itens: [
      "O sistema imunitário ataca a mielina do cérebro, da medula e dos nervos óticos, formando lesões (placas).",
      "Início habitual entre os 20 e os 40 anos; mais frequente nas mulheres.",
      "Formas: surto-remissão (a mais frequente no início), secundária progressiva e primária progressiva.",
      "Surto: sintomas novos, ou agravamento, com mais de 24 horas e sem febre ou infeção que o expliquem."
    ]},
    { t: "Como se manifesta", itens: [
      "Nevrite ótica: dor ao mexer o olho e perda de visão de um olho.",
      "Formigueiros e dormência, fraqueza, espasticidade, alterações do equilíbrio e da marcha.",
      "Visão dupla, vertigem, disartria; sinal de Lhermitte (sensação de choque elétrico ao fletir o pescoço).",
      "Alterações urinárias (urgência, retenção), intestinais e sexuais.",
      "Fadiga (muito frequente), alterações cognitivas, depressão e dor.",
      "Fenómeno de Uhthoff: agravamento transitório com o calor ou a febre (pseudossurto)."
    ]},
    { t: "Diagnóstico (visão geral)", itens: [
      "RM cerebral e medular com contraste (critérios de McDonald 2024): lesões em vários locais, incluindo o nervo ótico; em certos casos já não é preciso demonstrar disseminação no tempo.",
      "LCR (bandas oligoclonais ou índice de cadeias leves kappa) e potenciais evocados; análises para excluir outras causas, incluindo os anticorpos anti-AQP4 e anti-MOG."
    ]},
    { t: "Tratamento (visão geral)", itens: [
      "Surto: metilprednisolona EV (habitualmente 3 a 5 dias) ou oral em dose alta; plasmaférese nos surtos graves sem resposta.",
      "Terapêuticas modificadoras: injetáveis (interferão beta, acetato de glatirâmero, ofatumumab), orais (teriflunomida, fumarato de dimetilo, fingolimod, siponimod, ozanimod, cladribina) e perfusões (natalizumab, ocrelizumab, alemtuzumab).",
      "Sintomáticos: baclofeno ou tizanidina (espasticidade), fampridina (marcha), oxibutinina ou mirabegrom (bexiga), toxina botulínica.",
      "Reabilitação e gestão da fadiga."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Pulsos de corticoide: vigiar glicemia, TA, sono, humor e queixas gástricas; perfusão no tempo prescrito.",
      "Perfusões de anticorpos monoclonais: pré-medicação conforme protocolo, sinais vitais e vigilância de reações durante e depois da perfusão.",
      "Primeira toma de fingolimod (e ao reiniciar após interrupção): ECG antes e às 6 horas, FC e TA de hora a hora durante 6 horas (risco de bradicardia).",
      "Avaliar e registar o défice neurológico, a visão, a marcha e a função urinária (resíduo pós-miccional).",
      "Prevenção de quedas (Morse); gestão da fadiga (atividades com pausas); evitar o calor excessivo.",
      "Rastrear infeções urinárias e respiratórias, que desencadeiam pseudossurtos.",
      "Imunossupressão: vigiar sinais de infeção; vacinação de acordo com o plano antes de iniciar algumas terapêuticas."
    ]},
    { t: "Ensinos ao doente", itens: [
      "Reconhecer um surto (sintoma novo com mais de 24 horas) e contactar a equipa.",
      "Adesão à terapêutica; técnica de injeção e rotação dos locais; gestão dos efeitos adversos.",
      "Não suspender natalizumab nem fingolimod por iniciativa própria (risco de agravamento grave por efeito rebound); várias terapêuticas contraindicam as vacinas vivas.",
      "Autocateterismo vesical intermitente, se indicado: técnica, frequência e sinais de infeção urinária.",
      "Natalizumab: risco de leucoencefalopatia multifocal progressiva (LMP) — comunicar alterações cognitivas, do comportamento, da fala ou da visão.",
      "Planear a gravidez com o neurologista; deixar de fumar; vitamina D se prescrita; exercício adaptado."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Perda rápida de força nas pernas, nível sensitivo ou retenção urinária (mielite ou compressão medular): comunicar de imediato.",
      "Perda súbita de visão.",
      "Febre ou sinais de infeção em doente imunossuprimido.",
      "Durante uma perfusão: dispneia, urticária, hipotensão ou edema da face (reação à perfusão ou anafilaxia) — parar a perfusão e chamar o médico.",
      "Alterações cognitivas, do comportamento ou da linguagem progressivas sob natalizumab (suspeita de LMP)."
    ]}
  ]
},
{
  id: "nmo", cap: null, parte: "p4", icone: "👁️",
  titulo: "Neuromielite ótica (NMOSD)", pags: null,
  resumo: "Doença autoimune rara com surtos graves de nevrite ótica e de mielite, na maioria com o anticorpo antiaquaporina-4. Distingue-se da esclerose múltipla: alguns tratamentos da EM podem agravá-la.",
  relacionados: ["desmielinizantes", "esclerose-multipla", "mielopatias"],
  seccoes: [
    { t: "O essencial", itens: [
      "Doença inflamatória do SNC mediada por anticorpos, na maioria antiaquaporina-4 (anti-AQP4); mais frequente nas mulheres, sobretudo entre os 30 e os 50 anos.",
      "Evolui por surtos e cada surto pode deixar sequelas graves (cegueira, paraplegia): prevenir as recaídas é essencial.",
      "Associa-se por vezes a outras doenças autoimunes (lúpus, síndrome de Sjögren).",
      "A doença associada ao anticorpo anti-MOG (MOGAD) é parecida mas distinta (ver «Esclerose múltipla, neuromielite ótica e outras doenças desmielinizantes»)."
    ]},
    { t: "Como se manifesta", itens: [
      "Nevrite ótica grave, por vezes dos dois olhos.",
      "Mielite extensa: fraqueza das pernas ou dos quatro membros, nível sensitivo, alterações urinárias e intestinais, espasmos dolorosos.",
      "Síndrome da área postrema: soluços ou náuseas e vómitos persistentes, sem outra causa.",
      "Outros: sonolência excessiva e sintomas do tronco cerebral (visão dupla, vertigem)."
    ]},
    { t: "Diagnóstico (visão geral)", itens: [
      "Anticorpos anti-AQP4 e anti-MOG no sangue.",
      "RM do cérebro, das órbitas e da medula (mielite longa, com 3 ou mais segmentos vertebrais) e LCR."
    ]},
    { t: "Tratamento (visão geral)", itens: [
      "Surto: metilprednisolona EV em dose alta e plasmaférese precoce se não houver melhoria rápida (ou logo de início nos surtos graves).",
      "Prevenção de recaídas: eculizumab, ravulizumab, inebilizumab, satralizumab (na UE, aprovados só para a doença AQP4+), rituximab, azatioprina ou micofenolato.",
      "Alguns fármacos da esclerose múltipla (interferão beta, natalizumab, fingolimod) podem agravar a NMO: por isso o diagnóstico correto é essencial."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Avaliação neurológica frequente durante o surto: força, sensibilidade, visão, função vesical e intestinal e respiração (a mielite cervical alta pode atingir os músculos respiratórios).",
      "Plasmaférese: cuidados com o cateter; vigiar hipotensão, hipocalcemia (formigueiros, cãibras), hemorragia e reações.",
      "Eculizumab e ravulizumab: vacinas contra meningococos ACWY e B pelo menos 2 semanas antes; se o tratamento começar antes, antibiótico profilático até 2 semanas depois da vacina. A vacina não elimina o risco: vigiar febre, cefaleia e rigidez da nuca. A plasmaférese remove o fármaco (pode ser precisa uma dose suplementar).",
      "Bexiga e intestino: resíduo pós-miccional, cateterismo vesical intermitente se necessário, prevenção da obstipação.",
      "Prevenção de úlceras por pressão (Braden), de quedas e de trombose (mobilização e profilaxia prescrita).",
      "Avaliar e tratar a dor neuropática e os espasmos tónicos dolorosos, conforme prescrição.",
      "Perda visual: identificar-se ao entrar no quarto e manter os objetos sempre no mesmo lugar; risco de queda acrescido."
    ]},
    { t: "Ensinos ao doente", itens: [
      "Reconhecer um surto (visão, força, sensibilidade, soluços ou vómitos persistentes) e procurar ajuda logo.",
      "Adesão rigorosa à terapêutica preventiva; com eculizumab ou ravulizumab, andar sempre com o cartão do doente (sinais de meningite).",
      "Vacinação conforme o plano; procurar ajuda se tiver febre."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Perda rápida de força, nível sensitivo, retenção urinária ou dificuldade respiratória (mielite alta): comunicar de imediato.",
      "Perda súbita de visão.",
      "Febre, cefaleia, rigidez da nuca ou petéquias sob eculizumab ou ravulizumab: suspeitar de meningite meningocócica — emergência.",
      "Soluços ou vómitos incoercíveis (área postrema): risco de desidratação e de aspiração."
    ]}
  ]
},
{
  id: "miastenia-gravis", cap: null, parte: "p4", icone: "💪",
  titulo: "Miastenia gravis", pags: null,
  resumo: "Doença autoimune da junção neuromuscular: fraqueza que piora com o esforço e melhora com o repouso. O grande risco é a crise miasténica, com insuficiência respiratória e disfagia.",
  relacionados: ["miastenia", "urgencias", "disfagia"],
  seccoes: [
    { t: "O essencial", itens: [
      "Anticorpos (sobretudo antirrecetor da acetilcolina; também anti-MuSK) bloqueiam a transmissão entre o nervo e o músculo.",
      "Dois picos de frequência: mulheres jovens e homens mais velhos; associa-se a timoma ou a hiperplasia do timo.",
      "Forma ocular (só pálpebras e olhos) ou generalizada."
    ]},
    { t: "Como se manifesta", itens: [
      "Ptose (pálpebra descaída) e visão dupla, flutuantes e piores ao fim do dia.",
      "Fraqueza dos braços, das pernas e do pescoço, que agrava com o esforço.",
      "Voz anasalada, disfagia e dificuldade em mastigar.",
      "Dispneia, sobretudo deitado: sinal de crise iminente."
    ]},
    { t: "Diagnóstico (visão geral)", itens: [
      "Anticorpos no sangue; EMG (estimulação repetitiva e fibra única); TC do tórax (timo).",
      "Provas de função respiratória (capacidade vital forçada) para vigiar a gravidade."
    ]},
    { t: "Tratamento (visão geral)", itens: [
      "Sintomático: piridostigmina.",
      "Imunossupressão: prednisolona (subida lenta da dose — pode agravar no início), azatioprina, micofenolato, rituximab.",
      "Miastenia generalizada: inibidores do complemento (eculizumab, ravulizumab, zilucoplan — só com anticorpos antirrecetor da acetilcolina) e do recetor FcRn (efgartigimod, rozanolixizumab).",
      "Timectomia (no timoma e em alguns doentes com anticorpos antirrecetor da acetilcolina).",
      "Crise miasténica: imunoglobulina EV ou plasmaférese; ventilação em UCI se necessário."
    ]},
    { t: "Fármacos que podem agravar a miastenia", tipo: "precaucao", itens: [
      "Antibióticos: aminoglicosídeos, fluoroquinolonas e macrólidos (ex.: azitromicina).",
      "Magnésio EV, bloqueadores neuromusculares, alguns antiarrítmicos e betabloqueadores (incluindo colírios), toxina botulínica, hidroxicloroquina e inibidores dos checkpoints imunitários.",
      "Sedativos, benzodiazepinas e opioides: risco de depressão respiratória.",
      "Confirmar sempre com o médico ou o farmacêutico antes de um fármaco novo; o doente deve ter consigo a lista de fármacos a evitar."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Avaliação respiratória pelo menos de 4 em 4 horas e sempre que houver queixas (mais vezes se prescrito): FR, SpO2, padrão respiratório e contagem em voz alta numa só inspiração; capacidade vital forçada conforme protocolo. Registar em tabela para ver a tendência — a descida da SpO2 é um sinal tardio.",
      "Cabeceira elevada; aspirador de secreções e material de ventilação prontos.",
      "Avaliar a deglutição antes das refeições e da medicação (GUSS); refeições no período de melhor força (30 a 60 minutos após a piridostigmina).",
      "Piridostigmina à hora exata; vigiar efeitos colinérgicos (salivação, cólicas, diarreia, bradicardia).",
      "Planear as atividades com pausas; prevenção de quedas.",
      "Proteger o olho se a pálpebra não fechar bem (lubrificante prescrito e oclusão noturna); para a visão dupla, oclusão alternada por indicação médica.",
      "Imunoglobulina ou plasmaférese: vigiar reações, TA, função renal e sinais de trombose; cuidados com o cateter.",
      "Inibidores do complemento: confirmar a vacinação antimeningocócica e vigiar sinais de meningite."
    ]},
    { t: "Ensinos ao doente", itens: [
      "Reconhecer o agravamento — falta de ar, dificuldade em engolir, voz mais fraca — e procurar ajuda urgente.",
      "Cumprir o horário da piridostigmina e nunca suspender os corticoides de forma brusca.",
      "Andar com a lista de fármacos a evitar e mostrá-la a todos os profissionais (incluindo dentista e farmácia).",
      "Desencadeantes: infeções, cirurgias, stress, calor e falta de sono; manter a vacinação em dia."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Dispneia, ortopneia, tosse fraca, uso dos músculos acessórios ou incapacidade de contar até 20 numa só inspiração: possível crise miasténica — chamar o médico de imediato (pode precisar de ventilação).",
      "Disfagia grave, engasgamento ou acumulação de secreções.",
      "Fraqueza com aumento de secreções, cólicas e bradicardia: possível crise colinérgica (excesso de piridostigmina). Na dúvida, atuar como numa crise miasténica (via aérea e ventilação); não dar doses extra de piridostigmina sem indicação médica.",
      "Capacidade vital forçada abaixo de 20 mL/kg ou a descer mais de 30%: considerar UCI.",
      "Agravamento depois de um fármaco novo (ex.: antibiótico, magnésio)."
    ]}
  ]
},
{
  id: "sgb", cap: null, parte: "p4", icone: "🦵",
  titulo: "Síndrome de Guillain-Barré (SGB)", pags: null,
  resumo: "Polirradiculoneuropatia aguda autoimune: fraqueza ascendente que agrava ao longo de dias a semanas, muitas vezes depois de uma infeção. Pode atingir a respiração e a deglutição e causar disautonomia grave.",
  relacionados: ["neuropatias", "urgencias", "seguranca"],
  seccoes: [
    { t: "O essencial", itens: [
      "Inflamação aguda dos nervos periféricos e das raízes nervosas, muitas vezes 1 a 4 semanas após uma infeção gastrointestinal (ex.: Campylobacter) ou respiratória.",
      "Pode surgir em qualquer idade. Agrava até cerca de 4 semanas, estabiliza e recupera lentamente, ao longo de meses.",
      "Cerca de 20 a 30% dos doentes precisam de ventilação mecânica; a maioria volta a andar, mas pode ficar com sequelas.",
      "Variante de Miller Fisher: visão dupla por paralisia dos músculos oculares, ataxia e ausência de reflexos."
    ]},
    { t: "Como se manifesta", itens: [
      "Fraqueza simétrica que começa geralmente nas pernas e sobe; reflexos geralmente diminuídos ou ausentes (podem estar normais no início ou nas variantes motoras).",
      "Formigueiros nos pés e nas mãos; dor lombar ou nas pernas, frequente e por vezes intensa.",
      "Paralisia facial (muitas vezes dos dois lados), disfagia e disartria.",
      "Insuficiência respiratória por fraqueza do diafragma.",
      "Disautonomia: oscilações da TA e da FC, arritmias, retenção urinária e íleo."
    ]},
    { t: "Diagnóstico (visão geral)", itens: [
      "Clínico, apoiado pelo LCR (proteínas elevadas com poucas células; pode ser normal na 1.ª semana) e pelo EMG.",
      "Avaliação respiratória seriada (capacidade vital forçada)."
    ]},
    { t: "Tratamento (visão geral)", itens: [
      "Imunoglobulina EV (habitualmente durante 5 dias) ou plasmaférese — mais eficazes quando iniciadas cedo.",
      "Os corticoides não estão indicados.",
      "Suporte: ventilação em UCI se necessário, profilaxia da trombose, tratamento da dor neuropática (gabapentina, pregabalina) e reabilitação precoce."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Vigilância respiratória de 2 em 2 a 4 em 4 horas na fase de progressão, conforme prescrição: FR, SpO2, força da tosse, contagem numa só inspiração e capacidade vital forçada; registar em tabela para ver a tendência.",
      "Monitorização cardíaca e da TA (disautonomia); cuidado com a hipotensão nas mudanças de posição.",
      "A aspiração de secreções e as mudanças de posição podem provocar bradicardia grave ou assistolia: fazer com monitorização e atropina disponível, conforme o protocolo. A resposta aos fármacos vasoativos pode ser exagerada.",
      "Avaliar a deglutição (GUSS) e a força muscular (escala MRC) várias vezes por dia na fase de agravamento.",
      "Dor: avaliar com regularidade (escala numérica; se o doente não comunicar, escala comportamental) e tratar conforme prescrição; posicionamento confortável.",
      "Prevenir as complicações da imobilidade: úlceras por pressão (Braden), trombose (profilaxia prescrita), contraturas e pé equino (posicionamento, mobilização passiva e talas, se prescritas).",
      "Bexiga e intestino: vigiar retenção urinária e íleo.",
      "Imunoglobulina: vigiar cefaleia, reações, função renal e trombose. Plasmaférese: hipotensão, hipocalcemia e cuidados com o cateter.",
      "Apoio emocional e meios de comunicação adaptados: o doente mantém-se consciente, mesmo muito paralisado."
    ]},
    { t: "Ensinos ao doente e à família", itens: [
      "Explicar a evolução: agravamento inicial, estabilização e recuperação lenta.",
      "Continuar a reabilitação depois da alta; prevenção de quedas.",
      "Vacinação futura: esclarecer com o médico."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Dispneia, tosse fraca, ortopneia, capacidade vital forçada abaixo de 20 mL/kg ou a descer, ou incapacidade de contar até 20 numa inspiração: risco de falência respiratória — chamar o médico (UCI).",
      "Disfagia ou acumulação de secreções.",
      "Arritmias, bradicardia ou oscilações acentuadas da TA.",
      "Fraqueza a progredir rapidamente, em horas.",
      "Dor torácica, dispneia súbita ou edema de uma perna (tromboembolismo)."
    ]}
  ]
}
];

// ───────────────────────────── ESCALAS ─────────────────────────────
// Grupos da secção «Patologias específicas (A–Z)»: no menu e no índice aparecem como uma entrada que,
// ao tocar, mostra as doenças do grupo (cada uma com página própria)
const GRUPOS_AZ = [
  { id: "demencias-az", titulo: "Demências", temas: ["alzheimer", "demencia-vascular", "dcl"] }
];

const ESCALAS = [
{
  id: "glasgow", nome: "Escala de Coma de Glasgow",
  descricao: "Avalia o nível de consciência. Registar os três componentes (ex.: O3 V4 M6 = 13). Pontuação 3–15.",
  itens: [
    { nome: "Abertura dos olhos (O)", opcoes: [[4,"Espontânea"],[3,"Ao som / à voz"],[2,"À pressão / estímulo doloroso"],[1,"Nenhuma"]] },
    { nome: "Resposta verbal (V)", opcoes: [[5,"Orientada"],[4,"Confusa"],[3,"Palavras inapropriadas"],[2,"Sons incompreensíveis"],[1,"Nenhuma"]] },
    { nome: "Resposta motora (M)", opcoes: [[6,"Obedece a ordens"],[5,"Localiza o estímulo"],[4,"Flexão normal (fuga)"],[3,"Flexão anormal (decorticação)"],[2,"Extensão (descerebração)"],[1,"Nenhuma"]] }
  ],
  interpretar: t => t <= 8 ? ["grave", "Grave (≤ 8) — risco de compromisso da via aérea; chamar ajuda."]
               : t <= 12 ? ["moderado", "Moderado (9–12)."]
               : ["ligeiro", "Ligeiro (13–15)."],
  nota: "Se um componente não for testável (ex.: intubação/traqueostomia para V, edema palpebral para O), registar «NT» nesse componente e não apresentar total — registar os componentes testados (ex.: O3 VNT M5)."
},
{
  id: "nihss", nome: "NIHSS — National Institutes of Health Stroke Scale",
  descricao: "Quantifica o défice neurológico no AVC. Pontuação 0–42. Pontuar o que o doente faz, não o que se pensa que consegue fazer.",
  itens: [
    { nome: "1a. Nível de consciência", opcoes: [[0,"Alerta"],[1,"Sonolento, desperta com estímulo ligeiro"],[2,"Só responde a estímulos repetidos ou dolorosos"],[3,"Só respostas reflexas ou sem resposta"]] },
    { nome: "1b. Perguntas (mês e idade)", opcoes: [[0,"Ambas corretas"],[1,"Uma correta"],[2,"Nenhuma correta"]] },
    { nome: "1c. Ordens (abrir/fechar olhos e mão)", opcoes: [[0,"Executa ambas"],[1,"Executa uma"],[2,"Nenhuma"]] },
    { nome: "2. Olhar conjugado", opcoes: [[0,"Normal"],[1,"Parésia parcial do olhar"],[2,"Desvio forçado / parésia total"]] },
    { nome: "3. Campos visuais", opcoes: [[0,"Sem perda"],[1,"Hemianopsia parcial"],[2,"Hemianopsia completa"],[3,"Hemianopsia bilateral / cegueira"]] },
    { nome: "4. Parésia facial", opcoes: [[0,"Normal"],[1,"Ligeira (assimetria do sorriso)"],[2,"Parcial (paralisia total ou quase total da face inferior)"],[3,"Completa (superior e inferior)"]] },
    { nome: "5a. Membro superior esquerdo (90° sentado / 45° deitado)", opcoes: [[0,"Sem queda (10 s)"],[1,"Descai antes dos 10 s, sem tocar na cama"],[2,"Algum esforço contra a gravidade"],[3,"Sem esforço contra a gravidade"],[4,"Sem movimento"],[0,"NT — amputação/anquilose (não pontua)"]] },
    { nome: "5b. Membro superior direito (90° sentado / 45° deitado)", opcoes: [[0,"Sem queda (10 s)"],[1,"Descai antes dos 10 s, sem tocar na cama"],[2,"Algum esforço contra a gravidade"],[3,"Sem esforço contra a gravidade"],[4,"Sem movimento"],[0,"NT — amputação/anquilose (não pontua)"]] },
    { nome: "6a. Membro inferior esquerdo (30° deitado)", opcoes: [[0,"Sem queda (5 s)"],[1,"Descai antes dos 5 s, sem tocar na cama"],[2,"Algum esforço contra a gravidade"],[3,"Sem esforço contra a gravidade"],[4,"Sem movimento"],[0,"NT — amputação/anquilose (não pontua)"]] },
    { nome: "6b. Membro inferior direito (30° deitado)", opcoes: [[0,"Sem queda (5 s)"],[1,"Descai antes dos 5 s, sem tocar na cama"],[2,"Algum esforço contra a gravidade"],[3,"Sem esforço contra a gravidade"],[4,"Sem movimento"],[0,"NT — amputação/anquilose (não pontua)"]] },
    { nome: "7. Ataxia dos membros", opcoes: [[0,"Ausente (ou plégico / não compreende)"],[1,"Num membro"],[2,"Em dois membros"],[0,"NT — amputação/anquilose (não pontua)"]] },
    { nome: "8. Sensibilidade", opcoes: [[0,"Normal"],[1,"Perda ligeira a moderada"],[2,"Perda grave ou total"]] },
    { nome: "9. Linguagem", opcoes: [[0,"Normal"],[1,"Afasia ligeira a moderada"],[2,"Afasia grave"],[3,"Mutismo / afasia global"]] },
    { nome: "10. Disartria", opcoes: [[0,"Normal"],[1,"Ligeira a moderada"],[2,"Grave / ininteligível"],[0,"NT — intubado/barreira física (não pontua)"]] },
    { nome: "11. Extinção / negligência", opcoes: [[0,"Normal"],[1,"Numa modalidade"],[2,"Em mais de uma modalidade / hemi-inatenção grave"]] }
  ],
  interpretar: t => t === 0 ? ["ligeiro","Sem défice mensurável."]
               : t <= 4 ? ["ligeiro","AVC minor (1–4)."]
               : t <= 15 ? ["moderado","AVC moderado (5–15)."]
               : t <= 20 ? ["grave","AVC moderado a grave (16–20)."]
               : ["grave","AVC grave (21–42)."],
  nota: "Usar a versão certificada e o manual da instituição. Só conta a 1.ª resposta (1b, 1c). 1b: afásico/estuporoso que não compreende = 2; intubado, disartria grave ou barreira linguística = 1. 7: só pontua ataxia desproporcionada à fraqueza. Doente em coma (1a = 3): 8 = 2 e 9 = 3. NT apenas em amputação/anquilose (5, 6, 7) e intubação/barreira física (10). Pontos de corte orientativos."
},
{
  id: "rankin", nome: "Escala de Rankin modificada (mRS)",
  descricao: "Grau de incapacidade/dependência após AVC. Selecionar a descrição que melhor se aplica.",
  itens: [
    { nome: "Nível funcional", opcoes: [
      [0,"Sem sintomas"],
      [1,"Sem incapacidade significativa: realiza todas as atividades habituais apesar de sintomas"],
      [2,"Incapacidade ligeira: não realiza todas as atividades prévias, mas trata dos seus assuntos sem ajuda"],
      [3,"Incapacidade moderada: precisa de alguma ajuda, mas anda sem ajuda"],
      [4,"Incapacidade moderada a grave: não anda sem ajuda e precisa de ajuda nos cuidados pessoais"],
      [5,"Incapacidade grave: acamado, incontinente, cuidados permanentes"],
      [6,"Morte"]
    ]}
  ],
  interpretar: t => t <= 2 ? ["ligeiro","Independente (0–2)."] : t <= 5 ? ["grave","Dependente (3–5)."] : ["grave","Óbito."]
},
{
  id: "braden", nome: "Braden — risco de úlcera por pressão",
  descricao: "Risco de desenvolver úlcera por pressão no adulto. 6 dimensões; total 6–23. Quanto MAIS BAIXA a pontuação, MAIOR o risco. Avaliar nas primeiras 6 h após a admissão e reavaliar conforme protocolo e sempre que a situação clínica mude.",
  itens: [
    { nome: "Perceção sensorial (sentir e comunicar desconforto)", opcoes: [[1,"Completamente limitada — não reage à dor (inconsciente/sedado) ou quase não sente em todo o corpo"],[2,"Muito limitada — só reage à dor; mostra desconforto apenas por gemidos/agitação, ou sente pouco em metade do corpo"],[3,"Ligeiramente limitada — obedece a ordens mas nem sempre comunica o desconforto, ou sente pouco em 1–2 membros"],[4,"Nenhuma limitação — obedece e comunica desconforto; sem défice sensitivo"]] },
    { nome: "Humidade (exposição da pele)", opcoes: [[1,"Constantemente húmida — suor, urina ou fezes quase sempre"],[2,"Muito húmida — roupa da cama mudada pelo menos uma vez por turno"],[3,"Ocasionalmente húmida — uma muda extra por dia"],[4,"Raramente húmida — pele habitualmente seca"]] },
    { nome: "Atividade (grau de atividade física)", opcoes: [[1,"Acamado — confinado à cama"],[2,"Sentado — não anda ou anda muito pouco; precisa de ajuda para ir para a cadeira"],[3,"Anda ocasionalmente — distâncias curtas, com ou sem ajuda; passa a maior parte do tempo na cama ou cadeirão"],[4,"Anda frequentemente — sai do quarto pelo menos 2 vezes por dia e anda no quarto regularmente"]] },
    { nome: "Mobilidade (mudar e controlar a posição)", opcoes: [[1,"Completamente imobilizado — não faz qualquer mudança de posição sem ajuda"],[2,"Muito limitada — pequenas mudanças ocasionais, insuficientes"],[3,"Ligeiramente limitada — pequenas mudanças frequentes, sozinho"],[4,"Nenhuma limitação — mudanças importantes e frequentes sem ajuda"]] },
    { nome: "Nutrição (padrão habitual de ingestão)", opcoes: [[1,"Muito pobre — raramente come mais de 1/3 da refeição, bebe pouco, ou jejum/só soros há mais de 5 dias"],[2,"Provavelmente inadequada — come cerca de metade, ou recebe menos do que o ideal por sonda"],[3,"Adequada — come mais de metade da maioria das refeições, ou alimentação por sonda/parentérica que cobre as necessidades"],[4,"Excelente — come a maior parte de todas as refeições; não precisa de suplementos"]] },
    { nome: "Fricção e forças de deslizamento", opcoes: [[1,"Problema — precisa de ajuda moderada a total para se mover; escorrega na cama ou cadeira; espasticidade, contraturas ou agitação causam fricção constante"],[2,"Problema potencial — move-se com pouca força ou alguma ajuda; escorrega de vez em quando"],[3,"Nenhum problema aparente — move-se sozinho com força suficiente para se levantar; mantém boa posição"]] }
  ],
  interpretar: t => t <= 16 ? ["grave", "Alto risco (≤ 16) — plano de prevenção: reposicionamento planeado, superfície de apoio, calcâneos sem apoio, gestão da humidade e da nutrição."]
               : ["ligeiro", "Baixo risco (≥ 17) — medidas gerais; reavaliar conforme protocolo ou se a situação mudar."],
  nota: "Ponto de corte da Orientação DGS 017/2011 (alto risco ≤ 16). Descrições resumidas; usar a versão portuguesa validada adotada pelo hospital. Escala com direitos de autor (Braden e Bergstrom) — confirmar autorização institucional para uso numa aplicação."
},
{
  id: "morse", nome: "Morse — risco de queda",
  descricao: "Risco de queda no adulto internado. 6 itens; total 0–125. Quanto MAIS ALTA a pontuação, MAIOR o risco. Avaliar na admissão e reavaliar após alteração clínica, transferência ou queda.",
  itens: [
    { nome: "1. Antecedentes de queda (neste internamento ou nos últimos 3 meses)", opcoes: [[0,"Não"],[25,"Sim"]] },
    { nome: "2. Diagnóstico secundário (mais de um diagnóstico ativo)", opcoes: [[0,"Não"],[15,"Sim"]] },
    { nome: "3. Apoio na deambulação", opcoes: [[0,"Nenhum, acamado, ou anda com ajuda de um profissional"],[15,"Canadianas, bengala ou andarilho"],[30,"Apoia-se nos móveis ou paredes para andar"]] },
    { nome: "4. Terapêutica endovenosa / cateter venoso", opcoes: [[0,"Não"],[20,"Sim (com ou sem perfusão)"]] },
    { nome: "5. Marcha", opcoes: [[0,"Normal, acamado ou em cadeira de rodas"],[10,"Débil — passos curtos, pode arrastar os pés, sem perder o equilíbrio"],[20,"Comprometida — levanta-se com dificuldade, passos inseguros, precisa de apoio para se equilibrar"]] },
    { nome: "6. Estado mental (perceção das próprias limitações)", opcoes: [[0,"Reconhece as suas limitações"],[15,"Sobrestima as capacidades ou esquece as limitações"]] }
  ],
  interpretar: t => t >= 51 ? ["grave", "Alto risco (≥ 51) — medidas de prevenção reforçadas e individualizadas; sinalizar conforme protocolo."]
               : t >= 25 ? ["moderado", "Baixo risco (25–50) — medidas de prevenção standard e ensino ao doente e família."]
               : ["ligeiro", "Sem risco (0–24) — medidas gerais de segurança; reavaliar se a situação mudar."],
  nota: "Pontos de corte da versão portuguesa. Algumas instituições usam outros cortes (ex.: ≥ 45 = alto risco) — seguir o protocolo do hospital. No doente neurológico (negligência, impulsividade, ataxia, hipotensão ortostática) o juízo clínico prevalece sobre a pontuação."
},
{
  id: "barthel", nome: "Barthel — funcionalidade nas AVD",
  descricao: "Independência em 10 atividades básicas de vida diária. Total 0–100 (de 5 em 5). Quanto MAIS ALTA a pontuação, MAIOR a independência. Pontuar o que o doente FAZ (observado ou relatado de forma fiável), não o que poderia fazer.",
  itens: [
    { nome: "Alimentação", opcoes: [[10,"Independente — come sozinho com a comida ao alcance"],[5,"Precisa de ajuda (ex.: cortar, barrar)"],[0,"Dependente"]] },
    { nome: "Transferência cama–cadeira", opcoes: [[15,"Independente"],[10,"Pequena ajuda física ou supervisão"],[5,"Grande ajuda (1–2 pessoas), mas consegue manter-se sentado"],[0,"Dependente — sem equilíbrio sentado"]] },
    { nome: "Higiene pessoal (cara, dentes, cabelo, barba)", opcoes: [[5,"Independente"],[0,"Precisa de ajuda"]] },
    { nome: "Uso da sanita", opcoes: [[10,"Independente (senta-se, limpa-se, compõe a roupa)"],[5,"Precisa de alguma ajuda"],[0,"Dependente"]] },
    { nome: "Banho", opcoes: [[5,"Independente (banho ou duche sem ajuda)"],[0,"Dependente"]] },
    { nome: "Deambulação", opcoes: [[15,"Independente pelo menos 50 m (pode usar auxiliar de marcha)"],[10,"Anda pelo menos 50 m com ajuda ou supervisão de uma pessoa"],[5,"Não anda, mas é independente em cadeira de rodas pelo menos 50 m"],[0,"Imóvel ou menos de 50 m"]] },
    { nome: "Escadas", opcoes: [[10,"Independente"],[5,"Precisa de ajuda ou supervisão"],[0,"Incapaz"]] },
    { nome: "Vestir e despir", opcoes: [[10,"Independente (incluindo botões, fechos e calçado)"],[5,"Precisa de ajuda, mas faz pelo menos metade sozinho"],[0,"Dependente"]] },
    { nome: "Controlo intestinal", opcoes: [[10,"Continente"],[5,"Incontinência ocasional (até 1 vez por semana) ou precisa de ajuda com supositório/enema"],[0,"Incontinente"]] },
    { nome: "Controlo vesical", opcoes: [[10,"Continente (ou gere sozinho a sonda/dispositivo)"],[5,"Incontinência ocasional (até 1 vez em 24 h) ou precisa de ajuda com o dispositivo"],[0,"Incontinente, ou algaliado sem conseguir gerir a algália"]] }
  ],
  interpretar: t => t >= 90 ? ["ligeiro", "Independente (90–100)."]
               : t >= 60 ? ["ligeiro", "Ligeiramente dependente (60–85)."]
               : t >= 40 ? ["moderado", "Moderadamente dependente (40–55)."]
               : t >= 20 ? ["grave", "Severamente dependente (20–35)."]
               : ["grave", "Totalmente dependente (< 20)."],
  nota: "Versão de 0–100 (Mahoney e Barthel) com os pontos de corte usados em Portugal (Sequeira). Útil na admissão, para planear a alta e referenciar (reabilitação, RNCCI). Algumas instituições usam outra versão (ex.: 0–20) ou outros cortes — seguir o protocolo do hospital."
},
{
  id: "guss", nome: "GUSS — rastreio da disfagia (Gugging Swallowing Screen)",
  descricao: "Rastreio da deglutição à cabeceira, em 4 etapas pela ordem: teste indireto → semissólido → líquido → sólido. Cada etapa vale 0–5 e só se passa à seguinte com 5 pontos; com menos de 5, PARAR o teste. Total 0–20. Doente sentado a pelo menos 60°.",
  etapas: [
    { titulo: "1. Teste indireto (saliva)", de: 0, ate: 4, minimo: 5 },
    { titulo: "2. Semissólido", de: 5, ate: 8, minimo: 5,
      texto: "½ colher de chá de água espessada (IDDSI nível 3, tipo pudim); se correr bem, repetir até 5 vezes." },
    { titulo: "3. Líquido", de: 9, ate: 12, minimo: 5,
      texto: "Água num copo: 3, 5, 10 e 20 mL; se correr bem, 50 mL o mais depressa que conseguir." },
    { titulo: "4. Sólido", de: 13, ate: 16, minimo: 5,
      texto: "Pedaço pequeno de pão sem côdea ou bolacha, até 5 vezes. Verificar antes a dentição/prótese." }
  ],
  itens: [
    { nome: "Vigília — desperto há pelo menos 15 minutos", opcoes: [[1, "Sim"], [0, "Não"]] },
    { nome: "Tosse voluntária ou pigarrear (pedir para tossir 2 vezes)", opcoes: [[1, "Sim"], [0, "Não"]] },
    { nome: "Deglutição da saliva", opcoes: [[1, "Consegue engolir"], [0, "Não consegue"]] },
    { nome: "Sialorreia (saliva a escorrer da boca)", opcoes: [[1, "Não"], [0, "Sim"]] },
    { nome: "Alteração da voz (rouca, molhada, fraca)", opcoes: [[1, "Não"], [0, "Sim"]] },
    { nome: "Semissólido — deglutição", opcoes: [[2, "Engole bem"], [1, "Atrasada (> 2 segundos)"], [0, "Não consegue engolir"]] },
    { nome: "Semissólido — tosse involuntária (antes, durante ou até 3 min depois)", opcoes: [[1, "Não"], [0, "Sim"]] },
    { nome: "Semissólido — sialorreia", opcoes: [[1, "Não"], [0, "Sim"]] },
    { nome: "Semissólido — alteração da voz (pedir para dizer «Ó» antes e depois)", opcoes: [[1, "Não"], [0, "Sim"]] },
    { nome: "Líquido — deglutição", opcoes: [[2, "Engole bem"], [1, "Atrasada (> 2 segundos)"], [0, "Não consegue engolir"]] },
    { nome: "Líquido — tosse involuntária (antes, durante ou até 3 min depois)", opcoes: [[1, "Não"], [0, "Sim"]] },
    { nome: "Líquido — sialorreia", opcoes: [[1, "Não"], [0, "Sim"]] },
    { nome: "Líquido — alteração da voz", opcoes: [[1, "Não"], [0, "Sim"]] },
    { nome: "Sólido — deglutição", opcoes: [[2, "Engole bem"], [1, "Atrasada (> 10 segundos)"], [0, "Não consegue engolir"]] },
    { nome: "Sólido — tosse involuntária (antes, durante ou até 3 min depois)", opcoes: [[1, "Não"], [0, "Sim"]] },
    { nome: "Sólido — sialorreia", opcoes: [[1, "Não"], [0, "Sim"]] },
    { nome: "Sólido — alteração da voz", opcoes: [[1, "Não"], [0, "Sim"]] }
  ],
  interpretar: t => t >= 20 ? ["ligeiro", "20 — sem disfagia ou disfagia ligeira, risco mínimo de aspiração. Dieta normal e líquidos sem restrição; a primeira refeição é vigiada por um enfermeiro treinado ou pela terapia da fala."]
    : t >= 15 ? ["moderado", "15–19 — disfagia ligeira, baixo risco de aspiração. Dieta de disfagia (pastosa e mole); líquidos muito devagar, um gole de cada vez; pedir avaliação pela terapia da fala."]
    : t >= 10 ? ["grave", "10–14 — disfagia moderada, com risco de aspiração. Só semissólidos (tipo puré); todos os líquidos espessados; comprimidos esmagados no espessado, se puderem ser triturados (sem medicação líquida); considerar alimentação complementar por SNG; terapia da fala."]
    : ["grave", "0–9 — disfagia grave, alto risco de aspiração. NADA POR BOCA, incluindo medicação; via alternativa conforme prescrição (SNG ou parentérica); avaliação pela terapia da fala e, se indicado, instrumental."],
  nota: "GUSS © Michaela Trapl-Grundschober (Trapl et al., Stroke 2007), validada para português europeu. Parar logo que surja um sinal de aspiração (deglutição ausente ou atrasada, tosse, sialorreia ou voz molhada). Seguir o impresso, as consistências (IDDSI) e as recomendações dietéticas adotadas pelo hospital. Repetir se houver alteração neurológica."
}
];

const MRC = [
  [5, "Força normal"],
  [4, "Vence a gravidade e alguma resistência"],
  [3, "Vence a gravidade, mas não resistência"],
  [2, "Movimento só sem gravidade (no plano da cama)"],
  [1, "Contração visível/palpável, sem movimento"],
  [0, "Sem contração"]
];
