let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

input = input.map((v) => v.trim().split(" "));

let stack = [];
let answer = [];

for (let command of input) {
    if (command[0] === 'push') stack.push(command[1]);
    if (command[0] === 'pop') {
        if (stack.length) answer.push(stack.pop());
        else answer.push(-1);
    }
    if (command[0] === 'size') answer.push(stack.length);
    if (command[0] === 'empty') {
        if (stack.length) answer.push(0);
        else answer.push(1);
    }
    if (command[0] === 'top') {
        if (stack.length) answer.push(stack[stack.length - 1]);
        else answer.push(-1);
    }
}

console.log(answer.join("\n"));