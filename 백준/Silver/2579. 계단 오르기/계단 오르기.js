const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

const dp = Array(+input.shift()).fill(0);
const score = [...input].map((v) => +v);


dp[0] = score[0];
dp[1] = score[0] + score[1];
dp[2] = Math.max(score[0] + score[2], score[1] + score[2]);

for (let i = 3; i < dp.length; i++) {
    dp[i] = Math.max(score[i] + score[i - 1] + dp[i - 3], score[i] + dp[i - 2]);
}

while (true) {
    const answer = dp.pop();
    if (answer) {
        console.log(answer);
        break;
    }
}