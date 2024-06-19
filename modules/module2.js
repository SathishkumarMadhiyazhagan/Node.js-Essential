let count = 0;

const inc = () => ++count;

const des = () => --count;

const getcount = () => {console.log(`Current Count Value is ${count}`);}


module.exports = {
    anything: true,
    who:"Bill",
    count,
    inc,
    des,
    getcount
};