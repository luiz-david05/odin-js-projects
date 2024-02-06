const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");
const userOption = document.getElementById("userOption");
const computerOption = document.getElementById("computerOption");
const result = document.getElementById("result");
const winnerResult = document.getElementById("winner");
const reloadButton = document.getElementById("restart");
const score = document.getElementById("score");
let playerWins,
    computerWins = 0;

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
};

const playRound = (playerSelection, computerSelection) => {
    userOption.textContent = `User option: ${playerSelection}`;
    computerOption.textContent = `Computer option: ${computerSelection}`;

    result.textContent = "";
    if (playerSelection === computerSelection) {
        result.style = "color: orange";
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
let nRounds = 5
score.textContent = `Number of Rounds: ${nRounds}`

for (let i = 5; i > 0; i--) {
    playGame()
    nRounds -= 1
}



reloadButton.addEventListener("click", () => {
    userOption.textContent = ``;
    computerOption.textContent = ``;
    result.textContent = "";
});
