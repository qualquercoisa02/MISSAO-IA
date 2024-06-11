const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPergunta = document.querySelector(".caixa-pergunta");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");

const pergunta = [
    {
        enunciado: "Qual o impacto da Inteligência Artificial na sua vida?",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ],
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ],
    },
];
let atual = 0;
let perguntaAtual;
function mostraPergunta() {
    perguntaAtual = pergunta[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado;
}
mostraPergunta();
