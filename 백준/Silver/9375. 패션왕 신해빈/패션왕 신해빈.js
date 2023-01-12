const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

const test = input.shift();
const answer = [];

for (let i = 1; i <= test; i++) {
    const obj = {};
    const clothesList = input.splice(0, +input.shift()).map((v) => v.trim().split(" "));
    for (const clothes of clothesList) {
        const [name, category] = clothes;
        obj[category] = obj[category] ? obj[category] + 1 : 2;
    }
    let count = 1;
    for (const v of Object.values(obj)) {
        count *= v;
    }
    answer.push(count - 1);
}

console.log(answer.join('\n'))
