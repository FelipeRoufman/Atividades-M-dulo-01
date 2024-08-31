const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Digite a idade: "));

if(idade >= 0 && idade < 14) {
        console.log("Criança");
    } else if (idade >= 14 && idade < 18) {
        console.log("Adolescente");
    } else if (idade >= 18 && idade < 50) {
        console.log("Adulto");
    } else {
        console.log("Idoso")
}
