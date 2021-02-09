// Task 7: Import the module in message.js using the require() statement.
// const MessageMixer = require('./messageMixer');

// Task 12: Use the import keyword to import the MessageMixer module.
// import MessageMixer from "./messageMixer";

// Task 16: Modify the program ti impoirt each of the variable.
import {
    countCharacter,
    capitalizeFirstCharacterOfWords,
    reverseWord,
    reverseAllWords,
    replaceFirstOccurence,
    replaceAllOccurrences,
    encode,
    palindrome,
    pigLatin
} from "./messageMixer";

// Task 2: Coppy the displayMessage() function and the displayMessage() function call and paste it in message.js.
function displayMessage() {
    // Task 8: Call each of the functions as properties of the imported object.
    console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
    console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(MessageMixer.reverseWord("What is the color of the sky?"));
    console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
    console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(MessageMixer.encode("What is the color of the sky?"));
    // Task 13: Use console.log() to display the output of palindrome()) function. You will need to pass the functions a string.
    console.log(MessageMixer.palindrome("What is the color of the sky?"));
    console.log(MessageMixer.pigLatin("What is the color of the sky?", "$"));
}

displayMessage();