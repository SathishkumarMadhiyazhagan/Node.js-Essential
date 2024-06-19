const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question('How Are you?', (value) => {
//     console.log(`hi ${value}`);
//     rl.close();
// });

const questions = ['What is your name?',
    'what would you do?',
    'what would be do for living?'];

const collectAnswers = (questions, done) => {
    const answers = [];

    const questionAnswered = (answer) => {
        answers.push(answer.toString().trim());
        if(answers.length != questions.length) {
            rl.question(questions[answers.length], questionAnswered)
        } else {
            return done(answers);
        }
    }

    rl.question(questions[0], questionAnswered);
} 


collectAnswers(questions, (answers) => {
    console.log('Thank you for your answers');
    console.log(answers);
    // rl.close();
    process.exit();
})