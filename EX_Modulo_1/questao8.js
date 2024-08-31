const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("1º número: "));
let numero2 = parseInt(prompt("2º número: "));
let armazenar;

while (numero2 === numero1) {
    console.log("O segundo número não pode ser igual ao primeiro")
    numero2 = parseInt(prompt("Digite 2º numéro: "));
}

if (numero1 > numero2) {
    console.log(`Valores em ordem crescente: ${numero1}, ${numero2}`);
} else {
    console.log(`Valores em ordem crescente: ${numero2}, ${numero1}`);
}