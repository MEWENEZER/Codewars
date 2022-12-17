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

//Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
