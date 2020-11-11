import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { App } from '../App/App';
import { initialState } from '../utilities/testfixtures';

describe('< App /> component', () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  const fetchWeather = jest.fn();

  it('should match snapshot', () => {
    const wrapper = shallow(
      <App fetchWeather={fetchWeather} current={initialState.current} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
    wrapper.unmount();
  });

  it('should call fetchWeather', () => {
    const wrapper = mount(
      <App
        current={initialState.current}
        daily={initialState.daily}
        fetchWeather={fetchWeather}
      />
    );
    expect(fetchWeather).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  it('should render correct background', () => {});
});
