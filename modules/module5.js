const collectAnswers = require('./lib/collectAnswers');

const questions = ['What is your name?',
    'what would you do?',
    'what would be do for living?'];

collectAnswers(questions, (answers) => {
    console.log('Thank you for your answers');
    console.log(answers);
    // rl.close();
    process.exit();
})