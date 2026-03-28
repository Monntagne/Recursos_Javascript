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

