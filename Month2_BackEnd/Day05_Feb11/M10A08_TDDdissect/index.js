const Arithmetic = require("./arithmetic");

const value = new Arithmetic(4)
  .plus(8)
  .plus(15)
  .minus(16)
  .minus(23)
  .plus(42)
  .plus(108)
  .value();

console.log(value);


// Task 1: What do you think will be printed to the console?
// My guess: the result might be 4+8+15-16-23+42+108=138.

// Task 2: Run the index.js in your terminal, was your guess correct?
// Yes, executing index.js gives 138, my guess was correct.

