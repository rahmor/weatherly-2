import React, { useState, useEffect } from 'react';
import Daily from '../Daily/Daily';
import Current from '../Current/Current';
import SearchForm from '../SearchForm/SearchForm';
import HourlyGraph from '../HourlyGraph/HourlyGraph';
import { coordinates, city } from '../utilities/utilities';
import { connect } from 'react-redux';
import {
  fetchWeather,
  fetchCoordinates,
  updateCity,
  focusDaily,
} from '../actions/actions';
import './App.css';

function App(props) {
  useEffect(() => {
    props.fetchWeather(coordinates, city);
  }, []);

  return (
    <div className='App'>
      <main>
        <SearchForm
          city={props.city}
          fetchCoordinates={props.fetchCoordinates}
        />
        <Current current={props.current} />
        {/* <HourlyGraph {...props} /> */}
      </main>
      <Daily focusDaily={props.focusDaily} daily={props.daily} />
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  fetchWeather,
  fetchCoordinates,
  updateCity,
  focusDaily,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
