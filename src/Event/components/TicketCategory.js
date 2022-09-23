import React from 'react';
import Button from '../../components/Button';
import './ticket-category.css';

const TicketCategory = ({ name, price, availableTicket, pallete }) => {
  return (
    <div className='ticket-wrapper'>
      <div className='ticket-type'>
        <div className={`${pallete}-setColor general`}></div>
        <div className='ticket-type-title'>{name}</div>
      </div>
      <div className='ticket-price'>{price}</div>
      <div className='quantity-container'>
        <p>Quantity</p>
        <div className='quantity-counter'>
          <div className='available-ticket'>{availableTicket}</div>
          <div className='ticket-input'></div>
        </div>
      </div>
      <div className='get-ticket'>
        <Button title={'Get Ticket'} variation='secondary' />
      </div>
    </div>
  );
};

export default TicketCategory;
