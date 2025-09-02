// callback = a fucntion tat is passed another function as an argument,

//  used to handle asynchronous  operation:
//  1- reading a file
//  2-network request
//  3-interactinf with database



hello(leave);

function hello(callback){
    console.log("HELLO WORLD!")
    callback();
}

function wait(){
    console.log("Please Wait!")
}

function leave(){
    console.log("DON'T LEAVE!")
}

function goodbye(){
    console.log("GoodBye!")
}

// call back can be applied in more 
// // type of paparameters and arguments 
// like this in number sum    and
//  subtract and other math operation


sum(displayPage , 23 , 75);

function sum( callback, x  , y ){
    let results = x + y;
    callback(results);
}

function displayConsole(results){
     console.log(results);
}


function displayPage(results){
    document.getElementById("myH1").textContent = results;
}