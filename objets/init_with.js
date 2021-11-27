function initWith(size, f) {    
    let array = [];
    console.log(f());
    console.log(size);

    //console.log(array.fill(f, f, size)); 
}



const withZero = () => 0;
const fromZero = index => index;
const from42 = index => 42 + index;
initWith(5, withZero); // => [0, 0, 0, 0, 0]
initWith(5, fromZero); // => [0, 1, 2, 3, 4]
initWith(5, from42); // => [42, 43, 44, 45, 46]