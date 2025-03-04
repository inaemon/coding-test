const stdin = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = stdin.split('\n').map(v => v.split(' ').map(Number));
const [N, A, operators] = input;

let max = -Infinity;
let min = Infinity;

const calculate = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => ~~(a / b)
];

const backtrack = (idx = 0, sum = A[0]) => {
  // base case (재귀 종료)
  if (idx === N - 1) {
    max = Math.max(max, sum);
    min = Math.min(min, sum);
    return;
  }
  
  for (let i = 0; i < 4 ; i++) {
    if (!operators[i]) {
      continue;
    }
    operators[i]--;    // 연산자 사용
    backtrack(idx + 1, calculate[i](sum, A[idx + 1]));    // 재귀
    operators[i]++;    // 연산자 복구 (백트래킹)
  }
};

backtrack();
console.log(max);
console.log(min);