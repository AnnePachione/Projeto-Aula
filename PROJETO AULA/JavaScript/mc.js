// Função anônima
var funcaoAnonima = function () {
    alert("Essa função não tem nome?!")
}

// Função nomeada
function exibeMensagem () {
    console.log("Minha função está ok")
}

// Arrow Function Anônima com 2 parâmetros
//let soma = (a, b) => {
//    var a = 5
//    var b = 2

//    resultado = a + b ou return a + b
//}

let soma = (a, b) => {
    var a = parseFloat(prompt("Digite o valor de a"));  //parceFloat transforma istring em número
    var b = parseFloat(prompt("Digite o valor de b"));  //prompt é um aviso com possibilidade de inserir dados

    return a + b
}

// Arrow Function
let exibeArrow = exibeArrow  => {
    console.log("Oresultado da nossa Arrow Function é: " + soma())
    alert("Essa função não tem nome?!")
}

// Bônus - trocar título através de um condicional
let bonus = bonus => console.log("Clique no título e veja!")

function mudaTitulo() {
    if(document.querySelector("h1").style.fontSize == "40px") //nesta linha ele consulta o que está no documento
    {
        document.querySelector("h1").style = "font-size:60px;" //se estiver 40px ele vai alterar para 60px
        document.querySelector("h1").style = "transition: 2s;"
        document.querySelector("h1").textContent = "👽Função👽"
    } else {
        document.querySelector("h1").style = "font-size: 40px;"
        document.querySelector("h1").textContent = "Função"
    }


}