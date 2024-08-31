const prompt = require('prompt-sync')();

let quantidade = parseFloat(prompt("Digite quantas maçãs você quer comprar: "));
let valor;
if (quantidade < 12) {
    valor = 0.30;
} else {
    valor = 0.25;
}

console.log(`Total de maçãs é ${quantidade} e o valor da unidade é ${valor} e o valor total será R$ ${valor * quantidade}`);