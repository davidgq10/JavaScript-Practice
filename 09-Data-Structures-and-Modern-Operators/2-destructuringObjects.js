'use strict';const weekdaysArr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//We can create an object with dinamic name of properties for example in the next way

const openingHoursObject = {
  [weekdaysArr[3]]: {
    open: 12,
    close: 22,
  },
  [weekdaysArr[4]]: {
    open: 11,
    close: 23,
  },
  [weekdaysArr[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log('👁‍🗨', openingHoursObject);

const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    [weekdaysArr[3]]: {
      open: 12,
      close: 22,
    },
    [weekdaysArr[4]]: {
      open: 11,
      close: 23,
    },
    [weekdaysArr[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const order = restaurant.order(2, 3);
console.log(order);

//We can destructuring the object assign the properties name to variables, the orden doesn't matter
const { mainMenu, restaurantName, openingHours } = restaurant;
console.log('💢', mainMenu, restaurantName, openingHours);

//And if we want to change the Name of items we can:
const {
  mainMenu: Menu,
  restaurantName: Name,
  openingHours: Hours,
} = restaurant;
console.log('🔶', Menu, Name, Hours);

//We can to define default values if the object doesn't have one propertie with the name the we use.

const {
  // Because the restaurant object doesn't have a propertie named restaurantMenu, the default value is going to return an empty array; IF WE DOESN'T DEFINE A DEFAULT VALUE WILL RETURN "undefined"
  restaurantMenu = [],
  restaurantName: myRestName,
  // IF the restaurant object doesn't have a propertie named categories (not in this case), the default value is going to return an array with two elements [ 'First default category', 'Second default category' ]
  categories: myRestCategories = [
    'First default category',
    'Second default category',
  ],
} = restaurant;

console.log('💚', restaurantMenu, myRestName, myRestCategories);
