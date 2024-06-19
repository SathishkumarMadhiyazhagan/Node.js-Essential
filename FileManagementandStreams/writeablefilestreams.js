const fs = require('fs');

let answerStreams;


// let writeStream = fs.createWriteStream("chatlog/hello.md", 'utf-8')

const questions = ['What is your name?',
     'what would you do?',
     'what would be do for living?'];
const answers= new Array();

function ask(value=0) {
    process.stdout.write(`\n\n\n${questions[value]}`);
    process.stdout.write(`>`);
}

ask();

process.stdin.once('data', (data) => {
    let name = data.toString().trim();

    let filename = `./${name}.md`;

    if(fs.existsSync(filename)) {
        fs.unlinkSync(filename);
    }

    answerStreams = fs.createWriteStream(filename);
    answerStreams.write(`Question Answer fpr ${name} \n=======\n`)
})


process.stdin.on('data', (data) => {
    let answer = data.toString().trim();

    answerStreams.write(`Questions: ${questions[answer.length]} \n`);

    answerStreams.write(`Answers: ${answer} \n`, () => {
        if(answers.length !== questions.length) {
            ask(answers.length);
        } else {
            process.exit();
        }
    })
    answers.push(answer);
    
})

process.on('exit', () => {
    answerStreams.close();
    process.stdout.write('\n\n\n') 
    answers.forEach((answer) => {
        process.stdout.write(`\n ${answer}`)
    })
})
