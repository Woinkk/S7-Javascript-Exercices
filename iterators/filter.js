/**
 * @param {Iterable} iterable Chaîne de caractère, Array, Map, Set
 * @param {function} f Fonction qui transforme chaque élément.
 */
function filter(iterable, f) {
    let iteration = iterable[Symbol.iterator]();
    return {
        next() {
            let result = iteration.next()
            while ( !f(result.value) && !result.done) {
                result = iteration.next();
            } 
            return { done: result.done, value: result.done ? undefined : result.value }
        }
    }
}

const iterator = filter("hello", v => "aeiouy".includes(v));
console.log(iterator.next().value); // => "e"
console.log(iterator.next().value); // => "o"
iterator.next().done; // => true