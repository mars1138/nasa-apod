import React, { useState, useEffect } from 'react';
// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
// import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

function App() {
  const [apods, setApods] = useState([]);
  const [searchfield, setSearchField] = useState('');

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((entries) => setApods(entries));
  }, []);

  // using arrow function allows this to be set to App class
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  // const filteredApods = apods.filter((picture) => {
  //   return picture.title.toLowerCase().includes(searchfield.toLowerCase());
  // });
  // console.log(filteredApods);
  // console.log(apods, searchfield);
  return !apods.length ? (
    <h1 className="f1">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">NASA Astronomy Pictures of the Day</h1>
      {/* <SearchBox searchChange={onSearchChange} /> */}
      {/* <ErrorBoundary> */}
      {/* <CardList pictures={filteredApods} />; */}
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
