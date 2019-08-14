'use strict'
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

function uniteUnique(...args) {
  let mySet = new Set();

  args.forEach(arr => {
    arr.forEach(el => {
      mySet.add(el);
    });
  });
  return Array.from(mySet);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
