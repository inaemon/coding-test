
// 입력
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let idx = 0;
// 첫째 줄에서 입력한 값 (정수 1개)
const N = parseInt(input[idx++]);
// 둘째~줄에서 입력한 값 (행렬 원소)
const matrix = [];
for (let i = 0; i < N; i++) {
  const rows = input[idx++].split(" ").map(Number);
  matrix.push(rows);
}
 
for (let i = 1; i <= N; i++) {
  const temp = input[i].split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    matrix[i - 1][j] = temp[j];
  }
}

const visited = Array.from({ length: N }, () => Array(N).fill(false));
const coordi = [
  [0, 0],
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let answer = Infinity;

function check(x, y) {
  for (let k = 0; k < 5; k++) {
    const nx = x + coordi[k][0];
    const ny = y + coordi[k][1];
 
    if (visited[nx][ny]) return false;
  }
 
  return true;
}
 
function dfs(cnt, sum) {
  if (cnt === 3) {
    answer = Math.min(answer, sum);
    return;
  }
 
  for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < N - 1; j++) {
      if (!check(i, j)) continue;
 
      let price = 0;
 
      for (let k = 0; k < 5; k++) {
        const nx = i + coordi[k][0];
        const ny = j + coordi[k][1];
 
        price += matrix[nx][ny];
        visited[nx][ny] = true;
      }
 
      dfs(cnt + 1, sum + price);
 
      for (let k = 0; k < 5; k++) {
        const nx = i + coordi[k][0];
        const ny = j + coordi[k][1];
 
        visited[nx][ny] = false;
      }
    }
  }
}
 
dfs(0, 0);
console.log(answer);