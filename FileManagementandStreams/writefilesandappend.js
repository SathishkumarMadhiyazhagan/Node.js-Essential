const fs = require('fs');

let md = `
this is a new file
==================

es6 template string are cool, they honor whitespace
`;

fs.writeFile('javascript.md', md.trim(), (err) => {
    if(err) {
        throw err;
    }
    fs.appendFileSync('javascript.md', 'hello world welcome', (err) => {
        if(err) {
            throw err
        }
    })
    console.log("Markdown Created");
})


fs.writeFileSync('text.md', md.trim());
// console.log(create);

fs.appendFileSync('text.md', "wellcome");
// console.log(append);

fs.writeFileSync('./hello/file1.md', 'hello world');