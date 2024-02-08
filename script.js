const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");
const userOption = document.getElementById("userOption");
const computerOption = document.getElementById("computerOption");
const result = document.getElementById("result");
const winnerResult = document.getElementById("winner");
const reloadButton = document.getElementById("restart");
const numberRounds = document.getElementById("numberRounds");
const startButton = document.getElementById("start")

const score = document.getElementById("score");
let playerWins = 0,
    computerWins = 0

reloadButton.style.visibility = "hidden";
rockButton.style.visibility = 'hidden'
paperButton.style.visibility = 'hidden'
scissorButton.style.visibility = 'hidden'

startButton.addEventListener('click', () => {
    startButton.style.visibility = 'hidden'
    rockButton.style.visibility = 'visible'
    paperButton.style.visibility = 'visible'
    scissorButton.style.visibility = 'visible'
})


// function to generate random choices to computer
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
};

// function on the logic of game
const playRound = (playerSelection, computerSelection) => {
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
    // show when variables update
    score.textContent = `Player: ${playerWins} | Computer: ${computerWins}`;

    if (playerWins === 5 || computerWins === 5) {
        const winner = playerWins > computerWins ? "User" : "Computer";
        reloadButton.style.visibility = "visible";

        if (winner === "User") {
            winnerResult.textContent = `Congratulations, you win!`;
            document.getElementById('youWinSound').play()
        } else {
            winnerResult.textContent = `You lose, try again.`;
            document.getElementById('youLoseSound').play()
        }

        rockButton.disabled = true
        paperButton.disabled = true
        scissorButton.disabled = true
    }
};

// function to play the game and event listeners on buttons when user click
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

    reloadButton.addEventListener("click", () => {
        score.textContent = "";
        userOption.textContent = "";
        computerOption.textContent = "";
        result.textContent = "";
        playerWins = 0;
        computerWins = 0;
        reloadButton.style.visibility = "hidden";
        winnerResult.textContent = "";
        rockButton.disabled = false
        paperButton.disabled = false
        scissorButton.disabled = false
        rockButton.style.visibility = 'hidden'
        paperButton.style.visibility = 'hidden'
        scissorButton.style.visibility = 'hidden'
        startButton.style.visibility = 'visible'
    });
}
playGame();