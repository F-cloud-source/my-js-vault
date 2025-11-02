

const Choices = ["rock" , "paper" , "scissors"];

const PlayerDisplay = document.getElementById("playerDisplay");
const ComputerDisplay = document.getElementById("computerDisplay");
const ResultsDisplay = document.getElementById("resultDisplay");

function playGame(PlayerChoice) {
       
      const computerChoice = Choices[Math.floor(Math.random() *3)];
      
     let results = "";

     if(PlayerChoice  === computerChoice){
       results = "MATCH IS TIE"
     }
     else{
        switch  (PlayerChoice) {
            case "rock":
                (results = (computerChoice === "scissors" ) ? "You WIN" : "YOU LOSE")
                break;
            case "paper":
                (results = (computerChoice === "rock" ) ? "You WIN" : "YOU LOSE")
                break;

            case "scissors":
                (results = (computerChoice === "paper" )  ? "You WIN" : "YOU LOSE")
                break;
            
        }
      
     }
        
    PlayerDisplay.textContent = `PLAYER : ${PlayerChoice}`;
    ComputerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    ResultsDisplay.textContent = `RESULTS : ${results}`;

}