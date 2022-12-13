let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.shift()
input.pop()
input = input.map((v) => v.trim().split(" "));

for (let arr of input) {
    let str = ''
    for (let i = 0; i < arr[1].length; i++) {
        for (let j = 0; j < arr[0]; j++) {
            str += arr[1][i];
        }
    }
    console.log(str)
}

