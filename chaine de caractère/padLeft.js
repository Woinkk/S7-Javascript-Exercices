/**
 * 
 * @param {string} char 
 * @param {string} str 
 * @param {number} quantity 
 */
function padLeft(char, str, quantity) {
    stringBuilder = []
    if (str.length >= quantity ) return str
    for (let i = 0; i < quantity - str.length; i++) {
        stringBuilder.push(char);   
    }
    stringBuilder.push(str);

    return stringBuilder.join("");
}

const padZeros = padLeft.bind(undefined, "0")

console.log(padZeros("456", 6));

console.log(padLeft("0", "123", 6));