import React, { useState } from 'react';
import './Current.css';

const Current = () => {
  return (
    <section className='Current'>
      <p>
        <span>79 &#176;</span>{' '}
        <img src={require('../assets/weather-icon.png')}></img>
      </p>
      <p>Mostly Cloudy</p>
      <p>
        <span>Hi: 88 &#176;</span>
        <span>Lo 62 &#176;</span>
      </p>
    </section>
  );
};

export default Current;
