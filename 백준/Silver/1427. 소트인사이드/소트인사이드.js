let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');


function sort(number){
  let answer = ''
  answer = Number(number.toString().split("").sort((a,b)=>(b-a)).join(""))
  
  return answer
}

console.log(sort(input))