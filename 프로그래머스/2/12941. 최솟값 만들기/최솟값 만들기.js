function solution(A,B){
    const copiedA = [...A];
    const copiedB = [...B];
    copiedA.sort((a, b) => a - b);
    copiedB.sort((a, b) => b - a);
    let answer = 0;
    for (let i = 0; i < copiedA.length; i++) {
        answer += copiedA[i] * copiedB[i];
    }
    return answer;
}