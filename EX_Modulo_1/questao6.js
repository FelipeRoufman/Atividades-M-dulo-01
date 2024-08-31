const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Valor de A: "));
let b = parseFloat(prompt("Valor de B: "));
let c = parseFloat(prompt("Valor de C: "));

if (a + b > c && a + c > b && b + c > a) {
    console.log(`É possível formar uma triângulo`)
} else {
    console.log(`Não é possível formar uma triângulo`)
}
if (a==b==c){
    console.log("O triângulo é equilatero")
}else if(a==b || a==c || b==c){
    console.log('O triângulo é isósceles')
}else{
    console.log('O triângulo é escaleno')
}