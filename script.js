const hand = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

const playerScoreDiv = document.getElementById('player-score');
const computerScoreDiv = document.getElementById('computer-score');
const playerChoiceDiv = document.getElementById('player-choice').querySelector('span');
const computerChoiceDiv = document.getElementById('computer-choice').querySelector('span');
const feedbackDiv = document.getElementById('feedback');

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return hand[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

document.querySelectorAll('#controls button').forEach(button => {
    button.addEventListener('click', () => {
        try {
            const playerChoice = button.getAttribute('data-choice');
            if (!hand.includes(playerChoice)) {
                throw new Error("Invalid choice detected.");
            }

            const computerChoice = getComputerChoice();

            playerChoiceDiv.textContent = playerChoice;
            computerChoiceDiv.textContent = computerChoice;

            const result = playRound(playerChoice, computerChoice);
            feedbackDiv.textContent = result;

            playerScoreDiv.textContent = `Player: ${playerScore}`;
            computerScoreDiv.textContent = `Computer: ${computerScore}`;
        } catch (error) {
            feedbackDiv.textContent = `Error: ${error.message}`;
        }
    });
});
