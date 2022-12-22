let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split(" ");

let n = +input[0];
let k = +input[1];

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(n) / (factorial(k) * factorial(n - k)))