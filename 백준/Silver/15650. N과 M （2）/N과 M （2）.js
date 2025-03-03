
let sequence = [];
function solution(N, M, start) {
  // 길이가 M인 수열 완성
  if (sequence.length === M) {
    // 수열(배열)을 문자열로 바꿔서 출력
    console.log(sequence.join(" "));
    return;
  }

  // 수열 원소 찾기
  for (let i = start; i <= N; i++) {
    sequence.push(i);   // 수열에 넣기
    solution(N, M, i+1);  // 재귀
    sequence.pop();     // 수열에서 제거
  }
}

// 입력
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
// 첫째 줄에서 입력한 값 (정수 2개)
const [N, M] = input[idx++].split(" ").map(Number);

// 출력
solution(N, M, 1);
