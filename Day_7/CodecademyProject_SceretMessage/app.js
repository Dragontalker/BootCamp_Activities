let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Task 1: Use an array method to remove the last string of the array secretMessage.
secretMessage.pop();


// Task 2: Check .length to verify the change.
console.log(secretMessage.length);

// Task 3: Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push('to', 'Program');

// Task 4: Change the world easily to the world right by accessing the index and replacing it.
let pos = secretMessage.indexOf('easily');
secretMessage[pos] = 'right';

// Task 5: Use an array method to remove the first string of the array.
secretMessage.shift();

// Task 6: Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift('Programming');

// Task 7: Use an array method to remove the strings get, right, the, first, time, and replace them with the single string know,.
let pos = secretMessage.indexOf('get');
secretMessage.splice(pos, 5, 'know, ');

// Task 8: On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(' '));