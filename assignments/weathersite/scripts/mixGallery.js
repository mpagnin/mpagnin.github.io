function toggleNavMenu() {
    document.getElementById("mainmenu").classList.toggle("hide");
}

//Show current date
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()];
var dd = d.getDate();
var mm = d.getMonth() + 1; //January is 0!
var yyyy = d.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
var today = n + ', ' + mm + '/' + dd + '/' + yyyy;
document.getElementById("currdate").innerHTML = today;
