// 2. Math
// round - arredonda
let pi = 3.1416;
console.log(Math.round(pi));

// abs - ignora o valor negativo
let valorNegativo = -130;
console.log(Math.abs(valorNegativo));

// floor - arredonda e desconsidera o flutuante
console.log(Math.floor(pi))

// pow - eleva à potência - 5x2
console.log(Math.pow(5, 2))

let alunos = {
    nome: "Ronaldo",
    idade: 33,
    altura: 1.82,
    calculo: (numParametro) => numParametro * 2,
    materias: [
        "JavaScript", "React", "NodeJS"
    ]
}

//Exiba no console apenas a altura
console.log(alunos.altura)

//Modifique o 2 em cálculo para uma arrow function com parâmetro
console.log(alunos.calculo(5))

//Exiba no console apenas materia NodeJS
console.log(alunos.materias[2])