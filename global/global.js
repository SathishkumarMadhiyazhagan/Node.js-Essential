global.console.log('hello');
console.log(global);
let hello = 'welcome to node essential training';

console.log(global.hello);
console.log(hello);

let newString = hello.split(' ');
let new1 = hello.charAt(0);
let new2 = hello.endsWith("q");
let new3 = hello.slice(6);
let new4 = new3.concat(new1);
 
console.log(newString);
console.log(new1);
console.log(new2);
console.log(new3);
console.log(new4);
console.log(`displaying all values ${new1} ${new2} ${new3} ${new4} ${newString}`)