let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

let num = 0;

for (let n of input) {
    num += n*n
}

console.log(num % 10)