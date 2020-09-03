function updateCityReducer(state = '', action) {
  switch (action.type) {
    case 'UPDATE CITY':
      return action.payload;
    default:
      return state;
  }
}

function updateFetching(state = false, action) {
  switch (action.type) {
    case 'UPDATE FETCHING':
      return !state;
    default:
      return state;
  }
}

function updateCurrentWeather(state = {}, action) {
  switch (action.type) {
    case 'UPDATE CURRENT':
      return action.payload;
    default:
      return state;
  }
}

function updateDailyWeather(state = [], action) {
  switch (action.type) {
    case 'UPDATE DAILY':
      return action.payload;
    default:
      return state;
  }
}

function fetchErrorReducer(state = false, action) {
  switch (action.type) {
    case 'FETCH ERROR':
      return !state;
    default:
      return state;
  }
}

const reducers = {
  fetchError: fetchErrorReducer,
  city: updateCityReducer,
  fetching: updateFetching,
  current: updateCurrentWeather,
  daily: updateDailyWeather,
};

export default reducers;
