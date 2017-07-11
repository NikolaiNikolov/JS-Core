function domSearch(container, caseSensitive) {
    container = $(container);
    let div = $('<div>').addClass('add-controls');
    let label = $('<label>').text('Enter text: ');
    $('<input>').appendTo(label);
    label.appendTo(div);
    $('<a class="button" style="display: inline-block">Add</a>').appendTo(div);
    container.append(div);
    container.append($('<div>').addClass('search-controls')
        .append($('<label>').text('Search:')
            .append($('<input>'))));
    container.append($('<div>').addClass('result-controls')
        .append($('<ul>').addClass('items-list').append($('<li>')
            .addClass('list-item')
            .append($('<a>').addClass('button').text('x').click(removeElement))
            .append($('<strong>').text('Element 1')))));
    let list = $('.items-list');
    let addButton = $('a.button:contains(Add)');
    addButton.click(addElement);

    let inputField = $('input')[1];
    inputField.addEventListener('input', searchDom);

    function addElement() {
        let inputValue = $('input')[0];
        list.append($('<li>').addClass('list-item').append($('<a>').addClass('button').text('x').click(removeElement)).append($('<strong>').text(inputValue.value)));
        inputValue.value = '';
    }

    function removeElement() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    }

    function searchDom() {
        let word = $('input')[1].value;

        if (caseSensitive) {
            $(`ul li:not(:contains(${word}))`).hide();
            $(`ul li:contains(${word})`).show();
        } else {
            let pattern = new RegExp(word, 'i');
            let lists = $(`ul li`);

            let other = lists.filter(function () {
                return !$(this).text().match(pattern)
            });

            let matches = lists.filter(function () {
                return $(this).text().match(pattern)
            });
            other.hide();
            matches.show();
        }


    }

}