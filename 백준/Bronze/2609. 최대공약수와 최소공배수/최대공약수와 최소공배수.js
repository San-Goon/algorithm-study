let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

let n1 = +input[0];
let n2 = +input[1];

let min = Math.max(n1, n2);
let max = Math.max(n1, n2);

while (true) {
    if (min % n1 === 0 && min % n2 === 0) break;
    else min++
}

while (true) {
    if (n1 % max === 0 && n2 % max === 0) break;
    else max--
}

console.log(max)
console.log(min)

