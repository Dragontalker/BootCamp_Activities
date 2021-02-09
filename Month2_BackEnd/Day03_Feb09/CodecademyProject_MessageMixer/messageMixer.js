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


function reverseWord(word) {
    return word.split("").reverse().join("");
};

function reverseAllWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }
    return words.join(" ");
};


function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
};


function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
return string.split(toBeReplaced).join(replaceWith);
};

function encode(string) {
let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
    string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
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

// Task 1: Run the file to see the output of th program.
// running in node: node messageMixer.js
// output:
// 3
// What Is The Color Of The Sky?
// ?yks eht fo roloc eht si tahW
// tahW si eht roloc fo eht ?yks
// What is the color of the water?
// Wh@t !$ the c0l0r 0f the $ky?
