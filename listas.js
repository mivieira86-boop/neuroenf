// NeuroEnf — Listas de verificação (checklists) para usar à cabeceira.
// Campos: id ("lv-..."), titulo, tema (id do tema onde também aparece), resumo (opcional), itens (pontos por ordem).
// O que se marca fica só na memória do dispositivo enquanto a app está aberta (não se guardam dados de doentes).
// Conteúdo proposto pelo agente de enfermagem; seguir sempre o protocolo do hospital e a prescrição.
const LISTAS = [
{ id: "lv-admissao-neuro", titulo: "Admissão neurológica (primeiras horas)", tema: "semiologia", itens: [
  "Sinais vitais, SpO2, glicemia capilar.",
  "Dor com escala adequada (PAINAD só se não for possível a autoavaliação).",
  "Glasgow, pupilas, força dos 4 membros, linguagem; NIHSS se AVC (valor de base).",
  "Nada por boca, incluindo medicação, até ao rastreio de deglutição (GUSS no AVC ou instrumento do serviço).",
  "Estado cognitivo de base (perguntar à família) e rastreio de delirium com o instrumento do hospital.",
  "Morse e plano de prevenção de quedas; Braden nas primeiras 6 h.",
  "Barthel (antes do internamento e atual).",
  "Risco nutricional com o instrumento do hospital; peso e altura.",
  "Medicação habitual com os horários reais de casa: antiparkinsónicos (incluindo adesivos e perfusões), piridostigmina, antiepiléticos; anticoagulantes e antiagregantes com hora da última toma; alergias.",
  "Eliminação (última dejeção, retenção) e inspeção completa da pele, incluindo sob dispositivos.",
  "Equipamentos trazidos (CPAP ou VNI, comando de ECP), óculos e próteses.",
  "Cuidador e contactos, diretivas antecipadas ou procurador, primeiras necessidades para a alta."
]},
{ id: "lv-pre-trombolise", titulo: "Antes da trombólise", tema: "avc-isquemico", itens: [
  "Hora de início ou última vez visto bem, e quem deu a informação.",
  "Glicemia capilar (excluir hipoglicemia) e sinais vitais.",
  "Peso medido ou estimado com o doente ou a família (a dose depende do peso).",
  "NIHSS basal, Glasgow e pupilas.",
  "TA abaixo de 185/110 mmHg antes de iniciar; se estiver acima, comunicar e tratar conforme prescrição; medir sempre no mesmo braço.",
  "Dois acessos venosos; colheitas prescritas sem atrasar o tratamento.",
  "Anticoagulantes e antiagregantes (nome e hora da última toma), cirurgia, hemorragia ou traumatismo recentes → informar o médico.",
  "Sem punções arteriais nem injeções IM; SNG e algália só se indispensáveis, e antes de iniciar.",
  "Jejum absoluto, incluindo a medicação oral.",
  "Monitorização cardíaca e SpO2; oxigénio só se abaixo do alvo.",
  "Dupla verificação do fármaco, da dose e do peso; registar a hora de início.",
  "Informação ao doente e à família registada conforme protocolo."
]},
{ id: "lv-pos-trombolise", titulo: "Nas 24 h após trombólise", tema: "avc-isquemico", itens: [
  "Hora 0 = bólus. Avaliação neurológica (NIHSS ou Glasgow, pupilas) e TA/FC: de 15 em 15 min até às 2 h, de 30 em 30 min das 2 h às 8 h, de hora a hora das 8 h às 24 h.",
  "TA abaixo de 180/105 mmHg. Acima disso: comunicar, tratar conforme prescrição e medir de 15 em 15 min até controlar.",
  "Angioedema (língua, lábios, orofaringe) de 15 em 15 min nas primeiras 2 h; o risco é maior com IECA.",
  "Agravamento de 2 ou mais pontos no NIHSS, cefaleia intensa, vómitos ou subida súbita da TA → suspender a alteplase se ainda estiver a correr, médico de imediato, preparar TC.",
  "Sem antiagregantes, anticoagulantes (incluindo profilaxia) ou AINE até à TC de controlo.",
  "Sem punções arteriais, IM, SNG ou algália nas 24 h, salvo decisão médica.",
  "Vigiar hemorragia: gengivas, locais de punção, urina, fezes, vómito; compressão prolongada das punções.",
  "Nada por boca até passar o GUSS; higiene oral suave, sem escovagem vigorosa.",
  "Glicemia conforme protocolo; temperatura de 4 em 4 h.",
  "Monitorização cardíaca contínua (procurar fibrilhação auricular).",
  "TC ou RM de controlo às 24 h; só depois iniciar os antitrombóticos prescritos."
]},
{ id: "lv-pos-trombectomia", titulo: "Após trombectomia", tema: "trombectomia", itens: [
  "Na chegada: acesso (femoral ou radial), dispositivo de encerramento, fármacos dados no procedimento, TA alvo prescrita.",
  "Avaliação neurológica e TA/FC: de 15 em 15 min até às 2 h, de 30 em 30 min até às 8 h, de hora a hora até às 24 h (salvo protocolo).",
  "Em cada avaliação: penso, hematoma, pulsos distais, cor, temperatura e sensibilidade do membro.",
  "Femoral: membro em extensão e repouso pelo tempo indicado para o dispositivo. Radial: pulseira de compressão desinsuflada segundo o protocolo.",
  "Hemorragia ou hematoma a crescer → compressão manual acima da punção e médico.",
  "Dor lombar ou abdominal, hipotensão ou taquicardia sem causa → suspeitar de hematoma retroperitoneal e comunicar de imediato.",
  "TA dentro do alvo prescrito, evitando também a hipotensão.",
  "Se também fez trombólise: cumprir a lista «Nas 24 h após trombólise».",
  "Contraste: vigiar diurese e reações; hidratação conforme prescrição.",
  "Nada por boca até passar o rastreio de deglutição.",
  "Agravamento neurológico, cefaleia, vómitos ou crise → médico de imediato.",
  "Imagem de controlo às 24 h conforme prescrição."
]},
{ id: "lv-crise-estado-mal", titulo: "Crise epilética e estado de mal", tema: "epilepsia", itens: [
  "0 min: registar a hora de início, ficar com o doente, pedir ajuda, proteger a cabeça; não conter nem pôr nada na boca.",
  "0–5 min: via aérea (lateralizar, aspirar), oxigénio se SpO2 baixa, SpO2, sinais vitais, glicemia capilar, acesso venoso e colheitas prescritas (incluindo níveis de antiepiléticos).",
  "5 min: a crise continua ou as crises repetem-se sem recuperação → é estado de mal: chamar o médico e dar a benzodiazepina de 1.ª linha conforme prescrição ou protocolo (via EV, IM, bucal ou nasal).",
  "Registar a hora e a via de cada fármaco; vigiar FR e SpO2; insuflador manual e aspiração prontos.",
  "10 min: se persistir, repetir a benzodiazepina uma vez conforme protocolo e preparar o antiepilético EV de 2.ª linha.",
  "Hipoglicemia, álcool ou desnutrição: glicose e tiamina conforme prescrição, sem atrasar a glicose.",
  "20 min: antiepilético EV de 2.ª linha conforme prescrição, em acesso próprio, com TA, ECG e SpO2 monitorizados.",
  "40 min: a crise persiste → estado de mal refratário: ativar UCI ou anestesia segundo o protocolo.",
  "Depois da crise: posição lateral de segurança; Glasgow e pupilas até ao estado prévio; nada por boca até recuperar a consciência e a deglutição.",
  "Não recupera a consciência → comunicar (possível estado de mal não convulsivo, EEG).",
  "Registar como foi a crise: primeiros sinais, lado, desvio dos olhos ou da cabeça, duração, lesões, recuperação."
]},
{ id: "lv-colheita-lcr", titulo: "Colheita de LCR", tema: "exames", itens: [
  "Confirmar os exames pedidos e os especiais (citologia, PCR, micobactérias, fungos, bandas oligoclonais, biomarcadores, que podem exigir tubo próprio).",
  "Sangue venoso para glicose imediatamente antes da punção, e outras análises emparelhadas que estejam pedidas. A glicemia capilar não substitui, salvo protocolo.",
  "Tubos estéreis numerados pela ordem de colheita; etiquetar à cabeceira com a identificação e o número do tubo.",
  "Seguir a ordem definida pelo laboratório (ex.: 1 bioquímica, 2 microbiologia, 3 células, 4 outros).",
  "Volume mínimo por tubo conforme o laboratório; confirmar com o médico se é preciso volume extra.",
  "Suspeita de HSA: tubo para xantocromia protegido da luz; contagem de eritrócitos no primeiro e no último tubo, se pedida.",
  "Não refrigerar as amostras de microbiologia.",
  "Enviar de imediato, em mão, sem tubo pneumático; avisar o laboratório.",
  "Requisição com a hora da colheita, a suspeita clínica e se o antibiótico já foi iniciado.",
  "Registar: hora, aspeto (límpido, turvo, hemático, xantocrómico), volume e tubos enviados."
]},
{ id: "lv-pos-puncao-lombar", titulo: "Após punção lombar", tema: "exames", itens: [
  "Registar a hora, o número de tentativas, o aspeto do LCR, a pressão de abertura (se medida) e os tubos enviados.",
  "Penso: vigiar hemorragia ou saída de líquido em cada avaliação.",
  "O repouso no leito não previne a cefaleia: mobilizar conforme tolerado, salvo indicação médica.",
  "Sinais vitais e dor após o procedimento e em cada turno.",
  "Cefaleia que agrava sentado ou de pé e alivia deitado → comunicar; analgesia conforme prescrição.",
  "Dor lombar intensa, fraqueza ou dormência das pernas, retenção ou incontinência nova → possível hematoma espinhal: comunicar de imediato (sobretudo se anticoagulado ou com plaquetas baixas).",
  "Febre, rubor ou exsudado no local, rigidez da nuca nos dias seguintes → comunicar.",
  "Agravamento da consciência ou anisocoria → chamar o médico de imediato.",
  "Anticoagulantes e antiagregantes: retomar só por indicação médica; registar a hora.",
  "Ensino: a cefaleia pode surgir até alguns dias depois; contactar se não aliviar deitado, ou se houver febre, dor lombar ou fraqueza."
]},
{ id: "lv-seguranca-rm", titulo: "Segurança para RM", tema: "imagem", itens: [
  "Questionário de segurança de RM preenchido com o doente ou a família (ou a partir do processo) e assinado conforme protocolo.",
  "Dispositivos implantados (pacemaker ou CDI, neuroestimuladores incluindo ECP, implante coclear, bombas, válvula de derivação programável, clipes, stents recentes): levar o cartão e avisar a imagiologia antes.",
  "Fragmentos metálicos: trabalho com metal, estilhaços, lesões oculares.",
  "Retirar adornos, piercings, aparelhos auditivos, próteses dentárias removíveis e roupa com metal.",
  "Adesivos transdérmicos com camada metálica (ex.: rotigotina): retirar conforme indicação, repor depois e registar as horas.",
  "Só equipamento compatível com RM (bomba perfusora, monitor, garrafa de oxigénio, maca); confirmar que perfusões não podem parar.",
  "Gadolínio: função renal recente, alergias, gravidez ou amamentação; acesso venoso permeável.",
  "Tolerância: claustrofobia, dor, agitação, ortopneia, secreções ou fraqueza respiratória → avisar o médico; sedação só prescrita e vigiada.",
  "Não deixar falhar as tomas por causa do exame: antiparkinsónicos, piridostigmina, antiepiléticos, insulina.",
  "Doente instável, com VNI ou traqueostomia: acompanhado por enfermeiro, combinado com a imagiologia.",
  "No regresso: repor adesivos e dispositivos e confirmar o funcionamento das válvulas programáveis, se indicado; reavaliar e registar."
]},
{ id: "lv-alta", titulo: "Alta", tema: "seguranca", itens: [
  "Preparar desde a admissão: cuidador, Barthel, habitação, apoios.",
  "Medicação reconciliada: lista final com horários, fármacos novos e suspensos; o doente ou cuidador explica para que serve cada um.",
  "Fármacos de alto risco (anticoagulantes, antiepiléticos, insulina, antiparkinsónicos): horas certas, não suspender, sinais de alarme; medicação de resgate treinada, se prescrita.",
  "Ensinos com demonstração e devolução: alimentação segura, transferências, posicionamentos, prevenção de quedas, pele, eliminação.",
  "Sinais de alarme e quando ligar 112 (ex.: BE-FAST, crise com 5 min ou mais, dificuldade em respirar ou engolir).",
  "Consultas, exames e terapias marcados, com datas por escrito.",
  "Produtos de apoio, adaptação do domicílio, transporte adequado.",
  "Carta de alta de enfermagem para o centro de saúde; serviço social; RNCCI quando indicado.",
  "Cuidador: avaliar sobrecarga; informar sobre o Estatuto do Cuidador Informal e o descanso do cuidador.",
  "Condução e regresso ao trabalho só com autorização médica; contacto do serviço para dúvidas."
]}
];
