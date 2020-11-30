import React from 'react';
import Day from '../Day/Day';
import './Daily.css';

const Daily = ({ daily, focusDaily, updateActive, active }) => {
  return (
    <section className='Daily'>
      {daily.map((daily, i) => {
        return (
          <Day
            i={i}
            key={i}
            daily={daily}
            focusDaily={focusDaily}
            updateActive={updateActive}
            active={active}
          />
        );
      })}
    </section>
  );
};

export default Daily;
