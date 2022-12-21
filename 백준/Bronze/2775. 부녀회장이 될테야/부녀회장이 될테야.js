let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();

let zero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

while (input.length) {
  let floor = Number(input.shift());
  let num = Number(input.shift()) - 1;
    let arr = [[...zero]];
    for (let i = 0; i < floor; i++) {
        let temp = [];
        for (let j = 0; j < 14; j++) {
            let tmp = 0;
            for (let k = 0; k <=j; k++) {
                tmp += arr[i][k];
            }
            temp.push(tmp);
        }
        arr.push(temp)
    }
    console.log(arr[floor][num])
}