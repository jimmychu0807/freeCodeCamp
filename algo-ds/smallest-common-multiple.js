function smallestCommons(arr) {
  let small = arr[0] > arr[1] ? arr[1] : arr[0];
  let large = arr[0] > arr[1] ? arr[0] : arr[1];

  let num = large;
  while(true) {
    let divisible = true;
    for (let i = small; i <= large; i++) {
      if (num % i == 0) continue;
      divisible = false;
    }
    if (divisible) return num;
    num += 1;
  }
}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([5,1]));
console.log(smallestCommons([10,2]));
console.log(smallestCommons([1,13]));
console.log(smallestCommons([23,18]));
