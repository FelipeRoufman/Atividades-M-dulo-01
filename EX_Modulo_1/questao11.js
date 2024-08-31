const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt(`Digite outro número: `));
    soma += numero;
}

console.log(`A soma dos números é:  + ${soma}`);