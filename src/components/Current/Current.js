import React from 'react';
import lodash from 'lodash';
import CONDITIONS from '../../utilities/conditions';
import './Current.css';

const Current = ({ current, fetched, matches }) => {
  return (
    <section
      style={style.background(current.icon, fetched)}
      className='Current'
    >
      <div className='Current__Spacer'></div>
      <div
        style={style.conditions(current.icon, matches, fetched)}
        className='Current__Conditions__Container'
      >
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
        <img
          src={`https://openweathermap.org/img/wn/${current.icon}@4x.png`}
          srcSet={`https://openweathermap.org/img/wn/${current.icon}@2x.png 100w, 
        http://openweathermap.org/img/wn/${current.icon}@4x.png 200w`}
          sizes={`(min-width:768) 100w , 200w`}
          alt='Weather Icon'
        ></img>
      </div>
    </section>
  );
};

export const style = {
  background: (icon, fetched) => {
    if (fetched) {
      return {
        background: `url('https://i.ibb.co/${CONDITIONS[icon].small}/${CONDITIONS[icon].image}-small.jpg') no-repeat center center/cover`,
        transition: `background 1s ease`,
      };
    }
  },
  conditions: (icon, matches, fetched) => {
    if (fetched && matches) {
      return {
        backgroundColor: `${CONDITIONS[icon].solid}`,
        backdropFilter: `blur(5px)`,
      };
    }
  },
};
export default Current;
