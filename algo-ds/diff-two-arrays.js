'use strict'

// question: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var map = new Map();
  arr1.forEach(el => map.set(el, false));

  // checked all arr2 elements
  arr2.forEach(el => {
    if (map.has(el)) {
      map.set(el, true);
      return;
    }
    newArr.push(el);
  });
  // adding arr1 elements into newArr
  newArr = newArr.concat(Array.from(map.keys()).filter(k => !map.get(k)));
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
