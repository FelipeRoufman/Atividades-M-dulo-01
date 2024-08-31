const prompt = require('prompt-sync')();

let comida;

console.log("1. Bolo");
console.log("2. Cafe");
console.log("3. Salgado");

comida = parseInt(prompt("Digite o número desejado: "));


switch (comida) {
    case 1:
        console.log(`Você escolheu Bolo`)
        break;
    case 2: 
        console.log(`Você escolheu Cafe`)
        break;
    case 3:
        console.log(`Você escolheu Salgado`)
        break;

    default:
        console.log("Opção inválida")
        break;
}