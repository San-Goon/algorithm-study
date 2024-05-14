function solution(s){
    const array = s.split("");
    const stack = [];
    for (const str of array) {
        stack.push(str);
        if (stack.length >= 2) {
            if (stack.at(-1) === ')' && stack.at(-2) === '(') {
                stack.pop();
                stack.pop();
            }
        }
    }
    if (stack.length) return false;
    return true;
}