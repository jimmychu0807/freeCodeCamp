'use strict'

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function charIsConsonant(str) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(str) >= 0;
}

function translatePigLatin(str) {
  var i = 0;
  let strArr = str.split('');
  for(i = 0; i < strArr.length; i++) {
    if (charIsConsonant(strArr[i])) break;
  }

  // If a word begins with a vowel you just add "way" to the end
  if (i === 0) return `${str}way`;

  let front = str.slice(i);
  let back = str.slice(0, i);
  let result = `${front}${back}ay`;
  return result;
}

translatePigLatin("consonant");
