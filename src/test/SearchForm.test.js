import SearchForm from '../components/SearchForm/SearchForm';
import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { after } from 'lodash';
jest.mock('moment', () => {
  return () => jest.requireActual('moment')('2020-01-01T00:00:00.000Z');
});

describe('SearchForm component', () => {
  const props = { fetchCoordinates: jest.fn(), city: 'New York' };
  const wrapper = shallow(<SearchForm {...props} />);

  afterAll(() => {
    wrapper.unmount();
    wrapper.debug();
  });

  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('when span clicked', () => {
    it('should match snapshot and show input element', () => {
      wrapper.find('span').simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('should call renderProps', () => {
    wrapper
      .find('form')
      .at(0)
      .simulate('submit', { preventDefault: jest.fn() });
    expect(props.fetchCoordinates).toHaveBeenCalled();
  });
});
