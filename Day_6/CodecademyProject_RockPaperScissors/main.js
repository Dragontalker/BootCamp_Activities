// Task 1: Create a function with one parameter userInput.
const getUserChoice = userInput => {
    // Task 2: Converting the input into lower case. 
    userInput = userInput.toLowerCase();

    // Task 3: Creating an error messiage for incorrect userInput.
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        return 'Error: please enter the correct string, such as Rock, Paper, or Sciessors';
    }
};

// Task 4: Test the function with invalid input.
console.log(getUserInput('wrong input'));

// Task 5: Create a function to randomly generates one of 'rock', 'paper', or 'scissors'.
const getComputerChoice = () => {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Task 6: Test the function by calling it multiple times and printing the results to the console.
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

// Task 7: Create a function to determine the winner, first create a condition for tie.
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game was a tie.';
    } else if (userChoice === 'rock') {
        // Task 8: Winner condition for 'rock'.
        if (computerChoice === 'paper') {
            return 'Sorry, you lost...';
        } else {
            return 'Congratulations! You won!';
        }
    } else if (userChoice === 'paper') {
        // Task 9: Winner condition for 'paper'.
        if (computerChoice === 'scissors') {
            return 'Sorry, you lost...';
        } else {
            return 'Congratulations! You won!';
        } 
    } else {
        // Task 10: Winner condition for 'scissors'.
        if (computerChoice === 'rock') {
            return 'Sorry, you lost...';
        } else {
            return 'Congratulations! You won!';
        }
    }
}

// Task 11: Test the funcions.
console.log(determineWinner('rock', 'rock'));
console.log(determineWinner('rock', 'paper'));
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('scissors', 'rock'));

// Task 12: Create a function named playGame to print the final result.
const playGame = (userInput) => {
    // Task 14: Adding a secret cheat code.
    if (userInput === 'bomb') {
        return determineWinner('rock', 'scissors');
    }
    var userChoice = getUserChoice(userInput);
    if (userChoice === 'Error: please enter the correct string, such as Rock, Paper, or Sciessors') {
        return userChoice;
    } else {
        console.log('You played ' + userChoice + '!');
        var computerChoice = getComputerChoice();
        console.log('Computer played ' + computerChoice + '!');
        // Task 13: Determine the winner!
        return determineWinner(userChoice, computerChoice);
    }
}
