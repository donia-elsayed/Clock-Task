function setTimeAndDate() {
    var currentDate = new Date();
    var hour =currentDate.getHours();
    var mint =currentDate.getMinutes();
    var period = "AM";
    if (hour > 12) {
        hour -= 12;
        period = "PM";
    }
    if (hour == 0) {
        hour = 12;
        period = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    mint = mint < 10 ? "0" + mint : mint;
    var time = hour + ":" + mint + ":" + period;
    document.getElementById("newTime").innerHTML = time;

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var day = days[currentDate.getDay()];
    var date = currentDate.getDate();
    var month =months[currentDate.getMonth()];
    var year = currentDate.getFullYear();

    var myDate = day + " " + date + " " +  month  + " " + year;
    document.getElementById("newDate").innerHTML = myDate;
     setTimeout(function () { setTimeAndDate();}, 500);
}
