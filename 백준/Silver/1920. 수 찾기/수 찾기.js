let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let list = input[1].split(" ").sort((a, b) => a - b).map((v) => +v);

let answer = input[3].split(" ").map((v) => binarySearch(list, +v, 0, list.length - 1, 0));

function binarySearch(list, target, left, right, mid) {
    mid = Math.floor((left + right) / 2);
    if (right < left) {
        return list[mid] === target ? 1 : 0;
    }

    if (list[mid] > target) {
        right = mid - 1;
    } else {
        left = mid + 1
    }
    return binarySearch(list, target, left, right, mid);
}

console.log(answer.join('\n'));