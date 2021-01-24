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


// add search button functionality


// add past searches