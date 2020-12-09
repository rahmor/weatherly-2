import * as actions from '../actions/actions';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

jest.mock('../utilities/utilities', () => {
  const utilities = jest.requireActual('../utilities/utilities');
  return {
    parseWeatherJSON: jest.fn(() => {
      return {
        CURRENT: {
          sample: 'yes',
        },
        DAILY: { sample: 'yes' },
      };
    }),
  };
});

describe('Actions', () => {
  test('fetchWeather ', () => {
    fetchMock.mock('begin:https://api.openweathermap.org', {
      body: JSON.stringify({ data: 'dummy data' }),
      headers: { 'Content-Type': 'application/json' },
    });

    const expectedActions = [
      { type: 'UPDATE CITY', payload: 'New York' },
      { type: 'UPDATE FETCHING' },
      { type: 'UPDATE FETCHING' },
      {
        type: 'ADD CURRENT',
        payload: { sample: 'yes' },
      },
      {
        type: 'UPDATE CURRENT',
        payload: { sample: 'yes' },
      },
      {
        type: 'UPDATE DAILY',
        payload: { sample: 'yes' },
      },

      { type: 'DONE FETCHING' },
    ];

    return store
      .dispatch(actions.fetchWeather([], 'New York'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
      .catch((error) => console.log(error));
  });

  test('fetchCoordinates', () => {
    store.clearActions();
    const data = { results: [{ geometry: 'dummy data' }] };
    fetchMock.resetHistory();
    fetchMock.mock('begin:https://api.opencagedata.com', {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    const expectedActions = [
      { type: 'DONE FETCHING' },
      { type: 'UPDATE CITY', payload: 'New York' },
      { type: 'UPDATE FETCHING' },
    ];

    return store
      .dispatch(actions.fetchCoordinates('New York'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
      .catch((error) => console.log(error));
  });
});
