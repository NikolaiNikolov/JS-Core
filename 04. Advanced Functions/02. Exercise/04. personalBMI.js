function solve() {
    let [name, age, weight, height] = arguments;

    let person = {
        name: name,
        personalInfo: {age: age, weight: weight, height: height },
    };
    person['BMI'] = Math.round(calculateBMI(person));

    if (person.BMI < 18.5) {
        person['status'] = 'underweight';
    } else if (person.BMI < 25) {
        person['status'] = 'normal';
    } else if (person.BMI < 30) {
        person['status'] = 'overweight';
    } else {
        person['status'] = 'obese';
        person['recommendation'] = 'admission required';
    }


    function calculateBMI(object) {
        let weight = object['personalInfo']['weight'];
        let height = object['personalInfo']['height'] / 100;
        return weight / (height * height);
    }

    return person;
}

console.log(solve('Honey Boo Boo', 9, 57, 137));