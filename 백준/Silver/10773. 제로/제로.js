let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

let stack = [];

for (let n of input) {
    if (n === '0') stack.pop();
    else stack.push(+n);
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
