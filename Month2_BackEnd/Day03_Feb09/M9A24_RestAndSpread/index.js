// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// Spread Operator.
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// Should be the same output from console.log(songs);
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // reduce() takes the array and output a single value from it.
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
// the expected value of output is 6.
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// by using the spread operator, the function can take as many as parameters instead of just 3.
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
// the expected value of output is 6.
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// the expected value of output is 110.
console.log(additionSpread(1, 2, 3, 4, 100));

// Bonus: What other data types can you use the spread operator or rest parameters on?
// Answer: the spread and rest operators work on list or object data types.