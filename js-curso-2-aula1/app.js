let numeroSecreto = gerarNumeroAleatorio();

let titulo = document.querySelector("h1")
titulo.innerHTML = "jogo do número secreto";

let paragrafo = document.querySelector("p")
paragrafo.innerHTML = "escolha um numero entre 1 e 10";


function exibirTextoNaTela(){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirTextoNaTela("h1" , "jogo do número secreto");
exibirTextoNaTela("p" , "Escolha um numeri entre 1 e 10");

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(){
   return parseInt(Math.random() *10 + 1);
}