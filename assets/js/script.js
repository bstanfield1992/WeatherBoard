// add variables
var searchedName = document.getElementById('searchedName')
var todays
// add fetch
searchedName = 'tucson'

fetch('https://api.openweathermap.org/data/2.5/weather?q='
 + searchedName +
'&appid=0dedb61addcebc5a71ee712c4f54186d')
  .then(response => response.json())
  .then(data => console.log(data));

// on load search



// create cards for future days
function futureWeather() {
    for(var i = 1; i < 7; i++) {
        var dayVar = 'day' + [i]
        dayVar.toString();
        console.log(dayVar)
        var day = document.getElementById(dayVar);
        console.log(day);
        day.textContent = '1/'+[i]+'/2021'
    }
}
futureWeather();
// add search button functionality


// add past searches