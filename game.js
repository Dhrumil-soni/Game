let userscore = 0
let compscore = 0

const choices = document.querySelectorAll('.choice');
const msgp = document.querySelector('#msg');

const userScorepara = document.querySelector('#user-score');
const compScorepara = document.querySelector('#comp-score');

const getcompchoice = () => {
    const options = ['rock', 'paper', 'scissor']; 
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}
const drawgame = () => {
    msgp.innerText = 'Its a draw!';
    msgp.style.backgroundColor = '#081b31'
}
const showWinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore ++;
        userScorepara .innerText = userscore;
        msgp.innerText = `you win! , your ${userchoice} beats ${compchoice}`;
        msgp.style.backgroundColor = 'green'
    }else {
        compscore ++;
        compScorepara.innerText = compscore;
        msgp.innerText = `you lose! , ${compchoice} beats your ${userchoice}`;
        msgp.style.backgroundColor = 'red'
    }
}
const playgame = (userchoice) => {
    console.log('user choice :', userchoice);
    const compchoice = getcompchoice();
    console.log('computer choice :', compchoice);

    if (userchoice === compchoice){
        drawgame();
    }else {
        let userwin = true;
        if (userchoice === 'rock'){
            userwin = compchoice === 'paper' ? false : true;
        } else if (userchoice === 'paper'){
            userwin = compchoice === 'scissor' ? false : true;
        }else {
            userwin = compchoice === 'rock' ? false : true;
        }
        showWinner(userwin, userchoice, compchoice)
    }
}
choices.forEach((choice) =>{
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute('id');
        playgame(userchoice);
    });
});