'use strict';

const message = document.querySelector('.message').textContent;
const guess = document.querySelector('.guess').textContent;
const again = document.querySelector('.again');
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random()*20);




const win = ()=>{
    document.querySelector('body').style.backgroundColor = '#16c60c';
}

const reset = ()=>{
    secretNumber = randGenerator();
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
}

const randGenerator = ()=>{
    return Math.trunc(Math.random()*20);
}

const displayMessage = (message)=>{
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click',()=>{
    const guess = document.querySelector('.guess').value;
    if(!guess){
        displayMessage("No Number ⛔");
    }else if(guess == secretNumber){
        win();
        displayMessage("You guessed it right 🟢");
        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess !== secretNumber && score > 1){
        displayMessage(guess > secretNumber ? "Too High 📈" : "Too Low 📉");
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        displayMessage('You lost the game!😣');
        document.querySelector('.score').textContent = 0;
    }
});

document.querySelector('.again').addEventListener('click',()=>{
    reset();
});

console.log(message);