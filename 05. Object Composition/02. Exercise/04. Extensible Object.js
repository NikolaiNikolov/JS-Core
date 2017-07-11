function getObj() {
    return {
        extend
    };

    function extend(template) {
        for (key in template) {
            if (template.hasOwnProperty(key)) {
                let element = template[key];
                if (typeof element === 'function') {
                    Object.getPrototypeOf(this)[key] = element;
                } else {
                    this[key] = element;
                }
            }
        }
    }
}

let myObj = getObj();
let template = {
    extensionMethod: function () {
        console.log('Pesho');
    },
    extensionProperty: 'Vankata'
};

myObj.extend(template);
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));
