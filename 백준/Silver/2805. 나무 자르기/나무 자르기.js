let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let m = +input[0].split(" ")[1];
let woods = input[1].split(" ").map((v) => +v).sort((a, b) => a - b);
let left = 0;
let right = woods[woods.length - 1];

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let cut = 0;
    for (let wood of woods) {
        if (wood - mid > 0) cut += wood - mid;
    }
    if (cut < m) right = mid - 1;
    else left = mid + 1;
}

console.log(right)