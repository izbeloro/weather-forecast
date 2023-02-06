var key = "dda2361f9711b148f9a98283d4756472";
var currentCity = "";
var lon = "";
var lat = ""; 
var button = document.getElementById("button");
var search = document.getElementById("search");
var city = document.getElementById("city");
var geoCode = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}";
var fiveDay = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

function displayInfo() {
    var geoCode = "http://api.openweathermap.org/geo/1.0/direct?q="+ search.value +"&limit=1&appid="+ key +"";
    fetch(geoCode)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var lon = data[0].lon;
            var lat = data[0].lat;
            var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ lon +"&appid="+ key +"";
            fetch(fiveDay)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            city.textContent = data.city.name;
        })
        })
}

button.addEventListener("click", displayInfo)



