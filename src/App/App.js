import React, { useState, useEffect } from 'react';
import Daily from '../Daily/Daily';
import Current from '../Current/Current';
import SearchForm from '../SearchForm/SearchForm';
import HourlyGraph from '../HourlyGraph/HourlyGraph';
import { coordinates, city } from '../utilities/utilities';
import { connect } from 'react-redux';
import { fetchWeather, fetchCoordinates, updateCity } from '../actions/actions';
import './App.css';

function App(props) {
  useEffect(() => {
    props.fetchWeather(coordinates, city);
  }, []);

  return (
    <div className='App'>
      <SearchForm city={props.city} fetchCoordinates={props.fetchCoordinates} />
      <main>
        <Current current={props.current} />
        {/* <HourlyGraph {...props} /> */}
        <Daily daily={props.daily} />
      </main>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
