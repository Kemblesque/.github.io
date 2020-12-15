function toggleMenu() {
    document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
   }
 
const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = d.getDay(); 
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var dateStr = day1[day] + ', ' + date + ' ' + month1[month] + ' ' + year;
document.getElementById("dates").innerHTML = dateStr;
document.getElementById("copyright").innerHTML = year;

// Current Weather for Weather Summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=44997e95ac8772915f949364d7da42a6";

fetch(apiURL)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    let description = town.weather[0].description;
    document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('temp').innerHTML = Math.round(town.main.temp);
    document.getElementById('humidity').innerHTML = town.main.humidity;
});

// 5 day forecast

const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=44997e95ac8772915f949364d7da42a6"

const fiveDays = new Date();
fiveDays.setDate(fiveDays.getDate() + 5);
const fiveDayString = fiveDays.getFullYear() + '-' + ((fiveDays.getMonth() + 1) < 10 ? ('0' + (fiveDays.getMonth() + 1)) : (fiveDays.getMonth() + 1)) + '-' + (fiveDays.getDate() < 10 ? ('0' + fiveDays.getDate()) : fiveDays.getDate()) + ' 12:00:00';
fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const forecastData = jsObject.list.filter((element) => element.dt_txt.includes(fiveDayString));


	console.log(forecastData);

	const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let day = 0;
	forecastData.forEach(forecast => {
        console.log(forecast);
	  let x = new Date(forecast.dt_txt);
    document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
    document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
    document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
	document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
	day++;	  
	});
});