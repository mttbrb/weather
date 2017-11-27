var fetch = require('node-fetch');

const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const NOW_API_STEM = "http://api.openweathermap.org/data/2.5/weather?";
const MULTI_DAY_API_STEM = "http://api.openweathermap.org/data/2.5/forecast?";

function zipUrl(zip) {
    return `${NOW_API_STEM}zip=${zip},us&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function handleResponse(json) {
    var result;

    console.log(json);
    if (json.cod == "200") {
        result = {
          main: json.weather[0].main,
          description: json.weather[0].description,
          temp: json.main.temp
        }
    } else {
        result = {
            main: "Error",
            description: ( json.message ? json.message : "unexpected error" ),
            temp: 0
        }
    }
    console.log(result);
    return result;
}

function fetchForecast(zip) {
    return fetch(zipUrl(zip))
      .then(response => response.json())
      .then(responseJSON => handleResponse(responseJSON))
      .catch(error => { console.error(error); });
}

export default { fetchForecast: fetchForecast };