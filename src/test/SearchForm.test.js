import SearchForm from '../components/SearchForm/SearchForm';
import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
jest.mock('moment', () => {
  return () => jest.requireActual('moment')('2020-01-01T00:00:00.000Z');
});

describe('SearchForm component', () => {
  const props = { fetchCoordinates: jest.fn(), city: 'New York' };

  it('should match snapshot', () => {
    const wrapper = shallow(<SearchForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should call renderProps', () => {
    const wrapper = shallow(<SearchForm {...props} />);
    wrapper
      .find('form')
      .at(0)
      .simulate('submit', { preventDefault: jest.fn() });
    expect(props.fetchCoordinates).toHaveBeenCalled();
    wrapper.unmount();
  });
});
