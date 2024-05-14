function solution(s) {
    const numbers = s.split(" ");
    numbers.sort((a, b) => a - b);
    return numbers[0] + " " + numbers.at(-1)
}