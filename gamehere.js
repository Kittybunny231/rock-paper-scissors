
function getComputerChoice(min, max) {
     return Math.round(Math.random() * (10 - 1) + 1);
}

let compChoice = getComputerChoice();

if (compChoice % 3 === 0) {
    console.log("Paper");
    }  else if (compChoice % 4 === 0) {
        console.log("Scissors");
  } else  console.log(compChoice = "Rock");