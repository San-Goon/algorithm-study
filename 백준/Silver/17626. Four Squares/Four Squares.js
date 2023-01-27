const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +require('fs').readFileSync(filePath).toString();

const dp = Array(input + 1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for(let i = 2; i * i <= input; i++) {
    dp[i*i] = 1;
};

for (let i = 5; i <= input; i++) {
    let min = 4;
    for (let j = 1; j * j <= i; j++) {
        min = Math.min(min, dp[i-j*j]);
    }
    dp[i] = min + 1;
}

console.log(dp[input])