"use strict";

/**
Ref: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
**/

function rot13(str) { // LBH QVQ VG!
  return str.split('').map(el => {
    let code = el.charCodeAt(0);
    // rotate code
    if (code >= 65 && code < 78) {
      code += 13;
    } else if (code >= 78 && code < 104) {
      code -= 13;
    }
    return String.fromCharCode(code);
  }).join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
