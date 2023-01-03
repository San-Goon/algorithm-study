let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

let answer = [];

let arr = input.map((v) => +v).sort((a, b) => a - b);

let obj = {};

for (let n of arr) {
    obj[n] = obj[n] ? obj[n] + 1 : 1;
}

let freArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

let fre = [+freArr[0][0]];

for (let i = 0; i < freArr.length - 1; i++) {
    if (freArr[i][1] === freArr[i + 1][1]) fre.push(+freArr[i + 1][0]);
    else break;
}

fre.sort((a,b) => a - b);

let freVal;

if (fre.length === 1) freVal = fre[0];
else freVal = fre[1];
let avg = +Math.round(arr.reduce((acc, cur) => acc + cur) / arr.length)

if (avg === -0) avg = 0;

answer.push(avg);
answer.push(arr[(arr.length - 1) / 2]);
answer.push(freVal);
answer.push(arr[arr.length - 1] - arr[0]);

console.log(answer.join('\n'))