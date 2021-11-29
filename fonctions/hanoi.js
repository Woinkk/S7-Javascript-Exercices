let test = hanoi(3, 1, 3);

function hanoi(nbDisk, start, end) {
    if (nbDisk === 1) console.log(start + '->' + end);
    else {
        let other = 6 - (start + end);
        hanoi(nbDisk - 1, start, other);
        console.log(start + '->' + end);
        hanoi(nbDisk - 1, other, end);
    }
}