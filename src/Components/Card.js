import React from 'react';

const Card = ({ photo, title, description, rating }) => {
  return (
    <div className="card">
      <img src={photo} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="rating">
          {Array.from(Array(rating), (_, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
