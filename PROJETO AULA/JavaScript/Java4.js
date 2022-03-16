var n1 = 10;
var n2 = 20;

var soma = n1 + n2;


console.log("Resultado: " + soma)
console.log(typeof(soma))

console.log(n1 === 10)
console.log(soma == n2)

let n1 = 10
const n2 = 20
var resultado = n1 + n2

console.log(resultado)
console.log(typeof(resultado))

console.log(n1 == n2)
console.log(n1+10 == n2) //true pq    let n1       varia
console.log(n1 == n2+10) //false pq   const n2     não varia

var n3 = '10'
console.log(n1 == n3)
console.log(n1 === n3)

console.log(n1 === n3 && n1 != n2)
console.log(n1 === n3 || n1 != n2)let n1 = 10
const n2 = 20
var resultado = n1 + n2

console.log(resultado)
console.log(typeof(resultado))

console.log(n1 == n2)
console.log(n1+10 == n2) //true pq    let n1       varia
console.log(n1 == n2+10) //false pq   const n2     não varia

var n3 = '10'
console.log(n1 == n3)
console.log(n1 === n3)

console.log(n1 === n3 && n1 != n2)
console.log(n1 === n3 || n1 != n2)


//if else
let usuario1 = "Miguel";
let senhaUsuario1 = "AC1234";

if(usuario1 == "Miguel" && senhaUsuario1 == "AC1234"){
    console.log("Usuario logado com sucesso!")
} else {
    console.log("Usuario e/ou senha inválidos.")
}

//switch

//for está correto

let taboada = 8;
    for (let contador = 10; contador <=20; contador++){
        console.log(
            taboada, "x" , contador, '=',
            taboada * contador
        );
    }

    