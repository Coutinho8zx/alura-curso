let jogosAlugados = 0;

function mostrarJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`)
}


function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');;

    if (imagem.classList.contains('dashboard__item__img--rented')) {
      if(alert(`voce tem certeza o vai devolver o jogo ${nomeJogo.textContent}`));
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
    mostrarJogosAlugados();
}

//outro desafio//
 // function ordenarNumeros(a, b, c) {
    //const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    //console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);


// Exemplo de uso:
///ordenarNumeros(3, 1, 5);


//calculadore//
//function adicao(a,b){
    //return a + b ;
//} 
//function subtracao(a,b){
    //return a - b ;
//}
//function multiplicacao(a,b){
    //return a * b;
//} 
//function divisao(a,b){
  //if(b !== 0){
    //return a / b;
  //} else {
   // return:"erro : divisao por zero";
  //}
//}

//function calculadora(operacao, a, b) {
   // switch (operacao) {
      //  case 'soma':
           // return adicao(a, b);
        //case 'subtracao':
           // return subtracao(a, b);
        //case 'multiplicacao':
            //return multiplicacao(a, b);
       // case 'divisao':
            //return divisao(a, b);
        //default:
           // return "Operação inválida.";
