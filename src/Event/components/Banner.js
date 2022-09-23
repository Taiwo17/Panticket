import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <img src='/image/event-banner.png' alt='Event Banner' />
      <div className='banner-caption'>
        <p className='banner-title'>Pelumi</p>
        <p className='text'>A musical play by Muyiwa Adigun </p>
      </div>
    </div>
  );
};

export default Banner;
