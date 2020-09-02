import React, { useState, useEffect } from 'react';
import Daily from '../Daily/Daily';
import Current from '../Current/Current';
import SearchForm from '../SearchForm/SearchForm';
import HourlyGraph from '../HourlyGraph/HourlyGraph';
import { coordinates, city } from '../utilities/utilities';
import { connect } from 'react-redux';
import { fetchWeather, updateCity } from '../actions/actions';
import './App.css';

function App(props) {
  useEffect(() => {
    props.fetchWeather(coordinates, city);
  }, []);
  console.log(city);
  return (
    <div className='App'>
      <SearchForm props={{ ...props, city }} />
      <main>
        <Current {...props} />
        <HourlyGraph {...props} />
        <Daily {...props} />
      </main>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  fetchWeather,
  updateCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
