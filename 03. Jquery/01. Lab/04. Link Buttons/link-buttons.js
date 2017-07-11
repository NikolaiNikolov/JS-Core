function attachEvents() {
    let anchors = $('a');
    anchors.on('click', function () {
        anchors.removeClass('selected');
        $(this).addClass('selected');
    });
}
