import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import './homepage.css';
import BigCard from '../components/BigCard';
import SearchPage from '../components/SearchPage';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <header className='home-header'>
        <div className='header-text'>
          <p className='text-content'>Connect and get ticket to </p>
          <p className='text-content'>events near you based on your</p>
          <p className='text-content'>interest</p>
        </div>
      </header>
      <section className='event-section'>
        <form action='' className='search-form'>
          <div className='search-input'>
            <Input placeholder='Search Event' />
          </div>
          <div className='category-input'>
            <Input placeholder='Categories' />
          </div>
          <div className='form-btn'>
            <Button title='Confirm Ticket' variation='secondary' />
          </div>
        </form>
        <div className='event-container'>
          <p className='section-title'>Event near you</p>
          <div className='events'>
            <Card
              image={'/image/image-1.png'}
              location='Lagos'
              price='N2000'
              date='10/10/2022'
              name='The Concert'
            />
            <Card
              image={'/image/image-2.png'}
              location='Lagos'
              price='N2000'
              date='10/10/2022'
              name='The Concert'
            />
            <Card
              image={'/image/image-3.png'}
              location='Lagos'
              price='N2000'
              date='10/10/2022'
              name='The Concert'
            />
            <Card
              image={'/image/image-4.png'}
              location='Lagos'
              price='N2000'
              date='10/10/2022'
              name='The Concert'
            />
            <Card
              image={'/image/image-5.png'}
              location='Lagos'
              price='N2000'
              date='10/10/2022'
              name='The Concert'
            />
            <Card
              image={'/image/image-6.png'}
              location='Lagos'
              price='N2000'
              date='10/10/2022'
              name='The Concert'
            />
            <Card
              image={'/image/image-7.png'}
              location='Lagos'
              price='N2000'
              date='10/10/2022'
              name='The Concert'
            />
            <Card
              image={'/image/image-8.png'}
              location='Lagos'
              price='N2000'
              date='10/10/2022'
              name='The Concert'
            />
            <Card
              image={'/image/image-5.png'}
              location='Lagos'
              price='N2000'
              date='10/10/2022'
              name='The Concert'
            />
            <Card
              image={'/image/image-8.png'}
              location='Lagos'
              price='N2000'
              date='10/10/2022'
              name='The Concert'
            />
          </div>
        </div>
        <div className='event-container'>
          <p className='section-title'>Featured Event</p>
          <div className='featured-section'>
            <BigCard
              name='The Concert'
              image={'/image/image-8.png'}
              location='Lagos'
              price='N2000'
              discount='20% off'
            />
            <BigCard
              name='The Concert'
              image={'/image/image-4.png'}
              location='Lagos'
              price='N2000'
              discount='20% off'
            />
          </div>
        </div>
        <div className='search-page'>
          <p className='search-title'>Search Result</p>
          <div className='search-result'>
            <SearchPage
              image={'/image/image-1.png'}
              title='Title'
              price='Price'
              date='Date'
              venue='Venue Address'
              attendance='# of Attendies'
              organiser='Organiser'
            />
            <SearchPage
              image={'/image/image-2.png'}
              title='Title'
              price='Price'
              date='Date'
              venue='Venue Address'
              attendance='# of Attendies'
              organiser='Organiser'
            />
            <SearchPage
              image={'/image/image-3.png'}
              title='Title'
              price='Price'
              date='Date'
              venue='Venue Address'
              attendance='# of Attendies'
              organiser='Organiser'
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
