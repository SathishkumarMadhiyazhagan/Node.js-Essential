
// const myModule = require('./module2');

// console.log(myModule);

// console.log(myModule.anything);
// console.log(myModule.inc());

const {inc, des, getcount, count} = require('./module2');

inc();

inc();

console.log(`Current value of Count is ${count}`);

// des();

console.log(`Current value of Count is ${count}`);

getcount();

