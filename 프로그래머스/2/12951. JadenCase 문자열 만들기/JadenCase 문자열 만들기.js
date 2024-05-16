function solution(s) {
    const str = s.split("");
    str[0] = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
        if (str[i - 1] === ' ' && str[i] !== ' ') {
            str[i] = str[i].toUpperCase();
        }
    }
    return str.join("");
}