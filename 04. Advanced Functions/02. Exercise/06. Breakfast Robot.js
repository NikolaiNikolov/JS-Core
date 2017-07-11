let manager = (function () {

    let robot = {
        storage: {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        },
        commands: {
            restock: restockSupplies,
            report: reportInfo,
            prepare: prepareFood
        },
        recipes: {
            apple: {carbohydrate: 1, flavour: 2},
            coke: {carbohydrate: 10, flavour: 20},
            burger: {carbohydrate: 5, fat: 7, flavour: 3},
            omelet: {protein: 5, fat: 1, flavour: 1},
            cheverme: {protein: 10, carbohydrate:10, fat: 10, flavour: 10},
        }
    };

    return function (arguments) {
        let args = arguments.split(' ');
        let cmd = args.shift();
        return robot.commands[cmd](...args);
    };

    function restockSupplies(microElement, quantity) {
        robot.storage[microElement] += Number(quantity);
        return 'Success';
    }
    function prepareFood(recipe, quantity) {
        let ingredients = robot.recipes[recipe];
        for (let ingredientName of Object.keys(ingredients)) {
            if (robot.storage[ingredientName] < (ingredients[ingredientName] * Number(quantity))) {
                return `Error: not enough ${ingredientName} in stock `;
            }
        }
        for (let ingredientName of Object.keys(ingredients)) {
            robot.storage[ingredientName] -= (ingredients[ingredientName] * Number(quantity));
        }
        return 'Success';
    }
    function reportInfo() {
        let result = Object.keys(robot.storage).map(k => `${k}=${robot.storage[k]}`);
        return result.join(' ');
    }
})();

manager('restock carbohydrate 10');
manager('restock flavour 10');
manager('prepare apple 1');
manager('restock fat 10');
manager('prepare burger 1');
console.log(manager('report'));