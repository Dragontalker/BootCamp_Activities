function MiniBank(balance) {
  this.balance = balance;
  // Task 1.1: Define a property named `statement`. 
  // Assign an initial value of an array containing the `balance` parameter passed to the constructor.
  this.statement = [balance];

  // Task 1.2: Add a `setBalance` function. 
  // This function should receive a `value` parameter and assign it to the `balance` property of `MiniBank`.
  this.setBalance = (value) => {
    this.balance = value;
  };

  // Task 1.3:  Write an `updateStatement` function that takes in a number and pushes it to the `statement` array.
  this.updateStatement = (value) => {
    this.statement.push(value);
  };

  // Task 1.4: Write a `getStatement` function that returns the `statement` property.
  this.getStatement = () => {
    return this.statement;
  };

  // Task 1.5: Write a `printStatement` function that prints each element in the `statement` array on its own line.
  this.printStatement = () => {
    const statement = this.getStatement();
    for (let i = 0; i < statement.length; i++) {
      console.log(`${i+1}. ${statement[i]}`);
    };
  };

  // Task 1.6: Write a `deposit` function that takes a value and performs the following:
  // - Calls `updateStatement` to record the deposit transaction.
  // - Calls `setBalance` to update the `balance` property.
  this.deposit = (value) => {
      if (typeof value !== 'number' || value <= 0) {
        throw new Error("'value' must be a positive number!");
      }
      const newBalance = this.getBalance() + value;
      this.setBalance(newBalance);
      this.updateStatement(newBalance);
      console.log(`Deposited ${value}!`);
    };

  // Task 1.7: Write a `withdraw` function that takes a value and performs the following:
  // - Calls `updateStatement` to record the withdrawal transaction. (Be sure to use a negative number here.)
  // - Calls `setBalance` to update the `balance` property.
  this.withdraw = (value) => {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error("'value' must be a positive number");
    }
    const newBalance = this.getBalance() - value;
    if (newBalance < 0) {
      throw new Error('Insufficient funds for this transaction');
    }
    this.setBalance(newBalance);
    this.updateStatement(-value);
    console.log(`Withdrew ${value}!`);
  };

  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
}

// Task 2.1: Create a new `bank` object using the `MiniBank` constructor function.
const bank = new MiniBank(0);

// Task 2.2: Print the `bank` balance.
bank.printStatement();

// Task 2.3: Deposit some money into the `bank` object.
bank.deposit(85);
bank.printBalance();

// Task 2.4: Print the `bank` balance.
bank.printStatement();

// Task 2.5: Withdraw some money from the `bank` object.
bank.withdraw(20);
bank.printBalance();

// Task 2.6: Print the `bank` balance.
bank.printStatement();