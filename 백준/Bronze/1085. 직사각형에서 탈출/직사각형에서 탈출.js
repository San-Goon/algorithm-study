let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

let x = Number(input[2]) - Number(input[0]);
let y = Number(input[3]) - Number(input[1]);

console.log(Math.min(x,y,Number(input[0]), Number(input[1])))



