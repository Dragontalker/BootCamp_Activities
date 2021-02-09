function countCharacter(inputString, inputCharacter) {
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
  
function capitalizeFirstCharacterOfWords(string) {
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
//   Error: Cannot find module 'C:\Users\Ricahrd\Desktop\GitHubRepos\messageMixer.js'       
//     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)        
//     at Function.Module._load (internal/modules/cjs/loader.js:725:27)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
//     at internal/main/run_main_module.js:17:47 {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: []
// }