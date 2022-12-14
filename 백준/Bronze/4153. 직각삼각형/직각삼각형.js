let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input = input.map((v) => v.trim().split(" ").sort((a, b) => b - a));

input.pop();

for (let arr of input) {
    if (arr[0] * arr[0] === arr[1] * arr[1] + arr[2] * arr[2]) console.log('right')
    else console.log('wrong')
}

