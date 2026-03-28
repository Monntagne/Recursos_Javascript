// LAÇOS DE REPETÇÃO 
// WHILE, DO WHILE E FOR 

let contador =1
let contador2 =20

//pre testado 
while (contador<=10){       // testa aqui antes de execultar o codigo 
    console.log(contador+"")
    contador ++;

}

do{
    console.log(contador2+"");
    contador2++;
}while(contador2<=10)


for (let numero =1; numero <=5; numero++){
console.log(numero,"")
}





let palavra = "calopsita";

// length conta quantos caraquiters existem em uma string


for( let contador = 0; contador<=palavra.length;contador++){
    console.log(palavra[contador])
}
