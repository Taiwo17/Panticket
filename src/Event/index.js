import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from './components/Banner';
import Content from './components/Content';
import Overlay from '../components/Overlay';

const Event = () => {
  return (
    <>
      <Overlay>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        quasi minima quia ipsum nam minus quidem quo nobis totam? Perferendis.
      </Overlay>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </>
  );
};

export default Event;
