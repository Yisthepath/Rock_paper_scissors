//Declare the variables used to store the computer and the player's choices as well as to keep score// 

let getHumanChoice;
let humanScore = 0;
let computerScore = 0;
let computerChoice;
let roundOutcome;

//Write a function to get a random choice by the computer//

function getComputerChoice() { 
    var x = Math.floor(Math.random() * 3);

    switch (x) {
        case 0:
            return computerChoice = "ROCK";
            break;

        case 1:
            return computerChoice = "SCISSORS";
            break;

        default:
            return computerChoice = "PAPER";
    }
}

getComputerChoice();

//Write a funtion that decides of each round outcome and writes a paragrapg on the DOM accordingly//

function gameOutcome() {
    if (getHumanChoice.toUpperCase() === computerChoice.toUpperCase()) {
        roundOutcome = "DRAW";
        getComputerChoice();
    }

    else if (getHumanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "PAPER") {
        computerScore++;
        roundOutcome = "LOSE"
        getComputerChoice();
    } 

    else if (getHumanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS") {
        humanScore++;
        roundOutcome = "WIN"
        getComputerChoice();
        
    }

    else if (getHumanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "SCISSORS") {
        computerScore++;
        roundOutcome = "LOSE"
        getComputerChoice();
    }

    else if (getHumanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") {
        humanScore++;
        roundOutcome = "WIN"
        getComputerChoice();
    }

    else if (getHumanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "ROCK") {
        computerScore++;
        roundOutcome = "LOSE"        
        getComputerChoice();
    }

    else {
        humanScore++;
        roundOutcome = "WIN";
        getComputerChoice();
    }

    const p = document.querySelector("p");
    
    if (humanScore === 5) {
        p.textContent = "Congratulations, you won! choose an option to play again.";
        humanScore = 0;
        computerScore = 0;
    }

    else if (computerScore === 5) {
        p.textContent = "The computer won. choose an option to try again.";
        humanScore = 0;
        computerScore = 0;
    }

    else {
        if (roundOutcome === "WIN") {
            p.textContent = "You won the round! Your score: " + humanScore + " Computer score : " + computerScore; 
        }

        else if (roundOutcome === "LOSE") {
            p.textContent = "The computer won the round. Your score: " + humanScore + " Computer score : " + computerScore;
        }

        else {
            p.textContent = "It's a tie. Your score: " + humanScore + " Computer score : " + computerScore;
        }
    }
};

//Add event listeners to attribute a value to the variable storing the player's choice (getHumanChoice)//

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    getHumanChoice = "ROCK"
    gameOutcome();
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    getHumanChoice = "PAPER"
    gameOutcome();
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    getHumanChoice = "SCISSORS"
    gameOutcome();
});