// JavaScript Document - Weather Data of Franklin MN

var requestURL = 'http://api.wunderground.com/api/a97326148f4b275e/conditions/forecast/q/MN/Franklin.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL, true);

request.send();

request.onload = function() {
    var weatherInfo = JSON.parse(request.responseText);
    console.log(weatherInfo);
    document.getElementById('cHTemp').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('cLTemp').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('cTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('cWeat').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('cIcon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('cFcText').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('valPrec').innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById('cSWind').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('cWChill').innerHTML = weatherInfo.current_observation.windchill_f;
}
