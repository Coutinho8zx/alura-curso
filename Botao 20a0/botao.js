let numero = 20;

  document.getElementById("meubotao").addEventListener("click" , function(){
    //Para Diminui//
    numero--;

   if (numero<0) {numero = 20;}

   document.getElementById("contador").textContent=numero;
  });