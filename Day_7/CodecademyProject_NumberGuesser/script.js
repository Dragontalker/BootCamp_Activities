let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Task 3: Create a generateTarget() function. This function will be called at the start of each new round.
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// Task 4: Create a compareGuesses() function. This function will be called each round to determine which guess is closet to the target number.
function compareGuesses(userGuess, computerGuess, selectTarget) {
    let userGap = Math.abs(userGuess - selectTarget);
    let computerGap = Math.abs(computerGuess - selectTarget);
    if (userGap <= computerGap) {
      return true;
    } else {
      return false;
    }
}

// Task 5: Create a updateScore() function. This function will be used to correctly increase the winner's score after each round.
function updateScore(whoWins) {
    if (whoWins === 'computer') {
      computerScore ++;
    } else {
      humanscore ++;
    }
} 

// Task 6: Create an advanceround() function. This function will be used to update the round number after each round.
function advanceRound() {
    currentRoundNumber ++;
}
