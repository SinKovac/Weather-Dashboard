const APIKey = "c9a9ed03a355403f4cb9a36e931c0b4a";

var inputEl = document.getElementById("city-input");
var searchEl = document.getElementById("search-button");
var nameEl = document.getElementById("city-name");
var TempEl = document.getElementById("temperature");
var HumidityEl = document.getElementById("humidity");4
var WindEl = document.getElementById("wind-speed");
var UVEl = document.getElementById("UV-index");
var historyEl = document.getElementById("history");
    
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
console.log(searchHistory);

searchEl.addEventListener("click",function() {
    const searchTerm = inputEl.value;
    getWeather(searchTerm);
    searchHistory.push(searchTerm);
    localStorage.setItem("search",JSON.stringify(searchHistory));
    renderSearchHistory();
})

function getCityWeather(userInput){
    displayInfo.innerHTML = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputEl}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(({ main: { temp, humidity }, wind: { speed }, coord: { lon, lat } }) => {
      var info = document.createElement('div');
  
      info.innerHTML = `<h2>${userInput} ${moment().format('MM/DD/YYYY')}</h2>
      <p>Temperature: ${temp} ºC </p>
      <p>Humidity: ${humidity}</p>
      <p>Wind Speed: ${speed} mph </p>
      `
        displayInfo.append(info)
        getUvIndex(lon, lat)
        getFiveDayForecast(lon, lat)
        
    })
}
