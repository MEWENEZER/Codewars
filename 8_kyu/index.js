// Create a function that takes an integer as an argument and returns
// "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  return number % 2 ? 'Odd' : 'Even';
}

// This code does not execute properly. Try to figure out why.
// function multiply(a, b){
//   a * b
// }

function multiply(a, b) {
  return a * b;
}

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;

  // передаем 0 - аккумулятор, 1-й запуск sum = 0, сделано для проверки, если массив пустой
  return arr.reduce((sum, cur) => sum + (cur > 0 ? cur : 0), 0);
}

// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  return str.split('').reverse().join('');
}
