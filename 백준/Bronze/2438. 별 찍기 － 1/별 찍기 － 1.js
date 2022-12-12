let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));

let str = ''
for (let i = 1; i <= input; i++) {
    str += '*'
    console.log(str)
}


