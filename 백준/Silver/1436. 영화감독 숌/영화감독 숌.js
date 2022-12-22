let fs = require('fs');
let input = +fs.readFileSync('/dev/stdin').toString().trim()

let cnt = 0;
let num = 666;

while (cnt < input) {
  let six = 0;
  let temp = num;
  while (temp) {
    if (temp % 10 === 6) six++;
    else six = 0;
    if (six >= 3) {
      cnt++;
      break;
    }
    temp = Math.floor(temp / 10);
  }
  num++;
}

console.log(num - 1);