function solution(rsp) {
    var answer = '';
    for (const v of rsp) {
        if (v === '0') answer += '5';
        if (v === '2') answer += '0';
        if (v === '5') answer += '2';
    }
    return answer;
}