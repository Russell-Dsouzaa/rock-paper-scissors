var score = 0;

function getComputerSelection() {
    let choice = Math.floor(Math.random() * 3) + 1; // 1,2,3    //Math.floor rounds down to the nearest whole number no matter what, such that 1.9 becomes 1
    
    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

/*
function getHumanSelection() {

    do {
        var choice = prompt("Enter your choice: (Rock, Paper or Scissors)");
    } while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors");    // while(!["rock","paper","scissors"].includes(choice.toLowerCase()));

    return choice.toLowerCase();
}
*/

function playRound(computerChoice,humanChoice) {
    if (computerChoice == humanChoice) {
        return;
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        score = score - 1;
        return;
    } else if (computerChoice == "rock" && humanChoice == "paper") {
        score = score + 1;
        return;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        score = score - 1;
        return;
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        score = score + 1;
        return;
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        score = score + 1;
        return;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        score = score - 1;
        return;
    }
}

function playGame(humanSelection) {
    //score = 0;                // resetting the score for each new game. Without it, if we chose to play again, the score would be continued from the previous game's value.

    /*
    for (let i = 0; i < 5; i++) {
        var computerSelection = getComputerSelection();
        var humanSelection = getHumanSelection();
        playRound(computerSelection,humanSelection);
        console.log(`Your selection was ${humanSelection} while the computer selected ${computerSelection} and the current score is ${score}`);
    }
    */
    var computerSelection = getComputerSelection();

    playRound(computerSelection,humanSelection);
    display.textContent = `Your selection was ${humanSelection.toUpperCase()} while the computer selected ${computerSelection.toUpperCase()} and the current score is ${score}`;

    if (score > 2) {
        display.textContent = "You did it! You won! ";
    } else if (score < -2) {
        display.textContent = "You lost :("
    }
    /*
    if (score < 1) {
        console.log("You lose");
    } else if (score == 0) {
        console.log("It's a tie!");
    } 
    else {
        console.log("You did it! You won!");
    }

    
    do {
        var reply = prompt("Do you wish to play again? (Y/N)");

        if (reply.toLowerCase() == 'y') {
            playGame();
        } else if (reply.toLowerCase() == 'n') {                 // using just else block here made it so that, if the user entered any invalid input, it would still print the "Thanks for playing" string to the console along with with re-prompting the user to play again.
            console.log("Thanks for playing");
        }
    } while (reply.toLowerCase() !== 'y' &&  reply.toLowerCase() !== 'n');
    */
}

var display = document.querySelector(".display");
display.style.color = "black";
display.style.backgroundColor = "white";

let rock = document.querySelector(".rock");
rock.addEventListener('click', () => playGame("rock"));

let paper = document.querySelector(".paper");
paper.addEventListener('click', () => playGame("paper"));

let scissors = document.querySelector(".scissors");
scissors.addEventListener('click', () => playGame("scissors"));

let reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
    score = 0;
    display.textContent = `Score has been reset back to zero. Current score: ${score}`;
});
