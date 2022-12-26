let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let n = +input[0];
let k = +input[1];
let arr = [];
let answer = [];

for (let i = 1; i <= n; i++) {
    arr.push(i);
}

let cnt = 1;

while(arr.length) {
    let tmp = arr.shift();
    if (cnt % k === 0) {
        answer.push(tmp);
    } else {
        arr.push(tmp)
    }
    cnt++
}

console.log(`<${answer.join(", ")}>`)