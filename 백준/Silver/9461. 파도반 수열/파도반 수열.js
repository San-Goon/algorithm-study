const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

input.shift();
const dp = Array(101).fill(0);
const answer = [];

dp[1] = dp[2] = dp[3] = BigInt(1);
dp[4] = dp[5] = BigInt(2);

for (let i = 6; i <= 101; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
}

for (let n of input) {
    answer.push(dp[n]);
}

console.log(answer.join("\n"))
