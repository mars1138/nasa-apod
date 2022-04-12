import React from 'react';

// destructure props right away, without having to do declarations inside function body
const Card = ({ title, date, desc, url }) => {
  return (
    <div className="tc bg-lightest-blue dib br3 pa3 ma2 dim bw2 shadow-5 w-20 flex flex-column vh-75">
      <div className="h-25 overflow-hidden">
        <img src={url} alt={title} />
      </div>
      <div className="h-75 overflow-hidden">
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
