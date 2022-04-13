import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="w-50-ns w-100 w-25-l ma2">
      <input
        className="pa3 ba br2 w-100"
        type="search"
        placeholder="Search results"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
