const orderSet = new Set(['David', 'Jessica', 'Andrés']);
console.log(orderSet);

console.log(`El horario es: ${true ? '10am-10pm' : '9am-12pm'}`);

console.log('Hellow');
console.log(5 + 5 + 5);
let myObject = {
  name: 'David',
  age: 34,
  dogs: [{ name: 'Jack' }, { name: 'Zeus' }],
};
console.log(myObject);

let copyObject = { ...myObject };
console.log(copyObject);

copyObject.dogs[0].name = 'Jack el pirata';
copyObject.age = 43;
console.log(copyObject);
console.log(myObject);

myArr = [0, 1, 2, 3];
copyArr = myArr;
copyArr[0] = 5;
console.log(myArr, ' /// ', copyArr);
