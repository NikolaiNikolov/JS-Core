function sortArray(arr, method) {
    let sortingMethods = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    return arr.sort(sortingMethods[method]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));