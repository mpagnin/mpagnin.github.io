// JavaScript - Take the town data JSON

var townData = document.querySelector('.sgrid');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var dataTowns = request.response;
    showDataTowns(dataTowns);

    function showDataTowns(jsonObj) {
        var towns = jsonObj['towns'];
        if (window.matchMedia("(min-width: 37.5em)").matches) {
            var townImg = ["images/pexels-photo-836941-medium.jpg", "images/pexels-photo-688835-medium.jpg", ,"images/pexels-photo-210557-medium.jpg"];
        }
        else {
            var townImg = ["images/pexels-photo-836941-small.jpg", "images/pexels-photo-688835-small.jpg", ,"images/pexels-photo-210557-small.jpg"];
        }
        for (var i = 0; i < towns.length; i++) {
            if (towns[i].name == "Franklin" || towns[i].name == "Greenville" || towns[i].name == "Springfield") {
                var myArticle = document.createElement('article');
                var myH3 = document.createElement('h3');
                var myH4 = document.createElement('h4');
                var myPara1 = document.createElement('p');
                var myPara2 = document.createElement('p');
                var myPara3 = document.createElement('p');
                var myImg1 = document.createElement('img');

                myH3.textContent = towns[i].name;
                myH4.textContent = towns[i].motto;
                myPara1.textContent = 'Founded: ' + towns[i].yearFounded;
                myPara2.textContent = 'Current Population: ' + towns[i].currentPopulation;
                myPara3.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + " inches";
                myImg1.src = townImg[i];

                myArticle.appendChild(myH3);
                myArticle.appendChild(myH4);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
                myArticle.appendChild(myImg1);
                townData.appendChild(myArticle);
            }

        }
    }
}
