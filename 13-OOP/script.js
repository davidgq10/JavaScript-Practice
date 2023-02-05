"use strict";

const Person = function (firstName, birthYear) {
  //Instances properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // 🚫 NEVER DO THIS, WE MUSTN'T CREATE METHODS INSIDE CONSTRUCTOR
  // this.sayHellow = function () {
  //     console.log(`Hellow ${this.firstName}`)
  // }
};

const david = new Person("David", 1988);
const jack = new Person("Jack", 1994);
const zeus = new Person("Zeus", 2010);

console.log(david instanceof Person); // return true

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} lisked to prototype
// 4. function automatically return {}

Person.prototype.calcAge = function () {
  const year = new Date().getFullYear();
  console.log(year - this.birthYear);
};

david.calcAge();
jack.calcAge();
zeus.calcAge();

//To call a prototype of one object, we can use:
console.log(david.__proto__);
console.log(david.__proto__.__proto__);
console.log(david.__proto__.__proto__.__proto__); //NULL
console.log(david.__proto__ === Person.prototype); //return true

Person.prototype.species = "Homo Sapiens";
console.log(david, zeus);

console.log(david.hasOwnProperty("firstName")); //return true
console.log(david.hasOwnProperty("species")); // return false (is a property of the constructor)

const arr = [6, 8, 2, 4, 6, 7, 1];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //return true

console.dir((x) => x + a);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return `${this.make} is going at ${(this.speed += 10)} km/h`;
};
Car.prototype.brake = function () {
  return `${this.make} is going at ${(this.speed -= 5)} km/h`;
};

const bmw = new Car("BMW", 120);
console.log(bmw);

console.log("🍃", bmw.accelerate());
console.log("🚫", bmw.brake());
console.log("🍃", bmw.accelerate());
console.log("🍃", bmw.accelerate());
console.log("🍃", bmw.accelerate());
console.log("🍃", bmw.accelerate());

const mercedes = new Car("Mercedes", 95);
console.log(mercedes);

console.log("🍃", mercedes.accelerate());
console.log("🚫", mercedes.brake());
console.log("🍃", mercedes.accelerate());
console.log("🍃", mercedes.accelerate());
console.log("🍃", mercedes.accelerate());
console.log("🍃", mercedes.accelerate());

///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl("Walter White", 1965);
// PersonCl.hey();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
console.log(ford.speed);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

