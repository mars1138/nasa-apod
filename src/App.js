import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import ErrorBoundary from './components/ErrorBoundary';
// import { API_KEY } from './Constants';
import './App.css';

// TESTING
import { loadedApods } from './Constants';
// import { favoriteApods } from './Constants';
// localStorage.clear();
///

const saveConfirmed = document.querySelector('.save-confirmed');
// const count = 15;
// const apiKey = API_KEY;
// const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

// let favoriteApods = {};

function App() {
  // const [loadedApods, setLoadedApods] = useState([]);
  const [homePage, setHomePage] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [favoriteApods, setFavoriteApods] = useState([]);

  const onFetchTask = () => {
    setIsLoading(true);
    // try {
    //   fetch(apiUrl)
    //     .then((response) => response.json())
    //     .then((results) => setLoadedApods(results));
    setIsLoading(false);
    // } catch (err) {
    //   console.log('Error!');
    // }
    // console.log('loadedApods: ', loadedApods);
  };

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const onSetHomePage = () => {
    setHomePage(!homePage);
  };

  const onSaveFavorite = (event) => {
    const alreadySaved = favoriteApods.find((el) => el.url === event.target.id);
    console.log('alreadysaved?: ', alreadySaved);
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
    console.log('currentFavs: ', currentFavs);
    if (currentFavs) setFavoriteApods(currentFavs);
  };

  const filteredApods = loadedApods.filter((apod) => {
    return apod.title.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    onFetchTask();
    getFavorites();
  }, []);

  return (
    <React.Fragment>
      <header>
        <div className="tc flex flex-column items-center bg-dark-blue bb b--gray lightest-blue pl3 pr3 w-100">
          <h1 className="f2 f1-l w-100 mb0">
            NASA Astronomy Pictures of the Day
          </h1>
          {homePage ? (
            <div className="flex flex-wrap justify-center items-center mb4 w-100">
              <div className="grow ma2" onClick={onSetHomePage}>
                <h3 className="bg-green pt1 pb1 pl3 pr3 br2 white">
                  Favorites
                </h3>
              </div>
              <div className="grow ma2">
                <h3 className="bg-green pt1 pb1 pl3 pr3 br2 white">
                  Load More
                </h3>
              </div>
              <SearchBox searchChange={onSearchChange} />
            </div>
          ) : (
            <div className="flex flex-wrap justify-center items-center mb4 w-100">
              <h2 className="ma3">Favorites View</h2>
              <div className="grow mt2 mb2 ml3 mr3" onClick={onSetHomePage}>
                <h3 className="bg-green pt1 pb1 pl3 pr3 br2 white">
                  Search View
                </h3>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="bg-black min-vh-100 pt3 pb3">
        {isLoading && (
          <div className="bg-blue yellow vh-75 flex flex-column items-center justify-start pt5">
            <h1>Loading....</h1>
            <div className="vh-25 w5 ba">
              <img src="../img/rocket2.png" alt="Rocket Loading Animation" />
            </div>
          </div>
        )}

        {!isLoading && loadedApods && (
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
