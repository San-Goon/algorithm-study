let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

let answer = [];

for (let p of input) {
    let tmp = 0;
    for (let w of p) {
        w = w.toLowerCase();
        if (w === 'a' || w === 'e' || w === 'i' || w === 'o' || w === 'u') tmp++;
    }
    answer.push(tmp);
}

console.log(answer.join('\n'));