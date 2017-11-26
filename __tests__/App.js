//import 'react-native';
//import React from 'react';
//import App from '../App';
import OpenWeatherMap from "../src/OpenWeatherMapAPI/open_weather_map";

// Note: test renderer must be required after react-native.
//import renderer from 'react-test-renderer';

test('returns a forecast', () => {
  //const sum = require('./sum');
  //expect(sum(1, 2)).toBe(3);
  OpenWeatherMap.fetchForecast("06825");
});

//it('renders correctly', () => {
//  const tree = renderer.create(
//    <App />
//  );
//});
