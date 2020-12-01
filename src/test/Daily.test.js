import React from 'react';
import Daily from '../components/Daily/Daily';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { initialState } from '../utilities/testfixtures';

describe('<Daily> component', () => {
  const props = {
    daily: initialState.daily,
    focusDaily: jest.fn(),
    updateActive: jest.fn(),
    active: 1,
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<Daily {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
