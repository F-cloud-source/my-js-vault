

function Person(name) {
  this.name = name;

  this.sayHello = function() {
    console.log('Hello, my name is ' + this.name);
  }

  setTimeout(function() {
    // What will `this` refer to here?
    console.log('Inside setTimeout:', this.name);
  }, 1000);
}

const person1 = new Person('Alice');
const Person2 = new sayHello();
