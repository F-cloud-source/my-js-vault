// inheritance = allow a new class to inherit properties 
// and methods from an exisiting class ( parent -> child)
//  help with code reuasblility.


class Animal{

     alive = true;

     eat(){
        console.log(`This is ${this.name} is Eating`);
     }

     sleep(){
        console.log(`This is ${this.name} is Sleeping`);
     }

    health(){
        console.log(`This is ${this.name} is Healthy`);
    }

   zooticket(){
    console.log(`The Price of Zoo Ticket is $${25} `);
   }

}

// these are all child of parent(Animal);

class Rabbit extends Animal{  
    name = "rabbit";

    run(){
        console.log(`This can ${this.name} run Slowly`);
    }

    price(){
        console.log(`This Rabbit Price is $${35}`);
    }

}


class Hawk extends Animal{
    name = "Hawk";

     fly(){
        console.log(`This can ${this.name} fly`);
    }

    price(){
        console.log(`This Hawk Price is $${90}`);
    }

}


class Snake extends Animal{
    name = "snake";

     crawl(){
        console.log(`This can ${this.name} Crawl on ground But Be Awarw ! it is venomous Predator`);
    }

    price(){
        console.log(`This Snake Price is $${120}`);
    }


}


const rabbit = new Rabbit();
const hawk  = new Hawk();
const snake = new Snake();


console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.health();
rabbit.run();
rabbit.zooticket();

//  snake.alive = false; as hawk kills snake and eat it all!

console.log(snake.alive);
snake.eat();
snake.sleep();
snake.health()
snake.crawl();
snake.price();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.health();
hawk.fly();
hawk.price();


