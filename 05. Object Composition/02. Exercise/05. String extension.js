(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.substr(0, str.length) !== str) {
            return str + this;
        }
        return this.toString();
    };
    String.prototype.ensureEnd = function (str) {
        if (this.substr(-str.length) !== str) {
            return this + str;
        }
        return this.toString();
    };
    String.prototype.isEmpty = function () {
        return this.length < 1;
    };
    String.prototype.truncate = function (n) {
        if (this.toString().length > n) {

            let str=this.substring(0,n-1);
            let spaceIndex=str.lastIndexOf(' ');
            str = str.substring(0,spaceIndex) + '...';
            return str
        }

        if(n<4) return '.'.repeat(n);
        return this.toString();
    };
    String.format = function (str, ...params) {
        let pattern = /{\d+}/;

        for (let i = 0; i < params.length; i++) {
            str = str.replace(pattern, params[i]);
        }
        return str;
    };
}());

let string = 'hello my string';
console.log(string.truncate(14))