function toggle() {
    let div = document.getElementById('extra');
    let btn = document.querySelector('span.button');

    if (div.style.display != 'block') {
        div.style.display = 'block';
        btn.textContent = 'Less';
    } else {
        div.style.display = 'none';
        btn.textContent = 'More';
    }
}