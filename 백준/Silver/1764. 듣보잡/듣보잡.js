let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(" ");

const everHeard = new Set(input.splice(0, +n));
const everSaw = [...input];

const list = [];

for (let v of everSaw) {
    if (everHeard.has(v)) list.push(v);
}

list.sort();

console.log(`${list.length}\n${list.join('\n')}`);