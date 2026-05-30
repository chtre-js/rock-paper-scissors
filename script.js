function getComputerChoice() {
    const random = Math.random() * 3;
    if (random < 1) {
        return "rock";
    } else if (random < 2) {
        return "paper";
    }
    return "scissors";
}

console.log(getComputerChoice())