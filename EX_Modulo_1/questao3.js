const prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Nota do aluno: "));

if (nota < 5) {
    console.log("Aluno reprovado.");
} else if (nota >= 5 && nota < 6) {
    console.log("Aluno em recuperação");
} else {
    console.log("Aluno aprovado.");
}