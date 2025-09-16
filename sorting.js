// sort() = method use to sort element of an array in place.
//          Sorts elements are strings in Lexicographic Order , not alphabetical.
//          Lexicographic = (alphabet + number + symbols ).


let numbers = [ 1 , 10 , 2  , 3  , 4 , 5  , 6  , 7  , 8  , 9 ];


numbers.sort((a , b) => a - b );

console.log(numbers);


const people = [{name: "Alex" , age: 22 , gpa: 3.6},
                {name: "Max" , age: 23, gpa: 2.5},
                {name: "Micheal" , age: 42, gpa: 4.1},
                {name: "Hassan" , age: 29 , gpa: 3.0},
               ];

people.sort((a , b ) => b.gpa - a.gpa);  // ascendinng order of gpa from samller to bigger number.

people.sort((a , b) => a.age - b.age);   // dscending order of age from bigger to smaller number.

console.log(people);
console.log(people);

