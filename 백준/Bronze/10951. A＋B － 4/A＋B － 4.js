let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n');

input.pop();

for (let str of input) {
    const nums = str.split(" ");
    console.log(Number(nums[0]) + Number(nums[1]))
}