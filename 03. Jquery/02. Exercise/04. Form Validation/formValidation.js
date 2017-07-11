function validate() {
    $('#submit').click(validateInput);

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let companyBox = $('#companyInfo');
    let companyCheckbox = $('input[id=company]');
    let companyNumber = $('#companyNumber');

    function validateInput(event) {
        event.preventDefault();
        let validated = true;

        if (validateUsername(username.val())) {
            username.css('border', 'none');
        } else {
            username.css('border', 'solid red');
            validated = false;
        }

        if (password.val() === confirmPass.val()
            && validatePassword(password.val())
            && validatePassword(confirmPass.val())) {

            password.css('border', 'none');
            confirmPass.css('border', 'none');
        } else {
            password.css('border', 'solid red');
            confirmPass.css('border', 'solid red');
            validated = false;
        }

        if (companyCheckbox.is(':checked')) {
            if (Number(companyNumber.val()) >= 1000
                && Number(companyNumber.val()) <= 9999) {

                companyNumber.css('border', 'none');
            } else {
                companyNumber.css('border', 'solid red');
                validated = false;
            }
        }

        if (validateEmail(email.val())) {
            email.css('border', 'none');
        } else {
            email.css('border', 'solid red');
            validated = false;
        }

        if (validated) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }
    }

    function validateUsername(username) {
        return username.length > 3 && username.length < 20;
    }

    function validateEmail(email) {
        return (/.+@\w+\.+.[^\s]+\b/).test(email);
    }
    
    function validatePassword(password) {
        let pattern = /^\w{5,15}$/;
        return pattern.test(password);
    }

    companyCheckbox.change(function () {
        if (companyCheckbox.is(':checked')) {
            companyBox.css('display', 'block');
        } else {
            companyBox.css('display', 'none');
        }
    });

}
