const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPergunta = document.querySelector(".caixa-pergunta");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");

const pergunta = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que pode responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o sseu primeiro pensamento?",
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
    caixaPergunta.textContent = perguntaAtual.enunciado;}
    mostraPergunta ();
    mostraAlternativa();
function mostraAlternativa() {

    enunciado : "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que pode responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o sseu primeiro pensamento?",

    alternativa= [
        "Isso é assustador!",
        "Isso é maravilhoso!"
    ]
perguntaAtual.alternativa

function mostraAlternativa() {
    for (const alternativa of perguntaAtual.alternativa) {
        const botaoAlternativa =
    document.createElement ("button");
botaoAlternativa.textContent = alternativa;    
caixaAlternativa.appendChild(botaoAlternativa);

    }}}
