let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.pop();

let obj = {};

for (let n of input) {
    n = Number(n);
    let temp = n % 42
    obj[temp] = true;
}

console.log(Object.keys(obj).length)