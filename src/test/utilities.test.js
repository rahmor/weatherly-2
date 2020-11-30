import { parseWeatherJSON } from '../utilities/utilities';
import { JSON } from '../utilities/testfixtures';

describe.only('parseWeatherJSON', () => {
  it('should parse weather', () => {
    const { CURRENT, DAILY } = parseWeatherJSON(JSON);
    expect(typeof CURRENT).toBe('object');
    expect(typeof DAILY).toBe('object');
  });
});
