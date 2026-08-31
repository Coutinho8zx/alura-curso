alert("Boas Vindas ao jogo do numero secreto");//exibe mensagem//

// armazena valor// //cria variavel//
let numeroSecreto = 8;
console.log(numeroSecreto);

//Para armazenar// //para"perguntar"//
let  chute;
let tentativas= 1;

//enquanto//
while(chute !=numeroSecreto){
    chute= prompt("Escolha um numero entre 1 e 10")
//condicao / comparaçao//
   //se chute for igual ao número secreto
if(chute == numeroSecreto) {
    break; 
} else{

    if (chute>numeroSecreto){
        alert(`O numero secreto é menor que ${chute}`);
    } else{
         alert(`O numero secreto é maior que ${chute}`);
    }
      //tentativas = tentativas + 1;//
      tentativas++;
  }
 }

if(tentativas>1){
     alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
 }else{
     alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
 }