// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// This function shows both the player's and computer's choices on the page
function playRound(playerChoice) {
  // Get the computer's choice by calling the function
  const computerChoice = getComputerChoice();

  // Get the result div from the HTML
  const resultDiv = document.getElementById("result");

  // Create a message using template literals to show both choices
  let message = `You chose: ${playerChoice} <br> Computer chose: ${computerChoice}`;

  // Add logic to decide who wins or if it's a tie
  // We use the emoji to compare, so we need to check if playerChoice includes "Rock", etc.
  let playerWins = false;
  let computerWins = false;

  // Check for a tie
  if (
    (playerChoice.includes("Rock") && computerChoice === "Rock") ||
    (playerChoice.includes("Paper") && computerChoice === "Paper") ||
    (playerChoice.includes("Scissors") && computerChoice === "Scissors")
  ) {
    message += "<br>It's a tie!";
  }
  // Check if player wins
  else if (
    (playerChoice.includes("Rock") && computerChoice === "Scissors") ||
    (playerChoice.includes("Paper") && computerChoice === "Rock") ||
    (playerChoice.includes("Scissors") && computerChoice === "Paper")
  ) {
    message += "<br>You win!";
  }
  // Otherwise, computer wins
  else {
    message += "<br>Computer wins!";
  }

  // Show the message on the page
  resultDiv.innerHTML = message;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  // Call playRound with "Rock" when the rock button is clicked
  playRound("Rock 🪨");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  // Call playRound with "Paper" when the paper button is clicked
  playRound("Paper 📄");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  // Call playRound with "Scissors" when the scissors button is clicked
  playRound("Scissors ✂️");
});

// This function randomly selects "Rock", "Paper", or "Scissors" for the computer
function getComputerChoice() {
  // Create a variable to store a random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);

  // Use if-else statements to return the choice based on the random number
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}