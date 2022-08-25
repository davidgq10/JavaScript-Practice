'use strict';
const preventFormatingBug = 1;

//A value is said to be mutable if it can be changed. That's all there is to it: a mutation is the act of changing the properties of a value. All primitive value in JavaScript are immutable: you can't change their properties — ever. A value is said to be mutable if it can be changed. That's all there is to it: a mutation is the act of changing the properties of a value. All primitive value in JavaScript are immutable: you can't change their properties — ever.

//Mutating with arrays

let myFirstValue = 5;
let mySecondValue = 10;

console.log(
  `💖 BEFORE MUTATION: Result of myFirstValue: ${myFirstValue}, Result of mySecondValue: ${mySecondValue}`
);

[myFirstValue, mySecondValue] = [mySecondValue, myFirstValue];
console.log(
  `💔 AFTER MUTATION: Result of myFirstValue: ${myFirstValue}, Result of mySecondValue: ${mySecondValue}`
);

//Mutating with arrays
//Declare a object for work
const openingHours = {
  mon: {
    open: 12,
    close: 22,
  },
  wed: {
    open: 11,
    close: 23,
  },
  fri: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//Define 3 new variables
let a = 111;
let b = 999;
//Print object before mutating
console.log('💨', a, b);
//Mutating object
const obj = { a: 4, b: 7, c: 8 };
//We can define a defult value for undefined items, for example with "a = 5555555", if the object doesn´t have a propertie named "a" return "5555555"
({ a = 5555555, b } = obj);
//Print object after mutating
console.log('🐱‍🏍', a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log('💦', o, c);
