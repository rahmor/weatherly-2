import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Field, reduxForm } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import './SearchForm.css';

let SearchForm = (props) => {
  /*
  Get random city on loading and put in useState
  after lazy loading of info.  Info return will
  call action creator with returned info and will
  put all info into Redux store.

   *
   */
  const [CITIES] = useState({
    'New York': [40.7127281, -74.0060152],
    Atlanta: [33.7490987, -84.3901849],
    'Los Angeles': [34.0536909, -118.2427666],
    Miami: [25.7741728, -80.19362],
    'San Francisco': [37.7790262, -122.4199061],
    Chicago: [41.8755616, -87.6244212],
    'Washington, DC': [38.8949855, -77.0365708],
    Boston: [42.3602534, -71.0582912],
  });

  let [inputting, setInputting] = useState(false);
  console.log(props.city);
  return (
    <header className='SearchForm'>
      <form
        id='search'
        name='search'
        initialValues={{ city: props.city }}
        onSubmit={(e) => {
          e.preventDefault();
          setInputting((prevState) => !prevState);
        }}
      >
        <label className='App__Visually__Hidden' htmlFor='city'></label>
        <FontAwesomeIcon
          className='SearchForm__LocationArrow'
          icon={faLocationArrow}
        >
          Search by City
        </FontAwesomeIcon>
        {inputting ? (
          <Field
            id='search'
            name='city'
            component='input'
            type='text'
            placeholder={props.city}
          />
        ) : (
          <p
            onClick={() => {
              setInputting((prevState) => !prevState);
            }}
          >
            {props.city}
          </p>
        )}

        <button type='submit'>
          <FontAwesomeIcon
            className='SearchForm__Search'
            icon={faSearch}
          ></FontAwesomeIcon>
        </button>
      </form>
      <h6>{moment().format('MMMM Do YYYY, h:mm a')}</h6>
    </header>
  );
};

SearchForm = reduxForm({
  form: 'form',
})(SearchForm);

export default SearchForm;
