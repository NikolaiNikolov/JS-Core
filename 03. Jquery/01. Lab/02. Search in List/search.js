function search() {
    let pattern = $('#searchText').val();
    let matches = $(`ul#towns li:contains(${pattern})`);
    $('ul#towns li').css('font-weight', '');
    matches.css('font-weight', 'bold');
    $('#result').text(`${matches.length} matches found.`);
}