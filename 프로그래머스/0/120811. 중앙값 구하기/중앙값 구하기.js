function solution(array) {
    const arr = [...array];
    arr.sort((a, b) => a - b);
    return arr[(arr.length - 1) / 2]
}