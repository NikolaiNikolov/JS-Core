function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn').addEventListener('click', convert);
    let hoursBtn = document.getElementById('hoursBtn').addEventListener('click', convert);
    let minutesBtn = document.getElementById('minutesBtn').addEventListener('click', convert);
    let secondsBtn = document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert() {
        let input = this.id.slice(0,this.id.length-3);
        let [days, hours, minutes, seconds] = [0, 0, 0, 0,];
        if (input === 'days') {
            days = Number(document.getElementById(input).value);

        } else if (input === 'hours') {
            days = Number(document.getElementById(input).value) / 24;
        } else if (input == 'minutes') {
            days = Number(document.getElementById(input).value) / 24 / 60;
        } else {
            days = Number(document.getElementById(input).value) / 24 / 60 / 60;
            console.log(input);
        }
        hours  = days * 24;
        minutes = hours * 60;
        seconds = minutes * 60;

        document.getElementById('days').value = Math.floor(days);
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }
}