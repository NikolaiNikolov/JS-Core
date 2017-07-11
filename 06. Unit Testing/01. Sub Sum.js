function subsum(arr, startIndex, endIndex) {
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > arr.length) {
        endIndex = arr.length;
    }
    endIndex++;
    if (arr.length < 1) {
        return 0;
    }
    if (arr.constructor !== Array) {
        return NaN;
    }
    return arr.slice(startIndex, endIndex).reduce((a,b)=> Number(a) + Number(b));
}

console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));