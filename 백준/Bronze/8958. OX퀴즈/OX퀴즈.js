let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.pop();
input.shift();

for (let arr of input) {
    let score = 0;
    let row = 0;
    for (let w of arr) {
        if (w === 'O') {
            row++;
            score += row;
        } else if (w === 'X') {
            row = 0;
        }
    }
    console.log(score)
}