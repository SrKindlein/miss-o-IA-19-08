const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1: como economizar mais energia?",
        alternativas: [
            {
            
            texto: "Alternativa A) deixando os aparelhos em stand-by ",
            afirmacao: "voce errou"
            },
            {
            texto: "Alternativa B) deixando os aparelhos desligados",
            afirmacao: ", você acertou em cheio parabéns"
            }
            
        ]
    },
    {
        enunciado: "Pergunta 2: Quantos continentes existem no mundo?",
        alternativas: [
            {
                texto: "Alternativa A) 6",
                afirmacao: ", voce errou"
            },
            {
                texto: "Alternativa B)  7",
                afirmacao: ", voce acertou "
            }
        ]
    },
    {
        enunciado: "Pergunta 3: Qual é a bebida mais consumida no mundo?",
        alternativas: [
            {
                texto: "Alternativa A) cha",
                afirmacao: ", voce acertou"
            },
            {
                texto: "Alternativa B) cerveja",
                afirmacao: ", voce errou"
            }
        ]
    },
    {
        enunciado: "Pergunta 4: Em que ano o Brasil se tornou independente de Portugal?",
        alternativas: [
            {
                texto: "Alternativa A) 1500",
                afirmacao: ", voce errou"
            },
            {
                texto: "Alternativa B) 1822",
                afirmacao: ", voce acertou"
            }
        ]
    },
    {
        enunciado: "Pergunta 5: Qual é a cor do cavalo branco de Napoleão?",
        alternativas: [
            {
                texto:"Alternativa A) branco",
                afirmacao:", voce acertou"
            },
            {
                texto: "Alternativa B) preto ",
                afirmacao: ", voce errou"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return; 

    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
             caixaAlternativas.appendChild(botaoAlternativa);
    }

}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes
    historiaFinal = afirmacoes + "";
    atual++;
mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "muito obrigado por sua participação!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
