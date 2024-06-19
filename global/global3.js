// console.log(process);
console.log(process.argv);

//node global3 hello sathishkumar how are you?

const find = (value) => {
    let currentPosition = process.argv.indexOf(value);
    return process.argv[currentPosition];
}

let enterValue = find('how');

let enterValue1 = find('sathishkumar');

console.log(enterValue, enterValue1);