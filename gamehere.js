
function getComputerChoice(min, max) {
     return Math.round(Math.random() * (10 - 1) + 1);
}

let compChoice = getComputerChoice();

if (compChoice % 3 === 0) {
    console.log("Paper");
    }  else if (compChoice % 4 === 0) {
        console.log("Scissors");
    } else  console.log(compChoice = "Rock");

  let humanChoice = prompt("Please enter Rock, Paper or Scissors: ");

if (humanChoice.match("Rock")) {
    console.log(humanChoice);
 }  else if (humanChoice.match("Scissors")) {
    console.log(humanChoice);
 }
    else if (humanChoice.match("Paper")) {
    console.log(humanChoice)
 }
     else {
    console.log("not vaild");
 }

 let computerScore = 0
 let humanScore = 0 
 console.log(computerScore)
 console.log(humanScore)