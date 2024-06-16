function solution(a, b) {
    let first = +(a.toString() + b.toString());
    let second = +(b.toString() + a.toString());
    return Math.max(first, second);
}