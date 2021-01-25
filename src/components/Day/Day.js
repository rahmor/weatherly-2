import React from 'react';

import './Day.css';

const Day = ({ daily, i, focusDaily, updateActive, active }) => {
  return (
    <div
      className={`Day ${i === active ? 'active' : null}`}
      onClick={() => {
        focusDaily(daily);
        updateActive(i);
      }}
    >
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
