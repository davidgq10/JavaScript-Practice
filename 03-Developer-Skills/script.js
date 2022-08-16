// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(23);

// console.log('Esto es una prueba');

// const calcAge = birthYear => 2037 - birthYear;
// console.log(``);

let Data1 = [17, 21, 23];
let Data2 = [12, 5, -5, 0, 4];

console.log(arr);

const printForcast = arr => {
    let arrForcast = [];
    for (let i = 0; i < arr.length; i++) {
        arrForcast.push(' ' + arr[i] + '°C in ' + (i + 1) + ' days');
    }
    return arrForcast;
};

console.log(
    `The forcast tempertures for the next ${arr.length} days are: ${printForcast(
        arr
    )}`
);
