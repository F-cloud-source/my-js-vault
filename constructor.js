// constructor = special way to define the
//               properties and methods of Objects
//                in js.


function Car(make, model, year, color, maxSpeed, engineType, evHybridFeatures , batteryLife){
       this.make = make;
       this.model = model;
       this.year = year;
       this.color = color;
       this.maxSpeed = maxSpeed;
       this.engineType = engineType;
       this.evHybridFeatures = evHybridFeatures;
       this.batteryLife = batteryLife;
       this.Drive = function(){console.log(`You are Driving ${this.make}`)}
       this.License  = function(){console.log(`You can get License in 2 Months`)}
       this.Switch = function(){console.log(`You can Switch Your Between EV and Fuel`)}
       this.Chargetime = function(){console.log(`It take Normally 4 to 6 Hours it Car has Optimum Current and 
                                               it Special Charger given by BYD Company not Local Charger`)}
    }

const car1 = new Car(
    "BYd Car",
    "S Class",
     2032,
    "GREY",
    "230Kmph",
    "Hybrid Both on Gasoline and EV",
    "Costumer can Drive UP to 2 to 4 hours on 30KMPH on EV",
    "Solar Design Battery Life up to 3 years",
                    );

const car2 = new Car(
    "BYd Car",
    "C Class",
     2023,
    "WHITE",
    "170Kmph",
    "Hybrid Both on Gasoline and EV",
    "Costumer can Drive UP to 2 to 3 hours on 23KMPH on EV",
    "Solar Design Battery Life up to 3 years",
                 );                 

                 
const car3 = new Car(
    "BYd Car",
    "A Class",
     2021,
    "BlUE",
    "195Kmph",
    "Hybrid Both on Gasoline and EV",
    "Costumer can Drive UP to 1 to 2.5 hours on 28KMPH on EV",
    "Solar Design Battery Life up to 3 years",
                 );

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car1.maxSpeed);
console.log(car1.engineType);
console.log(car1.evHybridFeatures);
console.log(car1.batteryLife);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log(car2.maxSpeed);
console.log(car2.engineType);
console.log(car2.evHybridFeatures);
console.log(car2.batteryLife);


console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
console.log(car3.maxSpeed);
console.log(car3.engineType);
console.log(car3.evHybridFeatures);
console.log(car3.batteryLife);

// function  for car1 invoke.

car1.Drive();
car1.License();
car1.Switch();
car1.Chargetime();

// function for car2 invoke.

car2.Drive();
car2.License();
car2.Switch();
car2.Chargetime();

// function for car3 invoke.

car3.Drive();
car3.License();
car3.Switch();
car3.Chargetime();




