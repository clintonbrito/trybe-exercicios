// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatorio = 0;
for (index = 0; index < numbers.length; index += 1) {
  somatorio += numbers[index];
  console.log(somatorio);
}

// Calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatorio = 0;
let media = 0;
for (index = 0; index < numbers.length; index += 1) {
  somatorio += numbers[index];
}
media = somatorio / numbers.length;
console.log("O somatório dos números é:", somatorio);
console.log("A média aritmética dos números é:", media);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20) {
  console.log("Valor da Média Aritmética é maior que 20 :)");
} else {
  console.log("Valor da Média Aritmética é menor ou igual a 20 :)");
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let largestNumber = numbers[0];
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > largestNumber) largestNumber = numbers[index];
}
console.log(largestNumber);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    oddNumbers += 1;
  }
}
if (oddNumbers === 0) {
  console.log("Nenhum valor ímpar encontrado :(");
}
console.log(oddNumbers);

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerNumber = numbers[0];
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < smallerNumber) smallerNumber = numbers[index];
}
console.log(smallerNumber);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numbers2 = [];
for (index = 1; index <= 25; index += 1) {
  numbers2.push(index);
}
console.log(numbers2);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (index = 0; index < numbers2.length; index += 1) {
  console.log(numbers2[index] / 2);
}
