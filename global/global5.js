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
    console.log(`Waiting ${currentTime/1000} seconds`);
}

const interval = setInterval(incTime, waitInterval);

