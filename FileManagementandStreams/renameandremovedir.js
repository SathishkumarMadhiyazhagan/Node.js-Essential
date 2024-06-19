const fs = require('fs');

// fs.renameSync('your-files-here/aaa', 'hello/aaa');


// fs.rename('hello/aaa', 'your-files-here/aaa', (e) => {
//     if(e) {
//         throw e;
//     }
// })

// fs.rmdir('your-files-here/he', (e) => {
//     if(e) {
//         throw e;
//     }
// })

// fs.rmdirSync('your-files-here/hi');

fs.mkdirSync('your-files-here/hhh')
fs.readdirSync('your-files-here/aaa').forEach((e) => {
    fs.renameSync(`your-files-here/aaa/${e}`, `your-files-here/hhh/${e}`);
})

fs.rmdirSync('your-files-here/aaa');
