// Error  =  An Object that is created to represent a problem that occurs 
//          Occurs often with user Input or Establishing a Connection.

// try {  }  =  Encloses error that might Potentially  try to cause an  Error.
//catch {   } = Catch and Handle any Throw error from Errors from try{   }.
//finally {   }  = (optional) Always excutes. Used mostly fo clean Up 
//                 ex. close files , close connections , release Resources.
 

 try{
console.log(xyz);       // Uncaught Refrenece error: xyz is not defined and it break all logic  and output.
//NETWORK ISSUE
//PROMISE REJECTION.
//SECURITY ERRORS
 }


 catch(error){
    console.error(error);    // we use error good for debugging in js code and web dev projects.
 }


 finally{
// CLOSING FILES
// CLOSING CONNECTIONS
// RELEASE RESOURCES

console.log("This JS Program is Run and Excute and Reach it end in Result");
 }


 console.log(`You have Error in this js code`);





 try{
 const dividend = Number(window.prompt("Enter a Dividend : "));
 const divisor = Number(window.prompt("Enter a Divisor : "));


    if(divisor == 0 ){
       throw new Error("This must not be Divided By 0");
    }

   if(isNaN (dividend) || isNaN (divisor)){
     throw new Error("Must not divided By Alphabet Number Only");
   }


 const results = dividend / divisor 

 console.log(results);

 }

catch(error){
  console.error(error);
}


finally{

   console.log("  We can inspect  Error and Inspect Chrome in dev tool");
}

console.log("This Code is Excuted IN V8 chrome dev tool CONSOLE");

