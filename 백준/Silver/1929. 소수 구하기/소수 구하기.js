let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let min = +input[0];
let max = +input[1];

let answer = [];

for (let i = min; i <= max; i++) {
    if (i === 1) continue;
    if (i === 2) {
        answer.push(2);
        continue;
    }
    let flag = true;
    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            flag = false;
            break;
        }
    }
    if (flag) answer.push(i);
}

console.log(answer.join('\n'))