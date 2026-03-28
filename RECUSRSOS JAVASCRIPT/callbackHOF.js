// H - HIGHER
// O - ORDER
// F - FUNCTION 
// FUNÇÃO DE ALTA ORDEM 
// UMA FUNÇÃO QUE CHAMA OUTRAS FUNCÇÕES


function calcular(numero1, numero2, opeacao){
    return opeacao(numero1, numero2)
}


function soma(num1, num2){
        return num1 + num2;
};


function subtrair(num1, num2){
        return num1 - num2;
};


const resultado = calcular(10, 5, soma);
const resultado2 =calcular(10, 5, subtrair);

console.log(" a soma dos números é: ",resultado);
console.log(" a soma dos números é: ",resultado2);