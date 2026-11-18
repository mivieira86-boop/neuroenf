# Registo de alterações — NeuroEnf

## Versão 8 — 18/11/2026 (ligação direta aos fármacos)
- Cada fármaco tem agora o botão **«Ver ficha no Índice Nacional Terapêutico»** (indice.eu), que abre logo a ficha da DCI,
  sem copiar nem colar. As 184 ligações foram verificadas uma a uma (182 fichas diretas; glicose e cianocobalamina abrem a pesquisa).
- O botão «Abrir no INFOMED (INFARMED)» mantém-se para a informação oficial (RCM). Não é possível colar automaticamente no INFOMED:
  os browsers impedem um site de escrever noutro, e o INFOMED não aceita a pesquisa no endereço (testado). A instrução passou a
  dizer: tocar na caixa de pesquisa, «Colar» e escolher a DCI na lista.
- App instalável: identificador no manifesto (`id`); publicada em https://mivieira86-boop.github.io/neuroenf/ com QR code.

## Versão 7 — 17/11/2026 (guia farmacológico, app instalável, assinatura)
- **Guia farmacológico** (`farmacos.js`): 184 fármacos em 43 temas, por doença e de A a Z, com classe, cuidados de enfermagem,
  alertas de segurança e etiqueta «Alto risco» (24, segundo a lista ISMP / Norma DGS 014/2015). Cada tema com terapêutica tem
  o botão «Terapêutica»; a pesquisa geral encontra fármacos.
- Ligação ao INFARMED: o INFOMED não permite ligações diretas por medicamento (pesquisa só por formulário) e o Prontuário
  Terapêutico online foi desativado. O botão «Abrir no INFOMED» abre a base de dados e copia a DCI para colar na pesquisa.
- Revisão médica do guia (21 pontos), entre eles: não usar flumazenilo após benzodiazepinas dadas no estado de mal; corticoides
  não indicados no Guillain-Barré; apomorfina contraindicada com ondansetrom; nimodipina IV sem PVC; fosfenitoína não autorizada
  em Portugal; carbapenemos e valproato; insulina e potássio concentrado acrescentados como alto risco.
- **App instalável (PWA)**: manifesto, ícones, funcionamento sem rede (`sw.js`) e aviso «Instalar» (`instalar.js`).
- **Assinatura** «© 2026 Maria Isabel Pereira» no fim de todas as páginas.

## Versão 6 — 17/11/2026 (MOGAD e neurossarcoidose)
- Nova secção «Doença associada a anticorpos anti-MOG (MOGAD)» no tema «Esclerose múltipla, neuromielite ótica e ADEM»:
  apresentações (nevrite ótica, mielite do cone, encefalite cortical), evolução, diagnóstico (critérios 2023), tratamento e enfermagem.
- Novo tema «Neurossarcoidose» em «Patologias específicas (A–Z)»: manifestações, diagnóstico (consenso 2018), tratamento,
  cuidados (diabetes insípida, desmopressina, insuficiência suprarrenal, infliximab) e sinais de alarme.
- A tabela de «Doenças autoimunes e o sistema nervoso» passa a remeter para estes conteúdos.
- Revisão médica (9 melhorias): contraindicações do infliximab; desmopressina e hiponatremia; fármacos da EM ineficazes na MOGAD;
  tratamento precoce das recaídas; biópsia provável vs definitiva; títulos baixos de anti-MOG.

## Versão 5 — 17/11/2026 (visual do HospitalCozy, doenças do movimento e doenças autoimunes)
**Visual (agentes de design e de usabilidade)**
- Identidade do HospitalCozy: letra Inter local (`fonts/`), fundo creme, verde-petróleo, ícones de linha (sem emojis), menu lateral
  com etiquetas em maiúsculas pequenas e item ativo em pílula; modo escuro automático.
- Avaliação de usabilidade (agente «usabilidade», adaptado do HospitalCozy) e correções: sinais de alarme em 1.º lugar em cada tema;
  menu por partes que abrem e fecham, sem ícones repetidos; botões diretos do tema para as escalas (ex.: AVC → NIHSS, Glasgow, mRS);
  página «Sinais de alarme» com índice e nome do tema em destaque; precauções com fármacos a âmbar (não como alarme);
  pesquisa com atalhos para as secções; acessibilidade (foco preso no menu do telemóvel, alvos de 44 px, contraste dos rádios).

**Conteúdo**
- «Doenças do movimento» alargado de 4 para 15 secções (base: página do Hospital da Luz): classificação, parkinsonismos atípicos e
  secundários, tremores, distonias (cervical, blefaroespasmo, espasmo hemifacial, distonias de tarefa), toxina botulínica, coreias,
  mioclonias, tiques e Tourette, pernas inquietas, estimulação cerebral profunda, doenças do movimento funcionais, sinais de alarme.
