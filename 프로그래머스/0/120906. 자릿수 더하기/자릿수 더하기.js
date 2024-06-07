function solution(n) {
    var answer = 0;
    for (const str of n.toString()) {
        answer += +str
    }
    return answer;
}