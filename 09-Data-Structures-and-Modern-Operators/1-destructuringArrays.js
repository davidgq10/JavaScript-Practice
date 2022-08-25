'use strict';const arr = [
  2,
  3,
  5,
  'Helow!',
  [5, 'Cat', true],
  {
    name: 'David',
    age: 34,
    dogs: [
      { name: 'Jack', color: 'Black', ageMonths: 13 },
      { name: 'Zeus', color: 'Black-White', ageMonths: 12 },
    ],
  },
];

//Default values (when we don't know how long is the array), we can define defaults values for undefine result, for example

const [
  ,
  ,
  ,
  ,
  ,
  ,
  myTestDefaul = "💫 In the index = 6 doesn't have a value, and return this text",
] = arr;
console.log('💌', myTestDefaul);

//How get Hellow word (we have to put the variable in the index space of the element that we want to return)
const [, , , myHellow] = arr;
console.log('💦', myHellow);

//How to get the array (In this case we return all the Array)
const [, , , , myArray] = arr;
console.log('🔅', myArray);

//How to get the items in the array (In this case we return the elements inside the array)
const [, , , , [myFirstArrayItem, mySecondArrayItem, myThirdArrayItem]] = arr;
console.log(
  `🛐 First: ${myFirstArrayItem}, Second: ${mySecondArrayItem}, Third: ${myThirdArrayItem}`
);

//How to get info of the object (In this case we get all the object)
const [, , , , , myPersonInfo] = arr;
console.log('🔱', myPersonInfo);

//How to get info in the person ( In this case we are getting information inside the object, en return another object named dogs)
const [, , , , , { dogs: myDogsInfo }] = arr;
console.log('➰', myDogsInfo);

//How to get info in dogs (In this case we are getting information inside the dogs info and retur two individual object that we can use for get their properties)
const [
  ,
  ,
  ,
  ,
  ,
  {
    dogs: [myDog1Info, myDog2Info],
  },
] = arr;
console.log(
  //Also we can print info of an object in the next way
  '💠',
  ` Dodg 1 info is ${myDog1Info.name}, and dog 2 info is ${myDog2Info.name}`
);
//Or print all the object like this:
console.log('1️⃣  Dog 1 info : ', myDog1Info);
console.log('2️⃣ Dog 2 info : ', myDog2Info);

//Also we can assign the deep value to a variable, for example:
const [
  ,
  ,
  ,
  ,
  ,
  {
    dogs: [{ name: myDog1Name }, { name: myDog2Name }],
  },
] = arr;
console.log(
  //Printing the results
  '💚',
  ` The name of get first dog is ${myDog1Name}, and the name of get second dog is ${myDog2Name}`
);
console.log('⏺ Here', arr[5].dogs);

//In a better way
const [myDog1NameEasy, myDog2NameEasy] = arr[5].dogs;
console.log(
  //Printing the results
  `♈ The name of get first dog is ${myDog1NameEasy.name}, and the name of get second dog is ${myDog2NameEasy.name}`
);
//or in this way, but THATS A LOT OF NUMBERS 😖
const [myDog1NameEasyTwo, myDog2NameEasyTwo] = [
  arr[5].dogs[0].name,
  arr[5].dogs[1].name,
];
//Printing the results
console.log(
  '🔄',
  `The name of get first dog is ${myDog1NameEasyTwo}, and the name of get second dog is ${myDog2NameEasyTwo}`
);
