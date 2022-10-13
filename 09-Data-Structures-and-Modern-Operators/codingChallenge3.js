'use strict';
const preventFormater = 1;

// Coding Challenge #3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = new Set(gameEvents.values());
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);
//3

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
//4
for (const [minute, event] of gameEvents) {
  console.log(
    `${minute <= 45 ? '[FIRST HALF] ' : '[SECOND HALF] '} ${minute}: ${event} `
  );
}
// //Number 1
// const distinctEvents = new Set([...gameEvents.values()]);
// console.log(distinctEvents);

// //Number 2
// gameEvents.delete(64);
// console.log(gameEvents);

// //Number 3
// let average = 90;
// average /= gameEvents.size;
// console.log(`An event happened, on average, every ${average} minutes`);
// //Other way number 3
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// //Number 4

// for (const [min, event] of gameEvents) {
//   minute <= 45
//     ? console.log(`[FIRST HALF] ${min}: ${event}`)
//     : console.log(`[SECOND HALF] ${min}: ${event}`);
// }

// //Other way number 4

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }
