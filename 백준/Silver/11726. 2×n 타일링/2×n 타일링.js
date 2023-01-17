const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +require('fs').readFileSync(filePath).toString();

let arr = [BigInt(1), BigInt(2)];

for (let i = 2; i < input; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
}

if (input === 1) console.log(1);
else console.log((arr.pop() % BigInt(10007)).toString());