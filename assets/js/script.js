// add variables
var searchedName = document.querySelector('#searchName').value;
var todaysDateText = document.getElementById('todaysDate');
var todaysDate = moment();


todaysDate.format('MM DD YYYY')
// add fetch
function getData(searchedName) {

    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    + searchedName +
   '&appid=0dedb61addcebc5a71ee712c4f54186d')
     .then(response => response.json())
     .then(data => console.log(data));
    futureWeather(data);
}


// on load search
    getData(searchedName)
// create cards for future days
function futureWeather(data) {
    for(var i = 1; i < 6; i++) {
        var dayVar = 'date' + [i]
        var icon = date.
        dayVar.toString();
        var day = document.getElementById(dayVar);
        day.textContent = todaysDate.add(1, 'd').format('MM DD YYYY').toString();
        
    }
}

futureWeather();
// add search button functionality
function searchFunction() {
    debugger;
    
    console.log(searchedName);
    getData(searchedName);
    
};

// add past searches