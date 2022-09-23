import React from 'react';
import BookTicket from './BookTicket';
import './content.css';
import TicketCategory from './TicketCategory';

const Content = () => {
  return (
    <section className='main-container'>
      <div className='event-content-container'>
        <div className='event-info'>
          <p className='info-title'>Event Description</p>
          <div className='info-description'>
            The play, "Pelumi," is a musical love story that revolves around
            Pelumi, a woman who was in a relationship with Adigun, a man with
            direction and purpose, but felt pressured by her mother to find love
            with someone else because of her mother's wealth and availability.
            You won’t want to miss this show on this year valentine.
          </div>
        </div>
        <div className='event-info'>
          <p className='info-title'>Date and Time</p>
          <div className='info-description'>
            <p className='date'>14th Feburary, 2022</p>
            <p className='time'>5PM Prompt</p>
          </div>
        </div>
        <div className='event-info'>
          <p className='info-title'>Venue</p>
          <div className='info-description'>
            Oduduwa Hall, Obafemi Awolowo University, Ile-Ife, Osun State
          </div>
        </div>
      </div>

      <div className='ticket-container'>
        <p className='ticket-title'>Get your Ticket</p>
        <div className='ticket-category'>
          <TicketCategory
            name={'Regular Ticket'}
            price={'N10, 000'}
            availableTicket='10'
            pallete={'vip'}
          />
        </div>
        <div className='ticket-category'>
          <TicketCategory
            name={'VIP Ticket'}
            price={'N10, 000'}
            availableTicket='10'
            pallete={'regular'}
          />
        </div>
        <div className='ticket-category'>
          <TicketCategory
            name={'Premium Ticket'}
            price={'N10, 000'}
            availableTicket='10'
            pallete={'premium'}
          />
        </div>
        <div className='ticket-category'>
          <TicketCategory
            name={'Royalty Ticket'}
            price={'N10, 000'}
            availableTicket='10'
            pallete={'royalty'}
          />
        </div>
      </div>
      <BookTicket />
    </section>
  );
};

export default Content;
