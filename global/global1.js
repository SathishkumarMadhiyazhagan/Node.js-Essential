const path = require("path")
console.log(__dirname);
console.log(__filename);

console.log(`The file name is ${path.basename(__filename)}`);

for(let element in global) {
    console.log(element);
}