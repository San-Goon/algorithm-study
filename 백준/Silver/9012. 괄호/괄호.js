let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

for (let i of input) {
    i = i.trim();
    let stack = [];
    let answer = 'YES';
    for (let w of i) {
        if (w === '(') stack.push(w);
        if (w === ')') {
            if (stack.length === 0) {
                answer = 'NO';
                break;
            } else stack.pop();
        }
    }
    if (stack.length !== 0) answer = 'NO';
    console.log(answer);
}