var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

  let _firstAndLast = firstAndLast;

  this.setFullName = function(firstAndLast) {
    _firstAndLast = firstAndLast;
    return this.getFullName();
  };
  this.getFullName = function() {
    return _firstAndLast;
  };

  this.setFirstName = function(first) {
    _firstAndLast = `${first} ${_firstAndLast.split(" ")[1]}`;
    return this.getFirstName();
  };
  this.getFirstName = function() {
    return _firstAndLast.split(" ")[0];
  };

  this.setLastName = function(last) {
    _firstAndLast = `${_firstAndLast.split(" ")[0]} ${last}`;
    return this.getLastName();
  };
  this.getLastName = function() {
    return _firstAndLast.split(" ")[1];
  };

  return this;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
