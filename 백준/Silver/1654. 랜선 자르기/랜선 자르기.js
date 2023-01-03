let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input.shift().split(" ")[1];
let cables = input.map((v) => +v).sort((a,b) => a - b);

let left = 0;
let right = cables[cables.length - 1];

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let cable of cables) {
        count += Math.floor(cable / mid);
    }
    if (count < n) right = mid - 1;
    else left = mid + 1;
}

console.log(right);