let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

input = input.map((v) => v.split(" "))

input.sort((a,b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
})

input = input.map((v) => v.join(" "))

console.log(input.join('\n'))