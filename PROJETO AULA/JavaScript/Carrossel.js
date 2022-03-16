const imgs = document.getElementById("imgCarrossel") // chamar um ID
const img = document.querySelectorAll("#imgCarrossel img") //selecionar um item que tem dentro, como é ID coloca o #, se fosse classe colocaria .

let indexC = 0

function carrossel() {
    indexC++;

if(indexC > img.length - 1){
    indexC = 0
}

Image.style.transform = 'translateX(${-indexC * 100}%)'; 
}

setInterval(carrossel, 2500); //intervalo na função - primeiro coloca a variável e depois o tempo (em segundos) que vai levar