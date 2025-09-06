//  this = reference is this object where THIS is used 
//         (the object depends on the immediate Context)
//         person.name = this.name


const person1 = {
    name: "ALEX HALES",
    favFood: "Biryani",
    sayHello: function(){console.log(`Hi! i am ${this.name}`)},    // use of normal type function
    eat: function () {console.log(`This ${this.name} is eating ${this.favFood}`)},   // if we use arrow funtion like => it will give undefined output
}


const person2 = {
    name: "Micheal",
    favFood: "Meat Burger",
    sayHello: function(){console.log(`Hi! i am ${this.name}`)},    // use of normal type function
    eat: function () {console.log(`This ${this.name} is eating ${this.favFood}`)},   // if we use arrow funtion like => it will give undefined output
}

person1.sayHello();  // invoke code 
person1.eat();

person2.sayHello();
person2.eat();

console.log(this);