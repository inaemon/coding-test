// 초기 최대/최소
let max = -Infinity;
let min = Infinity;

// 입력
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let idx = 0;
// 첫째 줄에서 입력한 값 (정수 1개)
const N = parseInt(input[idx++]);
// 둘째 줄에서 입력한 값 (정수 N개: 수열 원소)
const sequence = input[idx++].split(" ").map(Number);
// 셋째 줄에서 입력한 값 (정수 4개: 연산자별 개수)
let [add, sub, mul, div] = input[idx++].split(" ").map(Number);
// 연산자 업뎃
let op = [add, sub, mul, div];



function backtrack(N, sequence, start = 0, before = sequence[0]) {
  // base case(재귀 종료 조건): 길이가 N(final index가 N-1)인 수열 완성
  if (start === N - 1) {
    // 수열의 합 반환 또는 최대/최소 업데이트
    max = Math.max(max, before);
    min = Math.min(min, before);
    return;
  }
  // 현재 노드 인덱스
  const idx = start + 1;
  // 현재 노드
  const current = sequence[idx];

  // 다음 노드 연산
  for (let i = 0; i < op.length; i++) {
    // 연산자 개수가 1개 이상이면
    if (op[i] > 0) {
      // 연산자 사용
      op[i] -= 1;

      // 연산: + - / *
      let sum = 0;
      switch (i) {
        case 0:
          sum = before + current;
          break;
        case 1:
          sum = before - current;
          break;
        case 2:
          sum = before * current;
          break;
        case 3:
          //sum = Math.floor(before / current); // 양수든 음수든 내림
          sum = ~~(before / current); // 양수면 내림, 음수면 올림
          break;
      }

      // 재귀 (자식 노드 연산)
      backtrack(N, sequence, idx, sum);

      // 연산자 복구 (백트래킹)
      op[i] += 1;
    }
  }
}

// 최대, 최소 구하기
backtrack(N, sequence);

// 출력
console.log(max);
console.log(min);
