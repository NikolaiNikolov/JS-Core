function createBook(selector, title, author, isbn) {
    let id = $('div[id*="book"]').toArray().length + 1;

        let container = $(selector);
        let fragment = document.createDocumentFragment();
        let div = $('<div>');
        div.attr('id', `book${id}`)
            .css('border', 'medium none')
            .append($(`<p>${title}</p>`).addClass('title'))
            .append($(`<p>${author}</p>`).addClass('author'))
            .append($(`<p>${isbn}</p>`).addClass('isbn'))
            .append($('<button>Select</button>').click(selectBook))
            .append($('<button>Deselect</button>').click(deselectBook));
        container.append(div);

        id++;

    function selectBook() {
        $(this).parent().css('border', '2px solid blue');
    }

    function deselectBook() {
        $(this).parent().css('border', 'none');
    }
}
