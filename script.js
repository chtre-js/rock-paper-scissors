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

function getHumanChoice() {
  choice = prompt('Choose "rock", "paper" or "scissors"').toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  const lossStr = "You lose!";
  const winStr = "You win!";
  const drawStr = "It's a draw!";
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  if (humanChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        console.log(drawStr);
        break;
      case "paper":
        console.log(`${lossStr} Paper beats rock!`);
        break;
      case "scissors":
        console.log(`${winStr} Rock beats scissors!`);
    }
  } else if (humanChoice === "paper") {
    switch (computerChoice) {
      case "paper":
        console.log(drawStr);
        break;
      case "scissors":
        console.log(`${lossStr} Scissors beat paper!`);
        break;
      case "rock":
        console.log(`${winStr} Paper beats rock!`);
    }
  } else {
    // humanchoice === "scissors"
    switch (computerChoice) {
      case "scissors":
        console.log(drawStr);
        break;
      case "rock":
        console.log(`${lossStr} Rock beats scissors!`);
        break;
      case "paper":
        console.log(`${winStr} Scissors beat paper!`);
    }
  }
}
