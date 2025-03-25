

// 입력
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 첫째 줄에서 입력한 값 (정수 1개)
let idx = 0;
const N = parseInt(input[idx++]); // 돌 개수

function solution() {
  const answer = Array({ length: N }).fill(0);

  // 기본값
  answer[0] = 1; // 1(SK) 먼저
  answer[1] = 0;
  answer[2] = 1; // SK가 3개 or 1개

  for (let i = 3; i < N; i++) {
    if (answer[i - 1] === 1 || answer[i - 3] === 1) answer[i] = 0;
    else answer[i] = 1;
  }

  console.log(answer[N - 1] === 1 ? "SK" : "CY");
}

solution();