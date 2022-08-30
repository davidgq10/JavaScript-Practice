'use strict';

const flight = 'LH234';
const passenger = {
  name: 'David Garbanzo',
  passport: 1238791122,
};

const checkIn = function (flightNum, passengerInfo) {
  //Is a bad practice change the values of variables, in this case in only for the demostration.
  flightNum = 'LH999';
  passengerInfo.name = 'Mr. ' + passengerInfo.name;
  if (passengerInfo.passport === 1238791122) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random()) * 10000000000;
// // };

// newPassport(passenger);
// checkIn(flight, passenger);
// let bookings = [];
// const createBooking = function (flightNum, numPassengers = 5, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH1233', 7, 50);
// createBooking('DG1735', 0, 50);
// createBooking('ODI983', undefined, 50);
// createBooking('DKH234', 7, 50);

// console.log(bookings);

///////////////////////////////////////
// // Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

/////My exersice

const sumNumbers = function (numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

const multNumbers = function (numbers) {
  let mult = 1;
  for (const num of numbers) {
    mult *= num;
  }
  return mult;
};

const calculate = function (numbers, fn) {
  return fn(numbers);
};

const numbers = [2, 4, 6, 8];

console.log(
  `The result of sum the numbers is ${calculate(
    numbers,
    sumNumbers
  )}, and the result of multiply the numbers is ${calculate(
    numbers,
    multNumbers
  )}`
);
