let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = +input.shift().split(" ")[2];

let land = input.map((v) => v.split(" ").map((n) => +n)).flat().sort((a,b) => b - a);

let answer = [Number.MAX_SAFE_INTEGER];

for (let i = 256; i >= 0; i--) {
    let block = num;
    let count = 0;
    let flag = true;
    for (let n of land) {
        if (n > i) {
            count += (n - i) * 2;
            block += n - i;
        }
        if (n < i) {
            count += i - n;
            block -= i - n;
            if (block < 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag) {
        if (count < answer[0]) answer = [count, i];
    }
}


console.log(answer.join(" "))