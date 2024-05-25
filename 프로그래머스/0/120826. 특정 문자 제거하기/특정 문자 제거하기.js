function solution(my_string, letter) {
    var answer = '';
    for (const str of my_string) {
        if (str === letter) continue;
        answer += str
    }
    return answer;
}