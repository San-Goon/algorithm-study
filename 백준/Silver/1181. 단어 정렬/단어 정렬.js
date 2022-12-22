let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split("\n");

input.shift();

input.sort((a, b) => {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i].charCodeAt() !== b[i].charCodeAt()) {
        return a[i].charCodeAt() - b[i].charCodeAt();
      }
    }
  }
  return a.length - b.length;
});

let obj = {};
for (let w of input) {
  obj[w] = true;
}

console.log(Object.keys(obj).join("\n"));