// Closure = A funcion defined of another function, 
//           the inner function has access to the variables 
//           and scope of the outer function.
//           Allow Variable to  private  and state Maintenance used 
//           Used Frequently in Js frameworks : React , Vue , Angular.


function outer(){


     let message = "JS is used in Web Dev"
   function inner(){
     console.log(message);
    }
    
    inner();
    
}

outer();


// counter program example.

 function createCounter(){
      let count = 0;

    function increment(){
    count++;     
    console.log(`This Count Increases to ${count}`);
    }
    
    function getCount(){
        return count;
    }

    return {increment , getCount};   //Return an object with the increment function.

 }


const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current Count is ${counter.getCount()}`);



// Game points game in js 


function CreateGame(){
      let score = 0;
let player = 2;

function IncreaseScore(points){
     score += points;
     console.log(`📈${points} pts`);
}

function DecreaseScore(points){
     score -= points;
     console.log(`📉${points} pts`);
}

function ExtraScore(points){
    score += points;
    console.log(`🎁${points}`);
}


function HealBoost(points){
  score += points;
  console.log(`❤️‍🩹${points} heal BOOSTs`);
}

function TotalPlayer(player){
   score += player;
   console.log(`🎮🕹️${player}`);

}

function getScore(){
  return score;
} 


return{IncreaseScore , DecreaseScore , ExtraScore , HealBoost , TotalPlayer, getScore};

}

const game = CreateGame();


game.IncreaseScore(25);
game.IncreaseScore(12);
game.DecreaseScore(15);
game.DecreaseScore(8);
game.ExtraScore(3);
game.HealBoost(2);
game.TotalPlayer(5);  



console.log(`Total score we get is for this Game points is 📊${game.getScore()} PTS`);

