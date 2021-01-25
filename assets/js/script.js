// add variables

var todaysDateText = document.getElementById('todaysDate');
var todaysDate = moment();
var todaysUV = document.getElementById('todaysUV');

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

 var latitude = response.coord.lat;
 console.log(latitude);
 var longitude = response.coord.lon;
 console.log(longitude);
getUV(latitude, longitude);
});
    
// create cards for future days

generateCards(searchedName);
todaysDate = todaysDate.add(-5, 'd');


    
}

searchFunction();

// searchFunction()

function generateCards(searchedName) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='
    + searchedName + '&appid=7501ebd3228baf3b901ed2b41be06662')
    .then(function(response) {
        return response.json();
      })
    .then(function(response) {
        console.log(response);

        for(var i = 1; i < 6; i++) {
            var dayVar = 'date' + [i]
            var icon = response.list[0].weather.icon;
            console.log(icon);
            dayVar.toString();
            var day = document.getElementById(dayVar);
            day.textContent = todaysDate.add(1, 'd').format('MM/DD/YYYY').toString();
        }
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
        todaysUV.textContent = uv;
    });

};



// add past searches