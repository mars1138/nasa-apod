import React from 'react';

// destructure props right away, without having to do declarations inside function body
const Card = ({ title, date, explanation, url }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={url} alt={title} />
      <div>
        <h2>{title}</h2>
        <small>{date}</small>
        <p>{explanation}</p>
      </div>
    </div>
  );
};

export default Card;
