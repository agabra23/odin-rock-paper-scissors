let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.selection');
const result = document.querySelector('.result-msg');
const playerText = document.querySelector('.player-score');
const computerText = document.querySelector('.computer-score');
const newGameBtn = document.querySelector('.reset');
const gameOver = document.createElement('h3');
const header = document.querySelector('.header');
const btnContainer = document.querySelector('.btn-container');

//get random number between 2 numbers
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//get a random number 1-3
//return rock for 1, paper for 2, and scissors for 3
function getComputerChoice(){
    //Code Here
    let number = getRandomInt(1,3);
    switch (number){
        case 1:
            return "rock"
        case 2: 
            return "paper"
        case 3:
            return "scissors"
    }
    
}

//Compare player selection to computer selection
//IF same -- tie.
//ELSE -- compare regular rock paper scissors combos
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        result.textContent = "Tie!";
    } else if (playerSelection === 'rock') {
        switch (computerSelection){
            case 'paper':
                computerScore++;
                result.textContent = "Computer Wins! Paper beats rock!";
                break;
            case 'scissors':
                playerScore++;
                result.textContent = "You win! Rock beats scissors!";
                break;
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection){
            case 'rock':
                playerScore++;
                result.textContent = "You win! Paper beats rock!";
                break;
            case 'scissors':
                computerScore++;
                result.textContent = "Computer Wins! Scissors beats paper!";
                break;
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection){
            case 'rock':
                computerScore++;
                result.textContent = "Computer Wins! Rock beats paper!";
                break;
            case 'paper':
                playerScore++;
                result.textContent = "You win! Scissors beats paper!";
                break;
        }
    }



}

function newGame(){
    playerScore = 0;
    computerScore = 0;
    playerText.textContent = `Player Score: ${playerScore}`;
    computerText.textContent = `Computer Score: ${computerScore}`;
    result.textContent = '';
    buttons.forEach((button) => {
        button.disabled = false;
    });
    play();
}


function play() {
    
    buttons.forEach((button) => {
        selection = button.textContent;
        button.addEventListener('click', () => {
            playRound(selection, getComputerChoice());
        });

        computerText.textContent = `Computer Score: ${computerScore}`;
        playerText.textContent = `Player Score: ${playerScore}`;
        
        if (playerScore >= 2 || computerScore >= 2){
            buttons.forEach((button) => {
                button.disabled = true;
            });
            result.textContent = 'Game Over';
        }
    });
}

window.onload = newGame();
newGameBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    newGame();
});