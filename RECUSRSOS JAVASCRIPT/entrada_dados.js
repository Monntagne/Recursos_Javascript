//biblioteca do node pra receber informação do usuario via terminal 

const readline = require('readline');


 //dis que a leitura será via erminal 

 const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

leitor.question("Qual é seu nome? ", (nome) => {
    console.log("Olá ", nome);
    console.log("Seja bem-vind(a)!");

    leitor.question("Qual sua Idade? ", (idade) =>{
        if(idade>=18){
        console.log("Você é maior de idade!")    
        }
        else{
            console.log("Você é menor de idade!")
        }
        leitor.close();
        
    });
});




