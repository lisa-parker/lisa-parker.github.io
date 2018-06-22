//This is the code which connects to the api
let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=e0d8e34fa7fdcca562398001c2708ca6';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
  //console.log(weatherRequest.responseText);
  
  let weatherData = JSON.parse(weatherRequest.responseText);
  //console.log(weatherData);
  
  document.getElementById('current-temp').innerHTML = weatherData.main.temp;
  
  let imagesrc = 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
  
  document.getElementById('weatherimage').src = imagesrc;
}



//weatherRequest.onerror = function() {}