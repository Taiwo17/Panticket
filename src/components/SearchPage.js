import React from 'react';
import './search-page.css';

const SearchPage = ({
  image,
  title,
  price,
  date,
  venue,
  attendance,
  organiser,
}) => {
  return (
    <div className='search-container'>
      <div className='search-images'>
        <img src={`${image}`} alt='Search' />
      </div>
      <div className='search-details'>
        <div className='details'>
          <p className='search-paragraph'>{title}</p>
          <p className='search-paragraph'>{date}</p>
          <p className='search-paragraph'>{venue}</p>
          <p className='search-paragraph'>{attendance}</p>
        </div>
        <div>
          <p className='organiser-details'>{organiser}</p>
        </div>
      </div>
      <div className='price-details'>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default SearchPage;
