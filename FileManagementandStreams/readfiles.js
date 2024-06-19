const fs = require('fs');

let file = fs.readFileSync('./file.md', 'utf-8');

console.log(file);

fs.readFile('./file.md', 'utf-8', (err, value) => {
    if(err) {
        throw err;
    }
    console.log(value);
});

console.log('Reading async...');