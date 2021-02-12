// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';


const practiceCoding = () => {
  return new Promise((resolve, reject) => {
    if (studentDistracted) {
      reject(new Error('Coding stopped - Student is ditracted'))
    } 
    resolve(`We are coding!`)
  })
  
};

// Test:
practiceCoding()
  .then((res) => console.log(`${res} which is in promise!`))
  .catch((err) => console.error(`Promise rejected: ${err}`));