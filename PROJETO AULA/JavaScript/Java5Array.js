//Array

let lista = ["Pão de forma", "Requeijão", "Queijo", "Presunto"]

console.log(lista);

//Push - adicionar elementos em um Array com JavaScript

let ficha = []

ficha.push("Anne");
ficha.push("José");
ficha.push("Roberto");

console.log(ficha);

//For

for (var itemArray = 0; itemArray < lista.length; itemArray++)
{
console.log(lista[itemArray]);
}

//Slice() - remove elementos existentes a partir do número escolhido do array

var numeros = Array (1, 2, 3, 4, 5)

var novosNumeros = numeros.slice(1,4)

console.log(novosNumeros)

//Pop() - remove o último elemento do Array, além de remover ele pode colocar o item removido diretamente dentro de uma variável

let seres = []

seres.push("Maria", "Rosana", "Fidêncio", "Sophia", "Clara");
seres.pop();

console.log(seres);

let pessoasExcluidas = seres.pop()

console.log(pessoasExcluidas);

//Splice() - remove um elemento específico

let mercado = [];

mercado.push("Ovo", "Macarrão", "Bolacha");

mercado.splice(1);

console.log(mercado);

//Shift() - remove o primeiro elemento de um Array

let cafeteria = []
cafeteria.push("Café","Pão", "Mantega", "Leite");
cafeteria.shift();

console.log(cafeteria);

//Length - saber a quantidade de elementos existentes em um Array

let carros = [];
carros.push("BMW", "Ford", "GM", "Ferrari");

console.log(carros.length);

//Sort - ordena os itens do Array em ordem alfabética

let escola = [];
escola.push("Mesa", "Cadeira", "Filtro", "Brinquedos");
escola.sort();

console.log(escola);








