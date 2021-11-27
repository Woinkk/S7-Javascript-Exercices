/**
 * 
 * @param {object} source 
 * @param {object} propertyNames 
 */
function diff(source, propertyNames) {
    let properties = Object.getOwnPropertyNames(source);
    for (const property in properties) {
        const element = properties[property];
        if (element === propertyNames) {
            delete source.element
        }
    }
}

let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let objectWithoutOpacity = diff(o1, withoutOpacity); // => { r: 0, g: 0, b: 0 }
o1 === objectWithoutOpacity; // => false