import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import './SearchForm.css';

let SearchForm = (props) => {
  let [inputting, setInputting] = useState(false);
  let [city, setCity] = useState('');

  return (
    <header className='SearchForm'>
      <form
        id='search'
        name='search'
        onSubmit={(e) => {
          e.preventDefault();
          setInputting((prevState) => !prevState);
          props.fetchCoordinates(city);
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
          <input
            name='city'
            type='search'
            placeholder={props.city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
        ) : (
          <span
            onClick={() => {
              setInputting((prevState) => !prevState);
            }}
          >
            {props.city}
          </span>
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

export default SearchForm;
