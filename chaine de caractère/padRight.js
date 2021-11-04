function padType() {

    /**
     * 
     * @param {string} char 
     * @param {string} str 
     * @param {number} quantity 
     */
    function padRight(char, str, quantity) {
        stringBuilder = []

        if (str.length >= quantity ) return str

        stringBuilder.push(str);

        for (let i = 0; i < quantity - str.length; i++) {
            stringBuilder.push(char);   
        }

        return stringBuilder.join("");
    }

    return {
        padRight: function (char, str, quantity) {
            return padRight(char, str, quantity)
        },
        padSpaces: function (str, quantity) {
            return padRight(" ", str, quantity)
        }
    }
}

let pad = padType();

console.log(pad.padSpaces("456", 6));

console.log(pad.padRight("0", "123", 9));