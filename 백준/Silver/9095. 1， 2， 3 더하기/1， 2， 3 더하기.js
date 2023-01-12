const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

const numbers = [...input].map((v) => +v).slice(1);

const dp =[0, 1, 2, 4];

for (let i = 4; i <= 10; i++) {
    dp.push(dp[i - 3] + dp[i - 2] + dp[i - 1]);
}

let answer = [];

for (const number of numbers) {
    answer.push(dp[number]);
}

console.log(answer.join("\n"));