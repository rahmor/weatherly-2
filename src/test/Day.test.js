import React from 'react';
import Day from '../components/Day/Day';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { initialState } from '../utilities/testfixtures';

describe.only('<Day> component', () => {
  const props = {
    daily: initialState.daily[0],
    i: 1,
    focusDaily: jest.fn(),
    updateActive: jest.fn(),
    active: 1,
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<Day {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should call renderProps', () => {
    const wrapper = mount(<Day {...props} />);
    wrapper.find('div').at(0).simulate('click');
    expect(props.focusDaily).toHaveBeenCalled();
    expect(props.updateActive).toHaveBeenCalled();

    wrapper.unmount();
  });
});
