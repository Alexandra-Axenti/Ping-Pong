
var apiKey = "39af7508c220333711bac0fc738b2d43";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
    // function(response) {
    //       console.log(response);
    //       console.log(JSON.stringify(response));
    // $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    //       console.log("The humidity in " + city + " is " + response.main.humidity + "%");
    //  });
    console.log("Notice: The GET request has been made.");
  });
});
