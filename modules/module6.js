const collectAnswers = require('./lib/collectAnswers1');

const questions = ['What is your name?',
    'what would you do?',
    'what would be do for living?'];

const emitAnswer = collectAnswers(questions, (answers) => {
    console.log('Thank you for your answers');
    console.log(answers);
    // rl.close();
    process.exit();
});

emitAnswer.on('answer', (answer) => {
    console.log(`The Answer is ${answer}`);
})