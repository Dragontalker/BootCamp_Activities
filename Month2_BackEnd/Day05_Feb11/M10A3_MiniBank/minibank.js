function MiniBank(balance) {
  this.balance = balance;
  // Task 1.1: Define a property named `statement`. 
  // Assign an initial value of an array containing the `balance` parameter passed to the constructor.
  this.statement = [balance];

  // Task 1.2: Add a `setBalance` function. 
  // This function should receive a `value` parameter and assign it to the `balance` property of `MiniBank`.
  this.setBalance = (value) => {
    this.balance = value;
  }

  // Task 1.3:  Write an `updateStatement` function that takes in a number and pushes it to the `statement` array.
  this.updateStatement = (value) => {
    this.statement.push(value);
  }

  // Task 1.4: Write a `getStatement` function that returns the `statement` property.
  this.getStatement = () => {
    return this.statement;
  }

  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
}