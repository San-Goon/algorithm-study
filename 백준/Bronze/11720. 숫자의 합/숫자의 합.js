let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let sum = 0;

for (let n of input[1]) {
    sum += +n
}

console.log(sum)