// OPERADORES RELACIONAIS 
// >, <, ==, ===, <=, >= 

const idadeNalon = 26;
const idadeClara = 16;


const saoIguais = idadeNalon == idadeClara;
console.log("São iguais " + saoIguais)

const comparacao = idadeNalon > idadeClara;
console.log("è maior? " + saoIguais)

const comparacao2 = idadeNalon < idadeClara;
console.log("É menor " + saoIguais)

const comparacao3 = idadeNalon !== idadeClara;
console.log("São diferentes " + saoIguais)

// COMPARADORES E, OU NÃO 

const idade = 12 
const MaiorIdade= idade >=18
const possuiCnh = true

const podeDirigir = MaiorIdade && possuiCnh // E
console.log("Pode dirigir? " + podeDirigir)




const podeViajar = MaiorIdade || possuiCnh // OU  
console.log("Pode viajar? " + podeViajar)



const acompanhante = !MaiorIdade; // OU  
console.log("Precisa de Acompanhante? " + acompanhante)
