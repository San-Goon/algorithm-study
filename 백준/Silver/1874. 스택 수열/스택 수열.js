let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input.shift();
let numbers = input.map((v) => +v);

let stack = [];
let answer = '';
let count = 1;

for (let i = 0; i < n; i++) {
    const number = numbers.shift();

    while (count <= number) {
        stack.push(count++);
        answer += '+\n';
    }

    const poppedItem = stack.pop();
    if (poppedItem !== number) {
        answer = 'NO'
        break;
    }
    answer += '-\n'
}

console.log(answer.trim());