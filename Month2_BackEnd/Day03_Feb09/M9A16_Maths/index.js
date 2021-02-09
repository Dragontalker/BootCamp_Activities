// TODO: Import `maths.js`
const Math = require('./maths');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
console.log(operation);

const numOne = parseInt(process.argv[3]);
console.log(numOne);

const numTwo = parseInt(process.argv[4]);
console.log(numTwo);

// Therefore, when you process in node: node index.js 1 2 3, the console will print 1 2 3.

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
