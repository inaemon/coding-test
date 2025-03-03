function isCollected(str) {
    const queue = [];
    
    for(i=0; i<str.length; i++) {
        if(str[i] === '(')
            queue.push('(');
        else if(str[i] === ')') {
            if(queue.length < 1) {
                return false;
            }else 
                queue.pop();
        }
    }
    
    if(queue.length === 0)
        return true;
    
    return false;
}


function solution(p) {
    let answer = p;
    
    let l = '';
    let r = '';
    
    if(p.length === 0)
        return p;
    
    if(isCollected(p))
        return p;
    
    let [b1, b2] = [0, 0];
    
    for(let i=0; i<p.length; i++) {
        if(p[i] === '(') b1 += 1;
        else b2 += 1;
        
        if(b1 === b2) {
            l = p.slice(0, i+1);
            r = p.slice(i+1);
            break;
        }
    }
    
    if(isCollected(l))
        answer = l + solution(r);
    else {
        answer = '(' + solution(r) + ')';
        l = l.slice(1, l.length-1);
        for(j=0; j<l.length; j++) {
            if(l[j] === '(')
                answer += ')';
            else 
                answer += '(';
        }
    }
    
    return answer;
}