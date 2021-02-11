function Arithmetic(number = 0) {
  this.number = number;
}

Arithmetic.prototype.plus = function(num = 0) {
  const newNumber = this.number + num;

  return new Arithmetic(newNumber);
};

Arithmetic.prototype.minus = function(num = 0) {
  const newNumber = this.number - num;

  return new Arithmetic(newNumber);
};

Arithmetic.prototype.value = function() {
  return this.number;
};

module.exports = Arithmetic;

// Task 3: What do you think of the significance of the `pluse` and `minus` methods returning `new Arithmetic` is?
// By taking the number from input object and perform operation, plus and minue also create new object.