function result(args) {
    let count = {};

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        let type = typeof arg;
        count[type] ? count[type]++ : count[type] = 1;
        console.log(`${type}: ${arg}`);
    }

    let sorted = [];

    for (let currentType in count) {
        sorted.push([currentType, count[currentType]]);
    }
    sorted = sorted.sort((a,b) => b[1] - a[1]);

    for ([type, count] of sorted) {
        console.log(`${type} = ${count}`);
    }
}