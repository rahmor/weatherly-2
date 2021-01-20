import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import reducers from '../reducers/reducers';

export const initialState = {
  fetchError: false,
  city: 'Washington, DC',
  fetching: false,
  current: {
    temp: 74,
    time: '12:41:09 PM',
    dt: 1605739065,
    hi: 74,
    lo: 55,
    icon: '01d',
    condition: 'clear sky',
  },
  daily: [
    {
      dt: 1604851200,
      sunrise: 1604835818,
      sunset: 1604872819,
      temp: {
        day: 74.52,
        min: 55.87,
        max: 74.52,
        night: 61.5,
        eve: 72.34,
        morn: 56.86,
      },
      feels_like: {
        day: 73.72,
        night: 61.57,
        eve: 72.37,
        morn: 54.99,
      },
      pressure: 1028,
      humidity: 46,
      dew_point: 52.39,
      wind_speed: 2.73,
      wind_deg: 270,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: 1,
      pop: 0,
      uvi: 2.98,
    },
    {
      dt: 1604937600,
      sunrise: 1604922286,
      sunset: 1604959164,
      temp: {
        day: 66.88,
        min: 57.09,
        max: 73.11,
        night: 60.24,
        eve: 71.01,
        morn: 58.06,
      },
      feels_like: {
        day: 67.14,
        night: 57.18,
        eve: 70.03,
        morn: 58.51,
      },
      pressure: 1028,
      humidity: 67,
      dew_point: 55.85,
      wind_speed: 2.64,
      wind_deg: 197,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: 0,
      pop: 0,
      uvi: 3.12,
    },
    {
      dt: 1605024000,
      sunrise: 1605008753,
      sunset: 1605045510,
      temp: {
        day: 66.69,
        min: 57.88,
        max: 73.29,
        night: 65.91,
        eve: 72.18,
        morn: 57.99,
      },
      feels_like: {
        day: 66.24,
        night: 65.01,
        eve: 70.9,
        morn: 56.28,
      },
      pressure: 1023,
      humidity: 77,
      dew_point: 59.58,
      wind_speed: 6.11,
      wind_deg: 187,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: 25,
      pop: 0,
      uvi: 3.18,
    },
    {
      dt: 1605110400,
      sunrise: 1605095221,
      sunset: 1605131858,
      temp: {
        day: 71.44,
        min: 65.07,
        max: 74.68,
        night: 69.66,
        eve: 73.02,
        morn: 65.07,
      },
      feels_like: {
        day: 70.34,
        night: 72.66,
        eve: 75.51,
        morn: 65.75,
      },
      pressure: 1017,
      humidity: 79,
      dew_point: 64.62,
      wind_speed: 11.01,
      wind_deg: 199,
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d',
        },
      ],
      clouds: 94,
      pop: 1,
      rain: 18.99,
      uvi: 3.06,
    },
    {
      dt: 1605196800,
      sunrise: 1605181688,
      sunset: 1605218208,
      temp: {
        day: 67.6,
        min: 59.16,
        max: 69.44,
        night: 59.16,
        eve: 65.82,
        morn: 66.15,
      },
      feels_like: {
        day: 67.59,
        night: 54.82,
        eve: 63.1,
        morn: 67.84,
      },
      pressure: 1013,
      humidity: 84,
      dew_point: 62.8,
      wind_speed: 7.63,
      wind_deg: 346,
      weather: [
        {
          id: 503,
          main: 'Rain',
          description: 'very heavy rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 55.47,
      uvi: 2.87,
    },
    {
      dt: 1605283200,
      sunrise: 1605268156,
      sunset: 1605304559,
      temp: {
        day: 57.94,
        min: 52.02,
        max: 61.21,
        night: 52.02,
        eve: 59.22,
        morn: 56.07,
      },
      feels_like: {
        day: 51.24,
        night: 45.32,
        eve: 53.35,
        morn: 50.29,
      },
      pressure: 1020,
      humidity: 49,
      dew_point: 39.11,
      wind_speed: 7.58,
      wind_deg: 359,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: 65,
      pop: 0.05,
      uvi: 2.95,
    },
    {
      dt: 1605369600,
      sunrise: 1605354623,
      sunset: 1605390912,
      temp: {
        day: 52.93,
        min: 46.72,
        max: 57.54,
        night: 54.54,
        eve: 56.77,
        morn: 48.25,
      },
      feels_like: {
        day: 47.39,
        night: 48.36,
        eve: 51.55,
        morn: 42.01,
      },
      pressure: 1027,
      humidity: 54,
      dew_point: 36.77,
      wind_speed: 4.85,
      wind_deg: 77,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 73,
      pop: 1,
      rain: 7.01,
      uvi: 2.88,
    },
    {
      dt: 1605456000,
      sunrise: 1605441090,
      sunset: 1605477267,
      temp: {
        day: 62.55,
        min: 56.44,
        max: 67.84,
        night: 60.42,
        eve: 66.51,
        morn: 56.97,
      },
      feels_like: {
        day: 62.78,
        night: 60.3,
        eve: 67.44,
        morn: 56.16,
      },
      pressure: 1013,
      humidity: 87,
      dew_point: 58.78,
      wind_speed: 4.5,
      wind_deg: 268,
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 27.04,
      uvi: 2.43,
    },
  ],
  hourly: {
    hours: [
      {
        dt: 1610928000,
        temp: 65.68,
        feels_like: 61.99,
        pressure: 1018,
        humidity: 50,
      },
      {
        dt: 1610931600,
        temp: 66.25,
        feels_like: 61.79,
        pressure: 1019,
        humidity: 51,
      },
      {
        dt: 1610935200,
        temp: 66.18,
        feels_like: 62.02,
        pressure: 1019,
        humidity: 53,
      },
      {
        dt: 1610938800,
        temp: 65.93,
        feels_like: 62.69,
        pressure: 1019,
        humidity: 53,
      },
    ],
    timezone: -18000,
  },
  searched: {
    temp: 74,
    time: '12:41:09 PM',
    hi: 74,
    lo: 55,
    icon: '01d',
    condition: 'clear sky',
  },
  active: null,
  fetched: true,
};

