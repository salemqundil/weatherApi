function renderWeather(weather){
    console.log(weather);
    document.getElementById("city").innerText= weather.name;
    document.getElementById("details").innerText=`${weather.main.temp} °C`
    document.getElementById("humidity").innerText=`Humidity ${weather.main.humidity} %`
    document.getElementById("cloudy").innerText=`${weather.weather[0].description}`
    document.getElementById("wind").innerText=`${weather.wind.speed} mph, ${weather.wind.deg} °`;
    document.getElementById('date').innerText=today;
    document.getElementById('today').innerText="Weather Today";
}

function fetchWeather(){
    var city = document.getElementById("searchCity").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=111efdbb93ee9e9d8ffb2410b0f87fd1&units=metric`;

    fetch(url).then(response => response.json())
    .then(data => renderWeather(data));
}






var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;