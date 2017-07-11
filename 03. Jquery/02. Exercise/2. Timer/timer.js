function timer() {
    $('#start-timer').click(startTimer);
    $('#stop-timer').click(pauseTimer);
    let [timer, seconds] = [undefined, 0];

    function startTimer() {
        timer = setInterval(tick, 1000);
    }

    function pauseTimer() {
        clearInterval(timer);
    }

    function tick() {
        seconds++;
        displayTime();
    }

    function displayTime() {
        $('#hours').text( ('0' + Math.trunc(seconds / 3600)).slice(-2) );
        $('#minutes').text( ('0' + Math.trunc( (seconds / 60) % 60) ).slice(-2) );
        $('#seconds').text( ('0' + (seconds % 60)).slice(-2) );
    }
}