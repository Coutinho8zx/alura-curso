let titulo = document.querySelector("h1")
titulo.innerHTML = "Hora do desafio";

//exibir mensagem//
function exibirMensagemnoConsole(){
    console.log("O botão foi clicado!")
}

//prompt//
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

//soma//
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`a soma de ${primeiroNumero} + ${segundoNumero} é = ${resultado}`)
}