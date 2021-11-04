const { assert } = require("chai");

let string = "Et demain matin, j'te fais des gaufres au sucre !!";
let stringStart = "Et demain";

/**
 * 
 * @param {string} string 
 * @param {string} startString 
 */
function startWith(string, startString) {
    return string.substr(0, startString.length) === startString ? true : false;
}

assert.isTrue(startWith(string, stringStart));
assert.isFalse(startWith(string, "Et bah pas demain"));