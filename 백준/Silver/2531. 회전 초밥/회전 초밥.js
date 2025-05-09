function solution(N, D, K, C, arr) {
  let answer = 0;
  let plate = new Array(D + 1).fill(0); // 초밥 번호
  let kind = 0; // 초밥 종류

  for (let i = 0; i < K; i++) {
    // 스시 선택
    const sushi = arr[i % N];

    // 접시 비었으면
    if (plate[sushi] === 0) kind++;
    plate[sushi]++; // 접시 초기화: 접시에 초밥 담기
  }

  // C번 초밥 가능하면 +1
  answer = plate[C] === 0 ? kind + 1 : kind;

  // 슬라이딩 윈도우로 시간복잡도 낮추기
  for (let i = 1; i < N; i++) {
    const remove = arr[(i - 1) % N];
    plate[remove]--;
    if (plate[remove] === 0) kind--;

    const add = arr[(i + K - 1) % N];
    if (plate[add] === 0) kind++;
    plate[add]++;

    const total = plate[C] === 0 ? kind + 1 : kind;
    answer = Math.max(answer, total);
  }

  return answer;
}

// 입력
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let idx = 0;
// 첫째 줄에서 입력한 값 (정수 4개)
const [N, D, K, C] = input[idx++].split(" ").map(Number);
// 둘째~줄에서 입력한 값 (배열 원소)
const arr = [];
for (let i = 0; i < N; i++) {
  const sushi = parseInt(input[idx++]); // 초밥 번호
  arr.push(sushi);
}

// 출력
console.log(solution(N, D, K, C, arr));
