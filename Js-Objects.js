// INtroduction oriented prograaming in JS
// Objects = A collection of related propertiesn and 
// or/ methods Can represent Real World Objects 
// (People , places, Products)
//                                    object = {key: value,
//                                               function()}


const person1 = {
    firstName: "Alex",
    lastName: "Hales",
    age: 26,
    isEmployed: true,
    sayHello: function(){
        console.log("Hi i am Alex. Nice to meet Yeh!")},
    diet: () => console.log("I Eat Diet as Priscribed By Doctor!"),
    totalFamilyPeople: 5,
    monltlyEarn: () => console.log("I Earn 4000$ Per Month and Send 2000$ To My Family"),
    
}


const  person2 = {
    firstName: "Micheal",
    lastName: "None",
    age: 19,
    isEmployed: false,
    sayBye: function(){console.log("Hi i am Micheal.Good Bye Guys!")},
    jobLess: () => console.log("I am Currently study in Diploma so i am still  have No JOB but i Working HARD!"),
    monltlySaving: () => console.log("I Save Up To 600$ Per Month "),   // use arrow fuction => is more effective and simple from regular js fuction code.
    totalFamilyPeople: 7,


}


console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
console.log(person1.totalFamilyPeople);
person1.sayHello();
person1.diet();
person1.monltlyEarn();



console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
console.log(person2.totalFamilyPeople);
person2.sayBye();
person2.jobLess();
person2.monltlySaving();

// the end 

