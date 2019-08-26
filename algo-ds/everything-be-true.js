function truthCheck(collection, pre) {
  // Is everyone being true?
  return (collection.filter(el => !el[pre]).length > 0 ? false : true);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
