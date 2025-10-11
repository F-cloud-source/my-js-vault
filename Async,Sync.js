// synchronous = Excutes line by line consectively in a sequentail manner
//               Code that waits for an operation to complete.


// asynchronous = Allows multipe operations to be performed concurrently without waiting
//                Does'nt block the execution flow and allows the programs to continue 
//                (I/O operations , networks requests , Fetching data) 
//                Handled with: Callbacks, Promises, Async/ Await.


function func1(Callback){
setTimeout(() => {console.log(`task no 1`)  
                                      Callback()}  , 3000);
}

function func2(){
    console.log(`task no 2`);
    console.log(`task no 3 `); 
    console.log(`taks no 4 `);
}


func1(func2);
