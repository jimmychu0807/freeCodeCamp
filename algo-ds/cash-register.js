"use strict";

// src: http://bit.ly/2ZxfKNz
function getCoinVal(name) {
  switch (name) {
    case "PENNY": return 0.01;
    case "NICKEL": return 0.05;
    case "DIME": return 0.1;
    case "QUARTER": return 0.25;
    case "ONE": return 1;
    case "FIVE": return 5;
    case "TEN": return 10;
    case "TWENTY": return 20;
    case "ONE HUNDRED": return 100;
  }
}

function fround(num, decimal = 2) {
  return parseFloat(num.toFixed(decimal));
}

function parseCoins(cid) {
  return cid.map(el => [ el[0], { value: getCoinVal(el[0]), qty: Math.round(el[1]/getCoinVal(el[0])) }])
    .filter(el => el[1].qty != 0)
    .sort((el1, el2) => el2[1].value - el1[1].value);
}

function checkCashRegister(price, cash, cid) {
  let result = { status: "OPEN", change: [] };
  let cashRegister = parseCoins(cid);

  // console.log(cashRegister);
  let changeLeft = cash - price;
  cashRegister.forEach(coinSet => {
    if (coinSet[1].value > changeLeft) return;
    let changedQty = Math.min(coinSet[1].qty, Math.floor(changeLeft/coinSet[1].value));
    changeLeft = fround(changeLeft - changedQty * coinSet[1].value);
    coinSet[1].qty -= changedQty;
    result.change.push([coinSet[0], coinSet[1].value * changedQty]);
  });

  if (changeLeft != 0) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  } else if (cashRegister.filter(el => el[1].qty != 0).length == 0) {
    result.status = "CLOSED";
    result.change = cid;
  }

  return result;
}

console.log(
  // checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 0], ["TWENTY", 60], ["ONE HUNDRED", 100]])

  // checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

  // checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
);
