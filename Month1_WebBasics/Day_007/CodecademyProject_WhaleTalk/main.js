// Task 1: Create a variable named input that is equal to any phrase you'd like. This variable will contain the text you want to translate into "whale talk".
const input = "I am doing a whale talk APP!";

// Task 2: Whales only speak in vowels so you need an array of vowels to be extracted from the input variable named vowels that will not be updated.
const vowels = ['A', 'E', 'I', 'O', 'U'];

// Task 3: Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.
const resultArray = [];

// Task 4: Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
for (let i = 0; i < input.length; i++) {
    // Task 5: To check your work, log the iterator numbered position inside the for loop.
    // console.log('Position ' + i + ' with letter ' + input[i]);
    // Task 6: Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.
    for (j = 0; j < vowels.length; j++) {
        // Task 7: To check your work, log the iterator number positions inside the inner for loop and run your code. 
        // console.log('Vowel Position ' + j + ' the vowel is ' + vowels[j]);
        // Task 8: Insde the second for loop, write a code block that compares the input letter to every letter in the vowels array.
        let currentLetter = input[i].toUpperCase();
        if (currentLetter === vowels[j]) {
            // Task 9: Write an if statement that checks if each letter in the input string is equal to 'E'. 
            if (currentLetter === 'E') {
                resultArray.push(currentLetter);
            } else if (currentLetter === 'U') {
                // Task 10: Do the same with 'U'.
                resultArray.push(currentLetter);
            }
            resultArray.push(currentLetter);
        }
    }
}

// Task 11&12: Join the results together and log to console.
console.log(resultArray.join(""));

