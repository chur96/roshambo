function computerPlay(){
    const choice = Math.random()*100; 
    let sign;
    switch (true){
        case (choice <= 33):
            sign = 'rock';
            break;
        case (choice <= 67):
            sign = 'scissors';
            break; 
        default:
            sign = 'paper'
        } 
    return sign;
}
     
function playRound(playerSelection, computerSelection){
  
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let result = outcomes[playerSelection][computerSelection];
    let resultStatement

    switch(true){
        case (result == -1):
            resultStatement = `You lost! ${computerSelection} beats ${playerSelection}` 
            console.log(resultStatement);
            cpuScore += 1
            return [0, 1];
        case (result == 1):
            resultStatement = `You Won! ${playerSelection} beats ${computerSelection}` 
            console.log(resultStatement);
            playerScore += 1
            return [1, 0];
        default:
            resultStatement = `Draw! Both used ${playerSelection}`
            console.log(resultStatement);
            return [0, 0];
    } 

}

function game(){
    let playerScore = 0
        ,cpuScore = 0
        ,computerSelection
        ,playerSelection
        ,result;

    for(let round=0; round<5; round++){

        computerSelection = computerPlay();
        console.log(computerSelection);
        playerSelection = prompt("Rock, Paper, or Scissors?"); 

        result = playRound(playerSelection, computerSelection)
        playerScore += result[0];
        cpuScore += result[1];
        console.log(`Current score: You: ${playerScore} vs CPU ${cpuScore}`)
    }

    switch(true){
        case playerScore > cpuScore:
            console.log('You won!');
            break;
        case playerScore < cpuScore:
            console.log('You lost!');
            break;
        default:
            console.log('Draw!')
    }

}

function checkScore(){
    if (playerScore == 5 || cpuScore == 5){
        document.querySelector('.message').textContent = `${playerScore > cpuScore ? 'Player': 'Cpu'} wins. `
        playerScore = 0;
        cpuScore = 0;
    } 
}

const hands = ['rock','paper','scissors']
const outcomes = {
    'rock' : {
        'rock' : 0,
        'paper' : -1,
        'scissors':1
        },
    'paper' : {
        'rock' : 1,
        'paper' : 0,
        'scissors':-1
        },
    'scissors' : {
        'rock' : -1,
        'paper' : 1,
        'scissors':0
        }
}

let playerScore = 0
    ,cpuScore = 0
    ,computerSelection
    ,playerSelection
    ,result;

const buttons = document.querySelectorAll('button'); 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        console.log(playerSelection);
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        document.querySelector('.playerScore').textContent = `Player Score: ${playerScore}`;
        document.querySelector('.cpuScore').textContent = `Cpu Score: ${cpuScore}`;
        checkScore()
    });
});

