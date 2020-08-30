import React, { useState } from 'react';
import moment from 'moment';
import { Field, reduxForm } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import './SearchForm.css';

let SearchForm = () => {
  return (
    <header className='SearchForm'>
      <form>
        <label className='App__Visually__Hidden' htmlFor='firstName'></label>
        <FontAwesomeIcon
          className='SearchForm__LocationArrow'
          icon={faLocationArrow}
        >
          Search by City
        </FontAwesomeIcon>
        <Field
          name='firstName'
          component='input'
          type='text'
          placeholder='Atlanta, Ga'
        />
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
  form: 'search',
})(SearchForm);

export default SearchForm;
