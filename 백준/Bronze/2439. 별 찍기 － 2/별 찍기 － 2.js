let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));

let blank = ''
let star = ''

for (let i = 1; i <= input; i++) {
    blank += ' '
}

for (let i = 1; i <= input; i++) {
    blank = blank.slice(0, -1);
    star += '*'
    console.log(blank + star)
}

