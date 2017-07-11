function calendar(dateInput) {
    let [day, month, year] = dateInput;
    month -= 1;
    let numOfDays = new Date(year, month - 1, 0).getDate();
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let table = `<table>\n    <caption>${monthNames[month]} ${year}</caption>    <tbody>\n`;
    table += '<th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th>\n<tr>';
    let daysCounter = 1;
    let start =  (new Date(year, month, day).getDay()) % 7;

    for (i = 1; i <= 35; i++) {

        if (i >= start) {
            table += `<td ${daysCounter === day ? 'class="today"' : ""}>${daysCounter <= numOfDays ? daysCounter : ''}</td>`;
            daysCounter++;
        } else {
            table +='<td> </td>';
        }

        if (i % 7 === 0 && i < 35) {
            table += '</tr><tr>';
        }

    }

    table += '</tbody>    </table>';

    $('#content').append($(table));
}