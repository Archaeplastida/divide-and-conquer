function sortedFrequency(arr, targ) {
    let firstLeft = 0; let firstRight = arr.length - 1; let firstMiddle = Math.floor(firstRight / 2); //The three pointers for finding the first occurring instance of targ.
    let lastLeft = 0; let lastRight = arr.length - 1; let lastMiddle = Math.floor(lastRight / 2); //The three pointers for finding the last occuring instance of targ.

    while (firstLeft <= firstRight || lastLeft <= lastRight) {
        firstMiddle = Math.floor((firstLeft + firstRight) / 2); lastMiddle = Math.floor((lastLeft + lastRight) / 2); //Reinitialization of middle pointers after each increment.

        if (arr[firstMiddle] < targ) {
            firstLeft = firstMiddle + 1;
        } else if (arr[firstMiddle] > targ) {
            firstRight = firstMiddle - 1;
            firstMiddle = Math.floor((firstLeft + firstRight) / 2);
        } else if (arr[firstMiddle] === targ) {
            firstRight = firstMiddle - 1;
            firstMiddle = Math.floor((firstLeft + firstRight) / 2);
        }
        if (arr[lastMiddle] < targ) {
            lastLeft = lastMiddle + 1;
        } else if (arr[lastMiddle] > targ) {
            lastRight = lastMiddle - 1;
            lastMiddle = Math.floor((lastLeft + lastRight) / 2);
        } else if (arr[lastMiddle] === targ) {
            lastLeft = lastMiddle + 1
            lastMiddle = Math.floor((lastLeft + lastRight) / 2);
        }
    }
    return (lastMiddle - firstMiddle ? lastMiddle - firstMiddle : -1) // Positive integer, showing the amount, only if value exists. Or else, it's -1.
}

module.exports = sortedFrequency;