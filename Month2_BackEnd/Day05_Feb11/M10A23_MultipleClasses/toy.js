class Toy {
  constructor(name, price, count) {
    this._name = name;
    this._price = price;
    this._count = count;
  };

  get name() {
    return this._name;
  };

  get price() {
    return this._price;
  };

  get count() {
    return this._count;
  };
};

// Test 1:
const actionFigure = new Toy('Action Figure', 14.99, 5);
console.log(actionFigure.name);
console.log(actionFigure.price);
console.log(actionFigure.count);

const toys = [
  new Toy("Action Figure", 14.99, 5),
  new Toy("Rare Toy", 17.99, 1)
];

module.exports = {
  Toy,
  toys
};
