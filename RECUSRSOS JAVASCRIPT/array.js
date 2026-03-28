const frutas = ["Banana", "Maça", "Uva", "Laranja", "Limão"];
console.log(frutas [0])
console.log(frutas [4])
console.log("total de frutas",frutas.length)

// Adicionando um elemento 
frutas.push("Pêsego")
console.log(frutas)

// excluindo  um elemento 
frutas.splice(2,1);
console.log(frutas);


// percorrendo array com for: 

for(let i=0; i<=frutas.length;i++){
    console.log( i," - ",frutas[i])    
}



// percorrendo array com metodo forEach: 

frutas.forEach((valor, indice) =>{
    console.log("Indice: ", indice,"; Fruta:", valor)
})


// percorrendo array com metodo for of:

for (const fruta of frutas){
    console.log("Fruta da vez: ", fruta)
}







// metodo filter

const numeros = [1,2,3,4,5,6,7,8,9,10]

const numerosPares = numeros.filter((numero) => {
    return numero %2 === 0; // condição verdadeira
})

const numerosIpares = numeros.filter((numero) => {
    return numero %2 !== 0; // condição verdadeira
})


console.log("Todos os numeros", numeros);
console.log("Numeros pares", numerosPares);
console.log("Numeros Ipares", numerosIpares);




//Metodo map para manipulação de valores 
//Tratamos dessa doema como valores diferentes (Sem modificar o array original)




const quadrado = numeros.map((numero) => {
    return numero*numero
}) 
console.log("Valores ao quadrado: ", quadrado);







