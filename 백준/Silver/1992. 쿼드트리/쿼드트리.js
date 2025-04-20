function quadtree(x, y, N, matrix) {
  let sum = 0;
  for (let i = x; i < x + N; i++) {
    for (let j = y; j < y + N; j++) {
      sum += matrix[i][j];
    }
  }
  if (sum === N * N) return "1";
  if (sum === 0) return "0";

  // 4분할
  const half = N / 2;
  let result = "(";

  // 왼쪽 위
  result += quadtree(x, y, half, matrix);
  // 오른쪽 위
  result += quadtree(x, y + half, half, matrix);
  // 왼쪽 아래
  result += quadtree(x + half, y, half, matrix);
  // 오른쪽 아래
  result += quadtree(x + half, y + half, half, matrix);

  result += ")";
  return result;
}

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
  const rows = input[idx++].split("").map(Number); // "" 문자 하나씩 나누기
  matrix.push(rows);
}

// 출력
console.log(quadtree(0, 0, N, matrix));