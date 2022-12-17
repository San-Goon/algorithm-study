let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim();

let num = parseInt(input);

let answer = 0;

for (let i = 1; i < num; i++) {
    let temp = i;
    let tmp = i;
    while (temp) {
        tmp += temp % 10;
        temp = Math.floor(temp / 10);
    }
    if (tmp === num) {
        answer = i;
        break;
    }
}
console.log(answer)

