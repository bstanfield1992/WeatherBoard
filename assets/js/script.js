// add variables
var searchedName = document.querySelector('#searchName').value;
var todaysDateText = document.getElementById('todaysDate');
var todaysDate = moment();

function searchFunction() {
var todaysUV = document.getElementById('todaysUV');
var futureCards = document.getElementById('futureCards');
var city = document.getElementById('city');




// fill out todays weather

city.textContent = searchedName;
todaysDateText.textContent = todaysDate.format('MM/DD/YYYY') + ')';

fetch('https://api.openweathermap.org/data/2.5/weather?q='
+ searchedName + '&appid=7501ebd3228baf3b901ed2b41be06662')
 .then(response => response.json())
 .then(data => console.log(data));

// getUV();

    
// create cards for future days

generateCards();







  
    

    
}

// on load search

searchFunction()

function generateCards() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='
    + searchedName + '&appid=7501ebd3228baf3b901ed2b41be06662')
     .then(response => response.json())
     .then(data => console.log(data));

    for(var i = 1; i < 6; i++) {
        var dayVar = 'date' + [i]
        // var icon = date.;
        dayVar.toString();
        var day = document.getElementById(dayVar);
        day.textContent = todaysDate.add(1, 'd').format('MM/DD/YYYY').toString();
        
    }
}
//get UV index

function getUV() {
    fetch('https://http://api.openweathermap.org/data/2.5/uvi?lat='
    + latitude + '&lon=' + longitude + '&appid=7501ebd3228baf3b901ed2b41be06662')
 .then(response => response.json())
 .then(data => console.log(data));

    // var uv = ;
    // return uv;
}



// add past searches