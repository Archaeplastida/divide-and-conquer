function findFloor(arr, x) {
    let left = 0; let right = arr.length - 1; let middle = Math.floor(right / 2); let savedValue; //The three pointers and the extra variable to save a value to compare after the loop becomes false.

    while (left <= right) {
        if (left === right) {
            savedValue = arr[middle];
        }
        middle = Math.floor((left + right) / 2);
        if (arr[middle] > x) {
            right = middle - 1;
        } else if (arr[middle] < x) {
            left = middle + 1;
        } else if (arr[middle] === x) {
            return x;
        }
    }
    if (arr[middle] <= x) {
        return arr[middle];
    } else if (savedValue <= x) {
        return savedValue;
    }
    return -1;
}

module.exports = findFloor;