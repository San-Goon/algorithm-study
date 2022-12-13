let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num = Number(input[0].split(" ")[1]);
let arr = [];
for (let n of input[1].split(" ")) {
    n = Number(n);
    if (n < num) {
        arr.push(n)
    }
}

console.log(arr.join(" "))