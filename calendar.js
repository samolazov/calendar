var calendarTable = document.querySelector('.calendar'),
    currentDate = new Date();

if (calendarTable) {
    currentDate.setDate(1);
    calendar(currentDate);

    document.querySelector('.navigate_next').onclick = function () {
        currentDate.setMonth( currentDate.getMonth() + 1 );
        calendar(currentDate);
    };

    document.querySelector('.navigate_before').onclick = function () {
        currentDate.setMonth( currentDate.getMonth() - 1 );
        calendar(currentDate);
    };
}

function calendar(selectedDate) {
    var russianMonths = ['Январь', 'Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        calendarMonth = document.querySelector('.calendar_month'),
        calendarYear = document.querySelector('.calendar_year'),
        firstMonday, tr, td, date, today;
    calendarMonth.innerHTML = russianMonths[ selectedDate.getMonth() ];
    calendarYear.innerHTML = '' + selectedDate.getFullYear();

    firstMonday = new Date;
    firstMonday.setTime( selectedDate.getTime() - dayShift( selectedDate.getDay() ) * 86400000 );

    date = firstMonday;
    today = new Date();

    for (var i = 2; i < 8; i++) {
        tr = calendarTable.querySelector('tr:nth-child(' + i + ')');
        for (var j = 1; j < 8; j++) {
            td = tr.querySelector('td:nth-child(' + j + ')');
            td.innerHTML = date.getDate();
            td.classList.remove("active");
            td.classList.remove("neighbor");
            if (date.getMonth() != currentDate.getMonth()) { td.classList.add('neighbor') }
            if ( date.getDate() == today.getDate() &&
                date.getMonth() == today.getMonth() &&
                date.getFullYear() == today.getFullYear() ) { td.classList.add('active') }
            date.setDate( date.getDate() + 1 );
        }
    }

    function dayShift(day) { // monday 0, tuestay 1, ... sunday 6
        day == 0 ? day = 6 : day--;
        return day;
    }
}
