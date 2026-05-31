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

  if (humanChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        console.log(drawStr);
        break;
      case "paper":
        console.log(`${lossStr} Paper beats rock!`);
        ++computerScore;
        break;
      case "scissors":
        console.log(`${winStr} Rock beats scissors!`);
        ++humanScore;
        break;
    }
  } else if (humanChoice === "paper") {
    switch (computerChoice) {
      case "paper":
        console.log(drawStr);
        break;
      case "scissors":
        console.log(`${lossStr} Scissors beat paper!`);
        ++computerScore;
        break;
      case "rock":
        console.log(`${winStr} Paper beats rock!`);
        ++humanScore;
        break;
    }
  } else {
    // humanchoice === "scissors"
    switch (computerChoice) {
      case "scissors":
        console.log(drawStr);
        break;
      case "rock":
        console.log(`${lossStr} Rock beats scissors!`);
        ++computerScore;
        break;
      case "paper":
        console.log(`${winStr} Scissors beat paper!`);
        ++humanScore;
        break;
    }
  }
}


function playGame(numberOfRounds) {
    for (numberOfRounds; numberOfRounds > 0; numberOfRounds -= 1 ) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`COMPUTER = ${computerScore} \nHUMAN = ${humanScore}`);
    }
    if (humanScore > computerScore) {
        console.log("YOU WIN THE GAME! WELL DONE!");
    } else if (humanScore < computerScore) {
        console.log("YOU LOSE THE GAME! TRY AGAIN!");
    } else {
        console.log("DRAW")
    }
}

playGame(prompt("How many rounds do you want to play ? "))