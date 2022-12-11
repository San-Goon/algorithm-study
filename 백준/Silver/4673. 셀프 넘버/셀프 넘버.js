let num = 1;
let arr = Array(10000).fill(true);


while (num <= 10000) {
    let temp = num;
    let temp2 = num;
    while (temp) {
        temp2 = temp2 + temp % 10;
        temp = Math.floor(temp / 10);
    }
  if (temp2 <= 10000) {
   arr[temp2 - 1] = false 
  }
  num++
}

let arr2 = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === true) {
    arr2.push(i + 1)
  }
}

console.log(arr2.join("\n"))