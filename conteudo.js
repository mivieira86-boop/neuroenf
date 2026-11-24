// NeuroEnf — conteúdo clínico (adulto)
// Texto original orientado para enfermagem. Organizado pelos capítulos 1–23 de
// «A Neurologia que Todo Médico Deve Saber» (Nitrini & Bacheschi, Atheneu).
// A Parte 3 (Neurologia Infantil) não está incluída.

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
  relacionados: ["linguagem", "avc", "topografia"],
  seccoes: [
    { t: "Roteiro rápido (vigilância neurológica)", itens: [
      "Consciência: Escala de Coma de Glasgow (ver Escalas). Registar componentes separados (O, V, M), não só o total.",
      "Orientação: pessoa, espaço, tempo. Atenção: dizer os meses do ano ao contrário.",
      "Pupilas: tamanho (mm), simetria, reflexo fotomotor direto e consensual.",
      "Força: comparar lados — escala MRC 0–5; prova dos braços estendidos (desvio/pronação sugere défice discreto).",
      "Fala e linguagem: articulação (disartria) vs conteúdo/compreensão (afasia) — ver «Linguagem e fala — rastreio rápido» abaixo.",
      "Face: assimetria do sorriso, encerramento palpebral.",
      "Sinais vitais: TA, FC, padrão respiratório, temperatura, SpO2 e glicemia capilar."
    ]},
    { t: "Pares cranianos — o essencial", tabela: {
      cab: ["Par", "Como avaliar à cabeceira"],
      lin: [
        ["II — ótico", "Acuidade, campos visuais por confrontação, reflexo fotomotor (via aferente)"],
        ["III, EV, VI — oculomotores", "Seguir o dedo em «H»; diplopia; ptose e midríase sugerem lesão do III"],
        ["V — trigémio", "Sensibilidade da face; reflexo corneano; mastigação"],
        ["VII — facial", "Franzir a testa, fechar os olhos, sorrir. Central: poupa a testa. Periférico: atinge toda a hemiface"],
        ["VIII — vestibulococlear", "Audição; vertigem, nistagmo"],
        ["IX, X — glossofaríngeo, vago", "Voz, elevação do palato, tosse, deglutição"],
        ["XI — acessório", "Elevar os ombros, rodar a cabeça"],
        ["XII — hipoglosso", "Protrusão da língua (desvia para o lado da lesão periférica)"]
      ]
    }},
    { t: "Linguagem e fala — rastreio rápido", itens: [
      "Conversar com o doente e pedir: uma ordem simples («Feche os olhos»), o nome de um objeto (relógio, caneta) e a repetição de uma frase curta.",
      "Distinguir afasia (alteração da linguagem: compreender, encontrar palavras, nomear, repetir) de disartria (fala arrastada com linguagem intacta).",
      "Afasia, disartria ou mutismo de início súbito: sinal de alarme de AVC. Avaliação completa no tema «Avaliação da linguagem e comunicação» (Cuidados de enfermagem transversais)."
    ]},
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
      "Descida mantida da Glasgow (sobretudo ≥ 1 ponto na resposta motora ou ≥ 2 no total), agitação ou comportamento novo → pupilas, sinais vitais e glicemia capilar, registar a hora → chamar o médico de imediato.",
      "Nova anisocoria ou pupila pouco reativa → Glasgow e sinais vitais, cabeceira a 30°, registar a hora → chamar o médico de imediato.",
      "Novo défice motor, de linguagem ou visual → registar a hora (ou última vez visto bem), glicemia capilar, suspender a via oral → ativar a Via Verde AVC segundo o protocolo e chamar o médico.",
      "Bradicardia com hipertensão e alteração respiratória (tríade de Cushing) → via aérea e oxigénio, cabeceira a 30°, Glasgow e pupilas → chamar o médico/EEMI de imediato.",
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
    { t: "Punção lombar / líquido cefalorraquidiano", itens: [
      "Antes: confirmar consentimento, coagulação e plaquetas, medicação anticoagulante/antiagregante (seguir protocolo), e se foi feita imagem quando há défice focal, alteração da consciência ou suspeita de hipertensão intracraniana.",
      "Posicionamento: decúbito lateral em posição fetal (permite medir a pressão de abertura) ou sentado inclinado para a frente.",
      "Identificar e numerar os tubos por ordem de colheita; enviar de imediato ao laboratório (células degradam-se).",
      "Após: vigiar o local da punção, a cefaleia, a dor lombar, a força e a sensibilidade dos membros inferiores e a micção (pelo menos de 4 em 4 h nas primeiras 24 h, ou conforme protocolo; mais vezes se anticoagulado ou com plaquetas baixas). O repouso prolongado no leito não previne a cefaleia pós-punção — seguir o protocolo do serviço para o levante.",
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
    { t: "Eletroencefalograma — EEG", itens: [
      "Cabelo lavado na véspera, seco, sem cremes, óleos, gel ou laca.",
      "Manter a medicação habitual, salvo indicação médica em contrário.",
      "Se pedido EEG com privação de sono: confirmar as horas de sono permitidas e garantir que o doente não conduz depois.",
      "Fazer refeição normal (a hipoglicemia altera o traçado).",
      "Vídeo-EEG prolongado: segurança para crises (grades almofadadas, cama baixa, oxigénio e aspiração disponíveis), registo de eventos com hora. Se houver redução da medicação antiepilética: acesso venoso permeável, medicação de resgate prescrita e acessível, acompanhar sempre ao WC/duche, ensinar o doente e a família a acionar o botão de evento."
    ]},
    { t: "Eletromiografia — EMG e estudos de condução nervosa", itens: [
      "Pele limpa, sem cremes nos membros a estudar; membros aquecidos (o frio altera as conduções).",
      "Informar o técnico/médico sobre anticoagulação, pacemaker/CDI e linfedema.",
      "Explicar que causa algum desconforto (choques breves e agulha).",
      "Após: vigiar pequenos hematomas nos locais de agulha."
    ]},
    { t: "Sinais de alarme após punção lombar", alarme: true, itens: [
      "Dor lombar intensa e crescente, fraqueza ou dormência das pernas, anestesia «em sela» ou retenção urinária, sobretudo se anticoagulado ou com plaquetas baixas: possível hematoma espinhal — comunicar de imediato (RM urgente; a descompressão é urgente).",
      "Febre, rigidez da nuca ou cefaleia que muda de padrão (já não melhora deitado): possível infeção — comunicar.",
      "Sonolência, vómitos, anisocoria ou novo défice após a punção: comunicar de imediato (possível herniação, sobretudo se havia hipertensão intracraniana)."
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
      "Queda da Glasgow, nova anisocoria ou pupila fixa → cabeceira a 30°, cabeça alinhada, via aérea e oxigénio, sinais vitais, registar a hora → chamar o médico de imediato; EEMI se Glasgow ≤ 8.",
      "Bradicardia + hipertensão + alteração do padrão respiratório (sinal tardio de herniação) → via aérea, oxigénio, cabeceira a 30°, Glasgow e pupilas → chamar o médico/EEMI de imediato; preparar osmoterapia e TC conforme prescrição.",
      "Postura em descerebração/decorticação → proteger a via aérea, Glasgow e pupilas, registar a hora → chamar o médico/EEMI de imediato; preparar TC urgente."
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
      "Na suspeita de défice nutricional/alcoolismo: administrar tiamina EV conforme prescrição. Se houver hipoglicemia, NUNCA atrasar a glicose — dar a tiamina em simultâneo ou logo a seguir.",
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
      "Agravamento da Glasgow, nova assimetria pupilar ou motora → glicemia capilar, sinais vitais, posição lateral de segurança se não intubado, registar a hora → chamar o médico de imediato; EEMI se Glasgow ≤ 8.",
      "Respiração irregular ou apneias → permeabilizar a via aérea, aspirar se necessário, oxigénio, SpO2, insuflador manual à cabeceira; rever opioides e sedativos dados → chamar a EEMI e o médico de imediato.",
      "Crise convulsiva → proteger, posição lateral, oxigénio, glicemia capilar, cronometrar → chamar o médico; 5 min ou mais: protocolo de estado de mal. Se não recupera a consciência: comunicar (possível estado de mal não convulsivo)."
    ]}
  ]
},
{
  id: "avc", cap: 8, parte: "p2", icone: "⚡",
  titulo: "Doença cerebrovascular (AVC)",
  pags: "177–186",
  resumo: "Tempo é cérebro. Reconhecer, ativar a Via Verde AVC e prevenir complicações. O pormenor de cada tipo está no grupo AVC: AVC isquémico, AVC hemorrágico, trombectomia e territórios arteriais.",
  relacionados: ["avc-isquemico", "avc-hemorragico", "trombectomia", "territorios-arteriais"],
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
      "Trombólise EV (alteplase ou tenecteplase): até 4,5 h após o início/última vez visto bem; entre 4,5 e 9 h, ou AVC ao acordar/início desconhecido, só com seleção por imagem avançada. TA antes < 185/110 mmHg; durante e nas 24 h seguintes < 180/105 mmHg.",
      "Sem trombólise nem trombectomia: não baixar a TA por rotina — tratar só se > 220/120 mmHg (descida gradual) ou por outra indicação médica. Após trombectomia: manter < 180/105 mmHg, mas não descer a PAS abaixo de 140 mmHg salvo prescrição.",
      "Trombectomia: oclusão de grande vaso — até 6 h na circulação anterior e 6–24 h com seleção por imagem; oclusão basilar até 24 h. Não atrasar a trombólise à espera da trombectomia.",
      "Glicemia e temperatura: tratar hiperglicemia e febre (pioram o prognóstico)."
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
    { t: "Sinais de alarme", alarme: true, itens: [
      "Durante/após trombólise: cefaleia intensa, vómitos, agravamento neurológico, subida súbita da TA, edema da língua/lábios → chamar o médico de imediato; se a alteplase ainda estiver em perfusão, suspendê-la (a tenecteplase é bólus único). Preparar TC urgente.",
      "Qualquer agravamento neurológico (ex.: aumento do NIHSS ≥ 2 pontos, queda da consciência, novo défice) → comunicar de imediato; não esperar por ≥ 4 pontos.",
      "Sinais de aspiração (tosse ao comer, voz molhada, febre, dessaturação) → parar e suspender a via oral, sentar, aspirar se necessário, oxigénio se SpO2 < 94% → comunicar ao médico; repetir o rastreio da deglutição."
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
    { t: "Vigilância por defeito (salvo prescrição ou protocolo diferente)", itens: [
      "Registar em cada avaliação: Glasgow por componentes (O-V-M), pupilas (tamanho e reação), força dos 4 membros, FR, FC, TA, temperatura, SpO2, cefaleia e vómitos.",
      "Glasgow abaixo de 15 (ou abaixo do habitual do doente): de 30 em 30 min até recuperar.",
      "Glasgow 15: de 30 em 30 min durante 2 h, de hora a hora durante 4 h e depois de 2 em 2 h, até indicação médica.",
      "Agravamento em qualquer momento: voltar a 30 em 30 min e recomeçar o esquema.",
      "Comunicar de imediato (um colega pode confirmar, mas isso nunca atrasa a chamada): agitação ou comportamento anómalo; queda de 1 ponto no Glasgow mantida durante 30 min (mais grave se for na resposta motora); queda de 3 ou mais pontos na ocular ou verbal, ou de 2 ou mais na motora; cefaleia intensa ou a agravar; vómitos persistentes; anisocoria; nova assimetria da face ou dos membros; crise; saída de líquido claro pelo nariz ou ouvido.",
      "Glasgow 8 ou menos: via aérea em risco, chamar ajuda imediata.",
      "Anticoagulado ou antiagregado (exceto AAS isolado): confirmar com o médico que fez TC e qual a decisão sobre reversão ou suspensão. Manter a vigilância mesmo com a TC inicial normal.",
      "Glasgow ainda abaixo do habitual às 24 h: lembrar o médico, porque pode estar indicada nova imagem.",
      "Não atribuir a sonolência ou a agitação ao álcool ou a fármacos sem excluir agravamento."
    ] },
    { t: "Sinais de alarme", alarme: true, itens: [
      "Intervalo lúcido seguido de deterioração (típico do hematoma epidural) → Glasgow, pupilas e sinais vitais, registar a hora, manter a proteção cervical → chamar o médico de imediato e preparar TC urgente.",
      "Idoso ou anticoagulado com confusão ou cefaleia dias/semanas após queda (hematoma subdural) → Glasgow, pupilas e força; registar o anticoagulante e a hora da última toma → comunicar ao médico de imediato (TC).",
      "Queda da Glasgow, anisocoria ou novo défice → via aérea e oxigénio, cabeceira a 30° com cabeça alinhada, sinais vitais, registar a hora → chamar o médico de imediato; EEMI se Glasgow ≤ 8."
    ]}
  ]
},
{
  id: "infecoes", cap: 10, parte: "p2", icone: "🦠",
  titulo: "Doenças infeciosas do sistema nervoso",
  pags: "197–230",
  resumo: "Meningites, encefalites, abcessos e infeções oportunistas: reconhecer cedo, não atrasar o tratamento e proteger os contactos.",
  relacionados: ["meningites-encefalites", "encefalite-autoimune", "imunodeprimido", "lyme"],
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
      "Encefalite herpética: aciclovir EV logo que se suspeita, sem esperar pela PCR; vigiar função renal e hidratação — ver «Meningites e encefalites infeciosas».",
      "Encefalites autoimunes podem simular quadros psiquiátricos."
    ]},
    { t: "Outras infeções", itens: [
      "Abcesso cerebral: febre, cefaleia e défice focal; pode haver hipertensão intracraniana.",
      "Doente imunodeprimido (VIH, quimioterapia, transplante): infeções oportunistas (toxoplasmose, criptococo, LMP), quadros atípicos.",
      "Tuberculose do SNC, neurossífilis, neurocisticercose e infeções por parasitas: evolução mais arrastada."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Púrpura, hipotensão ou alteração rápida da consciência → via aérea, sinais vitais, acesso venoso, hemoculturas e 1.ª dose de antibiótico sem atrasos conforme prescrição, isolamento de gotículas → chamar o médico de imediato; EEMI se instável.",
      "Crises convulsivas ou sinais de hipertensão intracraniana → proteger na crise, cabeceira a 30°, Glasgow, pupilas e glicemia capilar → chamar o médico de imediato; o antibiótico não espera pela TC."
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
      "Após os movimentos: posição lateral de segurança, aspirar se necessário, SpO2 e oxigénio se SpO2 baixa, glicemia capilar. Crise com 5 minutos ou mais: chamar o médico (estado de mal) — cronometrar desde o início.",
      "Observar e registar: o que fazia, primeiros sinais, desvio dos olhos/cabeça, lado afetado, automatismos, duração, incontinência, mordedura lateral da língua."
    ]},
    { t: "Após a crise (pós-crítico)", itens: [
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
      "Etapas (conforme protocolo): 0–5 min estabilizar (via aérea, O2, glicemia, acesso venoso); 5–20 min benzodiazepina, que pode ser repetida uma vez; 20–40 min antiepilético EV de 2.ª linha; se persistir, estado de mal refratário → anestesia e UCI. Registar a hora de cada fármaco.",
      "Doente que não recupera a consciência após a crise: pensar em estado de mal não convulsivo → posição lateral, Glasgow, SpO2 e glicemia capilar → comunicar ao médico de imediato (pode precisar de EEG)."
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
      "Início súbito, intensidade máxima em segundos/minutos («em trovão») → Glasgow, pupilas, TA e défice focal, registar a hora, repouso → comunicar de imediato ao médico (TC urgente para excluir HSA).",
      "Febre, rigidez da nuca ou exantema → sinais vitais e Glasgow, isolamento de gotículas, acesso venoso e hemoculturas conforme prescrição → chamar o médico de imediato (o antibiótico não deve esperar).",
      "Défice neurológico, convulsão, alteração da consciência ou do comportamento → Glasgow, pupilas, glicemia capilar, registar a hora → chamar o médico de imediato; défice súbito: Via Verde AVC.",
      "Cefaleia nova após os 50 anos (pensar em arterite de células gigantes: dor na têmpora, claudicação da mandíbula, alterações visuais — risco de cegueira: comunicar no próprio dia).",
      "Mudança de padrão, agravamento progressivo, despertar noturno, agravamento com tosse/esforço ou com a posição → caracterizar e registar a dor (escala numérica), Glasgow, pupilas e TA → comunicar ao médico no próprio turno.",
      "Cefaleia nova com imunossupressão, cancro, gravidez/puerpério, anticoagulação ou traumatismo recente → sinais vitais, Glasgow, pupilas e défice focal, registar → comunicar ao médico sem demora."
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
      "Antipsicóticos típicos (ex.: haloperidol) e também a maioria dos atípicos (ex.: risperidona, olanzapina), e antieméticos antidopaminérgicos (ex.: metoclopramida) — agravam muito os sintomas; na demência por corpos de Lewy podem causar reações graves.",
      "Se necessário tratar agitação/psicose ou náuseas: pedir alternativa ao médico (habitualmente quetiapina ou clozapina; como antiemético, domperidona, que pode prolongar o QT — na dose e durante o tempo mínimos prescritos, com cautela nas cardiopatias e nas interações).",
      "Suspensão abrupta da medicação: risco de síndrome de hiperpirexia-parkinsonismo (febre, rigidez, alteração da consciência) — emergência."
    ]},
    { t: "Parkinsonismos atípicos e parkinsonismo secundário", itens: [
      "Atrofia multissistémica e paralisia supranuclear progressiva: parecem Parkinson, mas com quedas precoces, alterações da TA e da bexiga, dos movimentos oculares e resposta fraca à levodopa — ver «Parkinsonismos atípicos (PSP, AMS, degenerescência corticobasal)».",
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
    { t: "Estimulação cerebral profunda (ECP / DBS)", itens: [
      "Elétrodos no cérebro (DBS, do inglês deep brain stimulation) ligados a um neuroestimulador sob a pele do tórax (por vezes do abdómen); usada no Parkinson, tremor essencial, distonias selecionadas e epilepsia refratária. Alvos mais usados: núcleo subtalâmico (NST) ou globo pálido interno (GPi) no Parkinson, GPi na distonia, núcleo ventral intermédio do tálamo (VIM) no tremor e núcleo anterior do tálamo na epilepsia.",
      "Na admissão: registar modelo do sistema, se é recarregável (trazer o carregador e manter o carregamento durante o internamento), o comando do doente e o contacto da equipa de ECP; trazer o cartão do dispositivo.",
      "Diatermia (ondas curtas, micro-ondas ou ultrassons terapêuticos) contraindicada em qualquer parte do corpo, mesmo com o estimulador desligado — risco de lesão grave ou morte. Estimulação magnética transcraniana também contraindicada. RM só segundo as condições do fabricante e com a equipa de ECP. Bisturi elétrico: preferir o bipolar; desligar o estimulador (ou ativar o modo cirúrgico) segundo a equipa de ECP e o fabricante; o monopolar só se for indispensável, com a placa de retorno o mais longe possível do sistema. Eletroconvulsivoterapia: segurança não estabelecida — só com a equipa de ECP. Cardioversão programada: desligar o estimulador segundo a equipa. Avisar antes de qualquer cirurgia, exame ou fisioterapia.",
      "Não desligar nem reprogramar sem orientação; se o estimulador parar (bateria esgotada, avaria), os sintomas podem reaparecer de forma súbita e por vezes mais intensa do que antes da cirurgia. No Parkinson avançado pode surgir um quadro semelhante à síndrome de hiperpirexia-parkinsonismo (rigidez, febre, alteração da consciência, instabilidade autonómica) e, na distonia, um agravamento grave da distonia — emergência: confirmar o estado com o comando e contactar de imediato o médico e a equipa de ECP.",
      "Vigiar a ferida e o trajeto do cabo (rubor, extrusão, dor), alterações do humor e do comportamento após ajustes.",
      "A ECP não substitui toda a medicação: a maioria dos doentes continua a tomar antiparkinsónicos. Se for internado por outro motivo, cumprir o horário habitual e manter os mesmos cuidados (disfagia, «off», evitar fármacos antidopaminérgicos).",
      "O estimulador pode causar artefactos no ECG e na monitorização; não o desligar por iniciativa própria e, se necessário, contactar a equipa de ECP. Em paragem cardiorrespiratória, desfibrilhar sem atrasar, com os elétrodos o mais afastados possível do neuroestimulador, e pedir depois à equipa de ECP que verifique o sistema."
    ]},
    { t: "ECP / DBS: critérios de seleção e avaliação pré-cirúrgica", aviso: "A indicação é decidida por uma equipa multidisciplinar de doenças do movimento; os critérios variam entre centros.", itens: [
      "Doença de Parkinson idiopática com boa resposta à levodopa — em regra, melhoria motora de pelo menos 30% no teste agudo de levodopa. Exceção: o tremor resistente aos fármacos pode responder à ECP mesmo sem boa resposta à levodopa.",
      "Complicações motoras incapacitantes apesar de medicação otimizada (flutuações «on/off», discinesias) ou tremor refratário; ou efeitos adversos que impedem doses eficazes.",
      "Doença com vários anos de evolução (em regra, pelo menos 4 a 5 anos).",
      "Sem demência nem défice cognitivo significativo; sem doença psiquiátrica grave não controlada (depressão grave, psicose, ideação suicida atual); a história de tentativa de suicídio, de perturbação do controlo dos impulsos ou de uso compulsivo da medicação não exclui a cirurgia, mas exige avaliação psiquiátrica e seguimento mais apertado; sem contraindicações cirúrgicas ou alterações relevantes na RM. A idade é um critério relativo — conta mais a idade biológica e o estado geral.",
      "Expectativas realistas: melhora sobretudo o que responde à levodopa (lentidão, rigidez, tremor, períodos «off» e discinesias); não melhora, ou pode até agravar, a fala, o equilíbrio, os bloqueios que persistem em «on» e a cognição.",
      "Avaliação pré-cirúrgica: neurologia, neurocirurgia, neuropsicologia e, se necessário, psiquiatria; RM cerebral; teste agudo de levodopa.",
      "Teste agudo de levodopa: o doente fica sem medicação antiparkinsónica desde a véspera, segundo o protocolo, e é avaliado em «off» (escala motora, por vezes com vídeo); depois toma uma dose de levodopa superior à habitual e é reavaliado no pico do efeito.",
      "Preparação e fim do teste: na véspera, confirmar com o médico a hora da última toma de cada fármaco (incluindo adesivo de rotigotina e perfusões, se existirem) e registá-la. Explicar ao doente que vai estar pior de manhã e que isso é esperado. Na manhã do teste: jejum segundo o protocolo; urinar antes de começar; TA e FC deitado e em pé antes da levodopa; deslocações em cadeira de rodas ou sempre acompanhado; antiemético só se prescrito (nunca metoclopramida). Se não conseguir engolir comprimidos em «off», avisar o médico. No fim, garantir a refeição e a dose habitual seguinte no horário prescrito.",
      "Enfermagem no teste: confirmar a suspensão da medicação conforme a indicação (agonistas de longa duração, adesivos e perfusões podem ter regras próprias); em «off» o doente tem mais risco de queda, disfagia e desconforto — acompanhar na mobilização, nada por boca sem avaliar a deglutição, campainha ao alcance; registar as horas da dose e das avaliações e vigiar discinesias e hipotensão ortostática após a levodopa. No fim, retomar o esquema habitual conforme prescrição, sem atrasos."
    ]},
    { t: "ECP / DBS: cuidados perioperatórios de enfermagem", itens: [
      "Antes da cirurgia: confirmar consentimento e jejum; suspensão de antiagregantes e anticoagulantes segundo a indicação da equipa; medicação antiparkinsónica conforme a indicação da neurocirurgia (muitas vezes suspensa para a avaliação intraoperatória em «off»); preparação do couro cabeludo segundo o protocolo.",
      "Explicar ao doente e à família: a colocação dos elétrodos é muitas vezes feita com o doente acordado (com anestesia local e um quadro estereotáxico fixo à cabeça), para testar o efeito durante a cirurgia; o neuroestimulador é colocado no mesmo dia ou noutro tempo, sob anestesia geral.",
      "Pós-operatório imediato: vigilância neurológica segundo o protocolo (Glasgow, pupilas, força, fala) e sinais vitais; controlar a TA conforme prescrição (a hipertensão aumenta o risco de hemorragia).",
      "Comunicar de imediato: cefaleia intensa, vómitos, diminuição da consciência, novo défice motor ou da fala, ou crise epilética (possível hemorragia intracraniana).",
      "Retomar a medicação antiparkinsónica logo que indicado, no horário do doente e não no do serviço; registar a hora de cada toma. Antes da primeira toma oral, avaliar a deglutição (ex.: GUSS). Se o doente não conseguir engolir, comunicar de imediato ao médico para via alternativa (SNG ou adesivo transdérmico, conforme prescrição). Não triturar formulações de libertação prolongada sem confirmar com o farmacêutico. Não deixar passar doses nem prolongar o «off» (risco de rigidez grave, aspiração e síndrome de hiperpirexia-parkinsonismo).",
      "Confusão ou delirium nos primeiros dias são frequentes, sobretudo em doentes mais velhos: orientação, presença da família, evitar contenção física e comunicar ao médico — confusão nova ou que agrava, sobretudo com sonolência, cefaleia ou défice focal, exige excluir hemorragia ou outra causa (pneumocéfalo, hiponatremia, infeção).",
      "O risco de queda é elevado (confusão, «off», hipotensão ortostática, discinesias ao retomar a medicação): avaliar com a escala de Morse no pós-operatório, cama baixa e campainha ao alcance, TA deitado e em pé antes do primeiro levante, e primeiro levante sempre acompanhado.",
      "Feridas (couro cabeludo, locais dos pinos do quadro estereotáxico, trajeto do cabo atrás da orelha e no pescoço, loca do tórax): vigiar hematoma, rubor, exsudado, deiscência e saída de líquido claro; registar o aspeto em cada turno; tratar segundo o protocolo. Ensinar o doente a não coçar as feridas nem manipular ou rodar o neuroestimulador sob a pele.",
      "Efeito de microlesão: logo após a cirurgia os sintomas podem melhorar mesmo com o estimulador desligado, e podem surgir discinesias com a dose habitual — comunicar ao médico (só ele ajusta a medicação). É transitório (dias a semanas): quando passa, os sintomas voltam até a estimulação ser ajustada, o que não significa que a cirurgia falhou — explicar ao doente e à família.",
      "Ligação e programação do estimulador: feitas pela equipa de ECP (nalguns centros antes da alta, noutros semanas depois). Após cada ajuste, vigiar discinesias, alterações da fala, visão dupla, desequilíbrio, contrações musculares mantidas e formigueiros.",
      "O humor e o comportamento vigiam-se durante meses, não só nos ajustes: apatia ou depressão (sobretudo quando se reduz a medicação dopaminérgica), hipomania, impulsividade. O risco de suicídio está aumentado, sobretudo no primeiro ano: perguntar diretamente por ideias de morte ou de suicídio; se presentes, não deixar o doente sozinho e comunicar de imediato."
    ]},
    { t: "ECP / DBS: ensinos para a alta", itens: [
      "Trazer sempre o cartão do dispositivo e mostrá-lo antes de qualquer exame, tratamento ou cirurgia; avisar todos os profissionais de saúde, incluindo dentista e fisioterapeuta.",
      "Nunca fazer diatermia (ondas curtas, micro-ondas ou ultrassons terapêuticos) nem estimulação magnética transcraniana; RM só com a autorização da equipa de ECP.",
      "Usar o comando para confirmar que o estimulador está ligado e o estado da bateria; nos sistemas recarregáveis, cumprir a rotina de carregamento.",
      "Os detetores de segurança e antifurto não danificam o sistema, mas podem ligar ou desligar a estimulação: nos aeroportos, mostrar o cartão e pedir revista manual; nos pórticos das lojas, passar a passo normal, sem parar nem se encostar. Se os sintomas mudarem, confirmar com o comando que o estimulador continua ligado. Evitar a proximidade de ímanes e campos magnéticos fortes.",
      "Não suspender nem alterar a medicação por iniciativa própria; manter a fisioterapia e a terapia da fala.",
      "Procurar ajuda se houver: agravamento súbito dos sintomas (estimulador desligado ou bateria esgotada), febre, rubor, dor ou exsudado nas feridas (a infeção pode surgir semanas ou meses depois), exteriorização do cabo, alterações marcadas do humor ou do comportamento, ou novos défices neurológicos. Tristeza persistente, desinteresse, ideias de morte ou de suicídio (sobretudo no primeiro ano): contactar logo a equipa ou, se houver risco imediato, ligar 112 — a família deve conhecer este risco.",
      "Feridas: manter limpas e secas; lavar o cabelo só quando a equipa autorizar, sem esfregar as cicatrizes; não coçar nem aplicar cremes ou produtos. Retirar pontos ou agrafos no centro de saúde, na data indicada na carta de alta. Evitar alças de mala, suspensórios ou o cinto de segurança apertados sobre o neuroestimulador (uma pequena almofada no cinto ajuda).",
      "Ensinar o cuidador a usar o comando, com demonstração e devolução do ensino: confirmar se o estimulador está ligado e o nível da bateria. Se os sintomas agravarem de repente: verificar o comando, manter a medicação no horário e contactar a equipa de ECP. Se houver rigidez intensa, febre ou incapacidade de engolir, ir ao serviço de urgência. Nas semanas seguintes, estar atento a apatia, tristeza, impulsividade, gastos ou jogo excessivos, e comunicá-los.",
      "Antes da alta, rever com o doente e o cuidador o novo plano de medicação (as doses antiparkinsónicas são muitas vezes alteradas após a ECP). Entregar o horário por escrito, confirmar que sabem que fármacos deixaram de tomar e pedir que separem em casa as embalagens suspensas. Não conduzir até autorização da equipa. Registar na carta de alta o contacto da equipa de ECP e a data da primeira programação.",
      "As baterias não recarregáveis duram vários anos; a substituição faz-se com uma pequena cirurgia programada antes de se esgotarem."
    ]},
    { t: "Doenças do movimento funcionais", itens: [
      "Tremores, distonias, abalos ou alterações da marcha reais e incapacitantes, causados por uma alteração do funcionamento do sistema nervoso e não por lesão estrutural.",
      "Sinais típicos: variam com a atenção, diminuem com a distração, mudam de frequência ao acompanhar um ritmo com o outro membro.",
      "Não são «fingidos»: o doente não os controla. Tratamento com fisioterapia especializada e apoio psicológico.",
      "Enfermagem: abordagem sem julgamento; não comentar «é psicológico»; usar a mesma linguagem da equipa médica."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Parkinson sem medicação (jejum, disfagia, medicação em falta) ou suspensão abrupta, com rigidez, febre e alteração da consciência (síndrome de hiperpirexia-parkinsonismo) → sinais vitais, arrefecimento, nada por boca → chamar o médico de imediato (via alternativa).",
      "Febre, rigidez, alteração da consciência e instabilidade autonómica após antipsicóticos ou outros bloqueadores da dopamina (ex.: metoclopramida, sulpirida): síndrome neuroléptica maligna → não dar a dose seguinte, sinais vitais, arrefecimento → chamar o médico de imediato.",
      "Distonia aguda por fármacos (crise oculógira, torcicolo, contração da mandíbula ou da língua): comunicar de imediato — reverte habitualmente em minutos com anticolinérgico (ex.: biperideno) EV/IM conforme prescrição; não repetir o fármaco causal; a contração da laringe com estridor é rara mas ameaça a via aérea.",
      "Distonia generalizada intensa e contínua, com dor, febre, taquicardia ou urina escura (estado distónico — risco de rabdomiólise e insuficiência respiratória) → sinais vitais e SpO2, vigiar via aérea, diurese e cor da urina → chamar o médico de imediato.",
      "Agitação, mioclonias, tremor, febre, sudação e diarreia após fármacos serotoninérgicos (síndrome serotoninérgica) → não dar a dose seguinte do fármaco serotoninérgico, sinais vitais e temperatura, ambiente calmo → chamar o médico de imediato.",
      "Após toxina botulínica: dificuldade em engolir ou em respirar, voz fraca ou fraqueza generalizada — possível disseminação da toxina, comunicar de imediato.",
      "Estimulação cerebral profunda: agravamento súbito dos sintomas (estimulador parado; pode haver rigidez, febre e alteração da consciência) → confirmar com o comando, sinais vitais → médico e equipa de ECP de imediato. Infeção da ferida: comunicar. Ideias de suicídio: não deixar sozinho, comunicar."
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
      "Demência por corpos de Lewy: flutuações, alucinações visuais, parkinsonismo — sensibilidade grave a antipsicóticos.",
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
      "Tratamento do surto: corticoides EV em dose alta, depois corticoide oral com redução lenta conforme prescrição; plasmaférese ou imunoglobulina nos casos graves.",
      "Prevenção de recaídas (quando indicada): imunoglobulina periódica, azatioprina, micofenolato, rituximab ou tocilizumab, conforme prescrição. Os fármacos modificadores da EM não mostraram reduzir as recaídas nesta doença — o diagnóstico correto muda o tratamento.",
      "Enfermagem: avaliação seriada da acuidade visual e da dor ocular; vigiar retenção urinária (resíduo pós-miccional) e obstipação; precauções para crises na forma cortical; ensino para cumprir o desmame lento do corticoide e reconhecer uma recaída (visão, força, sensibilidade, bexiga) e contactar logo a equipa — o tratamento precoce associa-se a melhor recuperação visual."
    ]},
    { t: "Pulsos de corticoide EV — cuidados", itens: [
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
      "Vigiar de forma seriada (frequência prescrita, mais apertada na fase de progressão): capacidade vital forçada se disponível, força da tosse, contagem numa só expiração (inspirar fundo e contar em voz alta, cerca de 2 números por segundo, a ritmo de fala rápida, sem voltar a respirar; registar o número e a tendência), força cervical e deglutição. SpO2 baixa é sinal tardio.",
      "Disautonomia: arritmias, TA muito variável, retenção urinária, íleo — monitorização cardíaca.",
      "Imunoglobulina EV ou plasmaférese conforme prescrição (vigiar reações à perfusão, função renal, hipotensão).",
      "Prevenção de TVP, úlceras por pressão, disfagia/aspiração; controlo da dor; apoio psicológico (doente consciente e muito dependente)."
    ]},
    { t: "Cuidados gerais", itens: [
      "Pés: inspeção diária, calçado adequado, testar a temperatura da água com cotovelo/termómetro, hidratação da pele, cortar unhas a direito.",
      "Posicionamentos que evitem compressão de nervos (cabeça do peróneo, cotovelo).",
      "Prevenção de quedas (perda da sensibilidade postural, sobretudo no escuro)."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Regra 20/30/40: capacidade vital < 20 mL/kg, pressão inspiratória máxima menos negativa que −30 cmH2O ou pressão expiratória máxima < 40 cmH2O; ou queda > 30% da capacidade vital face ao valor basal. Também: tosse fraca, dificuldade em contar numa expiração, respiração paradoxal, uso de músculos acessórios → comunicar de imediato (avaliação para UCI).",
      "Disfagia ou fraqueza cervical/facial bilateral → suspender a via oral, cabeceira elevada, contagem numa só expiração e força da tosse → comunicar ao médico de imediato (risco de aspiração e falência respiratória).",
      "Arritmias ou oscilações extremas da TA → monitorização cardíaca, ECG, mudanças de posição lentas, atropina disponível conforme protocolo → chamar o médico de imediato."
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
      "Vigilância seriada: ptose, voz, deglutição, força cervical e contagem numa só expiração (inspirar fundo e contar em voz alta, cerca de 2 números por segundo, a ritmo de fala rápida, sem voltar a respirar; registar o número e a tendência) (ou capacidade vital, se prescrita), registando a tendência. Planear refeições e atividades para as horas de melhor efeito da medicação."
    ]},
    { t: "Crise miasténica vs crise colinérgica", tabela: {
      cab: ["", "Crise miasténica", "Crise colinérgica (excesso de medicação)"],
      lin: [
        ["Causa", "Infeção, cirurgia, fármacos, redução da medicação", "Doses elevadas de anticolinesterásico"],
        ["Sinais", "Fraqueza, ptose, disfagia, insuficiência respiratória", "Fraqueza + secreções abundantes, sudação, cólicas, diarreia, bradicardia, miose, fasciculações"]
      ],
      nota: "Ambas podem causar insuficiência respiratória — vigilância respiratória como no Guillain-Barré (regra 20/30/40). A crise colinérgica é rara com doses habituais; perante fraqueza respiratória, a prioridade é a via aérea, seja qual for o tipo de crise."
    }},
    { t: "Sinais de alarme — crise miasténica", alarme: true, itens: [
      "Fraqueza cervical crescente (não levanta a cabeça da almofada), voz anasalada ou a apagar-se, disfagia nova, tosse fraca → nada por boca, cabeceira elevada, contagem numa só expiração → chamar o médico de imediato.",
      "Dispneia sobretudo deitado, uso de músculos acessórios, contagem numa só expiração a diminuir (abaixo de 20 é alarme; a SpO2 baixa é sinal tardio) → sentar, aspirador e insuflador manual prontos → chamar o médico de imediato; preparar UCI.",
      "Atuar: cabeceira elevada, nada por boca se disfagia, chamar o médico de imediato, preparar vigilância respiratória/UCI."
    ]},
    { t: "Fármacos que podem agravar a miastenia", tipo: "precaucao", itens: [
      "Antibióticos: aminoglicosídeos, fluoroquinolonas, macrólidos.",
      "Magnésio EV, bloqueadores neuromusculares, betabloqueantes, alguns antiarrítmicos (ex.: procainamida, quinidina), quinino e hidroxicloroquina, toxina botulínica, D-penicilamina, inibidores de checkpoint imunitário, contraste iodado (raro).",
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
      "Encefalopatia de Wernicke (défice de tiamina): confusão, alterações oculomotoras, ataxia (a tríade completa é rara — basta a suspeita). Doentes de risco: álcool, desnutrição, vómitos prolongados, cirurgia bariátrica. Tiamina EV precoce conforme prescrição; a hipoglicemia corrige-se de imediato, sem esperar pela tiamina.",
      "Défice de vitamina B12: neuropatia, alterações da marcha (degenerescência combinada da medula), défice cognitivo.",
      "Disfunção tiroideia: alterações cognitivas, miopatia, neuropatia."
    ]},
    { t: "Álcool", itens: [
      "Síndrome de abstinência: tremor, sudação, ansiedade, taquicardia — monitorizar com escala (ex.: CIWA-Ar) conforme protocolo.",
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
  resumo: "A especialidade médica de Neurologia: formação e áreas de diferenciação. Sem conteúdo clínico específico para a prática de enfermagem.",
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
      "Febre, dessaturação, taquipneia ou aumento de secreções sem outra causa: suspeitar de pneumonia de aspiração (pode ser silenciosa) → suspender a via oral, cabeceira elevada, aspirar se necessário, sinais vitais e SpO2 → comunicar ao médico.",
      "Obstrução da via aérea por alimento: manobras de desobstrução e pedir ajuda.",
      "Saída acidental de gastrostomia: cobrir o estoma e contactar de imediato — o trajeto pode fechar em poucas horas."
    ]}
  ]
},
{
  id: "linguagem", cap: null, parte: "p3", icone: "💬",
  titulo: "Avaliação da linguagem e comunicação",
  pags: null,
  resumo: "Avaliar a linguagem e a fala à cabeceira, reconhecer afasias, parafasias e disartria, registar com exemplos e adaptar a comunicação. Uma alteração súbita da linguagem é sinal de alarme de AVC.",
  relacionados: ["semiologia", "avc", "disfagia", "demencias"],
  seccoes: [
    { t: "O essencial", itens: [
      "Afasia: perturbação da linguagem por lesão cerebral — compreender, falar, nomear, repetir, ler e escrever —, quase sempre do hemisfério esquerdo (também na maioria dos canhotos — cerca de dois terços).",
      "Disartria: a linguagem está intacta, mas a articulação da palavra é difícil (fala arrastada, «enrolada»). Disfonia: alteração da voz. Mutismo: ausência de fala.",
      "Apraxia da fala: dificuldade em programar os movimentos da fala, com erros inconsistentes e tentativas de autocorreção; acompanha muitas vezes a afasia de Broca.",
      "A afasia não é défice intelectual nem confusão: o doente pode compreender muito mais do que consegue dizer. No delirium, o problema principal é a atenção, que flutua.",
      "Antes de avaliar: nível de consciência, audição e visão (óculos e prótese auditiva colocados), prótese dentária, língua materna e escolaridade (leitura e escrita)."
    ]},
    { t: "Avaliação à cabeceira", itens: [
      "Fala espontânea: fazer perguntas abertas («O que o trouxe ao hospital?») e observar a fluência — débito de palavras, esforço, frases curtas ou «telegráficas», pausas para encontrar palavras.",
      "Compreensão: dar ordens simples sem gestos («Feche os olhos», «Aponte para a janela») e depois mais complexas («Toque na orelha esquerda com a mão direita»); perguntas de sim/não (confirmar se o «sim/não» é fiável).",
      "Nomeação: pedir o nome de objetos do dia a dia (relógio, caneta, óculos) e de partes deles (ponteiro, tampa).",
      "Repetição: pedir que repita uma frase curta («Hoje está um dia de sol»).",
      "Leitura e escrita: ler e cumprir uma ordem escrita; escrever uma frase simples (excluir antes défice visual ou motor da mão dominante).",
      "Fala (articulação e voz): pedir que repita «pa-pa-pa», «ta-ta-ta», «ka-ka-ka» e «pa-ta-ka», e que leia ou diga uma frase; observar clareza, ritmo, volume, voz rouca ou nasalada.",
      "No AVC, o item 9 (Linguagem) e o item 10 (Disartria) da NIHSS pontuam estes défices (ver Escalas)."
    ]},
    { t: "Erros a reconhecer e como registar", itens: [
      "Parafasia fonémica: troca de sons dentro da palavra («ganela» por «janela»).",
      "Parafasia semântica: troca por uma palavra relacionada («garfo» por «faca»).",
      "Neologismos: palavras que não existem. Jargão: discurso fluente mas sem sentido.",
      "Anomia: não encontra a palavra e recorre a rodeios («aquilo para ver as horas»).",
      "Perseveração: repete a resposta anterior. Ecolalia: repete o que ouve. Agramatismo: frases sem palavras de ligação («Hospital… perna… ontem»).",
      "Registar o que se observa com exemplos concretos (ex.: «diz “ganela” por janela; cumpre ordens simples, não as complexas»), e não apenas «afásico» — permite comparar ao longo do turno e entre turnos."
    ]},
    { t: "Tipos de afasia — orientação rápida", aviso: "Classificação de orientação: na prática os quadros são muitas vezes mistos. A avaliação detalhada é feita pela terapia da fala.", itens: [
      "Broca (de expressão): não fluente, compreensão relativamente preservada, repetição alterada. Fala com esforço, frases curtas, agramatismo; o doente percebe as dificuldades e frustra-se; muitas vezes com hemiparesia direita.",
      "Wernicke (de compreensão): fluente, compreensão muito alterada, repetição alterada. Muitas parafasias e neologismos, jargão; pouca consciência do défice — pode parecer confuso ou «psiquiátrico». Muitas vezes não há fraqueza (pode haver só defeito do campo visual direito): a ausência de défice motor não exclui AVC.",
      "Global: não fluente, compreensão e repetição muito alteradas. Lesão extensa (ex.: oclusão da artéria cerebral média esquerda); comunicação muito limitada.",
      "De condução: fluente, compreensão preservada, repetição muito alterada. Parafasias fonémicas; o doente tenta corrigir-se.",
      "Transcortical: repetição preservada (surpreendentemente conservada). Na motora, a fala é não fluente com compreensão preservada; na sensitiva, a fala é fluente com compreensão alterada; na mista, a fala é não fluente e a compreensão alterada, muitas vezes com ecolalia.",
      "Anómica: fluente, compreensão e repetição preservadas. Dificuldade em encontrar palavras, rodeios; a forma mais ligeira — frequente na recuperação e nas demências.",
      "Afasia de instalação progressiva (semanas a meses) sugere tumor ou doença neurodegenerativa (ex.: afasia progressiva primária) — comunicar ao médico.",
      "Afasia, disartria ou mutismo de início súbito são sinal de alarme de AVC — ativar a Via Verde segundo o protocolo do hospital."
    ]},
    { t: "Disartria e outras alterações da fala", itens: [
      "Disartria flácida (lesão do neurónio motor inferior — núcleos do tronco ou nervos cranianos —, da junção neuromuscular ou do músculo; ex.: Guillain-Barré, miastenia, botulismo): voz nasalada, fraca, com escape de ar.",
      "Disartria por lesão unilateral do neurónio motor central (ex.: AVC lacunar ou cortical): a mais frequente no AVC — articulação imprecisa, geralmente ligeira, muitas vezes com parésia facial central.",
      "Disartria espástica (lesão bilateral do neurónio motor central — ex.: AVC bilaterais, paralisia pseudobulbar): fala lenta, esforçada, voz tensa.",
      "Disartria atáxica (cerebelo — ex.: AVC ou hemorragia cerebelosa, EM, álcool, ataxias hereditárias como Machado-Joseph): fala «escandida», com sílabas irregulares, como se estivesse embriagado; de início súbito é sinal de alarme (AVC da fossa posterior).",
      "Disartria hipocinética (Parkinson): voz baixa e monótona, que se vai apagando, fala apressada.",
      "Disartria hipercinética (ex.: doença de Huntington, distonias): fala irregular, com interrupções e variações súbitas de volume e ritmo.",
      "Disartria mista: combinação de tipos — típica da ELA (flácida e espástica); também na EM (espástica e atáxica) e nos parkinsonismos atípicos.",
      "Na miastenia, a voz e a articulação pioram com a fala prolongada e a voz fica anasalada (fatigabilidade, típica da doença); uma voz que se apaga mais depressa do que o habitual, sobretudo com disfagia, fraqueza cervical ou dispneia, é sinal de possível crise miasténica — comunicar de imediato.",
      "A disartria e a afasia acompanham-se muitas vezes de disfagia: rastrear a deglutição com o instrumento do serviço (ex.: GUSS no AVC) antes de qualquer ingestão oral. Se o doente não compreender ou não conseguir executar os pedidos do rastreio (tossir, pigarrear, engolir saliva), o resultado não é fiável: manter a via oral suspensa, pedir via alternativa para a medicação e sinalizar para terapia da fala."
    ]},
    { t: "Comunicar com o doente com afasia", itens: [
      "Ambiente calmo, sem ruído; olhar para o doente e falar de frente, devagar, com frases curtas e uma ideia de cada vez.",
      "Usar perguntas de sim/não, gestos, imagens, escrita ou um quadro de comunicação; dar tempo para responder.",
      "Não falar mais alto, não completar as frases pelo doente e não o tratar como criança — a afasia não é défice intelectual.",
      "Confirmar a compreensão de forma objetiva (pedir que mostre ou execute), sobretudo em consentimentos, ensinos e avaliação da dor (usar escalas visuais ou comportamentais).",
      "Envolver a família na estratégia de comunicação e pedir avaliação pela terapia da fala."
    ]},
    { t: "Comunicar com o doente com disartria ou sem fala", itens: [
      "Dar tempo, reduzir o ruído e pedir que fale devagar, com frases curtas; se não se perceber, dizê-lo com franqueza e pedir que repita ou escreva — não fingir que se percebeu.",
      "Repetir o que se percebeu para confirmar («Disse que tem dor no braço, é isso?»).",
      "Meios alternativos: quadro de comunicação com letras, palavras ou imagens, papel e caneta, tablet; combinar um sinal para sim e não.",
      "Doentes entubados ou traqueostomizados: quadro de comunicação. Válvula fonatória só no doente traqueostomizado, segundo prescrição e protocolo, e sempre com o cuff totalmente desinsuflado — com o cuff insuflado o doente não consegue expirar (risco de asfixia); retirar de imediato se houver dificuldade respiratória."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Avaliar a linguagem e a fala na admissão (registo de base) e sempre que haja alteração do estado neurológico. No AVC agudo, reavaliar com a frequência da vigilância neurológica prescrita — muito mais apertada nas primeiras horas após trombólise ou trombectomia, segundo o protocolo — e nunca menos de uma vez por turno.",
      "Sinalizar ao médico a necessidade de avaliação pela terapia da fala, segundo o circuito do serviço, indicando se é para linguagem, deglutição ou ambas. Integrar as recomendações no plano de cuidados e registar no SClínico a estratégia que resulta com este doente (ex.: «sim/não fiável com aceno; cumpre ordens simples; usa quadro de imagens»); transmiti-la na passagem de turno.",
      "Campainha ao alcance da mão não afetada e do lado não negligenciado; pedir ao doente que mostre como a usa. Se não a usar de forma fiável (afasia de compreensão, apraxia, negligência), planear rondas regulares para dor, eliminação, sede e posicionamento, e reforçar as medidas de prevenção de quedas.",
      "Dor: confirmar primeiro se o «sim/não» é fiável, com perguntas de resposta conhecida alternando sim e não (ex.: «Chama-se …?», «Estamos em casa?»). Se for fiável, usar autoavaliação visual (escala de faces ou régua numérica, pedindo que aponte); se não, usar a escala comportamental adotada no serviço (ex.: PAINAD). Registar sempre a escala usada, para o turno seguinte comparar com a mesma.",
      "Consentimentos: a afasia, por si só, não retira a capacidade de decidir. Avaliar se o doente compreende a informação com meios adaptados (sim/não fiável, escrita, imagens) e registar como foi avaliado. Se não tiver capacidade, seguir o protocolo do hospital; a família é ouvida sobre a vontade do doente, mas não consente automaticamente em seu nome.",
      "Estar atento à frustração, ao isolamento e à tristeza, frequentes na afasia; valorizar cada tentativa de comunicação."
    ]},
    { t: "Ensinos à família e ao cuidador", itens: [
      "Explicar que a afasia afeta a linguagem e não a inteligência: falar com o doente como adulto e incluí-lo nas conversas.",
      "Falar de frente, devagar, com frases curtas e uma ideia de cada vez; usar gestos, imagens e escrita; dar tempo para responder.",
      "Não corrigir cada erro nem completar sempre as frases; aceitar outras formas de comunicar.",
      "Manter os óculos e a prótese auditiva; continuar em casa os exercícios indicados pela terapia da fala.",
      "Reconhecer sinais de novo AVC — boca ao lado, falta de força num braço, dificuldade em falar — e ligar 112 de imediato, anotando a hora de início.",
      "Antes da alta: descrever na carta de alta de enfermagem como o doente comunica e a estratégia que resulta, e confirmar que ficou pedida a continuidade da terapia da fala (ambulatório, centro de saúde ou RNCCI)."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Afasia, disartria ou mutismo de início súbito: possível AVC — registar a hora (ou a última vez visto bem), ativar a Via Verde segundo o protocolo do hospital, avaliar a glicemia capilar (a hipoglicemia pode simular AVC) sem atrasar a ativação e suspender a via oral (incluindo medicação) até nova avaliação da deglutição.",
      "Agravamento da linguagem ou da fala num doente já com défice (nova lesão, hemorragia, edema, crise epilética): comunicar de imediato ao médico.",
      "Alteração transitória da linguagem que recuperou (possível AIT): comunicar sempre, mesmo que o doente já esteja bem.",
      "Disartria ou voz fraca com disfagia ou dificuldade respiratória (ex.: miastenia, Guillain-Barré): risco de aspiração e de insuficiência respiratória — suspender a via oral, elevar a cabeceira e comunicar de imediato.",
      "Confusão de início agudo: avaliar a atenção e procurar parafasias, neologismos ou falha na compreensão — uma afasia fluente (Wernicke) de início súbito pode parecer confusão e é um possível AVC (ativar a Via Verde); se o problema principal for a atenção, que flutua, pensar em delirium, procurar a causa e comunicar ao médico."
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
    { t: "Vigilância após queda (salvo prescrição ou protocolo diferente)", itens: [
      "Todas as quedas: avaliar de imediato o Glasgow, as pupilas, a força dos 4 membros, os sinais vitais, a SpO2, a glicemia capilar, a dor, deformidades e feridas; pedir observação médica.",
      "Queda presenciada, sem traumatismo craniano e sem anticoagulação: repetir sinais vitais e Glasgow ao fim de 1 h e depois uma vez por turno durante 24 h. Reavaliar dor e mobilidade no primeiro levante, porque a fratura pode só aparecer aí.",
      "Traumatismo craniano, queda não presenciada (não se pode excluir que bateu com a cabeça) ou doente anticoagulado: vigilância neurológica (Glasgow, pupilas, força dos membros, FR, FC, TA, temperatura, SpO2) de 30 em 30 min até o Glasgow voltar ao valor de base; depois de 30 em 30 min durante 2 h, de hora a hora durante 4 h e de 2 em 2 h até completar 24 h.",
      "Doente com défice cognitivo prévio: a referência é o Glasgow habitual dele (ex.: 14), não 15.",
      "Anticoagulado em dose terapêutica, ou antiagregado com outro fármaco além do AAS isolado: informar logo o médico do nome do fármaco e da hora da última toma; não dar a dose seguinte sem decisão médica. Com heparina profilática, perguntar se se mantém.",
      "Se agravar: voltar a 30 em 30 min e recomeçar o esquema. Às 24 h, registar se o médico mantém ou suspende a vigilância.",
      "Comunicar de imediato: queda de 1 ponto no Glasgow mantida durante 30 min, ou de 2 pontos na resposta motora, ou de 3 na ocular ou verbal; agitação ou comportamento novo; cefaleia intensa ou a agravar; vómitos repetidos; anisocoria; nova assimetria da face ou dos membros; crise epilética.",
      "Ensinar ao doente e à família, e reforçar na alta: o hematoma subdural pode aparecer dias ou semanas depois. Sonolência, confusão, cefaleia ou fraqueza nova são motivo para ir à urgência."
    ] },
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
      "Após queda: sonolência, confusão nova, cefaleia, vómitos ou novo défice, sobretudo se anticoagulado → não levantar, Glasgow, pupilas, glicemia capilar, registar a hora → chamar o médico de imediato (TC).",
      "Dor na anca com membro encurtado e em rotação externa: suspeitar de fratura do colo do fémur → não levantar nem mobilizar o membro, transferir com meios adequados, analgesia conforme prescrição → comunicar ao médico.",
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
      "Disreflexia autonómica (lesão medular a nível de T6 ou acima): subida súbita da TA, cefaleia intensa, rubor e sudação acima da lesão, bradicardia. Sentar o doente com as pernas para baixo (se a coluna estiver estável), desapertar roupa e meias, verificar algália (dobrada ou obstruída), bexiga cheia ou fecaloma, medir a TA a cada 2–5 minutos e chamar o médico.",
      "Retenção urinária nova com dor lombar, fraqueza dos membros inferiores ou anestesia em sela: suspeitar de compressão medular ou cauda equina → força, sensibilidade e resíduo vesical, esvaziar a bexiga conforme protocolo → comunicar ao médico de imediato (RM urgente).",
      "Distensão abdominal, vómitos, ausência de dejeções e gases: suspeitar de íleo (Guillain-Barré, disautonomia) ou oclusão → suspender a via oral, cabeceira elevada ou posição lateral, sinais vitais → comunicar ao médico (SNG em drenagem se prescrita).",
      "Febre com confusão e urina turva: suspeitar de urossepsis → sinais vitais completos, urina e hemoculturas conforme prescrição, verificar a algália → comunicar ao médico de imediato."
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
      "Registar a capacidade vital e/ou a contagem numa só expiração conforme prescrição, para comparar a tendência.",
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
      "Dispneia em repouso, respiração paradoxal (abdómen recolhe na inspiração), sonolência ou confusão nova (hipercapnia) → sentar, VNI se prescrita, oxigénio só no alvo prescrito, confirmar as decisões antecipadas → chamar o médico de imediato.",
      "Infeção respiratória (no doente neuromuscular a descompensação pode ser muito rápida) → tosse assistida ou aspiração, FR e SpO2 mais frequentes, VNI conforme prescrição → comunicar ao médico precocemente.",
      "VNI: alarme de desconexão ou grande fuga, intolerância súbita à máscara → ir de imediato, verificar circuito e ajuste da máscara, SpO2; insuflador manual se dependente → chamar o médico se não resolver.",
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
      "Ataxia súbita (horas), com cefaleia, vómitos, vertigem ou alteração da consciência: possível AVC ou hemorragia cerebelosa (risco de compressão do tronco e hidrocefalia) → Glasgow, pupilas, glicemia capilar, nada por boca, registar a hora → Via Verde AVC e médico de imediato.",
      "Engasgamento frequente, febre ou dessaturação: suspeitar de aspiração → suspender a via oral, cabeceira elevada, aspirar se necessário, SpO2 → comunicar ao médico e pedir reavaliação da deglutição.",
      "Ataxia com confusão e alteração dos movimentos oculares em doente com consumo de álcool, desnutrição ou vómitos prolongados: possível encefalopatia de Wernicke — comunicar de imediato; tiamina EV precoce conforme prescrição (ver «Manifestações neurológicas nas doenças sistémicas»)."
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
      "Vigilância respiratória (contagem numa só expiração, tosse, sinais de hipoventilação noturna) e da deglutição.",
      "Transferências seguras com produtos de apoio; prevenção de úlceras por pressão e de quedas; respeitar a autonomia e a forma como a pessoa costuma ser posicionada."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Infeção respiratória, tosse ineficaz ou dispneia: descompensação rápida — comunicar precocemente.",
      "Após punção lombar: cefaleia intensa, febre, dor lombar crescente ou défices novos nos membros inferiores → sinais vitais, força e sensibilidade das pernas, micção e local de punção → comunicar ao médico de imediato.",
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
      "Vigilância respiratória seriada como no Guillain-Barré (contagem numa só expiração, força da tosse, força cervical, capacidade vital se prescrita).",
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
      "Síncope, palpitações, bradicardia ou nova perturbação no ECG → deitar, sinais vitais, ECG e monitorização cardíaca → chamar o médico de imediato.",
      "Sonolência excessiva, cefaleia matinal ou confusão: possível hipercapnia → FR e SpO2, cabeceira elevada, oxigénio só no alvo prescrito, rever sedativos → comunicar ao médico (gasimetria).",
      "Após sedação ou anestesia: depressão respiratória tardia → vigiar FR, SpO2 e sonolência durante mais tempo; não dar sedativos nem opioides sem confirmar → chamar o médico; EEMI se não desperta ou FR baixa."
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
      "Perda de peso rápida, engasgamento frequente, febre: risco de desnutrição e aspiração → suspender a via oral se engasgamento, sinais vitais, pesar → comunicar ao médico; pedir nutrição e terapia da fala.",
      "Sonolência excessiva, rigidez nova ou febre após iniciar/ajustar antipsicóticos (possível síndrome neuroléptica maligna) → não dar a dose seguinte do antipsicótico, sinais vitais e temperatura → chamar o médico de imediato."
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
      "Síncope, bradicardia ou bloqueio no ECG (cardite) → deitar, sinais vitais, ECG e monitorização cardíaca → chamar o médico de imediato.",
      "Fraqueza progressiva dos membros, alteração da consciência ou rigidez da nuca marcada → Glasgow, força (MRC), sinais vitais, registar a hora → comunicar ao médico de imediato."
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
      "Imunoglobulina EV: ritmo de perfusão crescente conforme protocolo; vigiar febre, arrepios, cefaleia, rubor, hipotensão; hidratação; atenção, até 2–3 dias depois, a cefaleia intensa com rigidez da nuca (meningite assética); sinais de trombose (défice neurológico novo, dor torácica, dor ou edema de um membro), com maior risco em idosos e doentes imobilizados; função renal e débito urinário; urina escura ou anemia (hemólise); dispneia.",
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
      "Doente sob inibidor do complemento com febre, cefaleia ou exantema: possível infeção meningocócica, mesmo se vacinado → sinais vitais, acesso venoso, hemoculturas e antibiótico sem atrasos conforme prescrição → chamar o médico de imediato.",
      "Agravamento rápido da força, da deglutição ou da respiração (miastenia, Guillain-Barré): vigilância respiratória e comunicar de imediato.",
      "Plasmaférese: formigueiros peribucais, cãibras ou tetania (hipocalcemia), hipotensão → abrandar ou parar a sessão conforme protocolo, deitar, sinais vitais, cálcio conforme prescrição → avisar a equipa de plasmaférese e o médico."
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
      "Imunoterapia precoce: corticoides, imunoglobulina EV e/ou plasmaférese; depois, nas formas graves, outros imunossupressores; remoção do tumor quando existe.",
      "A recuperação pode ser lenta (meses) e exige reabilitação."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Segurança: agitação, alucinações e crises — ambiente calmo, vigilância próxima, cama baixa; contenção só como último recurso. Os antipsicóticos podem agravar o quadro (rigidez, febre, instabilidade autonómica, semelhante à síndrome neuroléptica maligna) — se prescritos, vigiar temperatura, rigidez e CK.",
      "Registo das crises e dos movimentos anómalos (hora, duração, descrição; vídeo se o protocolo permitir).",
      "Vigilância autonómica: FC, TA, temperatura, respiração; balanço hídrico e natremia (anti-LGI1).",
      "Cuidados durante imunoglobulina, plasmaférese e corticoides (ver temas respetivos).",
      "Apoio à família: o quadro assusta e parece «psiquiátrico» — explicar que é uma doença neurológica tratável."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Crises repetidas ou estado de mal; diminuição da consciência → proteger, posição lateral, oxigénio, glicemia capilar, cronometrar, protocolo de estado de mal → chamar o médico de imediato; EEMI se via aérea em risco.",
      "Hipoventilação, bradicardia ou pausas cardíacas, oscilações extremas de TA ou temperatura → monitorização cardíaca e SpO2, via aérea, material de emergência junto ao doente → chamar o médico de imediato (avaliar UCI)."
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
        ["Grau EV", "Coma"]
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
      "Melenas, hematemeses, hipotensão ou taquicardia (hemorragia digestiva) → posição lateral se vómitos, sinais vitais, acesso venoso calibroso, nada por boca → chamar o médico de imediato.",
      "Febre, dor abdominal ou aumento da ascite (infeção) → sinais vitais, perímetro abdominal, colheitas conforme prescrição → comunicar ao médico sem demora.",
      "Assimetria pupilar ou défice focal (não é típico da encefalopatia hepática: pensar em hematoma subdural ou AVC) → Glasgow, pupilas, glicemia capilar, registar a hora → chamar o médico de imediato."
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
      "Dispneia em repouso, respiração paradoxal, sonolência ou confusão nova (hipercapnia) → sentar, VNI se prescrita, oxigénio só no alvo prescrito, confirmar as decisões antecipadas → chamar o médico de imediato.",
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
      "Após DVP: cefaleia, vómitos, sonolência ou regressão dos sintomas (disfunção da derivação) → Glasgow, pupilas e sinais vitais, registar a hora → comunicar de imediato ao médico/neurocirurgia.",
      "Cefaleia que agrava em pé (hiperdrenagem) ou novo défice (hematoma subdural) → deitar, Glasgow, pupilas e força → comunicar ao médico (de imediato se novo défice).",
      "Febre, rubor no trajeto do cateter ou dor abdominal (infeção) → sinais vitais, Glasgow, registar o aspeto do trajeto → comunicar ao médico/neurocirurgia sem demora."
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
      "Cefaleia muito intensa e progressiva, vómitos repetidos → avaliar a visão e a Glasgow, analgesia e antiemético conforme prescrição → comunicar ao médico de imediato."
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
      "Cefaleia progressiva, vómitos, alteração visual ou da consciência (hipertensão intracraniana) → cabeceira a 30°, Glasgow, pupilas, sinais vitais → comunicar ao médico de imediato (na criptocócica pode ser precisa punção evacuadora).",
      "Agravamento neurológico após iniciar antirretrovirais (possível síndrome inflamatória de reconstituição imune) → avaliação neurológica, registar → comunicar ao médico de imediato; não suspender os antirretrovirais por iniciativa própria.",
      "Crises convulsivas → proteger, posição lateral, oxigénio, glicemia capilar, cronometrar → chamar o médico; 5 min ou mais, ou sem recuperar entre crises: protocolo de estado de mal."
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
      "Subida do nível sensitivo, fraqueza dos braços ou dificuldade respiratória → marcar o novo nível, contagem numa só expiração, SpO2, cabeceira elevada → chamar o médico de imediato (avaliar UCI).",
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
      "Cefaleia progressiva, vómitos, sonolência ou alteração visual (hipertensão intracraniana, hidrocefalia) → cabeceira a 30°, Glasgow, pupilas e visão → comunicar ao médico de imediato.",
      "Diurese muito abundante com sede intensa, confusão ou sódio alto (diabetes insípida descompensada), sobretudo se não consegue beber → balanço hídrico, peso, natremia conforme prescrição, garantir acesso a água → comunicar ao médico de imediato.",
      "Olho vermelho, doloroso ou visão turva (uveíte, nevrite ótica): avaliação oftalmológica urgente.",
      "Síncope, palpitações ou bradicardia (sarcoidose cardíaca) → deitar, sinais vitais, ECG e monitorização cardíaca → chamar o médico de imediato.",
      "Febre ou sinais de infeção em doente imunossuprimido; confusão, poliúria e obstipação (hipercalcemia) → sinais vitais completos, balanço hídrico, colheitas conforme prescrição → comunicar ao médico de imediato."
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
      "Confusão, sonolência ou náuseas (hiponatremia, toxicidade) → Glasgow, prevenção de quedas, não dar a dose seguinte sem confirmar → comunicar ao médico (sódio conforme prescrição).",
      "Défice sensitivo persistente ou outros sintomas neurológicos (causa secundária) → avaliar e registar com exemplos → comunicar ao médico."
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
      "Olho vermelho, doloroso ou com diminuição da visão (queratite de exposição) → reforçar a lubrificação e a oclusão conforme prescrição → comunicar ao médico no próprio dia (avaliação oftalmológica).",
      "Vesículas no ouvido com dor intensa, hipoacusia ou vertigem (Ramsay Hunt) → analgesia conforme prescrição, cobrir as lesões, prevenção de quedas → comunicar ao médico no próprio dia (antiviral precoce)."
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
      "Síncope, bradicardia ou nova alteração no ECG (perturbação da condução) → deitar, sinais vitais, ECG e monitorização cardíaca → chamar o médico de imediato.",
      "Desidratação por diarreia ou perda de peso rápida → balanço hídrico, peso, TA deitado e de pé → comunicar ao médico (hidratação e ionograma conforme prescrição).",
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
    {nome: "Atrofia multissistémica (AMS)", procura: "Atrofia multissistémica"},
    {nome: "Degenerescência corticobasal", procura: "Degenerescência corticobasal"},
    {nome: "Demência por corpos de Lewy (DCL)", tema: "dcl"}
  ],
  seccoes: [
    { t: "Principais formas", itens: [
      "Paralisia supranuclear progressiva (PSP): quedas precoces, sobretudo para trás; dificuldade em olhar para baixo; rigidez do pescoço; disartria e disfagia; alterações do comportamento.",
      "Atrofia multissistémica (AMS): disautonomia marcada (hipotensão ortostática grave, retenção ou incontinência urinária, disfunção sexual) com parkinsonismo e/ou ataxia; ressonar e estridor noturno; perturbação do comportamento do sono REM.",
      "Degenerescência corticobasal: sintomas muito assimétricos — rigidez e distonia de um membro, dificuldade em executar gestos (apraxia), mioclonias, por vezes o membro «parece não obedecer».",
      "Demência por corpos de Lewy: ver «Demência por corpos de Lewy (DCL)» no grupo Demências (A–Z) e o tema «Demências»."
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
      "Os fármacos a evitar no Parkinson aplicam-se igualmente: antipsicóticos típicos (ex.: haloperidol) e a maioria dos atípicos (ex.: risperidona, olanzapina), metoclopramida e prometazina."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Estridor respiratório (ruído agudo na inspiração), sobretudo noturno, na AMS: comunicar — risco de obstrução da via aérea.",
      "Síncopes repetidas por hipotensão ortostática → deitar, TA deitado e de pé, levante faseado e acompanhado → comunicar ao médico (rever anti-hipertensores).",
      "Engasgamento frequente, febre ou dessaturação (aspiração) → suspender a via oral, cabeceira elevada, aspirar se necessário, SpO2 → comunicar ao médico e pedir reavaliação da deglutição."
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
      "Crises repetidas ou diminuição da consciência → proteger, posição lateral, oxigénio, glicemia capilar e TA → chamar o médico de imediato; EEMI se via aérea em risco.",
      "Perda súbita de visão → avaliar a visão de cada olho e registar a hora, TA e Glasgow, segurança (campainha à mão, levante acompanhado) → comunicar ao médico de imediato.",
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
      "Agravamento da cefaleia, vómitos, diminuição da consciência ou novo défice (hemorragia ou hipertensão intracraniana) → Glasgow, pupilas e sinais vitais, registar a hora → chamar o médico de imediato (TC urgente); confirmar com ele a dose seguinte de anticoagulante.",
      "Crises repetidas → proteger, posição lateral, oxigénio, glicemia capilar, cronometrar e registar → chamar o médico; 5 min ou mais, ou sem recuperar entre crises: protocolo de estado de mal.",
      "Hemorragia em doente anticoagulado → comprimir se acessível, sinais vitais, Glasgow e pupilas, colher as análises prescritas; não dar a dose seguinte sem confirmar → chamar o médico de imediato."
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
      "Queda da consciência, nova anisocoria, agravamento do défice (edema, hemorragia, hidrocefalia) → cabeceira a 30°, via aérea, Glasgow, pupilas e sinais vitais, registar a hora → chamar o médico de imediato (TC urgente); EEMI se Glasgow ≤ 8.",
      "Crises repetidas → proteger, posição lateral, oxigénio, glicemia capilar, cronometrar e registar → chamar o médico; 5 min ou mais, ou sem recuperar entre crises: protocolo de estado de mal.",
      "Diurese muito abundante com sede intensa (diabetes insípida) ou confusão com sódio baixo → balanço hídrico rigoroso, densidade urinária e natremia conforme prescrição, acesso a água se consciente → comunicar ao médico de imediato.",
      "Febre, rigidez da nuca ou saída de líquido pela ferida (infeção, fístula de LCR) → sinais vitais e Glasgow, penso estéril seco, registar o aspeto e a quantidade do líquido → comunicar ao médico/neurocirurgia de imediato."
    ]}
  ]
},
{
  id: "vasculites", cap: null, parte: "p4", icone: "🔥",
  titulo: "Vasculites do sistema nervoso central",
  pags: null,
  resumo: "Inflamação dos vasos sanguíneos do cérebro, da medula ou dos nervos — isolada (angeíte primária do SNC) ou no contexto de doenças sistémicas ou infeções. Provocam AVC em pessoas sem fatores de risco, cefaleia e alterações cognitivas. O tratamento com imunossupressores exige cuidados de enfermagem específicos.",
  relacionados: ["avc-isquemico", "avc-hemorragico", "trombectomia", "pres", "tvc", "autoimunes", "imunodeprimido"],
  subtemas: [
    {nome: "Arterite de células gigantes (temporal)", procura: "Arterite de células gigantes"},
    {nome: "Angeíte primária do SNC", procura: "Angeíte primária do SNC"},
    {nome: "Vasculites sistémicas (lúpus, Behçet…)", procura: "Vasculites sistémicas"},
    {nome: "Vasculites infeciosas", procura: "Vasculites infeciosas"},
    {nome: "Síndrome de vasoconstrição cerebral reversível", procura: "Síndrome de vasoconstrição cerebral reversível (SVCR)"}
  ],
  seccoes: [
    { t: "Quadro comparativo das formas", tabela: {
      cab: ["Forma", "Quem e contexto", "Clínica neurológica típica", "Exames que mais ajudam", "O que a distingue"],
      lin: [
        ["Arterite de células gigantes (temporal)",
         "50 anos ou mais (pico 70–80); mais em mulheres; muitas vezes com polimialgia reumática",
         "Cefaleia temporal nova, dor na mandíbula ao mastigar, alterações visuais súbitas; AVC raro, sobretudo vertebrobasilar",
         "VS e PCR; ecografia das artérias temporais e axilares (sinal do halo); biópsia da artéria temporal",
         "Idade, sintomas cranianos e inflamação sistémica; risco de cegueira — corticoide imediato, sem esperar pelos exames"],
        ["Angeíte primária do SNC",
         "Meia-idade (mediana cerca de 50 anos), ambos os sexos; vasculite só no cérebro e na medula",
         "Início insidioso: cefaleia progressiva, declínio cognitivo, AVC múltiplos e recorrentes, crises",
         "RM (enfartes de idades diferentes), LCR inflamatório, angiografia; biópsia de meninges e córtex",
         "Sem doença sistémica nem desencadeante; diagnóstico de exclusão; exige imunossupressão prolongada"],
        ["Vasculites sistémicas (lúpus, Behçet, vasculites ANCA, poliarterite nodosa)",
         "Doença autoimune conhecida ou sinais noutros órgãos: pele, mucosas, olhos, rim, pulmão, seios perinasais",
         "Mononeurite múltipla, neuropatias cranianas, AVC, encefalopatia, crises; no Behçet, tronco cerebral e trombose venosa",
         "ANA, anti-ADN, complemento, antifosfolipídicos, ANCA, hepatite B, urina; biópsia do órgão mais acessível",
         "Sinais fora do sistema nervoso e análises imunológicas; no lúpus, o AVC é muitas vezes trombótico, não vasculítico"],
        ["Vasculites infeciosas",
         "Após zona ou varicela, sífilis, tuberculose, VIH; sobretudo imunodeprimidos, mas também imunocompetentes",
         "AVC, por vezes recorrentes, com meningite, cefaleia, febre ou alterações cognitivas",
         "LCR (células, glicose, PCR, anticorpos anti-VZV, VDRL, micobactérias); VIH e sífilis no sangue",
         "Há um agente tratável; imunossuprimir sem tratar a infeção agrava o quadro"],
        ["Síndrome de vasoconstrição cerebral reversível (diagnóstico diferencial)",
         "Sobretudo mulheres de 20–50 anos; puerpério, fármacos vasoativos ou serotoninérgicos, canábis, cocaína",
         "Cefaleias em trovão recorrentes durante 1–3 semanas; HSA da convexidade, PRES, hemorragia, enfarte",
         "Angio-TC ou angio-RM repetidas; LCR normal ou quase; artérias normalizam até 3 meses",
         "Não é vasculite: monofásica e reversível; os corticoides podem agravá-la"]
      ],
      nota: "Perante uma primeira cefaleia em trovão, excluir sempre primeiro a hemorragia subaracnoideia aneurismática. Não se inicia imunossupressão sem diagnóstico estabelecido e sem excluir infeção."
    }},
    { t: "Angeíte primária do SNC vs síndrome de vasoconstrição cerebral reversível", tabela: { empilhar: true,
      cab: ["Característica", "Angeíte primária do SNC", "SVCR"],
      lin: [
        ["Doente típico", "Meia-idade, homens e mulheres por igual", "Sobretudo mulheres de 20–50 anos; puerpério ou fármaco/droga vasoativa"],
        ["Início e cefaleia", "Insidioso (semanas a meses); cefaleia progressiva, raramente em trovão", "Súbito; cefaleias em trovão repetidas, com intensidade máxima em menos de 1 minuto"],
        ["Evolução", "Progressiva ou com recidivas se não for tratada", "Monofásica; sem sintomas novos após cerca de 1 mês"],
        ["Desencadeantes", "Habitualmente nenhum", "Frequentes: puerpério, vasoativos, drogas; crises de dor com esforço, atividade sexual, tosse ou banho"],
        ["LCR", "Alterado em cerca de 80–90% (linfócitos e/ou proteínas aumentados)", "Normal ou quase normal"],
        ["RM", "Enfartes múltiplos, bilaterais, de idades diferentes; realce das meninges; RM normal torna-a muito improvável", "Muitas vezes normal no início; HSA da convexidade, PRES, hematoma; enfartes em zonas de fronteira"],
        ["Angiografia e evolução", "Pode ser normal (pequenos vasos); alterações pouco específicas que persistem", "Estreitamentos e dilatações alternados («em rosário») que normalizam em até 3 meses"],
        ["Biópsia", "Único exame que confirma; falsamente negativa em cerca de 1 em cada 4 doentes", "Não indicada (não há inflamação da parede)"],
        ["Tratamento e corticoides", "Corticoides com imunossupressor (ex.: ciclofosfamida, rituximab), depois manutenção prolongada", "Retirar o desencadeante, analgesia, controlo da TA; os corticoides associam-se a agravamento"]
      ],
      nota: "Repetir o estudo vascular semanas depois ajuda a distinguir: a SVCR reverte, a angeíte não."
    }},
    { t: "Arterite de células gigantes (temporal)", itens: [
      "Quem: pessoas com 50 anos ou mais (pico entre os 70 e os 80), 2 a 3 vezes mais frequente em mulheres. Atinge artérias de grande e médio calibre: ramos da carótida externa (temporal), artérias que irrigam o olho e também a aorta e as artérias subclávias e axilares.",
      "Apresentação craniana: cefaleia nova, muitas vezes temporal; dor no couro cabeludo ao pentear ou ao apoiar a cabeça; dor na mandíbula ou na língua que surge ao mastigar e alivia em repouso (claudicação); artéria temporal endurecida, dolorosa ou sem pulso.",
      "Sintomas gerais e polimialgia reumática: febre baixa, perda de peso e cansaço; dor e rigidez matinal dos ombros, do pescoço e das ancas. Num doente com polimialgia, cefaleia ou queixas visuais novas fazem suspeitar de arterite.",
      "Complicações visuais (urgência): perdas de visão transitórias de um olho ou visão dupla podem anteceder a perda súbita e indolor da visão, por neuropatia ótica isquémica anterior arterítica ou por oclusão da artéria central da retina. A perda costuma ser irreversível e o outro olho pode ser atingido em poucos dias.",
      "Outras complicações: AIT ou AVC (pouco frequentes, sobretudo no território vertebrobasilar); dor nos braços com o esforço, ou pulsos e TA diferentes entre os braços (atingimento das subclávias ou axilares); aneurisma da aorta a longo prazo.",
      "Exames: VS e PCR habitualmente elevadas (valores normais não excluem), plaquetas altas, anemia. A ecografia das artérias temporais e axilares é o primeiro exame de imagem (sinal do halo); PET ou RM são alternativas. A biópsia da artéria temporal pode não apanhar a lesão, porque esta é salteada: um resultado negativo não exclui.",
      "Critérios ACR/EULAR 2022: idade de 50 anos ou mais obrigatória e pontuação de 6 ou mais. Os itens que mais pesam são a biópsia ou o halo positivos, a VS ou a PCR muito elevadas e a perda visual súbita. Servem para classificar doentes em estudos, não para excluir o diagnóstico num doente concreto.",
      "Tratamento: corticoides em dose alta logo que há suspeita, sem esperar pela ecografia ou pela biópsia, que continuam úteis nos primeiros dias de tratamento. Com perda visual pode iniciar-se por via EV, por decisão médica. Poupadores de corticoides: tocilizumab ou, em alternativa, metotrexato; o upadacitinib está aprovado na UE desde 2025. O desmame leva meses a anos e as recidivas são frequentes durante a redução."
    ]},
    { t: "Angeíte primária do SNC", itens: [
      "Quem: doença muito rara; adultos de meia-idade (mediana de cerca de 50 anos, mas pode surgir em qualquer idade), homens e mulheres por igual. A inflamação limita-se aos vasos do cérebro e da medula, sem doença sistémica.",
      "Apresentação: habitualmente insidiosa e progressiva, ao longo de semanas a meses: cefaleia persistente, alterações cognitivas ou do comportamento, défices focais (AIT ou AVC repetidos), crises epiléticas. Por vezes há mielopatia ou hemorragia. Febre e sintomas gerais são raros.",
      "Duas formas principais: a de vasos médios (vê-se na angiografia, com mais AVC) e a de pequenos vasos (angiografia normal, com mais alterações cognitivas, crises e realce das meninges; só a biópsia a confirma). Uma variante associa-se a depósitos de β-amiloide (ver «Angiopatia amiloide cerebral»).",
      "Complicações: enfartes múltiplos e recorrentes, declínio cognitivo, epilepsia e incapacidade. Há recidivas em cerca de um quarto a um terço dos doentes e a mortalidade é relevante, sobretudo quando o diagnóstico se atrasa.",
      "RM, alterada em mais de 90% dos doentes: enfartes múltiplos, bilaterais e de idades diferentes, lesões da substância branca, realce leptomeníngeo, lesões que parecem tumores, micro-hemorragias. RM e LCR normais tornam o diagnóstico muito improvável.",
      "LCR, alterado em cerca de 80–90%: aumento ligeiro de linfócitos e/ou de proteínas, com glicose normal. É inespecífico, mas essencial para excluir infeção e linfoma.",
      "Angiografia: mostra estenoses e dilatações multifocais, mas é pouco específica (aterosclerose, SVCR e infeções dão imagens semelhantes) e normal quando só os pequenos vasos estão atingidos. A biópsia de meninges e córtex é o único exame que confirma, mas falha em cerca de 1 em cada 4 casos. É um diagnóstico de exclusão: SVCR, infeções (VZV, sífilis, tuberculose, VIH, fungos), linfoma, vasculites sistémicas.",
      "Tratamento: corticoides em dose alta, habitualmente com ciclofosfamida (rituximab como alternativa), seguidos de manutenção com azatioprina ou micofenolato durante pelo menos 12–18 meses. As profilaxias (ex.: Pneumocystis, proteção óssea) são feitas conforme prescrição."
    ]},
    { t: "Vasculites sistémicas com atingimento neurológico", itens: [
      "Princípio: o sistema nervoso é um de vários órgãos atingidos, por isso procuram-se sempre sinais fora dele. Pele: púrpura palpável, livedo, úlceras, necrose dos dedos. Mucosas: aftas. Olhos: uveíte. Também seios perinasais e ouvidos, pulmão (hemoptises), rim (sangue ou proteínas na urina, subida da creatinina), febre e perda de peso.",
      "Mononeurite múltipla: vários nervos atingidos de forma assimétrica e sucessiva, com dor (ex.: pé pendente e depois mão caída, em dias ou semanas). Num doente com sintomas gerais é sinal de vasculite sistémica até prova em contrário. Estuda-se com EMG e biópsia de nervo e músculo.",
      "Lúpus eritematoso sistémico: manifestações neuropsiquiátricas variadas — cefaleia, crises, psicose, alterações cognitivas e do humor, AVC, mielite, coreia, meningite assética, neuropatias. A vasculite cerebral verdadeira é rara: muitos AVC são trombóticos por anticorpos antifosfolipídicos, cardioembólicos (endocardite de Libman-Sacks) ou por aterosclerose precoce. Excluir sempre infeção, PRES e efeitos de fármacos.",
      "Lúpus — exames e tratamento: ANA, anti-ADN de dupla cadeia, C3 e C4 baixos (atividade), anticorpos antifosfolipídicos, RM e LCR (sobretudo para excluir infeção). Na forma inflamatória: corticoides e imunossupressores (ex.: ciclofosfamida, rituximab). Na forma trombótica (síndrome antifosfolipídica): anticoagulação, habitualmente com antagonista da vitamina K.",
      "Doença de Behçet: mais frequente em homens e na bacia mediterrânica, no Médio Oriente e na Ásia; o atingimento neurológico surge por volta da 4.ª década, em até cerca de 10% dos doentes. Aftas orais recorrentes (quase sempre), úlceras genitais, uveíte, lesões da pele, reação exagerada da pele a picadas (patergia).",
      "Neuro-Behçet: a forma parenquimatosa é a mais frequente, com lesões do tronco cerebral, do diencéfalo e dos gânglios da base — cefaleia, ataxia, disartria, hemiparesia, alterações de nervos cranianos e do comportamento; o LCR tem células e proteínas aumentadas. A forma não parenquimatosa é a trombose venosa cerebral (ver «Trombose venosa cerebral»). Tratamento: corticoides com azatioprina ou anti-TNF (infliximab); a ciclosporina deve ser evitada (neurotoxicidade).",
      "Vasculites ANCA: granulomatose com poliangeíte (sinusite crónica, crostas e epistaxe, otite, nódulos pulmonares, glomerulonefrite), poliangeíte microscópica (rim e pulmão) e granulomatose eosinofílica com poliangeíte (asma, pólipos nasais, eosinofilia). No sistema nervoso periférico dão sobretudo mononeurite múltipla e polineuropatia; no SNC, paquimeningite (cefaleia, neuropatias cranianas), hipofisite (diabetes insípida) e AVC. ANCA negativos não excluem. Tratamento das formas graves: corticoides com rituximab ou ciclofosfamida, depois manutenção.",
      "Poliarterite nodosa: vasculite de artérias médias, com ANCA negativos; pode associar-se à hepatite B. A mononeurite múltipla é muito frequente (até cerca de 70%) e o SNC raramente é atingido. Outros sinais: livedo, nódulos e úlceras da pele, dor abdominal, dor testicular, HTA, perda de peso. Tratamento: corticoides com ciclofosfamida nas formas graves; antiviral quando há hepatite B."
    ]},
    { t: "Vasculites infeciosas", itens: [
      "Princípio: algumas infeções inflamam ou estreitam as artérias cerebrais e causam AVC, muitas vezes com meningite. São tratáveis e excluem-se antes de qualquer imunossupressão intensa: corticoides ou outros imunossupressores sem tratamento da infeção agravam o quadro.",
      "Vírus varicela-zóster (VZV): surge após zona (sobretudo oftálmica) ou varicela, em média cerca de 4 meses depois; cerca de 1 em cada 3 doentes não teve exantema. Mais frequente em idosos e imunodeprimidos. Dá AIT ou AVC, cefaleia e alterações cognitivas.",
      "VZV — exames e tratamento: o LCR tem células aumentadas em cerca de 2 em cada 3 doentes. Os anticorpos IgG anti-VZV no LCR são muito mais sensíveis do que a PCR do vírus, por isso uma PCR negativa não exclui. Tratamento: aciclovir EV; o corticoide pode ser associado por decisão médica, sempre com o antiviral em curso.",
      "Sífilis meningovascular: surge anos após a infeção (sobretudo nos primeiros 10), em doentes mais novos do que no AVC habitual. Pode haver semanas a meses de cefaleias e alterações do comportamento antes do AVC; a artéria mais atingida é a cerebral média.",
      "Sífilis — exames e tratamento: serologias no sangue; LCR com linfócitos e proteínas aumentados. O VDRL no LCR é muito específico mas pouco sensível (negativo não exclui). Tratamento: penicilina EV durante 10 a 14 dias; testar VIH e outras infeções sexualmente transmissíveis.",
      "Meningite tuberculosa: meningite subaguda, ao longo de semanas, com febre, cefaleia, alteração da consciência, parésias de nervos cranianos e hiponatremia. A inflamação da base do cérebro atinge as artérias perfurantes e causa AVC em muitos doentes, sobretudo no caudado, no tálamo e na cápsula interna. A hidrocefalia é frequente.",
      "Tuberculose — exames e tratamento: LCR com linfócitos, proteínas muito altas e glicose baixa; pesquisa de micobactérias e cultura no LCR; RM com realce das cisternas da base; procurar tuberculose pulmonar e testar VIH. Tratamento: antituberculosos com dexametasona associada (aqui o corticoide é seguro porque a infeção está a ser tratada). A hidrocefalia pode exigir derivação.",
      "VIH: o AVC pode resultar da vasculopatia do próprio VIH, de infeções oportunistas (VZV, sífilis, tuberculose, criptococo) ou de agravamento inflamatório após iniciar antirretrovirais (ver «Infeções do SNC no imunodeprimido (VIH, LMP) e neurossífilis»). Outras causas: meningites bacterianas e fúngicas; na endocardite, embolias e aneurismas micóticos."
    ]},
    { t: "Síndrome de vasoconstrição cerebral reversível (SVCR)", itens: [
      "Quem: sobretudo mulheres entre os 20 e os 50 anos, mas também homens; muitas vezes com história de enxaqueca. Não é uma vasculite: é uma alteração transitória do tónus das artérias cerebrais, sem inflamação da parede.",
      "Desencadeantes: puerpério (habitualmente 1 a 3 semanas após o parto), pré-eclâmpsia e eclâmpsia; fármacos vasoativos e serotoninérgicos (descongestionantes nasais, antidepressivos ISRS e IRSN, triptanos, ergotamínicos); drogas (canábis, cocaína, anfetaminas, ecstasy); alguns imunossupressores e quimioterapia; feocromocitoma. As crises de dor surgem muitas vezes com esforço, atividade sexual, defecação, tosse, banho ou emoções.",
      "Apresentação: cefaleias em trovão (intensidade máxima em menos de 1 minuto) que se repetem durante 1 a 3 semanas, na grande maioria dos doentes. Pode haver náuseas, vómitos, fotofobia, subida da TA, crises, défices focais ou alterações visuais. Não surgem sintomas novos depois de cerca de 1 mês.",
      "Complicações, sobretudo nas 2 primeiras semanas: HSA da convexidade, PRES (ver «PRES — síndrome de encefalopatia posterior reversível»), hemorragia intracerebral, crises. A isquemia (AIT ou enfarte) surge mais tarde, sobretudo na 2.ª semana, por vezes quando a cefaleia já melhorou. A maioria recupera totalmente; as formas pós-parto podem ser mais graves.",
      "Exames: a primeira cefaleia em trovão obriga a excluir HSA aneurismática (TC e, se necessário, punção lombar) e outras causas (dissecção arterial, trombose venosa cerebral, apoplexia hipofisária). Angio-TC, angio-RM ou angiografia mostram estreitamentos e dilatações segmentares («em rosário»), que podem não aparecer nos primeiros dias — por isso repete-se o estudo. LCR normal ou quase normal.",
      "Diagnóstico: confirma-se pela normalização das artérias num estudo de controlo até 12 semanas após o início. A pontuação RCVS2 (cefaleias em trovão recorrentes, desencadeante vasoativo, sexo feminino, HSA; desconta se a carótida intracraniana estiver atingida) apoia o diagnóstico quando é 5 ou mais.",
      "Tratamento: suspender o desencadeante, evitar esforços e manobras de Valsalva, analgesia, controlo da TA sem descidas bruscas, tratamento das crises. Bloqueadores dos canais de cálcio (ex.: nimodipina, verapamilo) por decisão médica, com evidência limitada. Evitar triptanos e ergotamínicos.",
      "Os corticoides associam-se a agravamento clínico e radiológico: não iniciar corticoides empíricos «por suspeita de vasculite» sem discussão médica. A biópsia cerebral não está indicada."
    ]},
    { t: "Exames: preparação e cuidados", aviso: "Preparação, jejum e suspensão de antitrombóticos segundo o protocolo do hospital e a indicação médica.", itens: [
      "Ecografia das artérias temporais (e axilares): não precisa de preparação. Deve fazer-se cedo, idealmente nas primeiras 24–48 h e até 7 dias depois de iniciar o corticoide, porque o tratamento faz desaparecer os sinais. Ajudar a não atrasar a marcação, mas nunca adiar o corticoide por causa do exame.",
      "Biópsia da artéria temporal — antes: confirmar o lado, o consentimento e os antiagregantes e anticoagulantes (manter ou suspender é decisão médica). Faz-se com anestesia local, em regra sem jejum, de preferência nas 2 semanas após iniciar o corticoide, que se mantém.",
      "Biópsia da artéria temporal — depois: vigiar hemorragia ou hematoma (comprimir e comunicar), dor, sinais de infeção e assimetria da face (ex.: não consegue levantar a sobrancelha — lesão de um ramo do nervo facial). Analgesia prescrita e frio local protegido.",
      "Punção lombar: antes, confirmar plaquetas, coagulação e antitrombóticos, explicar o procedimento e posicionar. Identificar e enviar logo as amostras (algumas têm de chegar rapidamente ao laboratório). Depois, vigiar o local, a cefaleia que agrava de pé, a dor lombar e alterações da sensibilidade ou da força nas pernas.",
      "Angiografia cerebral por cateter — antes: alergias (contraste iodado), função renal recente, metformina (confirmar com o médico se suspende), antitrombóticos, jejum conforme protocolo e acesso venoso. Registar os pulsos periféricos, a cor e a temperatura dos membros, para comparar depois.",
      "Angiografia cerebral por cateter — depois: repouso, penso, pulsos distais, cor, temperatura e hematoma, como na «Trombectomia». Hidratação conforme prescrição, diurese e reações tardias ao contraste. Um défice novo comunica-se de imediato (o exame tem um pequeno risco de AVC).",
      "Biópsia cerebral ou leptomeníngea: antes da primeira dose de corticoide, confirmar com o médico se deve esperar pela biópsia (o corticoide pode tornar a amostra pouco útil, sobretudo se houver suspeita de linfoma). Exceção: na suspeita de arterite de células gigantes o corticoide nunca espera. Depois, cuidados de pós-craniotomia como nos «Tumores do sistema nervoso central»: Glasgow, pupilas, défice focal, penso e saída de LCR, crises e dor."
    ]},
    { t: "Tratamento: o que vigiar", tipo: "precaucao", aviso: "Doses, esquemas, pré-medicação e profilaxias segundo a prescrição e o protocolo do hospital.", itens: [
      "Pulsos de metilprednisolona EV: perfundir no tempo prescrito (as doses altas, em regra, em pelo menos 30 minutos); a perfusão rápida pode causar arritmias e colapso circulatório. Vigiar TA, FC e glicemia capilar, e ainda rubor, sabor metálico, insónia e agitação.",
      "Corticoide oral prolongado: dar de manhã, com alimento. A hiperglicemia surge sobretudo à tarde: medir a glicemia capilar antes do almoço e do jantar, conforme prescrição. Vigiar TA, peso, edemas, humor e sono (euforia, depressão, psicose), fraqueza das coxas e candidíase oral.",
      "Corticoide prolongado — proteção: confirmar a proteção gástrica e óssea e a profilaxia de Pneumocystis, quando prescritas. O corticoide esconde a febre e os sinais de infeção.",
      "Desmame do corticoide: cumprir o plano escrito e nunca suspender bruscamente. Fraqueza, hipotensão, vómitos ou hipoglicemia podem ser insuficiência suprarrenal; em jejum ou com vómitos, pedir uma alternativa EV. Na arterite de células gigantes, cefaleia temporal, dor ao mastigar ou queixas visuais durante o desmame sugerem recaída: comunicar.",
      "Ciclofosfamida EV — antes e durante: confirmar hemograma, função renal e urina pedidos, e teste de gravidez se aplicável. Antiemético, hidratação e mesna conforme prescrição, de preferência de manhã. Perfundir no tempo prescrito e vigiar extravasamento.",
      "Ciclofosfamida — depois: estimular a ingestão de líquidos e o esvaziamento frequente da bexiga, também à noite, e fazer balanço hídrico. Vigiar hematúria e ardor ao urinar, náuseas e infeção (os leucócitos descem mais na 1.ª–2.ª semana). Manusear como citotóxico: EPI, sistema fechado, resíduos próprios e precauções com urina, fezes e vómito durante o período do protocolo.",
      "Rituximab: antes da 1.ª perfusão, confirmar o rastreio da hepatite B e as imunoglobulinas. Perguntar ao médico se suspende os anti-hipertensores nas 12 h anteriores (risco de hipotensão). Pré-medicação completa, ritmo em escalada na 1.ª perfusão, sinais vitais conforme protocolo e material de anafilaxia junto do doente. Entregar o cartão de alerta.",
      "Tocilizumab: baixa a febre e a PCR, por isso uma infeção pode dar só mal-estar, taquicardia, hipotensão ou confusão — avaliar o doente e não confiar só nos valores. Dor abdominal intensa ou persistente, ou alteração do trânsito com febre, pode ser diverticulite ou perfuração. Fazer as análises prescritas (neutrófilos, enzimas hepáticas).",
      "Aciclovir EV: em pelo menos 1 hora (nunca em bólus), com hidratação, diurese e creatinina (pode lesar o rim). Vigiar confusão ou alucinações, sobretudo em idosos e na insuficiência renal, e flebite. Penicilina G EV a horas rigorosas; nas primeiras 24 h pode surgir febre, arrepios, mialgias e hipotensão (reação de Jarisch-Herxheimer): comunicar, não é alergia.",
      "Antituberculosos: toma observada, conforme prescrição. A rifampicina cora a urina e as lágrimas de laranja e reduz o efeito de corticoides, contracetivos hormonais e anticoagulantes — confirmar ajustes com o médico. Vigiar icterícia e náuseas, formigueiros (isoniazida) e alterações da visão ou das cores (etambutol).",
      "SVCR: não dar triptanos, ergotamínicos nem descongestionantes nasais. Confirmar com o médico qualquer fármaco vasoativo ou serotoninérgico e qualquer corticoide prescrito (podem agravar). Analgesia regular prescrita. Nimodipina ou verapamilo, se prescritos: TA antes de cada toma e comunicar hipotensão (agrava a perfusão cerebral)."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Vigilância neurológica: Glasgow, pupilas, força (MRC), linguagem e NIHSS se houver défice. Registo de base na admissão e repetir com a frequência prescrita (pelo menos uma vez por turno). Um défice novo é um possível AVC: registar a hora e chamar o médico.",
      "Visão na arterite de células gigantes — como avaliar: cada olho em separado, tapando o outro com um cartão (não com os dedos), com os óculos habituais. Cartão de leitura a cerca de 35 cm ou escala de Snellen; se não ler, registar se conta dedos, se vê o movimento da mão ou só a luz. Perguntar por visão turva, perdas de visão de segundos ou minutos, visão dupla e dor ao mastigar.",
      "Visão na arterite de células gigantes — quando: na admissão (registo de base) e depois pelo menos uma vez por turno; de 4 em 4 h nas primeiras 48–72 h se houve sintomas visuais, ou conforme prescrição, e sempre que o doente se queixar. Registar sempre com o mesmo método, para o turno seguinte poder comparar.",
      "Prevenção de quedas (Morse): défice visual, mononeurite múltipla (pé pendente, mão fraca, perda de sensibilidade), fraqueza muscular pelos corticoides, hipotensão (nimodipina) e confusão. Cama baixa, boa luz, objetos sempre no mesmo lugar e ao alcance, identificar-se ao entrar e levante acompanhado. Tala antiequino se prescrita; inspecionar os pés insensíveis.",
      "Prevenção de infeção: higiene das mãos, cuidados com os cateteres e inspeção diária da pele, da boca e dos locais de punção. Temperatura e sinais vitais pelo menos uma vez por turno. Evitar a algaliação desnecessária; visitas com sintomas respiratórios não entram. Leucopenia: medidas do protocolo de neutropenia.",
      "Isolamento conforme o agente: na suspeita ou confirmação de tuberculose pulmonar ou laríngea, isolamento de via aérea (quarto individual, porta fechada, respirador FFP2/FFP3 nos profissionais, máscara cirúrgica no doente fora do quarto) até indicação do GCL-PPCIRA; a forma meníngea isolada não se transmite, mas a pulmonar tem de ser excluída. Zona disseminada, ou qualquer zona no imunossuprimido: via aérea e contacto até as lesões estarem em crosta. Profissionais sem imunidade à varicela não prestam cuidados.",
      "SVCR — evitar desencadeantes: laxantes para não fazer força ao evacuar, evitar esforço físico e manobras de Valsalva, ambiente calmo. Registar cada cefaleia (hora, desencadeante, intensidade, duração): o padrão ajuda o diagnóstico.",
      "Dor e cefaleia: avaliar com a escala numérica, ou PAINAD se o doente não comunicar, em cada turno e depois da analgesia. Caracterizar o início (súbito ou progressivo) e o local. Na arterite de células gigantes o couro cabeludo dói ao toque: cuidado com óculos, pentes e almofada. Comunicar se a cefaleia mudar de padrão.",
      "Sono, nutrição, pele e mucosas: corticoide de manhã e higiene do sono. Dor ao mastigar: dieta mole e refeições pequenas. Corticoide: pouco sal e pouco açúcar, peso semanal. Behçet: aftas orais e genitais — escova macia, colutório e analgesia tópica prescritos, evitar alimentos ácidos ou picantes; reduzir as punções ao mínimo (patergia). Pele frágil: avaliar com Braden.",
      "Apoio psicológico e alta: o diagnóstico é muitas vezes demorado e incerto, e o medo de cegueira é real. Explicar cada exame, envolver a família e respeitar o sigilo (ex.: VIH, sífilis). Avaliar o Barthel na admissão e antes da alta e articular análises, consultas e perfusões no hospital de dia antes da saída."
    ]},
    { t: "Ensino ao doente e à família", itens: [
      "Ligar 112: perda ou alteração súbita da visão, cefaleia súbita e muito intensa, fraqueza, alteração da fala ou convulsão. Na arterite de células gigantes, qualquer queixa visual nova é ida à urgência no próprio dia.",
      "Contactar a equipa no próprio dia: febre ou arrepios, tosse ou falta de ar, ardor ao urinar ou urina com sangue, aftas dolorosas novas ou dor abdominal persistente. Com tocilizumab ou corticoide pode haver infeção sem febre.",
      "Corticoides: não suspender nem reduzir por iniciativa própria e seguir o plano de desmame escrito. Se vomitar e não conseguir tomar, procurar ajuda. Comunicar cefaleia, dor ao mastigar ou queixas visuais durante o desmame (recaída).",
      "Andar sempre com a lista de medicação atualizada (incluindo a data da última perfusão) e com o cartão de alerta, se houver. Não tomar anti-inflamatórios nem produtos de venda livre sem perguntar.",
      "Vacinas: as inativadas (gripe, pneumococo, COVID-19, zona recombinante) fazem-se conforme indicação médica, de preferência antes de iniciar o imunossupressor. As vacinas vivas estão contraindicadas. Evitar contacto com pessoas com varicela ou zona e avisar se houver exposição.",
      "Ciclofosfamida: contraceção eficaz durante o tratamento e nos meses seguintes, pelo período indicado no RCM e pelo médico; falar sobre preservação da fertilidade antes do 1.º ciclo. Beber líquidos e urinar com frequência nos dias seguintes; em casa, luvas para lidar com vómito ou urina durante o período indicado. Rituximab: contraceção até 12 meses após a última dose.",
      "SVCR: até indicação médica, evitar descongestionantes nasais, triptanos, ergotamínicos, canábis, cocaína, anfetaminas e ecstasy. Não suspender antidepressivos sem falar com o médico. Evitar esforços intensos e fazer força ao evacuar durante as semanas indicadas. Nova cefaleia em trovão: 112.",
      "Vasculites infeciosas: cumprir o tratamento até ao fim (na tuberculose são meses, com toma observada). A rifampicina reduz o efeito da pílula, por isso é preciso outro método. Rastreio dos contactos (tuberculose) ou dos parceiros (sífilis), conforme indicação."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Arterite de células gigantes com perda, turvação ou falhas de visão, ou visão dupla: comunicar de imediato e não atrasar o corticoide (preparar o pulso EV se prescrito). Avaliar e registar a acuidade de cada olho e a hora; pedido urgente à oftalmologia.",
      "Cefaleia súbita e muito intensa (máxima em menos de 1 minuto): comunicar de imediato. Avaliar Glasgow, pupilas, TA e défice focal e preparar TC urgente — excluir primeiro hemorragia subaracnoideia. Não dar triptanos; registar a hora e o desencadeante.",
      "Novo défice focal, crise epilética ou queda do Glasgow: atuar como num possível AVC (NIHSS, Glasgow, glicemia capilar, hora de início) e chamar o médico. Informar a equipa de AVC do diagnóstico de vasculite ou SVCR (muda as decisões sobre trombólise e antitrombóticos). Na SVCR, o risco é maior nas primeiras 1–3 semanas.",
      "Imunossuprimido com febre, arrepios, taquicardia, hipotensão, confusão nova ou dessaturação (ou só mal-estar, se fizer tocilizumab ou corticoide): suspeitar de sépsis. Sinais vitais completos, comunicar de imediato, hemoculturas e antibiótico conforme protocolo, sem atrasos. Tosse seca com falta de ar: pensar em Pneumocystis.",
      "Hematúria, coágulos, ardor ou retenção urinária durante ou após ciclofosfamida: comunicar, manter a hidratação prescrita e colher urina para análise. Não iniciar novo ciclo sem avaliação médica.",
      "Reação à perfusão (rituximab, ciclofosfamida ou outra): rubor, prurido, urticária, febre ou arrepios, dispneia, pieira, edema da face ou hipotensão. Parar a perfusão, manter o acesso com soro, avaliar os sinais vitais, chamar o médico e seguir o protocolo de anafilaxia. Reiniciar só com indicação médica.",
      "Dor abdominal intensa ou persistente sob tocilizumab ou corticoide em dose alta (possível perfuração, mesmo sem febre); na vasculite ANCA, sangue na expetoração, falta de ar ou urina escassa (pulmão e rim): comunicar de imediato.",
      "Sob aciclovir: urina a diminuir, creatinina a subir, ou confusão ou alucinações novas — comunicar antes da dose seguinte. Sob antituberculosos: icterícia, vómitos ou alterações da visão — comunicar e não administrar a dose seguinte sem indicação."
    ]}
  ]
},
{
  id: "angiopatia-amiloide", cap: null, parte: "p4", icone: "🩸",
  titulo: "Angiopatia amiloide cerebral", pags: null,
  resumo: "Depósito de proteína amiloide (β-amiloide) nas paredes das pequenas artérias do córtex, que ficam frágeis. Principal causa de hemorragia lobar no idoso; também dá episódios neurológicos transitórios, siderose superficial e declínio cognitivo. Na enfermagem: vigilância como na hemorragia intracerebral, reconhecer os episódios transitórios, prevenir quedas e rever os antitrombóticos.",
  relacionados: ["avc-hemorragico", "avc", "demencias", "alzheimer", "territorios-arteriais"],
  seccoes: [
    { t: "O essencial", itens: [
      "Doença dos pequenos vasos: o β-amiloide deposita-se na parede das arteríolas do córtex e das meninges, que perdem a camada muscular e se tornam frágeis — rompem com facilidade (hemorragias) ou estreitam (pequenos enfartes e lesão da substância branca).",
      "Atinge sobretudo pessoas com mais de 60 anos, de ambos os sexos; aumenta com a idade e é mais frequente em quem tem demência (partilha o β-amiloide com a doença de Alzheimer).",
      "É a principal causa de hemorragia intracerebral lobar (junto ao córtex) no idoso; as hemorragias tendem a repetir-se.",
      "Os vasos mais atingidos são os do córtex, sobretudo posterior (occipital e parietal); os gânglios da base, o tálamo e o tronco cerebral são poupados — por isso as hemorragias são lobares e não profundas (as profundas apontam para hipertensão).",
      "Fatores genéticos: os alelos APOE ε4 (mais amiloide nos vasos; associa-se também à inflamação relacionada com a angiopatia e às ARIA) e ε2 (vasos mais frágeis) aumentam o risco de hemorragia lobar e de recorrência. Há formas hereditárias raras, de início mais precoce: por mutações do gene APP (holandesa, italiana, Ártica, Iowa) ou por outras proteínas, incluindo a transtirretina na paramiloidose (relevante em Portugal: episódios transitórios, siderose e HSA). Em pessoas mais novas com neurocirurgia ou enxerto de dura-máter na infância, suspeitar de forma iatrogénica."
    ]},
    { t: "Como se manifesta", itens: [
      "Hemorragia intracerebral lobar: cefaleia, défice focal conforme o lobo (ex.: hemianopsia no occipital), crises epiléticas, alteração da consciência. É a forma mais típica.",
      "Episódios neurológicos focais transitórios («amyloid spells»): formigueiro ou dormência que se espalha (ex.: da mão à boca) durante minutos, por vezes fraqueza ou alteração da fala; repetidos e semelhantes entre si. Podem ser confundidos com AIT ou crise focal. Associam-se muitas vezes a siderose superficial ou a HSA da convexidade e anunciam risco elevado de hemorragia lobar nas semanas seguintes.",
      "Hemorragia subaracnoideia da convexidade (num sulco do córtex, sem aneurisma) e siderose superficial cortical (depósito de ferro de hemorragias antigas) — aumentam o risco de hemorragia lobar futura.",
      "Declínio cognitivo e demência: lentidão do pensamento, alterações da memória e das funções executivas; muitas vezes com microhemorragias e lesão da substância branca.",
      "Inflamação relacionada com a angiopatia amiloide: forma rara, subaguda — cefaleia, confusão, alterações do comportamento, crises e défices focais, com edema assimétrico da substância branca na RM. Responde a imunossupressão (corticoides).",
      "Muitas vezes é silenciosa e descobre-se na RM (microhemorragias lobares)."
    ]},
    { t: "Diagnóstico (critérios de Boston 2.0)", aviso: "O diagnóstico definitivo exige exame neuropatológico completo (autópsia); tecido de biópsia ou de hematoma drenado permite o diagnóstico de «angiopatia provável com suporte patológico». Na prática usa-se a RM com sequências sensíveis ao sangue (T2* / SWI).", itens: [
      "Aplicam-se a pessoas com 50 anos ou mais que se apresentam com hemorragia intracerebral espontânea, episódios focais transitórios, ou défice cognitivo ou demência (a HSA da convexidade conta como lesão hemorrágica na RM).",
      "Angiopatia provável: duas ou mais lesões hemorrágicas estritamente lobares, em qualquer combinação (hemorragia, microhemorragias, focos de siderose superficial ou de HSA da convexidade); ou uma lesão lobar mais um marcador da substância branca (mais de 20 espaços perivasculares visíveis no centro semioval num hemisfério, ou mais de 10 focos subcorticais em FLAIR, em padrão «multispot») — sem lesões hemorrágicas profundas nem outra causa. As lesões do cerebelo não contam como lobares nem como profundas.",
      "Angiopatia possível: uma lesão hemorrágica lobar sem outra causa, ou apenas um marcador não hemorrágico, sem lesões profundas. Os marcadores não hemorrágicos são pouco específicos (também surgem com a idade e a hipertensão).",
      "Siderose superficial: focal se atinge até 3 sulcos, disseminada se atinge 4 ou mais (maior risco de hemorragia).",
      "Exames de apoio, em casos selecionados: PET amiloide e biomarcadores no LCR (β-amiloide 40 e 42); estudo genético nas formas precoces ou familiares."
    ]},
    { t: "Tratamento e decisões terapêuticas", aviso: "Decisões médicas, individualizadas. O papel da enfermagem é identificar e comunicar os fármacos de risco e garantir que a decisão fica registada e é conhecida do doente.", itens: [
      "Não há tratamento que trave a doença: o objetivo é prevenir hemorragias e tratar as complicações.",
      "Hemorragia aguda: tratamento como em qualquer hemorragia intracerebral (ver «AVC hemorrágico e HSA») — TA, reversão da anticoagulação, vigilância neurológica; cirurgia em casos selecionados.",
      "Controlo rigoroso da TA a longo prazo (alvo habitual < 130/80 mmHg, conforme prescrição): é a medida com mais impacto na prevenção de nova hemorragia.",
      "Antiagregantes e anticoagulantes aumentam o risco de hemorragia: manter, suspender, retomar ou trocar é sempre decisão médica individual, que pesa o risco de hemorragia contra o de enfarte. O risco é maior após hemorragia lobar, HSA da convexidade ou siderose disseminada — num ensaio recente (ENRICH-AF), a anticoagulação após hemorragia intracraniana aumentou as hemorragias e estes doentes deixaram de ser incluídos por segurança. Na fibrilhação auricular pode ser proposta a oclusão do apêndice auricular esquerdo em vez da anticoagulação; a antiagregação, se houver indicação forte, pode ser retomada por decisão médica. Numa angiopatia «possível» diagnosticada só por marcadores não hemorrágicos, a anticoagulação não deve ser retirada sem avaliação cuidadosa.",
      "Trombólise e trombectomia num AVC isquémico: uma hemorragia intracraniana prévia (incluindo hemorragia lobar ou HSA da convexidade) contraindica a trombólise segundo o RCM da alteplase. Sem hemorragia prévia (só microhemorragias ou siderose), a decisão é médica, caso a caso. A trombectomia não fica excluída. Informar logo a equipa da Via Verde do diagnóstico de angiopatia e de qualquer tratamento anti-amiloide.",
      "Anticorpos anti-amiloide para a doença de Alzheimer (lecanemab, donanemab): risco elevado de ARIA (edema e hemorragias). No RCM europeu do lecanemab, uma RM prévia com hemorragia intracerebral, mais de 4 microhemorragias, qualquer siderose superficial ou outros sinais de angiopatia contraindica o tratamento; não se inicia em doentes anticoagulados e os trombolíticos devem ser evitados durante o tratamento (donanemab: restrições semelhantes — confirmar no RCM).",
      "Crises epiléticas: antiepilético conforme prescrição. Inflamação relacionada com a angiopatia: corticoides e, por vezes, outros imunossupressores."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Na hemorragia aguda: os mesmos cuidados da hemorragia intracerebral — vigilância neurológica apertada, TA no alvo prescrito, sinais de hipertensão intracraniana, jejum até rastreio da deglutição (ver «AVC hemorrágico e HSA»).",
      "Défice focal novo (fraqueza, formigueiro, alteração da fala ou da visão): atuar como num possível AVC — avaliar (NIHSS ou BE-FAST, Glasgow, pupilas), medir a glicemia capilar, registar a hora de início e chamar o médico de imediato. Não assumir que é «só um episódio da amiloide», mesmo que já tenha tido outros iguais. Se for ativada a Via Verde, informar logo do diagnóstico de angiopatia e dos antitrombóticos em curso. Descrever cada episódio com rigor (o que sentiu, onde começou e para onde se espalhou, duração, se se repete igual). Não iniciar nem reforçar antiagregantes por iniciativa própria ou por protocolo de «AIT» sem confirmação médica — nestes doentes podem precipitar hemorragia.",
      "Na admissão e na reconciliação terapêutica: identificar antiagregantes, anticoagulantes, AINE e suplementos com efeito antiagregante e comunicar ao médico. Registar no processo (ex.: SClínico) a angiopatia amiloide como alerta e a decisão sobre cada antitrombótico (manter, suspender ou trocar, e data de reavaliação). Transmitir esta decisão na passagem de turno e na nota de alta de enfermagem, incluindo aos cuidados de saúde primários ou à RNCCI.",
      "Prevenção de quedas (Morse): um traumatismo craniano tem mais risco de hemorragia — cama baixa, calçado adequado, levante acompanhado, avaliação da marcha e da visão.",
      "TA: confirmar o alvo prescrito (se não estiver escrito, pedi-lo ao médico); medir e registar com a frequência prescrita. Comunicar valores acima do alvo e também hipotensão, tonturas ou mal-estar ao levantar. Quando os anti-hipertensores são reforçados, medir a TA deitado e de pé antes do primeiro levante e levantar de forma faseada (risco de queda).",
      "Cognição e comportamento: na admissão, registar com o cuidador o estado cognitivo e a autonomia habituais (Barthel) — é a referência para comparar. Confusão, sonolência ou alteração do comportamento de novo não se atribuem à demência: avaliar consciência, orientação, défice focal e glicemia capilar; procurar causas (dor avaliada com PAINAD, retenção urinária, infeção, fármacos); comunicar de imediato — pode ser nova hemorragia, crise não convulsiva ou inflamação relacionada com a angiopatia. Orientação e prevenção de delirium como em «Doença de Alzheimer»; contenção física só como último recurso (ver «Demências»).",
      "Crises epiléticas (mais frequentes nas hemorragias lobares, por estarem junto ao córtex): precauções de segurança; registar a hora, a duração, como começou (que parte do corpo, para onde se espalhou) e o estado depois da crise. Crise com mais de 5 minutos, ou crises seguidas sem recuperar a consciência: emergência — atuar segundo o protocolo e chamar o médico. Antiepilético a horas; se o doente não puder engolir, comunicar para via alternativa. Ensinar a família a reconhecer e a registar as crises.",
      "Corticoides na inflamação relacionada com a angiopatia: vigiar glicemia, TA, sono e humor, e proteção gástrica conforme prescrição (ver «Doenças autoimunes e o sistema nervoso»)."
    ]},
    { t: "Ensinos ao doente e à família", itens: [
      "Explicar a doença em linguagem simples: os pequenos vasos do cérebro estão frágeis e podem sangrar.",
      "Cumprir o tratamento da tensão arterial e medi-la em casa, se indicado; levar os registos às consultas.",
      "Informar sempre qualquer médico, dentista ou farmacêutico do diagnóstico, sobretudo antes de começar antiagregantes, anticoagulantes, anti-inflamatórios ou tratamentos para a memória com anticorpos anti-amiloide. Andar com a lista de medicação atualizada e a carta de alta. Não tomar por iniciativa própria produtos com ácido acetilsalicílico ou ibuprofeno (incluindo alguns antigripais de venda livre) nem suplementos como o ginkgo; para dores ou febre, perguntar ao médico ou ao farmacêutico (o paracetamol é habitualmente a opção, salvo indicação contrária).",
      "Prevenir quedas em casa (tapetes, iluminação, apoios no WC).",
      "Ligar 112 se surgir cefaleia súbita e intensa, fraqueza, formigueiro, alteração da fala ou da visão, sonolência ou convulsão — mesmo que pareça estar a passar; não esperar para ver. Anotar a hora de início e dizer à equipa de emergência que tem angiopatia amiloide e que medicação toma. Registar num caderno cada episódio (data, hora, duração, o que sentiu) e levá-lo às consultas.",
      "Moderar o álcool; manter atividade física e estimulação cognitiva."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Défice focal súbito: ativar a Via Verde AVC e informar de imediato do diagnóstico de angiopatia, de hemorragia prévia e de tratamento anti-amiloide (podem contraindicar a trombólise).",
      "Cefaleia súbita e intensa, vómitos, novo défice focal, sonolência ou crise epilética: possível nova hemorragia — comunicar de imediato e preparar TC urgente.",
      "Episódios focais transitórios repetidos ou que mudam de padrão: comunicar antes de qualquer decisão sobre antitrombóticos.",
      "Confusão, alteração do comportamento ou crises de instalação subaguda: pensar em inflamação relacionada com a angiopatia → Glasgow, défice focal e glicemia capilar, registar → comunicar ao médico de imediato.",
      "Queda, mesmo sem lesão visível, sobretudo com traumatismo craniano ou sob antiagregante ou anticoagulante: comunicar de imediato ao médico, fazer avaliação neurológica seriada (Glasgow, pupilas, força) segundo o protocolo pós-queda do serviço e registar a hora da queda — a hemorragia pode manifestar-se só horas depois. Notificar o incidente no sistema do hospital e rever o plano de prevenção de quedas (Morse)."
    ]}
  ]
},
{
  id: "avc-isquemico", cap: null, parte: "p4", grupo: "avc-az", icone: "🧠",
  titulo: "AVC isquémico", pags: null,
  resumo: "Oclusão de uma artéria cerebral. Apoiar a reperfusão (trombólise e trombectomia), proteger a penumbra — perfusão, TA, glicemia, temperatura, oxigenação — e prevenir complicações.",
  relacionados: ["avc", "trombectomia", "territorios-arteriais", "avc-hemorragico", "linguagem", "disfagia"],
  seccoes: [
    { t: "O essencial", itens: [
      "Cerca de 85% dos AVC são isquémicos: um trombo ou êmbolo oclui uma artéria e o território que ela irriga deixa de receber sangue.",
      "No centro forma-se o núcleo de enfarte (lesão irreversível); à volta fica a penumbra — tecido em sofrimento que ainda se pode salvar se a artéria for reaberta a tempo. Por cada minuto sem tratamento perdem-se cerca de 2 milhões de neurónios: tempo é cérebro.",
      "Os sinais dependem da artéria ocluída (ver «Territórios arteriais e síndromes»). Os défices são do lado oposto à lesão no hemisfério; no tronco cerebral podem ser cruzados.",
      "Acidente isquémico transitório (AIT): sintomas que regridem totalmente, sem lesão na imagem — é um aviso; o risco de AVC nos dias seguintes é elevado."
    ]},
    { t: "Causas (classificação TOAST)", itens: [
      "Aterosclerose de grandes artérias (ex.: estenose da carótida interna).",
      "Cardioembolismo — sobretudo fibrilhação auricular; também enfarte recente, próteses valvulares, endocardite.",
      "Doença de pequenos vasos (enfartes lacunares) — associada a HTA e diabetes.",
      "Outras causas determinadas: dissecção arterial (doentes jovens, dor cervical ou cefaleia), trombofilias, vasculites, drogas.",
      "Causa indeterminada: estudo completo sem causa encontrada (ECG/Holter, ecocardiograma, estudo dos vasos do pescoço e intracranianos, análises), duas ou mais causas possíveis, ou estudo incompleto."
    ]},
    { t: "Reperfusão: trombólise endovenosa", aviso: "A decisão é médica e segue o protocolo da Via Verde AVC do hospital. Confirmar sempre doses e tempos no protocolo local.", itens: [
      "Janela: até 4,5 h após o início dos sintomas (ou a última vez visto bem); entre 4,5 e 9 h, ou AVC ao acordar, só com seleção por imagem avançada.",
      "Alteplase: 0,9 mg/kg (máximo 90 mg) — 10% em bólus em 1 minuto e o restante em perfusão de 60 minutos. No fim, lavar o sistema com soro fisiológico ao mesmo ritmo, para o doente receber a dose que fica na linha.",
      "Tenecteplase: 0,25 mg/kg (máximo 25 mg) em bólus único EV, em 5–10 segundos, segundo a tabela de escalões de peso do RCM. Usar só a apresentação de 25 mg aprovada para o AVC: os frascos de 40 e 50 mg (enfarte do miocárdio) não se usam no AVC, porque há risco de dose dupla. É incompatível com soros glicosados: administrar numa linha só com soro fisiológico e lavar a linha antes e depois do bólus.",
      "A dose depende do peso: pesar sempre que possível (a estimativa errada é causa frequente de erro); dupla verificação da dose por dois profissionais.",
      "Antes: TA < 185/110 mmHg; glicemia capilar (corrigir hipoglicemia); dois acessos venosos (um só para o trombolítico); não atrasar à espera de análises, salvo suspeita de coagulopatia ou anticoagulação.",
      "Principais contraindicações (avaliação médica): hemorragia na TC; anticoagulação eficaz; plaquetas baixas ou coagulopatia; AVC ou traumatismo craniano grave recentes; cirurgia major ou hemorragia ativa recentes; TA que não se consegue controlar."
    ]},
    { t: "Vigilância após trombólise (esquema habitual)", itens: [
      "Avaliação neurológica e TA a cada 15 min nas primeiras 2 h, a cada 30 min nas 6 h seguintes e de hora a hora até às 24 h (confirmar protocolo local).",
      "Nas primeiras 24 h, adiar SNG, algaliação, punções arteriais e injeções IM, se o doente puder ser cuidado com segurança sem elas. Se se previr que serão necessárias (ex.: retenção urinária), falar com o médico para as fazer antes de iniciar a trombólise.",
      "TA < 180/105 mmHg durante e nas 24 h seguintes; se a TA subir, comunicar de imediato (tratamento conforme prescrição).",
      "Vigiar hemorragia sistémica: gengivas, nariz, locais de punção, urina, fezes, vómito; comprimir os locais de punção mais tempo.",
      "Suspeita de hemorragia intracraniana (cefaleia intensa, vómitos, agravamento neurológico, subida súbita da TA): parar a alteplase se ainda estiver em perfusão, chamar o médico, manter acesso venoso e colher de imediato hemograma, coagulação com fibrinogénio e tipagem. Preparar TC urgente e o tratamento prescrito (ex.: crioprecipitado, ácido tranexâmico), segundo o protocolo.",
      "Angioedema orolingual (sobretudo com IECA): vigiar lábios e língua; se surgir, suspender a perfusão de alteplase, chamar o médico de imediato e vigiar a via aérea.",
      "Não administrar antiagregantes nem anticoagulantes nas primeiras 24 h após trombólise sem indicação médica explícita (habitualmente após imagem de controlo)."
    ]},
    { t: "Cuidados de enfermagem: perfusão tecidular cerebral", itens: [
      "TA: na fase aguda não baixar por rotina — a TA alta ajuda a perfundir a penumbra. Cumprir os alvos prescritos (sem reperfusão: tratar só se > 220/120 mmHg; com trombólise ou trombectomia: < 180/105 mmHg; após trombectomia não baixar a PAS abaixo de 140 mmHg salvo prescrição, porque a descida intensiva é prejudicial) e evitar descidas bruscas e hipotensão.",
      "Hidratação: soro fisiológico 0,9% conforme prescrição; evitar soros hipotónicos e com glicose (agravam o edema e a hiperglicemia); balanço hídrico.",
      "Posição: cabeça alinhada com o tronco; cabeceira conforme protocolo — elevar a 30° se houver risco de aspiração, vómitos, edema ou hipertensão intracraniana.",
      "Oxigénio só se SpO₂ < 94% (não por rotina).",
      "Glicemia: vigiar e manter dentro do alvo prescrito (habitualmente 140–180 mg/dL); evitar e tratar de imediato a hipoglicemia.",
      "Temperatura: tratar a febre (> 37,5 °C) conforme prescrição e procurar a causa (aspiração, infeção urinária).",
      "Monitorização cardíaca contínua nas primeiras 24–72 h, para detetar fibrilhação auricular.",
      "Avaliação neurológica (NIHSS, Glasgow, pupilas) com a frequência prescrita; registar sempre a hora e comunicar qualquer agravamento.",
      "Primeiro levante: com indicação médica e segundo o protocolo (após trombólise, em regra depois da imagem de controlo). Avaliar o défice e a TA deitado e depois sentado; se o défice agravar ao sentar (sobretudo com oclusão ou estenose não resolvida), voltar a deitar com a cabeceira baixa e comunicar. Nas primeiras 24 h evitar mobilização intensa; depois, preferir sessões curtas e frequentes fora da cama."
    ]},
    { t: "Cuidados de enfermagem: perfusão tecidular periférica", itens: [
      "Membros paréticos: vigiar edema, cor, temperatura e pele em cada turno; membro superior apoiado e elevado; evitar acessos venosos no membro parético sempre que possível.",
      "TVP: vigiar diariamente dor, calor, edema ou diferença de perímetro da perna e comunicar. Antes da compressão pneumática intermitente, confirmar com o médico se há doença arterial periférica grave, feridas ou TVP já conhecida; inspecionar a pele das pernas pelo menos uma vez por dia.",
      "AVC cardioembólico (ex.: fibrilhação auricular): o êmbolo pode atingir também um membro ou o intestino. Dor súbita, palidez, frieza ou ausência de pulso num membro, ou dor abdominal intensa: comunicar de imediato.",
      "Registar pulsos, cor, temperatura e edema sempre com os mesmos termos, para o turno seguinte poder comparar."
    ]},
    { t: "Segurança e prevenção de complicações", itens: [
      "Jejum absoluto (incluindo água e medicação oral) até rastreio da deglutição com o instrumento do serviço (ex.: GUSS); registar o resultado e a consistência prescrita.",
      "Quedas (Morse), úlceras por pressão (Braden) e funcionalidade (Barthel) na admissão e conforme protocolo. Restantes cuidados e preparação para a alta: tema «Doença cerebrovascular (AVC)»."
    ]},
    { t: "Edema cerebral e transformação hemorrágica", itens: [
      "Enfarte extenso da ACM («maligno»): o edema é máximo entre o 2.º e o 5.º dia — sonolência crescente, agravamento do défice, vómitos, anisocoria, desvio do olhar. Comunicar de imediato: a craniectomia descompressiva, em doentes selecionados, deve ser decidida cedo (idealmente nas primeiras 48 h).",
      "Enfarte do cerebelo: o edema pode comprimir o tronco cerebral e causar hidrocefalia — vigiar consciência, vómitos e respiração; pode precisar de cirurgia urgente.",
      "Transformação hemorrágica (sangramento dentro do enfarte), sobretudo após reperfusão: cefaleia, vómitos, agravamento neurológico — TC urgente."
    ]},
    { t: "Prevenção secundária", itens: [
      "Antiagregação (ácido acetilsalicílico, clopidogrel); no AVC minor ou AIT de alto risco pode ser prescrita dupla antiagregação por um período curto (ex.: 21 dias).",
      "Fibrilhação auricular: anticoagulação oral, com início definido pela equipa conforme a gravidade do AVC (cada vez mais precoce nos AVC pequenos).",
      "Estenose carotídea sintomática significativa: endarterectomia ou angioplastia com stent, de preferência nas primeiras 2 semanas.",
      "Estatina, controlo da TA e da diabetes, deixar de fumar, atividade física, alimentação equilibrada."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Agravamento neurológico (aumento do NIHSS, queda da consciência, novo défice): comunicar de imediato e preparar TC urgente.",
      "Durante ou após trombólise: cefaleia intensa, vómitos, subida súbita da TA, hemorragia ativa ou edema da língua e dos lábios — suspender a alteplase se ainda estiver em perfusão e chamar o médico.",
      "Sonolência crescente, anisocoria ou vómitos entre o 2.º e o 5.º dia num enfarte extenso (edema maligno) → cabeceira a 30°, Glasgow e pupilas, registar a hora → chamar o médico de imediato (a craniectomia decide-se cedo).",
      "Hipoglicemia, febre, dessaturação ou sinais de aspiração → corrigir a hipoglicemia segundo o protocolo, antipirético prescrito, oxigénio se SpO2 < 94%, suspender a via oral se aspiração → comunicar ao médico."
    ]}
  ]
},
{
  id: "avc-hemorragico", cap: null, parte: "p4", grupo: "avc-az", icone: "🩸",
  titulo: "AVC hemorrágico e hemorragia subaracnoideia", pags: null,
  resumo: "Hemorragia dentro do cérebro (intracerebral) ou à sua volta (subaracnoideia). As primeiras horas decidem: controlar a TA, reverter a anticoagulação, vigiar o crescimento do hematoma e a hipertensão intracraniana.",
  relacionados: ["avc", "avc-isquemico", "angiopatia-amiloide", "hic", "territorios-arteriais"],
  seccoes: [
    { t: "O essencial", itens: [
      "Hemorragia intracerebral: cerca de 10–15% dos AVC, com mortalidade mais alta do que o AVC isquémico. O hematoma pode crescer nas primeiras horas — é nesse período que os cuidados mais contam.",
      "Hemorragia subaracnoideia (HSA): sangue no espaço à volta do cérebro, na maioria dos casos por rotura de um aneurisma; doentes muitas vezes mais jovens.",
      "Os sinais focais são semelhantes aos do AVC isquémico; cefaleia intensa, vómitos e alteração precoce da consciência são mais frequentes. Só a imagem (TC) distingue."
    ]},
    { t: "Hemorragia intracerebral: causas e localizações", tabela: {
      cab: ["Causa", "Localização típica", "Notas"],
      lin: [
        ["Hipertensão arterial", "Profunda: putâmen, tálamo, ponte, cerebelo", "A causa mais frequente"],
        ["Angiopatia amiloide", "Lobar (junto ao córtex)", "Idosos; hemorragias repetidas; associação a declínio cognitivo"],
        ["Anticoagulantes", "Qualquer", "Hematomas maiores e que crescem mais — reverter de imediato"],
        ["Malformações vasculares", "Qualquer", "MAV, cavernomas; pensar nelas em doentes jovens"],
        ["Outras", "Variável", "Tumores, trombose venosa cerebral, transformação hemorrágica de um enfarte, cocaína e anfetaminas"]
      ],
      nota: "Escala ICH (gravidade): Glasgow, volume do hematoma ≥ 30 mL, sangue nos ventrículos, origem infratentorial e idade ≥ 80 anos."
    }},
    { t: "Hemorragia intracerebral: tratamento na fase aguda", aviso: "Decisões médicas segundo o protocolo do hospital; o papel da enfermagem é preparar, administrar sem atrasos, vigiar e registar as horas.", itens: [
      "TA: baixar cedo (idealmente atingir o alvo na 1.ª hora) e de forma suave até ao alvo prescrito (habitualmente PAS < 140 mmHg nas primeiras horas, idealmente na 1.ª hora e até às 6 h; evitar descidas superiores a 70 mmHg em relação ao valor inicial, descidas abaixo do limite inferior prescrito e grandes oscilações). Medir com frequência — de 5 em 5 a 15 em 15 minutos durante o ajuste. Nos hematomas grandes (mais de 30 mL), com PAS inicial muito elevada (acima de 220 mmHg) ou com cirurgia prevista, cumprir o alvo individual prescrito.",
      "Reverter a anticoagulação o mais cedo possível (idealmente na 1.ª hora): varfarina ou acenocumarol → complexo de protrombina (CCP) + vitamina K EV, com INR de controlo após o CCP; dabigatrano → idarucizumab; apixabano ou rivaroxabano → CCP ou andexanet alfa, conforme o protocolo (o benefício do andexanet é incerto e há risco trombótico: a orientação europeia só sugere pondera-lo em situações selecionadas, com última toma e início dos sintomas recentes); edoxabano → CCP (o andexanet não está aprovado na UE para o edoxabano); heparina não fracionada → protamina (nas heparinas de baixo peso molecular a reversão é só parcial). Registar a hora e a dose da última toma do anticoagulante.",
      "Doentes antiagregados: a transfusão de plaquetas não está indicada por rotina (só em situações selecionadas, como antes de cirurgia).",
      "Controlar glicemia e temperatura; crises epiléticas tratam-se se ocorrerem (sem profilaxia por rotina).",
      "Prevenção de TVP: compressão pneumática intermitente desde a admissão; heparina profilática só quando prescrita (em regra após confirmação de que o hematoma estabilizou).",
      "Cirurgia: hematoma do cerebelo grande ou com compressão do tronco/hidrocefalia → cirurgia urgente; sangue nos ventrículos com hidrocefalia → drenagem ventricular externa (DVE)."
    ]},
    { t: "Hemorragia intracerebral: cuidados de enfermagem", itens: [
      "Na admissão, perguntar e registar o nome do anticoagulante ou antiagregante e a hora da última toma (doente, família, lista de medicação, receita). Comunicar de imediato ao médico — é isto que define o antídoto. Registar a hora de administração do antídoto e colher as análises de controlo prescritas.",
      "Durante a perfusão de anti-hipertensor, medir a TA sempre no mesmo braço (de preferência o não parético) e registar cada ajuste de ritmo.",
      "Vigilância neurológica apertada nas primeiras 24–48 h (Glasgow, pupilas, NIHSS, força), com a frequência prescrita (na fase aguda, em regra pelo menos de hora a hora, segundo o protocolo): o crescimento do hematoma manifesta-se por agravamento.",
      "Sinais de hipertensão intracraniana: cefaleia crescente, vómitos, sonolência, anisocoria; tardios — HTA com bradicardia e respiração irregular (tríade de Cushing). Comunicar de imediato.",
      "Cabeceira a 30°, cabeça alinhada, evitar flexão ou rotação do pescoço e roupas ou fixações apertadas no pescoço.",
      "Evitar aumentos da pressão intracraniana: prevenir obstipação e esforço (laxantes conforme prescrição), tratar náuseas, dor e tosse; aspirar secreções só quando necessário e de forma breve; ambiente calmo.",
      "DVE (se existir): ver o tema «Hipertensão intracraniana» — nível do sistema, clampagem ao mobilizar, débito e aspeto do LCR, assepsia.",
      "Disfagia: jejum absoluto (incluindo água e medicação oral) até rastreio com o instrumento do serviço (ex.: GUSS). Quedas (Morse), úlceras por pressão (Braden) e funcionalidade (Barthel) na admissão e conforme protocolo. Restantes cuidados e preparação para a alta: tema «Doença cerebrovascular (AVC)»."
    ]},
    { t: "Hemorragia subaracnoideia: reconhecer e avaliar", itens: [
      "Cefaleia súbita e muito intensa, máxima em segundos ou minutos («a pior da vida»), muitas vezes com vómitos, rigidez da nuca, fotofobia, perda de consciência ou crise epilética.",
      "Diagnóstico: TC sem contraste (e punção lombar se a TC for normal e a suspeita se mantiver); angio-TC ou angiografia para encontrar o aneurisma.",
      "Gravidade: escalas de Hunt e Hess ou WFNS (clínica) e de Fisher modificada (quantidade de sangue na TC, que prevê o risco de vasospasmo).",
      "O aneurisma deve ser tratado cedo (idealmente nas primeiras 24 h): embolização endovascular (coils) ou clipagem cirúrgica."
    ]},
    { t: "Hemorragia subaracnoideia: cuidados de enfermagem", itens: [
      "Antes de o aneurisma estar tratado o risco de nova hemorragia é máximo: repouso, ambiente calmo e com pouca luz, controlo da dor, TA no alvo prescrito (habitualmente PAS ≤ 160 mmHg, evitando também a hipotensão e grandes oscilações), laxantes e antieméticos, evitar esforço e manobras de Valsalva. Depois de o aneurisma estar tratado o alvo muda: não dar anti-hipertensores sem confirmar o novo alvo prescrito (a hipotensão agrava a isquemia tardia).",
      "Nimodipina conforme prescrição (habitualmente 21 dias) — vigiar hipotensão e comunicar; por via oral ou SNG a horas certas; a forma EV protege-se da luz e administra-se segundo o RCM.",
      "Isquemia cerebral tardia / vasospasmo, sobretudo entre o 3.º e o 14.º dia: nova sonolência, confusão, défice focal ou agravamento da cefaleia — comunicar de imediato.",
      "Manter euvolemia e balanço hídrico rigoroso; vigiar o sódio — a hiponatremia é frequente e não se corrige com restrição hídrica nestes doentes.",
      "Hidrocefalia (aguda ou tardia): sonolência, alteração da marcha ou da consciência; pode exigir DVE.",
      "Vigiar ECG e sinais de disfunção cardíaca (arritmias, «coração de stress»); febre e crises epiléticas.",
      "Mobilização gradual após o tratamento do aneurisma, segundo o protocolo e a indicação médica."
    ]},
    { t: "HSA — vigilância por defeito (salvo prescrição ou protocolo diferente)", itens: [
      "Avaliação neurológica (Glasgow por componentes, pupilas, força dos 4 membros, fala, cefaleia 0–10): de hora a hora na fase aguda e até indicação médica; até ao 21.º dia, nunca com intervalo superior a 4 h. O dia da hemorragia conta como dia 1.",
      "Do 3.º ao 14.º dia (risco de vasospasmo e isquemia tardia, maior por volta do 7.º ao 10.º dia): confusão nova, sonolência, afasia, novo défice ou queda de 1 ponto no Glasgow → comunicar de imediato. Verificar ao mesmo tempo TA, sódio, temperatura e balanço.",
      "TA e FC de hora a hora na fase aguda; TA antes de cada toma de nimodipina. Se a TA estiver abaixo do limite prescrito, comunicar antes da toma: não omitir a dose nem a alterar por decisão própria.",
      "Balanço hídrico rigoroso, com totais pelo menos de 4 em 4 h, e peso diário quando possível. Objetivo: euvolemia. Comunicar diurese acima de 200 mL/h em 2 h seguidas, balanço negativo mantido ou oligúria.",
      "Sódio pelo menos uma vez por dia (mais vezes se prescrito ou alterado). Comunicar valor fora do intervalo de referência ou em descida: a hiponatremia aumenta o risco de isquemia e não se trata com restrição hídrica.",
      "Temperatura de 4 em 4 h; comunicar se 38 °C ou mais. Glicemia conforme protocolo.",
      "Hidrocefalia: sonolência progressiva, alteração da marcha, incontinência nova ou olhar desviado para baixo → comunicar de imediato.",
      "Após embolização: local de punção, pulsos e perfusão distal de hora a hora nas primeiras 12 h e de 2 em 2 h nas 12 h seguintes, junto com a avaliação neurológica."
    ] },
    { t: "Sinais de alarme", alarme: true, itens: [
      "Agravamento neurológico, queda do Glasgow ≥ 2 pontos, anisocoria ou nova crise epilética: comunicar de imediato (crescimento do hematoma, nova hemorragia, hidrocefalia).",
      "Cefaleia que agrava subitamente na HSA com aneurisma ainda não tratado (possível nova rotura) → Glasgow, pupilas e TA, repouso, registar a hora → chamar o médico de imediato (TC urgente).",
      "Entre o 3.º e o 14.º dia de HSA: confusão, sonolência ou novo défice (vasospasmo) → Glasgow e défice focal, TA (evitar hipotensão), balanço hídrico e sódio → comunicar ao médico de imediato.",
      "TA fora do alvo apesar do tratamento, ou hipotensão com a nimodipina → repetir a TA e avaliar o estado neurológico → comunicar ao médico; com hipotensão, confirmar antes da toma seguinte de nimodipina.",
      "Tríade de Cushing (HTA, bradicardia, respiração irregular): hipertensão intracraniana grave → via aérea e oxigénio, cabeceira a 30°, Glasgow e pupilas → chamar o médico/EEMI de imediato."
    ]}
  ]
},
{
  id: "trombectomia", cap: null, parte: "p4", grupo: "avc-az", icone: "🩺",
  titulo: "Trombectomia (AVC isquémico)", pags: null,
  resumo: "Remoção do trombo por via endovascular numa oclusão de grande artéria. Cuidados antes e depois: vigilância neurológica, TA, local de punção, perfusão do membro, perdas hemáticas e penso.",
  relacionados: ["avc-isquemico", "avc", "territorios-arteriais"],
  seccoes: [
    { t: "O que é", itens: [
      "Procedimento de neurorradiologia de intervenção: através de uma artéria (femoral ou radial) leva-se um cateter até à artéria cerebral ocluída e retira-se o trombo com um stent-retriever e/ou aspiração.",
      "Indicada na oclusão de grande vaso — carótida interna, ACM no segmento M1 (e, em doentes selecionados, M2 proximal dominante, por decisão da equipa), artéria basilar. Nas oclusões de vasos médios e distais (ramos mais pequenos da ACM, ACA, ACP) os ensaios recentes não mostraram benefício por rotina.",
      "Janelas: circulação anterior até 6 h; entre 6 e 24 h com seleção por imagem; oclusão basilar até 24 h. Em doentes selecionados, também em enfartes já extensos.",
      "Faz-se nos centros com neurorradiologia de intervenção; o doente pode ser transferido depois de iniciar a trombólise noutro hospital. A trombólise, quando indicada, não se atrasa à espera da trombectomia."
    ]},
    { t: "Antes do procedimento", itens: [
      "Via Verde AVC: hora de início (ou última vez visto bem), NIHSS e TA registados; tempo é cérebro — preparar em paralelo, sem atrasos.",
      "Peso, alergias (sobretudo ao contraste iodado), anticoagulantes e antiagregantes em curso; glicemia capilar.",
      "Dois acessos venosos; colheitas (hemograma, coagulação, bioquímica com função renal) sem atrasar o procedimento.",
      "Avaliar e registar os pulsos periféricos (femorais, pediosos, tibiais posteriores e radiais), a cor e a temperatura dos membros — servem de comparação depois.",
      "Jejum; retirar próteses dentárias, adornos e roupa; consentimento quando possível (em situação urgente segue-se o protocolo).",
      "O procedimento faz-se com sedação ou anestesia geral (decisão da equipa); transporte monitorizado e acompanhado."
    ]},
    { t: "Depois: vigilância neurológica e hemodinâmica", itens: [
      "À chegada da sala de angiografia, confirmar e registar no SClínico: acesso (femoral ou radial, e lado), dispositivo de encerramento ou introdutor mantido, hora de fim, grau de recanalização (escala TICI), fármacos dados na sala (heparina, trombolítico, antiagregante — ex.: se foi colocado stent), volume de contraste, tipo de anestesia, alvo de TA e tempo de repouso prescritos. Se o alvo de TA não estiver escrito, pedi-lo de imediato ao médico.",
      "NIHSS, Glasgow, pupilas e sinais vitais com a frequência do protocolo (habitualmente de 15 em 15 min nas primeiras 2 h, de 30 em 30 min nas 6 h seguintes e de hora a hora até às 24 h).",
      "TA no alvo prescrito: em regra < 180/105 mmHg; após recanalização não baixar a PAS abaixo de 140 mmHg salvo prescrição (descidas muito intensas pioram o prognóstico).",
      "Qualquer agravamento (cefaleia, vómitos, sonolência, novo défice, aumento do NIHSS): comunicar de imediato — pode ser hemorragia, nova oclusão ou edema; preparar TC urgente.",
      "Doente que esteve sob anestesia: vigiar via aérea, SpO₂ e despertar; rastreio da deglutição só com o doente bem acordado."
    ]},
    { t: "Depois: local de punção, penso e perfusão do membro", itens: [
      "Acesso femoral: repouso no leito com o membro em extensão durante o tempo definido (depende do dispositivo de encerramento e do protocolo, em regra 2 a 6 h); cabeceira ≤ 30°; não fletir a anca; ensinar a comprimir o penso ao tossir ou espirrar.",
      "Vigiar o penso com a mesma frequência dos sinais vitais: hemorragia, hematoma (delimitar com caneta e registar a dimensão), dor, massa pulsátil ou sopro (pseudoaneurisma).",
      "Perfusão do membro: pulsos distais (pedioso e tibial posterior), cor, temperatura, preenchimento capilar, sensibilidade e mobilidade — comparar com o outro membro e com o registo de antes. Membro frio, pálido, sem pulso ou doloroso: comunicar de imediato (isquemia).",
      "Hemorragia no local: compressão manual firme logo acima do ponto de punção e chamar o médico.",
      "Se o doente vier com o introdutor femoral: membro em extensão, não fletir a anca, remoção e compressão só segundo o protocolo (habitualmente após confirmar a coagulação). Na remoção, vigiar reação vasovagal (bradicardia, hipotensão, sudação, náuseas) — acesso venoso permeável e atropina disponível conforme protocolo.",
      "Hemorragia retroperitoneal (acesso femoral): dor lombar, no flanco ou abdominal, hipotensão, taquicardia, palidez, queda da hemoglobina — mesmo sem hematoma visível. Comunicar de imediato.",
      "Acesso radial: pulseira de compressão retirada de forma progressiva segundo o protocolo; vigiar a mão (cor, temperatura, preenchimento capilar, dor, sensibilidade); não puncionar nem medir a TA nesse braço nas primeiras 24 h. Se sangrar ao desinsuflar, repor o volume retirado e comunicar. Antebraço tenso, doloroso ou a aumentar de volume: risco de síndrome compartimental — comunicar de imediato."
    ]},
    { t: "Depois: perdas hemáticas e outros cuidados", itens: [
      "Vigiar perdas hemáticas, sobretudo se houve trombólise: penso, gengivas, nariz, urina, fezes, vómito, equimoses; hemoglobina conforme prescrição.",
      "Contraste iodado: hidratação conforme prescrição, diurese e função renal; vigiar reações alérgicas tardias (prurido, exantema). Se o doente toma metformina, confirmar com o médico se deve ser suspensa e quando retomar.",
      "Durante o repouso no leito: vigiar globo vesical (ecografia vesical, se disponível) e dor — a retenção e a dor causam agitação e tentativas de fletir a perna ou de se levantar. No doente agitado, afásico ou com negligência: procurar a causa, explicar e reforçar a presença, cama baixa e travada. Contenção física só como último recurso, com prescrição, segundo o protocolo do hospital, com vigilância e registo.",
      "Imagem de controlo (TC ou RM) em regra às 24 h, antes de iniciar antiagregação ou anticoagulação.",
      "Glicemia, temperatura e balanço hídrico como no AVC isquémico.",
      "Levante só depois do repouso prescrito, com o local de punção estável e sem hemorragia; primeiro levante acompanhado.",
      "Prevenção de TVP conforme prescrição (compressão pneumática intermitente)."
    ]},
    { t: "Ensinos para a alta", itens: [
      "Local de punção: manter limpo e seco; vigiar inchaço, dor, hematoma que aumenta ou sangue.",
      "Na primeira semana: evitar pegar em pesos e esforços com o membro puncionado; não fazer banhos de imersão até cicatrizar.",
      "Se sangrar: comprimir com firmeza e ligar 112.",
      "Reconhecer um novo AVC (BE-FAST) e ligar 112 de imediato, anotando a hora."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Agravamento neurológico, cefaleia intensa ou vómitos após o procedimento → NIHSS, Glasgow, pupilas e TA, registar a hora → chamar o médico de imediato e preparar TC urgente.",
      "Hematoma que cresce, hemorragia que não para com a compressão ou massa pulsátil no local de punção → compressão manual firme logo acima do ponto de punção, delimitar o hematoma, sinais vitais → chamar o médico de imediato.",
      "Membro frio, pálido, sem pulso, dormente ou doloroso → comparar com o outro membro e com o registo prévio, registar a hora → chamar o médico de imediato (isquemia).",
      "Dor lombar ou abdominal com hipotensão e taquicardia (hemorragia retroperitoneal) → deitar, sinais vitais seriados, acesso venoso, hemograma conforme prescrição → chamar o médico de imediato.",
      "TA acima do alvo prescrito ou hipotensão → repetir a TA e avaliar o estado neurológico → comunicar ao médico para ajustar conforme prescrição."
    ]}
  ]
},
{
  id: "territorios-arteriais", cap: null, parte: "p4", grupo: "avc-az", icone: "🗺️",
  titulo: "Territórios arteriais e síndromes de AVC", pags: null,
  resumo: "Que artéria irriga cada zona do cérebro e que sinais dá a sua oclusão. Esquemas da face lateral, medial, corte axial e polígono de Willis, com as síndromes a reconhecer à cabeceira.",
  relacionados: ["avc-isquemico", "avc", "topografia", "linguagem"],
  seccoes: [
    { t: "O essencial", aviso: "Esquemas simplificados, para orientação. Os limites dos territórios variam de pessoa para pessoa.", itens: [
      "Circulação anterior: as duas carótidas internas dão a artéria cerebral anterior (ACA) e a artéria cerebral média (ACM).",
      "Circulação posterior (vertebrobasilar): as duas artérias vertebrais juntam-se na basilar, que irriga o tronco cerebral e o cerebelo e termina nas artérias cerebrais posteriores (ACP).",
      "O polígono de Willis liga as artérias entre si: a comunicante anterior une as duas ACA (direita e esquerda); as comunicantes posteriores unem cada carótida interna à ACP do mesmo lado (circulação anterior e posterior).",
      "Lesões de um hemisfério dão sinais do lado oposto do corpo; lesões do tronco cerebral podem dar sinais «cruzados» (nervos cranianos de um lado, membros do outro)."
    ]},
    { t: "Polígono de Willis", esquema: "willis", itens: [] },
    { t: "Face lateral do cérebro", esquema: "lateral", itens: [
      "A ACM irriga a maior parte da face lateral — áreas motoras e sensitivas da face e do membro superior, linguagem (hemisfério esquerdo) e atenção espacial (hemisfério direito)."
    ]},
    { t: "Face medial do cérebro", esquema: "medial", itens: [
      "A ACA irriga a face medial dos lobos frontal e parietal — incluindo a área motora e sensitiva do membro inferior.",
      "A ACP irriga o lobo occipital (visão), a face inferior do lobo temporal (memória) e o tálamo."
    ]},
    { t: "Corte axial", esquema: "axial", itens: [
      "As artérias perfurantes profundas (lenticuloestriadas, ramos da ACM) irrigam os gânglios da base e a cápsula interna: por aqui passam todas as fibras motoras — uma lesão pequena pode dar uma hemiparesia completa (enfarte lacunar).",
      "As zonas de fronteira entre territórios sofrem primeiro quando a TA baixa muito (enfartes de fronteira)."
    ]},
    { t: "Artérias, localização e sinais", tabela: {
      cab: ["Artéria", "Território", "Sinais típicos (do lado oposto à lesão, salvo indicação «do mesmo lado»)"],
      lin: [
        ["ACA", "Face medial dos lobos frontal e parietal", "Parésia e hipostesia sobretudo do membro inferior; incontinência urinária; abulia, lentidão, reflexo de preensão"],
        ["ACM — divisão superior", "Lobo frontal lateral e parietal anterior", "Parésia da face e do membro superior > inferior; afasia de Broca (esquerda); desvio do olhar para o lado da lesão"],
        ["ACM — divisão inferior", "Lobo temporal e parietal posterior", "Afasia de Wernicke (esquerda) ou negligência (direita); quadrantanopsia superior; muitas vezes sem fraqueza"],
        ["ACM — tronco (M1)", "Todo o território da ACM, incluindo os gânglios da base", "Hemiplegia e hemianestesia (face e membro superior > inferior), hemianopsia homónima, desvio do olhar; afasia global (esquerda) ou negligência e anosognosia (direita)"],
        ["Perfurantes (lenticuloestriadas)", "Gânglios da base e cápsula interna", "Síndromes lacunares — sem afasia, negligência nem alterações do campo visual"],
        ["Coroideia anterior", "Braço posterior da cápsula interna, trato ótico e corpo geniculado lateral, globo pálido, face medial do lobo temporal", "Hemiparesia, hemi-hipostesia e hemianopsia homónima (pode parecer um enfarte lacunar ou da ACM)"],
        ["ACP", "Lobo occipital, face inferior do temporal, tálamo", "Hemianopsia homónima (muitas vezes com poupança macular); alexia sem agrafia (esquerda); alterações da memória; tálamo: perda de sensibilidade e dor do hemicorpo"],
        ["Basilar", "Ponte, mesencéfalo, cerebelo, ACP", "Tetraparesia, coma, alterações dos movimentos oculares, disartria, disfagia; «síndrome de encarceramento» (locked-in): consciente, comunica só com movimentos verticais dos olhos e pestanejo — não confundir com coma (falar com o doente, avaliar a dor, combinar um código sim/não)"],
        ["Vertebral / PICA", "Bulbo lateral e cerebelo inferior", "Síndrome de Wallenberg: vertigem, vómitos, disfagia, rouquidão, Horner e ataxia do mesmo lado; perda da sensibilidade térmica e dolorosa da face do mesmo lado e do corpo do lado oposto; habitualmente sem fraqueza dos membros (o NIHSS pode ser baixo), mas com alto risco de aspiração — nada por boca até avaliar a deglutição"],
        ["AICA e cerebelosa superior", "Ponte lateral e cerebelo", "Ataxia do mesmo lado, vertigem, nistagmo; na AICA também surdez e paralisia facial do mesmo lado"]
      ],
      nota: "Esquerda/direita referem-se ao hemisfério dominante habitual (linguagem à esquerda na maioria das pessoas)."
    }},
    { t: "Hemisfério esquerdo e hemisfério direito", itens: [
      "Esquerdo (dominante na maioria): afasia, alexia, agrafia, acalculia, apraxia — ver «Avaliação da linguagem e comunicação».",
      "Direito: negligência do lado esquerdo do espaço e do corpo, anosognosia (não reconhece o défice), dificuldade em vestir-se e em orientar-se no espaço, fala sem entoação."
    ]},
    { t: "Classificação clínica de Oxford (OCSP / Bamford)", tabela: {
      cab: ["Tipo", "Critérios", "O que sugere"],
      lin: [
        ["TACI — enfarte total da circulação anterior", "As três: défice motor e/ou sensitivo de 2 de 3 áreas (face, membro superior, inferior); hemianopsia homónima; disfunção cortical (afasia, negligência)", "Oclusão da ACM proximal ou da carótida; pior prognóstico"],
        ["PACI — enfarte parcial da circulação anterior", "Duas das três; ou só disfunção cortical; ou défice motor/sensitivo mais limitado do que no LACI (ex.: só um membro, ou face e mão)", "Oclusão de ramo da ACM ou da ACA"],
        ["LACI — enfarte lacunar", "Síndrome lacunar, sem disfunção cortical nem hemianopsia", "Oclusão de uma artéria perfurante"],
        ["POCI — enfarte da circulação posterior", "Qualquer um: sinais cruzados (nervo craniano de um lado, membros do outro); défice motor e/ou sensitivo bilateral; alteração do olhar conjugado; síndrome cerebelosa sem défice motor do mesmo lado; hemianopsia homónima isolada", "Território vertebrobasilar ou ACP"]
      ]
    }},
    { t: "Síndromes lacunares", itens: [
      "Motora pura: parésia da face, do membro superior e do inferior do mesmo lado, sem outros défices.",
      "Sensitiva pura: perda de sensibilidade de um hemicorpo.",
      "Sensitivomotora: as duas anteriores juntas.",
      "Hemiparesia atáxica: fraqueza (sobretudo do membro inferior) e ataxia do mesmo lado, com ataxia desproporcionada à fraqueza.",
      "Disartria–mão desajeitada: disartria com falta de destreza de uma mão."
    ]},
    { t: "Circulação posterior: não deixar passar", itens: [
      "Sinais a valorizar: vertigem com diplopia, disartria, disfagia, ataxia, hemianopsia, alteração da consciência ou sinais cruzados.",
      "A vertigem isolada pode ser AVC do cerebelo — valorizar sobretudo se súbita, persistente, com incapacidade de andar ou de se sentar sem apoio, cefaleia occipital ou fatores de risco vascular. Comunicar e não atribuir logo a «labirintite».",
      "A oclusão da basilar pode começar com sintomas flutuantes e evoluir rapidamente para coma: é emergência (trombectomia até 24 h)."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Sinais de circulação posterior novos ou flutuantes — vertigem com diplopia, disartria, disfagia, ataxia, sinais cruzados ou queda da consciência: possível oclusão da basilar. Comunicar de imediato (emergência, pode haver indicação para trombectomia) e registar a hora.",
      "Vertigem súbita e persistente com incapacidade de andar ou de se sentar sem apoio, cefaleia occipital ou vómitos: possível AVC do cerebelo — comunicar e não atribuir a «labirintite». Num enfarte cerebeloso extenso, sonolência crescente pode ser compressão do tronco ou hidrocefalia (urgência neurocirúrgica).",
      "Enfarte extenso da ACM: sonolência crescente, desvio do olhar, anisocoria ou vómitos nos primeiros dias — possível edema maligno. Comunicar de imediato.",
      "Novo défice num território diferente ou aumento do NIHSS: possível novo AVC ou progressão. Avaliar NIHSS e Glasgow, registar a hora e comunicar.",
      "Lesões do tronco (ex.: Wallenberg): tosse ao engolir, voz molhada, dessaturação ou febre — possível aspiração. Suspender a via oral e comunicar.",
      "Lesões do tronco ou locked-in: alteração do padrão respiratório ou dificuldade em gerir as secreções — chamar o médico de imediato."
    ]},
    { t: "Da localização aos cuidados de enfermagem", itens: [
      "ACM esquerda: comunicação (afasia) — estratégias do tema «Avaliação da linguagem e comunicação»; confirmar a compreensão antes de ensinos.",
      "ACM direita: negligência e anosognosia — abordar inicialmente pelo lado preservado, campainha e objetos ao alcance, risco elevado de quedas (o doente não reconhece o défice).",
      "ACA: membro inferior e incontinência — transferências seguras, programa de eliminação; abulia — estimular a participação.",
      "ACP: campo visual — colocar objetos e aproximar-se pelo lado que vê; orientar no espaço; atenção às alterações da memória.",
      "Tronco e cerebelo: disfagia e via aérea (risco de aspiração), vómitos, ataxia e quedas; vigiar a respiração e a consciência.",
      "Síndrome de Wallenberg: a disfagia é muitas vezes grave, com aspiração silenciosa, mesmo com consciência e fala normais — não iniciar via oral sem rastreio formal. Perda da sensibilidade térmica e dolorosa: testar a temperatura da água do banho e não usar sacos de água quente.",
      "Síndrome de encarceramento (locked-in): o doente está consciente. Combinar um código com os olhos (ex.: olhar para cima = sim), explicar tudo o que se faz, avaliar a dor por esse código, proteger os olhos e registar o código para o turno seguinte.",
      "Todos: rastreio da disfagia antes de qualquer ingestão oral; posicionamento e prevenção de complicações."
    ]}
  ]
},
{
  id: "encefalopatia-wernicke", cap: null, parte: "p4", icone: "💊",
  titulo: "Encefalopatia de Wernicke", pags: null,
  resumo: "Emergência neurológica por falta de tiamina (vitamina B1), tratável se for reconhecida cedo. A tríade clássica é rara: basta a suspeita num doente de risco para dar tiamina EV. Na enfermagem: identificar o risco na admissão, administrar a tiamina sem atrasos, vigiar a consciência, os olhos e a marcha, e prevenir quedas, abstinência e síndrome de realimentação.",
  relacionados: ["coma", "sistemicas", "seguranca", "disfagia"],
  seccoes: [
    { t: "O essencial", itens: [
      "Doença neurológica grave causada pela falta de tiamina (vitamina B1), essencial para o cérebro usar a glicose. As lesões atingem o tálamo medial, os corpos mamilares, a substância cinzenta à volta do aqueduto e o vérmis do cerebelo.",
      "É potencialmente reversível se for tratada cedo; sem tratamento pode evoluir para coma e morte. Mesmo com tratamento, sobretudo se tardio ou no consumo de álcool, pode ficar uma síndrome de Korsakoff (incapacidade de fixar informação nova, desorientação, confabulação), muitas vezes permanente.",
      "Tríade clássica: alterações dos movimentos oculares, ataxia e confusão. Está completa só numa minoria dos doentes (cerca de 16%) — por isso o diagnóstico é muitas vezes tardio.",
      "Regra prática: num doente de risco com qualquer alteração do estado mental, da marcha ou dos movimentos oculares, pensar em Wernicke e tratar logo, sem esperar pela confirmação."
    ]},
    { t: "Quem está em risco", itens: [
      "Consumo excessivo de álcool (a causa mais frequente).",
      "Desnutrição de qualquer causa: vómitos persistentes (incluindo hiperémese gravídica), jejum prolongado, anorexia nervosa, cancro, doenças infeciosas graves.",
      "Cirurgia bariátrica ou gastrointestinal, dificuldade em iniciar a alimentação no pós-operatório, nutrição parentérica sem vitaminas.",
      "Hemodiálise, diálise peritoneal e diarreia crónica (perdas de vitaminas).",
      "Início de alimentação ou de soros com glicose num doente desnutrido: pode precipitar ou agravar o quadro."
    ]},
    { t: "Como se manifesta", itens: [
      "Estado mental: confusão, desorientação, apatia, sonolência, alterações da memória; nos casos graves, estupor e coma.",
      "Olhos: nistagmo (o mais frequente), paresia do olhar lateral (VI par), oftalmoplegia, visão dupla.",
      "Marcha: ataxia do tronco, marcha de base alargada, desequilíbrio, dificuldade em ficar de pé ou sentado sem apoio.",
      "Outros: hipotermia e hipotensão (lesão do hipotálamo), neuropatia periférica associada, sinais de abstinência alcoólica.",
      "Critérios de Caine (sobretudo no doente com consumo de álcool): bastam 2 de 4 — défice nutricional, alterações oculomotoras, disfunção cerebelosa, alteração do estado mental ou défice de memória."
    ]},
    { t: "Diagnóstico", aviso: "O diagnóstico é clínico. Os exames não devem atrasar a tiamina.", itens: [
      "Colher sangue para doseamento de tiamina antes da primeira dose, se for possível sem atrasar o tratamento.",
      "Glicemia, ionograma com magnésio e fósforo, função hepática e renal, álcool no sangue.",
      "RM encefálica: alterações simétricas (hipersinal em T2/FLAIR, com restrição à difusão) no tálamo medial junto ao 3.º ventrículo, corpos mamilares, substância cinzenta periaquedutal, tectum do mesencéfalo e vérmis. Com tratamento precoce, as lesões podem desaparecer.",
      "Uma RM normal não exclui o diagnóstico."
    ]},
    { t: "Tratamento", aviso: "Doses e duração segundo a prescrição e o protocolo do hospital.", itens: [
      "Tiamina EV em dose alta e o mais cedo possível, segundo a prescrição e o protocolo do hospital, durante pelo menos 3–5 dias e enquanto houver melhoria; depois passa a via oral, durante semanas.",
      "A via oral não chega na fase aguda: a absorção intestinal é fraca, sobretudo no consumo de álcool.",
      "Glicose: num doente de risco, a tiamina deve ser dada antes ou ao mesmo tempo que soros com glicose ou o início da alimentação. Mas uma hipoglicemia corrige-se de imediato — nunca se atrasa a glicose à espera da tiamina.",
      "Corrigir o magnésio (necessário para a tiamina atuar), o potássio e o fósforo; tratar a abstinência alcoólica e a causa da desnutrição.",
      "Doentes de risco sem sintomas (ex.: consumo de álcool com má alimentação, abstinência, vómitos persistentes): tiamina profilática por via parentérica (EV, ou IM se não houver coagulopatia) e depois oral, conforme prescrição."
    ]},
    { t: "Cuidados de enfermagem", itens: [
      "Na admissão, identificar o risco e registá-lo de forma visível («risco de Wernicke»). Perguntar pelo consumo de álcool (quantidade, frequência e hora da última bebida) e confirmar com a família, porque o doente pode minimizar ou confabular. Perguntar também por vómitos, perda de peso, ingestão reduzida nos últimos dias, cirurgia bariátrica e diálise. Pesar e medir (IMC), fazer glicemia capilar e o rastreio de risco nutricional com o instrumento do hospital. Comunicar ao médico para prescrição de tiamina antes de soros com glicose, do início da alimentação ou de um jejum prolongado para exames.",
      "Tiamina EV: dar à hora prescrita, num horário fixo não ligado às refeições, sem omitir nem atrasar doses. Preparar segundo o protocolo e o RCM do produto do hospital (confirmar com a farmácia a apresentação e o número de ampolas por dose) — em regra diluída em 50–100 mL de soro fisiológico e perfundida em 30 minutos. Não misturar outros fármacos no mesmo soro e lavar a linha antes e depois (incompatível com soluções alcalinas, como o bicarbonato). Guardar as ampolas protegidas da luz. Vigiar a TA e sinais de reação alérgica em todas as perfusões, não só na primeira, com material de emergência disponível. Sem acesso venoso, pedir ao médico a via IM (só sem coagulopatia). Registar a hora de cada dose e a hora de início dos soros com glicose ou da alimentação.",
      "Avaliação neurológica antes da 1.ª dose de tiamina (registo de base); nas primeiras 24–48 h, pelo menos de 4 em 4 horas ou conforme prescrição e protocolo; depois, pelo menos uma vez por turno. Usar sempre os mesmos itens, para comparar: Glasgow, orientação (pessoa, local, tempo), nistagmo ou visão dupla ao olhar para os lados, equilíbrio sentado sem apoio e marcha (só se for seguro). Registar também a glicemia capilar, a temperatura e a TA. A melhoria dos olhos costuma surgir em horas a dias; a marcha e a memória demoram semanas. Sem melhoria ou com agravamento: comunicar.",
      "Prevenção de quedas (Morse): ataxia e confusão — cama baixa, avaliar o equilíbrio sentado antes do primeiro levante (na fase aguda, levante com 2 pessoas), levante sempre acompanhado, calçado adequado, campainha ao alcance.",
      "Abstinência alcoólica: vigiar nos primeiros 5 dias após a última bebida (crises sobretudo nas primeiras 48 h; delirium tremens habitualmente às 48–96 h). Avaliar com a CIWA-Ar na frequência do protocolo do serviço, e mais vezes se a pontuação subir; registar a pontuação, os sinais vitais e a intervenção. A CIWA-Ar exige um doente orientado e capaz de comunicar: no doente confuso ou sonolento não é fiável — registar os sinais observáveis (tremor, sudação, FC, TA, temperatura, agitação) e o nível de sedação (ex.: RASS) e comunicar. A confusão pode ser Wernicke e não só abstinência: não atrasar a tiamina.",
      "Benzodiazepinas: medicação de alto risco. Antes de cada dose, avaliar a sedação, a FR e a SpO₂; se o doente estiver sonolento, não administrar e confirmar com o médico — a sedação excessiva esconde o agravamento do Wernicke e aumenta o risco de aspiração.",
      "Síndrome de realimentação: risco alto se tiver 1 de: IMC < 16, perda de peso > 15% em 3–6 meses, ingestão mínima há mais de 10 dias, ou potássio, fósforo ou magnésio baixos antes de alimentar; ou 2 de: IMC < 18,5, perda de peso > 10% em 3–6 meses, ingestão mínima há mais de 5 dias, consumo excessivo de álcool ou certos fármacos (ex.: insulina, diuréticos). Nestes doentes: tiamina antes de iniciar a alimentação, progressão lenta conforme prescrição e referenciação à nutrição nas primeiras 24 h; fósforo, potássio e magnésio diários nos primeiros dias, conforme prescrição; peso diário, balanço hídrico e vigilância de edemas, dispneia, FC irregular e glicemia.",
      "Sinais vitais e temperatura: vigiar hipotensão e hipotermia.",
      "Confusão e delirium: orientação, ambiente calmo, presença da família; contenção física só como último recurso, segundo o protocolo.",
      "Deglutição: fazer o rastreio da deglutição (GUSS) antes de qualquer via oral, incluindo a tiamina e as benzodiazepinas orais, se houver sonolência, confusão, sedação recente ou disartria; repetir se o estado mental mudar. Refeições sentado a 90° e com supervisão — a visão dupla e a ataxia dificultam comer sozinho: ajudar e registar a ingestão. Se falhar o rastreio: nada por boca, pedir ao médico uma via alternativa para a medicação e referenciar à terapia da fala."
    ]},
    { t: "Ensinos ao doente e à família", itens: [
      "Explicar que a doença resulta da falta de uma vitamina e que é importante cumprir a suplementação oral durante o tempo indicado.",
      "No consumo de álcool: a abstinência total é essencial, porque o álcool prejudica a absorção da tiamina e a recuperação. Com o acordo do doente, pedir ao médico a referenciação para a consulta de alcoologia ou para a unidade de comportamentos aditivos da área de residência, de preferência com data marcada antes da alta; envolver a família.",
      "Alimentação equilibrada e regular; procurar ajuda se houver vómitos persistentes, perda de peso ou dificuldade em comer.",
      "Alterações de memória que persistem: o doente pode não reter os ensinos — fazê-los também ao cuidador, por escrito, e confirmar que foram percebidos (pedir que repita ou demonstre). Supervisão da medicação (caixa semanal), do fogão, do dinheiro e da condução (não conduzir até avaliação médica). Preparar a alta desde a admissão: avaliar a autonomia (Barthel) e o risco de queda em casa, e articular com a reabilitação e o serviço social (apoio domiciliário, RNCCI).",
      "Regressar se surgir confusão, sonolência, visão dupla ou desequilíbrio."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Agravamento da consciência (sonolência, estupor, coma): comunicar de imediato.",
      "Doente de risco com confusão, nistagmo, visão dupla ou desequilíbrio novos ou a agravar, mesmo que pareça intoxicação ou abstinência: possível Wernicke — comunicar de imediato para iniciar tiamina EV.",
      "Doente de risco a quem vão ser dados soros com glicose ou alimentação sem tiamina prescrita: alertar o médico antes de iniciar (exceto na hipoglicemia, que se corrige logo).",
      "Hipotensão ou hipotermia → sinais vitais, deitar, aquecimento passivo, confirmar a tiamina administrada → comunicar ao médico.",
      "Glicemia capilar baixa ou sinais de hipoglicemia (sudação, tremor, confusão que agrava — confundem-se com a abstinência): corrigir de imediato segundo o protocolo e comunicar; a tiamina não pode atrasar a glicose.",
      "Sedação excessiva após benzodiazepinas (difícil de acordar, FR baixa, SpO₂ a descer), ou tosse, engasgamento e febre (aspiração): comunicar de imediato.",
      "Durante a perfusão de tiamina: prurido, urticária, dispneia, edema da face ou hipotensão — parar a perfusão e chamar o médico (reação alérgica).",
      "Abstinência grave: agitação intensa, alucinações, febre, crises epiléticas (delirium tremens) → segurança (cama baixa, vigilância próxima), sinais vitais e glicemia capilar → chamar o médico de imediato; não atrasar a tiamina.",
      "Síndrome de realimentação: fraqueza, edemas, dispneia, arritmias, fósforo ou potássio baixos → sinais vitais, monitorização cardíaca se arritmia, balanço hídrico e peso → comunicar ao médico de imediato."
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
      "Febre, tosse ou engasgamento durante as refeições (pneumonia de aspiração) → parar a refeição, sentar, aspirar se necessário, SpO2 e sinais vitais → comunicar ao médico; repetir o rastreio da deglutição antes de retomar.",
      "Queda, sobretudo com traumatismo craniano ou em doente anticoagulado → não levantar antes de avaliar, Glasgow, pupilas, glicemia capilar, registar a hora → comunicar ao médico; vigilância neurológica segundo o protocolo pós-queda.",
      "Recusa alimentar ou de líquidos e sinais de desidratação → procurar a causa (dor — PAINAD se não consegue autoavaliar —, boca, disfagia), oferecer líquidos, balanço hídrico → comunicar ao médico.",
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
      "Agravamento súbito da confusão ou da vigília → Glasgow, défice focal e glicemia capilar, registar a hora → comunicar ao médico de imediato (novo AVC ou delirium).",
      "Quedas repetidas, ou queda em doente antiagregado ou anticoagulado → avaliação pós-queda (Glasgow, pupilas, glicemia capilar), vigilância neurológica seriada → comunicar ao médico; notificar e rever o plano (Morse).",
      "TA muito elevada, ou hipotensão (pode agravar a perfusão cerebral) → repetir a TA e avaliar o estado neurológico → comunicar ao médico."
    ]}
  ]
},
{
  id: "dcl", cap: null, parte: "p4", grupo: "demencias-az", icone: "🧠",
  titulo: "Demência por corpos de Lewy (DCL)", pags: null,
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
      "Haloperidol e muitos outros antipsicóticos podem provocar rigidez grave, confusão, quedas, síndrome neuroléptica maligna e morte. Não administrar sem confirmação médica, mesmo em SOS para agitação.",
      "Evitar a metoclopramida; para náuseas, usar a alternativa prescrita (ex.: domperidona, que pode prolongar o QT — na dose e durante o tempo mínimos prescritos, com cautela nas cardiopatias e nas interações).",
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
      "Rigidez grave, febre, sudação e alteração da consciência após um antipsicótico: suspeitar de síndrome neuroléptica maligna — comunicar de imediato.",
      "Agravamento súbito da confusão ou da vigília, para além das flutuações habituais → Glasgow, glicemia capilar, procurar causas (infeção, retenção, fármacos); não dar antipsicótico SOS → comunicar ao médico.",
      "Síncope ou quedas repetidas → deitar, TA deitado e de pé, avaliação pós-queda → comunicar ao médico; reforçar a prevenção de quedas.",
      "Engasgamento, febre ou dessaturação (aspiração) → suspender a via oral, cabeceira elevada, aspirar se necessário, SpO2 → comunicar ao médico e pedir reavaliação da deglutição."
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
      "Epilepsia refratária: avaliação pré-cirúrgica para localizar o foco (ver abaixo); opções: cirurgia (incluindo técnicas minimamente invasivas, como a termoablação), estimulação do nervo vago, estimulação cerebral profunda ou dieta cetogénica."
    ]},
    { t: "Epilepsia refratária: avaliação pré-cirúrgica", itens: [
      "Epilepsia refratária (farmacorresistente): não se consegue uma ausência mantida de crises com dois esquemas de antiepiléticos (em monoterapia ou em associação) bem escolhidos, bem tolerados e em dose adequada.",
      "Nestes doentes avalia-se se há um foco epilético que possa ser tratado sem fármacos (ex.: cirurgia). Para o localizar, juntam-se vários exames.",
      "Monitorização vídeo-EEG prolongada numa unidade de monitorização de epilepsia (em regra 24 horas a 2 semanas), muitas vezes com redução ou suspensão da medicação para registar crises. Durante a redução há maior risco de crises em salvas, estado de mal, quedas e psicose pós-crítico: vigilância contínua, acesso venoso periférico permeável, protocolo escrito de resgate e reintrodução da medicação no fim, conforme prescrição.",
      "RM cerebral com protocolo de alta resolução (e, por vezes, RM funcional para mapear a fala e o movimento); PET (consumo de glicose); SPECT (fluxo de sangue); avaliação neuropsicológica.",
      "Quando estes exames não chegam (cerca de um terço dos casos): EEG intracraniano com elétrodos intracerebrais (estereo-EEG) ou subdurais."
    ]},
    { t: "SPECT ictal: procedimento", aviso: "Este resumo não dispensa a consulta do protocolo institucional (Medicina Nuclear e unidade de monitorização de epilepsia).", itens: [
      "O que é: exame de medicina nuclear que mostra o fluxo de sangue nas diferentes zonas do cérebro. Durante a crise, o fluxo aumenta na zona onde a crise começa.",
      "O radiofármaco (99mTc-HMPAO ou 99mTc-ECD) fixa-se no cérebro logo após a injeção e «fotografa» o fluxo desse momento; as imagens são adquiridas mais tarde na Medicina Nuclear, com o doente já estável.",
      "Faz-se em dois tempos: SPECT ictal (injeção durante uma crise, no internamento em vídeo-EEG) e SPECT interictal (injeção noutro dia, fora das crises). A comparação das duas, sobreposta à RM (SISCOM), ajuda a localizar o foco.",
      "Preparação: prescrição médica e consentimento informado; confirmar com a Medicina Nuclear a disponibilidade e o prazo de utilização da dose; cateter venoso periférico de bom calibre, colocado com antecedência, permeável, reservado à injeção, com prolongamento e seringas de soro fisiológico para lavagem — definir antes por onde se dá a medicação de resgate EV (segundo acesso, ou o mesmo cateter após lavagem), para não a atrasar; mulheres em idade fértil: excluir gravidez segundo protocolo; perguntar se amamenta e seguir a indicação da Medicina Nuclear sobre a pausa.",
      "Conhecer antes o padrão habitual das crises do doente (como começam, primeiros sinais) e combinar com o técnico de neurofisiologia como se identifica o início no EEG. Dose no local definido, pronta a usar. Injeta apenas o profissional designado no protocolo acordado com a Medicina Nuclear, e só nas crises que cumpram os critérios definidos pelo neurologista.",
      "Na crise: injetar o mais cedo possível após o início, idealmente nos primeiros 20 segundos — quanto mais tarde, mais a imagem mostra a propagação e não o início da crise. Se a crise já terminou, não injetar sem decisão do neurologista (a imagem pós-crise pode ser enganadora). Bólus seguido de lavagem com soro fisiológico.",
      "A injeção não substitui a segurança nem o tratamento: outro profissional protege o doente durante a crise e a medicação de resgate dá-se conforme prescrição — nunca atrasar o tratamento de uma crise prolongada ou de um estado de mal.",
      "Registar: hora de início da crise (clínica e no EEG), hora da injeção, duração e características da crise e se foi a crise habitual do doente; comunicar à Medicina Nuclear.",
      "Depois: vigilância pós-crise habitual; transporte para aquisição das imagens quando o doente estiver estável, no período indicado pela Medicina Nuclear — acompanhado por enfermeiro, com a medicação de resgate prescrita, oxigénio e aspiração, porque continua com a medicação reduzida e em risco de nova crise.",
      "SPECT interictal: injeção em repouso, num ambiente calmo, com pouca luz e ruído, sem crises há pelo menos 24 horas (crises focais sem alteração da consciência) ou 48 horas (crises focais com alteração da consciência), idealmente com EEG a registar durante a injeção e os 2 minutos seguintes, segundo o protocolo da Medicina Nuclear; comunicar qualquer crise antes ou durante a captação."
    ]},
    { t: "Durante a crise", itens: [
      "Manter a calma, registar a hora de início, ficar junto do doente e pedir ajuda.",
      "Proteger a cabeça, afastar objetos e desapertar a roupa; não conter os movimentos nem pôr nada na boca.",
      "Quando os abalos param: posição lateral de segurança, aspirar secreções se necessário, SpO2 e oxigénio se SpO2 baixa, glicemia capilar. Nada pela boca até recuperar a consciência e a deglutição.",
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
      "Contraceção e gravidez: planear com o neurologista (interações e risco de malformações); ácido fólico.",
      "Avaliação pré-cirúrgica: explicar o objetivo da monitorização vídeo-EEG e do SPECT, que podem ser necessárias crises durante o internamento e que a equipa está preparada para as tratar; pedir ao doente e à família que carreguem logo no botão de alarme ao primeiro sinal ou aura, que o doente se mantenha no campo da câmara e não se levante sem ajuda, e que informem gravidez ou amamentação; explicar que a decisão sobre a cirurgia só é tomada depois, com o doente, em reunião da equipa."
    ]},
    { t: "Sinais de alarme", alarme: true, itens: [
      "Crise com 5 minutos ou mais, ou crises repetidas sem recuperação da consciência entre elas: estado de mal → via aérea, oxigénio, glicemia capilar, acesso venoso, benzodiazepina segundo o protocolo, registar as horas → chamar o médico/EEMI de imediato.",
      "Não recupera a consciência após a crise, ou défice novo que não regride → posição lateral, Glasgow, glicemia capilar, registar a hora → comunicar ao médico de imediato (pode precisar de EEG ou TC).",
      "Crise com traumatismo craniano (sobretudo se anticoagulado), dificuldade respiratória ou SpO2 baixa → via aérea, aspirar, oxigénio, Glasgow e pupilas seriados → chamar o médico de imediato; EEMI se dificuldade respiratória.",
      "Primeira crise, ou crise com febre e rigidez da nuca ou com cefaleia intensa: procurar uma causa urgente → glicemia capilar, sinais vitais, Glasgow e pupilas → comunicar ao médico de imediato.",
      "Erupção cutânea com febre ou lesões nas mucosas depois de iniciar um antiepilético (reação grave) → não dar a toma seguinte sem confirmar → comunicar ao médico de imediato."
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
      "Doença avançada: apomorfina (caneta ou perfusão subcutânea), levodopa em perfusão intestinal (gel) ou subcutânea (foslevodopa/foscarbidopa) e estimulação cerebral profunda (ECP / DBS — critérios, cuidados perioperatórios e ensinos em «Doenças do movimento»).",
      "Fisioterapia, terapia da fala e terapia ocupacional em todas as fases."
    ]},
    { t: "Medicação: horário e fármacos a evitar", tipo: "precaucao", itens: [
      "Dar a medicação antiparkinsónica no horário do doente, não no horário da enfermaria; não atrasar mais de 15 a 30 minutos.",
      "Nunca suspender de repente (risco de síndrome de hiperpirexia-parkinsonismo). Em jejum ou com disfagia, pedir ao médico uma alternativa (SNG, rotigotina transdérmica).",
      "Não triturar as formulações de libertação prolongada (levodopa de libertação prolongada, agonistas LP); por SNG, usar a formulação dispersível prescrita.",
      "Evitar haloperidol e outros antipsicóticos típicos, a maioria dos atípicos (ex.: risperidona, olanzapina), metoclopramida e prometazina: agravam o parkinsonismo. Para náuseas, domperidona (prolonga o QT: na dose e durante o tempo mínimos prescritos); para alucinações, quetiapina ou clozapina por indicação médica.",
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
      "Rigidez extrema, febre, sudação e alteração da consciência após suspensão ou redução da medicação (síndrome de hiperpirexia-parkinsonismo) → sinais vitais, arrefecimento, hidratação, nada por boca → chamar o médico de imediato para retomar a medicação por via alternativa.",
      "Incapacidade de engolir a medicação: comunicar de imediato para encontrar uma via alternativa.",
      "Engasgamento, febre ou dessaturação (pneumonia de aspiração) → parar a via oral, sentar, aspirar se necessário, SpO2 e sinais vitais → comunicar ao médico; pedir via alternativa para a medicação e reavaliação da deglutição.",
      "Confusão aguda ou alucinações novas → sinais vitais, glicemia capilar, segurança (cama baixa, vigilância); procurar infeção, desidratação ou fármacos; não dar haloperidol → comunicar ao médico.",
      "Queda com traumatismo ou síncope por hipotensão ortostática → avaliação pós-queda (Glasgow, pupilas, glicemia capilar), TA deitado e de pé → comunicar ao médico; notificar a queda e reavaliar a Morse."
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
      "Perda súbita de visão → avaliar a visão de cada olho e registar a hora, TA e Glasgow, segurança (campainha à mão, levante acompanhado) → comunicar ao médico de imediato.",
      "Febre ou sinais de infeção em doente imunossuprimido → sinais vitais completos, colheitas conforme prescrição (urina, hemoculturas); não iniciar a terapêutica imunomoduladora seguinte sem confirmar → comunicar ao médico de imediato.",
      "Durante uma perfusão: dispneia, urticária, hipotensão ou edema da face (reação à perfusão ou anafilaxia) — parar a perfusão e chamar o médico.",
      "Alterações cognitivas, do comportamento ou da linguagem progressivas sob natalizumab (suspeita de LMP) → registar com exemplos concretos → comunicar ao médico de imediato; não administrar a perfusão seguinte sem confirmação médica."
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
      "A doença associada ao anticorpo anti-MOG (MOGAD) é parecida mas distinta (ver «Esclerose múltipla, neuromielite ótica e ADEM»)."
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
      "Perda súbita de visão → avaliar a visão de cada olho e registar a hora, TA e Glasgow, segurança (campainha à mão, levante acompanhado) → comunicar ao médico de imediato.",
      "Febre, cefaleia, rigidez da nuca ou petéquias sob eculizumab ou ravulizumab: suspeitar de meningite meningocócica → sinais vitais, acesso venoso, hemoculturas e antibiótico sem atrasos conforme prescrição → chamar o médico de imediato.",
      "Soluços ou vómitos incoercíveis (área postrema): risco de desidratação e de aspiração → posição lateral ou cabeceira elevada, antiemético conforme prescrição, balanço hídrico → comunicar ao médico."
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
      "Avaliação respiratória pelo menos de 4 em 4 horas e sempre que houver queixas (mais vezes se prescrito): FR, SpO2, padrão respiratório e contagem numa só expiração (inspirar fundo e contar em voz alta, cerca de 2 números por segundo, a ritmo de fala rápida, sem voltar a respirar; registar o número e a tendência); capacidade vital forçada conforme protocolo. Registar em tabela para ver a tendência — a descida da SpO2 é um sinal tardio.",
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
      "Dispneia, ortopneia, tosse fraca, uso dos músculos acessórios ou incapacidade de contar até 20 numa só expiração: possível crise miasténica — chamar o médico de imediato (pode precisar de ventilação).",
      "Disfagia grave, engasgamento ou acumulação de secreções → nada por boca, cabeceira elevada, aspirar → chamar o médico de imediato (possível crise miasténica).",
      "Fraqueza com aumento de secreções, cólicas e bradicardia: possível crise colinérgica (excesso de piridostigmina). Na dúvida, atuar como numa crise miasténica (via aérea e ventilação); não dar doses extra de piridostigmina sem indicação médica.",
      "Capacidade vital forçada abaixo de 20 mL/kg ou a descer mais de 30% → repetir e registar, contagem numa só expiração, cabeceira elevada → chamar o médico de imediato (considerar UCI).",
      "Agravamento depois de um fármaco novo (ex.: antibiótico, magnésio) → não dar a dose seguinte sem confirmar, avaliar respiração e deglutição → comunicar ao médico de imediato."
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
      "Vigilância respiratória de 2 em 2 a 4 em 4 horas na fase de progressão, conforme prescrição: FR, SpO2, força da tosse, contagem numa só expiração (inspirar fundo e contar em voz alta, cerca de 2 números por segundo, a ritmo de fala rápida, sem voltar a respirar; registar o número e a tendência) e capacidade vital forçada; registar em tabela para ver a tendência.",
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
      "Dispneia, tosse fraca, ortopneia, capacidade vital forçada abaixo de 20 mL/kg ou a descer, ou incapacidade de contar até 20 numa só expiração: risco de falência respiratória — chamar o médico (UCI).",
      "Disfagia ou acumulação de secreções → nada por boca, cabeceira elevada, aspirar com monitorização (risco de bradicardia) → comunicar ao médico de imediato.",
      "Arritmias, bradicardia ou oscilações acentuadas da TA → monitorização cardíaca, ECG, mudanças de posição lentas, atropina disponível conforme protocolo → chamar o médico de imediato.",
      "Fraqueza a progredir rapidamente, em horas → força (MRC), contagem numa só expiração e deglutição, registar → comunicar ao médico de imediato (avaliar UCI).",
      "Dor torácica, dispneia súbita ou edema de uma perna (tromboembolismo) → repouso, sinais vitais e SpO2, oxigénio conforme SpO2, ECG se dor torácica → chamar o médico de imediato."
    ]}
  ]
},
{
  id: "delirium", cap: null, parte: "p3", icone: "🧠",
  titulo: "Delirium (estado confusional agudo)",
  resumo: "Alteração aguda e flutuante da atenção e da consciência, muito frequente no doente neurológico internado. Tem sempre uma causa física: rastrear em cada turno, procurar e tratar a causa, prevenir com medidas simples e evitar contenção e sedação desnecessárias.",
  relacionados: ["demencias","dcl","parkinson","parkinsonismos-atipicos","seguranca","encefalopatia-wernicke","encefalopatia-hepatica","dor","eliminacao","disfagia","sono"],
  seccoes: [
    { t: "Sinais de alarme", alarme: true, itens: [
      "Confusão nova ou agravada com sonolência, cefaleia, anisocoria ou défice focal → Glasgow, pupilas, força e glicemia capilar já → médico de imediato (excluir AVC, hemorragia, hipertensão intracraniana).",
      "Confusão súbita com troca de palavras ou sem compreender → pode ser afasia (AVC) e não delirium → registar a hora ou a última vez visto bem, glicemia, nada por boca → ativar a Via Verde AVC segundo o protocolo.",
      "Agitação com SpO2 baixa, FR aumentada ou dificuldade respiratória → cabeceira elevada, oxigénio para o alvo prescrito → médico de imediato.",
      "Glicemia baixa → corrigir segundo o protocolo de hipoglicemia, sem esperar → médico.",
      "Tremor, sudação, taquicardia e alucinações em doente que bebe álcool ou toma benzodiazepinas → sinais vitais e glicemia → médico de imediato (abstinência).",
      "Confusão com ataxia ou alteração dos movimentos oculares → suspeitar de encefalopatia de Wernicke → médico de imediato; tiamina conforme prescrição, nunca atrasando a glicose na hipoglicemia.",
      "Febre, rigidez, sudação e TA instável após antipsicótico ou metoclopramida → não dar a dose seguinte → médico de imediato (síndrome neuroléptica maligna).",
      "Doente que não recupera após uma crise, ou com olhar desviado ou mioclonias subtis → possível estado de mal não convulsivo → médico de imediato (EEG).",
      "Doente «calmo» que deixou de comer, beber ou responder → tratar como delirium hipoativo até prova em contrário: rastrear, glicemia, SpO2, globo vesical, última dejeção → médico no próprio turno.",
      "Agitação com risco de arrancar dispositivos vitais (DVE, traqueostomia) ou de se magoar → ficar junto do doente e pedir ajuda → médico de imediato; contenção só como último recurso."
    ] },
    { t: "O essencial", itens: [
      "Perturbação aguda (horas a dias) da atenção e da consciência, que flutua ao longo do dia, com alterações do pensamento, da perceção ou do sono. É um sinal de doença física e uma urgência, não um problema de comportamento.",
      "Hiperativo: agitação, tentativas de sair da cama, arrancar cateteres, alucinações, agressividade.",
      "Hipoativo: sonolência, lentidão, apatia, pouca ingestão. É o mais frequente no idoso e o que mais passa despercebido, confundido com cansaço, depressão ou «estar sossegado».",
      "Misto: alterna entre os dois, muitas vezes agitado à noite e sonolento de dia.",
      "Aumenta quedas, aspiração, úlceras por pressão, desnutrição, tempo de internamento, institucionalização e mortalidade, e acelera o declínio cognitivo.",
      "Pode ser o primeiro sinal de uma complicação (infeção, hipoxia, retenção, hemorragia). Pode durar dias a semanas depois de tratada a causa."
    ] },
    { t: "Quem tem mais risco", itens: [
      "Idade igual ou superior a 65 anos; demência ou défice cognitivo prévio, mesmo ligeiro; doença grave; episódio anterior de delirium.",
      "Doença neurológica aguda: AVC, TCE, encefalite, crises epiléticas, pós-operatório de neurocirurgia ou de estimulação cerebral profunda.",
      "Doença de Parkinson e demência por corpos de Lewy: muito sensíveis a fármacos e a falhas da medicação.",
      "Sem óculos ou prótese auditiva; desidratação, desnutrição, imobilidade.",
      "Polimedicação; sedativos, anticolinérgicos, opioides; consumo de álcool ou de benzodiazepinas.",
      "Algália, contenção física, privação de sono, mudanças de cama, de quarto ou de serviço."
    ] },
    { t: "Rastreio e avaliação", itens: [
      "Na admissão, registar o estado cognitivo de base. Perguntar à família: «Como estava há uma semana? E ontem?». É a referência para detetar mudanças.",
      "Rastrear em cada turno os doentes em risco com o instrumento validado adotado pelo hospital. Repetir sempre que mude o comportamento ou a atenção.",
      "Testar a atenção à cabeceira: dizer os meses do ano ou os dias da semana ao contrário. Dificuldade nova ou distração fácil é alarme.",
      "Descrever o nível de consciência com a escala usada no serviço. Ajuda a reconhecer o hipoativo e o efeito dos fármacos.",
      "Distinguir: na demência o início é lento e a atenção está preservada nas fases iniciais (ver «Demências»); na depressão há humor triste com atenção e consciência normais; na afasia trocam-se palavras com a atenção preservada. Na dúvida, tratar como delirium.",
      "Procurar causas, ponto a ponto: dor (escala adequada; PAINAD só se a autoavaliação não for possível); retenção urinária (globo vesical, ecografia vesical); obstipação ou fecaloma; hipoxia (SpO2, FR); infeção (temperatura, urina, pulmão, cateteres, feridas); glicemia (hipo e hiper); desidratação (ingestão, balanço, mucosas).",
      "Continuar a procura: fármacos novos, suspensos ou em falta (sobretudo antiparkinsónicos); abstinência (álcool, benzodiazepinas, nicotina); privação de sono; alterações do sódio (perguntar ao médico se há análises recentes).",
      "Rastreio positivo ou mudança aguda: comunicar ao médico no próprio turno, já com sinais vitais, glicemia, resíduo vesical, última dejeção e fármacos recentes."
    ] },
    { t: "Prevenção multicomponente", aviso: "Aplicar a todos os doentes em risco desde as primeiras 24 h, não só a quem já tem delirium.", itens: [
      "Orientação: apresentar-se pelo nome e função; relógio e calendário visíveis; dizer a data e o plano do dia; reorientar sem confrontar.",
      "Óculos, prótese auditiva (verificar pilhas) e prótese dentária colocados e a funcionar.",
      "Hidratação: oferecer líquidos com regularidade, na consistência segura; registar a ingestão.",
      "Intestino e bexiga: registo diário de dejeções; vigiar retenção; retirar a algália o mais cedo possível.",
      "Mobilização: levante diário quando possível; não deixar o doente «preso» à cama por soros ou dispositivos desnecessários.",
      "Sono: agrupar cuidados, evitar procedimentos não urgentes à noite, reduzir ruído e luz; de dia, luz natural e atividade.",
      "Dor: avaliar com regularidade, incluindo sinais não verbais; tratar e reavaliar.",
      "Nutrição: ajuda nas refeições, tempo suficiente, preferências do doente.",
      "Medicação: pedir revisão ao médico ou farmacêutico se houver sedativos, anticolinérgicos ou muitos fármacos; antiparkinsónicos a horas exatas.",
      "Continuidade: evitar mudanças de quarto; visitas da família frequentes e flexíveis; objetos e fotografias familiares."
    ] },
    { t: "Intervenções durante o episódio", itens: [
      "A prioridade é tratar a causa: cumprir sem demora as colheitas, os exames e o tratamento prescritos.",
      "Comunicar com voz calma, frases curtas e uma instrução de cada vez; explicar antes de tocar. Não discutir as alucinações nem as confirmar: tranquilizar e mudar de assunto.",
      "Antes de qualquer fármaco, tentar acalmar: reduzir estímulos, oferecer água, levar ao WC, trazer um familiar, ficar junto do doente.",
      "Segurança: cama baixa e travada, campainha ao alcance, quarto perto do posto de enfermagem, vigilância próxima. Tapar cateteres e soros (manga, ligadura) e retirar o que não for essencial.",
      "Nada por boca sem avaliar a deglutição: a sonolência e a distração aumentam o risco de aspiração. Supervisionar as refeições.",
      "No hipoativo: reforçar hidratação, posicionamentos, prevenção de úlceras por pressão e levante.",
      "Vigiar sinais vitais, glicemia, ingestão, eliminação e sono; repetir o rastreio em cada turno até à resolução e registar a flutuação.",
      "Depois de recuperar, explicar ao doente o que aconteceu: muitos recordam o episódio com medo."
    ] },
    { t: "Fármacos: o que vigiar", tipo: "precaucao", itens: [
      "Os fármacos não tratam a causa. Antipsicótico só se houver perigo para o doente ou para outros, ou sofrimento intenso (ex.: alucinações aterrorizadoras), depois de falharem as outras medidas: menor dose e menor tempo, conforme prescrição; confirmar diariamente se ainda é necessário.",
      "Haloperidol: vigiar sedação excessiva, rigidez, distonia aguda, hipotensão e QT longo (ECG conforme prescrição); febre com rigidez obriga a comunicar de imediato.",
      "Doença de Parkinson, demência por corpos de Lewy e parkinsonismos atípicos: evitar haloperidol e a maioria dos antipsicóticos, que causam agravamento motor e reações graves. Pedir alternativa ao médico (habitualmente quetiapina). Confirmar primeiro se faltou alguma toma de antiparkinsónico ou se houve aumento de dopaminérgicos, que também causam alucinações.",
      "Benzodiazepinas: causam ou agravam delirium. Usar só na abstinência alcoólica ou de benzodiazepinas, ou nas crises epiléticas, conforme prescrição; vigiar sedação e FR. Não suspender de forma abrupta as de uso crónico.",
      "Anticolinérgicos agravam a confusão (ex.: oxibutinina, tri-hexifenidilo, biperideno, amitriptilina, anti-histamínicos sedativos): pedir revisão ao médico ou farmacêutico.",
      "Rever também: opioides, gabapentinoides, corticoides em dose alta, hipnóticos (ex.: zolpidem). Metoclopramida nunca no parkinsonismo.",
      "Consumo de álcool ou desnutrição: tiamina conforme prescrição; na hipoglicemia nunca atrasar a glicose."
    ] },
    { t: "Contenção", aviso: "A contenção física agrava a agitação, o delirium e a gravidade das quedas. As grades elevadas também são contenção.", itens: [
      "Último recurso, segundo a Orientação DGS 021/2011 e o protocolo do hospital, só depois de esgotadas as alternativas: família presente, vigilância próxima, mudança de quarto, retirada de dispositivos, tratamento da dor e da retenção.",
      "A sedação usada para controlar o comportamento é contenção farmacológica e segue as mesmas regras: prescrição, motivo e registo.",
      "Se for inevitável: decisão médica (na urgência pode ser iniciada pela equipa e validada o mais cedo possível); método menos restritivo pelo menor tempo; nunca em decúbito ventral; vigilância e reavaliação regulares; informar a família. Ver «Segurança: quedas, úlceras por pressão e contenção»."
    ] },
    { t: "Família e ensino", itens: [
      "Explicar que o delirium é frequente, tem uma causa física, costuma melhorar quando a causa é tratada e que o doente não está a «fazer de propósito».",
      "Pedir à família: como era o doente antes, hábitos de sono, consumo de álcool e medicação habitual, como gosta de ser tratado.",
      "Incentivar visitas calmas e frequentes, conversa sobre temas familiares, fotografias e objetos pessoais; ajudar na refeição só depois de treino de alimentação segura.",
      "Na alta: a confusão pode demorar semanas a desaparecer; há mais risco de quedas e de novo episódio. Garantir supervisão em casa.",
      "Ensinar a reconhecer em casa confusão nova, sonolência ou agitação noturna e a procurar ajuda: pode ser infeção ou outra complicação.",
      "Se a confusão persistir, sugerir avaliação cognitiva em consulta e escrevê-lo na carta de alta de enfermagem."
    ] }
  ]
},
{
  id: "meningites-encefalites", cap: null, parte: "p4", icone: "🦠",
  titulo: "Meningites e encefalites infeciosas",
  resumo: "Infeções das meninges e do cérebro em que cada hora conta: antibiótico (e aciclovir na suspeita de encefalite) sem esperar por TC ou punção, controlo da sépsis, isolamento e proteção dos contactos.",
  relacionados: ["infecoes","encefalite-autoimune","imunodeprimido","lyme","hic","epilepsia-az","coma","exames"],
  seccoes: [
    { t: "O essencial", itens: [
      "Meningite bacteriana e encefalite herpética são emergências: mortalidade e sequelas aumentam com o atraso do tratamento.",
      "Suspeita de meningite bacteriana: hemoculturas e antibiótico EV idealmente na primeira hora; dexametasona, se prescrita, imediatamente antes ou com a 1.ª dose de antibiótico.",
      "Suspeita de encefalite (febre ou quadro infecioso com confusão, alteração do comportamento, crises ou défice focal): aciclovir EV logo que se suspeita, sem esperar pela PCR nem pela RM.",
      "Se for necessária TC antes da punção lombar, o antibiótico (e o aciclovir) administra-se antes da TC.",
      "Doença meningocócica, doença invasiva pneumocócica e por Haemophilus influenzae, listeriose, tuberculose, entre outras, são de declaração obrigatória no SINAVE."
    ] },
    { t: "LCR: padrões de orientação", tabela: {
      cab: ["","Bacteriana","Viral","Tuberculosa / fúngica"],
      lin: [
        ["Aspeto","Turvo","Límpido","Límpido ou ligeiramente turvo"],
        ["Células","Muitas, neutrófilos","Poucas a moderadas, linfócitos","Moderadas, linfócitos"],
        ["Glicose (face à glicemia)","Muito baixa","Normal","Baixa a muito baixa"],
        ["Proteínas","Muito elevadas","Normais ou pouco elevadas","Elevadas a muito elevadas"],
        ["Evolução","Horas","Horas a dias","Dias a semanas"]
      ],
      nota: "Glicemia colhida ao mesmo tempo que o LCR. Antibiótico prévio, fase muito precoce e imunodepressão alteram os padrões — a interpretação é médica."
    } },
    { t: "Apresentação", itens: [
      "Meningite: febre, cefaleia, rigidez da nuca, fotofobia, vómitos, confusão. A tríade completa falta muitas vezes; idosos e imunodeprimidos podem ter só confusão ou febre.",
      "Meningococo: petéquias ou púrpura que não desaparecem à pressão; pode evoluir em horas para choque (sépsis meningocócica), mesmo sem meningite.",
      "Encefalite: alteração do comportamento, confusão, alterações da memória ou da linguagem, crises, défice focal, sonolência. Na herpética predomina o lobo temporal (afasia, alucinações olfativas, alterações do comportamento).",
      "Tuberculosa: semanas de febre baixa, cefaleia, emagrecimento e confusão progressiva; parésias de nervos cranianos, hiponatremia, hidrocefalia.",
      "Fúngica (sobretudo criptocócica, no imunodeprimido): cefaleia arrastada com pressão do LCR muito alta — ver «Infeções do SNC no imunodeprimido (VIH, LMP) e neurossífilis»."
    ] },
    { t: "Diagnóstico e exames", itens: [
      "Hemoculturas antes do antibiótico, sem o atrasar; hemograma, PCR, função renal, coagulação, glicemia; lactato se suspeita de sépsis.",
      "Punção lombar: pressão de abertura, citoquímico, Gram e cultura, PCR para bactérias e vírus (herpes simples, varicela-zóster, enterovírus); micobactérias e criptococo quando indicado.",
      "TC antes da punção só se houver défice focal (excluindo parésia isolada de nervos cranianos), crise epilética de novo, Glasgow abaixo de 10 ou imunodepressão grave.",
      "Punção adiada se coagulopatia, anticoagulação, plaquetas baixas, instabilidade hemodinâmica ou respiratória, ou infeção no local — o tratamento começa à mesma.",
      "Encefalite: RM e EEG. Uma PCR para herpes negativa nos primeiros dias não exclui a doença; a punção pode ser repetida e o aciclovir mantém-se até decisão médica.",
      "Os painéis de PCR múltipla não substituem as PCR específicas para herpes simples e varicela-zóster."
    ] },
    { t: "Tratamento (linhas gerais)", aviso: "Fármacos, doses e duração: sempre conforme prescrição e protocolo de antibioterapia do hospital.", itens: [
      "Meningite bacteriana empírica no adulto: cefalosporina de 3.ª geração; ampicilina associada (cobertura de Listeria) se idade acima de 50 anos, imunodepressão, alcoolismo, diabetes ou gravidez; vancomicina conforme o risco local de pneumococo resistente. Ajusta-se ao resultado do LCR.",
      "Dexametasona: começa antes ou com o antibiótico; mantém-se sobretudo na pneumocócica; o médico decide suspender se o agente ou o diagnóstico forem outros. Não se inicia por rotina muitas horas depois do antibiótico.",
      "Encefalite herpética: aciclovir EV durante 14–21 dias; nefrotoxicidade — hidratação e função renal. Corticoides sem indicação por rotina.",
      "Meningite por enterovírus: tratamento de suporte; evolução habitualmente benigna.",
      "Tuberculosa: associação de antituberculosos durante meses, com corticoide adjuvante conforme indicação. Criptocócica: anfotericina B lipossómica com flucitosina e punções evacuadoras se a pressão for alta.",
      "Sépsis ou choque: abordagem segundo a Via Verde Sépsis (fluidos, vasopressores, UCI).",
      "Complicações: hipertensão intracraniana, hidrocefalia, crises, hiponatremia, AVC, trombose venosa, surdez (avaliação auditiva precoce, sobretudo após pneumocócica). Agravamento semanas após encefalite herpética pode ser encefalite anti-NMDA — ver «Encefalites autoimunes»."
    ] },
    { t: "Isolamento, declaração e quimioprofilaxia", itens: [
      "Isolamento de gotículas na suspeita de meningite bacteriana até 24 h de antibioterapia eficaz; máscara e proteção ocular nos procedimentos com risco de salpicos de secreções. A pneumocócica não exige isolamento; a tuberculosa só exige isolamento por via aérea se houver tuberculose pulmonar.",
      "Doença meningocócica: quimioprofilaxia dos contactos próximos (coabitantes e contacto prolongado nos 7 dias antes dos sintomas), decidida pela Autoridade de Saúde, o mais cedo possível — idealmente nas 24 h após o diagnóstico.",
      "Profissionais de saúde: só se houve exposição direta da boca ou do nariz a secreções respiratórias sem máscara (ex.: intubação, aspiração, ventilação boca a boca). Os cuidados habituais não são indicação. Comunicar à Saúde Ocupacional.",
      "Opções habituais: ciprofloxacina em toma única, rifampicina ou ceftriaxona IM — conforme Autoridade de Saúde ou Saúde Ocupacional.",
      "Doente tratado com ceftriaxona não precisa de erradicação do meningococo; se tratado com outro antibiótico (ex.: penicilina), precisa de quimioprofilaxia antes da alta."
    ] },
    { t: "Cuidados de enfermagem", itens: [
      "Suspeita de doença meningocócica (febre, petéquias ou púrpura, rigidez da nuca): quarto individual e precauções de gotículas até 24 h de antibiótico eficaz. Na aspiração ou intubação, usar máscara FFP2 e proteção ocular. Sinalizar na porta e no processo e avisar a equipa de prevenção e controlo de infeção.",
      "O antibiótico não pode esperar. Colher as hemoculturas e as análises prescritas antes da 1.ª dose, mas nunca atrasar o antibiótico por causa de colheitas, TC ou punção lombar. Se houver corticoide prescrito, confirmar com o médico se deve ser dado antes ou junto com a 1.ª dose. Registar a hora da prescrição e a da administração.",
      "Punção lombar: preparar o doente e o material e numerar os tubos. Enviar o LCR logo ao laboratório. Depois, vigiar o local e a cefaleia (ver «Exames complementares: LCR, EEG e EMG»).",
      "Aciclovir EV: perfundir no tempo indicado pelo protocolo (nunca em bólus) e manter boa hidratação. Vigiar a diurese, a creatinina e o local da perfusão, porque o fármaco é irritante. Confusão nova num doente com função renal a piorar pode ser toxicidade: comunicar.",
      "Vigilância neurológica com os mesmos itens em todos os turnos (ver tabela). Na encefalite, registar também o comportamento, a memória e a linguagem.",
      "Risco de crises: cama baixa, aspiração e oxigénio prontos à cabeceira, acesso venoso permeável. Registar cada crise (ver «Epilepsia»).",
      "Sépsis: sinais vitais, perfusão periférica e diurese. Marcar com caneta os limites das petéquias, com a hora, para ver se alastram.",
      "Balanço hídrico e peso: risco de hiponatremia (ver «Alterações do sódio em Neurologia»). Antes de qualquer via oral, se houver sonolência ou confusão, fazer o rastreio da deglutição (GUSS).",
      "Conforto: pouca luz e pouco ruído. Avaliar a dor e a febre e tratar conforme prescrição. Agitação: procurar a causa; contenção física só como último recurso.",
      "Saúde pública: confirmar que o médico fez a declaração no SINAVE. Juntar a lista de contactos próximos (coabitantes, visitas). Um profissional exposto a secreções sem EPI (aspiração, intubação, reanimação boca a boca) deve avisar a Saúde Ocupacional no próprio dia."
    ] },
    { t: "Vigilância: o que, quando e quando comunicar", tabela: {
      cab: ["Vigiar","Frequência","Comunicar se"],
      lin: [
        ["Glasgow (O, V, M), pupilas, força, fala","De hora a hora nas primeiras horas, ou conforme prescrição; espaçar quando estável","Descida de 1 ou mais pontos na resposta motora ou de 2 ou mais no total; anisocoria; défice novo"],
        ["TA, FC, FR, SpO₂, temperatura, preenchimento capilar","De hora a hora até estabilizar","Hipotensão, taquicardia, SpO₂ a descer, preenchimento capilar acima de 3 s"],
        ["Pele (petéquias, púrpura)","Em cada avaliação","Lesões que alastram para lá da marca"],
        ["Diurese e balanço hídrico","Por turno; de hora a hora na sépsis","Diurese abaixo de 0,5 mL/kg/h"],
        ["Sódio e creatinina","Conforme prescrição","Sódio a descer; creatinina a subir"],
        ["Sinais de hipertensão intracraniana (cefaleia a agravar, vómitos, bradicardia com hipertensão)","Contínuo","Qualquer sinal"]
      ]
    } },
    { t: "Ensino ao doente e à família", itens: [
      "Explicar o isolamento, porque se usa máscara e porque se limitam as visitas nas primeiras 24 h.",
      "Contactos próximos: a Saúde Pública vai contactá-los. Tomar a profilaxia prescrita. Se surgir febre, cefaleia intensa ou manchas na pele, ir à urgência.",
      "Sequelas possíveis: surdez, fadiga, alterações da memória e do humor, crises. A avaliação da audição e a consulta de seguimento são importantes.",
      "Após encefalite: supervisionar a medicação e não conduzir até indicação médica. Pode ser preciso reabilitação cognitiva.",
      "Voltar à urgência se tiver febre, confusão, convulsão ou cefaleia intensa."
    ] },
    { t: "Sinais de alarme", alarme: true, itens: [
      "Febre com petéquias ou púrpura que não desaparecem à pressão → hemoculturas se não atrasarem, antibiótico prescrito de imediato, isolamento de gotículas → médico de imediato.",
      "Hipotensão, taquicardia, extremidades frias, preenchimento capilar acima de 3 s, oligúria ou lactato elevado → acesso venoso, fluidos conforme protocolo, ativar a Via Verde Sépsis → médico de imediato e UCI.",
      "Queda do Glasgow de 2 ou mais pontos, anisocoria, HTA com bradicardia ou respiração irregular → cabeceira a 30°, via aérea, glicemia → médico de imediato (hipertensão intracraniana, herniação).",
      "Crise epilética, ou alteração da consciência sem recuperação → proteger, cronometrar, oxigénio → médico (possível estado de mal não convulsivo; ver «Epilepsia»).",
      "Febre com confusão nova e aciclovir ainda não iniciado → confirmar a prescrição e administrar sem esperar pela punção → médico.",
      "Diurese a diminuir ou creatinina a subir sob aciclovir → hidratação conforme prescrição, balanço hídrico → médico (ajuste de dose).",
      "Profissional exposto a secreções sem máscara (suspeita meningocócica) → registar a exposição → Saúde Ocupacional no próprio dia."
    ] }
  ]
},
{
  id: "emergencias-farmacos", cap: null, parte: "p4", icone: "💊",
  titulo: "Emergências neurológicas por fármacos",
  resumo: "Quadros graves desencadeados por iniciar, aumentar, associar ou suspender fármacos: síndrome neuroléptica maligna, síndrome serotoninérgica, hiperpirexia-parkinsonismo, suspensão de baclofeno intratecal e toxicidade do lítio.",
  relacionados: ["movimento","parkinson","urgencias","coma","esclerose-multipla","mielopatias","sodio"],
  seccoes: [
    { t: "O essencial", itens: [
      "Febre com rigidez ou clónus, alteração da consciência ou instabilidade autonómica num doente com alteração recente da medicação é emergência até prova em contrário.",
      "Pergunta-chave: que fármaco foi iniciado, aumentado, associado ou suspenso nos últimos dias (incluindo tomas falhadas em jejum, adesivos, bombas)?",
      "A hipertermia é de origem central e muscular: os antipiréticos ajudam pouco; o que conta é o arrefecimento físico e tratar a causa.",
      "Complicações: rabdomiólise (CK muito elevada, urina escura), lesão renal aguda, aspiração, insuficiência respiratória, coagulação intravascular disseminada.",
      "Excluir sempre infeção do SNC, sépsis, golpe de calor, tireotoxicose e abstinência de álcool ou benzodiazepinas."
    ] },
    { t: "Quadro comparativo", tabela: {
      cab: ["Síndrome","Desencadeante","Início","O que distingue"],
      lin: [
        ["Síndrome neuroléptica maligna","Bloqueadores da dopamina: antipsicóticos, metoclopramida, sulpirida; início, aumento de dose, injetáveis","Dias a semanas; evolução lenta","Rigidez generalizada «em cano de chumbo», bradicinesia, reflexos normais ou diminuídos, mutismo; CK muito elevada"],
        ["Síndrome serotoninérgica","Associação ou aumento de serotoninérgicos: antidepressivos, tramadol, fentanilo, linezolida, IMAO (incluindo rasagilina e safinamida)","Horas (a maioria nas primeiras 24 h)","Clónus (espontâneo, induzível, ocular), hiperreflexia e tremor, mais nos membros inferiores; agitação, midríase, diarreia, sudação"],
        ["Hiperpirexia-parkinsonismo","Suspensão ou redução brusca de dopaminérgicos no Parkinson (jejum, disfagia, medicação em falta, avaria de bomba)","Horas a dias","Quadro semelhante à neuroléptica maligna, num doente com Parkinson sem a sua medicação"],
        ["Suspensão de baclofeno intratecal","Reservatório vazio, avaria da bomba, cateter desconectado ou partido, erro de programação","Horas a 1–3 dias","Espasticidade de rebate, prurido sem exantema, agitação, taquicardia, febre; pode evoluir para rabdomiólise e falência multiorgânica"],
        ["Síndrome anticolinérgica (diferencial)","Anticolinérgicos, tricíclicos, anti-histamínicos","Horas","Pele quente e seca, mucosas secas, midríase, retenção urinária, íleo, delirium; sem rigidez nem clónus"]
      ],
      nota: "A hipertermia maligna (rigidez e hipertermia durante anestesia com halogenados ou succinilcolina) é outro diferencial, próprio do bloco operatório."
    } },
    { t: "Toxicidade do lítio", itens: [
      "Sinais: tremor grosseiro (diferente do tremor fino habitual), disartria, ataxia, confusão, mioclonias, crises, coma; muitas vezes com vómitos e diarreia.",
      "Precipitantes: desidratação, dieta pobre em sal, insuficiência renal, AINE, IECA ou ARA, diuréticos (sobretudo tiazídicos).",
      "Na intoxicação crónica pode haver toxicidade com litemia «terapêutica»; a litemia colhe-se habitualmente 12 h após a última toma — registar a hora.",
      "Tratamento: suspender, hidratação conforme prescrição, corrigir a causa; hemodiálise nos casos graves (decisão com Nefrologia).",
      "O lítio crónico pode causar diabetes insípida nefrogénica — ver «Alterações do sódio em Neurologia»."
    ] },
    { t: "Diagnóstico e exames", itens: [
      "Diagnóstico clínico: revisão completa da medicação (incluindo antieméticos e analgésicos dados no internamento) e exame neurológico (rigidez ou clónus, reflexos, pupilas).",
      "Análises: CK, função renal, ionograma, função hepática, hemograma, coagulação, gasimetria e lactato, mioglobinúria; litemia se aplicável; hemoculturas e, se indicado, punção lombar.",
      "Baclofeno intratecal: interrogação da bomba pela equipa responsável (volume, alarmes, programação) e estudo do cateter."
    ] },
    { t: "Tratamento (linhas gerais)", itens: [
      "Comum a todos: suspender o fármaco causador (ou repor o suspenso), arrefecimento físico, hidratação EV, monitorização; UCI se hipertermia grave, instabilidade ou compromisso respiratório.",
      "Neuroléptica maligna: benzodiazepinas; nos casos graves, dantroleno, bromocriptina ou amantadina; eletroconvulsivoterapia nos refratários. Reintrodução de antipsicótico só por decisão médica, em regra semanas depois.",
      "Serotoninérgica: suspender serotoninérgicos, benzodiazepinas para a agitação, ciproheptadina oral ou por SNG nos casos moderados; a maioria resolve em 24 h. Evitar contenção física (agrava a hipertermia e a acidose).",
      "Hiperpirexia-parkinsonismo: repor a dopaminérgica o mais cedo possível (SNG, adesivo de rotigotina ou apomorfina, conforme prescrição).",
      "Suspensão de baclofeno intratecal: restabelecer a via intratecal com urgência (equipa da bomba ou Neurocirurgia); baclofeno oral e benzodiazepinas servem só de ponte.",
      "Sobredosagem de baclofeno intratecal (quadro oposto): sonolência, hipotonia, bradipneia, coma — suporte ventilatório; a atuação na bomba é decisão da equipa."
    ] },
    { t: "Cuidados de enfermagem", itens: [
      "Pensar nesta hipótese sempre que surjam febre, rigidez ou mioclonias, alteração do estado mental e TA ou FC instáveis num doente que toma antipsicóticos, metoclopramida, antidepressivos, tramadol, linezolida, antiparkinsónicos ou baclofeno intratecal. Comunicar de imediato.",
      "Rever com o médico toda a medicação: doses alteradas, fármacos suspensos há pouco e produtos de venda livre (ex.: hipericão). Suspender ou manter o fármaco suspeito só por decisão médica. Registar a hora da última dose.",
      "Antiparkinsónicos: dar à hora certa, até 30 minutos da hora habitual do doente, e registar. Nunca suspender a levodopa por iniciativa própria. Jejum ou disfagia: avisar o médico antes, para prescrever uma alternativa (SNG, transdérmico). Ver «Doença de Parkinson».",
      "Arrefecimento físico: despir, compressas frias, ar a circular, manta de arrefecimento e soros frios se prescritos. Os antipiréticos ajudam pouco quando o calor vem da rigidez muscular. Temperatura frequente ou contínua.",
      "Hidratação EV conforme prescrição; balanço hídrico e diurese de hora a hora. Urina castanha-escura (cor de chá) ou tira-teste com sangue sem eritrócitos sugere mioglobinúria. Colher CK, potássio e função renal conforme prescrição.",
      "Via aérea: rigidez e sonolência aumentam o risco de aspiração. Nada por boca até ao rastreio da deglutição (GUSS); cabeceira a 30°, aspiração disponível.",
      "Agitação: medicação conforme prescrição; evitar a contenção física, porque aumenta a temperatura e a lesão muscular. Prevenir úlceras por pressão (Braden).",
      "Baclofeno intratecal: identificar o portador (cartão da bomba) e registar o modelo, a data do último enchimento e a data do próximo. Alarme da bomba ou enchimento em atraso: contactar no mesmo turno a equipa que gere a bomba. O baclofeno oral pode não chegar para evitar a abstinência.",
      "Abstinência de baclofeno: começa com espasticidade de rebate, prurido, parestesias e hipotensão, e pode evoluir para febre, rigidez e confusão. Sobredosagem: sonolência, hipotonia, FR baixa. Comunicar de imediato.",
      "Registar a cronologia (fármacos, doses, início dos sintomas). Notificar a reação adversa no Portal RAM do INFARMED."
    ] },
    { t: "Vigilância: o que, quando e quando comunicar", tabela: {
      cab: ["Vigiar","Frequência","Comunicar se"],
      lin: [
        ["Temperatura","De hora a hora ou contínua","38 °C ou mais, ou a subir apesar do arrefecimento"],
        ["TA, FC, FR, SpO₂ (monitor)","De hora a hora","TA lábil, taquicardia, arritmia, SpO₂ a descer"],
        ["Consciência, rigidez, mioclonias, clónus, sudação","Cada 1–2 h","Agravamento"],
        ["Diurese e cor da urina","De hora a hora","Abaixo de 0,5 mL/kg/h ou urina escura"],
        ["CK, potássio, creatinina","Conforme prescrição","Valores a subir"],
        ["Hora de cada dose de levodopa","Em cada toma","Dose atrasada ou omitida"]
      ]
    } },
    { t: "Ensino ao doente e à família", itens: [
      "Dizer o nome do fármaco que causou a reação e pedir que fique registado. Mostrar esta informação em qualquer consulta ou farmácia.",
      "Parkinson: nunca parar nem reduzir a levodopa por conta própria. Trazer a medicação e o horário para o hospital e avisar a equipa sempre que houver jejum.",
      "Antes de juntar antidepressivos, tramadol, triptanos, xaropes ou hipericão, perguntar ao médico ou ao farmacêutico.",
      "Bomba de baclofeno: cumprir as datas de enchimento e conhecer o som do alarme. Andar com o cartão. Se a espasticidade aumentar, houver prurido ou febre: urgência.",
      "Calor e desidratação aumentam o risco: beber água e evitar exposição ao calor."
    ] },
    { t: "Sinais de alarme", alarme: true, itens: [
      "Temperatura acima de 38 °C com rigidez ou clónus e alteração da consciência → não administrar nova dose do fármaco suspeito sem confirmação, arrefecimento físico, colher CK e análises → médico de imediato.",
      "Temperatura de 40 °C ou mais, SpO2 a descer, rigidez que compromete a respiração ou instabilidade hemodinâmica → oxigénio, arrefecimento ativo, acesso venoso → médico de imediato e UCI.",
      "Urina escura ou diurese a diminuir → balanço hídrico horário → médico (rabdomiólise, lesão renal).",
      "Doente com Parkinson que falhou uma ou mais tomas (jejum, disfagia, SNG obstruída) → não esperar pelo turno seguinte → médico para via alternativa.",
      "Alarme da bomba de baclofeno, data de enchimento ultrapassada, ou espasticidade ou prurido de novo → não manipular a bomba → médico e equipa da bomba de imediato.",
      "Doente sob lítio com vómitos, diarreia, tremor grosseiro, ataxia ou confusão → confirmar com o médico antes da toma seguinte, litemia → médico."
    ] }
  ]
},
{
  id: "sodio", cap: null, parte: "p4", icone: "🧂",
  titulo: "Alterações do sódio em Neurologia",
  resumo: "Hiponatremia e hipernatremia são frequentes na HSA, TCE, meningite, tumores e após neurocirurgia, e causam confusão, crises e coma. Distinguir SIADH, perda cerebral de sal e diabetes insípida muda o tratamento; corrigir devagar evita a desmielinização osmótica.",
  relacionados: ["avc-hemorragico","tce","hic","tumores","neurossarcoidose","meningites-encefalites","emergencias-farmacos","epilepsia-az"],
  seccoes: [
    { t: "O essencial", itens: [
      "Hiponatremia: sódio abaixo de 135 mmol/L (profunda abaixo de 125). Aguda (menos de 48 h): maior risco de edema cerebral. Crónica (mais de 48 h ou duração desconhecida): maior risco de desmielinização se corrigida depressa.",
      "Sintomas graves (vómitos, sonolência, crises, coma) são emergência, qualquer que seja o valor do sódio.",
      "Correção segura da hiponatremia crónica: subida máxima de 10 mmol/L nas primeiras 24 h e de 8 mmol/L em cada 24 h seguintes. Nos doentes de alto risco (sódio de 105 ou menos, alcoolismo, desnutrição, hipocaliemia, doença hepática) o médico pode fixar um limite mais baixo.",
      "A volemia decide o tratamento: a SIADH trata-se com restrição de líquidos; a perda cerebral de sal com sal e volume. Restringir líquidos na perda de sal ou na HSA agrava a isquemia.",
      "Fármacos frequentes: carbamazepina, oxcarbazepina, eslicarbazepina, antidepressivos, tiazidas, desmopressina, ciclofosfamida."
    ] },
    { t: "SIADH vs perda cerebral de sal vs diabetes insípida", tabela: {
      cab: ["","SIADH","Perda cerebral de sal","Diabetes insípida central"],
      lin: [
        ["Sódio no sangue","Baixo","Baixo","Alto (se não beber o suficiente)"],
        ["Volemia","Normal","Baixa: hipotensão ortostática, taquicardia, perda de peso, balanço negativo","Normal ou baixa"],
        ["Diurese","Normal ou baixa","Aumentada","Muito aumentada, urina muito clara"],
        ["Urina","Concentrada; sódio urinário elevado","Sódio urinário muito elevado","Diluída (densidade abaixo de 1,005)"],
        ["Contextos","Meningite, TCE, tumores, pós-operatório, dor, náuseas, fármacos","HSA, TCE, meningite tuberculosa, neurocirurgia","Cirurgia hipofisária, TCE grave, neurossarcoidose, tumores selares, morte cerebral"],
        ["Tratamento","Restrição de líquidos (nunca na HSA); outras opções por decisão médica","Repor volume e sódio (soro fisiológico ou hipertónico); fludrocortisona","Desmopressina; água livre se acordado; repor perdas"]
      ],
      nota: "Distinguir SIADH de perda de sal depende sobretudo da volemia — peso diário, balanço hídrico, TA e FC (incluindo ortostática) são decisivos. A diabetes insípida central designa-se hoje também «deficiência de vasopressina (AVP-D)»; a causada pelo lítio é nefrogénica («resistência à AVP»)."
    } },
    { t: "Apresentação", itens: [
      "Hiponatremia: náuseas, cefaleia, confusão, sonolência, instabilidade da marcha e quedas, crises, coma — pode simular agravamento da doença de base.",
      "Hipernatremia: sede (ausente no doente afásico, com demência ou em coma), sonolência, irritabilidade, crises; frequente no doente que não consegue beber ou sob osmoterapia.",
      "Após cirurgia hipofisária a diabetes insípida pode ser transitória ou trifásica (poliúria, depois fase de SIADH, depois poliúria de novo)."
    ] },
    { t: "Diagnóstico e exames", itens: [
      "Sódio, potássio, glicose, ureia, creatinina e osmolalidade no sangue; osmolalidade e sódio numa urina colhida, se possível, antes de soros ou diuréticos.",
      "Antes de concluir SIADH, o médico exclui pseudo-hiponatremia (hiperglicemia), hipotiroidismo e insuficiência suprarrenal.",
      "Durante a correção, a frequência das análises é definida pelo médico (na hiponatremia grave, em regra pelo menos de 4 em 4 h no início).",
      "Desmielinização osmótica: 2 a 6 dias após correção rápida — disartria, disfagia, tetraparesia, alterações do comportamento, até síndrome de encarceramento; a RM inicial pode ser normal."
    ] },
    { t: "Tratamento (linhas gerais)", itens: [
      "Sintomas graves: soro hipertónico EV em bólus conforme protocolo, com sódio após cada bólus; o objetivo inicial é subir cerca de 5 mmol/L, não normalizar.",
      "Sem sintomas graves: tratar a causa, rever fármacos, corrigir o potássio (a reposição de potássio também faz subir o sódio) e tratamento dirigido ao mecanismo.",
      "HSA: não restringir líquidos; manter euvolemia; soro hipertónico ou fludrocortisona conforme prescrição.",
      "Correção excessiva: o médico pode prescrever água livre ou glicose a 5% e desmopressina para voltar a baixar o sódio.",
      "Diabetes insípida: desmopressina conforme prescrição — risco de hiponatremia se o doente beber em excesso ou receber muitos soros.",
      "Hipernatremia crónica: correção gradual conforme prescrição; descidas rápidas podem causar edema cerebral."
    ] },
    { t: "Cuidados de enfermagem", itens: [
      "Balanço hídrico rigoroso. Entradas: via oral, soros, diluições de fármacos, alimentação entérica e lavagens. Saídas: diurese, vómitos, drenagens e perdas por febre. Fechar o balanço em cada turno e às 24 h.",
      "Peso diário: mesma hora, mesma balança, mesma roupa, depois de urinar.",
      "Restrição hídrica: dividir o volume prescrito pelos turnos e contar todos os líquidos (sopa, gelatina, gelo). Retirar o jarro e afixar uma indicação à cabeceira. Para a sede, cuidados à boca frequentes.",
      "Antes de restringir líquidos, confirmar a prescrição com o médico, sobretudo na hemorragia subaracnoideia. A perda de sal de origem cerebral trata-se com soro e não com restrição.",
      "Cloreto de sódio hipertónico: medicação de alto risco. Dupla verificação, bomba infusora e rótulo bem visível; via conforme protocolo; vigiar o local. Nunca acelerar a perfusão para «recuperar» tempo.",
      "Ionogramas às horas prescritas: registar a hora exata da colheita, colher no braço sem soro e comunicar logo o resultado. Usar a mesma via de colheita, para os valores serem comparáveis.",
      "Hiponatremia: vigiar náuseas, vómitos, cefaleia, confusão, sonolência e crises. Precauções de quedas (Morse) e de crises.",
      "Correção demasiado rápida: um aumento súbito da diurese, com urina clara, costuma vir antes de uma subida rápida do sódio — comunicar logo. Limite habitual: até 10 mmol/L nas primeiras 24 h e até 8 mmol/L em cada 24 h seguintes, ou o limite que o médico definir. Nos 2–6 dias seguintes, vigiar disartria, disfagia, fraqueza nos 4 membros ou sonolência (desmielinização osmótica).",
      "Diabetes insípida: diurese de hora a hora e densidade urinária. O doente acordado deve ter água sempre ao alcance; o doente confuso, sedado ou com disfagia não consegue beber — risco de hipernatremia grave. Desmopressina à hora prescrita.",
      "Assinalar ao médico os fármacos que alteram o sódio: diuréticos, carbamazepina, oxcarbazepina, antidepressivos, desmopressina, manitol."
    ] },
    { t: "Vigilância: o que, quando e quando comunicar", tabela: {
      cab: ["Vigiar","Frequência","Comunicar se"],
      lin: [
        ["Sódio sérico","Conforme prescrição (mais frequente em correção ativa)","Subida acima do limite prescrito; descida; valor crítico"],
        ["Diurese","De hora a hora em correção ativa ou na diabetes insípida","Aumento súbito; acima de 200–250 mL/h em 2 h seguidas, ou valor definido pelo médico"],
        ["Densidade urinária","Sempre que a diurese aumentar; por turno","1,005 ou menos com diurese elevada"],
        ["Peso","Diário","Variação de 1 kg ou mais em 24 h"],
        ["Estado neurológico","Cada 2–4 h em correção ativa; depois por turno","Confusão, crise; disartria ou disfagia nova dias após a correção"],
        ["TA, FC (deitado e sentado)","Por turno","Hipotensão ortostática, taquicardia"]
      ]
    } },
    { t: "Ensino ao doente e à família", itens: [
      "Explicar a restrição hídrica e o que conta como líquido. Pedir à família que não traga bebidas.",
      "Em casa: cumprir a quantidade de líquidos indicada e fazer as análises de controlo marcadas. Não iniciar diuréticos ou antidepressivos sem avisar o médico.",
      "Desmopressina: beber só quando tem sede. Se tiver cefaleia, náuseas, aumento de peso ou urinar pouco, contactar a equipa.",
      "Procurar ajuda se surgirem confusão, sonolência, vómitos, quedas ou convulsão."
    ] },
    { t: "Sinais de alarme", alarme: true, itens: [
      "Vómitos, sonolência crescente, confusão nova ou crise com sódio baixo → segurança, via aérea, glicemia, acesso venoso → médico de imediato (pode precisar de soro hipertónico).",
      "Sódio a atingir o limite prescrito (em regra 10 mmol/L nas primeiras 24 h ou 8 mmol/L nas 24 h seguintes) → não continuar o soro hipertónico sem confirmação → médico de imediato.",
      "Diurese aquosa súbita (acima de 100 mL/h, urina muito clara) durante a correção de hiponatremia → pedir sódio urgente → médico (risco de correção excessiva).",
      "Diurese acima de 250 mL/h durante 2 h seguidas (ou o limite do protocolo) após cirurgia hipofisária ou TCE → densidade urinária e sódio → médico (diabetes insípida).",
      "Hipotensão ortostática, taquicardia e balanço negativo num doente com HSA e sódio a descer → não restringir líquidos → médico.",
      "Disartria, disfagia ou tetraparesia novas dias após a correção do sódio → nada por boca até avaliar a deglutição → médico (desmielinização osmótica)."
    ] }
  ]
},
{
  id: "funcionais", cap: null, parte: "p4", icone: "🧩",
  titulo: "Perturbação neurológica funcional e crises funcionais/dissociativas",
  resumo: "Sintomas neurológicos reais e incapacitantes (fraqueza, alterações da marcha, tremor, crises) por alteração do funcionamento do sistema nervoso, sem lesão estrutural. O diagnóstico faz-se por sinais positivos e explica-se ao doente com clareza e sem julgamento.",
  relacionados: ["movimento","epilepsia-az","epilepsia","exames","dor"],
  seccoes: [
    { t: "O essencial", itens: [
      "Causa muito frequente de consulta e internamento em Neurologia; não é simulação nem «fingimento».",
      "Fatores frequentes: dor, lesão física, infeção ou enxaqueca a desencadear; stress e trauma podem existir, mas não são obrigatórios para o diagnóstico.",
      "Diagnóstico positivo, com sinais clínicos característicos — não é «diagnóstico de exclusão» nem sinónimo de «exames normais».",
      "Pode coexistir com doença estrutural: uma parte dos doentes com crises funcionais tem também epilepsia.",
      "Terminologia proposta pela ILAE: «crises funcionais/dissociativas» (antes «crises não epiléticas psicogénicas»); evitar «pseudocrises»."
    ] },
    { t: "Crise epilética vs crise funcional/dissociativa", tabela: {
      cab: ["","Mais típico de crise epilética","Mais típico de crise funcional/dissociativa"],
      lin: [
        ["Olhos","Abertos","Fechados, com resistência à abertura"],
        ["Duração","Curta (em regra menos de 2–3 min)","Prolongada, flutuante, com pausas e recomeço"],
        ["Movimentos","Síncronos, estereotipados; fase tónica e depois clónica","Assíncronos, cabeça de um lado para o outro, movimentos da bacia, intensidade variável"],
        ["Contexto","Pode surgir durante o sono","Em vigília, muitas vezes com testemunhas"],
        ["Durante e depois","Cianose, respiração ruidosa e confusão pós-crítica","Choro ou fala durante o episódio, recuperação rápida, memória do episódio"],
        ["Lesões","Mordedura lateral da língua, lesões por queda","Possíveis, mas menos frequentes"]
      ],
      nota: "Nenhum sinal isolado é definitivo: crises do lobo frontal podem ter movimentos bizarros e da bacia. Um vídeo do episódio (com consentimento e segundo o protocolo) é muito útil."
    } },
    { t: "Apresentação: sinais positivos", itens: [
      "Sinal de Hoover: a extensão da anca «fraca» recupera força quando o doente flete a anca contrária contra resistência.",
      "Sinal dos abdutores da anca: a abdução fraca normaliza quando se pede a abdução do lado oposto.",
      "Fraqueza que cede de repente, queda do braço sem pronação, marcha arrastada com o pé em rotação, marcha lenta «como sobre gelo».",
      "Tremor funcional: muda de frequência ou para quando o doente acompanha um ritmo com a outra mão; diminui com a distração.",
      "Outros: alterações visuais, sensitivas, da fala ou da deglutição, tontura postural-percetual persistente, queixas cognitivas."
    ] },
    { t: "Diagnóstico e exames", itens: [
      "Exame neurológico com sinais positivos; os exames servem para excluir comorbilidade, não para «provar» o diagnóstico.",
      "Crises: o padrão de referência é o vídeo-EEG com registo de um episódio típico sem atividade epilética antes, durante e depois.",
      "Um EEG normal entre crises não exclui epilepsia; a prolactina após a crise tem utilidade limitada.",
      "Rever antiepiléticos sem indicação (muitos doentes chegam medicados como epilepsia)."
    ] },
    { t: "Tratamento e comunicação do diagnóstico", itens: [
      "Explicar o que o doente tem (não só o que não tem): situação comum, real, potencialmente reversível e tratável; usar metáforas (ex.: «o computador está bom, o programa está a falhar»).",
      "Evitar «é psicológico», «não tem nada», «inventado», «pseudo»; dar informação escrita e fontes fidedignas.",
      "Fisioterapia especializada, terapia ocupacional, terapia da fala e psicoterapia (ex.: cognitivo-comportamental), conforme o sintoma.",
      "Crises funcionais: plano de atuação escrito para evitar benzodiazepinas, intubações e idas repetidas à urgência; retirar antiepiléticos só por decisão médica.",
      "Tratar comorbilidades: dor, ansiedade, depressão, sono, fadiga."
    ] },
    { t: "Cuidados de enfermagem", itens: [
      "Os sintomas são reais e involuntários: não são fingimento. Tratar com o mesmo respeito e rigor de qualquer outro doente, também nas passagens de turno.",
      "Não iniciar os ensinos sobre o diagnóstico antes de o médico o ter explicado ao doente. Depois, usar os mesmos termos da equipa: «perturbação neurológica funcional», «crises funcionais» ou «crises dissociativas». Evitar «pseudocrises», «histeria», «não é nada» e «é psicológico».",
      "Durante a crise: ficar com o doente e afastar objetos. Não conter os movimentos nem pôr nada na boca. Decúbito lateral quando possível. Cronometrar a crise. Falar com calma, porque o doente pode estar a ouvir.",
      "Não fazer estímulos dolorosos, não abrir os olhos à força e não fazer manobras de «prova». Evitar muitas pessoas à volta.",
      "Diagnóstico não confirmado, ou crise diferente das habituais: atuar como numa crise epilética e chamar o médico (ver «Epilepsia»). Alguns doentes têm os dois tipos de crise.",
      "Diagnóstico confirmado: seguir o plano individual escrito. Não dar benzodiazepinas nem chamar a emergência por rotina.",
      "Registo descritivo de cada episódio, sem interpretar: hora de início e de fim, o que o doente fazia, aviso prévio, olhos abertos ou fechados, tipo de movimentos (síncronos ou não, se variam), resposta à voz, choro, lesões, incontinência, SpO₂, como recuperou e se se lembra do episódio. Perguntar à família se é igual às crises habituais.",
      "Vídeo-EEG: marcar o evento, manter o doente no campo da câmara e não tapar a câmara nem retirar os elétrodos. Durante a redução de antiepiléticos, precauções de crises e de quedas.",
      "Défices motores: incentivar a autonomia e o levante precoce, em articulação com a reabilitação. Não dar cadeira de rodas nem canadianas sem indicação. Manter a avaliação do risco de queda (Morse) e de úlceras por pressão (Braden).",
      "Estar atento à ansiedade, ao humor, ao sono, à dor e a ideias de suicídio; comunicar e referenciar conforme o plano. Registos objetivos, sem juízos de valor."
    ] },
    { t: "Ensino ao doente e à família", itens: [
      "Reforçar a mensagem do médico: os sintomas são reais, resultam de uma alteração no funcionamento do sistema nervoso e podem melhorar.",
      "Família, durante a crise: manter a calma, proteger de lesões, não conter, não pôr nada na boca, esperar com o doente. Ligar 112 segundo o plano escrito da equipa.",
      "Treinar com o doente a forma de reconhecer os sinais de aviso de uma crise e as técnicas de distração e de respiração ensinadas pela psicologia ou pela fisioterapia.",
      "Retomar as atividades de forma gradual e evitar o repouso prolongado.",
      "Cumprir o seguimento: psicoterapia, fisioterapia e consulta. Conduzir só com indicação médica."
    ] },
    { t: "Sinais de alarme", alarme: true, itens: [
      "Episódio sem diagnóstico confirmado ou diferente do habitual → atuar como crise epilética (segurança, cronometrar, SpO2, glicemia) → médico.",
      "Episódio com mais de 5 min, cianose, SpO2 baixa ou sem recuperação → protocolo de estado de mal → médico de imediato (não presumir que é funcional).",
      "Défice novo, diferente do padrão conhecido (ex.: assimetria facial, disartria, alteração pupilar) → avaliação neurológica e hora de início → médico; Via Verde AVC se indicado.",
      "Ideação suicida, autoagressão ou desespero → não deixar o doente sozinho → médico e Psiquiatria de imediato.",
      "Lesão por queda durante um episódio → avaliar e registar → médico."
    ] }
  ]
},
{
  id: "disseccao-cervical", cap: null, parte: "p4", grupo: "avc-az", icone: "🩸",
  titulo: "Dissecção arterial cervical (carotídea e vertebral)",
  resumo: "Rasgadura da parede da carótida interna ou da vertebral no pescoço, causa importante de AVC no adulto jovem. Cefaleia ou cervicalgia unilateral, Horner parcial ou sinais de AVC após um traumatismo minor devem levantar a suspeita.",
  relacionados: ["avc-isquemico","avc","territorios-arteriais","trombectomia","cefaleias","imagem"],
  seccoes: [
    { t: "O essencial", itens: [
      "Uma das causas mais frequentes de AVC isquémico antes dos 50 anos.",
      "O hematoma na parede pode estreitar ou ocluir a artéria ou formar trombos que embolizam; a maioria dos AVC ocorre no primeiro mês.",
      "Espontânea ou após traumatismo minor: movimentos bruscos do pescoço, desporto, tosse ou vómitos intensos, manipulação cervical.",
      "Predisposição: displasia fibromuscular, doenças do tecido conjuntivo (ex.: Ehlers-Danlos vascular), infeção recente, enxaqueca.",
      "A dor pode preceder a isquemia em horas a semanas — é a janela para prevenir o AVC."
    ] },
    { t: "Carotídea vs vertebral", tabela: {
      cab: ["","Carótida interna","Vertebral"],
      lin: [
        ["Dor","Unilateral: pescoço anterolateral, face, olho, têmpora","Nuca e região occipital, uni ou bilateral"],
        ["Sinais locais","Horner parcial (ptose e miose, sem alteração da sudação), acufeno pulsátil, alteração do paladar, desvio da língua (XII par)","Raros"],
        ["Isquemia","Território carotídeo: hemiparesia, afasia ou negligência, amaurose transitória","Circulação posterior: vertigem, ataxia, diplopia, disartria, disfagia, síndrome de Wallenberg, enfarte cerebeloso"]
      ],
      nota: "A dissecção intracraniana (menos frequente) pode apresentar-se como hemorragia subaracnoideia."
    } },
    { t: "Diagnóstico e exames", itens: [
      "Angio-TC ou angio-RM, com RM em cortes axiais com supressão de gordura para ver o hematoma da parede.",
      "O eco-Doppler ajuda no seguimento, mas não exclui a dissecção (sobretudo vertebral ou alta).",
      "Imagem de controlo aos 3–6 meses para decidir a duração do tratamento; investigar doença do tecido conjuntivo ou displasia fibromuscular se dissecção múltipla, recorrente ou história familiar."
    ] },
    { t: "Tratamento (linhas gerais)", itens: [
      "AVC agudo: trombólise segundo os critérios habituais (a dissecção extracraniana não a contraindica); trombectomia na oclusão de grande vaso.",
      "Prevenção: antiagregação ou anticoagulação, com eficácia semelhante nos ensaios; escolha médica individual. A anticoagulação pode ser preferida em casos selecionados (ex.: oclusão), mas tem mais risco hemorrágico com o tempo.",
      "Duração habitual: 3–6 meses, revista com a imagem de controlo; depois, frequentemente, antiagregante.",
      "Anticoagulação evitada em enfartes extensos e na dissecção intracraniana com HSA (esta trata-se por via endovascular ou cirúrgica, precocemente).",
      "Cefaleia: analgesia simples conforme prescrição; evitar triptanos e ergotamínicos (vasoconstritores).",
      "Evitar manipulação cervical e desportos de contacto ou de esforço intenso até indicação médica; a recorrência é rara."
    ] },
    { t: "Cuidados de enfermagem", itens: [
      "Vigilância neurológica regular (ver tabela). O risco de AVC é maior nas primeiras semanas. Na dissecção vertebral, procurar vertigem, visão dupla, disartria, ataxia e disfagia.",
      "Síndrome de Horner (ptose ligeira e pupila mais pequena do lado afetado): registar na admissão, indicando o lado. A diferença entre as pupilas vê-se melhor na penumbra. Horner novo ou a agravar: comunicar.",
      "Dor cervical e cefaleia: avaliar com escala numérica, localização e tipo. Agravamento súbito ou cefaleia «em trovão»: comunicar de imediato.",
      "Analgesia conforme prescrição. Não juntar AINE a antitrombóticos sem confirmar com o médico.",
      "Antitrombóticos: medicação de alto risco. Dar à hora certa, com dupla verificação conforme protocolo, e fazer as colheitas de controlo prescritas. Vigiar gengivas, urina, fezes e hematomas.",
      "Se o doente fez trombólise ou trombectomia, seguir o protocolo pós-procedimento (ver «AVC isquémico» e «Trombectomia (AVC isquémico)»).",
      "TA dentro dos alvos definidos pelo médico; evitar hipotensão e picos tensionais.",
      "Rastreio da deglutição (GUSS) antes de qualquer via oral se houver défice, disartria, rouquidão ou desvio da língua: a dissecção carotídea pode afetar os nervos cranianos baixos.",
      "Nos cuidados (higiene, lavagem do cabelo, posicionamentos, transferências), evitar movimentos bruscos ou extremos do pescoço. Usar almofada que mantenha o pescoço neutro.",
      "Evitar o esforço de Valsalva: prevenir a obstipação (laxantes conforme prescrição) e tratar a tosse e os vómitos. Avaliar o risco de queda (Morse), porque o doente está sob antitrombótico."
    ] },
    { t: "Vigilância: o que, quando e quando comunicar", tabela: {
      cab: ["Vigiar","Frequência","Comunicar se"],
      lin: [
        ["Glasgow, pupilas, força, fala, campos visuais (NIHSS se for o protocolo)","Pelo menos de 4 em 4 h nas primeiras 48–72 h, ou conforme o protocolo da unidade de AVC","Qualquer défice novo ou agravamento"],
        ["Horner (ptose, miose)","Por turno","Aparece ou agrava"],
        ["Dor cervical e cefaleia","Por turno e sempre que houver queixa","Agravamento súbito; cefaleia «em trovão»"],
        ["TA","De 4 em 4 h ou conforme prescrição","Fora dos alvos prescritos"],
        ["Sinais de hemorragia","Por turno","Qualquer hemorragia"],
        ["Voz e deglutição","Antes da via oral e se houver alteração","Tosse ao engolir, voz molhada, rouquidão nova"]
      ]
    } },
    { t: "Ensino ao doente e à família", itens: [
      "Explicar que se trata de uma pequena rasgadura na parede da artéria e que, na maioria dos casos, cicatriza em meses.",
      "Cumprir o antitrombótico. Não o suspender e não tomar aspirina ou anti-inflamatórios extra sem falar com o médico.",
      "Até indicação médica: não fazer manipulações do pescoço (quiropraxia, osteopatia, massagens fortes), movimentos bruscos ou extremos da cabeça, desportos de contacto nem levantamento de pesos.",
      "Sinais de AVC (face descaída, falta de força num braço, alteração da fala): ligar 112. Procurar também ajuda se a dor do pescoço agravar subitamente, se tiver cefaleia súbita e intensa ou se a pálpebra descair de novo.",
      "Sinais de hemorragia: gengivas, urina ou fezes escuras, nódoas negras sem causa.",
      "Cumprir os exames e as consultas de controlo. Conduzir e voltar ao trabalho só com indicação médica."
    ] },
    { t: "Sinais de alarme", alarme: true, itens: [
      "Défice neurológico novo ou agravado (NIHSS a subir, afasia, hemiparesia, ataxia, diplopia) → registar a hora, glicemia → médico de imediato / Via Verde AVC.",
      "Cefaleia ou cervicalgia que agrava subitamente, vómitos, sonolência → vigilância neurológica, TA → médico de imediato (nova isquemia, hemorragia).",
      "Sob anticoagulação ou após trombólise: hemorragia, cefaleia intensa, queda do Glasgow → suspender a perfusão de anticoagulante se o protocolo o previr → médico de imediato.",
      "Disfagia, disartria ou tosse ao beber (vertebral/Wallenberg, XII par) → nada por boca, rastreio de disfagia → médico.",
      "TA fora do alvo prescrito → confirmar a medição → médico."
    ] }
  ]
},
{
  id: "paliativos", cap: null, parte: "p4", icone: "🕊️",
  titulo: "Cuidados paliativos em Neurologia",
  resumo: "Conforto, dignidade e respeito pelas decisões do doente com doença neurológica avançada (ELA, demência, Parkinson avançado, AVC grave, tumores cerebrais). Integram-se cedo, a par do tratamento da doença, e não só nos últimos dias.",
  relacionados: ["ela","dnm","demencias","alzheimer","parkinson","parkinsonismos-atipicos","avc-hemorragico","tumores","huntington","dcj","dor","disfagia"],
  seccoes: [
    { t: "O essencial", itens: [
      "Os cuidados paliativos dependem das necessidades, não do prognóstico: podem começar no diagnóstico (ex.: ELA, glioblastoma).",
      "As trajetórias neurológicas são imprevisíveis e muitos doentes perdem a capacidade de comunicar ou decidir — o planeamento antecipado deve começar cedo.",
      "Momentos para discutir objetivos e referenciar: perda da deglutição (decisão de gastrostomia), insuficiência respiratória (VNI, traqueostomia), pneumonias de repetição, quedas e perda de mobilidade, emagrecimento, demência avançada, internamentos repetidos, progressão tumoral.",
      "A equipa de Neurologia assegura a abordagem paliativa geral; a equipa intra-hospitalar de suporte em cuidados paliativos (EIHSCP) apoia sintomas difíceis, decisões complexas e a alta (equipas comunitárias, unidades de cuidados paliativos)."
    ] },
    { t: "Controlo de sintomas", tabela: {
      cab: ["Sintoma","Abordagem (linhas gerais)"],
      lin: [
        ["Dor","Analgesia por degraus, tratar espasticidade e rigidez, posicionamento; PAINAD só se o doente não conseguir autoavaliar a dor"],
        ["Dispneia","VNI se for o objetivo do doente; opioide em dose baixa; ventoinha dirigida à face, posição; oxigénio só se hipoxemia"],
        ["Sialorreia e secreções","Anticolinérgicos, toxina botulínica nas glândulas salivares, tosse assistida"],
        ["Estertor terminal","Decúbito lateral; anticolinérgico SC conforme prescrição; a aspiração profunda raramente ajuda; explicar à família"],
        ["Agitação, delirium","Procurar causa reversível (dor, globo vesical, fecaloma, fármacos); antipsicótico ou benzodiazepina conforme prescrição — cautela no Parkinson e na demência por corpos de Lewy"],
        ["Crises epiléticas","Manter o antiepilético por via alternativa quando deixa de engolir; benzodiazepina de resgate (bucal ou SC)"],
        ["Disfagia e nutrição","Alimentação de conforto planeada; gastrostomia decidida cedo na ELA; não recomendada por rotina na demência grave"],
        ["Sofrimento psicológico e existencial","Escuta, apoio psicológico e espiritual; fármacos conforme prescrição"]
      ],
      nota: "Fármacos, doses e vias conforme prescrição; a via subcutânea é a preferida quando a oral deixa de ser possível."
    } },
    { t: "Decisões e planeamento antecipado (Portugal)", itens: [
      "Diretivas antecipadas de vontade (testamento vital): documento de um adulto capaz que indica os cuidados que quer ou não receber se deixar de poder exprimir a vontade; registado no RENTEV, válido 5 anos (renovável), consultável pelos profissionais no RSE — Área do Profissional.",
      "Procurador de cuidados de saúde: pessoa nomeada pelo doente para decidir por ele quando não o puder fazer. Confirmar na admissão se existe testamento vital ou procurador e registar.",
      "Em urgência, se a consulta das diretivas atrasar cuidados e agravar o risco, a equipa não tem de esperar por elas.",
      "Decisão de não reanimar: decisão clínica, em equipa, idealmente discutida com o doente ou procurador/família; registada no processo com data, autor e medidas a não aplicar; revista se a situação mudar. Não significa suspender os restantes cuidados.",
      "Limitação ou suspensão de tratamentos (ex.: não iniciar antibióticos ou alimentação artificial, retirar VNI na ELA a pedido do doente): decisão médica partilhada e registada, com plano de controlo de sintomas.",
      "Sedação paliativa e limitação de tratamentos não se confundem com morte medicamente assistida, que tem regime legal próprio."
    ] },
    { t: "Últimos dias de vida", itens: [
      "Sinais: sonolência crescente, ingestão mínima, respiração irregular ou com pausas, estertor, extremidades frias e marmoreadas, diurese diminuída.",
      "Rever a medicação com o médico: suspender o que não dá conforto (ex.: estatinas, anti-hipertensores, anticoagulantes, análises de rotina); manter por via alternativa analgésicos, antiepiléticos e, no Parkinson, a dopaminérgica (ex.: adesivo), para evitar rigidez e dor.",
      "Prescrição antecipada «se necessário» para dor, dispneia, agitação, secreções, náuseas e crises, por via SC.",
      "Hidratação e alimentação artificiais: decisão individual partilhada; não são necessárias para o conforto e podem aumentar secreções e edemas.",
      "Desativação de cardiodesfibrilhador implantado segundo a decisão da equipa e da Cardiologia."
    ] },
    { t: "Sedação paliativa", aviso: "Só conforme protocolo institucional, com decisão médica registada e, idealmente, com a equipa de cuidados paliativos.", itens: [
      "Indicação: sofrimento refratário (sintomas intoleráveis que não se controlam com os tratamentos disponíveis) em doença avançada; pode ser intermitente ou contínua, ligeira ou profunda.",
      "Proporcionalidade: o nível de sedação é o mínimo que alivia o sofrimento; o objetivo é o conforto, não encurtar a vida.",
      "Decisão partilhada com o doente sempre que possível, ou com o procurador ou a família; registo da indicação, do objetivo e do fármaco.",
      "O midazolam é habitualmente o fármaco de primeira linha; a decisão sobre hidratação toma-se à parte.",
      "Vigilância do nível de sedação com a escala adotada pelo serviço, dos sinais de desconforto e apoio à família."
    ] },
    { t: "Cuidados de enfermagem", itens: [
      "Avaliar os sintomas em cada turno com o instrumento de avaliação de sintomas adotado pelo serviço se o doente comunica; para a dor, PAINAD só quando a autoavaliação não é possível. Registar.",
      "Dor: dar a analgesia fixa e os resgates conforme prescrição e reavaliar 30–60 min depois. Opioides são medicação de alto risco: vigiar sonolência, mioclonias e obstipação. Se a via oral não for possível, usar a via subcutânea e vigiar o local.",
      "Dispneia: sentar o doente, ar fresco ou ventoinha dirigida à face, ambiente calmo. Oxigénio só se trouxer benefício. Fármacos conforme prescrição. Na doença neuromuscular, ver «ELA e doente neuromuscular: respiração, VNI e traqueostomia».",
      "Secreções (estertores): decúbito lateral e cabeceira elevada. Anticolinérgicos prescritos, iniciados cedo. Aspiração só orofaríngea, suave e quando necessária.",
      "Agitação terminal: procurar primeiro causas reversíveis (retenção urinária, fecaloma, dor, fármacos). Manter um ambiente calmo e a presença da família. Sedação paliativa só por decisão da equipa, segundo o protocolo, com registo do nível de sedação.",
      "Obstipação: registar as dejeções todos os dias. Com opioides, laxante sempre, conforme prescrição. Sem dejeções há 3 dias: avaliar e comunicar.",
      "Boca: nos últimos dias, cuidados frequentes para humedecer a boca e proteger os lábios. Vigiar candidíase. A sensação de sede alivia-se sobretudo com estes cuidados.",
      "Conforto acima da rotina: posicionar pelo conforto, com colchão de alívio de pressão. Rever com a equipa o que já não traz benefício (sinais vitais de rotina, glicemias, análises, medicação).",
      "Comunicação: perceber o que o doente sabe e quer saber. Consultar as diretivas antecipadas de vontade (RENTEV) e identificar o procurador de cuidados de saúde. Registar de forma visível as decisões tomadas e o local onde o doente prefere estar.",
      "Pedir cedo, e não só no fim de vida, a intervenção da equipa intra-hospitalar de suporte em cuidados paliativos. Perguntar pelas necessidades espirituais e oferecer a assistência espiritual do hospital. Visitas flexíveis. Depois do óbito, acompanhar a família e sinalizar o risco de luto complicado."
    ] },
    { t: "Vigilância: o que, quando e quando comunicar", tabela: {
      cab: ["Vigiar","Frequência","Comunicar se"],
      lin: [
        ["Sintomas (instrumento do serviço; dor com PAINAD se não comunica)","Por turno e após cada resgate","Sintoma não controlado; 3 ou mais resgates em 24 h"],
        ["Respiração e secreções","Por turno","Dispneia ou estertores que não cedem às medidas"],
        ["Agitação, sono","Por turno e sempre que houver alteração","Agitação apesar das medidas"],
        ["Diurese, globo vesical, dejeções","Diário","Retenção; sem dejeções há 3 dias"],
        ["Boca, pele, local subcutâneo","Por turno","Candidíase, úlcera por pressão nova, rubor ou edema no local"],
        ["Família","Em cada turno","Exaustão, sofrimento intenso, pedido de conversa com o médico"]
      ]
    } },
    { t: "Ensino ao doente e à família", itens: [
      "Explicar o que é esperado nos últimos dias: mais sono, comer e beber menos, respiração irregular, mãos e pés frios, ruídos respiratórios que em regra não causam sofrimento.",
      "Como participar: cuidados à boca, toque, falar com o doente (a audição mantém-se), música e objetos significativos.",
      "Comer por prazer: pequenas quantidades se o doente quiser, com o risco discutido e aceite por todos.",
      "Explicar como fazer as diretivas antecipadas de vontade e nomear o procurador de cuidados de saúde (RENTEV, no centro de saúde).",
      "Apoios: Estatuto do Cuidador Informal, descanso do cuidador, equipa comunitária de paliativos e contacto para fora de horas, apoio no luto."
    ] },
    { t: "Sinais de alarme", alarme: true, itens: [
      "Dor, dispneia ou agitação não controladas após a terapêutica SOS → procurar causa reversível (globo vesical, posição, fecaloma) → médico e EIHSCP.",
      "Crise epilética prolongada ou repetida em fim de vida → proteger, benzodiazepina de resgate prescrita (bucal ou SC) → médico.",
      "Hemorragia maciça ou dispneia súbita grave → ficar com o doente, medicação de crise prescrita → médico de imediato.",
      "Paragem cardiorrespiratória sem decisão de não reanimar registada → iniciar SBV → equipa de emergência intra-hospitalar.",
      "Doente com Parkinson ou baclofeno intratecal com medicação interrompida (rigidez, febre, dor) → não esperar → médico para via alternativa (ver «Emergências neurológicas por fármacos»).",
      "Conflito sobre decisões, pedido de suspensão de tratamentos ou sofrimento intenso da família → registar → médico assistente e EIHSCP; apoio psicológico e espiritual."
    ] }
  ]
}
];

