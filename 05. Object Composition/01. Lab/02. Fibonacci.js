function solve() {
    let f1 = 0, f2 = 1;

    return function () {
        let f3 = f1 + f2;
        [f1, f2] = [f2, f3];
        return f1;
    };
}