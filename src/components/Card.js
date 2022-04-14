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
        'tc bg-light-green dib br3 pa3 ma3 bw2 shadow-5 flex flex-column vh-75 w-30-l w-40-m')
    : (cardClass =
        'tc bg-light-green dib br3 pa3 ma3 bw2 shadow-5 flex flex-column w-50-ns');

  return (
    <div className={cardClass}>
      {home && (
        <div
          className="h-50 overflow-hidden pt1"
          style={{
            backgroundImage: `url(${url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <a href={url} className="white" target="_blank" rel="noreferrer">
            {date}
          </a>
        </div>
      )}
      {!home && <img src={url} alt={title} />}
      <div className="h-50 overflow-hidden">
        <h3>{title}</h3>
        <div
          className="ma3 grow"
          onClick={home ? saveFavorite : removeFavorite}
        >
          <span
            className="f6 grow br2 ph3 pv2 mb2 dib white bg-dark-green"
            id={url}
          >
            {home ? 'Add to Favorites' : 'Remove Favorite'}
          </span>
        </div>
        <p className="tl tj">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
