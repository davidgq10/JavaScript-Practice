'use strict';const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
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
