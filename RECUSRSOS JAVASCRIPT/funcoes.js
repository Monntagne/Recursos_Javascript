// DECLARANDO UMA FUNÇÃO 

//PARA DECLARAR UMA FUNÇÃO, SERÁ NECESSÁRIO A APALAVRA RESERVADA  "FUNCTION" + NOME DA FUNÇÃO 

function saudacao(nome) {
    console.log("Olá", nome)
}

saudacao("Seu Truxa!!")



function dobroNum(numero) {
    return numero * 2

};

const numeroDobro = dobroNum(50)
console.log("O dobro de 50 é", numeroDobro)


// arrow function 

const saud = (nome) => {
    console.log("Olá ", nome)
}


saud("Trouxa não bruxo!")


// função mais simplificada 

const saudacao2 = nome => console.log("Olá ", nome);
saudacao2 ("Vini")


const dobro2 = numero  => numero*2;
console.log(dobro2(100))











