let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

input = input.map((v) => +v);

let n = Math.ceil((input[2] - input[1]) / (input[0] - input[1]))

console.log(n)

