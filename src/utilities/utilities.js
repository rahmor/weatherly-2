import lodash from 'lodash';

function parseWeatherJSON(JSON) {
  let CURRENT = {
    temp: JSON.current.temp.toFixed(),
    time: parseUnixTime(JSON.current.dt),
    hi: JSON.daily[0].temp.max.toFixed(),
    lo: JSON.daily[0].temp.min.toFixed(),
    icon: JSON.current.weather[0].icon,
    condition: JSON.current.weather[0].description,
  };
  const DAILY = JSON.daily;
  return { CURRENT, DAILY };
}

function getCurrentFromDaily(JSON) {
  let CURRENT = {
    temp: JSON.temp.max.toFixed(),
    time: parseUnixTime(JSON.dt),
    hi: JSON.temp.max.toFixed(),
    lo: JSON.temp.min.toFixed(),
    icon: JSON.weather[0].icon,
    condition: JSON.weather[0].description,
  };
  return CURRENT;
}

function parseUnixTime(unix) {
  return new Date(unix * 1000).toLocaleTimeString('en-us');
}

const CITIESOBJECT = {
  'New York': [40.7127281, -74.0060152],
  Atlanta: [33.7490987, -84.3901849],
  'Los Angeles': [34.0536909, -118.2427666],
  Miami: [25.7741728, -80.19362],
  'San Francisco': [37.7790262, -122.4199061],
  Chicago: [41.8755616, -87.6244212],
  'Washington, DC': [38.8949855, -77.0365708],
  Boston: [42.3602534, -71.0582912],
};

const city = lodash.sample(Object.keys(CITIESOBJECT));
let coordinates = CITIESOBJECT[city];

export { coordinates, city, parseWeatherJSON, getCurrentFromDaily };
