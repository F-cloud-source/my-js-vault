//    Call Back HELL = Situation in js where callbacks are nested in one and 
//    another where code is difficult to read .Old patterns to handle asynronous
//    Function.
//    Use Promises + Async / Await to Aviod Call Back Hell.


// Example of Syncnorous Code in JS PERFORMED IN STEP MY SPPE IN SINGLR THREADED CODE NOT ALL ONCE
function Task1(){
    console.log("This is Task 1");
}

function Task2(){
    console.log("This is Task 2");
}

function Task3(){
    console.log("This is Task 3");
}

function Task4(){
    console.log("This is Task 4");
}

Task1();
Task2();
Task3();
Task4();

console.log("This Operation of Task is Completed in This JS CODE EXERCISE");

// EXAMPLE OF ASYNCONOUS IN JS COE SUE SETTimeOut


function Box1(callback){
      setTimeout(() => {
        console.log("This is Box 1");
        callback();
      }, 3000);
}

function Box2(callback){
    
    setTimeout(() => { 
        console.log("This is Box 2");
        callback();
      }, 4500);
}

function Box3(callback){
    
    setTimeout(() => { 
        console.log("This is Box 3");
        callback();
      }, 2400);
}

function Box4(callback){
    setTimeout(() => { 
        console.log("This is Box 4");
        callback();
      }, 1900);
}

function Box5(callback){
    setTimeout(() => { 
        console.log("This is Box 5");
        callback();
      }, 5000);
}

Box1(() =>{
    Box2(() =>{
        Box3(() =>{
            Box4(() =>{
               Box5(() =>{
                console.log("THIS IS CALLED CALL BACK HELL IN MODERN JS AND IT COOL ");
               });
            });
        });
    });
});

