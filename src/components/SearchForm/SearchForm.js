import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import './SearchForm.css';

export let SearchFormFields = (props) => {
  let [inputting, setInputting] = useState(false);

  return (
    <form
      id='search'
      name='search'
      onSubmit={(e) => {
        e.preventDefault();
        setInputting((prevState) => !prevState);
        props.fetchCoordinates(props.citySearch);
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
          name='citySearch'
          component='input'
          type='text'
          placeholder={props.city}
        ></Field>
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
  );
};

SearchFormFields = reduxForm({
  form: 'search',
})(SearchFormFields);

const SearchForm = (props) => {
  return (
    <header className='SearchForm'>
      <SearchFormFields {...props} />
      <p className='SearchForm__Date'>
        {moment().format('MMMM Do YYYY, h:mm a')}
      </p>
    </header>
  );
};

const selector = formValueSelector('search');

SearchFormFields = connect((state) => {
  const citySearch = selector(state, 'citySearch');
  return {
    citySearch,
  };
})(SearchFormFields);

export default SearchForm;
