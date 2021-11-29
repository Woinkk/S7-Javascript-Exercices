function initWith(size, fun) {
    let arr = [];
    for(let i = 0; i < size; i++) arr.push(fun(i));
    return arr;
}

const fromZero = index => index;
let test = initWith(10, fromZero);
console.log(test);