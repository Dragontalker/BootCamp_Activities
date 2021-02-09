// TODO: Import `maths.js`
const maths = require('./maths');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
console.log(`The first argument is "${operation}".`);

const numOne = parseInt(process.argv[3]);
console.log(`The second argument is "${numOne}".`);

const numTwo = parseInt(process.argv[4]);
console.log(`The third argument is "${numTwo}".`);

// Therefore, when you process in node: node index.js 1 2 3, the console will print 1 2 3.

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
switch (operation) {
    case 'sum':
      console.log(`The result is "${maths.sum(numOne, numTwo)}".`);
      break;
    case 'difference':
      console.log(`The result is "${maths.difference(numOne, numTwo)}".`);
      break;
    case 'product':
      console.log(`The result is "${maths.product(numOne, numTwo)}".`);
      break;
    case 'quotient':
      console.log(`The result is "${maths.quotient(numOne, numTwo)}".`);
      break;
    default:
      console.log('Check your maths!');
}
