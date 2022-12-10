const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");
let inputArr = input[1].split(" ");

const solution = (arr) => {
    arr.sort((a,b) => a - b);
    console.log(arr[0] * arr[arr.length - 1])
}

solution(inputArr);