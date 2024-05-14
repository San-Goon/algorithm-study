function solution(operations) {
    const queue = [];
    for (const operation of operations) {
        const array = operation.split(" ");
        if (array[0] === 'I') {
            queue.push(+array[1]);
            continue;
        }
        if (queue.length > 0) {
         if (array[1] === '1') {
             let max = Number.MIN_SAFE_INTEGER;
             let index = 0;
             for (let i = 0; i < queue.length; i++) {
                 if (queue[i] > max) {
                     max = queue[i];
                     index = i;
                 }
             }
             queue.splice(index, 1);
             continue;
         }
            let min = Number.MAX_SAFE_INTEGER;
            let index = 0;
            for (let i = 0; i < queue.length; i++) {
                 if (queue[i] < min) {
                     min = queue[i];
                     index = i;
                 }
             }
             queue.splice(index, 1);
        }
    }
    queue.sort((a, b) => b - a);
    if (queue.length) {
        return [queue[0], queue.at(-1)]    
    }
    return [0,0]
}