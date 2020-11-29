const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=44997e95ac8772915f949364d7da42a6&units=imperial';


fetch(apiURL)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    let description = town.weather[0].description;
    document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('temp').innerHTML = Math.round(town.main.temp);
    document.getElementById('humidity').innerHTML = town.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
    let t = (Math.round(town.main.temp));
        let s = (Math.round(town.wind.speed));
        let wc = "N/A";
        if (t <= 50 && s >= 3.0) {
            let calc = (35.74 + (.6215 * t)) - (35.75 * (Math.pow(s, .16))) + (.4275 * (t * (Math.pow(s, .16))));
            wc = Math.round(calc) + " &#176;F";
        }
        document.getElementById("windchill").innerHTML = wc;
});


const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=44997e95ac8772915f949364d7da42a6&units=imperial";

fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

	console.log(forecastData);

	const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let day = 0;
	forecastData.forEach(forecast => {
	  let x = new Date(forecast.dt_txt);
    document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
    document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
    document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
	document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
	day++;	  
	});
});

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
  
  fetch(requestURL)
   .then(function (response) {
     return response.json();
   })
   .then(function (jsonObject) {
     const towns = jsonObject['towns'];
     for (let i = 0; i < towns.length; i++ ) {
         if (towns[i].name == 'Soda Springs') {
          let events = towns[i].events;
          for (let i=0; i < events.length; i++) {
          let event = document.createElement('p');
          event.innerHTML = events[i];
          document.querySelector('.townEvents').appendChild(event);
        }
      }
     }
  });