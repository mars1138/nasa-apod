import React from 'react';

// destructure props right away, without having to do declarations inside function body
const Card = ({ title, date, desc, url, saveToFavorites }) => {
  console.log('Card img url: ', url);
  // const imgStyle = {backgroundImage: };
  // console.log('imgStyle: ', imgStyle);
  return (
    <div className="tc bg-light-green dib br3 pa3 ma3 bw2 shadow-5 flex flex-column vh-50 w-30-l w-40-m">
      <div
        className="h-50 overflow-hidden"
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* <img style={imgStyle} alt={title} className="h-100 w-100" /> */}
      </div>
      <div className="h-50 overflow-hidden">
        <h3>{title}</h3>
        {/* <small>{date}</small> */}
        <div className="ma3 grow" onClick={saveToFavorites}>
          <span className="bg-green pt1 pb1 pl3 pr3 br2 white">
            Add to Favorites
          </span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
