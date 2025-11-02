// Game ROCK , PAPER AND SCISSORS AND ALL JS PROGRAMS AND ALL CODE AND LOGIC

// We use array for better FUNCTION WORKING OF Math.random and also all computerChoice feature

const Choices = ["rock" , "paper" , "scissors"];

const PlayerDisplay = document.getElementById("playerDisplay");
const ComputerDisplay = document.getElementById("computerDisplay");
const ResultsDisplay = document.getElementById("resultDisplay");


// BUILT FUNCTION FOR ALL INTERACTIVITY BUTTON ON UI FOR GAME.
function playGame(PlayerChoice) {

 // TESTING  THE [OPPONENT or PLAYER2 or COMPUTER CHOICE] =>  FEATURE = 
 // const computerChoice = Choices[Math.floor(Math.random() * 3)];
 // and Testing use console.log(computerChoice)  see this feature 
 // works well and also behave well in longer code JS CODE.
    
        const computerChoice = Choices[Math.floor(Math.random() * 3)];

 // First Results are at Zero Stage and No Result on UI LIVE ON WEBPAGE AND DEVTOOL 

     let results = "";
// BUILDING ALL COMPARSION LOGIC FOR PLAYERCHOICE AND COMPUTERCHOICE FEATURE AND ON 
// THERE INTERACTVITY RESPONSE ON UI

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
      
     };
        
    PlayerDisplay.textContent = `PLAYER : ${PlayerChoice}`;
    ComputerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    ResultsDisplay.textContent = `RESULTS : ${results}`;

};