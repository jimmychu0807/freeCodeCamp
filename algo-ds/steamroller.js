function steamrollArray(arr) {
  // I'm a steamroller, baby
  if (!Array.isArray(arr)) return arr;
  return arr.reduce((mem, el) => mem.concat(steamrollArray(el)), []);
}

console.log(steamrollArray([1, [2], [3, [[4]]] ]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
