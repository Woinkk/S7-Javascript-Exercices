const assert = require('assert');

function compose(fun1, fun2) {
    return value => fun1(fun2(value));
}

const increment = x => x + 1;
const double = y => y * 2;
const timesTwoPlusOne = compose(increment, double);
let test = timesTwoPlusOne(5);
assert.deepEqual(test, 11);
console.log(test);