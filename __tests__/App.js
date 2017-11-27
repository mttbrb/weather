import OpenWeatherMap from "../src/OpenWeatherMapAPI/open_weather_map";

test('returns a forecast', () => {
  let result = OpenWeatherMap.fetchForecast("06825");
  result.main !== "error" ? console.log("valid result") : console.log("error");
});

//test('handles error if bad input', () => {
//  let result = OpenWeatherMap.fetchForecast("London");
//  result.main !== "error" ? console.log("error") : console.log("valid response");
//});
