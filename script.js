const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissor'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

const playRound = (playerSelection, computerSelection) => {
    let winsPlayer = 0
    let winsComputer = 0
    userOption.textContent = `User option: ${playerSelection}`
    computerOption.textContent = `Computer option: ${computerSelection}`
    
    result.textContent = ''
    if (playerSelection === computerSelection) {
        result.textContent = 'It\'s a tie!';
    } else if (
        (playerSelection === 'scissor' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'scissor')
    ) {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        winsPlayer++;
    } else {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        winsComputer ++;
    }

}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const userOption = document.getElementById('userOption')
const computerOption = document.getElementById('computerOption')
const result = document.getElementById('result');

// Add click event listeners
rockButton.addEventListener('click', () => {
    const playerChoice = 'rock';
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

paperButton.addEventListener('click', () => {
    const playerChoice = 'paper';
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

scissorButton.addEventListener('click', () => {
    const playerChoice = 'scissor';
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

