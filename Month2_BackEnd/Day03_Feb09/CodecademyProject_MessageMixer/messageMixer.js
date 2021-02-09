// Task 3: Create a variable MessageMixer and set it equal to an empty object to represent the module as an object.
const MessageMixer = {};

// Task 4: One by one, for each function, modify the function so that it is a property on the object.
MessageMixer.countCharacter = function(inputString, inputCharacter) {
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
  
MessageMixer.capitalizeFirstCharacterOfWords = function(string) {
    let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
    let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
    return arr.join(" "); 
};

MessageMixer.reverseWord = function(word) {
    return word.split("").reverse().join("");
};

MessageMixer.reverseAllWords = function(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = MessageMixer.reverseWord(words[i]);
    }
    return words.join(" ");
};

MessageMixer.replaceFirstOccurence = function(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
};

MessageMixer.replaceAllOccurrences = function(string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
};

MessageMixer.encode = function(string) {
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
        string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};

// Task 9.a: Create a function called palindrome() that takes a string string as a parameter.
MessageMixer.palindrome = function(string) {
    return string + " " + MessageMixer.reverseWord(string);
};



function displayMessage() {
    console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
    console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(MessageMixer.reverseWord("What is the color of the sky?"));
    console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
    console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(MessageMixer.encode("What is the color of the sky?"));
}

displayMessage();


// Task 5: Encode all functions.
console.log(MessageMixer);

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
module.exports = MessageMixer;
