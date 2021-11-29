const assert = require('assert');
function partial(fun, x) {
    return (value1, value2) => fun(x, value1, value2);
}

const f = (x, y, z) => x * (y - z);
let test = partial(f, 2)(3, 4);
console.log(test);
assert.deepEqual(test, -2);