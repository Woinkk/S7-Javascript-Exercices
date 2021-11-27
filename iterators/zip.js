const { assert } = require('chai');

function* zip(...iterables) {
    for (const iterator of iterables) {
        yield* iterator
    }
}

assert.deepEqual([...zip("abc", [1, 2, 3])], ['a', 1, 'b', 2, 'c', 3])
assert.deepEqual([...zip("abcd", "123", "+-")], ['a', '1', '+', 'b', '2', '-', 'c', '3', 'd'])