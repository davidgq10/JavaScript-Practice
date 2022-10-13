'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const sumNumbers = (...numbers) => {
  const sumWithInitial = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
};

console.log('The result of the sum is: ' & sumNumbers(5, 4, 8, 9));

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      ` Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log('🛴', mainIngredient);
    console.log('🪐', otherIngredients);
  },
};

/////////////////////////HERE ARE THE KNOWLEGE////////////////////////////

/*🚨🚨 IMPORTANT: IN JAVASCRIPT EXIST MANY ELEMENTS ITERABLES LIKE ARRAYS, STRINGS, MAPS, SETS. BUT THE OBJECTS AREN'T ITERABLES.🚨🚨

🚧WE CAN USE SPREAD OPERATOR WITH ALL ITERABLES ELEMENTS🚧*/

//Copy
const arr = [7, 8, 9];
//This is a terrible way to copy
const batNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log('🐱‍🏍', batNewArr);

//This is the correct way to copy an array
// ...arr <- este se llama operador de propagación (SPREAD OPERATOR)
const newArr = [1, 2, ...arr];
console.log('💌', newArr);

//We can copy and merge differents arrays with SPREAD OPERATOR
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log('💢', menu);

//We can print individually elements
console.log('🎉', ...menu);

//Using spread operator with strings
const str = 'David';
const letter = [...str, '-----', ...'Garbanzo'];
console.log('🚍', letter);

//We cann´t use spread operator on template literal, for example "console.log(`${...letter}`)"; because it doesn´t wait element separates by ","; normally that in only use when wy send parameter to a function or make a new array.

// Real-world example
const ingredients = [
  //   prompt("Let's make pasta! Ingredient 1?"),
  //   prompt('Ingredient 2?'),
  //   prompt('Ingredient 3'),
];
console.log(ingredients);

//Order pasta with SPREAD OPERATOR
restaurant.orderPasta(...ingredients);

//Since 2018 we can use SPREAD OPERATOR for copy objects properties, for example

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log('🚋', newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log('🛵', restaurantCopy.name);
console.log('🛹', restaurant.name);

//🚧THE REST OPERATOR🚧*/
// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arrREST = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log('🛺', a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log('🚖', pizza, risotto, otherFood);

// Objects
const { sat, ...weekdaysREST } = restaurant.openingHours;
console.log('🏎', weekdaysREST);

// 2) Functions
//In the next line the estructuring a new array with the parameter that it received.
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log('🌋', sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];

//In the next line I call the add function and I destructuring the array in the parameter
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

///////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '') 🔥
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

///////////////////////////////////////
// Short Circuiting (&& and ||)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

///////////////////////////////////////
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
