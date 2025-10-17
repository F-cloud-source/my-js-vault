// Calculator Program

const display = document.getElementById("displays");

function appendToDisplay(input){
    display.value += input;
}


function clearDisplay(){
  display.value = "";
}


function calculate(){
    try{
         display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR SPOTTED !!!!"
    }
}  


