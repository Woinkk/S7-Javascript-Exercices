let string = "Hello world!"

/**
 * 
 * @param {string} str 
 * @param {string} sep 
 * @returns {string[]}
 */
function split (str, sep) {
    let splitString = []
    let cut = 0;

    for (let i = 0; i <= str.length; i++) {
        if( sep === "" ) {
            if (i === str.length) return splitString
            splitString.push(str[i]);
        } else {
            if (str[i] === sep[0]) {
                for (let j = 0; j < sep.length; j++) {
                    if(str[i + j] != sep[j]) {
                        break;
                    } else if (j === sep.length - 1) {
                        splitString.push(str.slice(cut, i));
                        i += sep.length
                        cut = i
                    }
                    
                }
            }else if ( i === str.length) {
                splitString.push(str.slice(cut, i));
            }
        }
    }

    return splitString;
}

// TODO: Add chai assertion test
console.log(split(string, " "));