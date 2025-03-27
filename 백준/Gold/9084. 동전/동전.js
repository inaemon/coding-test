
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let idx = 0;
const T = parseInt(input[idx++]);

const solution = ( input ) => {
  for(let i = 0; i < T; i++) {
    const N = parseInt(input[idx++]);
    const coin = input[idx++].split(' ').map(Number);
    const M = parseInt(input[idx++]); // 만들어야 할 금액
 
    const dp = Array(M + 1).fill(0);
    dp[0] = 1;
 
    for(let i = 0; i < N; i++) {
      for(let j = coin[i]; j <= M; j++) {
        dp[j] += dp[j - coin[i]];
      }
    }
 
    console.log(dp[M]);
  }
}

solution(input);