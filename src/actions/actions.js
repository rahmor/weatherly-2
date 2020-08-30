import parseWeatherJSON from '../utilities/utilities';

const UPDATE_CITY = 'UPDATE CITY';
const UPDATE_FETCHING = 'UPDATE FETCHING';
const UPDATE_CURRENT = 'UPDATE CURRENT';
const UPDATE_DAILY = 'UPDATE DAILY';
const FETCH_ERROR = 'FETCH ERROR';
const API_KEY = process.env.REACT_APP_WEATHER_API;

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

function fetchError() {
  return {
    type: FETCH_ERROR,
  };
}

function fetchWeather(coordinates = [40.7127281, -74.0060152]) {
  const WEATHER_LOCATION_ADDRESS = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&
  exclude={part}&units=imperial&appid=${API_KEY}`;
  return function (dispatch) {
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
        const { CURRENT, DAILY } = parseWeatherJSON(data);
        dispatch(updateCurrentWeather(CURRENT));
        dispatch(updateDailyWeather(DAILY));
      })
      .catch(function (error) {
        dispatch(fetchError());
      });
  };
}

export { updateCity, fetchWeather };
