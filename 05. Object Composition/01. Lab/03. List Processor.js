function solve(arr) {
    let processor  = (function processor() {
        let list = [];

        return {
            add: (str) => list.push(str),
            remove: (str) => list = list.filter(w => w != str),
            print: () => console.log(list)
        };
    })();

    for (let i = 0; i < arr.length; i++) {
        let [cmd, arg] = arr[i].split(' ');
        processor[cmd](arg);
    }
}

solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);