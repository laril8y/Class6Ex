// exercise 2 Delve into Object-Oriented Programming by creating and interacting with classes.

// 1. Define a Person class with properties name and age.
// 2. Add a method greet() to this class which outputs a greeting.
// 3. Instantiate two different Person objects and invoke their greet methods.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello my name is ${this.name}! I am ${this.age} years old!`)
  }
  static info() {
    console.log("This is a person class. Do not feed after midnight, do not get wet.")
  }

  get ageOfPerson() {
    return this.age;
  }

  set updatedAge(updatedAge) {
      if(updatedAge >= 0) {
        this.age = updatedAge;
        console.log (`Age successfully updated to ${this.age}`);
      } else {
        console.log("Age cannot be negative!");
      }
  }
}

const luke = new Person("Luke", 23);
const billyjoe = new Person("BillyJoe", 267);

luke.greet();
billyjoe.greet();

Person.info();

billyjoe.updatedAge = 269;
billyjoe.updatedAge = -269;
console.log("logging BillyJoe's age: ", billyjoe.ageOfPerson)

// Exercise 4 Familiarize with static methods in classes.

// Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
// Try accessing this method both from the class itself and from an instance of the class. Document the outcomes.

// Exercise 5 Implement getters and setters for class properties.

// Within your Person class, add getters and setters for the age property.
// Ensure the setter that age can't be set to a negative value.
// Instantiate a Person object, try setting a negative age, and observe the results.