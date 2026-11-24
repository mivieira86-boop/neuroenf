// NeuroEnf — Focos de enfermagem (CIPE) e «O que registar», por tema.
// Proposta do agente de enfermagem (focos na forma usada no SClínico; confirmar no catálogo CIPE do serviço).
// Formato: CIPE["id-do-tema"] = { focos: ["…"], registar: ["…"] }
const CIPE = {
 "semiologia": {
  "focos": [
   "Consciência comprometida",
   "Comunicação comprometida",
   "Deglutição comprometida",
   "Risco de queda",
   "Risco de úlcera por pressão"
  ],
  "registar": [
   "Avaliação de base na admissão: Glasgow por componentes (O, V, M), pupilas em mm, força (MRC) e fala",
   "Morse, Braden, Barthel e dor na admissão e após transferência ou queda",
   "Rastreio de disfagia: instrumento, resultado e hora",
   "Qualquer alteração: valor, hora, a quem foi comunicada e atitude tomada",
   "Cuidador principal identificado e contacto"
  ]
 },
 "exames": {
  "focos": [
   "Dor",
   "Risco de hemorragia",
   "Conhecimento sobre o procedimento",
   "Risco de convulsão"
  ],
  "registar": [
   "Antes da punção lombar: antitrombótico e hora da última toma, plaquetas e coagulação verificadas",
   "Punção lombar: hora, posição, pressão de abertura se medida, número de tubos e intercorrências",
   "Após a punção (de 4 em 4 h nas primeiras 24 h ou conforme protocolo): local, cefaleia, força e sensibilidade dos membros inferiores, micção",
   "Vídeo-EEG: hora e descrição de cada evento, uso do botão de evento e fármacos suspensos"
  ]
 },
 "hic": {
  "focos": [
   "Pressão intracraniana aumentada",
   "Consciência comprometida",
   "Risco de aspiração",
   "Dor",
   "Risco de desequilíbrio eletrolítico"
  ],
  "registar": [
   "Glasgow, pupilas, TA, FC e padrão respiratório com a frequência prescrita: valor, hora e a quem foi comunicada a alteração",
   "Cabeceira a 30° e alinhamento cervical confirmados por turno",
   "DVE: nível do sistema, débito horário, aspeto do LCR e clampagens (hora de início e fim)",
   "Osmoterapia: hora de administração, natremia, diurese e balanço hídrico",
   "Dejeções diárias e esforço defecatório"
  ]
 },
 "coma": {
  "focos": [
   "Consciência comprometida",
   "Limpeza das vias aéreas comprometida",
   "Risco de aspiração",
   "Risco de úlcera por pressão",
   "Risco de olho seco"
  ],
  "registar": [
   "Glasgow por componentes, pupilas, padrão respiratório e postura motora com hora",
   "Glicemia capilar na admissão e em cada alteração da consciência",
   "SNG: método de confirmação da posição e hora antes de cada utilização",
   "Proteção ocular e higiene oral feitas por turno",
   "Posicionamentos: hora e decúbito"
  ]
 },
 "avc": {
  "focos": [
   "Deglutição comprometida",
   "Comunicação comprometida",
   "Negligência unilateral",
   "Risco de queda",
   "Papel de prestador de cuidados"
  ],
  "registar": [
   "Hora de início ou última vez visto bem",
   "NIHSS e Glasgow: valor, hora e a quem foi comunicado o agravamento",
   "GUSS: resultado, hora e consistência prescrita",
   "TA e glicemia face ao alvo prescrito",
   "Ensinos ao cuidador (BE-FAST, alimentação, transferências) com devolução do ensino"
  ]
 },
 "tce": {
  "focos": [
   "Consciência comprometida",
   "Confusão aguda",
   "Dor",
   "Risco de queda",
   "Conhecimento do prestador de cuidados"
  ],
  "registar": [
   "Mecanismo e hora do traumatismo, antitrombótico e hora da última toma",
   "Glasgow, pupilas e força seriados com hora",
   "Rinorraquia, otorraquia e equimoses (periorbitária, retroauricular)",
   "Ensino de alta entregue e adulto presente nas primeiras 24 h"
  ]
 },
 "infecoes": {
  "focos": [
   "Infeção",
   "Risco de transmissão de infeção",
   "Consciência comprometida",
   "Risco de convulsão",
   "Dor"
  ],
  "registar": [
   "Hora das hemoculturas e da 1.ª dose de antimicrobiano (e de dexametasona, se prescrita)",
   "Isolamento: tipo, hora de início e de fim",
   "Exantema petequial: hora em que surgiu e evolução",
   "Temperatura, Glasgow e sinais meníngeos por turno",
   "Aciclovir: diurese e função renal"
  ]
 },
 "epilepsia": {
  "focos": [
   "Convulsão",
   "Risco de queda",
   "Risco de aspiração",
   "Adesão ao regime medicamentoso",
   "Conhecimento do prestador de cuidados"
  ],
  "registar": [
   "Crise: hora de início e de fim, como começou, desvio dos olhos, lado, automatismos, incontinência e mordedura da língua",
   "Fármaco de resgate: hora e resposta",
   "Estado pós-crítico e tempo até recuperar o estado prévio",
   "Antiepiléticos: hora de cada toma e doses atrasadas ou omitidas",
   "Ensino à família e treino do resgate com devolução"
  ]
 },
 "dor": {
  "focos": [
   "Dor",
   "Sono comprometido",
   "Risco de lesão",
   "Conhecimento sobre gestão da dor"
  ],
  "registar": [
   "Escala usada (sempre a mesma) e valor na admissão, por turno e após cada intervenção",
   "Caracterização: local, tipo e irradiação",
   "Reavaliação após analgesia: hora e valor",
   "Efeitos adversos: sonolência, tonturas, obstipação",
   "Pele das áreas com sensibilidade diminuída"
  ]
 },
 "cefaleias": {
  "focos": [
   "Dor",
   "Náusea",
   "Gestão do regime terapêutico",
   "Conhecimento sobre gestão da cefaleia"
  ],
  "registar": [
   "Início (súbito ou progressivo), intensidade e características",
   "Sinais de alarme pesquisados e a quem foram comunicados",
   "Hora da terapêutica de crise e resposta",
   "Diário de cefaleias e dias de analgésico por mês"
  ]
 },
 "movimento": {
  "focos": [
   "Risco de queda",
   "Deglutição comprometida",
   "Gestão do regime terapêutico",
   "Hipotensão ortostática",
   "Movimento muscular comprometido"
  ],
  "registar": [
   "Horário real das tomas em casa e hora de cada toma no internamento",
   "Períodos «on» e «off» e discinesias",
   "TA deitado e em pé",
   "Descrição do movimento anómalo (parte do corpo, repouso ou ação, desencadeantes)",
   "ECP: modelo, comando e contacto da equipa"
  ]
 },
 "demencias": {
  "focos": [
   "Memória comprometida",
   "Confusão aguda",
   "Risco de queda",
   "Autocuidado: higiene dependente",
   "Papel de prestador de cuidados"
  ],
  "registar": [
   "Estado cognitivo e funcional prévio (Barthel) referido pelo cuidador",
   "Alteração aguda da atenção ou do comportamento: hora e a quem foi comunicada",
   "Dor com PAINAD quando a autoavaliação não é possível",
   "Contenção: motivo, alternativas tentadas, hora de início e de fim",
   "Estratégia de comunicação que resulta"
  ]
 },
 "desmielinizantes": {
  "focos": [
   "Fadiga",
   "Visão comprometida",
   "Retenção urinária",
   "Risco de infeção",
   "Gestão do regime terapêutico"
  ],
  "registar": [
   "Sintomas novos: data de início e duração, temperatura e urina (excluir pseudo-surto)",
   "Pulso de corticoide: glicemia, TA, sono e humor",
   "Resíduo pós-miccional",
   "Acuidade visual de cada olho",
   "Ensino de autoadministração com devolução"
  ]
 },
 "sono": {
  "focos": [
   "Sono comprometido",
   "Ventilação comprometida",
   "Risco de queda",
   "Conhecimento sobre higiene do sono"
  ],
  "registar": [
   "CPAP ou BiPAP: horas de uso e tolerância",
   "Padrão de sono observado (despertares, pausas respiratórias, ressonar)",
   "Hipnóticos ou sedativos dados e efeito",
   "Comportamentos noturnos e medidas de segurança"
  ]
 },
 "neuropatias": {
  "focos": [
   "Ventilação comprometida",
   "Deglutição comprometida",
   "Dor",
   "Risco de queda",
   "Risco de lesão"
  ],
  "registar": [
   "Contagem numa só expiração ou CVF: valor, hora e tendência",
   "Força cervical, tosse e deglutição",
   "TA, FC e ritmo cardíaco (disautonomia)",
   "Inspeção dos pés",
   "Dor com escala"
  ]
 },
 "miastenia": {
  "focos": [
   "Ventilação comprometida",
   "Deglutição comprometida",
   "Risco de aspiração",
   "Fadiga",
   "Gestão do regime terapêutico"
  ],
  "registar": [
   "Hora exata da piridostigmina e relação com as refeições",
   "Contagem numa só expiração, voz, ptose e força cervical: valor e hora",
   "Fármacos novos confirmados com médico ou farmacêutico",
   "Sinais colinérgicos (secreções, sudação, cólicas)"
  ]
 },
 "urgencias": {
  "focos": [
   "Consciência comprometida",
   "Ventilação comprometida",
   "Convulsão",
   "Risco de perfusão tecidular cerebral comprometida"
  ],
  "registar": [
   "Hora de início dos sintomas e de cada intervenção",
   "ABCDE, Glasgow, pupilas e glicemia capilar",
   "A quem foi comunicado e a que horas",
   "Transporte para imagem: monitorização e profissional acompanhante"
  ]
 },
 "sistemicas": {
  "focos": [
   "Confusão aguda",
   "Risco de desequilíbrio eletrolítico",
   "Risco de convulsão",
   "Risco de síndrome de abstinência"
  ],
  "registar": [
   "Glicemia capilar com hora",
   "Natremia, ritmo de correção e diurese",
   "Abstinência: instrumento do serviço, valor, hora e terapêutica dada",
   "Tiamina: hora em relação à glicose"
  ]
 },
 "disfagia": {
  "focos": [
   "Deglutição comprometida",
   "Risco de aspiração",
   "Autocuidado: alimentar-se dependente",
   "Ingestão nutricional comprometida",
   "Risco de desidratação"
  ],
  "registar": [
   "GUSS: resultado, hora e consistência IDDSI prescrita",
   "Ingestão por refeição (quartos do prato) e líquidos",
   "Tosse ou voz molhada durante as refeições",
   "SNG: comprimento externo e método de confirmação antes de cada utilização",
   "Peso na admissão e semanal"
  ]
 },
 "linguagem": {
  "focos": [
   "Comunicação comprometida",
   "Fala comprometida",
   "Ansiedade",
   "Risco de queda",
   "Papel de prestador de cuidados"
  ],
  "registar": [
   "Exemplos concretos dos erros e das ordens que cumpre",
   "Fiabilidade do sim/não e estratégia de comunicação que resulta",
   "Escala de dor usada",
   "Como foi avaliada a capacidade para consentir",
   "Pedido à terapia da fala (linguagem, deglutição ou ambas)"
  ]
 },
 "seguranca": {
  "focos": [
   "Risco de queda",
   "Queda",
   "Risco de úlcera por pressão",
   "Úlcera por pressão",
   "Risco de lesão"
  ],
  "registar": [
   "Morse e Braden com data e plano de prevenção",
   "Queda: hora, se presenciada, lesões, vigilância neurológica e notificação",
   "Úlcera por pressão: local, categoria e dimensões",
   "Contenção: motivo, alternativas, tipo, hora de início e de fim, vigilâncias",
   "Horário dos reposicionamentos"
  ]
 },
 "eliminacao": {
  "focos": [
   "Retenção urinária",
   "Incontinência urinária",
   "Obstipação",
   "Autocuidado: uso do sanitário dependente",
   "Risco de disreflexia"
  ],
  "registar": [
   "Diário miccional e resíduo pós-miccional (volume e hora)",
   "Algália: indicação e revisão diária da necessidade",
   "Dejeções diárias (escala de Bristol)",
   "Cateterismo intermitente: horas e volumes",
   "Ensino do autocateterismo com devolução"
  ]
 },
 "ela": {
  "focos": [
   "Ventilação comprometida",
   "Limpeza das vias aéreas comprometida",
   "Deglutição comprometida",
   "Comunicação comprometida",
   "Papel de prestador de cuidados"
  ],
  "registar": [
   "Contagem numa só expiração ou CV e sinais de hipoventilação: valor e tendência",
   "VNI: horas de uso, parâmetros, interface e pele do dorso do nariz",
   "Traqueostomia: tipo e número da cânula, pressão do cuff, material de emergência à cabeceira",
   "Decisões antecipadas conhecidas (DAV, VNI, traqueostomia, reanimação)",
   "Peso"
  ]
 },
 "ataxias": {
  "focos": [
   "Equilíbrio corporal comprometido",
   "Risco de queda",
   "Deglutição comprometida",
   "Fala comprometida",
   "Fadiga"
  ],
  "registar": [
   "Morse e auxiliar de marcha usado",
   "Rastreio de disfagia e peso",
   "Ataxia de instalação súbita: hora e a quem foi comunicada",
   "Encaminhamento para consulta de genética, se pedido"
  ]
 },
 "ame": {
  "focos": [
   "Ventilação comprometida",
   "Risco de queda",
   "Autocuidado: transferir-se dependente",
   "Dor"
  ],
  "registar": [
   "Antes do nusinersen: plaquetas, coagulação e proteinúria verificadas",
   "Punção lombar: hora, posição e intercorrências",
   "Vigilância pós-punção",
   "Contagem numa só expiração e tosse",
   "Forma habitual de posicionar e transferir o doente"
  ]
 },
 "botulismo": {
  "focos": [
   "Ventilação comprometida",
   "Deglutição comprometida",
   "Comunicação comprometida",
   "Risco de reação adversa à medicação",
   "Risco de olho seco"
  ],
  "registar": [
   "Hora da colheita do soro e hora de início da antitoxina",
   "Contagem numa só expiração, tosse e força cervical: valor e hora",
   "Reações durante a perfusão",
   "Amostras colhidas e alimento suspeito guardado",
   "Ensino sobre doença do soro"
  ]
 },
 "distrofia-miotonica": {
  "focos": [
   "Ventilação comprometida",
   "Risco de débito cardíaco comprometido",
   "Deglutição comprometida",
   "Risco de queda",
   "Fadiga"
  ],
  "registar": [
   "Alerta de sensibilidade a sedativos e anestésicos no processo",
   "ECG ou monitorização e episódios de síncope ou palpitações",
   "SpO2, FR e sonolência após sedação",
   "Glicemia"
  ]
 },
 "dcj": {
  "focos": [
   "Risco de transmissão de infeção",
   "Deglutição comprometida",
   "Risco de queda",
   "Risco de úlcera por pressão",
   "Processo familiar comprometido"
  ],
  "registar": [
   "Procedimento invasivo: articulação prévia com a CCI e a esterilização",
   "Amostras identificadas como risco biológico",
   "Mioclonias e desencadeantes",
   "Decisões do plano paliativo (alimentação artificial)",
   "Exposição acidental de profissionais"
  ]
 },
 "huntington": {
  "focos": [
   "Ingestão nutricional comprometida",
   "Deglutição comprometida",
   "Risco de queda",
   "Risco de suicídio",
   "Papel de prestador de cuidados"
  ],
  "registar": [
   "Peso semanal e ingestão",
   "Ideação suicida: pergunta direta, resposta e a quem foi comunicada",
   "Lesões da pele por movimentos involuntários",
   "Temperatura e rigidez após antipsicóticos"
  ]
 },
 "lyme": {
  "focos": [
   "Dor",
   "Infeção",
   "Risco de olho seco",
   "Conhecimento sobre prevenção"
  ],
  "registar": [
   "Picada de carraça e exposição na colheita de dados",
   "Dor radicular com escala, sobretudo à noite",
   "FC e ECG se suspeita de cardite",
   "Antibiótico: horário e reações"
  ]
 },
 "autoimunes": {
  "focos": [
   "Risco de infeção",
   "Risco de reação adversa à medicação",
   "Gestão do regime terapêutico",
   "Fadiga"
  ],
  "registar": [
   "Rastreios e vacinas confirmados antes da imunossupressão",
   "Perfusões (imunoglobulina, monoclonais): ritmo, sinais vitais e reações",
   "Plasmaférese: TA e sinais de hipocalcemia",
   "Dia fixo do metotrexato confirmado",
   "Cartão de alerta entregue"
  ]
 },
 "encefalite-autoimune": {
  "focos": [
   "Confusão aguda",
   "Agitação",
   "Convulsão",
   "Risco de queda",
   "Processo familiar comprometido"
  ],
  "registar": [
   "Crises e movimentos anómalos: hora, duração e descrição",
   "FC, TA, temperatura e respiração (disautonomia)",
   "Natremia e balanço hídrico",
   "Contenção: motivo, alternativas, hora de início e de fim",
   "Temperatura, rigidez e CK se antipsicótico"
  ]
 },
 "encefalopatia-hepatica": {
  "focos": [
   "Confusão aguda",
   "Consciência comprometida",
   "Risco de aspiração",
   "Risco de queda",
   "Obstipação"
  ],
  "registar": [
   "Grau de West Haven e asterixis por turno",
   "Número e consistência das dejeções por dia",
   "Glicemia capilar",
   "Balanço hídrico e peso",
   "Sinais de hemorragia digestiva"
  ]
 },
 "dnm": {
  "focos": [
   "Ventilação comprometida",
   "Deglutição comprometida",
   "Comunicação comprometida",
   "Ingestão nutricional comprometida",
   "Papel de prestador de cuidados"
  ],
  "registar": [
   "Contagem numa só expiração e sinais de hipoventilação: valor e tendência",
   "Peso e ingestão",
   "Riluzol: tomas e análises",
   "Decisões antecipadas conhecidas"
  ]
 },
 "hpn": {
  "focos": [
   "Andar comprometido",
   "Incontinência urinária",
   "Memória comprometida",
   "Risco de queda"
  ],
  "registar": [
   "Marcha antes e depois do «tap test», sempre com o mesmo método e com hora",
   "Vigilância após punção lombar",
   "Após DVP: ferida, trajeto do cateter e consciência",
   "Modelo da válvula e verificação após RM"
  ]
 },
 "hii": {
  "focos": [
   "Dor",
   "Visão comprometida",
   "Gestão do regime terapêutico",
   "Conhecimento sobre a doença"
  ],
  "registar": [
   "Queixas visuais (perdas transitórias): hora e a quem foram comunicadas",
   "Cefaleia com escala",
   "Posição e pressão de abertura na punção lombar",
   "Efeitos da acetazolamida (parestesias, dor lombar, hematúria)"
  ]
 },
 "imunodeprimido": {
  "focos": [
   "Infeção",
   "Risco de transmissão de infeção",
   "Risco de infeção",
   "Adesão ao regime medicamentoso",
   "Dor"
  ],
  "registar": [
   "Precauções em curso: tipo e motivo (ex.: exclusão de tuberculose)",
   "Hora de cada antimicrobiano e antirretroviral",
   "Punções evacuadoras: hora, cefaleia e visão",
   "Reação após a 1.ª penicilina",
   "Agravamento após início dos antirretrovirais: data e sinais"
  ]
 },
 "mielopatias": {
  "focos": [
   "Movimento muscular comprometido",
   "Retenção urinária",
   "Obstipação",
   "Risco de úlcera por pressão",
   "Risco de disreflexia"
  ],
  "registar": [
   "Força nos 4 membros e nível sensitivo (marcado na pele) com hora",
   "Resíduo pós-miccional e cateterismo",
   "Programa intestinal e dejeções",
   "Episódios de disreflexia: TA, causa encontrada e atitude",
   "Mobilização em bloco se coluna instável"
  ]
 },
 "neurossarcoidose": {
  "focos": [
   "Risco de desequilíbrio de líquidos",
   "Risco de infeção",
   "Visão comprometida",
   "Risco de olho seco"
  ],
  "registar": [
   "Balanço hídrico, diurese, densidade urinária e natremia",
   "Peso diário",
   "Rastreios antes de anti-TNF",
   "Queixas oculares e visuais"
  ]
 },
 "trigemio": {
  "focos": [
   "Dor",
   "Ingestão nutricional comprometida",
   "Autocuidado: higiene oral dependente",
   "Humor deprimido"
  ],
  "registar": [
   "Crises de dor: frequência, desencadeantes e escala",
   "Peso e ingestão",
   "Natremia com carbamazepina ou oxcarbazepina",
   "Pele e mucosas nas primeiras semanas do fármaco"
  ]
 },
 "bell": {
  "focos": [
   "Risco de olho seco",
   "Imagem corporal comprometida",
   "Conhecimento sobre proteção ocular"
  ],
  "registar": [
   "Encerramento palpebral e olho (rubor, dor) por turno",
   "Atingimento da testa (periférica ou central) na admissão",
   "Hora de início dos sintomas (corticoide nas primeiras 72 h)",
   "Glicemia e TA no diabético ou hipertenso"
  ]
 },
 "paf": {
  "focos": [
   "Risco de lesão",
   "Hipotensão ortostática",
   "Risco de queda",
   "Diarreia",
   "Ingestão nutricional comprometida"
  ],
  "registar": [
   "TA deitado e em pé",
   "Inspeção dos pés",
   "Dejeções",
   "Peso",
   "Perfusão do silenciador génico: pré-medicação e reações"
  ]
 },
 "parkinsonismos-atipicos": {
  "focos": [
   "Risco de queda",
   "Deglutição comprometida",
   "Hipotensão ortostática",
   "Retenção urinária",
   "Papel de prestador de cuidados"
  ],
  "registar": [
   "Quedas e quase-quedas",
   "TA deitado e em pé",
   "Resíduo pós-miccional",
   "Estridor noturno",
   "Antipsicóticos e antieméticos a evitar sinalizados"
  ]
 },
 "pres": {
  "focos": [
   "Visão comprometida",
   "Risco de convulsão",
   "Confusão aguda",
   "Risco de queda"
  ],
  "registar": [
   "TA com hora e resposta ao anti-hipertensor",
   "Visão",
   "Magnésio: reflexos, FR e diurese de hora a hora",
   "Crises"
  ]
 },
 "tvc": {
  "focos": [
   "Risco de hemorragia",
   "Dor",
   "Risco de convulsão",
   "Gestão do regime terapêutico"
  ],
  "registar": [
   "Anticoagulante: hora e controlo analítico",
   "Cefaleia e visão",
   "Glasgow e défices novos",
   "Ensino sobre adesão e contraceção"
  ]
 },
 "tumores": {
  "focos": [
   "Pressão intracraniana aumentada",
   "Risco de convulsão",
   "Risco de infeção",
   "Processo familiar comprometido"
  ],
  "registar": [
   "Após craniotomia: Glasgow, pupilas, sinais vitais, penso e saída de LCR",
   "Glicemia com corticoide",
   "Balanço hídrico e natremia (região hipofisária)",
   "Plano de desmame do corticoide",
   "Articulação com cuidados paliativos"
  ]
 },
 "vasculites": {
  "focos": [
   "Visão comprometida",
   "Risco de infeção",
   "Risco de queda",
   "Dor",
   "Gestão do regime terapêutico"
  ],
  "registar": [
   "Acuidade de cada olho: método e hora",
   "Hora da 1.ª dose de corticoide",
   "Perfusões (ciclofosfamida, rituximab): reações",
   "Cefaleias na SVCR (hora, desencadeante)",
   "Isolamento se tuberculose ou zona"
  ]
 },
 "angiopatia-amiloide": {
  "focos": [
   "Risco de hemorragia",
   "Risco de queda",
   "Confusão aguda",
   "Risco de convulsão",
   "Gestão do regime terapêutico"
  ],
  "registar": [
   "Alerta de angiopatia amiloide e decisão sobre cada antitrombótico",
   "Episódios focais transitórios (início, progressão, duração)",
   "TA face ao alvo",
   "Queda: hora e vigilância neurológica",
   "Estado cognitivo de base"
  ]
 },
 "avc-isquemico": {
  "focos": [
   "Risco de perfusão tecidular cerebral comprometida",
   "Risco de hemorragia",
   "Deglutição comprometida",
   "Risco de tromboembolismo venoso",
   "Risco de queda"
  ],
  "registar": [
   "Peso real e dupla verificação da dose do trombolítico",
   "Hora do bólus, do início e do fim da perfusão",
   "NIHSS, Glasgow e TA de 15 em 15 min, de 30 em 30 min e depois de hora a hora",
   "Hemorragias e angioedema",
   "Primeiro levante: TA e défice deitado e sentado"
  ]
 },
 "avc-hemorragico": {
  "focos": [
   "Pressão intracraniana aumentada",
   "Risco de hemorragia",
   "Dor",
   "Risco de desequilíbrio eletrolítico",
   "Deglutição comprometida"
  ],
  "registar": [
   "Anticoagulante e hora da última toma, hora do antídoto",
   "TA em cada ajuste e ritmo do anti-hipertensor",
   "Glasgow, pupilas e NIHSS com hora",
   "Nimodipina: hora e TA",
   "Balanço hídrico e natremia (HSA)"
  ]
 },
 "trombectomia": {
  "focos": [
   "Risco de hemorragia",
   "Risco de perfusão tecidular periférica comprometida",
   "Risco de perfusão tecidular cerebral comprometida",
   "Retenção urinária"
  ],
  "registar": [
   "Dados da sala: acesso e lado, dispositivo, TICI, fármacos, alvo de TA e tempo de repouso",
   "Penso, hematoma delimitado e pulsos distais com a frequência dos sinais vitais",
   "NIHSS e TA",
   "Hora do primeiro levante"
  ]
 },
 "territorios-arteriais": {
  "focos": [
   "Negligência unilateral",
   "Comunicação comprometida",
   "Deglutição comprometida",
   "Visão comprometida",
   "Risco de queda"
  ],
  "registar": [
   "Défices descritos por território (lado, campo visual, negligência)",
   "Código sim/não na síndrome de encarceramento",
   "Rastreio de disfagia (Wallenberg)",
   "Sinais de circulação posterior com hora"
  ]
 },
 "encefalopatia-wernicke": {
  "focos": [
   "Confusão aguda",
   "Equilíbrio corporal comprometido",
   "Ingestão nutricional comprometida",
   "Risco de síndrome de abstinência",
   "Risco de queda"
  ],
  "registar": [
   "Hora da tiamina em relação à glicose",
   "Movimentos oculares, marcha e orientação diários",
   "Sinais de abstinência com o instrumento do serviço",
   "Rastreio nutricional"
  ]
 },
 "alzheimer": {
  "focos": [
   "Memória comprometida",
   "Confusão aguda",
   "Autocuidado: higiene dependente",
   "Risco de queda",
   "Papel de prestador de cuidados"
  ],
  "registar": [
   "Estado cognitivo e Barthel prévios",
   "Dor com PAINAD quando a autoavaliação não é possível",
   "Comportamentos e causas pesquisadas",
   "Horário dos inibidores da colinesterase",
   "Estratégias que acalmam o doente"
  ]
 },
 "demencia-vascular": {
  "focos": [
   "Memória comprometida",
   "Risco de queda",
   "Deglutição comprometida",
   "Humor deprimido",
   "Papel de prestador de cuidados"
  ],
  "registar": [
   "Agravamento em degrau: hora e défice novo",
   "TA e glicemia",
   "Barthel",
   "Estado prévio referido pelo cuidador"
  ]
 },
 "dcl": {
  "focos": [
   "Confusão aguda",
   "Alucinação",
   "Risco de queda",
   "Hipotensão ortostática",
   "Risco de reação adversa à medicação"
  ],
  "registar": [
   "Flutuações e alucinações (hora, conteúdo, risco)",
   "Alerta de sensibilidade a antipsicóticos no processo",
   "TA deitado e em pé",
   "Quedas"
  ]
 },
 "epilepsia-az": {
  "focos": [
   "Convulsão",
   "Risco de queda",
   "Risco de aspiração",
   "Adesão ao regime medicamentoso",
   "Conhecimento do prestador de cuidados"
  ],
  "registar": [
   "Descrição e hora da crise",
   "Resgate: hora e resposta",
   "Antiepilético EV: hora, ritmo e sinais vitais durante a perfusão",
   "Antiepiléticos orais: doses atrasadas ou omitidas",
   "Eventos do vídeo-EEG"
  ]
 },
 "parkinson": {
  "focos": [
   "Gestão do regime terapêutico",
   "Risco de queda",
   "Deglutição comprometida",
   "Hipotensão ortostática",
   "Obstipação"
  ],
  "registar": [
   "Horário de casa e hora real de cada toma (atrasos)",
   "Períodos «on» e «off» e discinesias",
   "TA deitado e em pé",
   "Dejeções",
   "Fármacos antidopaminérgicos evitados"
  ]
 },
 "esclerose-multipla": {
  "focos": [
   "Fadiga",
   "Retenção urinária",
   "Risco de infeção",
   "Equilíbrio corporal comprometido",
   "Gestão do regime terapêutico"
  ],
  "registar": [
   "Início e características do surto",
   "Temperatura e urina (pseudo-surto)",
   "Glicemia com corticoide",
   "Resíduo pós-miccional",
   "Reações às perfusões dos fármacos modificadores"
  ]
 },
 "nmo": {
  "focos": [
   "Visão comprometida",
   "Retenção urinária",
   "Vómito",
   "Risco de infeção",
   "Dor"
  ],
  "registar": [
   "Acuidade visual de cada olho",
   "Soluços ou vómitos persistentes",
   "Nível sensitivo e força",
   "Resíduo pós-miccional",
   "Plasmaférese ou imunoglobulina: reações"
  ]
 },
 "miastenia-gravis": {
  "focos": [
   "Ventilação comprometida",
   "Deglutição comprometida",
   "Risco de aspiração",
   "Fadiga",
   "Gestão do regime terapêutico"
  ],
  "registar": [
   "Contagem numa só expiração, voz, ptose e força cervical",
   "Hora da piridostigmina",
   "Fármacos novos verificados",
   "Inibidor do complemento: vacina meningocócica e cartão de alerta"
  ]
 },
 "sgb": {
  "focos": [
   "Ventilação comprometida",
   "Deglutição comprometida",
   "Dor",
   "Risco de tromboembolismo venoso",
   "Ansiedade"
  ],
  "registar": [
   "Contagem numa só expiração ou CVF: valor, hora e tendência",
   "Força (MRC) e progressão",
   "TA, FC e ritmo (disautonomia)",
   "Imunoglobulina ou plasmaférese: reações",
   "Globo vesical e trânsito intestinal"
  ]
 },
 "delirium": {
  "focos": [
   "Confusão aguda",
   "Risco de queda",
   "Sono comprometido",
   "Agitação",
   "Papel de prestador de cuidados"
  ],
  "registar": [
   "Instrumento do serviço e resultado por turno",
   "Causas pesquisadas: dor (PAINAD se não comunica), retenção, obstipação, glicemia, SpO2, fármacos",
   "Medidas não farmacológicas e resposta",
   "Contenção: motivo, alternativas, hora de início e de fim",
   "Estado cognitivo prévio referido pelo cuidador"
  ]
 },
 "meningites-encefalites": {
  "focos": [
   "Infeção",
   "Risco de transmissão de infeção",
   "Consciência comprometida",
   "Risco de convulsão",
   "Dor"
  ],
  "registar": [
   "Hora de chegada, hora das hemoculturas e hora da 1.ª dose de antibiótico ou antiviral (e de dexametasona)",
   "Isolamento de gotículas: hora de início e de fim",
   "Glasgow, pupilas e sinais meníngeos com hora",
   "Exantema: hora e evolução",
   "Comunicação à saúde pública sobre os contactos: data e por quem"
  ]
 },
 "emergencias-farmacos": {
  "focos": [
   "Hipertermia",
   "Risco de reação adversa à medicação",
   "Confusão aguda",
   "Rigidez muscular",
   "Risco de desequilíbrio de líquidos"
  ],
  "registar": [
   "Fármaco suspeito, hora da última toma e a quem foi comunicado",
   "Temperatura, TA, FC e SpO2 com a frequência prescrita",
   "Rigidez, tremor, mioclonias e sudação",
   "CK, diurese e cor da urina",
   "Notificação da reação adversa (Portal RAM)"
  ]
 },
 "sodio": {
  "focos": [
   "Risco de desequilíbrio eletrolítico",
   "Risco de desequilíbrio de líquidos",
   "Confusão aguda",
   "Risco de convulsão",
   "Risco de queda"
  ],
  "registar": [
   "Natremia: valor, hora da colheita e a quem foi comunicada",
   "Soro hipertónico: hora de início, ritmo e reavaliações prescritas",
   "Diurese horária e balanço hídrico (aumento súbito da diurese comunicado)",
   "Peso diário",
   "Consciência e crises"
  ]
 },
 "funcionais": {
  "focos": [
   "Ansiedade",
   "Andar comprometido",
   "Risco de queda",
   "Aceitação do estado de saúde comprometida",
   "Conhecimento sobre a doença"
  ],
  "registar": [
   "Descrição objetiva dos episódios (hora, duração, o que muda com a distração), sem juízos de valor",
   "Sinais vitais e glicemia durante os episódios",
   "Explicação dada pela equipa médica e termos usados",
   "Funcionalidade (Barthel) e evolução com a fisioterapia",
   "Reação do doente e da família à explicação"
  ]
 },
 "disseccao-cervical": {
  "focos": [
   "Risco de perfusão tecidular cerebral comprometida",
   "Dor",
   "Risco de hemorragia",
   "Conhecimento sobre o regime terapêutico"
  ],
  "registar": [
   "NIHSS e Glasgow: valor, hora e défices novos",
   "Dor cervical ou cefaleia e sinais de Horner (ptose, miose) com hora",
   "Antitrombótico: hora de cada toma",
   "Ensino sobre evitar manipulação cervical e esforços"
  ]
 },
 "paliativos": {
  "focos": [
   "Dor",
   "Dispneia",
   "Sofrimento",
   "Processo familiar comprometido",
   "Papel de prestador de cuidados"
  ],
  "registar": [
   "Sintomas por turno com o instrumento do serviço (PAINAD se não comunica) e resposta a cada SOS",
   "Decisões conhecidas (DAV no RENTEV, procurador de cuidados de saúde, decisão de não reanimar)",
   "Via subcutânea: local e data de colocação",
   "Preferências do doente e da família (local de cuidados, apoio espiritual)",
   "Informação dada à família: o quê e por quem"
  ]
 }
};
