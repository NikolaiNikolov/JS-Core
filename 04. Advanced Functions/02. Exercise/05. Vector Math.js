let solution = (function solve() {
    return {
        add,
        multiply,
        length,
        dot,
        cross
    };

    function add(arr1, arr2) {
        return [arr1[0] + arr2[0], arr1[1] + arr2[1]];
    }
    function multiply(arr, num) {
        return arr.map(n => n * Number(num));
    }
    function length(arr) {
        return Math.sqrt(arr[0] * arr[0] + arr[1] * arr[1]);
    }
    function dot(arr1, arr2) {
        return arr1[0] * arr2[0] + arr1[1] * arr2[1];
    }
    function cross(arr1, arr2) {
        return arr1[0] * arr2[1] - arr1[1] * arr2[0];
    }
})();

let result = solution.add([5.43, -1], [1, 31]);
console.log(result);