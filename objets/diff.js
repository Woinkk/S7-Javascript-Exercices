/**
 * 
 * @param {object} source 
 * @param {object} propertyNames 
 */
function diff(source, propertyNames) {
    let rest = Object.assign({}, source);
    let propertiesRemove = Object.getOwnPropertyNames(propertyNames);

    for (const property in propertiesRemove) {
        const removeProp = propertiesRemove[property];
        if (rest.hasOwnProperty(removeProp)){ 
            delete rest[removeProp];
        }
    }
    return rest;
}

let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let objectWithoutOpacity = diff(o1, withoutOpacity); // => { r: 0, g: 0, b: 0 }
o1 === objectWithoutOpacity; // => false
console.log(o1);
console.log(objectWithoutOpacity);