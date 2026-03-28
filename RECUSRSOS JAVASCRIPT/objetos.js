const pessoa = {
    id: 1, 
    nome: "Vinicius - Trouxa",
    idade: 26,
    Gênero: "H",
    Estuda: true
}
pessoa.sobrenome = "Carlos da Silva santos"
console.log(pessoa.nome, pessoa.sobrenome)


// for in ->


for (const chave in pessoa ){
    console.log("Chave: ", chave)
     console.log("Valores: ", pessoa[chave])
}

// metodos para objetos

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)
const entradas = Object.entries(pessoa)

console.log("Chaves: ",chaves)
console.log("Valores: ",valores)
console.log("Entradas: ",entradas)