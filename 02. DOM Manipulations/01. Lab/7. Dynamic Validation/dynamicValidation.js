function dynamicValidation() {
    let input = document.querySelector('input');
    input.addEventListener('change', onChange);
    let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    function onChange(event) {
        if (!regex.test(input.value)) {
            event.target.className = 'error';
        } else {
            event.target.removeAttribute('class');
        }
    }
}