// ───────────────────────────── ESCALAS ─────────────────────────────
// Grupos da secção «Patologias específicas (A–Z)»: no menu e no índice aparecem como uma entrada que,
// ao tocar, mostra as doenças do grupo (cada uma com página própria)
const GRUPOS_AZ = [
  { id: "avc-az", titulo: "AVC", temas: ["avc", "avc-isquemico", "avc-hemorragico", "trombectomia", "territorios-arteriais", "disseccao-cervical"] },
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
      texto: "½ colher de chá de água espessada (IDDSI nível 4, extremamente espessa, tipo pudim); se correr bem, repetir até 5 vezes." },
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
},
{
  id: "painad",
  nome: "PAINAD — dor quando a autoavaliação não é possível",
  aviso: "Usar a PAINAD só quando a dor NÃO pode ser avaliada pelas escalas de autoavaliação habituais (numérica, verbal, faces) — ex.: demência avançada, afasia grave, alteração da consciência. Se o doente conseguir dizer ou apontar a intensidade, a autoavaliação prevalece.",
  descricao: "Avaliação da dor por observação. 5 itens de 0 a 2; total 0–10. Observar 2–4 minutos, de preferência também durante a mobilização. Usar sempre a mesma escala no mesmo doente e registar qual foi.",
  itens: [
    { nome: "1. Respiração (independente da vocalização)", opcoes: [[0,"Normal"],[1,"Respiração ocasionalmente difícil. Curto período de hiperventilação"],[2,"Respiração difícil e ruidosa. Período longo de hiperventilação. Respiração de Cheyne-Stokes"]] },
    { nome: "2. Vocalização negativa", opcoes: [[0,"Nenhuma"],[1,"Queixume ou gemido ocasional. Tom de voz baixo com discurso negativo ou de desaprovação"],[2,"Chamamento perturbado repetitivo. Queixume ou gemido alto. Choro"]] },
    { nome: "3. Expressão facial", opcoes: [[0,"Sorridente ou inexpressiva"],[1,"Triste. Amedrontada. Sobrancelhas franzidas"],[2,"Esgar facial"]] },
    { nome: "4. Linguagem corporal", opcoes: [[0,"Relaxada"],[1,"Tensa. Andar para cá e para lá de forma angustiada. Irrequieta"],[2,"Rígida. Punhos cerrados. Joelhos fletidos. Resistência à aproximação ou ao cuidado. Agressiva"]] },
    { nome: "5. Consolabilidade", opcoes: [[0,"Sem necessidade de consolo"],[1,"Distraído ou tranquilizado pela voz ou toque"],[2,"Impossível de consolar, distrair ou tranquilizar"]] }
  ],
  interpretar: t => t === 0 ? ["ligeiro","0 — sem sinais de dor (uma pontuação baixa não exclui dor)."]
               : t <= 3 ? ["ligeiro","1–3 — dor ligeira (orientativo)."]
               : t <= 6 ? ["moderado","4–6 — dor moderada (orientativo): tratar e reavaliar."]
               : ["grave","7–10 — dor intensa (orientativo): tratar e reavaliar; comunicar ao médico."],
  nota: "Versão portuguesa: Batalha, Duarte, Rosário, Costa, Pereira e Morgado, Revista de Enfermagem Referência, 2012 (original: Warden, Hurley e Volicer, 2003). A validação portuguesa não define pontos de corte: as faixas são orientativas — valorizar sobretudo a evolução no mesmo doente. Na doença respiratória, o item «respiração» pode dar falsos positivos. Reavaliar no pico de efeito do analgésico (cerca de 15–30 min EV, 30 min SC/IM, 60 min oral, ou conforme protocolo), cerca de 30 min após medidas não farmacológicas, antes e depois de cuidados dolorosos e pelo menos uma vez por turno."
},
{
  id: "respiratoria",
  nome: "Folha de tendência respiratória (Respiração)",
  tipo: "folha",
  descricao: "Para doentes com fraqueza neuromuscular (Guillain-Barré, miastenia, ELA). Registar cada avaliação para ver a tendência: o que importa é a descida entre avaliações, não um valor isolado. A primeira CVF registada fica como valor basal; com o peso, a app calcula a CVF em mL/kg.",
  itens: [],
  nota: "Alarme (regra 20/30/40): contagem numa só expiração < 20; CVF < 20 mL/kg ou queda > 30% em relação ao basal; PImáx menos negativa que −30 cmH₂O; PEmáx < 40 cmH₂O; ou sinais de fadiga (músculos acessórios, respiração paradoxal, ortopneia). A SpO₂ baixa é um sinal tardio. Frequência das avaliações conforme prescrição (mais apertada na fase de progressão). Contagem: inspirar fundo e contar em voz alta, cerca de 2 números por segundo, a ritmo de fala rápida, sem voltar a respirar."
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
