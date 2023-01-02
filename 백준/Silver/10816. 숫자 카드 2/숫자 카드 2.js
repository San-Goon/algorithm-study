let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let cards = input[1].split(" ");
let nums = input[3].split(" ");

let obj = {};
let answer = [];

for (let card of cards) {
    obj[card] = obj[card] ? obj[card] + 1 : 1;
}

for (let num of nums) {
    if (obj[num]) answer.push(obj[num]);
    else answer.push(0);
}

console.log(answer.join(" "));