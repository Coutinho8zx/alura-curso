let numero

function verificarNumero(numero){
    if (numero > 0){ 
        alert('o numero é positivo ')
  }else if (numero < 0){
        alert(' o numero é negativo')
  }else{
        alert('o numero é zero')
  }
}

console.log(verificarNumero(-123))



//maior de idade//
 function verificarIdade(){
    return idade > 18? "maior de idade" : " menor de idade"
 }

 cosole.log(verificarIdade(18))

 //string vazia ou n// 

 function validarString(texto){
    return texto ==="" ? "string vazia" : "string nao vazia"
 }

 console.log(validarString("aqui há um texto???"))
 console.log(validarString(""))
 
 //ano bissexto//

 function verificarAnoBissexto(ano){
    if(ano % 4 === 0 && 1000 !==0) | ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}

console.log(verificarAnoBissexto(2025))
 

//media//

function verificarMedia(num1, num2){
    return (num1 + num2)/2;

}

// Tam.Array//
  function obterTamanhoArray(arr){
    return arr.length;
  }

//verificar se inclue//

const meuArray = [10,20,30,40,50,60,70,80,90];
 console.log("O array contem o numero 30 ?" , meuArray.includes(30));

//array elemnto escrito//
function verificarElementoNoArray(arr, elemento) {
    return arr.includes(elemento);
}

const meuArray = [10,20,30,40,50,60,70];
const elementoProcurado = 80

   const elementoEstaPresente = verificarElementoNoArray(meuArray, elementoProcurado);

   if (elementoEstaPresente) {
      console.log(`O elemento ${elementoProcurado} está presente no array.`);
    }    else {
    console.log(`O elemento ${elementoProcurado} não está presente no array.`);
     }



//arry string//

   const palavras = ["apple", "banana", "orange", "grape"];
   console.log("A palavra 'banana' está no array?", palavras.includes("banana"));

// soma dos pares produto dos ipares//
   function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return {
        somaPares,
        produtoImpares
    };
}

const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSomaProduto(numeros);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);

