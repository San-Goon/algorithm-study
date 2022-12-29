let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString();

let answer = -1;

for (let i = Math.floor(input / 5); i >= 0; i--) {
    let tmp = input;
    tmp -= 5 * i;
    if (tmp % 3 === 0) {
        answer = i + (tmp / 3);
        break;
    }
}

console.log(answer);