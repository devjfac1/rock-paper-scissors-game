const hand = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return hand[randomIndex];
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt("Please select your choice: 0 for rock, 1 for paper, or 2 for scissors:"), 10);
    while (isNaN(humanChoice) || humanChoice < 0 || humanChoice > 2) {
        humanChoice = parseInt(prompt("Invalid choice! Please select your choice: 0 for rock, 1 for paper, or 2 for scissors:"), 10);
    }
    return hand[humanChoice];
}

function playRound(humanChoice, computerChoice) {
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
        const result = playRound(human, computer);
        alert(result);
        document.write(`<p>Round ${i + 1}: ${result}</p>`);
    }
    
    let finalResult;
    if (humanScore > computerScore) {
        finalResult = "You win the game!";
    } else if (computerScore > humanScore) {
        finalResult = "You lose the game!";
    } else {
        finalResult = "The game is a tie!";
    }
    
    alert(finalResult);
    document.write(`<h2>${finalResult}</h2>`);
}
