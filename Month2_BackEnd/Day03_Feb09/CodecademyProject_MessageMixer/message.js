// Task 7: Import the module in message.js using the require() statement.
const MessageMixer = require('./messageMixer');

// Task 2: Coppy the displayMessage() function and the displayMessage() function call and paste it in message.js.
function displayMessage() {
    console.log(countCharacter("What is the color of the sky?", "t"));
    console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(reverseWord("What is the color of the sky?"));
    console.log(reverseAllWords("What is the color of the sky?"));
    console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(encode("What is the color of the sky?"));
}

displayMessage();