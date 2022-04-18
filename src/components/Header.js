import React from 'react';
import SearchBox from './SearchBox';

const Header = ({ home, setHomePage, loadMore, searchChange }) => {
  return (
    <div className="tc flex flex-column items-center bg-dark-blue bb b--gray lightest-blue pl3 pr3 w-100">
      <h1 className="f2 f1-l w-100 mb0">NASA Astronomy Pictures of the Day</h1>
      {home ? (
        <div className="flex flex-wrap justify-center items-center mb4 w-100">
          <div className="grow ma2" onClick={setHomePage}>
            <h3 className="bg-green pt1 pb1 pl3 pr3 br2 white">Favorites</h3>
          </div>
          <div className="grow ma2" onClick={loadMore}>
            <h3 className="bg-green pt1 pb1 pl3 pr3 br2 white">Load More</h3>
          </div>
          <SearchBox searchChange={searchChange} />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center mb4 w-100">
          <h2 className="ma3">Favorites View</h2>
          <div className="grow mt2 mb2 ml3 mr3" onClick={setHomePage}>
            <h3 className="bg-green pt1 pb1 pl3 pr3 br2 white">Search View</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
