/**
 * 
 * @param {Object} obj 
 */
function dump(obj) {
    /** @type {Array} */
    stringBuilder = [];

    stringBuilder.push("{")

    for (const prop of Object.entries(obj)) {
        stringBuilder.push(`"${prop[0]}": `);

        if (typeof prop[1] === "object") {
            stringBuilder.push(`[${prop[1]}],`);
        } else {
            stringBuilder.push(`"${prop[1]}",`);
        }
    }

    let last = stringBuilder[stringBuilder.length - 1].slice(0, -1);

    stringBuilder.pop();

    stringBuilder.push(last);

    stringBuilder.push("}");
    
    return stringBuilder.join("");
}

let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];
console.log(dump(obj));  // => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}