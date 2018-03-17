// JavaScript Document - Weather Data of Springfield MN

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
