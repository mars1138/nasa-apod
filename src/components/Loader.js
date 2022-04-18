import React from 'react';

const Loader = ({ rocketLoader }) => {
  return (
    <div className="bg-black yellow vh-75-ns flex flex-column items-center justify-start pt5">
      <h1>Loading....</h1>
      <div className="vh-25 w5 tc flex items-center justify-center">
        <img
          src={rocketLoader}
          alt="Rocket Loading Animation"
          className="w-75 h-75"
        />
      </div>
    </div>
  );
};

export default Loader;
