// array object working in Javascript.

const fruit = [{name: "apple" , color:"red" , calories: 84.3} , 
               {name: "orange" , color:"orange" , calories: 120},
               {name: "pineapple", color: "yellow" , calories: 98},
               {name: "banana" , color:"yellow" , calories:  90}, 
               {name: "kiwi" , color:"dark purple" , calories: 65}];



// fruit[0].name  mean we are use [0] mean index 1 array and we ae calling 
// name property of index 1 array of Object in this array of fruit.
// console.log(fruit[0].name) print only name property of array of index 1 not 
// all property as we choose specific property of name of array 1 of index[0]


//fruit.push({name: "grapes" , color:" purple" , calories: "24"});
//console.log(fruit); mean we push the whole array of objects in the main array 
// of fruit at index[5] position in array in js code base.

//console.log(fruit);
//fruit.pop();  pop() removes the new added psuh array of object from
//  original array of fruit object in js code base.

// fruit.splice(1 , 2 ); mean it remove 1 and 2 number index array of object fronm whole fruit arary in js code.


// for each()

//fruit.forEach(fruit => console.log(fruit.calories)); call all elemet of an array of fruit as call bakc use forEach().

// map()

//const fruitsName = fruit.map(fruit => fruit.name);
//const fruitsColor = fruit.map(fruit => fruit.color);

//console.log(fruitsName);
//console.log(fruitsColor);

// filter() 

//const yellowFruits = fruit.filter(fruit => fruit.color === "yellow");

// const redFruits = fruit.filter(fruit => fruit.color === "red");

//const lowCalories = fruit.filter(fruit => fruit.calories < 100);

//const highCalories = fruit.filter(fruit => fruit.calories > 100);


//console.log(yellowFruits);
//console.log(redFruits);
//console.log(lowCalories);
//console.log(highCalories);

// reduce()
// it compare all fruit array and then follw al fcutin logic
//const maxFruits = fruit.reduce((max , fruit) => fruit.calories >
                                                           //max.calories ? fruit : max )

//console.log(maxFruits);