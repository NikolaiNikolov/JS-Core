function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let option = document.createElement('option');
    option.textContent = newItemText.value;
    option.value = newItemValue.value;
    document.getElementById('menu').add(option);
    newItemText.value = '';
    newItemValue.value = '';
}