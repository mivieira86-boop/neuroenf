# NeuroEnf — Guia de Enfermagem em Neurologia (adulto)

Abrir no VS Code: File → Open Folder… → escolher a pasta `neuroenf`.
Para ver a app: botão direito em `index.html` → «Open with Live Server» (extensão Live Server),
ou duplo clique no `index.html` no Explorador do Windows.

## Ficheiros
- `index.html` — estrutura da página
- `estilos.css` — aspeto visual, igual ao do HospitalCozy (inclui modo escuro e impressão)
- `fonts/` — letra Inter (licença SIL OFL, em `Inter-LICENSE.txt`); tem de ficar sempre ao lado do `index.html`
- `conteudo.js` — TODO o conteúdo clínico (PARTES, TEMAS, ESCALAS, MRC). É aqui que se acrescenta ou corrige texto.
- `farmacos.js` — guia farmacológico (FARMACOS e TERAPEUTICA por tema)
- `app.js` — navegação, pesquisa, índice dos temas, página de alarmes, escalas e guia farmacológico
- `manifest.webmanifest`, `sw.js`, `instalar.js`, `instalar.css`, `icons/` — app instalável no telemóvel (PWA) e funcionamento sem rede
- `ALTERACOES.md` — registo do que mudou em cada versão (para revisão clínica)
- `agentes/` — definições dos agentes de design, usabilidade, médico e enfermagem

## Acrescentar um tema
Em `conteudo.js`, copiar um bloco `{ id: ..., cap: ..., ... }` dentro de `TEMAS` e alterar.
- Temas do livro: `cap` e `pags` preenchidos, `parte: "p1"` ou `"p2"`.
- Temas de enfermagem transversais: `cap: null`, `pags: null`, `parte: "p3"`; patologias específicas: `parte: "p4"` (por ordem alfabética).
Uma secção pode ter `alarme: true` (vermelho) ou `tipo: "precaucao"` (âmbar).
Cada secção pode ter `itens` (lista), `tabela` (`cab`, `lin`, `nota`) e `alarme: true` (caixa vermelha).

## Acrescentar uma escala
Em `ESCALAS`: `{ id, nome, descricao, itens: [{ nome, opcoes: [[pontos, "texto"], ...] }], interpretar: t => ["ligeiro"|"moderado"|"grave", "texto"], nota }`.
Uma opção cujo texto começa por «NT» conta como «não testável».

## Publicar uma nova versão (GitHub Pages)
1. Alterar os ficheiros.
2. Em `sw.js`, aumentar `VERSAO` (ex.: `neuroenf-v7` → `neuroenf-v8`) — sem isto, os telemóveis continuam com a versão guardada.
3. Enviar para o repositório `neuroenf` (commit e push); o GitHub Pages atualiza em 1–2 minutos.

## Acrescentar um fármaco
Em `farmacos.js`, acrescentar um objeto a `FARMACOS` (`id`, `dci`, `classe`, `notas`, opcional `alto: true` e `alerta`) e
referir o `id` num grupo de `TERAPEUTICA` do tema certo.

## Terminologia (português europeu)
Escrever sempre em português de Portugal (Acordo Ortográfico em vigor em Portugal). Exemplos:
doente (não «paciente»), equipa, registo, internamento, UCI, défice, vómitos, enfarte, fibrilhação auricular, tensão arterial (TA),
parésia/hemiparésia, hálux, contactar, facto, infeção/infecioso, deteção, aspeto, colheita, penso, algália/algaliação,
arrastadeira, urinol, sanita, duche, palhinha, terapia da fala, perturbação (não «transtorno»/«distúrbio»), telemóvel, ecrã,
ficheiro, guardar, utilizador; construções «está a fazer» (não «está fazendo»); sem «você».

## Agentes
Os ficheiros em `agentes/` descrevem quatro agentes: design (aplica alterações visuais), usabilidade (avalia e propõe; adaptado do HospitalCozy), médico e enfermagem (revisão do conteúdo).
Se usar a extensão do Claude Code no VS Code, mova-os para `.claude/agents/` para os poder chamar diretamente.

Conteúdo escrito de raiz para a equipa de enfermagem. Os temas clínicos seguem a organização dos capítulos 1–23 de
«A Neurologia que Todo Médico Deve Saber» (Nitrini & Bacheschi), sem reproduzir o texto do livro.
Não substitui protocolos institucionais nem a prescrição médica.
