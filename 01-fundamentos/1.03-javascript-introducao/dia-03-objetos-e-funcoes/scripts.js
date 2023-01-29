// Crie um algoritmo que imprima na tela o fatorial de 10.

let number = 1;
for (let index = 10; index > 0; index -= 1) {
  number *= index;
}
console.log(number);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// 1 - Split all the letter from word tryber into a new array;
// 2 - Reverse elements order of this array;
// 3 - Create a new string grabbing the elements in just one string;
// 4 - Print the result.

let word = "tryber";
let newWord = word.split("").reverse().join("");
console.log(newWord);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallestWord.length) {
        smallestWord = array[index];
    }
}
console.log(biggestWord, smallestWord);

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

function primeNumbers(num) {
    for (let divisor = 2; divisor < num; divisor += 1) 
    if (num % divisor === 0) return false;
    return true;
}

let primeNumbers2 =[];

for (let i = 2; i < 50; i += 1) {
    if (primeNumbers(i)) {
        primeNumbers2.push(i);
    }
}
console.log(primeNumbers2[primeNumbers2.length-1]);

// Essa função acima eu adaptei de um post no Stack Overflow neste link: https://pt.stackoverflow.com/questions/462432/criar-um-algoritmo-em-js-para-listar-todos-os-n%C3%BAmeros-primos-menores-ou-igual