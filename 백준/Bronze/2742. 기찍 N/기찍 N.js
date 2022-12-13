let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString());

let arr = [];

for (let i = input; i > 0; i--) {
    arr.push(i)
}

console.log(arr.join('\n'))