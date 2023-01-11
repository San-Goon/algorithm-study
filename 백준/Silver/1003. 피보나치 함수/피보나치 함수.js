const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const cases = [...input].map((v) => +v);
const fibonacci = [0, 1];
const answer = [];
let biggest = 0;

for (const c of cases) {
    biggest = Math.max(biggest, c);
}

for (let i = 2; i <= biggest; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
}

for (const c of cases) {
    if (c === 0) answer.push('1 0');
    else answer.push(`${fibonacci[c - 1]} ${fibonacci[c]}`)
}

console.log(answer.join("\n"));