const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let inputArr = [];
for (let i = 1; i < input.length; i++) {
    inputArr.push(input[i]);
}

const solution = (arr) => {
    let answer = '';
    if (arr.length === 1) {
        console.log(arr[0])
    } else {
      for (let i = 0; i < arr[0].length; i++) {
        let temp = arr[0][i]
        let flag = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j][i] !== temp) {
                flag = false;
                break;
            }
        }
        if (flag) answer += temp;
        else answer += '?';
    }
    console.log(answer);
    }
}

solution(inputArr);