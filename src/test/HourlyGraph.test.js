import HourlyGraph from '../components/HourlyGraph/HourlyGraph';
import React from 'react';
import { JSON } from '../utilities/testfixtures';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('HourlyGraph Component', () => {
  it('should match snapshot', () => {
    const props = {
      fetched: true,
      hourly: { hours: JSON.hourly, timezone: JSON.timezone_offset },
    };
    const wrapper = shallow(<HourlyGraph {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should render empty', () => {
    const props = {
      fetched: false,
      hourly: { hours: JSON.hourly, timezone: JSON.timezone_offset },
    };
    const wrapper = shallow(<HourlyGraph {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
