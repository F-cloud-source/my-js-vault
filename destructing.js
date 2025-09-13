// destructing = extract value from arrays and  objects that 
// assign them in to variable in a convinent way 
//                 [] = to perform array destruction 
//                 {} = to perform objects destruction
//                 5 example 
 
// ------EXAMPLE NO 1 ------
// SWAP THE VALUES OF TWO VARIABLES

let x = 1;
let y = 2; 
let z = 3;

[x , y , z] = [z , x ,  y];

console.log(x);
console.log(y);
console.log(z);

// ----- EXAMPLE NO 2 -----
// SWAP TWO VALUES OF AN ARRAY

const colors = ["red" , "blue" , "white" , "pink" , "purple" , "voilet pink"];

[colors[0] , colors[4]] = [colors[2] , colors[5]];

console.log(colors);

// ---- EXAMPLE NO 3 ----
// ASSIGN ARRAY ELEMENT TO AN ARRAYS

const color = ["red" , "blue" , "white" , "pink" , "purple" , "voilet pink"];

const [firstcolor, secondcolor, thirdcolor ,  ...extracolors] = colors;


console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);


// ----EXAMPLE NO 4 ----
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "ALEX",
    lastName: "HALES",
    age: 24,
    job: "Electrical engenierr",
    martialStatus: "UNMARRIED",
    siblings: " 2 Little Sisters",
}

const person2 = {
    firstName: "MAX",
    lastName: "NONE",
    age: 32,
    job: "WORKER IN A CONTRUCTOR COMPANY",
    martialStatus: "MARRIED",
    kids: 3,
    siblings: "1 Small Brother",
}
//const {firstName , lastName , age , job , martialStatus , siblings} = person1;
const {firstName , lastName , age , job , martialStatus , siblings} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
console.log(martialStatus);
console.log(siblings);

// ----EXAMPLE NO 5 ------
// DESTRUCTURE IN FUNCTION PARAMETERS.
function displayPerson({firstName , lastName, age , job, martialStatus, kids, siblings}){
    console.log(`Name: ${firstName} , ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
    console.log(`Martial Status: ${martialStatus} `);
    console.log(`Kids: ${kids}`);
    console.log(`Total Siblings: ${siblings}`);
}


const person3 = {
    firstName: "ALI",
    lastName: "NONE",
    age:  12,
    job: "UNEMPLOYED",
    martialStatus: "NON",
    kids: "NONE",
    siblings: "1 Small Sister",
}

displayPerson(person3);

// example challenge.

function printUserInfo({username , role, age = "Unknown"}){
    console.log(`UserName: ${username} | Role: ${role} | Age : ${age}`);
    console.log(`UserName: ${username} | Role: ${role} | Age : ${age}`);
    console.log(`UserName: ${username} | Role: ${role} | Age : ${age}`);
}


const users = [
    { username: "Ali", role: "admin", age: 22 },
    { username: "Sara", role: "editor", age: 19 },
    { username: "John", role: "guest" }  
];


for (const user of users) {
    printUserInfo(user);
}


//                  for (const item of items) {
//                     Destructure each item here
//                     }







