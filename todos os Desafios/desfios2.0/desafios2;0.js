function exibirOi () {
    console.log("olá , mundo") ;
}

exibirOi();



//nome comleto//

function exibirOlaNome(nome){
    console.log(`olá, ${nome}`);
}
exibirOlaNome("luiz");

//dobro//
function calcularDobro(numero) {
    return numero *2 ;
}

let resultado = calcularDobro(5);
console.log(resultado);

//media//
function calcularMedia(a,b,c){
    let media = (a + b + C)/3;
    return media;
}

let media = calcularMedia(4,7,10);
console.log(media);

//maior//

function encontrarMaior(a,b){
  a > b ? a: b ;
}
let maiorNumero = encontrarMaior(15,9);
console.log(maiorNumero);

//quadra//
function quadradoDoNumero(numero){
    return numero*numero;
}
let dobro = quadradoDoNumero(7);
console.log(dobro);