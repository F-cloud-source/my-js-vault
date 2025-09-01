// Number Guessing game 


const minNum = 0;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) - minNum);

let attmepts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess the number between ${maxNum} - ${minNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please Enter a valid Number");
    }
    else{
        attmepts++;
        if(guess < answer){
            window.alert("TOO LOW! PLEASE TRY AGAIN!")
        }
        else if (guess > answer){
            window.alert("TOO HIGH! PLEASE TRY AGAIN!")
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. it took you ${attmepts} attempts`)
            running = false;
        }
    }
  
}
