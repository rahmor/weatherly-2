import React, { useState } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import './HourlyGraph.css';

const HourlyGraph = () => {
  return <div className='HourlyGraph'>{renderLineChart}</div>;
};

const data = [
  { name: 'Mon', temp: 80, pv: 2400, amt: 2400 },
  { name: 'Tue', temp: 66, pv: 2400, amt: 2400 },
  { name: 'Wed', temp: 54, pv: 2400, amt: 2400 },
  { name: 'Thur', temp: 100, pv: 2400, amt: 2400 },
];

const renderLineChart = (
  <ResponsiveContainer width='50%' height={200}>
    <LineChart data={data}>
      <Line type='monotone' dataKey='temp' stroke='#8884d8'>
        <LabelList dataKey='temp' position='top' />
      </Line>
      {/* <CartesianGrid stroke='#ccc' /> */}
      <XAxis orientation='top' dataKey='name'></XAxis>
    </LineChart>
  </ResponsiveContainer>
);

export default HourlyGraph;
