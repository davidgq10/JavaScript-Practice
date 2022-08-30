'use strict';
const preventFormater = 1;

///////////////////////////////////////// Maps: Fundamentals;

//To create a new map we use the next sentense
const rest = new Map();

//Then we can add new elements to the map with SET method
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

//When we use set method also returns the map, and we can print it.
console.log(rest.set(2, 'Lisbon, Portugal'));

//We can SET many items to a map at the same time
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log('🚒', rest.get('name'));
console.log('🌉', rest.get(true));
console.log('🚦', rest.get(1));

const time = 8;
console.log(
  '🏰',
  rest.get(time > rest.get('open') && time < rest.get('close'))
);

console.log('🗽', rest.has('categories'));
rest.delete(2);

//Methot to clean the map
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
//One very importante functionallity is we can create new maps with the DOM objects, that makes easier to select the DOM.
//rest.set(document.querySelector('h1'), 'Heading');
console.log('🚂', rest);
console.log('🧯', rest.size);

console.log('🛹', rest.get(arr));

///////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
