let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let m = +input[0];
let n = +input[1];

let min = 0;
let sum = 0;

for (let i = m; i <= n; i++) {
    if (i === 1) continue;
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) isPrime = false;
    }
    if (isPrime) {
        sum += i;
        if (min === 0) min = i;
    };
}
if (sum > 0) {
    console.log(sum + '\n' + min)
} else {
    console.log(-1)
}
