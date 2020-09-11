import React from 'react';
import Day from '../Day/Day';
import './Daily.css';

const Daily = ({ daily, focusDaily }) => {
  return (
    <section className='Daily'>
      {daily.map((daily, i) => {
        return <Day key={i} daily={daily} focusDaily={focusDaily} />;
      })}
    </section>
  );
};

export default Daily;
