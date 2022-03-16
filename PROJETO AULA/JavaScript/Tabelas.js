let dadosAluno = { //objeto/Json - atributos e valor
    Nome: 'Naruto',
    Curso: 'Virado no Jiraya',
    Módulo: '9 caldas',
    Professor: 'Xavier',
}

let propriedades = [] = Object.keys(dadosAluno) //array vazio - keys chave de dadosAlunos = nome
let valores = [] = Object.values(dadosAluno) //array vazio - valores dadosAlunos = Naruto

let th = [] //array de linha - th para negrito
let td = [] //array de colunas

let trh = document.createElement('tr') //como não existe um elemento em outro documento, coloca create. Se tivesse um html seria getElement ou query
let trd = document.createElement('tr')
let table = document.createElement('table') 

for(let i = 0; i <= 3; i++) { //i é utilizado como índice que representa o cada linha no objeto - desse jeito ele vai incrementando as informações na  tabela
    th[i] = document.createElement('th')
    td[i] = document.createElement('td')

    th[i].innerHTML = propriedades[i] //innerHTML serve para escrever no html
    td[i].innerHTML = valores[i]
}

for(let i = 0; i <= 3; i++){ //índice 3 pq tem 4 elementos 0 1 2 3 
    trh.appendChild(th[i]) //saber quem é o filho cada linha vai pegando de um em um e colocando como filho da próxima linha
    trd.appendChild(th[i])
}

table.setAttribute('border', '1') //borda e pixel da borda
table.appendChild(trh) 
table.appendChild(trd)

document.body.appendChild(table)

