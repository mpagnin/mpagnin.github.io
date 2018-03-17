function toggleNavMenu() {
    document.getElementById("mainmenu").classList.toggle("hide");
}

// JavaScript Document - Weather Data of Springfield OR

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', '//api.wunderground.com/api/897a29e35828f725/conditions/forecast/q/OR/Springfield.json', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    document.getElementById('cHTemp').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('cLTemp').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('cTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('cWeat').innerHTML = weatherInfo.current_observation.weather;
    /* document.getElementById('cIcon').src = weatherInfo.current_observation.icon_url; */
    document.getElementById('cFcText').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('valPrec').innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById('cSWind').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('cWChill').innerHTML = weatherInfo.current_observation.windchill_f;
}

// JavaScript - Take Springfield town data JSON

var townData = document.querySelector('.town-data');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var dataTowns = request.response;
    showDataTowns(dataTowns);

    function showDataTowns(jsonObj) {
        var i = 3;
        var towns = jsonObj['towns'];
        var myArticle = document.createElement('article');
        var myH4 = document.createElement('h4');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('ul');

        myH4.textContent = towns[i].name + ": " + towns[i].motto;
        myPara1.textContent = 'Founded: ' + towns[i].yearFounded;
        myPara2.textContent = 'Current Population: ' + towns[i].currentPopulation;
        myPara3.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + " inches";
        myPara4.textContent = 'Events: ';

        var townEvents = towns[i].events;
        for (var j = 0; j < townEvents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH4);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);
        townData.appendChild(myArticle);
    }
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
