import React from 'react';

const Card = ({
  title,
  date,
  desc,
  url,
  hdurl,
  saveFavorite,
  removeFavorite,
  home,
}) => {
  const cardClass =
    'tc bg-light-green dib br3 pa3 ma3 bw2 shadow-5 flex flex-column' +
    (home ? ' vh-75 w-30-l w-40-m' : ' w-50-ns');

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
          <a href={hdurl} className="white" target="_blank" rel="noreferrer">
            {date}
          </a>
        </div>
      )}
      {!home && (
        <a href={hdurl} target="_blank" rel="noreferrer">
          <img src={url} alt={title} />
        </a>
      )}
      <div className={`${home ? 'h-50' : ''} overflow-hidden`}>
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
