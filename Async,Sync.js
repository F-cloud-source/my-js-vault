// synchronous = Excutes line by line consectively in a sequentail manner
//               Code that waits for an operation to complete.


// asynchronous = Allows multipe operations to be performed concurrently without waiting
//                Does'nt block the execution flow and allows the programs to continue 
//                (I/O operations , networks requests , Fetching data) 
//                Handled with: Callbacks, Promises, Async/ Await.





setTimeout(() => console.log(`task 1`) , 3000);

console.log(`task no 2`);
console.log(`task no 3 `);
console.log(`taks no 4 `);