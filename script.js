
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
    //console.log(computerSelection)
    if (playerSelection === computerSelection){
        console.log("Tie!")
    } else if (playerSelection === 'rock') {
        switch (computerSelection){
            case 'paper':
                console.log("You lose! Paper beats rock!");
                break;
            case 'scissors':
                console.log("You win! Rock beats scissors!");
                break;
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection){
            case 'rock':
                console.log("You win! Paper beats rock!");
                break;
            case 'scissors':
                console.log("You lose! Scissors beats paper!");
                break;
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection){
            case 'rock':
                console.log("You lose! Rock beats paper!")
                break;
            case 'paper':
                console.log("You win! Scissors beats paper!")
                break;
        }
    }
}

//get user choice and store in var
//play round with that choice and computer choice in a loop 5 times

function game() {
    
   return;
}

const buttons = document.querySelectorAll('.selection');
buttons.forEach((button) => {
    selection = button.textContent;
    button.addEventListener('click', () => {
        playRound(selection, getComputerChoice());
    });
})