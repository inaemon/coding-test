function solution(friends, gifts) {
    //1. 이번달에 A>B이면 다음달에 A는 B에게 하나 받음 (A->B:1)
    //2. A=B이면 다음달 선물지수큰사람이 하나 받음 (선물지수같으면 다음달에 서로 X)
    // 선물 지수는 이번달 준 선물 - 받은 선물
    // 다음달 가장 선물 많이 받은 사람의 선물 수 구하기
    
    // 고유 문자열 추출 위한 '인덱스용' Map
    const uniqueValues = new Map();
    
    // 고유값 인덱스 (행 인덱스, 열 인덱스 동일한 인덱스 사용할 예정)
    let index = 0;
    
    /* // 반례: friends에는 있는 name이지만 선물을 주지도 받지도 않은 친구는 gifts 배열에 name이 없음
    gifts.forEach(str => {
        [first, second] = str.split(" ");
        
        if(!uniqueValues.has(first)) {
            uniqueValues.set(first, index++);
        }
        
        if(!uniqueValues.has(second)) {
            uniqueValues.set(second, index++);
        }
    });
    */
    
    friends.forEach(str => {
        if(!uniqueValues.has(str)) {
            uniqueValues.set(str, index++);
        }
    })
    
    // 선물지수표 (선물 주고받기 관계 행렬)
    const N = uniqueValues.size;
    const matrix = Array.from({length: N}, () => Array(N).fill(0));
    
    // 주어진 문자열 배열을 순회하여 조건에 맞는 행렬 값에 +1
    gifts.forEach(str => {
        [a, b] = str.split(" ");
        
        const rowIndex = uniqueValues.get(a);
        const colIndex = uniqueValues.get(b);
        
        matrix[rowIndex][colIndex] += 1;
    });
    
    //console.log(matrix);
    
    // 선물지수
    const giftLove = Array(N).fill(0);
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            giftLove[i] += matrix[i][j];  // i행: i가 준 선물
            giftLove[i] -= matrix[j][i];  // i열: i가 받은 선물
        }
    }
    
    // 다음달 받을 선물
    const nextArr = Array(N).fill(0);
    for(let i=0; i<N; i++) {
        
        for(let j=0; j<N; j++) {
            if(i === j)
                continue;
            
            
            // i가 j에게 준 선물이 더 크면
            if(matrix[i][j] > matrix[j][i]) {
                nextArr[i] += 1;
                
            // i가 j에게 받은 선물이 더 크면
            }else if(matrix[i][j] < matrix[j][i]) {
                
            // 같으면 선물지수 비교
            }else {
                if(giftLove[i] > giftLove[j]) {
                    nextArr[i] += 1;
                }else if(giftLove[i] < giftLove[j]) {
                    
                }
            }
                
            // 문제점: 2번씩 계산됨
            /*
            // i가 j에게 준 선물이 더 크면
            if(matrix[i][j] > matrix[j][i]) {
                nextArr[i] += 1;
            // i가 j에게 받은 선물이 더 크면
            }else if(matrix[i][j] < matrix[j][i]) {
                nextArr[j] += 1;
            // 같으면 선물지수 비교
            }else {
                if(giftLove[i] > giftLove[j]) {
                    nextArr[i] += 1;
                }else if(giftLove[i] < giftLove[j]) {
                    nextArr[j] += 1;
                }
            }
            */
        }
    }
    
    // 계산
    let answer = 0;
    for(let i=0; i<N; i++) {
        if(nextArr[i] > answer) {
            answer = nextArr[i];
        }
    }
    
    console.log(matrix);
    console.log(giftLove);
    console.log(nextArr);
    
    
    
    return answer;
}