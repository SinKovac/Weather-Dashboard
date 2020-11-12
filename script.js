const APIKey = "c9a9ed03a355403f4cb9a36e931c0b4a";

var searchBtn = $(".searchBtn");
var searchInput = $(".searchInput");

searchBtn.on("click", function(e) {
    e.preventDefault();
    if (searchInput.val() === "") {
        alert("You must enter a city");
        return;
    }
    console.log("clicked button")
    getWeather(searchInput.val());
});

