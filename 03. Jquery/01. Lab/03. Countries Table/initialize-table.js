function initializeTable() {
    $('#createLink').click(processInput);
    addCountry('Bulgaria', 'Sofia');
    addCountry('Germany', 'Berlin');
    addCountry('Russia', 'Moscow');

    function processInput() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        addCountry(country, capital);
    }
    
    function fixLinks() {
        $('table#countriesTable tr a').show();
        $('table#countriesTable tr:last-child a:contains("Down")').hide();
        $('table#countriesTable tr:eq(2) a:contains("Up")').hide();
    }

    function addCountry(country, capital) {
        let row = $('<tr>');
        row.append($(`<td>${country}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        $('#countriesTable').append(row);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        fixLinks();
    }

    function moveUp() {
        let row = $(this).parent().parent();
            row.insertBefore($(row.prev()));
            fixLinks();
    }

    function moveDown() {
        let row = $(this).parent().parent();
            row.insertAfter($(row.next()));
            fixLinks();
    }

    function deleteRow() {
        let row = $(this).parent().parent();
            row.remove();
            fixLinks();
    }
}