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
    return choice
}
