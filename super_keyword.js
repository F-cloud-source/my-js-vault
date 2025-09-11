// super = keyword used in classes to call the constructor 
// or access the properties and methods of parent (super class)

//              super = the parent.


class Animal{
     constructor(name , age){
      this.name = name;
      this.age = age;
     }

     move(speed){
      console.log(`This ${this.name} can move at a speed of ${speed} KMPH`);
     }

}

class Rabbit extends Animal{

   constructor(name , age , runSpeed){
          super(name, age);
          this.runSpeed = runSpeed;
   }

   run(){
      console.log(`This ${this.name} can run `);
      super.move(this.runSpeed);
   }
}

class Fish extends Animal{

   constructor(name , age, swimSpeed){
           super(name , age);
           this.swimSpeed = swimSpeed;
   }

   swim(){
      console.log(`This ${this.name} can swim`);
      super.move(this.swimSpeed);
   }
}

class Hawk extends Animal{

   constructor(name, age , flySpeed){
      super(name, age);
       this.flyspeed = flySpeed;
   }

   fly(){
      console.log(`this ${this.name} can fly`);
      super.move(this.flyspeed)
   }
}


const rabbit = new Rabbit("rabbit" , 1 , "4KMPH");
const fish = new Fish("fish" , "5 months" , "2KMPH");
const hawk = new Hawk("hawk" , "2 years older Hawk" , "20KMPH");



rabbit.run();
fish.swim();
hawk.fly()