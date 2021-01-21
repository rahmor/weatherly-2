import { parseWeatherJSON, getCurrentFromDaily } from '../utilities/utilities';
const ADD_CURRENT = 'ADD CURRENT';
const UPDATE_CITY = 'UPDATE CITY';
const UPDATE_FETCHING = 'UPDATE FETCHING';
const UPDATE_CURRENT = 'UPDATE CURRENT';
const UPDATE_DAILY = 'UPDATE DAILY';
const UPDATE_HOURLY = 'UPDATE HOURLY';
const FETCH_ERROR = 'FETCH ERROR';
const UPDATE_ACTIVE = 'UPDATE ACTIVE';
const DONE_FETCHING = 'DONE FETCHING';
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API;
const COORDINATES_API_KEY = process.env.REACT_APP_COORDINATES_API;

function focusDaily(JSON) {
  return {
    type: UPDATE_CURRENT,
    payload: getCurrentFromDaily(JSON),
  };
}

function searchedCurrentWeather(current) {
  return {
    type: ADD_CURRENT,
    payload: current,
  };
}

function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city,
  };
}

function isFetching() {
  return {
    type: UPDATE_FETCHING,
  };
}

function doneFetching() {
  return {
    type: DONE_FETCHING,
  };
}

function updateActive(i) {
  return {
    type: UPDATE_ACTIVE,
    payload: i,
  };
}

function updateCurrentWeather(current) {
  return {
    type: UPDATE_CURRENT,
    payload: current,
  };
}

function updateDailyWeather(daily) {
  return {
    type: UPDATE_DAILY,
    payload: daily,
  };
}

function updateHourlyWeather(hourly) {
  return {
    type: UPDATE_HOURLY,
    payload: hourly,
  };
}

function fetchError() {
  return {
    type: FETCH_ERROR,
  };
}

/* HACK import data.json and bypass fetch, parse data,
and dispatch updates to store */
function fetchCoordinates(city) {
  city.trim();
  const COORIDINATES_URL = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${COORDINATES_API_KEY}`;
  return function (dispatch) {
    dispatch(doneFetching());
    return fetch(COORIDINATES_URL)
      .then((response) => {
        if (!response.ok) {
          Promise.reject(response);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data === undefined) {
          dispatch(fetchError());
          return Promise.resolve(data);
        } else if (Object.keys(data).length === 0) {
          dispatch(fetchError());
          return Promise.resolve(data);
        }
        const coords = data.results[0].geometry;
        dispatch(fetchWeather([coords.lat, coords.lng], city));
        return Promise.resolve(data);
      });
  };
}

function fetchWeather(coordinates = [40.7127281, -74.0060152], city) {
  const WEATHER_LOCATION_ADDRESS = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&
  exclude=minutely,alerts&units=imperial&appid=${WEATHER_API_KEY}`;
  return function (dispatch) {
    dispatch(updateCity(city));
    dispatch(isFetching());
    return fetch(WEATHER_LOCATION_ADDRESS)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        dispatch(isFetching());
        const { CURRENT, DAILY, HOURLY } = parseWeatherJSON(data);
        dispatch(searchedCurrentWeather(CURRENT));
        dispatch(updateCurrentWeather(CURRENT));
        dispatch(updateDailyWeather(DAILY));
        dispatch(updateHourlyWeather(HOURLY));
        dispatch(doneFetching());
        return Promise.resolve(data);
      })
      .catch(function (error) {
        dispatch(fetchError());
      });
  };
}

export {
  updateCity,
  fetchWeather,
  fetchCoordinates,
  focusDaily,
  updateActive,
  updateCurrentWeather,
};
