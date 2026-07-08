const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const humanScoreDisplay = document.querySelector("#humanScoreDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const winnerDisplay = document.querySelector("#winnerDisplay");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.random() * 3;
  if (random < 1) {
    return "rock";
  } else if (random < 2) {
    return "paper";
  }
  return "scissors";
}


function playRound(humanChoice, computerChoice) {
  const lossStr = "You lose!";
  const winStr = "You win!";
  const drawStr = "It's a draw!";

  if (humanChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        resultDisplay.textContent = drawStr;
        break;
      case "paper":
        resultDisplay.textContent = lossStr;
        ++computerScore;
        break;
      case "scissors":
        resultDisplay.textContent = winStr;
        ++humanScore;
        break;
    }
  } else if (humanChoice === "paper") {
    switch (computerChoice) {
      case "paper":
        resultDisplay.textContent = drawStr;
        break;
      case "scissors":
        resultDisplay.textContent = lossStr;
        ++computerScore;
        break;
      case "rock":
        resultDisplay.textContent = winStr;
        ++humanScore;
        break;
    }
  } else {
    // humanchoice === "scissors"
    switch (computerChoice) {
      case "scissors":
        resultDisplay.textContent = drawStr;
        break;
      case "rock":
        resultDisplay.textContent = lossStr;
        ++computerScore;
        break;
      case "paper":
        resultDisplay.textContent = winStr;
        ++humanScore;
        break;
    }
  }
}


function handlePlayerChoice() {
  const btnContainer = document.querySelector("#btnContainer");

  btnContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
      case "rock":
        playRound("rock", getComputerChoice());
        break;
      case "paper":
        playRound("paper", getComputerChoice());
        break;
      case "scissors":
        playRound("scissors", getComputerChoice());
        break;
    }

    humanScoreDisplay.textContent = `Human : ${humanScore}`;
    computerScoreDisplay.textContent = `Computer : ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore > computerScore) {
          winnerDisplay.textContent = "YOU WON THE GAME! WELL DONE!";
      } else if (humanScore < computerScore) {
          winnerDisplay.textContent = "YOU LOST THE GAME! TRY AGAIN!";
      } else {
          winnerDisplay.textContent = "DRAW";
      }
    }
  });
}

handlePlayerChoice();