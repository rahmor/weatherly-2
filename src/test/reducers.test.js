import reducers from '../reducers/reducers';

describe('Reducers', () => {
  test('updateCity', () => {
    expect(reducers.city('', { type: 'UPDATE CITY', payload: 'Boston' })).toBe(
      'Boston'
    );
  });

  test('updateFetching', () => {
    expect(reducers.fetching(false, { type: 'UPDATE FETCHING' })).toBeTruthy();
  });
});
