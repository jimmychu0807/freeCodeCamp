/**
  Ref: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

  JavaScript Algorithms and Data Structures Projects: Palindrome Checker
  Return true if the given string is a palindrome. Otherwise, return false.

  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

  Note
  You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

  We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

  We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

  Remember to use Read-Search-Ask if you get stuck. Write your own code.
**/

const DEBUG = false;

function palindrome(str) {
  // Good luck!

  // 1. remove all spacing & non-alphanumeric char
  // 2. upcase all letter
  // 3. do a pop & a shift and compare

  let cleansedStr = str.replace(/[^A-Za-z0-9]/gi, '').toUpperCase();
  if (cleansedStr.length === 0) return false;

  if (DEBUG) console.log(`${str}: ${cleansedStr}`);

  let strArr = cleansedStr.split('');
  while (strArr.length > 1) {
    let last = strArr.pop();
    let first = strArr.shift();
    if (last !== first) return false;
  }
  return true;
}

const tests = ['racecar', 'RaceCar', 'race CAR', '2A3*3a2', '2A3 3a2',
  '2_A3*3#A2', '0_0 (: /-\ :) 0-0'];

console.log(tests.map(word => palindrome(word)));
