const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

const list = [...input].slice(0, +N).map((v) => v.trim().split(" "));
const targetList = [...input].slice(+N, +N + +M);

const answer = [];
const obj = {};

for (const item of list) {
    const [address, password] = item;
    obj[address] = password;
}

for (const target of targetList) {
    answer.push(obj[target])
}

console.log(answer.join("\n"));