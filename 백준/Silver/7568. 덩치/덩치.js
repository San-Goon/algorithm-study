let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

let arr = input.map((v) => v.split(" "));

let answer = [];

for (let i = 0; i < arr.length; i++) {
  let place = 1;
  for (let j = 0; j < arr.length; j++) {
    if (i === j) continue;
    if (+arr[i][0] < +arr[j][0] && +arr[i][1] < +arr[j][1]) place++;
  }
  answer.push(place);
}
console.log(answer.join(" "));
