let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input[1].split(" ");

let min = 1000001
let max = -1000001

for (let num of numbers) {
    min = Math.min(num, min);
    max = Math.max(num, max);
}

console.log(`${min} ${max}`)