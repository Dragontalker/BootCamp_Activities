class Store {
  constructor(name, stock, revenue) {
    this._name = name;
    this._stock = stock;
    this._revenue = revenue;
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

// Test: 
const walMart = new Store('Wal-Mart', 500, 40000);
console.log(walMart.name);
console.log(walMart.stock);
console.log(walMart.revenue);
walMart.printRevenue();
walMart.welcome();


module.exports = Store;
