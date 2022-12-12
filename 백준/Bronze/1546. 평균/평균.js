let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let arr = input[1].split(" ");
let max = 0;
for (let score of arr) {
    max = Math.max(score, max)
}

let newScore = 0;
for (let score of arr) {
    newScore += score / max * 100
}

console.log(newScore / arr.length)
