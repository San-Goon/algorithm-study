function solution(array, n) {
    let answer = 0;
    for (const item of array) {
        if (n === item) answer++
    }
    return answer;
}