//mensagem boas vindas//

let mensagemDeBoasVindas = ("Boas vindas!");
console.log(mensagemDeBoasVindas);

//nome//

let nome = "pedro";
console.log(`Olá, ${nome} !`);

//meu nome
let nome = "Luiz Ricardo";
alert (`Olá, ${nome} !`);

//linguagem favorita
let linguagemFav = prompt("Qual  a linguagem de programação que você mais gosta?");
console.log(linguagemFav);

//soma//
let valor1 = 88;
let valor2 = 8;  

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//subtracao//
let valor1 = 88;
let valor2 = 8;

let resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

//maior ou menor de idade//
let idade = prompt("Qual a sua idade?");

if(idade >= 18){
    console.log("voce e maior de idade");
}else{
    console.log("voce é menor de idade");
}

//negativo ou positivo//
let numero = prompt("digite um numero: ");

if(numero > 0){
    console.log("O numero é positivo.");
}else if (numero < 0 ){
    console.log("O numero é negativo")
}

//numeros 1a10//
let numerO = 1;
while (numero<= 10){
    console.log(numero);
    numero++
}

//nota//
let nota = 8; //ex//

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//qualquer numero//
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//numero aleatorio inteiro//
let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);

//numero inteiro entre 1 e 1000//
et NumeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(NumeroInteiroAleatorio);
