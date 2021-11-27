/**
 * @param {Iterable} iterable Chaîne de caractère, Array, Map, Set
 * @param {function} f Fonction qui transforme chaque élément.
 */
function map(iterable, f) {
    let iteration = iterable[Symbol.iterator]();
    return {
        next() {
            let result = iteration.next()
            return { done: result.done, value: result.done ? undefined : f(result.value) }
        }
    }
}

const iterator = map("hello", v => v.toUpperCase());
console.log(iterator.next().value); // => "H"
console.log(iterator.next().value); // => "E"
console.log(iterator.next().value); // => "L"
console.log(iterator.next().value); // => "L"
console.log(iterator.next().value); // => "O"
iterator.next().done; // => true