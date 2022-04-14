import React from 'react';

// destructure props right away, without having to do declarations inside function body
const Card = ({
  title,
  date,
  desc,
  url,
  saveFavorite,
  removeFavorite,
  home,
}) => {
  console.log('Card img url: ', url);
  let cardClass;
  home
    ? (cardClass =
        'tc bg-light-green dib br3 pa3 ma3 bw2 shadow-5 flex flex-column vh-50 w-30-l w-40-m')
    : (cardClass =
        'tc bg-light-green dib br3 pa3 ma3 bw2 shadow-5 flex flex-column min-vh-100  w-100 w-75-ns');

  return (
    <div className={cardClass}>
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
        <div
          className="ma3 grow"
          onClick={home ? saveFavorite : removeFavorite}
        >
          <span className="bg-green pt1 pb1 pl3 pr3 br2 white">
            {home ? 'Add to Favorites' : 'Remove Favorite'}
          </span>
        </div>
        <p className="tl tj">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
