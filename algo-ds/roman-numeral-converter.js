"use strict";

/**
Ref: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
**/

const DIGITS = ['IVX', 'XLC', 'CDM', 'M'];

function getRomanNumeralDigit(num, digit) {
  let digits = DIGITS[digit].split('');
  switch(num) {
    case 0: return(``);
    case 1: return(`${digits[0]}`);
    case 2: return(`${digits[0]}${digits[0]}`);
    case 3: return(`${digits[0]}${digits[0]}${digits[0]}`);
    case 4: return(`${digits[0]}${digits[1]}`);
    case 5: return(`${digits[1]}`);
    case 6: return(`${digits[1]}${digits[0]}`);
    case 7: return(`${digits[1]}${digits[0]}${digits[0]}`);
    case 8: return(`${digits[1]}${digits[0]}${digits[0]}${digits[0]}`);
    case 9: return(`${digits[0]}${digits[2]}`);
  }
}

function convertToRoman(num) {
  let result = '';
  let digit = 0;
  let remainder = 0;
  while (num != 0) {
    remainder = num % 10;
    num = Math.floor(num / 10);

    let romanDigits = getRomanNumeralDigit(remainder, digit)
    result = `${romanDigits}${result}`
    digit += 1;
  }
  return result;
}

console.log(convertToRoman(36));
console.log(convertToRoman(891));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
