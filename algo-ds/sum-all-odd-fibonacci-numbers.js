function fibArray(num) {
  let res = [];
  let curr = 1;
  let ind = res.length;
  while (curr <= num) {
    curr = (ind === 0 || ind === 1 ? 1 : res[ind - 1] + res[ind - 2]);
    if (curr > num) break;
    res.push(curr);
    ind += 1;
  }
  return res;
}

function sumFibs(num) {
  let fibs = fibArray(num);
  // console.log(fibs);
  return fibs.filter(el => el % 2 == 1).reduce((mem, el) => mem + el, 0);
}

console.log(sumFibs(4));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
