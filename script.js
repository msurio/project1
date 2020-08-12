$(document).ready(function () {
    //Greeting Users:
    var myDate = new Date();
    var hrs = myDate.getHours();
    var greet;

    if (hrs < 12) {
        greet = 'Good Morning'
    } else if (hrs >= 12 && hrs < 17) {
        greet = 'Good Afternoon'
    } else if (hrs >= 17 && hrs < 24) {
        greet = 'Good Evening'
    }

    $('#greeting').text(greet);

    //Rendering Weather
    function renderWeather() {
        var city = 'san diego';
        var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=99adabcd9b9526ae2fc8e7bbc24f5de4';

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {

            var temp = response.main.temp;
            var iconCode = response.weather[0].icon;
            var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';

            console.log(temp);

        })
    };



    function renderDate() {

        var date = moment().format('M[/]DD[/]YYYY')
        console.log(date);
    };




    // YouTube API key AIzaSyDG00SsuoM_lFTEQpzWlbKSbkcJJUuyVKU
    // YouTube URL https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&key=AIzaSyDG00SsuoM_lFTEQpzWlbKSbkcJJUuyVKU

    // Amazon fitne




})
