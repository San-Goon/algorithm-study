function solution(phone_book) {
    const hashTable = {};
    for (const number of phone_book) {
        hashTable[number] = true;
    }
    
    for (const number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            const prefix = number.substring(0, i);
            if (hashTable[prefix]) return false;
        }
    }
    return true;
}