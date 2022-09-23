import React from 'react';
import Button from './Button';
import logo from './Pantiket.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='cta-container'>
        <Button variation='primary' title={'Confirm Ticket'} />
      </div>
    </nav>
  );
};

export default Navbar;
