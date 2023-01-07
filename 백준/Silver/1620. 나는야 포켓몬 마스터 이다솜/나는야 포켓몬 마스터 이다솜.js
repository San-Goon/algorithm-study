const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(num => parseInt(num));

// 2.
const orders = input.slice(0, N);
const questions = input.slice(N, N+M);

// 3.
const mon_first = orders.map((elem, idx) => [elem, (idx+1).toString()]);
const num_first = orders.map((elem, idx) => [(idx+1).toString(), elem]);
const map = new Map(mon_first.concat(num_first));

// 4.
questions.forEach(elem => { console.log(map.get(elem) )});