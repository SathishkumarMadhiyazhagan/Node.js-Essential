const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('customEvent', (message, user) => {
    console.log(`${user} and ${message}`);
})

emitter.emit('customEvent', "Hello world", 'computer');
emitter.emit('customEvent', "that's pretty cool", 'Eve');


process.stdin.on('data', (value) => {
    let input = value.toString().trim();

    if(input === 'exit') {
        emitter.emit('customEvent', 'Process Ended', 'process');
        process.exit()
    }
    else {
        emitter.emit("customEvent", input, 'Terminal')
    }
})

