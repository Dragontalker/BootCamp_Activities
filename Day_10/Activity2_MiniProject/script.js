let wins = 0;
let ties = 0;
let losses = 0;

const playGame = function() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  // Ask user for their choice
  let userChoice = window.prompt("Enter 'Rock', 'Paper, or 'Scissors':").toUpperCase();
  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  } else if (options.includes(userChoice)) {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    if (userChoice === computerChoice) {
      ties++;
      window.alert(`Your choice: ${userChoice}, computer's choice: ${computerChoice}. It's TIE!`);
    } else if (
      (userChoice === options[0] && computerChoice === options[2]) || 
      (userChoice === options[1] && computerChoice === options[0]) || 
      (userChoice === options[2] && computerChoice === options[1])
    ) {
      wins++;
      window.alert(`Your choice: ${userChoice}, computer's choice: ${computerChoice}. You WON!`);
    } else {
      losses++;
      window.alert(`Your choice: ${userChoice}, computer's choice: ${computerChoice}. You LOST!`);
    }
    window.alert(
      "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );
    
    var playAgain = window.confirm("Play again?");

    // If user pressed OK, run the function again
    if (playAgain) {
    playGame();
    } else {
      return;
    }
  } else {
    // If user enter the wrong input, ask them to enter again
    window.alert("Invalid input, please make sure you enter eitehr 'Rock', 'Paper', or 'Scissors'.");
    playGame();
  }
}