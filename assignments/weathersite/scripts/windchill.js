/* Program defining table.
 * Input: the high and low temperature in Fahrenheit and the wind speed
 * in miles per hour.
 * Processing: compute the Wind Chill factor as a temperature
 * in Fahrenheit.
 * Output: the wind chill factor in Fahrenheit. */
    var tempH = 91;
    var tempL = 68;
    var speed = 6;
    document.getElementById("cHTemp").innerHTML = tempH;
    document.getElementById("cLTemp").innerHTML = tempL;
    document.getElementById("cSWind").innerHTML = speed;
    var tempF = ((tempH + tempL) / 2);
    var wwChill = Math.round((35.74 + ( 0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16))));
    document.getElementById("cWChill").innerHTML = wwChill;
