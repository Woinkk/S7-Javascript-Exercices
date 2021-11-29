function deepEqual(list1, list2) {
    if (list1.length !== list2.length) return false;
    for (let i = 0; i < list1.length; i++) {
        if (typeof list1[i] === "object" && typeof list2[i] === "object") return deepEqual(list1[i], list2[i]);
        else if (list1[i] !== list2[i]) return false;
    }
    return true;
}

const a1 = [1, 2, [3, 4], 5];
const a2 = JSON.parse(JSON.stringify(a1));
let test = deepEqual(a1, a2);
console.log(test);