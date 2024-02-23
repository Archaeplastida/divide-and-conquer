function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        if(arr[left] <= arr[right]){
            return left;
        }
        let middle = Math.floor((left + right) / 2);
        let next = (middle + 1) % arr.length;
        let previous = (middle + arr.length - 1) % arr.length;

        if(arr[middle] <= arr[next] && arr[middle] <= arr[previous]){
            return middle;
        }

        if(arr[middle] <= arr[right]){
            right = middle - 1;
        } else if(arr[middle] >= arr[left]){
            left = middle + 1;
        }
    }
    return -1;
}

module.exports = findRotationCount;