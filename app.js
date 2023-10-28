console.log('Hello');

const options = ["rock", "paper", "scissor"];

function getComputerChoice(){
    const choice = options [Math.floor(Math.random() * options.length)];
    return choice;
}


