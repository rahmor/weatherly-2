import React from 'react';
import Daily from '../Daily/Daily';
import Current from '../Current/Current';
import SearchForm from '../SearchForm/SearchForm';
import HourlyGraph from '../HourlyGraph/HourlyGraph';
import './App.css';

function App() {
  return (
    <div className='App'>
      <SearchForm />
      <main>
        <Current />
        <HourlyGraph />
        <Daily />
      </main>
    </div>
  );
}

export default App;
