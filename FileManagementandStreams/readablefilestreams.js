const fs = require('fs');

let stream = fs.createReadStream('chatlog/logs.md', 'utf-8')

let data;

stream.once('data', (chunk) => {
    console.log('Read stream Started');
    console.log('===================');
    console.log(chunk)
})

stream.on('data', (chunk) => {
    console.log(chunk);
    console.log(`Chunk: ${chunk.length}`);
    data += chunk
})

stream.on('end', () => {
    console.log(`Process Ended ${data.length}`);
})

console.log('Reading the file');

// const questions = ['What is your name?',
//      'what would you do?',
//      'what would be do for living?'];
// const answers= new Array();

// function ask(value=0) {
//     process.stdout.write(`\n\n\n ${questions[value]}`);
//     process.stdout.write(`>`);
// }

// ask();

// process.stdin.on('data', (data) => {
//     answers.push(data.toString().trim());
//     if(answers.length !== questions.length) {
//         ask(answers.length);
//     } else {
//         process.exit();
//     }
// })

// process.on('exit', () => {
//     process.stdout.write('\n\n\n')
//     answers.forEach((answer) => {
//         process.stdout.write(`\n ${answer}`)
//     })
// })

