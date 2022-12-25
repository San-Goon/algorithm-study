let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let n = +input;

let temp = (n % 10 * 10) +(Math.floor(n / 10) + n % 10) % 10
let cnt = 1;

while (temp !== n) {
    temp = (temp % 10 * 10) + (Math.floor(temp / 10) + temp % 10) % 10
    cnt++;
}

console.log(cnt)