function solution(hp) {
    var answer = 0;
    let health = hp;
    answer += parseInt(health / 5);
    health = health % 5;
    answer += parseInt(health / 3);
    health = health % 3;
    answer += health;
    return answer;
}