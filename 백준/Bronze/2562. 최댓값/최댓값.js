let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let max = 0;

for (let n of input) {
    max = Math.max(n, max)
}

console.log(max)
console.log(input.indexOf(max.toString()) + 1)