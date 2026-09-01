let numero = 20;

  document.getElementById("meu botao").addEventListener("click" , function(){
    //Para Diminui//
    numero--;

   if (numero<0) {numero = 20;}

   document.getElementById("contador").textContent=numero;
  });