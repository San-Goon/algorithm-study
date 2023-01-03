let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

let arr = input.map((v) => v.split(" "));
let answer = [];

for (let i = 0; i < arr.length; i += 2) {
    let queue = [];
    let tmp = []
    for (let j = 0; j < arr[i][0]; j++) {
        queue.push([j, arr[i + 1][j]])
    }
    arr[i+1].sort((a,b) => b - a)
    while(queue.length) {
        if (queue[0][1] !== arr[i + 1][0]) {
            queue.push(queue.shift());
        } else {
            tmp.push(queue[0][0])
            queue.shift();
            arr[i + 1].shift();
        }
    }
    answer.push(tmp.indexOf(+arr[i][1]) + 1)
}

console.log(answer.join('\n'))