let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

for (let num of input) {
    num = num.trim();
    if (num.length === 1) {
        console.log('yes');
        continue;
    }
    let flag = true;
    let stack = [];
    for (let i = 0; i < Math.floor(num.length / 2); i++) {
        stack.push(num[i])
    };
    for (let i = Math.ceil(num.length / 2); i < num.length; i++) {
        let n = stack.pop();
        if (n !== num[i]) {
            console.log('no');
            flag = false;
            break;
        }
    }
    if (flag) console.log('yes')
}