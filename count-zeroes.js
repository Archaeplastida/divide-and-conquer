function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor(right / 2);
    let lastOccurence = -1;

    while (left <= right) {
        if (arr[middle] === 1) {
            lastOccurence = middle;
            left = middle + 1;
            middle = Math.floor((left + right) / 2);
        }
        if (arr[middle] < 1) {
            right = middle - 1;
            middle = Math.floor((left + right) / 2);
        }
    }
    return arr.length - (lastOccurence + 1);
}

module.exports = countZeroes;