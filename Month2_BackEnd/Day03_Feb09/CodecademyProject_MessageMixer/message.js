// Task 7: Import the module in message.js using the require() statement.
const MessageMixer = require('./messageMixer');

// Task 2: Coppy the displayMessage() function and the displayMessage() function call and paste it in message.js.
function displayMessage() {
    // Task 8: Call each of the functions as properties of the imported object.
    console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
    console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(MessageMixer.reverseWord("What is the color of the sky?"));
    console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
    console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(MessageMixer.encode("What is the color of the sky?"));
}

displayMessage();