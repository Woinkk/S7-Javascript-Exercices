/**
 * 
 * @param {string} haystack 
 * @param {string} needle 
 * @param {number} startIndex 
 */
function contains(haystack, needle, startIndex = 0) {
    if ( needle.length > haystack.length || startIndex > haystack.length ) return -1

    if (haystack.substr(startIndex, needle.length) === needle) return startIndex
    else return -1
}

console.log(contains("Hello im Spencer the last developer", "Hello"));
console.log(contains("Hello im Spencer the last developer", "Spencer", 9));
console.log(contains("Hello im Spencer the last developer", "Spencer", 4));