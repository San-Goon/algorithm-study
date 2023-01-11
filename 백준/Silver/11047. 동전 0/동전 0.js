const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input.shift().split(" ");
const arr = [...input].sort((a, b) => b - a);
let answer = 0;

for (const num of arr) {
    if (K === 0) break;
    if (Math.floor(K / num) > 0) {
        answer += Math.floor(K / num);
        K = K % num;
    }
}

console.log(answer);