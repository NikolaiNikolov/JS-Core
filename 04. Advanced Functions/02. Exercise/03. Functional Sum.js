let solve = (function () {
    let result = 0;

    return function add(number) {
        result += number;
        add.toString = function () {
            return result;
        };
        return add;
    }

})();

console.log(solve(1).toString());