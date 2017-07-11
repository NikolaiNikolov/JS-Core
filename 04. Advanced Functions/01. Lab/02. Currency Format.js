function formatter(formatter) {

    function getDollarFormatter(formatter) {
        function dollarFormatter(value) {
            return formatter(',', '$', true, value);
        }

        return dollarFormatter;
    }
    let dollars = getDollarFormatter(formatter);
    return dollars;
}