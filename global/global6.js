const waitTime = 3000;

console.log(`setting a ${waitTime/1000} seconds delay`);

const timerFinished = () => {
    clearInterval(interval); 
    console.log('done');
 }

setTimeout(timerFinished, waitTime);


const waitInterval = 500;

let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime)*100)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`wating.... ${p}`);
    // console.log(`Waiting ${currentTime/1000} seconds`);
}

const interval = setInterval(incTime, waitInterval);

