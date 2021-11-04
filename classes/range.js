class Range {

    constructor(from, to) {
        this.from = from
        this.to = to
    }

    includes(x) {
        return this.from <= x && x <= this.to;
    }

    toString() {
        return `(${this.from}...${this.to})`;
    }

    /**
     * 
     * @param {string} s 
     */
    static parse(s) {
        s = s.match(Range.integerRangePattern);
        console.log(s)
        return new Range (s[1], s[2]);
    }

    static integerRangePattern = /([0-9]+)[.]{3}([0-9]+)/
}

class Span extends Range {
    constructor (from, span) {
        super(...[from, from + span].sort((a, b) => a - b))
    }
}

let range = new Range(1, 10);
let span = new Span(4, 8);
let span2 = new Span(12, -8);

console.log(range.includes(4));
console.log(range.toString());
console.log(Range.parse("(4...80)"));