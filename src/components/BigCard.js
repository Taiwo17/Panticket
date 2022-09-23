import React from 'react';
import './big-card.css';

const BigCard = ({ image, discount, name, location, price }) => {
  return (
    <div className='bigcard-container'>
      <img src={`${image}`} alt='Event' />
      <div className='card-details'>
        <div className='card-title'>
          <p className='name'>{name}</p>
          <p className='price'>{price}</p>
        </div>
        <p className='location'>{location}</p>
        <p className='discount'>{discount}</p>
      </div>
    </div>
  );
};

export default BigCard;
