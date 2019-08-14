'use strict'
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

function destroyer(arr, ...args) {
  // Remove all the values
  args.forEach(el => {
    arr = arr.filter(arr_el => arr_el !== el);
  });
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
