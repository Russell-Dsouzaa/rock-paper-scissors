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

function getHumanSelection() {

    do {
        var choice = prompt("Enter your choice: (Rock, Paper or Scissors)");
    } while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors");    // while(!["rock","paper","scissors"].includes(choice.toLowerCase()));

    return choice.toLowerCase();
}

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

function playGame() {
    score = 0;                // resetting the score for each new game. Without it, if we chose to play again, the score would be continued from the previous game's value.

    for (let i = 0; i < 5; i++) {
        var computerSelection = getComputerSelection();
        var humanSelection = getHumanSelection();
        playRound(computerSelection,humanSelection);
        console.log(`Your selection was ${humanSelection} while the computer selected ${computerSelection} and the current score is ${score}`);
    }

    if (score < 1) {
        console.log("You lose");
    } else {
        console.log("You did it! You won!");
    }

    do {
        var reply = prompt("Do you wish to play again? (Y/N)");

        if (reply.toLowerCase() == 'y') {
            playGame();
        } else if (reply.toLowerCase() == 'n') {                 // using just else block here made ie so that, if the user entered any invalid input, it would still print the "Thanks for playing" string to the console along with with re-prompting the user to play again.
            console.log("Thanks for playing");
        }
    } while (reply.toLowerCase() !== 'y' &&  reply.toLowerCase() !== 'n');
}

playGame();