"use strict";

/**
Ref: http://bit.ly/2ZpHzHH
**/

function telephoneCheck(str) {
  str = str.trim();
  // match: 5555555555
  if (str.match(/^\d{10}$/)) return true;

  // match: 15555555555
  if (str.match(/^\d{11}$/) && str.charAt(0) == '1') return true;

  // match: 555 555 5555
  if (str.match(/^\d{3}[\s-]?\d{3}[\s-]?\d{4}$/)) return true;

  // match: 1 555 555 5555
  if (str.match(/^1[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/)) return true;

  // match: (555) 555-5555, (555)555-5555
  if (str.match(/^\(\d{3}\)[\s-]?\d{3}[\s-]?\d{4}$/)) return true;

  // match: 1 (555) 555-5555
  if (str.match(/^1[\s-]?\(\d{3}\)[\s-]?\d{3}[\s-]?\d{4}$/)) return true;

  return false;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("5555-555-5555"));
