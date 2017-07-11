function solve(requirements) {
    let engines = {
        small: {power: 90, volume: 1800},
        normal: {power: 120, volume: 2400},
        monster: {power: 200, volume: 3500}
    };

    return {
        model: requirements.model,
        engine: makeEngine(requirements.power),
        carriage: makeCarriage(requirements.carriage, requirements.color),
        wheels: makeWheels(requirements.wheelsize)
    };

    function makeEngine(requiredPower) {
        for (engine in engines) {
            if (engines[engine].power >= requiredPower) {
                return engines[engine];
            }
        }
    }
    function makeCarriage(type, color) {
        return {type, color};
    }
    function makeWheels(size) {
        size = Math.floor(size) % 2 !== 0 ? Math.floor(size) : Math.floor(size) - 1;
        return new Array(4).fill(size);
    }
}

console.log(solve({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));