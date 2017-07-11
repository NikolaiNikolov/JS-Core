function highlight(selector) {
    selector = $(selector);

    // selector.addClass('highlight');
    let allChildlessElements = $(`${selector} *:not(:has("*"))`);

}