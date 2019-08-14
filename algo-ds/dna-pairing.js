// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
  let result = str.split('').map(char => {
    switch (char) {
      case 'A':
        return ['A', 'T'];
      case 'T':
        return ['T', 'A'];
      case 'C':
        return ['C', 'G'];
      case 'G':
        return ['G', 'C'];
    }
  });
  return result;
}

pairElement("GCG");
pairElement("ATCGA");
