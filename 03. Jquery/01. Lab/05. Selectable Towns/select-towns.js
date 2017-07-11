function attachEvents() {
    $('#items').on('click', 'li', function () {
       let li = $(this);
        let selectedClass = 'data-selected';
        if (li.attr(selectedClass)) {
            li.removeAttr(selectedClass);
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    });

    $('#showTownsButton').on('click', function () {
        let selLi = $('ul#items li[data-selected=true]');
        $('#selectedTowns').text(`Selected towns: ${[...selLi].map(e => e.textContent).join(', ')}`);
    });
}
