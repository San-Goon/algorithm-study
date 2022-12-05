function solution(s) {
    var answer = 0;
    let obj = {
        x: 0,
        else: 0,
    }
    let x = '';
    let temp = s.split("");
    while (temp.length) {
        let tmp = temp.shift();
        if (!x) {
            x = tmp;
        }
        if (tmp === x) {
            obj['x']++;
        } else {
            obj['else']++
        }
        if (obj['x'] === obj['else']) {
            obj['x'] = 0;
            obj['else'] = 0;
            x = '';
            answer++;
        }
    }
    console.log(x)
    if (x) answer++;
    return answer;
}