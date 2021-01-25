// add variables

var todaysDateText = document.getElementById('todaysDate');
var todaysDate = moment();
var todaysUV = document.getElementById('todaysUV');
var todaysTemp = document.getElementById('todaysTemp');
var todaysHumidity = document.getElementById('todaysHumidity');
var todaysWind = document.getElementById('todaysWind');

// search button

function searchFunction() {
var searchedName = document.querySelector('#searchName').value;
var city = document.getElementById('city');




// fill out todays weather

city.textContent = searchedName;
todaysDateText.textContent = todaysDate.format('MM/DD/YYYY') + ')';

fetch('https://api.openweathermap.org/data/2.5/weather?q='
+ searchedName + '&appid=7501ebd3228baf3b901ed2b41be06662')
.then(function(response) {
    return response.json();
  })
.then(function(response) {
    console.log(response);
todaysTemp.textContent = Math.round((response.main.temp - 273.15) * (9/5) + 32);
todaysHumidity.textContent = response.main.humidity;
todaysWind.textContent = response.wind.speed;
 var latitude = response.coord.lat;
 console.log(latitude);
 var longitude = response.coord.lon;
 console.log(longitude);
getUV(latitude, longitude);
});
    
// create cards for future days

generateCards(searchedName);

addPastSearches(searchedName);

    
}

searchFunction();

function generateCards(searchedName) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='
    + searchedName + '&appid=7501ebd3228baf3b901ed2b41be06662')
    .then(function(response) {
        return response.json();
      })
    .then(function(response) {
        console.log(response);
        var listItem = 0;
        for(var i = 1; i < 6; i++) {
            var humvar = 'day' + [i] + 'Humidity';
            // console.log(humvar);
            var tempvar = 'day' + [i] + 'temp';
            // console.log(tempvar)
            var futureTemp = document.getElementById(tempvar);
            var futureHumidity = document.getElementById(humvar);
            var dayVar = 'date' + [i]
            dayVar.toString();
            var day = document.getElementById(dayVar);
            day.textContent = todaysDate.add(1, 'd').format('MM/DD/YYYY').toString();
            futureTemp.textContent = Math.round((response.list[listItem].main.temp - 273.15) * (9/5) + 32);
            futureHumidity.textContent = response.list[listItem].main.humidity;
            // console.log(listItem)
            listItem = listItem + 8;
        }
        todaysDate = todaysDate.add(-5, 'd');
    });  
    
    
};
//get UV index

function getUV(latitude, longitude) {
    fetch('https://api.openweathermap.org/data/2.5/uvi?lat='
    + latitude + '&lon=' + longitude + '&appid=7501ebd3228baf3b901ed2b41be06662')
    .then(function(response) {
        return response.json();
      })
    .then(function(response) {
        console.log(response);
        var uv = response.value;
        todaysUV.removeAttribute('class')
        if(uv > 9) {
            todaysUV.classList.add('bg-gradient', 'rounded', 'text-light' ,'bg-danger')
        } else if (uv > 5) {
            todaysUV.classList.add('bg-gradient', 'rounded', 'text-light', 'bg-warning')
        } else {
            todaysUV.classList.add('bg-gradient', 'rounded', 'text-light', 'bg-success')
        }
        todaysUV.textContent = uv;
    });

};



// add past searches
var count = 0;
function addPastSearches(searchedName) {
    
    var searches = [searchedName];
    searches[count] = searchedName;
    console.log(searches)
    // for (var i = 0; i < searches.length + 1; i++) {
        
    // }
    localStorage.setItem("searches" + count, searchedName);
    count = count + 1;
    console.log(count);
}
