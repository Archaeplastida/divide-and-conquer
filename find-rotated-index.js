function findRotatedIndex(arr, targ) {
    //We need to separate the list into two processes
    let leftLeftPointer = 0; let leftRightPointer = arr[Math.floor((arr.length - 1) / 2)] > arr[Math.floor((arr.length - 1) / 2) - 1] ? Math.floor((arr.length - 1) / 2) : Math.floor((arr.length - 1) / 2) - 1; let leftMiddlePointer = Math.floor((leftRightPointer) / 2);
    let rightLeftPointer = leftRightPointer + 1; let rightRightPointer = arr.length - 1; let rightMiddlePointer = Math.floor((rightLeftPointer + rightRightPointer) / 2);

    while (leftLeftPointer <= leftRightPointer) {
        leftMiddlePointer = Math.floor((leftLeftPointer + leftRightPointer) / 2);
        if (arr[leftMiddlePointer] > targ) {
            leftRightPointer = leftMiddlePointer - 1;
        } else if (arr[leftMiddlePointer] < targ) {
            leftLeftPointer = leftMiddlePointer + 1;
        } else return leftMiddlePointer;

    }
    while (rightLeftPointer <= rightRightPointer) {
        rightMiddlePointer = Math.floor((rightLeftPointer + rightRightPointer) / 2);
        if (arr[rightMiddlePointer] > targ) {
            rightRightPointer = rightMiddlePointer - 1;
        } else if (arr[rightMiddlePointer] < targ) {
            rightLeftPointer = rightMiddlePointer + 1;
        } else return rightMiddlePointer;
    }
    return -1;
}

module.exports = findRotatedIndex;