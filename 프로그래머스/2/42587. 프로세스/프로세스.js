function solution(priorities, location) {
    const arr = [];
    const arr2 = [...priorities];
    let cnt = 1;
    for (let i = 0; i < arr2.length; i++) {
        if (i === location) arr.push(true);
        else arr.push(false)
    }
    let prime = 0;
    const primeFinder = () => {
        prime = 0;
        for (const num of arr2) {
            prime = Math.max(num, prime);
        } 
    }
    primeFinder();
    while(true) {
        if (arr2[0] === prime) {
            if (arr[0] === true) return cnt;
            arr.splice(0,1);
            arr2.splice(0,1);
            cnt++;
            primeFinder();
        }
        else {
            arr.push(arr.splice(0,1)[0]);
            arr2.push(arr2.splice(0,1)[0]);
        }
    }
}