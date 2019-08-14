'use strict'
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

const FULL_ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str) {
  // find the start index
  // slice the arr
  // if equal to str, return undefined
  let firstChar = str.charAt(0);
  let startIndex = FULL_ALPHABETS.indexOf(firstChar);
  let refFullSegment = FULL_ALPHABETS.slice(startIndex, startIndex + str.length);
  if (refFullSegment === str) return undefined;

  let tryLen = 1;
  for (tryLen; tryLen <= str.length; tryLen++) {
    let strSegment = str.slice(0, tryLen);
    let refSegment = refFullSegment.slice(0, tryLen);
    if (strSegment !== refSegment) break;
  }
  return refFullSegment.charAt(tryLen - 1);
}

console.log(fearNotLetter("abcd"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghjklmno"));
