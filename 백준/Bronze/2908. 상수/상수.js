let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let arr = [];

for (let s of input) {
    let temp = ''
    for (let i = 2; i >=0; i--) {
        temp += s[i];
    }
    arr.push(+temp);
}

console.log(Math.max(arr[0], arr[1]))