// 5. Faça um programa usando a estrutura “for” que leia um número
// inteiro positivo e mostre na tela uma contagem de 0 até o valor
// digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
let contagem = ""

let valor = Number(prompt("Digite um valor: "));
for (let i = 0; i <= valor; i++) {
    contagem = contagem + i + ",";
}

console.log("Contagem: " + contagem +  "FIM");

