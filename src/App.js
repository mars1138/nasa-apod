import React, { useState, useEffect, Suspense } from 'react';
import CardList from './components/CardList';
// import SearchBox from '../components/SearchBox';
// import ErrorBoundary from '../components/ErrorBoundary';
import { API_KEY } from './Constants';
import './App.css';

const count = 8;
const apiKey = API_KEY;
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

function App() {
  const [loadedApods, setLoadedApods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [searchfield, setSearchField] = useState('');

  useEffect(() => {
    try {
      fetch(apiUrl)
        .then(response => response.json())
        .then(results => setLoadedApods(results));

      setIsLoading(false);
    } catch (err) {
      console.log('Error!');
    }
  }, []);

  // using arrow function allows this to be set to App class
  // const onSearchChange = (event) => {
  //   setSearchField(event.target.value);
  // };

  // const filteredApods = apods.filter((picture) => {
  //   return picture.title.toLowerCase().includes(searchfield.toLowerCase());
  // });
  // console.log(filteredApods);
  // console.log(apods, searchfield);
  return (
    <React.Fragment>
      <header>
        <div className="tc flex flex-column bg-light-green bb b--gray">
          <h1 className="f1 w-100">NASA Astronomy Pictures of the Day</h1>
          {/* <SearchBox searchChange={onSearchChange} /> */}
        </div>
      </header>
      {isLoading && (
        <div className="tc">
          <h1>Loading....</h1>
        </div>
      )}
      {!isLoading && loadedApods && (
        <div className="tc flex flex-wrap items-stretch bg-light-green">
          <Suspense
            fallback={
              <div className="tc">
                <h1>Loading Pictures....</h1>
              </div>
            }
          >
            {/* <ErrorBoundary> */}
            <CardList apodList={loadedApods} />
            {/* </ErrorBoundary> */}
          </Suspense>
        </div>
      )}
    </React.Fragment>

    //   <h1 className="f1">Loading...</h1>
    // ) : (
    //   <div className="tc">
    //     <header>
    //       <h1 className="f1">NASA Astronomy Pictures of the Day</h1>
    //       {/* <SearchBox searchChange={onSearchChange} /> */}
    //     </header>
    //     <Suspense
    //       fallback={
    //         <div className="tc">
    //           <h1>Loading Pictures....</h1>
    //         </div>
    //       }
    //     >
    //       {/* <ErrorBoundary> */}
    //       <CardList apodList={apods} />;{/* </ErrorBoundary> */}
    //     </Suspense>
    //   </div>
  );
}

export default App;
