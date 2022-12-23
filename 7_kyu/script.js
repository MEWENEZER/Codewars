// Vowel Count

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  //   let vowels = ['a', 'e', 'i', 'o', 'u'];
  //   let count = 0;

  //   for (let letter of str.split('')) {
  //     for (let word of vowels) {
  //       if (letter == word) {
  //         count++;
  //       }
  //     }
  //   }

  //   return count;

  return (str.match(/[aeiou]/gi) || []).length;
}

// Disemvowel Trolls

// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Square Every Digit

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num) {
  return Number(
    ('' + num)
      // String(num)
      .split('')
      .map((cur) => Math.pow(cur, 2))
      .join('')
  );
}

// Highest and Lowest

// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
  // return Math.max(...numbers.split(' ').map(Number));
  // Math.max.apply(null, numbers.split(' ').map(Number))));

  numbers = numbers.split(' ').map(Number);
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// Descending Order

// Your task is to make a function that can take any non-negative integer
// as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  return (
    String(n)
      .split('')
      // .sort((a, b) => b - a)
      .sort()
      .reverse()
      .join('')
  );
}

// You're a square!

// isSquare   3  // => false
// isSquare   4  // => true
// isSquare  25  // => true

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
  // Number.isInteger() method determines whether the passed value is an integer.
};

// List Filtering

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.filter((item) => typeof item == 'number');
  // filter returns an array of all matching elements
}

// Credit Card Mask

// "4556364607935616" --> "############5616"
// "64607935616" -->      "#######5616"
// "1" -->                "1"
//  "" -->                 ""
// "Skippy" --> "##ippy"

// return masked string
function maskify(cc) {
  // let arr = cc.split('');

  // for (let i = 0; i < arr.length - 4; i++) {
  //   arr[i] = '#';
  // }

  // return arr.join('');

  return cc
    .split('')
    .map((cur, index, array) => (array.length - index > 4 ? (cur = '#') : cur))
    .join('');
}

console.log(maskify('654321'));
