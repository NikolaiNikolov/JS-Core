function focus() {
    let inputs = document.getElementsByTagName('input');
    [...inputs].forEach(e => {
        e.addEventListener('focus', elementFocus);
        e.addEventListener('blur', elementBlur);
    });

    function elementFocus() {
        this.parentNode.className = 'focused';
    }

    function elementBlur() {
        this.parentNode.removeAttribute('class');
    }
}