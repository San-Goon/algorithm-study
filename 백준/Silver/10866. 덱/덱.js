let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

input = input.map((v) => v.trim().split(" "));

let deque = [];
let answer = [];

for (let command of input) {
    if (command[0] === 'push_front') deque.unshift(command[1]);
    if (command[0] === 'push_back') deque.push(command[1]);
    if (command[0] === 'pop_front') {
        if (deque.length) answer.push(deque.shift());
        else answer.push(-1);
    }
    if (command[0] === 'pop_back') {
        if (deque.length) answer.push(deque.pop());
        else answer.push(-1);
    }
    if (command[0] === 'size') answer.push(deque.length);
    if (command[0] === 'empty') {
        if (deque.length) answer.push(0);
        else answer.push(1);
    }
    if (command[0] === 'front') {
        if (deque.length) answer.push(deque[0]);
        else answer.push(-1);
    }
    if (command[0] === 'back') {
        if (deque.length) answer.push(deque[deque.length - 1]);
        else answer.push(-1);
    }
}

console.log(answer.join("\n"));