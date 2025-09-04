// .filter() = a filter create a new array by 
//             filtering out other elements.


let numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ];
let EvenNumbers =  numbers.filter(IsEven);
let OddNumbers = numbers.filter(IsOdd);

console.log(OddNumbers); 
console.log(EvenNumbers);

function IsEven(element){
    return element  % 2  === 0;// ( % 2 === 0 ) mean even
}

function IsOdd(element){
    return element % 2  !== 0; // ( % 2 !== 0 ) mean odd 
}


// filter out college student under 18. 


const Students = [15 , 16, 17 , 18 , 18 , 19 , 55, 14];
const AdultStudent = Students.filter(IsAdult);

console.log(AdultStudent);

function IsAdult(element){
    return element >= 18;
}

// Over age of 60  person age ristrictions.


const OldPeople = [45 , 34 , 69, 53, 76, 23];
const Older = OldPeople.filter(IsOlder);


console.log(Older);

function IsOlder(element){
    return element >=60;
}