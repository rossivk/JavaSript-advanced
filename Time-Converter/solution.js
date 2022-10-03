function attachEventsListeners() {
    let days = document.getElementById('days');
    let hrs = document.getElementById('hours');
    let mins = document.getElementById('minutes');
    let secs = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', () => { convert(+days.value * 86400) });
    document.getElementById('hoursBtn').addEventListener('click', () => { convert(+hrs.value * 360) });
    document.getElementById('minutesBtn').addEventListener('click', () => { convert(+mins.value * 60) });
    document.getElementById('secondsBtn').addEventListener('click', () => { convert(+secs.value) });

    function convert(sec) {
        let day = sec / (24 * 60 * 60);
        let hour = sec / (60 * 60);
        let minute = sec / 60;

        days.value = day;
        hrs.value = hour;
        mins.value = minute;
        secs.value = sec;
    }
}

