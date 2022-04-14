import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import ErrorBoundary from './components/ErrorBoundary';
// import { API_KEY } from './Constants';
import './App.css';

// TESTING
import { loadedApods } from './Constants';
// import { favoriteApods } from './Constants';
///

// const count = 15;
// const apiKey = API_KEY;
// const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

// let favoriteApods = {};

function App() {
  // const [loadedApods, setLoadedApods] = useState([]);
  const [homePage, setHomePage] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [saveClicked, setSaveClicked] = useState(false);
  const [favoriteApods, setFavoriteApods] = useState({});

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

  const onSearchChange = event => {
    setSearchField(event.target.value);
  };

  const onSetHomePage = () => {
    setHomePage(!homePage);

    // check for clearing of error from favorites view
  };

  const onSaveFavorite = event => {
    console.log('onSaveFav target: ', event.target);
    loadedApods.forEach(apod => {
      if (apod.url === event.target.id && !favoriteApods[apod.url]) {
        console.log('favoriteApods: ', !favoriteApods[apod.url]);

        let currentApods = {};
        if (!favoriteApods) {
          currentApods[apod.url] = apod;
          console.log('currentApods: ', currentApods);
        } else {
          currentApods = { ...favoriteApods };
          currentApods[apod.url] = apod;
        }
        setFavoriteApods(currentApods);
        // console.log('favorites updated: ', favoriteApods);
        localStorage.setItem('nasaFavorites', JSON.stringify(favoriteApods));
        setSaveClicked(true);
        setTimeout(() => {
          setSaveClicked(false);
          console.log('timer done');
        }, 2000);
      }
    });

    //     // Set Favorites in localStorage
  };

  const onRemoveFavorite = event => {
    console.log('Favorite removed!');
    if (favoriteApods[event.target.id]) {
      let currentApods = { ...favoriteApods };
      delete currentApods[event.target.id];
      setFavoriteApods(currentApods);
      // Set Favorites in localStorage
      localStorage.setItem('nasaFavorites', JSON.stringify(favoriteApods));
    }
  };

  const filteredApods = loadedApods.filter(apod => {
    return apod.title.toLowerCase().includes(searchField.toLowerCase());
  });
  // console.log(filteredApods);

  useEffect(() => {
    onFetchTask();
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

        {homePage && !isLoading && loadedApods && (
          <ErrorBoundary>
            <CardList
              apodList={filteredApods}
              saveFavorite={onSaveFavorite}
              home={homePage}
            />
          </ErrorBoundary>
        )}

        {!homePage && !isLoading && favoriteApods && (
          <ErrorBoundary>
            <CardList
              apodList={favoriteApods}
              removeFavorite={onRemoveFavorite}
              favorites={favoriteApods}
              home={homePage}
            />
          </ErrorBoundary>
        )}

        {saveClicked && (
          <div className="save-confirmed">
            <h1 className="black">FAVORITE ADDED!</h1>
            <img src="../img/rocket2.png" alt="Rocket Loading Animation" />
          </div>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
