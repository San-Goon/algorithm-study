let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

arr = input[1].split(" ");

let prime = 0;

for (let n of arr) {
  if (isPrime(n)) prime++;
}

console.log(prime);

function isPrime(s) {
  n = +s;
  if (n === 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}