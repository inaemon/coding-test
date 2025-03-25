// 입력
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 첫째 줄에서 입력한 값 (정수 1개)
let idx = 0;
const N = parseInt(input[idx++]); // 버튼 클릭 횟수

// N줄 계단 점수 입력
const array = Array({ length: N }).fill(0);
for (let i = 0; i < N; i++) {
  array[i] = parseInt(input[idx++]);
}

function solution() {
  const answer = Array({ length: N }).fill(0);

  // 기본값
  answer[0] = array[0];
  answer[1] = array[0] + array[1];
  answer[2] = Math.max(array[0] + array[2], array[1] + array[2]);

  for (let i = 3; i < N; i++) {
    const a = answer[i - 3] + array[i - 1] + array[i]; // 3칸 전 + 계단 2연속
    const b = answer[i - 2] + array[i]; // 2칸 전 + 계단 1칸

    answer[i] = Math.max(a, b);
  }

  console.log(answer[N-1]);
}

solution();