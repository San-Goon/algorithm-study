const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, pair, ...arr] = require('fs').readFileSync(filePath).toString().trim().split("\n");

const graph = [...Array( +n + 1)].map(() => []);
const visited = Array(+n + 1).fill(false);

const nodes = arr.map((v) => v.trim().split(" "));

for (const node of nodes) {
    const [v1, v2] = node;
    graph[v1].push(v2);
    graph[v2].push(v1);
}

let answer = 0;

dfs(1);
function dfs(n) {
    if (visited[n]) return;
    visited[n] = true;
    answer++;
    for (const vertex of graph[n]) {
        if (!visited[vertex]) dfs(vertex)
    }
}

console.log(answer - 1);