function solution(s1, s2) {
    let answer = 0;
    for (const first of s1) {
        for (const second of s2) {
            if (first === second) answer++
        }
    }
    return answer;
}