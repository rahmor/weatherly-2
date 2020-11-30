import React from 'react';
import Current, { style } from '../components/Current/Current';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { initialState } from '../utilities/testfixtures';

describe('<Current> component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Current {...initialState} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should render correct background', () => {
    const wrapper = mount(<Current {...initialState} />);
    const node = wrapper.find('section');
    expect(node.prop('style')).toEqual(
      style.background(initialState.current.icon, true)
    );
    wrapper.unmount();
  });
});
