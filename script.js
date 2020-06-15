const youRock = document.querySelector('.yourock');
const youPaper = document.querySelector('.youpaper');
const youScissors = document.querySelector('.youscissors');

const computerRock = document.querySelector('.computerrock');
const computerPaper = document.querySelector('.computerpaper');
const computerScissors = document.querySelector('.computerscissors');


// < 34. rock
let userChoice;
let yourScore = 0;
let computerScore = 0;

function computerChoice() {

let computerChoiced = Math.random();
     if (computerChoiced < 0.34) { document.querySelector(".computerpaper").style.background = "purple";
    document.querySelector(".computerscissors").style.background = "pink";
    document.querySelector(".computerrock").style.background = "pink";
         if (userChoice == "rock") {
           computerScore += 1; document.querySelector(".round").innerHTML = "You lose this one" }
         else if (userChoice == "scissors") {
           yourScore += 1; document.querySelector(".round").innerHTML = "Point for you!" }
         else if (userChoice == "paper") {
           document.querySelector(".round").innerHTML = "This round is a tie! No points for anyone!" } }
         
      else if (computerChoiced < 0.67) {  document.querySelector(".computerrock").style.background = "purple";
          document.querySelector(".computerscissors").style.background = "pink";
    document.querySelector(".computerpaper").style.background = "pink";
         if (userChoice == "paper") {
           yourScore += 1; document.querySelector(".round").innerHTML = "Point for you!" }
         else if (userChoice == "scissors") {
           computerScore += 1; document.querySelector(".round").innerHTML = "You lose this one" }
         else if (userChoice == "rock") {
           document.querySelector(".round").innerHTML = "This round is a tie! No points for anyone!"  } }
         
    else if (computerChoiced < 1) {  document.querySelector(".computerscissors").style.background = "purple";
        document.querySelector(".computerpaper").style.background = "pink";
    document.querySelector(".computerrock").style.background = "pink";
        if (userChoice == "rock") {
          yourScore += 1; document.querySelector(".round").innerHTML = "Point for you!"}
        else if (userChoice == "paper") {
          computerScore += 1; document.querySelector(".round").innerHTML = "You lose this one"  }
        else if (userChoice == "scissors") {
          document.querySelector(".round").innerHTML = "This round is a tie! No points for anyone!" }
      }
      
console.log('fired')
 document.querySelectorAll(".youuu")[0].innerHTML = yourScore;
  document.querySelector(".computerrr").innerHTML = computerScore;
}



youRock.addEventListener('click', () => { youRock.style.backgroundColor = "purple";
youPaper.style.backgroundColor = "pink";
youScissors.style.backgroundColor = "pink";
userChoice = "rock";
computerChoice();
console.log(yourScore);
console.log(computerScore);

});



youPaper.addEventListener('click', () => { youPaper.style.backgroundColor = "purple";
youRock.style.backgroundColor = "pink";
youScissors.style.backgroundColor = "pink";
userChoice = "paper";
computerChoice();
console.log(yourScore)
console.log(computerScore);

});

youScissors.addEventListener('click', () => { youScissors.style.backgroundColor = "purple";
youPaper.style.backgroundColor = "pink";
youRock.style.backgroundColor = "pink";
userChoice = "scissors";
computerChoice();
console.log(yourScore);
console.log(computerScore);

});
// paper, rock, scissors
