import React from 'react';
import store from './testfixtures';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
export default function MyProvider(props) {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node,
};
