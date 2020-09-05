import React from 'react';
import Day from '../Day/Day';
import './Daily.css';

const Daily = ({ daily }) => {
  return (
    <section className='Daily'>
      {daily.map((daily, i) => {
        return <Day key={i} daily={daily} />;
      })}
    </section>
  );
};

export default Daily;
