function getOrbitalPeriod(avgAlt) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  console.log(avgAlt);
  return Math.round(Math.sqrt(Math.pow(avgAlt + earthRadius, 3) * 4 * (Math.PI*Math.PI) / GM));
}

function orbitalPeriod(arr) {
  return arr.map(el => {
    return { name: el.name, orbitalPeriod: getOrbitalPeriod(el.avgAlt) };
  });
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
