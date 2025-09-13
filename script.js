const hand = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return hand[randomIndex];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!hand.includes(humanChoice)) {
        humanChoice = prompt("Invalid choice! Enter rock, paper, or scissors:").toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    for (let i = 0; i < 3; i++) {
        const human = getHumanChoice();
        const computer = getComputerChoice();
        console.log(playRound(human, computer));
    }
    
    if (humanScore > computerScore) {
        return "You win the game!";
    } else if (computerScore > humanScore) {
        return "You lose the game!";
    } else {
        return "The game is a tie!";
    }
}
