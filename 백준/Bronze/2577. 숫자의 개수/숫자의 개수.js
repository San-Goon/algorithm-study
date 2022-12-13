let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n');

input.pop();

let answer = 1;
let obj = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
};

for (let num of input) {
    num = Number(num);
    answer *= num;
}

answer = answer.toString();

for (let n of answer) {
    obj[n]++;
}

for (let c of Object.values(obj)) {
    console.log(c)
}