let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

input = input.map((v) => v.trim().split(" "));

let queue = [];
let answer = [];

for (let command of input) {
    if (command[0] === 'push') queue.push(command[1]);
    if (command[0] === 'pop') {
        if (queue.length) answer.push(queue.shift());
        else answer.push(-1);
    }
    if (command[0] === 'size') answer.push(queue.length);
    if (command[0] === 'empty') {
        if (queue.length) answer.push(0);
        else answer.push(1);
    }
    if (command[0] === 'back') {
        if (queue.length) answer.push(queue[queue.length - 1]);
        else answer.push(-1);
    }
    if (command[0] === 'front') {
        if (queue.length) answer.push(queue[0]);
        else answer.push(-1);
    }
}

console.log(answer.join("\n"));