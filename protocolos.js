// NeuroEnf — Protocolos do Serviço de Neurologia (área em construção).
//
// REGRAS (governação):
//  • Só entram protocolos APROVADOS pela instituição e com AUTORIZAÇÃO para serem divulgados nesta app
//    (o site é público: documentos internos só com autorização ou em versão de acesso restrito).
//  • Cada protocolo é uma ficha de bolso feita a partir do documento oficial e VALIDADA pelo seu responsável.
//    O documento oficial (intranet) prevalece sempre.
//  • Cada protocolo tem data de revisão; passada essa data, a app mostra «A rever» automaticamente.
//  • Propostas e correções dos colegas não são publicadas sem validação.
//
// Modelo (copiar para dentro de PROTOCOLOS, sem as barras de comentário):
// {
//   id: "exemplo",                          // letras minúsculas, números e hífenes
//   titulo: "Título do protocolo",
//   codigo: "XXX.000",                      // código no controlo documental do hospital
//   versao: "1.0",
//   aprovacao: "2026-12-01",                // data de aprovação (AAAA-MM-DD)
//   revisao: "2028-12-01",                  // data prevista de revisão (AAAA-MM-DD)
//   responsavel: "Enf.ª … / Dr. …",         // autor ou responsável pelo documento
//   validadoPor: "Enf.ª Gestora …",         // quem validou esta ficha na app
//   fonte: "https://…",                     // ligação ao documento oficial na intranet (opcional)
//   resumo: "Para que serve, em uma ou duas frases.",
//   seccoes: [
//     { t: "Objetivo", itens: ["…"] },
//     { t: "Procedimento", itens: ["…", "…"] },
//     { t: "Sinais de alarme", alarme: true, itens: ["…"] }
//   ]
// },

// Contacto para propor protocolos ou correções (email). Vazio = mostra só a indicação de falar com a equipa responsável.
const PROTOCOLOS_CONTACTO = "";

const PROTOCOLOS = [
];
