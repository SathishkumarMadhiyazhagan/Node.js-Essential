process.stdout.write('hello \n \n')


const questions = ['What is your name?',
     'what would you do?',
     'what would be do for living?'];
const answers= new Array();

function ask(value=0) {
    process.stdout.write(`\n\n\n ${questions[value]}`);
    process.stdout.write(`>`);
}

ask();

// questions.forEach(element => {
//     process.stdout.write('\n\n\n'+element+'\n');
//     process.stdout.write(`>`);
// });

// process.stdin.on('data', (data) => {
//     process.stdout.write(data.toString().trim());
// })

process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());
    if(answers.length !== questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
})

process.on('exit', () => {
    process.stdout.write('\n\n\n')
    answers.forEach((answer) => {
        process.stdout.write(`\n ${answer}`)
    })
})

