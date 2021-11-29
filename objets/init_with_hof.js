function initWith(fun) {
    return (value, from) => {
        if (from === undefined) from = 0;
        let array = [];
        for (let i = from; i < value + from; i++) {
            if(from != 0) array.push(i);
            else array.push(fun(i))
        }
        return array;
    }
}

const withZero = () => 0;
const from = (x, index) => x + index;
const initWithZeros = initWith(withZero);
const initFrom = initWith(from);
let test = initWithZeros(3);
console.log(test);
test = initFrom(3, 42);
console.log(test);