
function getComputerChoice(min, max) {

let compChoice =  Math.round(Math.random() * (10 - 1) + 1);


if (compChoice % 3 === 0 || 2 === 0) {
   return  "Paper";
    }  else if (compChoice % 4 === 0) {
       return  "Scissors";
    } else return "Rock"; 
} //used fizz buzz to produce a random hand

 function getHumanChoice(){
    let gameQuestion = prompt("Please enter Rock, Paper or Scissors: ")
//iput for user
if (gameQuestion.match( /Rock|ROCK|rock/g)) {
    return  "Rock"
 }  else if (gameQuestion.match(/Scissors|SCISSORS|scissors/g)) {
   return "Scissors";
 }
    else if (gameQuestion.match(/Paper|PAPER|paper/g)) {
   return "Paper";
 }
     else {
    console.log("not vaild");
 }
 } //allows user to input any string reasonable for their hand 

 let computerScore = 0
 let humanScore = 0 
 //hopefully sets the score to a zero int

 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();


 console.log(humanSelection, computerSelection)

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "Tie, no winner, no points"; 
    } else if (humanChoice.length === 4 && computerChoice.length === 8 ) {
        return "Human  Wins"; 
    } else if (humanChoice.length === 8 && computerChoice.length === 4) {
        return "Human  Wins";
    } else if (humanChoice.length === 5 && computerChoice.length === 4) {
        return "Human  Wins";  
    } else if (humanChoice.length === 4 && computerChoice.length === 5) {
        return "Computer Wins"; 
    } else if (humanChoice.length === 5 && computerChoice.length === 8) {
        return "Computer Wins"; 
    } else if (humanChoice.length === 8 && computerChoice.length === 5) {
        return "Human Wins"; 
    }
    return "MumboJumbo"
}
//thats a round baby, uses strings to compare length for the hands,, luckily they are all dif numbers


console.log(playRound(humanSelection, computerSelection));






