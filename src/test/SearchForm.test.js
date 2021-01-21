import SearchForm, {
  SearchFormFields,
} from '../components/SearchForm/SearchForm';
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import { combineReducers } from 'redux';
import MyProvider from '../utilities/testutilities';
import { initialState } from '../utilities/testfixtures';
import reducers from '../reducers/reducers';
import { reducer as formReducer } from 'redux-form';
import { reduxForm } from 'redux-form';

const mockStore = configureMockStore();
const store = mockStore(initialState);
store.replaceReducer(combineReducers({ ...reducers, form: formReducer }));

jest.mock('moment', () => {
  return () => jest.requireActual('moment')('2020-01-01T00:00:00.000Z');
});

describe('SearchForm component', () => {
  const props = { fetchCoordinates: jest.fn(), city: 'New York' };

  it('should match snapshot', () => {
    const wrapper = shallow(<SearchForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });

  describe('when mounted', () => {
    const Decorated = reduxForm({
      form: 'search',
    })(SearchFormFields);

    const wrapper = mount(
      <MyProvider>
        <Decorated {...props} />
      </MyProvider>
    );

    afterAll(() => {
      wrapper.unmount();
    });

    it('node should contain <Field /> element when span clicked', () => {
      wrapper.find('span').simulate('click');
      const searchField = wrapper.find('Field');
      expect(searchField).toBeTruthy();
    });

    it('should call renderProps', () => {
      wrapper
        .find('form')
        .at(0)
        .simulate('submit', { preventDefault: jest.fn() });
      expect(props.fetchCoordinates).toHaveBeenCalled();
    });
  });
});
