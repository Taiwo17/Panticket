import React from 'react';
import './card.css';
const Card = ({ image, location, price, date, name }) => {
  return (
    <div className='card-container'>
      <img src={`${image}`} alt='Event' />
      <div className='card-details'>
        <p className='name'>{name}</p>
        <p className='date'>{date}</p>
        <p className='location'>{location}</p>
        <p className='price'>{price}</p>
      </div>
    </div>
  );
};

export default Card;
