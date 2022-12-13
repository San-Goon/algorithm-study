let fs = require('fs')
let input = Number(fs.readFileSync('dev/stdin').toString());

let arr = [];

for (let i = 1; i <= input; i++) {
    arr.push(i);
}

console.log(arr.join('\n'))