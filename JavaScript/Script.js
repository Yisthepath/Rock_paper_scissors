let getHumanChoice = prompt("Choose rock, paper or scissors");
let humanScore = 0;
let computerScore = 0;
let computerChoice;

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
    if (getHumanChoice != null && getHumanChoice.toUpperCase() === computerChoice.toUpperCase()) {
        var gameResult = alert("The computer chose  " + computerChoice + ", it's a draw. Your score: " + humanScore + " Computer score : " + computerScore);
        getComputerChoice();
        getHumanChoice = prompt("Choose rock, paper or scissors");
        gameOutcome();
    }

    else if (getHumanChoice != null && getHumanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "PAPER") {
        computerScore++;
        gameResult = alert("The computer chose  " + computerChoice + ", the computer won. Your score: " + humanScore + " Computer score : " + computerScore);
        getHumanChoice = prompt("Choose rock, paper or scissors");
        getComputerChoice();
        gameOutcome();
    } 

    else if (getHumanChoice != null && getHumanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS") {
        humanScore++;
        gameResult = alert("The computer chose  " + computerChoice + ", congratulations, you won! Your score: " + humanScore + " Computer score : " + computerScore);
        getHumanChoice = prompt("Choose rock, paper or scissors");
        getComputerChoice();
        gameOutcome();
    }

    else if (getHumanChoice != null && getHumanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "SCISSORS") {
        computerScore++;
        gameResult = alert("The computer chose  " + computerChoice + ", the computer won. Your score: " + humanScore + " Computer score : " + computerScore); 
        getHumanChoice = prompt("Choose rock, paper or scissors");
        getComputerChoice();
        gameOutcome();
    }

    else if (getHumanChoice != null && getHumanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") {
        humanScore++;
        gameResult = alert("The computer chose  " + computerChoice + ", congratulations, you won! Your score: " + humanScore + " Computer score : " + computerScore); 
        getHumanChoice = prompt("Choose rock, paper or scissors");
        getComputerChoice();
        gameOutcome();
    }

    else if (getHumanChoice != null && getHumanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "ROCK") {
        computerScore++;
        gameResult = alert("The computer chose  " + computerChoice + ", the computer won. Your score: " + humanScore + " Computer score : " + computerScore) 
        getHumanChoice = prompt("Choose rock, paper or scissors");
        getComputerChoice();
        gameOutcome();
    }

    else if (getHumanChoice != null && getHumanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "PAPER") {
        humanScore++;
        gameResult = alert("The computer chose  " + computerChoice + ", congratulations, you won! Your score: " + humanScore + " Computer score : " + computerScore); 
        getHumanChoice = prompt("Choose rock, paper or scissors");
        getComputerChoice();
        gameOutcome();
    }

    else if (getHumanChoice == null || getHumanChoice == undefined) {
        function continueGame() {
            var wannaQuit = prompt("Are you sure you want to quit the game?");
            if (wannaQuit.toUpperCase() === "YES") {
                alert("Ok, good bye then! see you soon.");
            }

            else if (wannaQuit.toUpperCase() === "NO") {
                getHumanChoice = prompt("Choose rock, paper or scissors");
                getComputerChoice();
                gameOutcome();
            }

            else {
                continueGame();
            }
        };
        
        continueGame();    
    }

    else {
        getHumanChoice = prompt("You entered an invalid value, please choose rock, paper or scissors");
        gameOutcome();   
    }

    return;
}

gameOutcome();

alert("Your score: " + humanScore + " The computer's score: " + computerScore);