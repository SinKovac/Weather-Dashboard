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


