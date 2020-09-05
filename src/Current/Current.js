import React, { useState } from 'react';
import lodash from 'lodash';
import './Current.css';

const Current = ({ current }) => {
  return (
    <section className='Current'>
      <div className='Current__Conditions'>
        <p>
          <span className='Current__Conditions_Temp'>
            {current.temp} &#176;
          </span>{' '}
        </p>
        <p>{lodash.startCase(current.condition)}</p>
        <p className='Current__Conditions_Hi_Temp'>
          <span>Hi {current.hi} &#176;</span>
          <span>&#183;</span>
          <span>Lo {current.lo} &#176;</span>
        </p>
      </div>
      <img src={require('../assets/weather-icon.png')}></img>
    </section>
  );
};

export default Current;
