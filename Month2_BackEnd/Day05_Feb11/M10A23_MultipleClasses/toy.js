class Toy {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  };
};

// Test 1:
const actionFigure = new Toy('Action Figure', 14.99, 5);
console.log(actionFigure.name);
console.log(actionFigure.price);
console.log(actionFigure.count);

// Test 2:
const rareToy = new Toy('Rare Toy', 17.99, 1);
console.log(rareToy.name);
console.log(rareToy.price);
console.log(rareToy.count);

const toys = [
  new Toy("Action Figure", 14.99, 5),
  new Toy("Rare Toy", 17.99, 1)
];

module.exports = {
  Toy,
  toys
};
