// Test and  write js code and answer chatgpt question Exercise


function waitTwoSeconds(){
    
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 2000);
    });
}


waitTwoSeconds().then(value => console.log(value));


function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("finished! "); // resolves after ms milliseconds
        }, 2000);
    });
}

async function DelayTime(){
    const Delay = await delay();
    console.log(Delay);
}


DelayTime();


function randomPromise(){
    return new Promise((resolve , reject) =>{
        if(Math.random() <0.5){
            resolve("This is Succeded");
        }
        else{
            reject("This is Faild");
        }
        
      
    });
}

async function RandomResults(){
     try{
        const results = await randomPromise();
        console.log("Success:" , results);
     }
    catch(error){
   console.error("Error:" , error);
    }

}

RandomResults();

// Question exercise and code Chanllenge here

function step1() {
  return new Promise(resolve => setTimeout(() => resolve("Step 1 done"), 1000));
}

function step2() {
  return new Promise(resolve => setTimeout(() => resolve("Step 2 done"), 500));
}

function step3() {
  return new Promise(resolve => setTimeout(() => resolve("Step 3 done"), 200));
}


// Chaining Rule

step1().then(value => {console.log(value); return step2()})
       .then(value => {console.log(value) ; return step3()})
        .then(value => console.log(value) )
        console.log("All Done! ");

// Acync and Await

async function stepOperation(){
    const stepResult1 = await step1();
    console.log(stepResult1);

    const stepResult2 = await step2();
    console.log(stepResult2);

    const stepResult3 = await step3();
    console.log(stepResult3);

    console.log("All Done!");
}

stepOperation();

console.log(foo);
var foo = 5;

console.log(bar);
let bar = 10;

console.log([] + []);
console.log([] + {});
console.log({} + []);




