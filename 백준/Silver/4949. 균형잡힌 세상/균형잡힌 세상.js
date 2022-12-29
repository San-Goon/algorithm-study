let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

for (let p of input) {
    let stack = [];
    let answer = 'yes'
    for (let w of p) {
        if (w === '(' || w === '[') stack.push(w);
        if (w === ')') {
            if (stack.pop() === '(') continue;
            else {
                answer = 'no';
                break;
            }
        }
        if (w === ']') {
            if (stack.pop() === '[') continue;
            else {
                answer = 'no';
                break;
            }
        }
    }
    if (stack.length > 0) answer = 'no'
    console.log(answer);
}