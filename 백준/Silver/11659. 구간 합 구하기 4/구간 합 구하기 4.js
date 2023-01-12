const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

input.shift();
const numbers = input.shift().split(" ").map((v) => +v);
const sum = Array(numbers.length + 1).fill(0);

for (let i = 0; i < sum.length - 1; i++) {
    sum[i + 1] = sum[i] + numbers[i];
}

const sections = input.map((v) => v.split(" ").map((v) => +v));
let answer = '';

for (const section of sections) {
    const [start, end] = section;
    answer += sum[end] - sum[start - 1] + '\n';
}

console.log(answer);