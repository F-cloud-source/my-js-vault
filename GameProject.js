// Game  Project :- ROCK , PAPER , SCISSOR.
// Making An Array As we Utilize Math.random() so use array is benefot for 
// Randomness For rock , paper and scissor Button for Interactivity.

const choices = ["rock" , "paper" , "scissor"];

// Grabbing all id  from HTML Sheet file and stores them in  Variable State.

const playerDisplay = document.getElementById("playerDisplay");

const computerDisplay =  document.getElementById("computerDisplay");

const resultDisplay  =  document.getElementById("resultDisplay");

 function playGame(playerChoice){
     
    const computerChoice  = choices[Math.floor(Math.random()* 3)];

     let results = "";

// Building Logic Between playerChoice and  computerChoice

     if(playerChoice === computerChoice){
          
         results = "IT  IS A TIE !";

     }
     else{
          switch (playerChoice) {
            case "rock":
               results =(computerChoice === "scissor" ? "YOU WIN" : "YOU LOSE");
                break;
          
            case "paper":
               results =(computerChoice === "rock" ? "YOU WIN" : "YOU LOSE");
                break;

            case "scissor":
               results =(computerChoice === "paper" ? "YOU WIN" : "YOU LOSE");
                break;
          }
     }
// Updating Text Content of Player and Computer and Results

     playerDisplay.textContent = `PLAYER : ${playerChoice}`;
     computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
     resultDisplay.textContent = `RESULTS : ${results}`;
 }
