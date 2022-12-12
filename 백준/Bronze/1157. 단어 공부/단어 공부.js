let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

let obj = {};
for (let w of input) {
    obj[w] = obj[w] ? obj[w] + 1 : 1;
}

let arr = Object.entries(obj);
arr.sort((a, b) => b[1] - a[1]);

if (arr.length >= 2 && arr[0][1] === arr[1][1]) console.log('?')
else console.log(arr[0][0])


