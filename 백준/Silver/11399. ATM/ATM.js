const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

const line = [...input][0].split(" ").sort((a, b) => a - b).map((v) => +v);

let answer = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
        answer += line[j]
    }
}

console.log(answer)