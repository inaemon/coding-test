
// 입력
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 첫째 줄에서 입력한 값 (정수 1개)
let idx = 0;
const N = parseInt(input[idx++]); // 버튼 클릭 횟수

function solution() {
  const answer = Array({ length: N + 1 }).fill(0);

  for (let i = 1; i < N + 1; i++) {
    // 기본값
    //answer[i] = i + 1;
    answer[i] = answer[i - 1] + 1;

    // 선택+복+붙 -> 버튼 3번 클릭횟수 날려야 함
    if (i > 5) {
      for (let j = 3; j < 6; j++) {
        const now = answer[i];
        const acv = answer[i - j] * (j - 1); // j-1배

        answer[i] = Math.max(now, acv);
      }
    }
  }

  console.log(answer[N]);
}

solution();