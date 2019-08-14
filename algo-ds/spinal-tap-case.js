'use strict'

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {
  // regex to find capital letter, add a space in front
  // split with all non word
  // regex so all consecutive spaces become a single space
  // join the array by "-"
  return str.replace(/([A-Z])/g, " $&").trim().split(/[\W_]+/)
    .map(el => el.toLowerCase()).join("-");
}

spinalCase('This Is Spinal Tap');
spinalCase('  thisIsSpinalTap  ');
spinalCase("Teletubbies say Eh-oh");
