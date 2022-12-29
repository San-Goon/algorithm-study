let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

let answer = 32;

for (let i = 0; i + 7 < input.length; i++) {
    for (let j = 0; j + 7 < input[0].length; j++) {
        let tmp = 0;
        let arr = [...input];
        arr = arr.map((v) => v.trim().split(""));
        for (let k = 0; k < 8; k++) {
            for (let l = 0; l < 8; l++) {
                if (arr[i][j] === 'B') {
                    if (k % 2 === 0) {
                        if (l % 2 === 1 && arr[i][j] === arr[i+k][j+l]) {
                            arr[i+k][j+l] = 'W';
                            tmp++;
                        } else if (l % 2 === 0 && arr[i][j] !== arr[i+k][j+l]) {
                            arr[i+k][j+l] = 'B';
                            tmp++;
                        }
                    } else {
                        if (l % 2 === 1 && arr[i][j] !== arr[i+k][j+l]) {
                            arr[i+k][j+l] = 'W';
                            tmp++;
                        } else if (l % 2 === 0 && arr[i][j] === arr[i+k][j+l]) {
                            arr[i+k][j+l] = 'B';
                            tmp++;
                        }
                    }
                } else {
                    if (k % 2 === 0) {
                        if (l % 2 === 1 && arr[i][j] === arr[i+k][j+l]) {
                            arr[i+k][j+l] = 'B';
                            tmp++;
                        } else if (l % 2 === 0 && arr[i][j] !== arr[i+k][j+l]) {
                            arr[i+k][j+l] = 'W';
                            tmp++;
                        }
                    } else {
                        if (l % 2 === 1 && arr[i][j] !== arr[i+k][j+l]) {
                            arr[i+k][j+l] = 'B';
                            tmp++;
                        } else if (l % 2 === 0 && arr[i][j] === arr[i+k][j+l]) {
                            arr[i+k][j+l] = 'W';
                            tmp++;
                        }
                    }
                }
            }
        }
        if (tmp > 32) tmp = 64 - tmp;
        answer = Math.min(answer, tmp);
    }
}

console.log(answer)