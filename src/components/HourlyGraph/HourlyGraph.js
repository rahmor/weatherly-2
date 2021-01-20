import React from 'react';
import moment from 'moment';
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import './HourlyGraph.css';

const HourlyGraph = ({ hourly, fetched }) => {
  if (fetched) {
    return <div className='HourlyGraph'>{renderLineChart(hourly)}</div>;
  } else {
    return <></>;
  }
};

const renderLineChart = (hourly) => {
  const data = hourly.hours.map((hour) => {
    return {
      temp: hour.temp.toFixed(),
      hour: moment.utc((hour.dt + hourly.timezone) * 1000).format('ha'),
    };
  });

  return (
    <ResponsiveContainer width='100%' height={200}>
      <AreaChart
        margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
        data={data}
      >
        <defs>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='hour' orientation='bottom' />
        <Area
          type='monotone'
          dataKey='temp'
          stroke='#8884d8'
          fillOpacity={1}
          fill='url(#colorPv)'
        >
          <LabelList dataKey='temp' position='top' />
        </Area>
        <CartesianGrid stroke='#ccc' />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default HourlyGraph;
