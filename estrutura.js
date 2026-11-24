// estrutura.js: camada transversal (bloco D). Gerado a partir das revisões dos agentes médico e enfermagem.
// TRINTA: «Em 30 segundos» por tema. VIGILANCIA: quadros [vigiar, frequência, comunicar se].
// ALERTAS_FD: alertas doença–fármaco (ids de TEMAS e FARMACOS). REFERENCIAS: referência principal por tema.
const REVISAO_CONTEUDO = "2026-11-24";
const TRINTA = {
 "semiologia": {
  "prioridades": [
   "Registar avaliação neurológica de base: Glasgow por componentes, pupilas, força e fala",
   "Aplicar Morse, Braden, Barthel e escala de dor na admissão e em cada alteração",
   "Rastrear a deglutição antes de qualquer ingestão oral nos doentes de risco"
  ],
  "alarmes": [
   "Descida mantida da Glasgow ou comportamento novo",
   "Nova anisocoria ou pupila pouco reativa",
   "Novo défice motor, de linguagem ou visual"
  ]
 },
 "exames": {
  "prioridades": [
   "Confirmar coagulação, plaquetas e antitrombóticos antes da punção lombar",
   "Vigiar local, cefaleia, força e sensibilidade das pernas e micção após a punção",
   "Garantir segurança para crises no vídeo-EEG com redução de antiepiléticos"
  ],
  "alarmes": [
   "Dor lombar crescente, fraqueza ou anestesia em sela",
   "Febre, rigidez da nuca ou cefaleia diferente",
   "Sonolência, vómitos ou anisocoria após a punção"
  ]
 },
 "hic": {
  "prioridades": [
   "Manter cabeceira a 30°, cabeça alinhada, sem compressão das jugulares",
   "Evitar Valsalva, obstipação e aspirações desnecessárias, agrupando cuidados com pausas",
   "Manter normotermia, normoglicemia e oxigenação, só com soros isotónicos"
  ],
  "alarmes": [
   "Queda da Glasgow ou nova anisocoria",
   "Bradicardia, hipertensão e respiração irregular",
   "Postura em descerebração ou decorticação"
  ]
 },
 "coma": {
  "prioridades": [
   "Avaliar a via aérea e chamar ajuda se Glasgow ≤ 8",
   "Medir já a glicemia capilar e dar tiamina conforme prescrição se houver risco",
   "Posicionar em lateral de segurança, proteger os olhos e fazer higiene oral frequente"
  ],
  "alarmes": [
   "Agravamento da Glasgow ou nova assimetria pupilar",
   "Respiração irregular ou apneias",
   "Crise ou não recupera a consciência"
  ]
 },
 "avc": {
  "prioridades": [
   "Registar a hora de início ou última vez visto bem e ativar a Via Verde",
   "Manter jejum absoluto, incluindo medicação oral, até ao rastreio da deglutição (GUSS)",
   "Cumprir os alvos de TA prescritos, sem baixar por rotina"
  ],
  "alarmes": [
   "NIHSS sobe 2 ou mais pontos ou queda da consciência",
   "Cefaleia, vómitos ou angioedema na trombólise",
   "Tosse ao comer, voz molhada ou dessaturação"
  ]
 },
 "tce": {
  "prioridades": [
   "Proteger a coluna cervical até se excluir lesão",
   "Cumprir o esquema de vigilância neurológica seriada (Glasgow, pupilas, força, sinais vitais)",
   "Registar anticoagulante ou antiagregante e confirmar a decisão médica sobre reversão"
  ],
  "alarmes": [
   "Glasgow desce 1 ponto durante 30 min",
   "Anisocoria ou nova assimetria dos membros",
   "Agitação, cefaleia crescente ou vómitos persistentes"
  ]
 },
 "infecoes": {
  "prioridades": [
   "Colher hemoculturas e dar o antibiótico sem esperar por TC ou punção",
   "Iniciar isolamento de gotículas na suspeita de meningite bacteriana",
   "Dar aciclovir EV logo que se suspeite de encefalite, conforme prescrição"
  ],
  "alarmes": [
   "Púrpura que não desaparece à pressão",
   "Hipotensão ou queda rápida da consciência",
   "Crises ou sinais de hipertensão intracraniana"
  ]
 },
 "epilepsia": {
  "prioridades": [
   "Registar a hora de início, proteger a cabeça e nada na boca",
   "Após os abalos: posição lateral, SpO2, oxigénio se baixa, glicemia capilar",
   "Dar antiepiléticos a horas e manter nada por boca até recuperar"
  ],
  "alarmes": [
   "Crise com 5 min ou mais, ou repetidas sem recuperar",
   "Crise focal com alteração da consciência com 10 min ou mais",
   "Não recupera a consciência após a crise"
  ]
 },
 "dor": {
  "prioridades": [
   "Avaliar a dor na admissão, em cada turno e após cada intervenção",
   "Usar sempre a mesma escala, e PAINAD só se não consegue autoavaliar",
   "Inspecionar a pele nas áreas com sensibilidade diminuída"
  ],
  "alarmes": [
   "Dor que persiste após a intervenção",
   "Sonolência, tonturas ou hipotensão com fármacos neuropáticos",
   "Queimadura ou ferida em área insensível"
  ]
 },
 "cefaleias": {
  "prioridades": [
   "Na cefaleia súbita, avaliar Glasgow, pupilas, TA e défice focal",
   "Dar a terapêutica de crise prescrita o mais cedo possível",
   "Ensinar o diário de cefaleias e a limitar os dias de analgésico"
  ],
  "alarmes": [
   "Cefaleia súbita «em trovão»",
   "Febre, rigidez da nuca ou exantema",
   "Défice focal, convulsão ou alteração da consciência"
  ]
 },
 "movimento": {
  "prioridades": [
   "Dar antiparkinsónicos no horário do doente, sem atrasos nem omissões",
   "Não dar haloperidol, metoclopramida ou outros antipsicóticos sem confirmação médica",
   "Em jejum ou disfagia, pedir já ao médico via alternativa para a medicação"
  ],
  "alarmes": [
   "Rigidez, febre e alteração da consciência",
   "Distonia aguda ou estridor após fármaco",
   "Agravamento súbito com estimulação cerebral profunda"
  ]
 },
 "demencias": {
  "prioridades": [
   "Procurar causas de agitação (dor com PAINAD, retenção, obstipação, infeção) antes de fármacos",
   "Comunicar com frases curtas, uma instrução de cada vez, sem discutir",
   "Manter orientação: relógio, calendário, óculos, prótese auditiva e rotinas"
  ],
  "alarmes": [
   "Alteração aguda e flutuante da atenção",
   "Agitação ou deambulação nova",
   "Reação grave a antipsicótico (corpos de Lewy)"
  ]
 },
 "desmielinizantes": {
  "prioridades": [
   "Excluir infeção, sobretudo urinária, antes de tratar como surto",
   "Vigiar glicemia, TA, sono e humor nos pulsos de corticoide EV",
   "Avaliar de forma seriada a acuidade visual, o resíduo pós-miccional e a obstipação"
  ],
  "alarmes": [
   "Sintoma novo ou agravado há mais de 24 h",
   "Perda de visão ou dor ao mover o olho",
   "Soluços ou vómitos incoercíveis (NMO)"
  ]
 },
 "sono": {
  "prioridades": [
   "Pedir que o doente traga o CPAP ou BiPAP e mantenha o uso",
   "Evitar benzodiazepinas e hipnóticos em idosos e doentes com apneia",
   "Agrupar cuidados e reduzir o ruído e a luz noturna"
  ],
  "alarmes": [
   "Pausas respiratórias ou sonolência após sedativo",
   "Agitação violenta durante o sono (sono REM)",
   "Queda após hipnótico"
  ]
 },
 "neuropatias": {
  "prioridades": [
   "No SGB, vigiar contagem numa só expiração, tosse, força cervical e deglutição",
   "Manter monitorização cardíaca e mudanças de posição lentas (disautonomia)",
   "Inspecionar os pés todos os dias e testar a temperatura da água"
  ],
  "alarmes": [
   "Tosse fraca ou contagem numa só expiração a descer",
   "Disfagia ou fraqueza facial bilateral",
   "Arritmias ou oscilações extremas da TA"
  ]
 },
 "miastenia": {
  "prioridades": [
   "Dar piridostigmina a horas exatas, 30–60 min antes das refeições",
   "Registar ptose, voz, deglutição, força cervical e contagem numa só expiração",
   "Confirmar com médico ou farmacêutico qualquer fármaco novo"
  ],
  "alarmes": [
   "Não levanta a cabeça da almofada",
   "Voz a apagar-se ou disfagia nova",
   "Contagem numa só expiração abaixo de 20"
  ]
 },
 "urgencias": {
  "prioridades": [
   "Fazer ABCDE, glicemia capilar, Glasgow e pupilas",
   "Pedir ajuda cedo e registar as horas",
   "Garantir acesso venoso, colheitas e transporte monitorizado para a imagem"
  ],
  "alarmes": [
   "Crise com 5 min ou mais, ou repetidas",
   "Dor dorsal, fraqueza e retenção urinária",
   "Vertigem com diplopia, disartria ou ataxia"
  ]
 },
 "sistemicas": {
  "prioridades": [
   "Medir a glicemia capilar em qualquer alteração neurológica",
   "Dar tiamina EV na suspeita de Wernicke, sem atrasar a glicose",
   "Vigiar a abstinência alcoólica com o instrumento do serviço, conforme protocolo"
  ],
  "alarmes": [
   "Hiponatremia com vómitos, sonolência ou convulsões",
   "Diurese súbita abundante na correção do sódio",
   "Confusão, alucinações e instabilidade autonómica"
  ]
 },
 "disfagia": {
  "prioridades": [
   "Rastrear com GUSS antes de qualquer ingestão oral, incluindo água e comprimidos",
   "Alimentar sentado a 90°, pequenas quantidades, ritmo lento, sem palhinhas",
   "Fazer higiene oral pelo menos duas vezes por dia, mesmo em jejum"
  ],
  "alarmes": [
   "Tosse, engasgamento ou voz molhada",
   "Febre, dessaturação ou taquipneia sem outra causa",
   "Saída acidental da gastrostomia"
  ]
 },
 "linguagem": {
  "prioridades": [
   "Registar a linguagem de base com exemplos concretos, não só «afásico»",
   "Confirmar se o «sim/não» é fiável antes de avaliar a dor e o consentimento",
   "Pôr a campainha ao alcance da mão não afetada e testar o uso"
  ],
  "alarmes": [
   "Afasia, disartria ou mutismo súbitos",
   "Agravamento da fala num défice conhecido",
   "Voz fraca com disfagia ou dispneia"
  ]
 },
 "seguranca": {
  "prioridades": [
   "Aplicar Morse e Braden na admissão e após alteração, transferência ou queda",
   "Cama baixa e travada, campainha e objetos do lado preservado",
   "Usar a contenção só como último recurso, com registo e vigilância"
  ],
  "alarmes": [
   "Sonolência, cefaleia ou vómitos após queda",
   "Membro encurtado em rotação externa após queda",
   "Cianose, palidez ou dor distal na contenção"
  ]
 },
 "eliminacao": {
  "prioridades": [
   "Medir o resíduo pós-miccional por ecografia vesical se houver suspeita de retenção",
   "Rever todos os dias a necessidade da algália e retirá-la cedo",
   "Registar as dejeções todos os dias e manter o programa intestinal à mesma hora"
  ],
  "alarmes": [
   "TA súbita alta com cefaleia (lesão em T6 ou acima)",
   "Retenção urinária nova com dor lombar",
   "Febre, confusão e urina turva"
  ]
 },
 "ela": {
  "prioridades": [
   "Registar a capacidade vital ou a contagem numa só expiração para ver a tendência",
   "Dar oxigénio só no alvo de SpO2 prescrito (risco de retenção de CO2)",
   "Ter à cabeceira cânula de reserva, aspirador, insuflador manual e oxigénio"
  ],
  "alarmes": [
   "Dispneia em repouso ou respiração paradoxal",
   "Sonolência ou confusão nova (hipercapnia)",
   "Alarme de desconexão ou fuga na VNI"
  ]
 },
 "ataxias": {
  "prioridades": [
   "Avaliar o risco de queda (Morse) e acompanhar sempre o levante",
   "Rastrear a deglutição e vigiar a perda de peso",
   "Dar tempo para falar, porque a disartria não significa défice cognitivo"
  ],
  "alarmes": [
   "Ataxia súbita com cefaleia, vómitos ou sonolência",
   "Engasgamento, febre ou dessaturação",
   "Ataxia com confusão e alteração ocular"
  ]
 },
 "ame": {
  "prioridades": [
   "Confirmar plaquetas, coagulação e proteinúria antes de cada nusinersen",
   "Após punção lombar, vigiar cefaleia, dor lombar, vómitos e o local",
   "Vigiar contagem numa só expiração, tosse e hipoventilação noturna"
  ],
  "alarmes": [
   "Infeção respiratória, tosse ineficaz ou dispneia",
   "Défices novos nas pernas após punção",
   "Sonolência ou alteração da consciência sob nusinersen"
  ]
 },
 "botulismo": {
  "prioridades": [
   "Colher soro antes da antitoxina, sem atrasar a administração",
   "Vigiar contagem numa só expiração, tosse e força cervical como no SGB",
   "Manter nada por boca até avaliar a deglutição, cabeceira elevada, aspirar"
  ],
  "alarmes": [
   "Fraqueza cervical, voz fraca ou tosse ineficaz",
   "Urticária, broncospasmo ou hipotensão na antitoxina",
   "Outros comensais com os mesmos sintomas"
  ]
 },
 "distrofia-miotonica": {
  "prioridades": [
   "Manter a monitorização cardíaca prescrita e comunicar síncope ou palpitações",
   "Alertar a equipa antes de sedação, opioides ou anestesia",
   "Dar oxigénio só no alvo de SpO2 prescrito"
  ],
  "alarmes": [
   "Síncope, palpitações ou bradicardia",
   "Sonolência, cefaleia matinal ou confusão",
   "Depressão respiratória tardia após sedação"
  ]
 },
 "dcj": {
  "prioridades": [
   "Aplicar precauções padrão nos cuidados de rotina, sem quarto de isolamento",
   "Avisar a CCI e a esterilização antes de qualquer procedimento invasivo",
   "Manter ambiente calmo, sem toque nem ruído súbitos (mioclonias)"
  ],
  "alarmes": [
   "Picada ou salpico com tecido de alto risco",
   "Procedimento invasivo sem CCI avisada",
   "Mioclonias ou ataxia com risco de queda"
  ]
 },
 "huntington": {
  "prioridades": [
   "Oferecer refeições frequentes e hipercalóricas e pesar com regularidade",
   "Usar cama baixa e proteções almofadadas, sem contenção física",
   "Avaliar o humor e a ideação suicida e comunicar alterações"
  ],
  "alarmes": [
   "Ideação ou comportamento suicida",
   "Perda de peso rápida ou engasgamento frequente",
   "Rigidez ou febre após antipsicótico"
  ]
 },
 "lyme": {
  "prioridades": [
   "Perguntar por picada de carraça, mancha na pele e atividades ao ar livre",
   "Avaliar a dor radicular com escala, sobretudo à noite",
   "Proteger o olho se houver paralisia facial"
  ],
  "alarmes": [
   "Síncope, bradicardia ou bloqueio no ECG",
   "Fraqueza progressiva dos membros",
   "Alteração da consciência ou rigidez da nuca marcada"
  ]
 },
 "autoimunes": {
  "prioridades": [
   "Confirmar rastreios infeciosos e vacinação antes de iniciar imunossupressão",
   "Vigiar as perfusões biológicas com material de anafilaxia pronto",
   "Confirmar o dia semanal fixo do metotrexato na reconciliação terapêutica"
  ],
  "alarmes": [
   "Febre ou infeção em imunossuprimido",
   "Dispneia, urticária ou hipotensão na perfusão",
   "Formigueiros peribucais ou cãibras na plasmaférese"
  ]
 },
 "encefalite-autoimune": {
  "prioridades": [
   "Garantir ambiente calmo, vigilância próxima, cama baixa e contenção só em último recurso",
   "Registar crises e movimentos anómalos com hora, duração e descrição",
   "Vigiar FC, TA, temperatura, respiração, balanço hídrico e natremia"
  ],
  "alarmes": [
   "Crises repetidas ou diminuição da consciência",
   "Hipoventilação, bradicardia ou pausas cardíacas",
   "Febre e rigidez após antipsicótico"
  ]
 },
 "encefalopatia-hepatica": {
  "prioridades": [
   "Registar o grau de West Haven e a asterixis em cada turno",
   "Registar dejeções e comunicar menos de 2 por dia ou diarreia excessiva",
   "Evitar sedativos e procurar o precipitante (infeção, hemorragia, obstipação)"
  ],
  "alarmes": [
   "Agravamento para grau III–IV",
   "Melenas, hematemeses ou hipotensão",
   "Assimetria pupilar ou défice focal"
  ]
 },
 "dnm": {
  "prioridades": [
   "Vigiar ortopneia, sono fragmentado, cefaleia matinal e tosse fraca",
   "Pesar com regularidade e planear a gastrostomia a tempo",
   "Confirmar e registar as diretivas antecipadas de vontade"
  ],
  "alarmes": [
   "Dispneia em repouso ou respiração paradoxal",
   "Sonolência ou confusão nova (hipercapnia)",
   "Oxigénio sem ventilação nem alvo prescrito"
  ]
 },
 "hpn": {
  "prioridades": [
   "Registar a marcha antes e depois do «tap test», sempre pelo mesmo método",
   "Prevenir quedas e manter o programa de micção",
   "Após DVP, vigiar ferida, trajeto do cateter, dor e febre"
  ],
  "alarmes": [
   "Cefaleia, vómitos ou sonolência após DVP",
   "Cefaleia em pé ou novo défice",
   "Febre ou rubor no trajeto do cateter"
  ]
 },
 "hii": {
  "prioridades": [
   "Para medir a pressão, decúbito lateral com as pernas estendidas e doente relaxado",
   "Ensinar os efeitos da acetazolamida e comunicar dor lombar ou hematúria",
   "Reforçar as consultas de oftalmologia e o registo das cefaleias"
  ],
  "alarmes": [
   "Visão diminuída ou perdas transitórias a agravar",
   "Cefaleia muito intensa e progressiva",
   "Vómitos repetidos"
  ]
 },
 "imunodeprimido": {
  "prioridades": [
   "Cumprir horários rigorosos de antimicrobianos e antirretrovirais e confirmar interações",
   "Aplicar precauções de via aérea na suspeita de tuberculose pulmonar",
   "Garantir confidencialidade rigorosa sobre o diagnóstico"
  ],
  "alarmes": [
   "Cefaleia progressiva, vómitos ou alteração visual",
   "Agravamento após iniciar antirretrovirais",
   "Crises convulsivas"
  ]
 },
 "mielopatias": {
  "prioridades": [
   "Avaliar de forma seriada a força dos 4 membros, o nível sensitivo e os esfíncteres",
   "Mobilizar em bloco se houver traumatismo ou instabilidade da coluna",
   "Reposicionar com horário e superfície adequada (pele sem sensibilidade)"
  ],
  "alarmes": [
   "Dor nas costas com fraqueza ou retenção",
   "Nível sensitivo a subir ou dificuldade respiratória",
   "TA súbita alta, cefaleia e rubor"
  ]
 },
 "neurossarcoidose": {
  "prioridades": [
   "Fazer balanço hídrico rigoroso e peso diário, com acesso livre a água",
   "Nunca suspender o corticoide de forma abrupta",
   "Confirmar o rastreio de tuberculose e hepatite antes do anti-TNF"
  ],
  "alarmes": [
   "Poliúria com sede intensa ou confusão",
   "Cefaleia progressiva, vómitos ou sonolência",
   "Síncope, palpitações ou bradicardia"
  ]
 },
 "trigemio": {
  "prioridades": [
   "Avisar antes de tocar na face e identificar desencadeantes",
   "Oferecer alimentos moles e mornos e vigiar o peso e a hidratação",
   "Ensinar a reconhecer erupção cutânea e sonolência com carbamazepina ou oxcarbazepina"
  ],
  "alarmes": [
   "Erupção, febre e lesões das mucosas",
   "Confusão, sonolência ou náuseas (hiponatremia)",
   "Défice sensitivo persistente ou sintoma novo"
  ]
 },
 "bell": {
  "prioridades": [
   "Confirmar que a testa está atingida, excluindo AVC",
   "Proteger o olho com lágrima artificial de dia e oclusão à noite",
   "Vigiar glicemia e TA sob corticoide nos diabéticos e hipertensos"
  ],
  "alarmes": [
   "Testa poupada ou fraqueza dos membros",
   "Olho vermelho, doloroso ou visão diminuída",
   "Vesículas no ouvido com dor e hipoacusia"
  ]
 },
 "paf": {
  "prioridades": [
   "Inspecionar pés e mãos todos os dias e testar a água com termómetro",
   "Medir a TA deitado e de pé e fazer levante faseado",
   "Reforçar o suplemento de vitamina A com silenciadores génicos"
  ],
  "alarmes": [
   "Síncope, bradicardia ou alteração nova no ECG",
   "Diarreia com desidratação ou perda de peso rápida",
   "Rubor, dispneia ou hipotensão na perfusão"
  ]
 },
 "parkinsonismos-atipicos": {
  "prioridades": [
   "Prevenir quedas ativamente, porque são precoces e graves",
   "Medir a TA deitado e de pé e fazer levante faseado",
   "Rastrear disfagia e vigiar o resíduo pós-miccional"
  ],
  "alarmes": [
   "Estridor inspiratório noturno (AMS)",
   "Síncopes repetidas por hipotensão ortostática",
   "Engasgamento, febre ou dessaturação"
  ]
 },
 "pres": {
  "prioridades": [
   "Medir a TA com a frequência prescrita e registar a resposta aos anti-hipertensores",
   "Avaliar a visão e garantir segurança, porque o doente pode não ver",
   "Vigiar reflexos, FR e diurese sob sulfato de magnésio"
  ],
  "alarmes": [
   "Crises repetidas ou diminuição da consciência",
   "Perda súbita de visão",
   "Depressão respiratória ou reflexos abolidos com magnésio"
  ]
 },
 "tvc": {
  "prioridades": [
   "Fazer vigilância neurológica seriada, incluindo a visão",
   "Cumprir os horários da anticoagulação e vigiar hemorragia",
   "Manter precauções para crises e hidratação adequada"
  ],
  "alarmes": [
   "Cefaleia a agravar, vómitos ou novo défice",
   "Crises repetidas",
   "Hemorragia em doente anticoagulado"
  ]
 },
 "tumores": {
  "prioridades": [
   "Sob corticoide, vigiar glicemia, TA, sono e infeção e nunca suspender bruscamente",
   "Após craniotomia, vigiar Glasgow, pupilas, penso e saída de líquido claro",
   "Fazer balanço hídrico e natremia após cirurgia hipofisária ou suprasselar"
  ],
  "alarmes": [
   "Queda da consciência ou nova anisocoria",
   "Poliúria com sede intensa",
   "Febre ou saída de líquido pela ferida"
  ]
 },
 "vasculites": {
  "prioridades": [
   "Na arterite, avaliar a visão de cada olho na admissão e em cada turno",
   "Nunca atrasar o corticoide na arterite de células gigantes por causa de exames",
   "Sob tocilizumab ou corticoide, vigiar infeção mesmo sem febre"
  ],
  "alarmes": [
   "Perda, turvação ou falhas de visão",
   "Cefaleia súbita máxima em menos de 1 minuto",
   "Novo défice focal ou queda da Glasgow"
  ]
 },
 "angiopatia-amiloide": {
  "prioridades": [
   "Registar os antitrombóticos e a decisão médica sobre cada um como alerta",
   "Perante qualquer défice focal novo, atuar como num possível AVC e registar a hora",
   "Confirmar o alvo de TA e prevenir quedas (Morse)"
  ],
  "alarmes": [
   "Défice focal súbito",
   "Cefaleia súbita, vómitos ou sonolência",
   "Queda, sobretudo com traumatismo craniano"
  ]
 },
 "avc-isquemico": {
  "prioridades": [
   "Pesar e fazer dupla verificação da dose do trombolítico",
   "Cumprir a vigilância pós-trombólise: neurológica e TA de 15 em 15 min nas primeiras 2 h",
   "Manter jejum até ao GUSS, glicemia no alvo e tratar a febre"
  ],
  "alarmes": [
   "Aumento do NIHSS ou queda da consciência",
   "Cefaleia, vómitos ou edema da língua na trombólise",
   "Sonolência ou anisocoria entre o 2.º e o 5.º dia"
  ]
 },
 "avc-hemorragico": {
  "prioridades": [
   "Registar o anticoagulante e a hora da última toma e comunicar de imediato",
   "Medir a TA com frequência até ao alvo, sempre no mesmo braço",
   "Manter a cabeceira a 30°, evitar esforço, laxante conforme prescrição"
  ],
  "alarmes": [
   "Glasgow desce 2 ou mais pontos ou anisocoria",
   "Cefaleia súbita com aneurisma não tratado",
   "Confusão ou défice novo entre o 3.º e o 14.º dia"
  ]
 },
 "trombectomia": {
  "prioridades": [
   "Registar pulsos, cor e temperatura dos membros antes do procedimento",
   "Vigiar o penso e a perfusão do membro com a frequência dos sinais vitais",
   "À chegada, confirmar o acesso, o alvo de TA e o tempo de repouso"
  ],
  "alarmes": [
   "Agravamento neurológico, cefaleia ou vómitos",
   "Hematoma a crescer ou hemorragia no local",
   "Membro frio, pálido ou sem pulso"
  ]
 },
 "territorios-arteriais": {
  "prioridades": [
   "Manter nada por boca até rastreio formal, sobretudo no Wallenberg",
   "Na negligência ou hemianopsia, abordar inicialmente pelo lado preservado",
   "Na síndrome de encarceramento, combinar e registar um código sim/não com os olhos"
  ],
  "alarmes": [
   "Vertigem com diplopia, disartria ou sinais cruzados",
   "Sonolência crescente em enfarte extenso ou cerebeloso",
   "Dificuldade em gerir secreções ou respiração alterada"
  ]
 },
 "encefalopatia-wernicke": {
  "prioridades": [
   "Identificar o risco na admissão e registá-lo de forma visível",
   "Dar tiamina EV antes de glicose ou alimentação, sem atrasar a correção da hipoglicemia",
   "Avaliar a sedação, a FR e a SpO2 antes de cada benzodiazepina"
  ],
  "alarmes": [
   "Confusão, nistagmo ou desequilíbrio novos",
   "Sedação excessiva após benzodiazepinas",
   "Agitação, alucinações, febre ou crises"
  ]
 },
 "alzheimer": {
  "prioridades": [
   "Registar com o cuidador o estado habitual: cognição, autonomia, sono e alimentação",
   "Avaliar a dor com PAINAD quando não consegue autoavaliar (a dor não verbalizada provoca agitação)",
   "Ajudar nas refeições, rastrear disfagia e oferecer líquidos com regularidade"
  ],
  "alarmes": [
   "Agravamento súbito da confusão ou da vigília",
   "Tosse ou engasgamento às refeições",
   "Cefaleia, confusão ou crises sob antiamiloide"
  ]
 },
 "demencia-vascular": {
  "prioridades": [
   "Vigiar TA, glicemia e adesão à terapêutica preventiva",
   "Fazer avaliação neurológica regular, porque um défice novo pode ser AVC",
   "Rastrear disfagia (GUSS) antes de alimentos ou medicação oral"
  ],
  "alarmes": [
   "Défice neurológico de início súbito",
   "Agravamento súbito da confusão ou da vigília",
   "TA muito elevada ou hipotensão"
  ]
 },
 "dcl": {
  "prioridades": [
   "Não dar antipsicóticos sem confirmação médica, mesmo em SOS",
   "Registar o padrão das flutuações e planear os cuidados nos períodos lúcidos",
   "Medir a TA deitado e de pé e fazer levante faseado"
  ],
  "alarmes": [
   "Rigidez, febre e sudação após antipsicótico",
   "Confusão para além das flutuações habituais",
   "Síncope ou quedas repetidas"
  ]
 },
 "epilepsia-az": {
  "prioridades": [
   "Dar os antiepiléticos à hora certa e pedir alternativa se houver jejum ou disfagia",
   "Manter aspirador e oxigénio prontos e cama baixa se as crises forem frequentes",
   "Registar hora, duração, início e recuperação de cada crise"
  ],
  "alarmes": [
   "Crise com 5 min ou mais, ou repetidas sem recuperar",
   "Não recupera a consciência ou défice novo",
   "Erupção com febre após iniciar antiepilético"
  ]
 },
 "parkinson": {
  "prioridades": [
   "Dar os antiparkinsónicos no horário do doente, sem atrasar mais de 15–30 min",
   "Nunca suspender de repente e pedir via alternativa se houver jejum ou disfagia",
   "Evitar haloperidol, metoclopramida e prometazina e pedir alternativa ao médico"
  ],
  "alarmes": [
   "Rigidez extrema, febre e alteração da consciência",
   "Incapacidade de engolir a medicação",
   "Confusão aguda ou alucinações novas"
  ]
 },
 "esclerose-multipla": {
  "prioridades": [
   "Vigiar glicemia, TA, sono e humor nos pulsos de corticoide",
   "Na 1.ª toma de fingolimod: ECG, FC e TA de hora a hora durante 6 h",
   "Rastrear infeções urinárias e respiratórias (pseudossurto)"
  ],
  "alarmes": [
   "Perda rápida de força ou retenção urinária",
   "Perda súbita de visão",
   "Alterações cognitivas progressivas sob natalizumab"
  ]
 },
 "nmo": {
  "prioridades": [
   "No surto, avaliar força, sensibilidade, visão, bexiga e respiração",
   "Vigiar hipotensão e hipocalcemia na plasmaférese",
   "Confirmar a vacinação antimeningocócica com eculizumab ou ravulizumab"
  ],
  "alarmes": [
   "Perda de força ou dificuldade respiratória",
   "Perda súbita de visão",
   "Febre, cefaleia ou petéquias sob eculizumab"
  ]
 },
 "miastenia-gravis": {
  "prioridades": [
   "Avaliar a respiração pelo menos de 4 em 4 h, com contagem numa só expiração em tabela",
   "Dar piridostigmina à hora exata, com refeições 30–60 min depois",
   "Confirmar com médico ou farmacêutico qualquer fármaco novo"
  ],
  "alarmes": [
   "Dispneia deitado ou contagem abaixo de 20",
   "Disfagia grave ou acumulação de secreções",
   "Agravamento após fármaco novo"
  ]
 },
 "sgb": {
  "prioridades": [
   "Vigiar a respiração de 2 em 2 a 4 em 4 h com contagem numa só expiração e tosse",
   "Na aspiração e na mobilização, manter monitorização cardíaca e atropina disponível",
   "Avaliar a deglutição (GUSS) e a força (MRC) várias vezes por dia"
  ],
  "alarmes": [
   "Dispneia, tosse fraca ou contagem abaixo de 20",
   "Bradicardia, arritmias ou oscilações da TA",
   "Fraqueza a progredir em horas"
  ]
 },
 "delirium": {
  "prioridades": [
   "Na admissão, registar com a família o estado cognitivo de base",
   "Rastrear em cada turno com o instrumento do hospital e testar a atenção",
   "Procurar causas: dor, retenção, obstipação, hipoxia, infeção, glicemia e fármacos"
  ],
  "alarmes": [
   "Confusão com sonolência, anisocoria ou défice focal",
   "Doente «calmo» que deixou de comer ou responder",
   "Febre e rigidez após antipsicótico"
  ]
 },
 "meningites-encefalites": {
  "prioridades": [
   "Dar antibiótico e aciclovir sem esperar por TC, punção ou colheitas",
   "Na suspeita meningocócica, isolamento de gotículas até 24 h de antibiótico",
   "Marcar os limites das petéquias com a hora e vigiar se alastram"
  ],
  "alarmes": [
   "Púrpura que não desaparece à pressão",
   "Hipotensão, extremidades frias ou oligúria",
   "Glasgow desce 2 ou mais pontos ou anisocoria"
  ]
 },
 "emergencias-farmacos": {
  "prioridades": [
   "Rever os fármacos iniciados, aumentados ou suspensos nos últimos dias, registando a hora",
   "Fazer arrefecimento físico, porque os antipiréticos ajudam pouco",
   "Vigiar a diurese horária e a cor da urina (rabdomiólise)"
  ],
  "alarmes": [
   "Febre com rigidez ou clónus e confusão",
   "Urina escura ou diurese a diminuir",
   "Alarme ou enchimento atrasado da bomba de baclofeno"
  ]
 },
 "sodio": {
  "prioridades": [
   "Fazer balanço hídrico rigoroso e peso diário à mesma hora",
   "No soro hipertónico, dupla verificação e bomba infusora, sem nunca acelerar",
   "Confirmar a prescrição antes de restringir líquidos, sobretudo na HSA"
  ],
  "alarmes": [
   "Vómitos, sonolência ou crise com sódio baixo",
   "Diurese aquosa súbita durante a correção",
   "Disartria ou disfagia dias após a correção"
  ]
 },
 "funcionais": {
  "prioridades": [
   "Tratar com respeito, porque os sintomas são reais e involuntários",
   "Sem diagnóstico confirmado, atuar como numa crise epilética",
   "Registar cada episódio de forma descritiva, sem interpretar"
  ],
  "alarmes": [
   "Episódio com mais de 5 min, cianose ou sem recuperação",
   "Défice novo, diferente do padrão conhecido",
   "Ideação suicida ou autoagressão"
  ]
 },
 "disseccao-cervical": {
  "prioridades": [
   "Vigiar o défice neurológico pelo menos de 4 em 4 h nas primeiras 48–72 h",
   "Registar o Horner na admissão, com o lado, e vigiar por turno",
   "Evitar movimentos bruscos ou extremos do pescoço nos cuidados"
  ],
  "alarmes": [
   "Défice neurológico novo ou agravado",
   "Cefaleia ou cervicalgia que agrava subitamente",
   "Tosse ao beber, disfagia ou rouquidão nova"
  ]
 },
 "paliativos": {
  "prioridades": [
   "Avaliar os sintomas em cada turno e reavaliar 30–60 min após cada resgate",
   "Confirmar as diretivas antecipadas, o procurador e as decisões registadas",
   "Manter analgésicos, antiepiléticos e dopaminérgicos por via alternativa"
  ],
  "alarmes": [
   "Sintoma não controlado ou 3 resgates em 24 h",
   "Crise epilética prolongada em fim de vida",
   "Hemorragia maciça ou dispneia súbita grave"
  ]
 }
};
const VIGILANCIA = {
 "semiologia": [
  [
   "Glasgow por componentes (O, V, M), pupilas, força e fala",
   "Na admissão (registo de base) e pelo menos uma vez por turno, ou conforme prescrição",
   "Descida mantida de 1 ponto ou mais na resposta motora ou de 2 ou mais no total, anisocoria ou pupila pouco reativa, défice motor, de linguagem ou visual novo"
  ],
  [
   "TA, FC, padrão respiratório, temperatura e SpO2",
   "Na admissão e pelo menos uma vez por turno, ou conforme prescrição",
   "Bradicardia com hipertensão e respiração irregular (tríade de Cushing), SpO2 a descer"
  ],
  [
   "Glicemia capilar",
   "Na admissão e perante qualquer alteração neurológica, ou conforme prescrição",
   "Valor alterado (corrigir e reavaliar antes de tirar conclusões)"
  ],
  [
   "Atenção e comportamento (meses do ano ao contrário)",
   "Uma vez por turno nos doentes com 65 anos ou mais, com défice cognitivo ou com alteração do comportamento",
   "Alteração aguda ou flutuante da atenção, agitação ou comportamento novo"
  ],
  [
   "Deglutição",
   "Antes de qualquer ingestão oral nos doentes de risco e sempre que haja alteração neurológica",
   "Tosse ao engolir, voz molhada, sialorreia"
  ],
  [
   "Morse, Braden, Barthel e dor",
   "Na admissão e após alteração clínica, transferência ou queda",
   "Risco elevado ou agravamento, com o plano de prevenção registado"
  ]
 ],
 "exames": [
  [
   "Local da punção lombar, cefaleia e dor lombar",
   "Pelo menos de 4 em 4 h nas primeiras 24 h, ou conforme protocolo. Mais vezes se anticoagulado ou com plaquetas baixas",
   "Dor lombar intensa e crescente, cefaleia que já não alivia deitado, hemorragia ou saída de líquido no local"
  ],
  [
   "Força e sensibilidade dos membros inferiores, micção",
   "Com a vigilância do local de punção",
   "Fraqueza ou dormência das pernas, anestesia em sela, retenção urinária"
  ],
  [
   "Temperatura e rigidez da nuca",
   "De 4 em 4 h nas primeiras 24 h, ou conforme protocolo",
   "Febre, rigidez da nuca"
  ],
  [
   "Glasgow, pupilas e vómitos após punção",
   "De 4 em 4 h nas primeiras 24 h, ou conforme protocolo. De imediato se houver sonolência",
   "Sonolência, vómitos, anisocoria ou défice novo"
  ],
  [
   "Vídeo-EEG com redução da medicação: crises e acesso venoso",
   "Vigilância contínua. Acesso venoso verificado em cada turno",
   "Crise com 5 min ou mais, crises em salvas, acesso venoso não permeável"
  ],
  [
   "Locais de agulha após EMG",
   "Após o exame, ou conforme protocolo",
   "Hematoma que aumenta, sobretudo se anticoagulado"
  ]
 ],
 "hic": [
  [
   "Glasgow por componentes e pupilas",
   "De hora a hora, ou conforme prescrição",
   "Descida da Glasgow, anisocoria nova ou pupila fixa, Glasgow 8 ou menos (EEMI)"
  ],
  [
   "TA, FC e padrão respiratório",
   "De hora a hora, ou conforme prescrição",
   "Bradicardia com hipertensão e respiração irregular (tríade de Cushing)"
  ],
  [
   "Cefaleia, vómitos, agitação e postura motora",
   "Em cada avaliação neurológica",
   "Cefaleia a agravar, vómitos, postura em descerebração ou decorticação"
  ],
  [
   "Temperatura, glicemia capilar e SpO2",
   "De 4 em 4 h, ou conforme prescrição",
   "Valores fora dos alvos prescritos"
  ],
  [
   "Natremia, diurese e balanço hídrico se houver osmoterapia",
   "Natremia conforme prescrição. Balanço hídrico por turno",
   "Sódio fora do intervalo prescrito, diurese muito aumentada ou diminuída"
  ],
  [
   "DVE: nível do transdutor, débito e aspeto do LCR",
   "De hora a hora, ou conforme protocolo",
   "Débito fora do esperado, LCR turvo ou hemático"
  ]
 ],
 "coma": [
  [
   "Glasgow, pupilas, movimentos oculares e postura motora",
   "De hora a hora, ou conforme prescrição",
   "Agravamento da Glasgow, nova assimetria pupilar ou motora, Glasgow 8 ou menos (EEMI)"
  ],
  [
   "Padrão respiratório, FR e SpO2",
   "De hora a hora, ou conforme prescrição. Contínua se instável",
   "Respiração irregular, apneias, SpO2 a descer"
  ],
  [
   "Glicemia capilar",
   "Na admissão e perante qualquer agravamento, ou conforme prescrição",
   "Hipoglicemia ou hiperglicemia"
  ],
  [
   "Movimentos anómalos e crises",
   "Em cada avaliação",
   "Crise, mioclonias subtis, ausência de recuperação da consciência após crise (possível estado de mal não convulsivo)"
  ],
  [
   "Posição da SNG e cabeceira",
   "Antes de cada utilização da sonda",
   "Posição não confirmada, tosse ou dessaturação durante a alimentação"
  ],
  [
   "Olhos, boca e pele",
   "Uma vez por turno",
   "Olho vermelho ou lesão da córnea, lesão por pressão"
  ]
 ],
 "avc": [
  [
   "NIHSS, Glasgow e pupilas",
   "Com a frequência do protocolo da fase aguda, nunca menos de uma vez por turno",
   "Aumento do NIHSS de 2 ou mais pontos, queda da consciência, défice novo"
  ],
  [
   "TA",
   "Conforme prescrição. Após trombólise ou trombectomia, com a avaliação neurológica",
   "Com trombólise acima de 180/105 mmHg durante e nas 24 h seguintes. Sem reperfusão, acima de 220/120 mmHg. Subida súbita"
  ],
  [
   "Glicemia capilar e temperatura",
   "De 4 em 4 h, ou conforme prescrição",
   "Hipoglicemia, hiperglicemia, febre"
  ],
  [
   "Deglutição e sinais de aspiração",
   "Rastreio antes de qualquer via oral. Se falhar, repetir a cada 24 h ou se houver melhoria",
   "Tosse ao comer, voz molhada, febre, SpO2 abaixo de 94%"
  ],
  [
   "Bexiga e intestino",
   "Diurese e globo vesical por turno. Dejeções diárias",
   "Retenção urinária, obstipação"
  ],
  [
   "Morse e Braden",
   "Na admissão e conforme protocolo",
   "Risco elevado ou agravamento"
  ]
 ],
 "tce": [
  [
   "Glasgow O-V-M, pupilas e força dos 4 membros",
   "Glasgow abaixo de 15 (ou do habitual) de 30 em 30 min até recuperar. Glasgow 15 de 30 em 30 min durante 2 h, de hora a hora durante 4 h e depois de 2 em 2 h. Se agravar, recomeçar",
   "Queda de 1 ponto mantida 30 min, queda de 3 ou mais na ocular ou verbal, ou de 2 ou mais na motora, anisocoria, nova assimetria, Glasgow 8 ou menos"
  ],
  [
   "FR, FC, TA, temperatura e SpO2",
   "Em cada avaliação neurológica",
   "Bradicardia com hipertensão, respiração irregular"
  ],
  [
   "Cefaleia, vómitos e comportamento",
   "Em cada avaliação neurológica",
   "Cefaleia intensa ou a agravar, vómitos persistentes, agitação ou comportamento anómalo"
  ],
  [
   "Nariz e ouvidos",
   "Em cada avaliação",
   "Saída de líquido claro"
  ],
  [
   "Crises",
   "Vigilância contínua",
   "Qualquer crise"
  ],
  [
   "Glasgow às 24 h",
   "Às 24 h",
   "Ainda abaixo do habitual (lembrar o médico, pode estar indicada nova imagem)"
  ]
 ],
 "infecoes": [
  [
   "Glasgow, pupilas e comportamento",
   "De hora a hora nas primeiras horas, ou conforme prescrição",
   "Queda da Glasgow, anisocoria, confusão nova, crise"
  ],
  [
   "TA, FC, FR, SpO2 e temperatura",
   "De hora a hora até estabilizar, ou conforme prescrição",
   "Hipotensão, taquicardia, SpO2 a descer"
  ],
  [
   "Pele (petéquias, púrpura)",
   "Em cada avaliação",
   "Lesões novas ou que alastram"
  ],
  [
   "Hora da 1.ª dose de antibiótico ou aciclovir",
   "Desde a suspeita",
   "Qualquer atraso (idealmente na 1.ª hora)"
  ],
  [
   "Diurese e creatinina sob aciclovir",
   "Diurese por turno. Creatinina conforme prescrição",
   "Diurese a diminuir, creatinina a subir"
  ],
  [
   "Sinais de hipertensão intracraniana",
   "Contínua",
   "Cefaleia a agravar, vómitos, bradicardia com hipertensão"
  ]
 ],
 "epilepsia": [
  [
   "Crise: hora de início, duração e características",
   "Em cada crise, cronometrar desde o início",
   "Crise tónico-clónica de 5 min ou mais, focal com alteração da consciência de 10 min ou mais, crises repetidas sem recuperação entre elas"
  ],
  [
   "Glasgow, sinais vitais e SpO2 no pós-crítico",
   "De 15 em 15 min até recuperar o estado prévio, ou conforme prescrição",
   "Não recupera a consciência, défice que não regride, SpO2 baixa"
  ],
  [
   "Glicemia capilar",
   "Após cada crise",
   "Hipoglicemia"
  ],
  [
   "Deglutição",
   "Antes de retomar a via oral",
   "Consciência ou deglutição não recuperadas (manter nada por boca)"
  ],
  [
   "Hora de cada toma de antiepilético",
   "Em cada toma",
   "Dose atrasada ou omitida, jejum ou disfagia"
  ]
 ],
 "dor": [
  [
   "Intensidade da dor (sempre a mesma escala no mesmo doente: numérica ou PAINAD)",
   "Na admissão, pelo menos uma vez por turno e após cada intervenção",
   "Dor não controlada, dor nova ou com características diferentes"
  ],
  [
   "Reavaliação após analgesia",
   "No tempo adequado à via de administração",
   "Sem alívio"
  ],
  [
   "Sonolência, FR, tonturas e TA com fármacos para dor neuropática ou opioides",
   "Uma vez por turno, ou conforme prescrição",
   "Sonolência excessiva, FR baixa, hipotensão, queda"
  ],
  [
   "Pele nas áreas com sensibilidade alterada",
   "Diária e após aplicação de calor ou frio",
   "Queimadura, ferida, rubor persistente"
  ],
  [
   "Sono e atividade",
   "Diária",
   "Dor que impede o sono ou a mobilização"
  ]
 ],
 "cefaleias": [
  [
   "Intensidade e características da cefaleia (escala numérica)",
   "Na admissão, uma vez por turno e após a terapêutica de crise, ou conforme prescrição",
   "Mudança de padrão, agravamento progressivo, despertar noturno, agravamento com tosse, esforço ou posição"
  ],
  [
   "Glasgow, pupilas e défice focal",
   "Uma vez por turno, ou conforme prescrição. De imediato se cefaleia súbita",
   "Cefaleia em trovão, alteração da consciência ou do comportamento, défice novo, convulsão"
  ],
  [
   "TA e temperatura",
   "Uma vez por turno, ou conforme prescrição",
   "Febre, TA muito elevada"
  ],
  [
   "Rigidez da nuca e pele",
   "Se houver febre",
   "Rigidez da nuca, exantema"
  ],
  [
   "Visão e dor temporal (após os 50 anos)",
   "Uma vez por turno, ou conforme prescrição",
   "Alterações visuais, dor na têmpora, dor na mandíbula ao mastigar (comunicar no próprio dia)"
  ]
 ],
 "movimento": [
  [
   "Hora de cada toma de antiparkinsónico e estado motor (on, off, discinesias)",
   "Em cada toma",
   "Dose atrasada ou omitida, jejum ou disfagia, bloqueio ou rigidez"
  ],
  [
   "Temperatura, TA, FC, consciência e rigidez",
   "Uma vez por turno, ou conforme prescrição. Mais vezes se falhou medicação ou se foi dado antidopaminérgico",
   "Febre com rigidez e alteração da consciência"
  ],
  [
   "TA deitado e de pé",
   "Antes do primeiro levante e se houver tonturas",
   "Hipotensão ortostática, síncope"
  ],
  [
   "Deglutição",
   "Antes da via oral, de preferência em on",
   "Tosse, engasgamento, voz molhada"
  ],
  [
   "Deglutição, voz e respiração após toxina botulínica",
   "Nos dias seguintes à injeção (ensinar o doente)",
   "Dificuldade em engolir ou respirar, voz fraca, fraqueza generalizada"
  ],
  [
   "ECP: feridas, estado do estimulador e humor",
   "Uma vez por turno",
   "Rubor, exsudado ou extrusão, agravamento súbito dos sintomas, ideias de suicídio"
  ]
 ],
 "demencias": [
  [
   "Atenção, vigília e comportamento face ao habitual",
   "Uma vez por turno, com o instrumento adotado pelo hospital",
   "Alteração aguda ou flutuante (possível delirium)"
  ],
  [
   "Dor (PAINAD se não consegue autoavaliar)",
   "Uma vez por turno e sempre que houver agitação",
   "Dor presente ou a aumentar"
  ],
  [
   "Globo vesical e dejeções",
   "Globo vesical por turno. Dejeções diárias",
   "Retenção urinária, obstipação"
  ],
  [
   "Ingestão de alimentos e líquidos",
   "Em cada refeição",
   "Ingestão reduzida, recusa"
  ],
  [
   "Contenção física, se inevitável: respiração, pele e perfusão distal, necessidade",
   "Com a periodicidade do protocolo",
   "Cianose, palidez, edema ou dor distal, dificuldade respiratória"
  ]
 ],
 "desmielinizantes": [
  [
   "Défice neurológico, acuidade de cada olho e dor ocular",
   "Uma vez por turno, ou conforme prescrição",
   "Sintomas novos ou agravados, perda de visão"
  ],
  [
   "Glicemia capilar, TA, sono e humor durante pulsos de corticoide",
   "Glicemia conforme prescrição. TA e humor uma vez por turno",
   "Hiperglicemia, TA elevada, agitação, insónia, dor epigástrica"
  ],
  [
   "Temperatura e sinais de infeção urinária",
   "Uma vez por turno",
   "Febre, ardor ao urinar (possível pseudo-surto)"
  ],
  [
   "Resíduo pós-miccional e dejeções",
   "Resíduo se houver suspeita de retenção. Dejeções diárias",
   "Retenção urinária, obstipação"
  ],
  [
   "TA e sinais de hipocalcemia na plasmaférese",
   "Durante e após cada sessão",
   "Hipotensão, formigueiros à volta da boca, cãibras"
  ],
  [
   "Soluços e vómitos (NMO)",
   "Uma vez por turno",
   "Soluços ou vómitos persistentes"
  ]
 ],
 "sono": [
  [
   "Uso de CPAP ou BiPAP",
   "Todas as noites",
   "Não usa, não tolera ou tem fugas importantes"
  ],
  [
   "SpO2 e padrão respiratório durante o sono",
   "Nas rondas noturnas, ou conforme prescrição",
   "Pausas respiratórias, dessaturação"
  ],
  [
   "Sedação e FR após hipnótico ou benzodiazepina",
   "Antes e depois de cada toma",
   "Sonolência excessiva, FR baixa, confusão"
  ],
  [
   "Comportamentos durante o sono (sono REM)",
   "No turno da noite",
   "Agitação com risco de queda ou lesão"
  ],
  [
   "Qualidade do sono e pernas inquietas",
   "No turno da noite",
   "Insónia persistente, sonolência diurna excessiva, sintomas mais cedo no dia ou a alastrar"
  ]
 ],
 "neuropatias": [
  [
   "Contagem numa só expiração (cerca de 2 números por segundo), força da tosse e capacidade vital",
   "Conforme prescrição. Na fase de progressão, de 2 em 2 a 4 em 4 h",
   "Contagem abaixo de 20 ou a descer, capacidade vital abaixo de 20 mL/kg ou queda acima de 30%, tosse fraca, respiração paradoxal"
  ],
  [
   "Força cervical, face e deglutição",
   "Com a vigilância respiratória",
   "Fraqueza cervical ou facial bilateral, disfagia"
  ],
  [
   "Ritmo cardíaco e TA",
   "Monitorização cardíaca contínua no Guillain-Barré, ou conforme prescrição",
   "Arritmias, oscilações extremas da TA"
  ],
  [
   "Força (MRC)",
   "Várias vezes por dia na fase de agravamento, ou conforme prescrição",
   "Fraqueza a progredir"
  ],
  [
   "Pés (pele, feridas, temperatura)",
   "Diária",
   "Feridas, queimaduras"
  ],
  [
   "Bexiga e intestino",
   "Uma vez por turno",
   "Retenção urinária, distensão abdominal (íleo)"
  ]
 ],
 "miastenia": [
  [
   "Contagem numa só expiração (cerca de 2 números por segundo), ptose, voz e força cervical",
   "Pelo menos de 4 em 4 h e sempre que haja queixas, ou conforme prescrição",
   "Contagem abaixo de 20 ou a descer, voz anasalada ou a apagar-se, não levanta a cabeça da almofada"
  ],
  [
   "FR, SpO2 e padrão respiratório",
   "Pelo menos de 4 em 4 h, ou conforme prescrição",
   "Dispneia sobretudo deitado, uso de músculos acessórios (a SpO2 baixa é sinal tardio)"
  ],
  [
   "Deglutição",
   "Antes de cada refeição e da medicação",
   "Disfagia nova, tosse fraca"
  ],
  [
   "Capacidade vital",
   "Conforme prescrição",
   "Abaixo de 20 mL/kg ou queda acima de 30%"
  ],
  [
   "Hora da piridostigmina e efeitos colinérgicos",
   "Em cada toma",
   "Dose atrasada, secreções abundantes, sudação, cólicas, diarreia, bradicardia"
  ],
  [
   "Fármacos novos e início de corticoide",
   "Antes de cada fármaco novo. Reforçar a vigilância nos primeiros dias de corticoide",
   "Fármaco da lista a evitar, agravamento da fraqueza"
  ]
 ],
 "urgencias": [
  [
   "Via aérea, Glasgow, pupilas e glicemia capilar",
   "À chegada e de 15 em 15 min até estabilizar, ou conforme prescrição",
   "Glasgow 8 ou menos, anisocoria, via aérea em risco, hipoglicemia"
  ],
  [
   "TA, FC, FR e SpO2",
   "De 15 em 15 min até estabilizar, ou conforme prescrição",
   "Bradicardia com hipertensão, hipotensão, SpO2 a descer"
  ],
  [
   "Crises",
   "Cronometrar cada crise desde o início",
   "5 min ou mais, crises repetidas sem recuperação"
  ],
  [
   "Força, nível sensitivo e micção",
   "Uma vez por turno. De imediato se dor dorsal ou lombar nova",
   "Fraqueza nova, nível sensitivo, retenção urinária, anestesia em sela"
  ],
  [
   "Contagem numa só expiração (cerca de 2 números por segundo) nas doenças neuromusculares",
   "De 2 em 2 a 4 em 4 h, ou conforme prescrição",
   "Abaixo de 20 ou a descer"
  ],
  [
   "Temperatura, rigidez, clónus e consciência sob antipsicóticos ou serotoninérgicos",
   "Uma vez por turno, ou conforme prescrição",
   "Febre com rigidez ou clónus e alteração da consciência"
  ]
 ],
 "sistemicas": [
  [
   "Glicemia capilar",
   "Perante qualquer alteração neurológica, ou conforme prescrição",
   "Hipoglicemia"
  ],
  [
   "Consciência, comportamento e asterixis",
   "Uma vez por turno, ou conforme prescrição",
   "Confusão nova, sonolência, inversão sono-vigília"
  ],
  [
   "Sódio e diurese durante a correção de hiponatremia",
   "Conforme prescrição",
   "Subida acima de 10 mmol/L nas primeiras 24 h ou de 8 mmol/L nas 24 h seguintes, aumento súbito de urina clara e abundante"
  ],
  [
   "Abstinência alcoólica (instrumento do serviço)",
   "Conforme protocolo",
   "Pontuação a subir, alucinações, instabilidade autonómica"
  ],
  [
   "Movimentos oculares, marcha e orientação nos doentes de risco de Wernicke",
   "Na admissão e uma vez por turno",
   "Nistagmo, ataxia ou confusão (comunicar para tiamina EV)"
  ]
 ],
 "disfagia": [
  [
   "Rastreio da deglutição (ex.: GUSS)",
   "Antes de qualquer ingestão oral. Repetir se houver alteração neurológica e antes de evoluir a consistência",
   "Não passa no rastreio"
  ],
  [
   "Tosse, engasgamento e voz molhada",
   "Em cada refeição, com supervisão conforme o risco",
   "Qualquer sinal durante ou após a refeição"
  ],
  [
   "Temperatura, FR, SpO2 e secreções",
   "Uma vez por turno, ou conforme prescrição",
   "Febre, taquipneia, dessaturação, aumento de secreções"
  ],
  [
   "Ingestão de alimentos e líquidos",
   "Em cada refeição. Balanço hídrico nos doentes com líquidos espessados",
   "Ingestão abaixo de cerca de metade das necessidades durante vários dias, sinais de desidratação"
  ],
  [
   "Peso",
   "Na admissão e semanalmente",
   "Perda de peso"
  ],
  [
   "SNG e PEG: posição, comprimento externo e estoma",
   "SNG antes de cada utilização. Estoma diário",
   "Posição não confirmada, comprimento alterado, saída da PEG, extravasamento ou sinais de infeção"
  ]
 ],
 "linguagem": [
  [
   "Compreensão, expressão, nomeação, repetição e articulação",
   "Na admissão. No AVC agudo, com a vigilância neurológica, nunca menos de uma vez por turno",
   "Alteração súbita, agravamento, alteração transitória que recuperou"
  ],
  [
   "Fiabilidade do sim/não",
   "Na admissão e uma vez por turno",
   "Deixa de ser fiável"
  ],
  [
   "Uso da campainha",
   "Uma vez por turno",
   "Não a usa de forma fiável (planear rondas e reforçar prevenção de quedas)"
  ],
  [
   "Dor com escala adaptada",
   "Uma vez por turno",
   "Dor presente ou a aumentar"
  ],
  [
   "Deglutição",
   "Antes de qualquer via oral",
   "Não compreende ou não executa o rastreio (manter via oral suspensa)"
  ],
  [
   "Voz, deglutição e respiração (miastenia, Guillain-Barré)",
   "Uma vez por turno, ou conforme prescrição",
   "Voz fraca com disfagia ou dificuldade respiratória"
  ]
 ],
 "seguranca": [
  [
   "Risco de queda (Morse)",
   "Na admissão e após alteração clínica, transferência ou queda",
   "Risco elevado. Negligência ou impulsividade são alto risco mesmo com pontuação baixa"
  ],
  [
   "Risco de úlcera por pressão (Braden)",
   "Nas primeiras 6 h após a admissão e conforme protocolo, ou se a situação mudar",
   "Risco elevado ou agravamento"
  ],
  [
   "Pele (proeminências ósseas e sob dispositivos)",
   "Diária e em cada reposicionamento",
   "Rubor que não desaparece, lesão"
  ],
  [
   "Glasgow, pupilas, força e sinais vitais após queda",
   "Com traumatismo craniano, queda não presenciada ou anticoagulado: de 30 em 30 min até ao valor de base, depois 30 em 30 min 2 h, de hora a hora 4 h e de 2 em 2 h até às 24 h. Queda presenciada sem traumatismo nem anticoagulação: ao fim de 1 h e por turno durante 24 h",
   "Queda de 1 ponto no Glasgow mantida 30 min, de 2 na motora ou de 3 na ocular ou verbal, agitação, cefaleia, vómitos, anisocoria, nova assimetria, crise"
  ],
  [
   "Contenção física: respiração, perfusão e pele distal, hidratação, eliminação, necessidade",
   "Com a periodicidade definida no protocolo",
   "Cianose, palidez, edema ou dor distal, dificuldade respiratória"
  ],
  [
   "TA deitado e de pé",
   "Antes do levante se houver suspeita de hipotensão ortostática",
   "Hipotensão ortostática"
  ]
 ],
 "eliminacao": [
  [
   "Diurese e globo vesical",
   "Uma vez por turno",
   "Globo vesical, micções pequenas e frequentes, agitação sem causa"
  ],
  [
   "Resíduo pós-miccional (ecografia vesical)",
   "Após a micção quando há suspeita de retenção",
   "Valor acima do definido no protocolo"
  ],
  [
   "Necessidade da algália",
   "Diária",
   "Sem indicação documentada, algália dobrada ou obstruída"
  ],
  [
   "Dejeções (frequência e consistência, ex.: Bristol)",
   "Diária",
   "Ausência de dejeções, diarreia num doente obstipado (fecaloma)"
  ],
  [
   "TA na lesão medular a nível de T6 ou acima",
   "Uma vez por turno. Na crise de disreflexia, a cada 2 a 5 min",
   "Subida súbita da TA, cefaleia intensa, rubor e sudação acima da lesão"
  ],
  [
   "Temperatura e aspeto da urina",
   "Uma vez por turno",
   "Febre com confusão, urina turva"
  ]
 ],
 "ela": [
  [
   "Contagem numa só expiração (cerca de 2 números por segundo) e/ou capacidade vital",
   "Conforme prescrição. Por defeito, uma vez por turno",
   "Contagem abaixo de 20 ou tendência a descer"
  ],
  [
   "Sinais de hipoventilação",
   "Uma vez por turno",
   "Ortopneia, cefaleia matinal, sonolência ou confusão nova, respiração paradoxal"
  ],
  [
   "SpO2 e FR",
   "Uma vez por turno. Mais vezes se houver infeção respiratória",
   "SpO2 fora do alvo prescrito, FR a subir, dispneia em repouso"
  ],
  [
   "VNI: máscara, fugas e pele do nariz",
   "Em cada ronda",
   "Alarme de desconexão, grande fuga, intolerância súbita, lesão do dorso do nariz"
  ],
  [
   "Traqueostomia: pressão do cuff, estoma e permeabilidade da cânula",
   "Cuff conforme protocolo. Estoma uma vez por turno",
   "Cuff fora de 20 a 30 cmH2O, cânula deslocada ou obstruída, hemorragia"
  ],
  [
   "Peso e deglutição",
   "Peso semanal. Deglutição em cada refeição",
   "Perda de peso, engasgamento"
  ]
 ],
 "ataxias": [
  [
   "Equilíbrio e marcha",
   "Na admissão e uma vez por turno",
   "Agravamento, queda"
  ],
  [
   "Consciência, cefaleia, vómitos e vertigem",
   "Uma vez por turno, ou conforme prescrição",
   "Ataxia súbita com cefaleia, vómitos, vertigem ou alteração da consciência"
  ],
  [
   "Deglutição",
   "Antes da via oral e em cada refeição",
   "Engasgamento frequente, febre, dessaturação"
  ],
  [
   "Peso",
   "Semanal",
   "Perda de peso"
  ],
  [
   "Orientação e movimentos oculares nos doentes de risco (álcool, desnutrição, vómitos)",
   "Na admissão e uma vez por turno",
   "Confusão com alteração dos movimentos oculares (possível Wernicke)"
  ]
 ],
 "ame": [
  [
   "Contagem numa só expiração (cerca de 2 números por segundo) e força da tosse",
   "Uma vez por turno, ou conforme prescrição",
   "Contagem abaixo de 20 ou a descer, tosse ineficaz, dispneia"
  ],
  [
   "Sinais de hipoventilação noturna",
   "No turno da noite",
   "Cefaleia matinal, sonolência diurna"
  ],
  [
   "Análises antes do nusinersen (plaquetas, coagulação, proteínas na urina)",
   "Antes de cada administração",
   "Resultados alterados (comunicar antes do procedimento)"
  ],
  [
   "Local de punção, cefaleia, dor lombar, força e sensibilidade das pernas, micção",
   "Pelo menos de 4 em 4 h nas primeiras 24 h após a punção, ou conforme protocolo",
   "Cefaleia intensa, febre, dor lombar crescente, défice novo nas pernas"
  ],
  [
   "Consciência",
   "Uma vez por turno",
   "Sonolência ou alteração da consciência"
  ],
  [
   "Deglutição e pele",
   "Deglutição em cada refeição. Pele em cada reposicionamento",
   "Engasgamento, rubor que não desaparece"
  ]
 ],
 "botulismo": [
  [
   "Contagem numa só expiração (cerca de 2 números por segundo), força da tosse e força cervical",
   "De 2 em 2 a 4 em 4 h na fase de progressão, ou conforme prescrição",
   "Contagem abaixo de 20 ou a descer, tosse ineficaz, fraqueza cervical crescente"
  ],
  [
   "FR, SpO2, padrão respiratório e capacidade vital",
   "Com a contagem. Capacidade vital conforme prescrição",
   "Dispneia, respiração paradoxal, capacidade vital a descer"
  ],
  [
   "Pares cranianos: ptose, pupilas, voz e deglutição",
   "Uma vez por turno, ou conforme prescrição",
   "Progressão descendente, voz fraca, disfagia nova"
  ],
  [
   "Sinais vitais e pele durante a antitoxina",
   "Antes, durante e após a perfusão, conforme protocolo",
   "Urticária, broncospasmo, hipotensão"
  ],
  [
   "Diurese, dejeções e TA deitado e de pé",
   "Uma vez por turno",
   "Retenção urinária, obstipação, hipotensão ortostática"
  ],
  [
   "Olhos",
   "Uma vez por turno",
   "Encerramento palpebral incompleto, olho vermelho"
  ]
 ],
 "distrofia-miotonica": [
  [
   "FC, ritmo e ECG",
   "FC uma vez por turno. Monitorização e ECG conforme prescrição",
   "Bradicardia, palpitações, síncope, tonturas, nova alteração no ECG"
  ],
  [
   "FR, SpO2 e sonolência",
   "Uma vez por turno, ou conforme prescrição",
   "FR baixa, SpO2 fora do alvo, sonolência excessiva, cefaleia matinal, confusão"
  ],
  [
   "FR, SpO2 e sonolência após sedação, opioide ou anestesia",
   "De hora a hora nas primeiras horas e durante mais tempo do que o habitual, ou conforme prescrição",
   "Não desperta, FR baixa, SpO2 a descer"
  ],
  [
   "Glicemia",
   "Diária, ou conforme prescrição",
   "Hiperglicemia"
  ],
  [
   "Deglutição",
   "Antes da via oral e em cada refeição",
   "Engasgamento, tosse, voz molhada"
  ]
 ],
 "dcj": [
  [
   "Mioclonias, agitação e dor (PAINAD)",
   "Uma vez por turno",
   "Aumento das mioclonias, dor ou agitação não controladas"
  ],
  [
   "Deglutição e secreções",
   "Em cada refeição",
   "Engasgamento, secreções acumuladas"
  ],
  [
   "Pele (Braden), boca e olhos",
   "Diária. Braden conforme protocolo",
   "Lesão por pressão, lesões da boca ou da córnea"
  ],
  [
   "Procedimentos invasivos programados",
   "Antes de cada procedimento",
   "CCI ou esterilização não avisadas (não avançar)"
  ],
  [
   "Exposição de profissionais a tecido de alto risco",
   "Em cada procedimento",
   "Picada ou salpico (lavar e comunicar de imediato)"
  ]
 ],
 "huntington": [
  [
   "Peso e ingestão",
   "Peso semanal. Ingestão em cada refeição",
   "Perda de peso rápida, ingestão insuficiente"
  ],
  [
   "Deglutição",
   "Supervisão em cada refeição",
   "Engasgamento frequente, febre"
  ],
  [
   "Humor e ideação suicida",
   "Uma vez por turno",
   "Ideação ou comportamento suicida (não deixar sozinho)"
  ],
  [
   "Lesões por coreia e quedas",
   "Uma vez por turno",
   "Lesões, quedas"
  ],
  [
   "Temperatura, rigidez e consciência ao iniciar ou ajustar antipsicóticos",
   "Uma vez por turno, ou conforme prescrição",
   "Febre, rigidez nova, sonolência excessiva"
  ]
 ],
 "lyme": [
  [
   "Dor radicular (escala)",
   "Uma vez por turno e sobretudo à noite",
   "Dor não controlada"
  ],
  [
   "FC e ECG se houver suspeita de cardite",
   "FC uma vez por turno. Monitorização conforme prescrição",
   "Bradicardia, tonturas, síncope, bloqueio no ECG"
  ],
  [
   "Força (MRC), consciência e rigidez da nuca",
   "Uma vez por turno, ou conforme prescrição",
   "Fraqueza progressiva, alteração da consciência, rigidez da nuca marcada"
  ],
  [
   "Olho na paralisia facial",
   "Uma vez por turno",
   "Olho vermelho ou doloroso"
  ],
  [
   "Temperatura e tolerância ao antibiótico",
   "Uma vez por turno",
   "Febre e mal-estar no início do antibiótico, erupção, diarreia"
  ]
 ],
 "autoimunes": [
  [
   "Sinais vitais durante imunoglobulina EV",
   "Antes, em cada aumento de ritmo e no fim, conforme protocolo",
   "Febre, arrepios, rubor, hipotensão, dispneia"
  ],
  [
   "Cefaleia, défice novo, membros e diurese após imunoglobulina",
   "Uma vez por turno até 2 a 3 dias depois",
   "Cefaleia intensa com rigidez da nuca, sinais de trombose, urina escura, diurese baixa"
  ],
  [
   "TA, sinais de hipocalcemia e hemorragia na plasmaférese",
   "Durante e após cada sessão",
   "Hipotensão, formigueiros à volta da boca e dedos, cãibras, tetania, hemorragia"
  ],
  [
   "Glicemia, TA e humor sob corticoides",
   "Glicemia conforme prescrição. TA e humor uma vez por turno",
   "Hiperglicemia, TA elevada, alteração do humor ou do sono"
  ],
  [
   "Temperatura e sinais de infeção",
   "Uma vez por turno",
   "Febre ou sinais de infeção, mesmo sem febre sob tocilizumab ou corticoides"
  ],
  [
   "Febre, cefaleia e exantema sob inibidor do complemento",
   "Uma vez por turno",
   "Qualquer destes sinais, mesmo se vacinado"
  ]
 ],
 "encefalite-autoimune": [
  [
   "Consciência, comportamento, crises e movimentos anómalos",
   "Uma vez por turno e em cada episódio (hora, duração, descrição)",
   "Crises repetidas, estado de mal, diminuição da consciência"
  ],
  [
   "FC, TA, temperatura, FR e SpO2",
   "De 4 em 4 h, ou conforme prescrição. Contínua se instável",
   "Bradicardia ou pausas, oscilações extremas da TA ou da temperatura, hipoventilação"
  ],
  [
   "Balanço hídrico e natremia (anti-LGI1)",
   "Balanço por turno. Sódio conforme prescrição",
   "Sódio a descer"
  ],
  [
   "Temperatura, rigidez e CK se houver antipsicótico",
   "Uma vez por turno. CK conforme prescrição",
   "Febre, rigidez, CK a subir"
  ],
  [
   "Segurança na agitação",
   "Vigilância próxima",
   "Risco de lesão ou de arrancar dispositivos"
  ]
 ],
 "encefalopatia-hepatica": [
  [
   "Grau de encefalopatia, consciência e asterixis",
   "Uma vez por turno",
   "Agravamento do grau, sobretudo para III ou IV"
  ],
  [
   "Dejeções (número e consistência)",
   "Diária",
   "Menos de 2 por dia ou diarreia excessiva"
  ],
  [
   "Glicemia capilar",
   "Uma vez por turno, ou conforme prescrição",
   "Hipoglicemia"
  ],
  [
   "Balanço hídrico, peso e perímetro abdominal",
   "Balanço por turno. Peso diário",
   "Desidratação, aumento da ascite"
  ],
  [
   "TA, FC, temperatura e aspeto das fezes e vómitos",
   "Uma vez por turno, ou conforme prescrição",
   "Melenas, hematemeses, hipotensão, taquicardia, febre, dor abdominal"
  ],
  [
   "Pupilas e défice focal",
   "Uma vez por turno",
   "Assimetria pupilar ou défice focal"
  ]
 ],
 "dnm": [
  [
   "Contagem numa só expiração (cerca de 2 números por segundo) ou capacidade vital",
   "Conforme prescrição. Por defeito, uma vez por turno",
   "Contagem abaixo de 20 ou a descer"
  ],
  [
   "Sinais de hipoventilação",
   "Uma vez por turno",
   "Ortopneia, sono fragmentado, cefaleia matinal, sonolência ou confusão nova"
  ],
  [
   "SpO2 e padrão respiratório",
   "Uma vez por turno, ou conforme prescrição",
   "SpO2 fora do alvo prescrito, dispneia em repouso, respiração paradoxal"
  ],
  [
   "Deglutição, sialorreia e peso",
   "Deglutição em cada refeição. Peso semanal",
   "Engasgamento, secreções acumuladas, perda de peso"
  ],
  [
   "Temperatura sob riluzol",
   "Uma vez por turno",
   "Febre ou sinais de infeção"
  ]
 ],
 "hpn": [
  [
   "Marcha com o mesmo método (ex.: 10 m ou Timed Up and Go)",
   "Antes do tap test e nas horas seguintes, conforme protocolo",
   "Registar sempre e comunicar o resultado ao médico"
  ],
  [
   "Local de punção, cefaleia, dor lombar, força das pernas e micção",
   "Pelo menos de 4 em 4 h nas primeiras 24 h após a punção, ou conforme protocolo",
   "Dor lombar crescente, fraqueza ou dormência das pernas, retenção urinária"
  ],
  [
   "Glasgow, pupilas e sinais vitais após DVP",
   "Conforme protocolo pós-operatório, nunca menos de uma vez por turno",
   "Cefaleia, vómitos, sonolência, regressão dos sintomas, défice novo"
  ],
  [
   "Cefaleia em pé",
   "Em cada levante",
   "Cefaleia que agrava em pé"
  ],
  [
   "Ferida, trajeto do cateter e temperatura",
   "Uma vez por turno",
   "Rubor, febre, dor abdominal"
  ]
 ],
 "hii": [
  [
   "Acuidade visual e perdas transitórias de visão",
   "Uma vez por turno, ou conforme prescrição",
   "Diminuição da visão, perdas transitórias mais frequentes"
  ],
  [
   "Cefaleia (escala) e vómitos",
   "Uma vez por turno",
   "Cefaleia muito intensa e progressiva, vómitos repetidos"
  ],
  [
   "Glasgow",
   "Uma vez por turno, ou conforme prescrição",
   "Qualquer descida"
  ],
  [
   "Potássio e queixas sob acetazolamida",
   "Potássio conforme prescrição. Queixas uma vez por turno",
   "Dor lombar, sangue na urina, potássio baixo"
  ],
  [
   "Local de punção e cefaleia após punção lombar",
   "Pelo menos de 4 em 4 h nas primeiras 24 h, ou conforme protocolo",
   "Dor lombar crescente, cefaleia em pé, febre, fraqueza das pernas"
  ]
 ],
 "imunodeprimido": [
  [
   "Glasgow, pupilas e défice focal",
   "Uma vez por turno, ou conforme prescrição. Mais vezes se houver sinais de hipertensão intracraniana",
   "Agravamento, défice novo, agravamento após iniciar antirretrovirais"
  ],
  [
   "Cefaleia, vómitos e visão",
   "Uma vez por turno",
   "Cefaleia progressiva, vómitos, alteração visual"
  ],
  [
   "Temperatura e sinais vitais",
   "Uma vez por turno. Mais vezes nas primeiras horas de penicilina",
   "Febre, arrepios, mal-estar (possível reação de Jarisch-Herxheimer)"
  ],
  [
   "Hora dos antimicrobianos e antirretrovirais",
   "Em cada toma",
   "Dose atrasada ou omitida, interação suspeita"
  ],
  [
   "Crises",
   "Vigilância contínua",
   "Crise, 5 min ou mais, ou sem recuperar entre crises"
  ]
 ],
 "mielopatias": [
  [
   "Força dos 4 membros e nível sensitivo (marcado na pele)",
   "De 4 em 4 h na fase aguda, ou conforme prescrição",
   "Subida do nível sensitivo, fraqueza nova, fraqueza dos braços"
  ],
  [
   "Contagem numa só expiração (cerca de 2 números por segundo) e SpO2 nas lesões cervicais altas",
   "De 2 em 2 a 4 em 4 h, ou conforme prescrição",
   "Contagem abaixo de 20 ou a descer, dificuldade respiratória"
  ],
  [
   "Bexiga (globo vesical, resíduo, algália)",
   "Uma vez por turno",
   "Retenção urinária nova, algália dobrada ou obstruída"
  ],
  [
   "TA e FC nas lesões a nível de T6 ou acima",
   "Uma vez por turno. Na disreflexia, a cada 2 a 5 min",
   "TA muito elevada, cefaleia intensa, rubor e sudação acima da lesão, bradicardia"
  ],
  [
   "Pele",
   "Em cada reposicionamento",
   "Rubor que não desaparece, lesão"
  ],
  [
   "Dejeções",
   "Diária",
   "Ausência de dejeções, distensão abdominal"
  ]
 ],
 "neurossarcoidose": [
  [
   "Nervos cranianos e visão",
   "Uma vez por turno, ou conforme prescrição",
   "Nova paralisia facial, olho vermelho ou doloroso, visão turva"
  ],
  [
   "Diurese, balanço hídrico, sede e peso",
   "Balanço por turno. Peso diário",
   "Diurese muito abundante com sede intensa, sobretudo se não consegue beber"
  ],
  [
   "Natremia e densidade urinária",
   "Conforme prescrição",
   "Sódio alto, ou baixo sob desmopressina"
  ],
  [
   "Cefaleia, vómitos e consciência",
   "Uma vez por turno",
   "Cefaleia progressiva, vómitos, sonolência"
  ],
  [
   "FC e ECG",
   "FC uma vez por turno. Monitorização conforme prescrição",
   "Síncope, palpitações, bradicardia"
  ],
  [
   "Temperatura, TA e glicemia",
   "Uma vez por turno, ou conforme prescrição",
   "Febre, hipotensão, vómitos, hipoglicemia"
  ]
 ],
 "trigemio": [
  [
   "Dor (escala) e desencadeantes",
   "Uma vez por turno e antes das refeições",
   "Dor não controlada ou que impede comer"
  ],
  [
   "Ingestão, hidratação e peso",
   "Em cada refeição. Peso semanal",
   "Deixa de comer ou beber, perda de peso"
  ],
  [
   "Pele e mucosas após iniciar o fármaco",
   "Diária",
   "Erupção cutânea, febre, lesões das mucosas"
  ],
  [
   "Consciência e equilíbrio",
   "Uma vez por turno",
   "Confusão, sonolência, náuseas, tonturas, desequilíbrio"
  ],
  [
   "Sódio",
   "Conforme prescrição",
   "Sódio baixo"
  ],
  [
   "Sensibilidade da face e humor",
   "Uma vez por turno",
   "Défice sensitivo persistente, tristeza ou isolamento"
  ]
 ],
 "bell": [
  [
   "Olho afetado (encerramento, rubor, dor, visão)",
   "Uma vez por turno",
   "Olho vermelho, doloroso ou com diminuição da visão"
  ],
  [
   "Força da face (incluindo a testa) e outros défices",
   "Na admissão e uma vez por turno",
   "Testa poupada, fraqueza dos membros, alteração da fala"
  ],
  [
   "Glicemia e TA sob corticoide em diabéticos ou hipertensos",
   "Conforme prescrição",
   "Hiperglicemia, TA elevada"
  ],
  [
   "Boca após as refeições",
   "Após cada refeição",
   "Restos alimentares na bochecha afetada"
  ],
  [
   "Ouvido, audição e equilíbrio",
   "Na admissão e uma vez por turno",
   "Vesículas no ouvido, dor intensa, hipoacusia, vertigem"
  ]
 ],
 "paf": [
  [
   "TA deitado e de pé",
   "Diária e antes do primeiro levante, ou conforme prescrição",
   "Hipotensão ortostática, síncope"
  ],
  [
   "FC e ECG",
   "FC uma vez por turno. ECG conforme prescrição",
   "Bradicardia, síncope, nova alteração no ECG"
  ],
  [
   "Pés e mãos (pele, feridas, queimaduras)",
   "Diária",
   "Feridas, queimaduras"
  ],
  [
   "Peso, dejeções e diurese",
   "Peso semanal. Dejeções diárias. Diurese uma vez por turno",
   "Perda de peso rápida, diarreia com desidratação, retenção urinária"
  ],
  [
   "Sinais vitais durante a perfusão de silenciador génico",
   "Durante a perfusão, conforme protocolo",
   "Rubor, dispneia, dor torácica, hipotensão"
  ]
 ],
 "parkinsonismos-atipicos": [
  [
   "TA deitado e de pé",
   "Diária e antes do primeiro levante, ou conforme prescrição",
   "Hipotensão ortostática, síncope"
  ],
  [
   "Respiração noturna",
   "No turno da noite",
   "Estridor (ruído agudo na inspiração)"
  ],
  [
   "Deglutição e sinais de aspiração",
   "Antes da via oral e em cada refeição",
   "Engasgamento, febre, dessaturação"
  ],
  [
   "Resíduo pós-miccional e dejeções",
   "Resíduo se houver suspeita de retenção. Dejeções diárias",
   "Retenção urinária, obstipação"
  ],
  [
   "Risco de queda (Morse)",
   "Na admissão e após alteração clínica ou queda",
   "Queda ou risco elevado"
  ],
  [
   "Prescrição de antipsicóticos, metoclopramida ou prometazina",
   "Antes de cada fármaco novo",
   "Fármaco a evitar prescrito"
  ]
 ],
 "pres": [
  [
   "TA",
   "Com a frequência prescrita. Por defeito, de hora a hora até atingir o alvo",
   "TA fora do alvo prescrito, descida brusca"
  ],
  [
   "Glasgow e comportamento",
   "De hora a hora na fase aguda, ou conforme prescrição",
   "Diminuição da consciência, confusão"
  ],
  [
   "Visão de cada olho",
   "Uma vez por turno e sempre que haja queixas",
   "Perda súbita de visão"
  ],
  [
   "Crises",
   "Vigilância contínua",
   "Crises repetidas"
  ],
  [
   "Reflexos, FR e diurese sob sulfato de magnésio",
   "Conforme protocolo. Por defeito, de hora a hora",
   "Depressão respiratória, reflexos abolidos, oligúria"
  ]
 ],
 "tvc": [
  [
   "Glasgow, pupilas, défice focal e visão",
   "De 4 em 4 h na fase aguda, ou conforme prescrição",
   "Diminuição da consciência, défice novo, alteração visual"
  ],
  [
   "Cefaleia (escala) e vómitos",
   "Uma vez por turno e sempre que haja queixas",
   "Agravamento da cefaleia, vómitos"
  ],
  [
   "Sinais de hemorragia (gengivas, urina, fezes, locais de punção)",
   "Uma vez por turno",
   "Qualquer hemorragia"
  ],
  [
   "Controlo analítico da anticoagulação",
   "Conforme prescrição",
   "Fora do intervalo prescrito"
  ],
  [
   "Crises",
   "Vigilância contínua",
   "Crises repetidas, 5 min ou mais"
  ],
  [
   "Hidratação",
   "Balanço por turno",
   "Ingestão insuficiente"
  ]
 ],
 "tumores": [
  [
   "Glasgow, pupilas e défice focal",
   "Uma vez por turno, ou conforme prescrição. Após craniotomia, conforme protocolo pós-operatório",
   "Queda da consciência, nova anisocoria, agravamento do défice, Glasgow 8 ou menos"
  ],
  [
   "Glicemia, TA, boca e humor sob corticoides",
   "Glicemia conforme prescrição. TA e boca uma vez por turno",
   "Hiperglicemia, TA elevada, candidíase oral, agitação, insónia"
  ],
  [
   "Penso, ferida e temperatura após cirurgia",
   "Uma vez por turno",
   "Saída de líquido claro, febre, rigidez da nuca"
  ],
  [
   "Balanço hídrico, densidade urinária e natremia após cirurgia hipofisária ou suprasselar",
   "Balanço por turno, ou de hora a hora se prescrito. Sódio conforme prescrição",
   "Diurese muito abundante com sede, confusão com sódio baixo"
  ],
  [
   "Crises",
   "Vigilância contínua",
   "Crises repetidas, 5 min ou mais"
  ],
  [
   "Pernas (TVP)",
   "Diária",
   "Dor, calor ou edema de uma perna"
  ]
 ],
 "vasculites": [
  [
   "Glasgow, pupilas, força (MRC) e linguagem",
   "Na admissão e com a frequência prescrita, pelo menos uma vez por turno",
   "Défice novo, queda da Glasgow, crise"
  ],
  [
   "Visão de cada olho (arterite de células gigantes)",
   "Na admissão e pelo menos uma vez por turno. De 4 em 4 h nas primeiras 48 a 72 h se houve sintomas visuais, ou conforme prescrição",
   "Perda, turvação ou falhas de visão, visão dupla"
  ],
  [
   "Cefaleia (escala numérica ou PAINAD)",
   "Uma vez por turno e após a analgesia",
   "Cefaleia súbita e muito intensa, mudança de padrão"
  ],
  [
   "Temperatura e sinais vitais",
   "Pelo menos uma vez por turno",
   "Febre, arrepios, taquicardia, hipotensão, confusão nova (ou só mal-estar sob tocilizumab ou corticoide)"
  ],
  [
   "Glicemia capilar sob corticoide",
   "Antes do almoço e do jantar, conforme prescrição",
   "Hiperglicemia"
  ],
  [
   "Urina e balanço hídrico sob ciclofosfamida",
   "Uma vez por turno",
   "Hematúria, ardor ao urinar, retenção"
  ]
 ],
 "angiopatia-amiloide": [
  [
   "Défice focal, Glasgow e pupilas",
   "Na hemorragia aguda, como na hemorragia intracerebral (de hora a hora, segundo protocolo). Depois, pelo menos uma vez por turno",
   "Défice novo (mesmo igual a episódios anteriores), sonolência"
  ],
  [
   "TA",
   "Com a frequência prescrita. Deitado e de pé antes do primeiro levante quando se reforçam anti-hipertensores",
   "TA acima do alvo prescrito, hipotensão, tonturas ao levantar"
  ],
  [
   "Cefaleia, vómitos e crises",
   "Uma vez por turno",
   "Cefaleia súbita e intensa, vómitos, crise"
  ],
  [
   "Cognição e comportamento face ao habitual",
   "Uma vez por turno",
   "Confusão ou alteração do comportamento de novo"
  ],
  [
   "Antitrombóticos em curso",
   "Na admissão e em cada reconciliação terapêutica",
   "Antitrombótico sem decisão médica registada"
  ],
  [
   "Avaliação neurológica após queda",
   "Segundo o protocolo pós-queda",
   "Qualquer queda (comunicar sempre)"
  ]
 ],
 "avc-isquemico": [
  [
   "NIHSS, Glasgow e pupilas após trombólise",
   "De 15 em 15 min nas primeiras 2 h, de 30 em 30 min nas 6 h seguintes e de hora a hora até às 24 h (confirmar protocolo local)",
   "Aumento do NIHSS, queda da consciência, défice novo"
  ],
  [
   "TA",
   "Com a avaliação neurológica após reperfusão, ou conforme prescrição",
   "Com reperfusão, acima de 180/105 mmHg. Sem reperfusão, acima de 220/120 mmHg. Hipotensão ou descida brusca"
  ],
  [
   "Sinais de hemorragia e angioedema",
   "Com a avaliação neurológica nas primeiras 24 h",
   "Cefaleia intensa, vómitos, hemorragia ativa, edema da língua ou dos lábios"
  ],
  [
   "Glicemia capilar e temperatura",
   "De 4 em 4 h, ou conforme prescrição",
   "Glicemia fora do alvo prescrito ou hipoglicemia, temperatura acima de 37,5 °C"
  ],
  [
   "SpO2 e ritmo cardíaco",
   "Monitorização contínua nas primeiras 24 a 72 h",
   "SpO2 abaixo de 94%, fibrilhação auricular ou outra arritmia"
  ],
  [
   "Consciência, pupilas e vómitos no enfarte extenso da ACM ou do cerebelo",
   "Pelo menos de 4 em 4 h entre o 2.º e o 5.º dia, ou conforme prescrição",
   "Sonolência crescente, anisocoria, desvio do olhar, vómitos"
  ]
 ],
 "avc-hemorragico": [
  [
   "Glasgow, pupilas, NIHSS e força",
   "Pelo menos de hora a hora nas primeiras 24 a 48 h, segundo o protocolo",
   "Queda do Glasgow de 2 ou mais pontos, anisocoria, défice novo, crise, tríade de Cushing"
  ],
  [
   "TA (sempre no mesmo braço)",
   "De 5 em 5 a 15 em 15 min durante o ajuste da perfusão. Depois de hora a hora, ou conforme prescrição",
   "TA fora do alvo prescrito, descida acima de 70 mmHg face ao valor inicial, hipotensão"
  ],
  [
   "Avaliação neurológica na HSA",
   "De hora a hora na fase aguda. Até ao 21.º dia, nunca com intervalo superior a 4 h",
   "Do 3.º ao 14.º dia, confusão nova, sonolência, afasia, défice novo ou queda de 1 ponto no Glasgow"
  ],
  [
   "TA e FC na HSA",
   "De hora a hora na fase aguda e antes de cada toma de nimodipina",
   "TA abaixo do limite prescrito antes da toma"
  ],
  [
   "Balanço hídrico, peso e sódio",
   "Totais de balanço pelo menos de 4 em 4 h. Peso e sódio pelo menos diários",
   "Diurese acima de 200 mL/h em 2 h seguidas, balanço negativo mantido, oligúria, sódio fora do intervalo ou a descer"
  ],
  [
   "Temperatura",
   "De 4 em 4 h",
   "38 °C ou mais"
  ]
 ],
 "trombectomia": [
  [
   "NIHSS, Glasgow, pupilas e sinais vitais",
   "De 15 em 15 min nas primeiras 2 h, de 30 em 30 min nas 6 h seguintes e de hora a hora até às 24 h",
   "Agravamento neurológico, cefaleia intensa, vómitos, sonolência"
  ],
  [
   "TA",
   "Com os sinais vitais",
   "TA acima do alvo prescrito, PAS abaixo de 140 mmHg após recanalização (salvo prescrição)"
  ],
  [
   "Penso e local de punção",
   "Com a mesma frequência dos sinais vitais",
   "Hemorragia, hematoma que cresce, massa pulsátil ou sopro"
  ],
  [
   "Perfusão do membro puncionado (pulsos distais, cor, temperatura, sensibilidade, mão no acesso radial)",
   "Com a mesma frequência dos sinais vitais",
   "Membro frio, pálido, sem pulso, dormente ou doloroso, antebraço tenso"
  ],
  [
   "Dor lombar ou abdominal, TA e FC (acesso femoral)",
   "Com os sinais vitais",
   "Dor lombar ou abdominal com hipotensão e taquicardia"
  ],
  [
   "Globo vesical e dor durante o repouso no leito",
   "Uma vez por turno e sempre que haja agitação",
   "Retenção urinária, dor, tentativas de fletir a perna"
  ]
 ],
 "territorios-arteriais": [
  [
   "NIHSS e Glasgow",
   "Com a frequência da fase (ver «AVC isquémico»), pelo menos uma vez por turno",
   "Défice novo num território diferente, aumento do NIHSS"
  ],
  [
   "Sinais de circulação posterior (vertigem, diplopia, disartria, disfagia, ataxia, sinais cruzados)",
   "Uma vez por turno. Mais vezes se flutuantes, ou conforme prescrição",
   "Sinais novos ou flutuantes (possível oclusão da basilar)"
  ],
  [
   "Consciência, pupilas e desvio do olhar no enfarte extenso da ACM ou do cerebelo",
   "Pelo menos de 4 em 4 h nos primeiros dias, ou conforme prescrição",
   "Sonolência crescente, anisocoria, desvio do olhar, vómitos"
  ],
  [
   "Deglutição nas lesões do tronco (ex.: Wallenberg)",
   "Rastreio formal antes de qualquer via oral. Depois, em cada refeição",
   "Tosse ao engolir, voz molhada, dessaturação, febre"
  ],
  [
   "Padrão respiratório e secreções (tronco, locked-in)",
   "Uma vez por turno, ou conforme prescrição",
   "Alteração do padrão respiratório, dificuldade em gerir as secreções"
  ]
 ],
 "encefalopatia-wernicke": [
  [
   "Glasgow, orientação, nistagmo ou visão dupla, equilíbrio sentado e marcha",
   "Antes da 1.ª dose de tiamina. Nas primeiras 24 a 48 h, pelo menos de 4 em 4 h. Depois, uma vez por turno",
   "Agravamento ou ausência de melhoria"
  ],
  [
   "Glicemia capilar, temperatura e TA",
   "Com a avaliação neurológica",
   "Hipoglicemia, hipotermia, hipotensão"
  ],
  [
   "Abstinência alcoólica (instrumento do serviço, conforme protocolo)",
   "Na frequência do protocolo, mais vezes se a pontuação subir, durante 5 dias após a última bebida",
   "Pontuação a subir, alucinações, febre, crises"
  ],
  [
   "Sedação, FR e SpO2",
   "Antes de cada dose de benzodiazepina",
   "Sonolento, FR baixa, SpO2 a descer (não administrar)"
  ],
  [
   "Fósforo, potássio, magnésio, peso e balanço hídrico nos doentes com risco de realimentação",
   "Iões diários nos primeiros dias, conforme prescrição. Peso diário",
   "Valores baixos, edemas, dispneia, FC irregular"
  ],
  [
   "Hora e tolerância de cada perfusão de tiamina",
   "Em cada perfusão",
   "Dose atrasada, prurido, urticária, dispneia, edema da face, hipotensão"
  ]
 ],
 "alzheimer": [
  [
   "Atenção, vigília e comportamento face ao habitual",
   "Uma vez por turno",
   "Agravamento súbito (possível delirium)"
  ],
  [
   "Dor (PAINAD)",
   "Uma vez por turno e sempre que haja agitação",
   "Dor presente ou a aumentar"
  ],
  [
   "Ingestão de alimentos e líquidos, peso",
   "Em cada refeição. Peso semanal",
   "Recusa, sinais de desidratação, perda de peso"
  ],
  [
   "Diurese e dejeções",
   "Diurese por turno. Dejeções diárias",
   "Retenção urinária, obstipação"
  ],
  [
   "FC sob inibidor da acetilcolinesterase",
   "Diária, ou conforme prescrição",
   "Bradicardia, síncope"
  ],
  [
   "Cefaleia, confusão, visão e crises sob anticorpo antiamiloide",
   "Uma vez por turno",
   "Qualquer destes sinais (possível ARIA)"
  ]
 ],
 "demencia-vascular": [
  [
   "Face, força, fala e visão",
   "Uma vez por turno, ou conforme prescrição",
   "Défice de início súbito (ativar a Via Verde AVC)"
  ],
  [
   "TA",
   "Uma vez por turno, ou conforme prescrição",
   "TA muito elevada, hipotensão"
  ],
  [
   "Glicemia",
   "Conforme prescrição",
   "Fora do alvo prescrito"
  ],
  [
   "Atenção e vigília",
   "Uma vez por turno",
   "Agravamento súbito da confusão ou da vigília"
  ],
  [
   "Diurese, resíduo pós-miccional e dejeções",
   "Diurese por turno. Dejeções diárias",
   "Retenção urinária, obstipação"
  ],
  [
   "Humor",
   "Diário",
   "Depressão, apatia, labilidade emocional"
  ]
 ],
 "dcl": [
  [
   "Flutuações (horas de maior e menor lucidez)",
   "Uma vez por turno, com registo das horas",
   "Agravamento súbito para além das flutuações habituais"
  ],
  [
   "Alucinações e comportamento durante o sono",
   "Uma vez por turno, incluindo o turno da noite",
   "Alucinações com sofrimento ou risco, agitação noturna com risco de queda"
  ],
  [
   "TA deitado e de pé",
   "Diária e antes do primeiro levante, ou conforme prescrição",
   "Hipotensão ortostática, síncope"
  ],
  [
   "Deglutição",
   "Antes da via oral e em cada refeição",
   "Engasgamento, febre, dessaturação"
  ],
  [
   "Temperatura, rigidez e consciência após qualquer antipsicótico",
   "Uma vez por turno, ou conforme prescrição",
   "Febre, rigidez, sudação, alteração da consciência"
  ],
  [
   "Hora dos antiparkinsónicos",
   "Em cada toma",
   "Dose atrasada ou omitida"
  ]
 ],
 "epilepsia-az": [
  [
   "Crise: hora de início, duração e características",
   "Em cada crise, cronometrar desde o início",
   "5 min ou mais, crises seguidas sem recuperar a consciência"
  ],
  [
   "Glasgow, sinais vitais e SpO2 no pós-crítico",
   "De 15 em 15 min até voltar ao estado basal, ou conforme prescrição",
   "Não recupera a consciência, défice novo que não regride, SpO2 baixa"
  ],
  [
   "Glicemia capilar",
   "Após cada crise",
   "Hipoglicemia"
  ],
  [
   "Hora de cada toma de antiepilético",
   "Em cada toma",
   "Dose atrasada ou omitida, jejum ou disfagia"
  ],
  [
   "Ritmo cardíaco, TA e local da perfusão de fenitoína EV",
   "Contínua durante a perfusão",
   "Bradicardia, arritmia, hipotensão, flebite ou extravasamento"
  ],
  [
   "Efeitos adversos (sonolência, ataxia, humor, pele)",
   "Uma vez por turno",
   "Erupção com febre ou lesões das mucosas, sonolência excessiva, confusão"
  ]
 ],
 "parkinson": [
  [
   "Hora de cada toma de antiparkinsónico",
   "Em cada toma, no horário do doente",
   "Atraso de mais de 15 a 30 min, omissão, jejum ou incapacidade de engolir"
  ],
  [
   "Estado motor (on, off, discinesias, bloqueios)",
   "Ao longo do dia, pelo menos uma vez por turno",
   "Off prolongado, rigidez extrema"
  ],
  [
   "TA deitado e de pé",
   "Diária e antes do primeiro levante, ou conforme prescrição",
   "Hipotensão ortostática, síncope"
  ],
  [
   "Deglutição",
   "Antes da via oral, de preferência em on",
   "Engasgamento, febre, dessaturação"
  ],
  [
   "Temperatura, consciência e rigidez",
   "Uma vez por turno",
   "Febre com rigidez e alteração da consciência, confusão aguda ou alucinações novas"
  ],
  [
   "Dejeções e diurese",
   "Dejeções diárias. Diurese por turno",
   "Obstipação, retenção urinária"
  ]
 ],
 "esclerose-multipla": [
  [
   "Défice neurológico, visão e marcha",
   "Uma vez por turno, ou conforme prescrição",
   "Perda rápida de força, nível sensitivo, perda súbita de visão"
  ],
  [
   "Glicemia, TA, sono e humor durante pulsos de corticoide",
   "Glicemia conforme prescrição. TA e humor uma vez por turno",
   "Hiperglicemia, TA elevada, agitação"
  ],
  [
   "FC, TA e ECG na primeira toma de fingolimod",
   "ECG antes e às 6 h. FC e TA de hora a hora durante 6 h",
   "Bradicardia, hipotensão, alteração no ECG"
  ],
  [
   "Sinais vitais e reações nas perfusões de anticorpos monoclonais",
   "Durante e depois da perfusão, conforme protocolo",
   "Dispneia, urticária, hipotensão, edema da face"
  ],
  [
   "Resíduo pós-miccional, temperatura e queixas urinárias",
   "Uma vez por turno. Resíduo se houver suspeita de retenção",
   "Retenção urinária, febre, ardor ao urinar"
  ],
  [
   "Cognição, comportamento e linguagem sob natalizumab",
   "Uma vez por turno",
   "Alterações progressivas (possível LMP)"
  ]
 ],
 "nmo": [
  [
   "Força, sensibilidade e nível sensitivo",
   "De 4 em 4 h durante o surto, ou conforme prescrição",
   "Perda rápida de força, subida do nível sensitivo"
  ],
  [
   "Contagem numa só expiração (cerca de 2 números por segundo) e SpO2 na mielite cervical",
   "De 4 em 4 h durante o surto, ou conforme prescrição",
   "Contagem abaixo de 20 ou a descer, dificuldade respiratória"
  ],
  [
   "Visão de cada olho",
   "Uma vez por turno",
   "Perda súbita de visão"
  ],
  [
   "Bexiga, intestino, soluços e vómitos",
   "Uma vez por turno. Balanço hídrico se houver vómitos",
   "Retenção urinária, obstipação, soluços ou vómitos incoercíveis"
  ],
  [
   "TA, sinais de hipocalcemia e hemorragia na plasmaférese",
   "Durante e após cada sessão",
   "Hipotensão, formigueiros, cãibras, hemorragia"
  ],
  [
   "Temperatura, cefaleia e rigidez da nuca sob eculizumab ou ravulizumab",
   "Uma vez por turno",
   "Febre, cefaleia, rigidez da nuca, petéquias"
  ]
 ],
 "miastenia-gravis": [
  [
   "Contagem numa só expiração (cerca de 2 números por segundo), FR, SpO2 e padrão respiratório",
   "Pelo menos de 4 em 4 h e sempre que haja queixas, ou mais vezes se prescrito",
   "Contagem abaixo de 20 ou a descer, dispneia, ortopneia, músculos acessórios (a SpO2 baixa é sinal tardio)"
  ],
  [
   "Capacidade vital forçada",
   "Conforme protocolo",
   "Abaixo de 20 mL/kg ou descida acima de 30%"
  ],
  [
   "Ptose, voz e força cervical",
   "Pelo menos de 4 em 4 h, ou conforme prescrição",
   "Voz a apagar-se, não levanta a cabeça da almofada"
  ],
  [
   "Deglutição",
   "Antes de cada refeição e da medicação",
   "Disfagia grave, engasgamento, secreções acumuladas"
  ],
  [
   "Hora da piridostigmina e efeitos colinérgicos",
   "Em cada toma",
   "Dose atrasada, salivação, cólicas, diarreia, bradicardia"
  ],
  [
   "Respiração e deglutição após fármaco novo ou início de corticoide",
   "Reforçar nos primeiros dias, ou conforme prescrição",
   "Qualquer agravamento"
  ]
 ],
 "sgb": [
  [
   "Contagem numa só expiração (cerca de 2 números por segundo), capacidade vital forçada, força da tosse, FR e SpO2",
   "De 2 em 2 a 4 em 4 h na fase de progressão, conforme prescrição",
   "Contagem abaixo de 20 ou a descer, capacidade vital abaixo de 20 mL/kg ou a descer, tosse fraca, ortopneia"
  ],
  [
   "Força (MRC) e deglutição",
   "Várias vezes por dia na fase de agravamento. Por defeito, de 4 em 4 h",
   "Fraqueza a progredir em horas, disfagia, acumulação de secreções"
  ],
  [
   "Ritmo cardíaco e TA",
   "Monitorização cardíaca contínua. TA de 4 em 4 h e nas mudanças de posição, ou conforme prescrição",
   "Arritmias, bradicardia, oscilações acentuadas da TA"
  ],
  [
   "Dor (escala numérica ou comportamental)",
   "Uma vez por turno e após a analgesia",
   "Dor não controlada"
  ],
  [
   "Bexiga e intestino",
   "Uma vez por turno",
   "Retenção urinária, distensão abdominal, ausência de dejeções e gases"
  ],
  [
   "Pernas, pele e respiração (tromboembolismo, imobilidade)",
   "Pernas diária. Pele em cada reposicionamento",
   "Dor ou edema de uma perna, dor torácica, dispneia súbita, rubor que não desaparece"
  ]
 ],
 "delirium": [
  [
   "Rastreio com o instrumento validado do hospital e teste da atenção",
   "Uma vez por turno nos doentes em risco e sempre que mude o comportamento",
   "Rastreio positivo ou mudança aguda (comunicar no próprio turno)"
  ],
  [
   "Nível de consciência (escala do serviço)",
   "Uma vez por turno",
   "Sonolência nova, doente «calmo» que deixou de responder"
  ],
  [
   "Sinais vitais, SpO2 e glicemia capilar",
   "Uma vez por turno durante o episódio, ou conforme prescrição",
   "SpO2 baixa, FR aumentada, febre, glicemia baixa"
  ],
  [
   "Globo vesical e última dejeção",
   "Uma vez por turno",
   "Retenção urinária, obstipação"
  ],
  [
   "Ingestão de alimentos e líquidos",
   "Em cada refeição",
   "Deixou de comer ou beber"
  ],
  [
   "Sedação e medicação de risco (sedativos, anticolinérgicos, antiparkinsónicos)",
   "Antes de cada dose e uma vez por turno",
   "Sedação excessiva, toma de antiparkinsónico falhada"
  ]
 ],
 "funcionais": [
  [
   "Episódio: hora de início e de fim, descrição, SpO2",
   "Em cada episódio, cronometrar",
   "Mais de 5 min, cianose, SpO2 baixa, sem recuperação"
  ],
  [
   "Semelhança com as crises habituais",
   "Em cada episódio",
   "Diagnóstico não confirmado ou episódio diferente do habitual (atuar como crise epilética)"
  ],
  [
   "Défice neurológico face ao padrão conhecido",
   "Uma vez por turno",
   "Défice novo diferente (ex.: assimetria facial, disartria, alteração pupilar)"
  ],
  [
   "Humor, ansiedade e ideação suicida",
   "Uma vez por turno",
   "Ideação suicida, autoagressão, desespero"
  ],
  [
   "Lesões",
   "Após cada episódio",
   "Lesão por queda"
  ]
 ]
};
const ALERTAS_FD = [
 {
  "temas": [
   "parkinson",
   "parkinsonismos-atipicos",
   "dcl",
   "movimento",
   "emergencias-farmacos"
  ],
  "farmacos": [
   "haloperidol",
   "metoclopramida"
  ],
  "texto": "Bloqueiam a dopamina: agravamento motor grave e risco de síndrome neuroléptica maligna; na DCL a reação pode ser grave. Evitar. Pedir alternativa ao médico: domperidona para náuseas; quetiapina ou clozapina para psicose."
 },
 {
  "temas": [
   "parkinson",
   "parkinsonismos-atipicos",
   "dcl",
   "movimento"
  ],
  "farmacos": [
   "tetrabenazina",
   "flunarizina",
   "litio",
   "valproato"
  ],
  "texto": "Podem causar ou agravar parkinsonismo e tremor. Se o quadro motor piorar depois de iniciar um destes fármacos, registar e informar o médico."
 },
 {
  "temas": [
   "parkinson",
   "parkinsonismos-atipicos",
   "dcl",
   "delirium"
  ],
  "farmacos": [
   "quetiapina",
   "clozapina"
  ],
  "texto": "São os antipsicóticos de escolha nestas doenças, mas causam sedação, hipotensão ortostática e quedas. Clozapina: hemograma conforme protocolo; febre ou dor de garganta → avisar o médico já."
 },
 {
  "temas": [
   "parkinson",
   "parkinsonismos-atipicos",
   "disfagia",
   "emergencias-farmacos"
  ],
  "farmacos": [
   "levodopa-carbidopa",
   "levodopa-benserazida",
   "levodopa-gel",
   "foslevodopa",
   "rotigotina",
   "pramipexol",
   "ropinirol",
   "amantadina"
  ],
  "texto": "Não suspender nem atrasar (jejum, disfagia, cirurgia, avaria da bomba): risco de rigidez grave e de síndrome de hiperpirexia-parkinsonismo. Avisar o médico para definir via alternativa (SNG, rotigotina transdérmica)."
 },
 {
  "temas": [
   "parkinson",
   "dcl",
   "demencias",
   "delirium",
   "parkinsonismos-atipicos"
  ],
  "farmacos": [
   "pramipexol",
   "ropinirol",
   "rotigotina",
   "apomorfina",
   "amantadina"
  ],
  "texto": "Alucinações, confusão e perturbações do controlo dos impulsos, sobretudo no idoso ou na demência. A amantadina acumula-se na insuficiência renal. Registar e informar; não suspender abruptamente."
 },
 {
  "temas": [
   "parkinson",
   "emergencias-farmacos"
  ],
  "farmacos": [
   "rasagilina",
   "safinamida",
   "tramadol",
   "duloxetina",
   "amitriptilina",
   "litio"
  ],
  "texto": "IMAO-B com serotoninérgicos: risco de síndrome serotoninérgica (agitação, hipertermia, tremor, mioclonias, clónus). Evitar o tramadol; outras associações só com indicação médica explícita e vigilância."
 },
 {
  "temas": [
   "parkinson",
   "parkinsonismos-atipicos",
   "paf"
  ],
  "farmacos": [
   "midodrina",
   "fludrocortisona"
  ],
  "texto": "Hipertensão em decúbito: última toma de midodrina pelo menos 4 h antes de deitar, cabeceira elevada, TA deitado e de pé. Fludrocortisona: vigiar edemas e potássio."
 },
 {
  "temas": [
   "demencias",
   "alzheimer",
   "demencia-vascular",
   "dcl",
   "delirium",
   "parkinson"
  ],
  "farmacos": [
   "biperideno",
   "triexifenidilo",
   "oxibutinina",
   "amitriptilina"
  ],
  "texto": "Carga anticolinérgica: delirium, retenção urinária, obstipação e quedas; contraria os inibidores da colinesterase. Sugerir revisão ao médico (ex.: mirabegrom na bexiga, glicopirrónio na sialorreia)."
 },
 {
  "temas": [
   "demencias",
   "alzheimer",
   "demencia-vascular",
   "dcl",
   "delirium"
  ],
  "farmacos": [
   "haloperidol",
   "quetiapina"
  ],
  "texto": "Na demência, os antipsicóticos aumentam o risco de AVC e a mortalidade. Usar só em agitação perigosa, depois das medidas não farmacológicas, pelo menor tempo possível e conforme prescrição; reavaliar todos os dias. Na DCL, evitar o haloperidol."
 },
 {
  "temas": [
   "delirium",
   "demencias",
   "alzheimer",
   "dcl",
   "encefalopatia-hepatica"
  ],
  "farmacos": [
   "midazolam",
   "diazepam",
   "lorazepam",
   "clonazepam",
   "zolpidem"
  ],
  "texto": "Agravam a confusão e as quedas e precipitam a encefalopatia hepática. Evitar, exceto na abstinência alcoólica, nas crises epiléticas ou em fim de vida, conforme prescrição."
 },
 {
  "temas": [
   "encefalopatia-hepatica"
  ],
  "farmacos": [
   "morfina",
   "tramadol",
   "gabapentina",
   "pregabalina",
   "ibuprofeno",
   "naproxeno",
   "valproato"
  ],
  "texto": "Opioides e gabapentinoides precipitam encefalopatia; os AINE agravam a função renal e o risco de hemorragia; o valproato causa hiperamoniemia e hepatotoxicidade. Confirmar a indicação com o médico."
 },
 {
  "temas": [
   "encefalopatia-wernicke",
   "encefalopatia-hepatica",
   "delirium"
  ],
  "farmacos": [
   "tiamina",
   "glicose-hipertonica"
  ],
  "texto": "Doente alcoólico ou desnutrido: dar a tiamina antes ou junto com a glicose, porque a glicose sozinha pode precipitar Wernicke. Nunca atrasar a correção da hipoglicemia por isso."
 },
 {
  "temas": [
   "miastenia-gravis",
   "miastenia",
   "botulismo"
  ],
  "farmacos": [
   "ciprofloxacina",
   "sulfato-magnesio",
   "hidroxicloroquina",
   "fenitoina",
   "litio",
   "toxina-botulinica"
  ],
  "texto": "Podem agravar a fraqueza e precipitar crise miasténica. Confirmar com o neurologista antes de administrar; se não houver alternativa, vigiar a contagem respiratória, a deglutição e a voz."
 },
 {
  "temas": [
   "miastenia-gravis",
   "miastenia"
  ],
  "farmacos": [
   "propranolol",
   "labetalol",
   "verapamilo"
  ],
  "texto": "Os bloqueadores beta (também em colírio) e o verapamilo podem agravar a miastenia. Usar só com indicação médica e vigiar força, deglutição e contagem respiratória."
 },
 {
  "temas": [
   "miastenia-gravis",
   "miastenia"
  ],
  "farmacos": [
   "metilprednisolona",
   "prednisolona"
  ],
  "texto": "O corticoide em dose alta pode agravar a miastenia de forma transitória nas primeiras 1 a 2 semanas. Vigiar contagem respiratória, deglutição e fala; se houver agravamento, avisar o médico já."
 },
 {
  "temas": [
   "miastenia-gravis"
  ],
  "farmacos": [
   "piridostigmina"
  ],
  "texto": "O excesso causa crise colinérgica (sialorreia, cólicas, diarreia, fasciculações, fraqueza). Fraqueza súbita: fazer contagem respiratória e chamar o médico. Não dar doses extra sem prescrição."
 },
 {
  "temas": [
   "miastenia-gravis",
   "nmo"
  ],
  "farmacos": [
   "eculizumab",
   "ravulizumab",
   "zilucoplan"
  ],
  "texto": "Risco de infeção meningocócica fulminante: confirmar a vacinação e a profilaxia. Febre, cefaleia ou exantema → urgência médica imediata."
 },
 {
  "temas": [
   "miastenia-gravis",
   "miastenia",
   "sgb",
   "ela",
   "dnm",
   "ame"
  ],
  "farmacos": [
   "midazolam",
   "diazepam",
   "lorazepam",
   "clonazepam",
   "zolpidem",
   "morfina",
   "tramadol",
   "propofol",
   "gabapentina",
   "pregabalina"
  ],
  "texto": "Com fraqueza respiratória há risco de hipoventilação e retenção de CO2. Evitar ou usar só conforme prescrição; vigiar FR, SpO2 e consciência. Em cuidados paliativos (dispneia) o uso é intencional e titulado."
 },
 {
  "temas": [
   "distrofia-miotonica"
  ],
  "farmacos": [
   "midazolam",
   "diazepam",
   "lorazepam",
   "clonazepam",
   "morfina",
   "tramadol",
   "propofol",
   "zolpidem"
  ],
  "texto": "Sensibilidade aumentada: apneia prolongada mesmo com doses baixas, sobretudo depois de anestesia. Monitorizar a SpO2 (de preferência com capnografia) e prolongar a vigilância no pós-operatório."
 },
 {
  "temas": [
   "distrofia-miotonica",
   "paf"
  ],
  "farmacos": [
   "mexiletina",
   "amitriptilina",
   "haloperidol",
   "domperidona"
  ],
  "texto": "Risco de alterações da condução e de arritmias: ECG antes e durante o tratamento (obrigatório com a mexiletina). Palpitações, lipotimia ou síncope → ECG e avisar o médico."
 },
 {
  "temas": [
   "ela",
   "dnm",
   "ame",
   "distrofia-miotonica"
  ],
  "farmacos": [
   "oxigenio"
  ],
  "texto": "Hipoxemia por hipoventilação: o oxigénio sozinho pode agravar a hipercapnia e esconder a falência respiratória. Avisar o médico, pedir gasometria e ponderar VNI; alvo de SpO2 conforme prescrição (habitualmente 88–92%)."
 },
 {
  "temas": [
   "angiopatia-amiloide",
   "avc-hemorragico"
  ],
  "farmacos": [
   "aas",
   "clopidogrel",
   "heparina",
   "enoxaparina",
   "apixabano",
   "rivaroxabano",
   "edoxabano",
   "dabigatrano",
   "varfarina",
   "alteplase",
   "tenecteplase"
  ],
  "texto": "Risco elevado de hemorragia lobar recorrente. Antiagregação, anticoagulação terapêutica ou trombólise só com decisão médica explícita e registada. Cefaleia, défice novo ou descida da consciência → avisar o médico já."
 },
 {
  "temas": [
   "alzheimer",
   "angiopatia-amiloide",
   "avc-isquemico",
   "trombectomia"
  ],
  "farmacos": [
   "lecanemab",
   "donanemab",
   "alteplase",
   "tenecteplase",
   "heparina",
   "apixabano",
   "rivaroxabano",
   "edoxabano",
   "dabigatrano",
   "varfarina"
  ],
  "texto": "Sob antiamiloide há risco de ARIA e de hemorragia, maior com anticoagulantes e trombólise. Na suspeita de AVC, informar logo a equipa de AVC deste tratamento. Cefaleia, confusão ou crise → avisar o médico."
 },
 {
  "temas": [
   "avc-isquemico",
   "avc-hemorragico",
   "trombectomia",
   "tce"
  ],
  "farmacos": [
   "apixabano",
   "rivaroxabano",
   "edoxabano",
   "dabigatrano",
   "varfarina",
   "heparina",
   "enoxaparina"
  ],
  "texto": "AVC ou TCE em doente anticoagulado: registar logo o fármaco e a hora da última toma e avisar o médico, que decide a trombólise ou a reversão (idarucizumab, andexanet, complexo de protrombina)."
 },
 {
  "temas": [
   "avc-isquemico",
   "trombectomia"
  ],
  "farmacos": [
   "aas",
   "clopidogrel",
   "heparina",
   "enoxaparina"
  ],
  "texto": "Nas 24 h a seguir à trombólise EV, não dar antiagregantes nem anticoagulantes (incluindo HBPM profilática) até haver imagem de controlo e ordem médica. Usar compressão pneumática intermitente."
 },
 {
  "temas": [
   "avc-isquemico",
   "trombectomia"
  ],
  "farmacos": [
   "labetalol",
   "urapidil"
  ],
  "texto": "Sem trombólise, só se trata a TA muito elevada (habitualmente acima de 220/120 mmHg). Com trombólise ou trombectomia, o alvo é abaixo de 180/105 mmHg. As descidas bruscas agravam a isquemia. Confirmar o alvo prescrito."
 },
 {
  "temas": [
   "avc-hemorragico"
  ],
  "farmacos": [
   "nimodipina"
  ],
  "texto": "Medir a TA antes de cada toma: a hipotensão agrava a isquemia por vasospasmo (avisar; o médico pode fracionar a toma). Nunca administrar o conteúdo das cápsulas por via parentérica."
 },
 {
  "temas": [
   "avc-hemorragico",
   "angiopatia-amiloide",
   "tce"
  ],
  "farmacos": [
   "ibuprofeno",
   "naproxeno"
  ],
  "texto": "Os AINE aumentam o risco hemorrágico: evitar na hemorragia intracraniana e no TCE recente. Preferir paracetamol ou metamizol, conforme prescrição."
 },
 {
  "temas": [
   "tvc"
  ],
  "farmacos": [
   "heparina",
   "enoxaparina"
  ],
  "texto": "Na TVC, o enfarte hemorrágico não contraindica a anticoagulação: não suspender por iniciativa própria. Agravamento neurológico ou da cefaleia → avisar o médico, sem parar automaticamente."
 },
 {
  "temas": [
   "tce",
   "avc-hemorragico",
   "avc-isquemico",
   "sgb"
  ],
  "farmacos": [
   "metilprednisolona",
   "dexametasona",
   "prednisolona"
  ],
  "texto": "Os corticoides não estão indicados no TCE (aumentam a mortalidade), no edema do AVC nem no SGB. Se forem prescritos nestes contextos, confirmar a indicação com o médico."
 },
 {
  "temas": [
   "tumores"
  ],
  "farmacos": [
   "dexametasona",
   "metilprednisolona",
   "prednisolona"
  ],
  "texto": "Na suspeita de linfoma primário do SNC, o corticoide dado antes da biópsia pode impedir o diagnóstico. Confirmar com neurologia ou neurocirurgia antes da 1.ª toma, salvo herniação iminente."
 },
 {
  "temas": [
   "tumores",
   "avc-isquemico",
   "tvc",
   "epilepsia-az"
  ],
  "farmacos": [
   "carbamazepina",
   "fenitoina",
   "fenobarbital",
   "rifampicina",
   "apixabano",
   "rivaroxabano",
   "edoxabano",
   "dabigatrano",
   "varfarina",
   "dexametasona"
  ],
  "texto": "Os indutores enzimáticos reduzem o efeito dos ACOD, da varfarina e da dexametasona. Evitar a associação com ACOD; sinalizar ao médico e ao farmacêutico."
 },
 {
  "temas": [
   "epilepsia",
   "epilepsia-az"
  ],
  "farmacos": [
   "tramadol",
   "clozapina",
   "ciprofloxacina",
   "benzilpenicilina",
   "fampridina",
   "amifampridina",
   "pitolisant"
  ],
  "texto": "Baixam o limiar convulsivo. Fampridina e amifampridina estão contraindicadas na epilepsia. Nos restantes, confirmar a indicação (sobretudo na insuficiência renal) e vigiar crises."
 },
 {
  "temas": [
   "epilepsia",
   "epilepsia-az",
   "esclerose-multipla",
   "mielopatias"
  ],
  "farmacos": [
   "midazolam",
   "diazepam",
   "lorazepam",
   "clonazepam",
   "clobazam",
   "fenobarbital",
   "baclofeno"
  ],
  "texto": "A suspensão abrupta, incluindo a falha da bomba de baclofeno intratecal, pode causar crises ou estado de mal, febre, rigidez e confusão. Nunca interromper sem indicação; tomas em falta → avisar."
 },
 {
  "temas": [
   "epilepsia-az",
   "trigemio"
  ],
  "farmacos": [
   "carbamazepina",
   "oxcarbazepina",
   "eslicarbazepina",
   "fenitoina",
   "lamotrigina"
  ],
  "texto": "Exantema, febre, lesões das mucosas ou adenopatias nas primeiras semanas: suspeitar de SJS/DRESS. Avisar o médico de imediato, antes da toma seguinte."
 },
 {
  "temas": [
   "epilepsia-az"
  ],
  "farmacos": [
   "carbamazepina",
   "oxcarbazepina",
   "eslicarbazepina",
   "fenitoina"
  ],
  "texto": "Podem agravar as ausências e as mioclonias nas epilepsias generalizadas genéticas. Se estas crises aumentarem depois do início do fármaco, registar e informar o médico."
 },
 {
  "temas": [
   "epilepsia-az"
  ],
  "farmacos": [
   "valproato",
   "topiramato"
  ],
  "texto": "Na mulher em idade fértil são teratogénicos e exigem programa de prevenção da gravidez. Confirmar que a doente foi informada. Possível gravidez → avisar o médico, sem suspender abruptamente."
 },
 {
  "temas": [
   "sodio",
   "epilepsia-az",
   "trigemio",
   "avc-hemorragico",
   "tce",
   "meningites-encefalites",
   "esclerose-multipla",
   "parkinson"
  ],
  "farmacos": [
   "carbamazepina",
   "oxcarbazepina",
   "eslicarbazepina",
   "duloxetina",
   "amitriptilina",
   "ciclofosfamida",
   "desmopressina"
  ],
  "texto": "Risco de hiponatremia, maior no idoso e com diuréticos. Vigiar o sódio conforme protocolo. Confusão, náuseas, crises ou descida da consciência → pedir sódio urgente e avisar o médico."
 },
 {
  "temas": [
   "sodio"
  ],
  "farmacos": [
   "nacl-hipertonico"
  ],
  "texto": "Corrigir depressa uma hiponatremia crónica pode causar mielinólise osmótica. Sódio frequente conforme protocolo; subida de mais de 10 mmol/L em 24 h ou poliúria súbita → avisar já. Risco maior com alcoolismo, desnutrição e hipocaliemia."
 },
 {
  "temas": [
   "nmo",
   "desmielinizantes"
  ],
  "farmacos": [
   "interferao-beta",
   "fingolimod",
   "siponimod",
   "ozanimod",
   "natalizumab",
   "alemtuzumab"
  ],
  "texto": "Vários fármacos da EM agravam a NMOSD (sobretudo AQP4+). Se um doente com NMOSD tiver um destes prescrito, alertar o neurologista antes de administrar."
 },
 {
  "temas": [
   "esclerose-multipla",
   "imunodeprimido",
   "desmielinizantes"
  ],
  "farmacos": [
   "natalizumab",
   "rituximab",
   "ocrelizumab",
   "ofatumumab",
   "fingolimod",
   "dimetilfumarato",
   "cladribina",
   "alemtuzumab"
  ],
  "texto": "Défice novo e subagudo (cognitivo, visual, motor ou da linguagem) sob imunoterapia: pensar em LMP ou infeção. Não administrar a toma seguinte sem avaliação médica."
 },
 {
  "temas": [
   "desmielinizantes",
   "esclerose-multipla",
   "nmo",
   "neurossarcoidose"
  ],
  "farmacos": [
   "infliximab"
  ],
  "texto": "Os anti-TNF podem desencadear ou agravar doença desmielinizante e estão contraindicados na EM. Sintomas neurológicos novos sob infliximab (também na neurossarcoidose) → avisar o médico."
 },
 {
  "temas": [
   "esclerose-multipla",
   "mielopatias"
  ],
  "farmacos": [
   "tizanidina",
   "ciprofloxacina"
  ],
  "texto": "Associação contraindicada: a ciprofloxacina aumenta muito os níveis de tizanidina (hipotensão grave, bradicardia, sonolência). Pedir ao médico outro antibiótico ou a suspensão da tizanidina."
 },
 {
  "temas": [
   "exames",
   "ame",
   "dnm"
  ],
  "farmacos": [
   "heparina",
   "enoxaparina",
   "apixabano",
   "rivaroxabano",
   "edoxabano",
   "dabigatrano",
   "varfarina",
   "clopidogrel"
  ],
  "texto": "Punção lombar, incluindo para fármacos intratecais: confirmar com o médico o intervalo desde a última toma (risco de hematoma epidural). Depois da PL: dor lombar, fraqueza ou dormência dos membros → avisar já."
 },
 {
  "temas": [
   "imagem"
  ],
  "farmacos": [
   "rotigotina",
   "foslevodopa",
   "levodopa-gel"
  ],
  "texto": "Antes da RM, retirar o sistema transdérmico de rotigotina (risco de queimadura) e recolocá-lo depois. As bombas de perfusão não entram na sala: planear com o médico para não interromper a terapêutica."
 },
 {
  "temas": [
   "disfagia"
  ],
  "farmacos": [
   "levodopa-carbidopa",
   "levodopa-benserazida",
   "pramipexol",
   "ropinirol",
   "valproato",
   "carbamazepina",
   "dabigatrano"
  ],
  "texto": "Não triturar formas de libertação prolongada ou gastrorresistentes e não abrir as cápsulas de dabigatrano. Confirmar com o farmacêutico a forma adequada para SNG ou disfagia."
 },
 {
  "temas": [
   "hic",
   "tce",
   "coma",
   "avc-hemorragico"
  ],
  "farmacos": [
   "morfina",
   "tramadol",
   "midazolam",
   "diazepam",
   "lorazepam"
  ],
  "texto": "Sem via aérea protegida, a hipoventilação faz subir o CO2 e a PIC, e a sedação esconde o exame neurológico. Usar só conforme prescrição; avaliar FR, SpO2 e Glasgow antes e depois."
 },
 {
  "temas": [
   "avc-isquemico",
   "disseccao-cervical",
   "pres",
   "cefaleias",
   "demencia-vascular"
  ],
  "farmacos": [
   "sumatriptano",
   "rizatriptano"
  ],
  "texto": "São vasoconstritores: contraindicados com AVC ou AIT prévio, doença coronária ou HTA não controlada. Cefaleia nova ou atípica (suspeita de HSA, dissecção, SVCR) → não dar sem avaliação médica."
 },
 {
  "temas": [
   "cefaleias"
  ],
  "farmacos": [
   "paracetamol",
   "metamizol",
   "ibuprofeno",
   "naproxeno",
   "sumatriptano",
   "rizatriptano",
   "tramadol"
  ],
  "texto": "O uso frequente (10 a 15 dias por mês ou mais) causa cefaleia por uso excessivo de medicação. Registar os dias de toma. Os opioides não estão indicados na enxaqueca."
 },
 {
  "temas": [
   "huntington"
  ],
  "farmacos": [
   "tetrabenazina"
  ],
  "texto": "Pode agravar a depressão e a ideação suicida e causar parkinsonismo, sonolência e disfagia. Vigiar o humor; ideação suicida → avisar o médico já."
 },
 {
  "temas": [
   "sgb"
  ],
  "farmacos": [
   "labetalol",
   "urapidil",
   "propranolol"
  ],
  "texto": "Disautonomia: resposta exagerada aos anti-hipertensores, com hipotensão marcada. Tratar só picos sustentados, conforme prescrição e com monitorização contínua; vigiar bradiarritmias."
 },
 {
  "temas": [
   "paf"
  ],
  "farmacos": [
   "verapamilo",
   "propranolol",
   "labetalol"
  ],
  "texto": "Cardiomiopatia amiloide e disautonomia: evitar o verapamilo; os bloqueadores beta são mal tolerados (hipotensão, bradicardia, bloqueio). Confirmar com o médico e medir a TA deitado e de pé."
 },
 {
  "temas": [
   "demencias",
   "alzheimer",
   "dcl",
   "demencia-vascular"
  ],
  "farmacos": [
   "donepezilo",
   "rivastigmina",
   "galantamina",
   "propranolol",
   "verapamilo",
   "labetalol"
  ],
  "texto": "Os inibidores da colinesterase causam bradicardia e síncope, que pioram com bloqueadores beta e verapamilo. Pulso abaixo de 50, síncope ou quedas → avisar o médico."
 },
 {
  "temas": [
   "meningites-encefalites",
   "infecoes"
  ],
  "farmacos": [
   "dexametasona",
   "ceftriaxona"
  ],
  "texto": "Na suspeita de meningite bacteriana, a dexametasona dá-se antes ou junto com a 1.ª toma de antibiótico. Nunca atrasar o antibiótico à espera de TC ou PL."
 },
 {
  "temas": [
   "meningites-encefalites",
   "infecoes"
  ],
  "farmacos": [
   "aciclovir"
  ],
  "texto": "Risco de lesão renal e de neurotoxicidade (confusão, mioclonias), sobretudo com insuficiência renal. Perfusão lenta, boa hidratação, vigiar creatinina e diurese. Agravamento do estado mental pode ser toxicidade → avisar."
 },
 {
  "temas": [
   "imunodeprimido",
   "lyme"
  ],
  "farmacos": [
   "benzilpenicilina",
   "ceftriaxona",
   "doxiciclina"
  ],
  "texto": "Nas primeiras 24 h pode surgir reação de Jarisch-Herxheimer (febre, arrepios, hipotensão, agravamento transitório). Vigiar os sinais vitais e avisar o médico; não é necessariamente alergia."
 },
 {
  "temas": [
   "emergencias-farmacos"
  ],
  "farmacos": [
   "litio",
   "ibuprofeno",
   "naproxeno",
   "candesartan"
  ],
  "texto": "AINE e ARA aumentam a litemia: risco de toxicidade (tremor grosseiro, ataxia, confusão, diarreia). Evitar; se for inevitável, controlar litemia e função renal conforme prescrição."
 },
 {
  "temas": [
   "sono"
  ],
  "farmacos": [
   "oxibato",
   "zolpidem",
   "midazolam",
   "diazepam",
   "lorazepam",
   "clonazepam",
   "morfina",
   "tramadol"
  ],
  "texto": "O oxibato com outros depressores do SNC ou com álcool causa depressão respiratória grave; o mesmo risco existe na apneia do sono. Evitar a associação e vigiar FR e SpO2."
 },
 {
  "temas": [
   "funcionais"
  ],
  "farmacos": [
   "midazolam",
   "diazepam",
   "lorazepam",
   "levetiracetam",
   "fenitoina"
  ],
  "texto": "Com crises funcionais confirmadas, benzodiazepinas ou antiepiléticos EV repetidos expõem a depressão respiratória e intubação sem benefício. Seguir o plano individual; na dúvida, tratar como epilética e chamar o médico."
 },
 {
  "temas": [
   "autoimunes",
   "sistemicas",
   "vasculites"
  ],
  "farmacos": [
   "metotrexato",
   "cotrimoxazol"
  ],
  "texto": "O cotrimoxazol aumenta a toxicidade do metotrexato (mielossupressão, mucosite). Evitar a associação, salvo indicação médica explícita; vigiar o hemograma."
 }
];
const REFERENCIAS = {
 "exames": "Revisão da literatura",
 "imagem": "Revisão da literatura",
 "hic": "BTF 2016; SIBICC 2019",
 "coma": "ENLS/Neurocritical Care Society",
 "avc": "ESO 2021–2025; AHA/ASA 2026 (isquémico)",
 "tce": "BTF 2016; NICE NG232 (2023)",
 "infecoes": "ESCMID 2016 (meningite); EAN-ESCMID 2026 (encefalite)",
 "epilepsia": "ILAE 2017/2025 (classificação); NICE NG217 (2022)",
 "dor": "IASP 2020 (definição); revisão da literatura",
 "cefaleias": "ICHD-3 2018; EHF/EAN (enxaqueca, anti-CGRP)",
 "movimento": "NICE NG71 (2017); critérios MDS",
 "demencias": "NICE NG97 (2018)",
 "desmielinizantes": "ECTRIMS/EAN 2018; McDonald 2024 (publ. 2025)",
 "sono": "ESRS 2023 (insónia); EAN 2021 (narcolepsia)",
 "neuropatias": "EAN/PNS 2021 (PDIC); EAN/PNS 2023 (SGB)",
 "miastenia": "Consenso internacional MGFA 2016/2020",
 "urgencias": "ENLS",
 "sistemicas": "Revisão da literatura",
 "genetica": "Revisão da literatura",
 "disfagia": "ESO-ESSD 2021 (disfagia pós-AVC)",
 "linguagem": "Revisão da literatura",
 "seguranca": "DGS Norma 008/2019 (quedas); EPUAP/NPIAP/PPPIA",
 "eliminacao": "EAU (neuro-urologia, versão atual)",
 "ela": "EAN 2024 (ELA); NICE NG42",
 "ataxias": "Revisão da literatura",
 "ame": "Consenso de cuidados AME 2017/2018",
 "botulismo": "CDC 2021 (orientações clínicas)",
 "distrofia-miotonica": "Consenso de cuidados DM1 2018",
 "dcj": "Critérios CDC/NCJDRSU (RT-QuIC); revisão da literatura",
 "huntington": "Recomendações internacionais DH 2019",
 "lyme": "NICE NG95 (2018); IDSA/AAN/ACR 2020",
 "autoimunes": "Revisão da literatura",
 "encefalite-autoimune": "Graus 2016; critérios paraneoplásicos 2021",
 "encefalopatia-hepatica": "EASL 2022",
 "dnm": "EAN 2024 (ELA)",
 "hpn": "Guideline japonesa iNPH 2021 (3.ª ed.)",
 "hii": "Consenso HII (Reino Unido) 2018",
 "imunodeprimido": "EACS (versão atual); IUSTI 2020 (sífilis)",
 "mielopatias": "NICE NG234 (2023, compressão metastática); revisão da literatura",
 "neurossarcoidose": "Stern 2018 (critérios); ERS 2021",
 "trigemio": "EAN 2019",
 "bell": "AAO-HNS 2013; AAN 2012",
 "paf": "Consenso europeu ATTRv 2021",
 "parkinsonismos-atipicos": "MDS PSP 2017; MDS AMS 2022 (critérios)",
 "pres": "Revisão da literatura",
 "tvc": "ESO 2017; AHA/ASA 2024 (declaração científica)",
 "tumores": "EANO 2021 (gliomas); EANO-ESMO 2021 (metástases)",
 "vasculites": "Revisão da literatura",
 "angiopatia-amiloide": "Boston 2.0 (2022); ESO-EAN HIC 2025",
 "avc-isquemico": "ESO 2021–2025; AHA/ASA 2026",
 "avc-hemorragico": "ESO-EAN 2025 (HIC); AHA/ASA 2022 HIC / 2023 HSA",
 "trombectomia": "ESO-ESMINT 2019/2023; AHA/ASA 2026",
 "territorios-arteriais": "Revisão da literatura",
 "encefalopatia-wernicke": "EFNS 2010",
 "alzheimer": "NICE NG97 (2018); RCM antiamiloide (EMA 2025)",
 "demencia-vascular": "VICCCS 2018; revisão da literatura",
 "dcl": "McKeith 2017 (4.º consenso)",
 "epilepsia-az": "ILAE 2017/2025; NICE NG217 (2022)",
 "parkinson": "NICE NG71 (2017); EAN/MDS-ES 2022 (terapias avançadas)",
 "esclerose-multipla": "ECTRIMS/EAN 2018; McDonald 2024 (publ. 2025)",
 "nmo": "Wingerchuk 2015; NEMOS 2023",
 "miastenia-gravis": "Consenso internacional MGFA 2016/2020",
 "sgb": "EAN/PNS 2023",
 "delirium": "NICE CG103 (atualizada em 2023)",
 "meningites-encefalites": "ESCMID 2016 / EAN-ESCMID 2026",
 "emergencias-farmacos": "Revisão da literatura",
 "sodio": "ESE/ESICM/ERA-EDTA 2014",
 "funcionais": "consensos",
 "disseccao-cervical": "ESO 2021",
 "paliativos": "EAPC/EAN 2016 (consenso)"
};
