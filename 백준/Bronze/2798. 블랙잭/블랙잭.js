let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

input = input.map((v)=> v.split(" "));
let m = Number(input[0][1]);
let arr = [...input[1]].map((v) => Number(v));
let answer = 0;

for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum <= m) {
                answer = Math.max(answer, sum)
            }
        }
    }
}

console.log(answer)