export const JSON = {
  timezone_offset: -18000,
  current: {
    dt: 1605739065,
    sunrise: 1605701583,
    sunset: 1605738778,
    temp: 58.5,
    feels_like: 51.89,
    pressure: 1031,
    humidity: 25,
    dew_point: 23.88,
    uvi: 3.4,
    clouds: 1,
    visibility: 10000,
    wind_speed: 3.36,
    wind_deg: 310,
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01n',
      },
    ],
  },
  daily: [
    {
      dt: 1604851200,
      sunrise: 1604835818,
      sunset: 1604872819,
      temp: {
        day: 74.52,
        min: 55.87,
        max: 74.52,
        night: 61.5,
        eve: 72.34,
        morn: 56.86,
      },
      feels_like: {
        day: 73.72,
        night: 61.57,
        eve: 72.37,
        morn: 54.99,
      },
      pressure: 1028,
      humidity: 46,
      dew_point: 52.39,
      wind_speed: 2.73,
      wind_deg: 270,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: 1,
      pop: 0,
      uvi: 2.98,
    },
    {
      dt: 1604937600,
      sunrise: 1604922286,
      sunset: 1604959164,
      temp: {
        day: 66.88,
        min: 57.09,
        max: 73.11,
        night: 60.24,
        eve: 71.01,
        morn: 58.06,
      },
      feels_like: {
        day: 67.14,
        night: 57.18,
        eve: 70.03,
        morn: 58.51,
      },
      pressure: 1028,
      humidity: 67,
      dew_point: 55.85,
      wind_speed: 2.64,
      wind_deg: 197,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: 0,
      pop: 0,
      uvi: 3.12,
    },
  ],
  hourly: [
    {
      dt: 1610157600,
      temp: 36.36,
      feels_like: 25.66,
      pressure: 1017,
      humidity: 81,
      dew_point: 31.21,
      uvi: 0,
      clouds: 90,
      visibility: 10000,
      wind_speed: 12.41,
      wind_deg: 324,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1610161200,
      temp: 36.45,
      feels_like: 26.2,
      pressure: 1017,
      humidity: 81,
      dew_point: 31.28,
      uvi: 0,
      clouds: 82,
      visibility: 10000,
      wind_speed: 11.63,
      wind_deg: 320,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1610164800,
      temp: 35.82,
      feels_like: 25.77,
      pressure: 1018,
      humidity: 84,
      dew_point: 31.53,
      uvi: 0,
      clouds: 70,
      visibility: 10000,
      wind_speed: 11.34,
      wind_deg: 313,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
  ],
};

const store = createStore(
  combineReducers(reducers),
  initialState,
  applyMiddleware(thunkMiddleWare)
);

export default store;
