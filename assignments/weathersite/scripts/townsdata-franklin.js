// JavaScript - Take Franklin town data JSON

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
        var i = 0;
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

