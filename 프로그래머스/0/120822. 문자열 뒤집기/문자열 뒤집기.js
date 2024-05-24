function solution(my_string) {
    const arr = my_string.split("")
    var answer = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        answer += arr[i];
    }
    return answer;
}