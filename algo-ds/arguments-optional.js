function addTogether(...args) {
  if (args.length < 1 || args.length > 2) return undefined;

  if (args.length === 2) {
    if (typeof args[0] !== "number" || typeof args[1] !== "number") return undefined;
    return args[0] + args[1];
  }
  if (args.length === 1) {
    if (typeof args[0] !== "number") return undefined;
    return (e) => {
      if (typeof e !== "number") return undefined;
      return args[0] + e;
    }
  }
}

console.log(addTogether(2,3));

console.log(addTogether(2)(3));
