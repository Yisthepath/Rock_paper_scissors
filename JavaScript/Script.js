let getHumanChoice;
let humanScore = 0;
let computerScore = 0;
let computerChoice;
let roundOutcome;

function getComputerChoice() { 
    var x = Math.floor(Math.random() * 2.5);

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

    else if (getHumanChoice == null || getHumanChoice == undefined) {
        computerScore;
        humanScore;
    }

    else {
        humanScore++;
        roundOutcome = "WIN";
        getComputerChoice();
    }

    const p = document.querySelector("p");
    
    if (roundOutcome === "WIN") {
        p.textContent = "Congratulations, you won! Your score: " + humanScore + " Computer score : " + computerScore; 
    }

    else if (roundOutcome === "LOSE") {
        p.textContent = "The computer won. Your score: " + humanScore + " Computer score : " + computerScore;
    }

    else if (roundOutcome === "DRAW") {
        p.textContent = "It's a tie. Your score: " + humanScore + " Computer score : " + computerScore;
    }

    else {
        p.textContent = ""
    }
};

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