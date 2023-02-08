var key = "dda2361f9711b148f9a98283d4756472";
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
            var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ lon +"&appid="+ key +"&units=imperial";
            fetch(fiveDay)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            city.textContent = data.city.name;
            for (var i = 0; i < 6; i++) {
                document.getElementById("temp-"+i+"").textContent = "Temp: " +Number(data.list[i].main.temp).toFixed(0)+ "°";
            }
            for (var i = 0; i < 6; i++) {
                document.getElementById("wind-"+i+"").textContent = "Wind: " +Number(data.list[i].wind.speed).toFixed(0)+ "mph";
            }
            for (var i = 0; i < 6; i++) {
                document.getElementById("humidity-"+i+"").textContent = "Humidity: " +Number(data.list[i].main.humidity).toFixed(0)+ "%";
            }
            for (var i = 0; i < 6; i++) {
                document.getElementById("icon-"+i+"").src = "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon+".png";
            }
        })
        })
}

var weekDay = [
    moment().format("dddd"),
    moment().add(1,"d").format("dddd"),
    moment().add(2,"d").format("dddd"),
    moment().add(3,"d").format("dddd"),
    moment().add(4,"d").format("dddd"),
    moment().add(5,"d").format("dddd"),
    moment().add(6,"d").format("dddd"),
]
for (i = 0; i < 6; i++) {
    document.getElementById("day-"+i+"").textContent = weekDay[i];
}

window.addEventListener('load', () => {
    var lat;
    var lon;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            fiveDay = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat +'&lon=' + lon +'&appid=' + key +'&units=imperial';
            
            fetch(fiveDay)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    city.textContent = data.city.name;
                    for (var i = 0; i < 6; i++) {
                        document.getElementById("temp-"+i+"").textContent = "Temp: " +Number(data.list[i].main.temp).toFixed(0)+ "°";
                    }
                    for (var i = 0; i < 6; i++) {
                        document.getElementById("wind-"+i+"").textContent = "Wind: " +Number(data.list[i].wind.speed).toFixed(0)+ "mph";
                    }
                    for (var i = 0; i < 6; i++) {
                        document.getElementById("humidity-"+i+"").textContent = "Humidity: " +Number(data.list[i].main.humidity).toFixed(0)+ "%";
                    }
                    for (var i = 0; i < 6; i++) {
                        document.getElementById("icon-"+i+"").src = "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon+".png";
                    }
                })
        })
    }
})

button.addEventListener("click", displayInfo)



