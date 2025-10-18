
const Display = document.getElementById("bar");


function appendtodisplay(input){
  Display.value += input;
}

function calculate(){
  try{
    Display.value = eval(Display.value);
  }
  catch(error){
  console.error("This Calculator Function is Stopped Due to ERROR!!");
  }
  finally{
    console.log("This Operation is Excuted");
  }
}


function cleardisplay(){
 Display.value = "";
}