- Novo tema «Doenças autoimunes e o sistema nervoso» (base: página da CUF), com tabela de 15 doenças e cuidados com tratamentos
  imunológicos (corticoides, imunoglobulina, plasmaférese, anticorpos monoclonais, inibidores do complemento, imunossupressores).
- Revisão médica dos dois temas (16 correções), entre elas: diatermia absolutamente contraindicada com estimulação cerebral profunda;
  vacina do meningococo ≥ 2 semanas antes dos inibidores do complemento (antibiótico só como ponte); metotrexato 1 vez por semana;
  IECA e plasmaférese; sinais tardios após imunoglobulina; distonia aguda — antídoto e não repetir o fármaco; mioclonias subtis e
  estado de mal não convulsivo.
- Grafia: «plasmaférese» e «assética» uniformizadas.

## Versão 4 — 17/11/2026 (mais 4 patologias)
- Novos temas em «Patologias específicas (A–Z)»: **Atrofia muscular espinhal (AME) no adulto**, **Botulismo**,
  **Encefalopatia hepática** e **Vasculites do SNC** (22 patologias; 49 temas no total).
- Revisão médica destes 4 temas (16 correções), entre elas: na suspeita de arterite de células gigantes, corticoide imediato
  mesmo sem sintomas visuais; no botulismo, só o soro tem de ser colhido antes da antitoxina — não a atrasar; antitoxina equina
  e doença do soro (10–21 dias); nusinersen com dois regimes na UE desde 2026; terapia génica intratecal (onasemnogene)
  aprovada na UE em 2026 para ≥ 2 anos, incluindo adultos; SVCR — corticoides podem agravar; tocilizumab mascara a febre;
  lactulose por sonda/enema nos graus III–IV; colheita de amónia; separação «mínima» vs «grau I» na escala de West Haven.

## Versão 3 — 17/11/2026 (patologias específicas e pesquisa)
- **Nova parte «Patologias específicas (A–Z)»** com 18 temas: ataxias e doença de Machado-Joseph; distrofia miotónica tipo 1;
  doença de Creutzfeldt-Jakob (DCJ, vDCJ) e doenças priónicas (com controlo de infeção); doença de Huntington;
  doença de Lyme (neuroborreliose); encefalites autoimunes; ELA e doença do neurónio motor; hidrocefalia de pressão normal;
  hipertensão intracraniana idiopática; infeções do SNC no imunodeprimido (VIH, LMP) e neurossífilis; lesão medular e mielopatias;
  nevralgia do trigémio; paralisia facial periférica (Bell, Ramsay Hunt); paramiloidose (PAF/ATTRv); parkinsonismos atípicos
  (PSP, AMS, DCB); PRES; trombose venosa cerebral; tumores do SNC (inclui cuidados após craniotomia).
- Cada tema: o essencial, diagnóstico e tratamento (visão geral), cuidados de enfermagem e sinais de alarme.
- Revisão médica destes 18 temas (21 correções), entre elas: precauções de via aérea se suspeita de tuberculose no imunodeprimido;
  abcesso epidural sem corticoides por rotina; atuação na disreflexia autonómica; classificação de tecidos de risco na DCJ;
  intolerância aos antipsicóticos na encefalite anti-NMDA; suplemento de vitamina A com silenciadores génicos (PAF);
  só a neuroborreliose de Lyme é de declaração obrigatória (Despacho n.º 1150/2021); confirmar com o médico antes do 1.º corticoide
  se suspeita de linfoma; antídoto na toxicidade do magnésio.
- **Pesquisa:** com 2–3 letras (ELA, AVC, TCE, EM) procura a palavra inteira; resultados ordenados (título primeiro).

## Versão 2.1 — 17/11/2026 (português europeu)
- Títulos herdados do livro (edição brasileira) adaptados à terminologia portuguesa:
  «Propedêutica neurológica» → «Avaliação e diagnóstico neurológico»; «Distúrbios do movimento» → «Doenças do movimento»;
  «Distúrbios do sono» → «Perturbações do sono»; «Eletroneuromiografia (ENMG)» → «Eletromiografia (EMG) e estudos de condução nervosa»;
  «Coma e estados alterados de consciência» → «Coma e alterações do estado de consciência»;
  «topografia lesional» → «localização da lesão»; «Fisiopatologia da dor» → «Dor — fisiopatologia e avaliação».
- Grafia do Acordo Ortográfico em Portugal: infeciosas, disseção, cranioencefálico (TC-CE), parésia, hálux.
- «salino hipertónico» → «soro salino hipertónico».
- Restante texto e interface verificados (doente, equipa, registo, internamento, défice, vómitos, contactar, telemóvel, sanita, duche, arrastadeira, algaliação, terapia da fala…).

