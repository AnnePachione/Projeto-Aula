// cria um novo elemento div e dá ao filho
function adcElemento() {
	
    // criar o elemento div
    var divNova = document.createElement("div")
    // criar um texto que será amarrado a alguém
    var conteudoNovo = document.createTextNode("Olá Developers!!")
    divNova.appendChild(conteudoNovo)
    var div1 = document.getElementById("div1")
                                            // inserido ai ser in
    document.body.insertBefore(divNova, div1);
  }
  adcElemento()