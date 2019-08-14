// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {
  let re = new RegExp(before, "g");

  // convert the first char of after if needed
  if (before.charAt(0).match(/[A-Z]/)) {
    after = `${after.charAt(0).toUpperCase()}${after.slice(1)}`;
  }

  str = str.replace(re, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
