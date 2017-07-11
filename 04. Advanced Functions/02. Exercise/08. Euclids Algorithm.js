function solve() {
    let gcd = (function(a, b) {
        if ( ! b) {
            return a;
        }
        return gcd(b, a % b);
    }());
}

console.log(solve(1,2));