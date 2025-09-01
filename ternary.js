// ternary operator = a shortcut to if {} statements help to asighn a variable based on a condtion 
//                 condition ? codeiftrue : codeidfalse;




let time = 13;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting);

let isStudent = true;
let message = isStudent ? "you are a student" : "you are NOT a student";
console.log(message);


let purchaseAmount = 124;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);