import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App, { App as ComponentApp } from '../components//App/App';
import { initialState } from '../utilities/testfixtures';
import MyProvider from '../utilities/testutilities';

jest.mock('moment', () => {
  return () => jest.requireActual('moment')('2020-01-01T00:00:00.000Z');
});

jest.mock('../utilities/utilities', () => {
  const utilities = jest.requireActual('../utilities/utilities');
  return {
    ...utilities,
    coordinates: [40.7127281, -74.0060152],
    city: 'New York',
  };
});

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

  const fetchWeather = jest.fn(() => {
    return { 'New York': [40.7127281, -74.0060152] };
  });

  it('should match snapshot', () => {
    const wrapper = shallow(
      <ComponentApp
        fetchWeather={fetchWeather}
        current={initialState.current}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
    wrapper.unmount();
  });

  it('should call fetchWeather', () => {
    const wrapper = mount(
      <ComponentApp
        current={initialState.current}
        daily={initialState.daily}
        fetchWeather={fetchWeather}
      />
    );
    expect(fetchWeather).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  describe('tree', () => {
    it('should match snapshot', () => {
      const wrapper = mount(
        <ComponentApp
          current={initialState.current}
          daily={initialState.daily}
          fetchWeather={fetchWeather}
        />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should update current', () => {
      const wrapper = mount(
        <MyProvider>
          <App />
        </MyProvider>
      );
      wrapper.find('.Day').at(2).simulate('click');
      const Current = wrapper.find('.Current__Conditions').find('p').at(1);
      expect(Current.text()).toEqual('Scattered Clouds');
    });
  });
});
