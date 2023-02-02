// запись и чтение из фалйа

// function sum(str) {
//   return str
//     .split(' ')
//     .map(Number)
//     .reduce((sum, item) => sum + item, 0)
//     .toString();
// }

// console.log(sum('2 2'));

// const fs = require('fs');
// let fileContent = fs.readFileSync('input.txt', 'utf8');

// const [a, b] = fileContent.split(' ').map(Number);
// let result = a + b;

// fs.writeFileSync('output.txt', result.toString());

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

let numbers = fileContent.split('\r\n').map(Number);

let result = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i] == 1 ? result++ : (result = 0);
}

fs.writeFileSync('output.txt', result.toString());

// for (let i = 0; i < s.length; i++) {
//   if (j.includes(s.charAt(i))) {
//     result++;
//   }
// }

// fs.writeFileSync('output.txt', result.toString());
