function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function sumPrimes(num) {
  let arr = [...Array(num + 1).keys()].slice(2).filter(el => isPrime(el))
  return arr.reduce((mem, el) => mem + el, 0);
}

console.log(sumPrimes(10));
console.log(sumPrimes(997));
