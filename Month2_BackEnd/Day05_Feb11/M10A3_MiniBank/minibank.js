function MiniBank(balance) {
  this.balance = balance;
  // Task 1.1: Define a property named `statement`. 
  // Assign an initial value of an array containing the `balance` parameter passed to the constructor.
  this.statement = [balance];

  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
}
