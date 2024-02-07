const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");
const userOption = document.getElementById("userOption");
const computerOption = document.getElementById("computerOption");
const result = document.getElementById("result");
const winnerResult = document.getElementById("winner");
const reloadButton = document.getElementById("restart");
const numberRounds = document.getElementById('numberRounds')
const score = document.getElementById("score");
let playerWins = 0, computerWins = 0, numRounds = 5;

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
};

const playRound = (playerSelection, computerSelection) => {
    numRounds--;
    if (numRounds == 0) {
        winnerResult.textContent = `Winner: ${winner}`
    }

    userOption.textContent = `User option: ${playerSelection}`;
    computerOption.textContent = `Computer option: ${computerSelection}`;

    result.textContent = "";
    if (playerSelection === computerSelection) {
        result.style = "color: white";
        result.textContent = "It's a tie!";
    } else if (
        (playerSelection === "scissor" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissor")
    ) {
        result.style = "color: green";
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerWins++;
    } else {
        result.style = "color: red";
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerWins++;
    }

    const winner = playerWins > computerWins ? 'User': 'Computer'
    score.textContent = `User: ${playerWins} | Computer: ${computerWins}`
    numberRounds.textContent = `Number of rounds: ${numRounds}`

};

function playGame() {
    rockButton.addEventListener("click", () => {
        const playerChoice = "rock";
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    });
    
    paperButton.addEventListener("click", () => {
        const playerChoice = "paper";
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    });
    
    scissorButton.addEventListener("click", () => {
        const playerChoice = "scissor";
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    });
}
playGame()

reloadButton.addEventListener("click", () => {
    userOption.textContent = ``;
    computerOption.textContent = ``;
    result.textContent = "";
    score.textContent = '';
    numberRounds.textContent = ''
});