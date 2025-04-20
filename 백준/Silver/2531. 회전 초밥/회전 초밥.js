const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let [n, d, k, c] = input[0].split(' ').map(Number);
  let plate = input.slice(1, n + 1).map(Number);
  let maxSushi = 0;

  for (let i = 0; i < n; i++) {
    let tmp = new Set();
    tmp.add(c); // 쿠폰 초밥

    for (let j = 0; j < k; j++) {
      // 회전 벨트이므로 인덱스를 순환시킴
      tmp.add(plate[(i + j) % n]);
    }

    maxSushi = Math.max(maxSushi, tmp.size);
  }

  console.log(maxSushi);
});
