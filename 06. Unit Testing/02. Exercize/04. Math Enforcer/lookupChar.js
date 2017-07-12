lookupChar = function(string, index) {
    if (!Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
};
module.exports = {lookupChar};