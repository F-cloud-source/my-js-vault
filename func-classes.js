//         function declaration = Define a useable block of code 
//                                that perform a specific task


//         function hey(){
//               console.log("HELLO WORLD");
//          }

//          hey();

//          function expressions = A way to define a function as 
//          variable or values
//          assigh a function to  varible as for exapmple:= const hello = function(){
//                                                               console.log("HEllO WORLD");                    
//                                                                    }
//          1- Call Backs in asynchrounous Operations
//          2- Higher-Orders Functions
//          3- Closures
//          4- Event Listeners


//         const hello = function(){s
//         console.log("I LOVE CODE AND AI!");
//           }
//         hello();
//         3000 millisecond (ms) mena  3 second.


//         setTimeout(hey, 3000)

//          setTimeout(function() {
//          console.log("This message appears after 3 second.");
//          }, 3000)


const number = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ];


const Cubes = number.map(function (element){               // function is treated as value inside .map( ) callback.
   return Math.pow(element, 3);
});

console.log(Cubes); 
                                                           // Math.pow mean Math power function in javascript

const Square = number.map(function(element){
        return Math.pow(element, 2);
});                                                      // .map( ) mena as it filter all even number from all array

console.log(Square);


const EvenNums = number.filter(function(element){
         return element % 2 === 0;

});

const OddNums = number.filter(function(element){
          return element % 2 !== 0;                    // .map( )  mean as it filter all ODD number from all array result
});


console.log(OddNums);
console.log(EvenNums);


const Total = number.reduce(function(accumulator, element){
   return accumulator + element; 
})


console.log(Total);
