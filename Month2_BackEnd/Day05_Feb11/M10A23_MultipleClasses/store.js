class Store {
  constructor(name, stock, revenue) {
    this._name = name;
    this._stock = stock;
    this._revenue = revnue;
  }

  get name() {
    return this._name;
  }

  get stock() {
    return this._stock;
  }

  get revenue() {
    return this._revenue;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