## Versão 2 — 17/11/2026 (revisão pelos agentes de design, médico e de enfermagem)

> Todas as alterações clínicas abaixo foram propostas por agentes de IA com base em guidelines e normas
> (fontes indicadas). **Precisam de validação por um enfermeiro/médico do serviço antes de uso real**,
> sobretudo alvos tensionais, esquemas de vigilância e pontos de corte das escalas.

### Design (index.html, estilos.css, app.js)
- Modo escuro automático; contraste AA verificado; alvos de toque ≥ 44 px; foco visível; navegação por teclado.
- Caixas de sinais de alarme muito mais evidentes; botão «⚠ Sinais de alarme» e índice «Nesta página» em cada tema.
- Nova página «Todos os sinais de alarme» (#alarmes).
- Escalas: ✓ nos itens respondidos, «Faltam N itens ↓», botão **Copiar resultado** para colar no registo.
- Pesquisa também nas escalas, com nº de resultados e salto direto para a secção.
- Botão «Imprimir este tema» e versão de impressão limpa.

### Revisão médica (conteudo.js)
**Crítico**
- Coma / Doenças sistémicas: a tiamina já não pode atrasar a correção de hipoglicemia (antes: «tiamina antes da glicose»).
- Parkinson: acrescentados os antipsicóticos atípicos (risperidona, olanzapina) aos fármacos a evitar; alternativas habituais (quetiapina/clozapina, domperidona).
- AVC — alarme pós-trombólise: tenecteplase é bólus único; comunicar qualquer agravamento (não esperar NIHSS ≥ 4).

**Importante**
- AVC: trombólise com alteplase ou tenecteplase; janela 4,5 h e 4,5–9 h/ao acordar só com imagem avançada; TA < 185/110 antes.
- AVC: sem trombólise não baixar TA por rotina (> 220/120); após trombectomia não descer PAS < 140.
- AVC: sem antiagregantes/anticoagulantes nas 24 h após trombólise sem indicação.
- Hemorragia intracerebral: alvo PAS ≈ 140, evitar < 130 e oscilações.
- HSA: euvolemia, sem restrição hídrica para a hiponatremia.
- Estado de mal: tempos ILAE (5 min / 10 min focal) e etapas 0–5 / 5–20 / 20–40 min.
- Hiponatremia: limites 10 mmol/L nas 1.as 24 h e 8 mmol/L nas seguintes; doentes de alto risco; diurese súbita.
- Guillain-Barré: regra 20/30/40.
- Miastenia: lista de fármacos alargada; agravamento inicial com corticoides.
- Meningite: antibiótico na 1.ª hora; dexametasona antes/com a 1.ª dose.
- HIC: evitar soros hipotónicos; vigilância da osmoterapia.
- NIHSS: regras oficiais de pontuação na nota; item 7 com NT; redação dos itens 4, 5, 6.

**Menor / acréscimos**
- Trombectomia (janelas), LCR (pressão de abertura, razão de glicose), 4AT item 4, Rankin 2, Glasgow (NT), arterite de células gigantes, AIT, morte cerebral.

### Revisão de enfermagem (conteudo.js)
- **Nova parte «Cuidados de enfermagem transversais»** com 4 temas: Disfagia e alimentação segura (inclui resumo GUSS e IDDSI); Segurança: quedas, úlceras por pressão e contenção; Eliminação vesical e intestinal; ELA e doente neuromuscular (VNI, traqueostomia, decisões antecipadas).
- **Novas escalas:** Braden, Morse, Barthel (confirmar versão e pontos de corte usados no hospital; Braden tem direitos de autor — confirmar autorização institucional).
- Semiologia: nova secção «Avaliação inicial de enfermagem na admissão»; nova disfagia nos alarmes.
- AVC: rastreio de disfagia detalhado; prevenção de complicações (meias de compressão não recomendadas, algaliação); afasia; humor; nova secção «Preparação para a alta e ensinos».
- Demências (PAINAD, Orientação DGS 021/2011), Dor (frequência de avaliação, PAINAD), Miastenia (vigilância seriada, alarme de crise), Parkinson (horários na admissão, perfusões contínuas), Epilepsia (medicação de resgate, diário, nada por boca pós-ictal), EEG (redução de antiepiléticos), Punção lombar (repouso não previne cefaleia), Guillain-Barré (contagem numa expiração), Coma (posição da sonda), EM (fadiga).

## Versão 1 — 17/11/2026
- Protótipo inicial: 23 temas (Cap. 1–23, adulto), escalas Glasgow, NIHSS, 4AT, Rankin, MRC.
