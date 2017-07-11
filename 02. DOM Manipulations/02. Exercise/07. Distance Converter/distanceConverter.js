function attachEventsListeners() {
    let btn = document.getElementById('convert');
    btn.addEventListener('click', convert);

    function convert() {
        let firstUnit = document.querySelector('#inputUnits option:checked').value;
        let secondUnit = document.querySelector('#outputUnits option:checked').value;
        let inputNum = Number(document.getElementById('inputDistance').value);
        let inputToM = convertToM(firstUnit, inputNum);
        document.getElementById('outputDistance').value = convertToChosenUnit(secondUnit, inputToM);
    }

    function convertToM(unit, value) {
        switch (unit) {
            case 'km':
                value *= 1000;
                break;
            case 'm':
                break;
            case 'cm':
                value *= 0.01;
                break;
            case 'mm':
                value *= 0.001;
                break;
            case 'mi':
                value *= 1609.34;
                break;
            case 'yrd':
                value *= 0.9144;
                break;
            case 'ft':
                value *= 0.3048;
                break;
            case 'in':
                value *= 0.0254;
                break;
        }

        return value;
    }

    function convertToChosenUnit(unit, value) {
        switch (unit) {
            case 'km':
                value /= 1000;
                break;
            case 'm':
                break;
            case 'cm':
                value /= 0.01;
                break;
            case 'mm':
                value /= 0.001;
                break;
            case 'mi':
                value /= 1609.34;
                break;
            case 'yrd':
                value /= 0.9144;
                break;
            case 'ft':
                value /= 0.3048;
                break;
            case 'in':
                value /= 0.0254;
                break;
        }

        return value;
    }

}