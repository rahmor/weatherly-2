import React, { Component } from 'react';

import './Day.css';

const Day = ({ daily, i }) => {
  return (
    <div className='Day' key={i}>
      <h3>
        {new Date(daily.dt * 1000).toLocaleDateString('en-us', {
          weekday: 'long',
        })}
      </h3>
      {/* <p>Icon</p> */}
      {/* daily.weather[0].description */}
      <p>
        <span>Hi {daily.temp.max.toFixed()} &#176;</span> <span>&#183;</span>
        {'  '}
        <span>Lo {daily.temp.min.toFixed()} &#176;</span>
      </p>
    </div>
  );
};

export default Day;
