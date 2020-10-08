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
  updateActive,
  updateCurrentWeather,
} from '../actions/actions';
import CONDITIONS from '../utilities/conditions';
import useMediaQuery from '../hooks/useMediaQuery';
import './App.css';

function App(props) {
  useEffect(() => {
    props.fetchWeather(coordinates, city);
  }, []);

  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <div
      className='App'
      style={style.background(props.fetched, matches, props.current.icon)}
    >
      <main>
        <SearchForm
          city={props.city}
          fetchCoordinates={props.fetchCoordinates}
        />
        <Current
          current={props.current}
          searched={props.searched}
          updateCurrentWeather={props.updateCurrentWeather}
          fetched={props.fetched}
        />
        {/* <HourlyGraph {...props} /> */}
      </main>
      <Daily
        focusDaily={props.focusDaily}
        daily={props.daily}
        updateActive={props.updateActive}
        active={props.active}
      />
    </div>
  );
}

const style = {
  background: (fetched, matches, icon) => {
    if (fetched && matches) {
      return {
        background: `url('https://i.ibb.co/${CONDITIONS[icon].large}/${CONDITIONS[icon].images}-medium.jpg') no-repeat center center`,
        backgroundSize: `cover`,
        backgroundAttachment: `fixed`,
      };
    } else if (fetched) {
      return {
        backgroundColor: `${CONDITIONS[icon].color}`,
      };
    } else {
      return {
        backgroundImage: 'linear-gradient(#7753ac, #d98cb3 25%)',
      };
    }
  },
};

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  fetchWeather,
  fetchCoordinates,
  updateCity,
  focusDaily,
  updateActive,
  updateCurrentWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
