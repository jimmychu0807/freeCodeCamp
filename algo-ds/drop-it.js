function dropElements(arr, func) {
  let ind = 0;
  let getTrue = false;

  for (ind = 0; ind < arr.length; ind++) {
    if (func(arr[ind])) {
      getTrue = true;
      break;
    }
  }

  if (!getTrue) return [];
  return arr.slice(ind);
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
