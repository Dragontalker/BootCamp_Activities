// Task 3: Create a variable MessageMixer and set it equal to an empty object to represent the module as an object.
// const MessageMixer = {};

// Task 14: Remove the variable and export each function as a variable.


// Task 4: One by one, for each function, modify the function so that it is a property on the object.
const countCharacter = (inputString, inputCharacter) => {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
           count++;
        }
      }
    return count; 
};
  
const capitalizeFirstCharacterOfWords = (string) => {
    let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
    let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
    return arr.join(" "); 
};

const reverseWord = (word) => {
    return word.split("").reverse().join("");
};

const reverseAllWords = (sentence) => {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }
    return words.join(" ");
};

const replaceFirstOccurence = (string, toBeReplaced, replaceWith) => {
    return string.replace(toBeReplaced, replaceWith);
};

const replaceAllOccurrences = (string, toBeReplaced, replaceWith) => {
    return string.split(toBeReplaced).join(replaceWith);
};

const encode = (string) => {
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
        string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};

// Task 9: Create a function called palindrome() that takes a string string as a parameter.
const palindrome = (string) => {
    return string + " " + reverseWord(string);
};

// Task 10: Create another function pigLatin() that takes a sentence and a character as parameter.
const pigLatin = (sentence, character) => {
    return sentence.split(' ').join(character + ' ');
};



function displayMessage() {
    console.log(countCharacter("What is the color of the sky?", "t"));
    console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(reverseWord("What is the color of the sky?"));
    console.log(reverseAllWords("What is the color of the sky?"));
    console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(encode("What is the color of the sky?"));
}

displayMessage();


// Task 5: Encode all functions.
// console.log(MessageMixer);

// Task 1: Run the file to see the output of th program.
// running in node: node messageMixer.js
// output:
// 3
// What Is The Color Of The Sky?
// ?yks eht fo roloc eht si tahW
// tahW si eht roloc fo eht ?yks
// What is the color of the water?
// Wh@t !$ the c0l0r 0f the $ky?

// Task 6: You messageFixer object now has properties. Export it using module.exports syntax.
// module.exports = MessageMixer;

// Task 11: Use modify the way export MessageMixer to use export default instead of modeul.exports.
export default MessageMixer;
