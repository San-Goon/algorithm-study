let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift();

let arr = input.map((v) => v.trim().split(" "));

for (let a of arr) {
    let floor = (Number(a[2]) % Number(a[0])).toString();
    let num = Math.ceil(Number(a[2]) / Number(a[0])).toString();
    if (floor === '0') floor = a[0];
    if (num < 10) {
        num = '0' + num;
    }
    console.log(floor + num)
}