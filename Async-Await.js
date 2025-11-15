// ASYNC AND AWAIT = Async = Make a function that Return a promise
//                   Await = make a async function that return a promise 


//  Allows you to Write your Asyncronous code in syncronous Manner 
//  Async doesn't have resolve or reject parameters 
//  Everything after Await is place in a Event quene



// Home Chores JS PROGRAM IN  PROMISE AND SETTIMEOUT FUNCTION AND DIFFERENT TASKS.

  function walkDog(){
  return new Promise((resolve , reject) => {
    setTimeout(() => {
       
        const walkDog = true;
        
        if(walkDog){
          resolve("We walk 🚶‍♀️‍➡️and Feed the dog🐶 and Walk back to Home🏠");
        }
        else{
          reject("We do not walk the dog Today");
        }
        
    }, 2000);
  });
}

function CleanHome(){
  return new Promise((resolve , reject) => {
    setTimeout(() => {
       
        const CleanHome = true;
        
        if(CleanHome){
          resolve("We cleaned All home 🏠 and AlL items of home like Shelfes and Cupboards and kitchens and BedRoom and Toilets");
        }
        else{
          reject("We did not Cleaned the home Todya because Maid not come");
        }
        
    }, 2800);
  });
}


function CarWash(){
  return new Promise((resolve , reject) => {
    setTimeout(() => {
       
        const CarWash = true;
        
        if(CarWash){
          resolve("We  Wash 🫧🧼 the Car🚗🚘");
        }
        else{
          reject("We do not wash the Car today");
        }
        
    }, 3500);
  });
}


async function DoChores(){
   try{

    const DogResults = await walkDog()
    console.log(DogResults);

   const CleanResults = await CleanHome()
   console.log(CleanResults);

   const CarResults = await CarWash()
   console.log(CarResults);

   }
   catch(error){
    console.error("Error Please Check code Again")
   }
}

DoChores();


async function RestOperators(){
  try{
    const RestAction1 = await res();
   
  console.log(RestAction1);

  const RestAction2 = await res();
   
  console.log(RestAction2);

  const RestAction3 = await res();
   
  console.log(RestAction3);
  }
  
  catch(error){
    console.error("Error is Formed");
  }

}

TaskOperators();