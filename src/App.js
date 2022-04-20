import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import CardList from './components/CardList';
import ErrorBoundary from './components/ErrorBoundary';
import { ParticlesContainer } from './components/Particles.tsx';
import './App.css';
import RocketLoader from './img/rocket2.svg';

import { API_KEY } from './Constants';

const saveConfirmed = document.querySelector('.save-confirmed');
const count = 18;
// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = API_KEY;
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

function App() {
  const [loadedApods, setLoadedApods] = useState([]);
  const [homePage, setHomePage] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [favoriteApods, setFavoriteApods] = useState([]);

  saveConfirmed.style.visibility = 'visible';

  const onFetchTask = () => {
    setIsLoading(true);
    try {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((results) => setLoadedApods(results));
    } catch (err) {
      console.log('Error retrieving pictures!');
    }
    setIsLoading(false);
  };

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const onSetHomePage = () => {
    setHomePage(!homePage);
  };

  const onSaveFavorite = (event) => {
    const alreadySaved = favoriteApods.find((el) => el.url === event.target.id);
    if (!event.target.id || alreadySaved) return;

    const newFavorite = loadedApods.filter((apod) => {
      return apod.url === event.target.id;
    });

    let newArray = [...favoriteApods];
    newArray.push(newFavorite[0]);
    localStorage.setItem('nasaFavorites', JSON.stringify(newArray));
    setFavoriteApods(newArray);

    saveConfirmed.style.opacity = 1;

    setTimeout(() => {
      saveConfirmed.style.opacity = 0;
    }, 1250);
  };

  const onRemoveFavorite = (event) => {
    let currentApods = favoriteApods.filter(
      (apod) => apod.url !== event.target.id
    );
    setFavoriteApods(currentApods);
    localStorage.setItem('nasaFavorites', JSON.stringify(currentApods));
  };

  const getFavorites = () => {
    const currentFavs = JSON.parse(localStorage.getItem('nasaFavorites'));
    if (currentFavs) setFavoriteApods(currentFavs);
  };

  const filteredApods = loadedApods.filter((apod) => {
    return apod.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const onLoadMore = () => {
    setLoadedApods([]);
    onFetchTask();
  };

  useEffect(() => {
    onFetchTask();
    getFavorites();
  }, []);

  return (
    <React.Fragment>
      <ParticlesContainer />
      <Header
        home={homePage}
        setHomePage={onSetHomePage}
        loadMore={onLoadMore}
        searchChange={onSearchChange}
      />

      <main className=" min-vh-100 pt3 pb3">
        {isLoading ||
          (!loadedApods.length && <Loader rocketLoader={RocketLoader} />)}

        {!isLoading && loadedApods.length && (
          <ErrorBoundary>
            <CardList
              apodList={homePage ? filteredApods : favoriteApods}
              saveFavorite={onSaveFavorite}
              removeFavorite={onRemoveFavorite}
              home={homePage}
            />
          </ErrorBoundary>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
