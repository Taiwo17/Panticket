import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-banner'>
        <div className='footer-logo'>
          <img src='/image/footer-logo.svg' alt='Footer logo' />
        </div>
        <div className='right-flex'>
          <div id='phone-container' className='flex-container'>
            <a href='tel: +23407069261648'>
              <img src='/image/phone-call.svg' alt='Phone' />
            </a>
            <a href='tel: +2347035549550' className='phone'>
              +234 703 5549 550
            </a>
          </div>

          <div id='email-container' className='flex-container icon'>
            <a href='mailto: hellod@panticket.ng'>
              <img src='/image/icon/Vector.png' alt='email' />
            </a>
            <a href='mailto: hello@panticket.ng' className='email'>
              hello@panticket.ng
            </a>
          </div>
          <div id='icon-container' className='flex-container'>
            <img src='/image/linkedin.svg' alt='linkedin' />
            <img src='/image/whatsapp.svg' alt='whatsapp' />
            <img src='/image/facebook.svg' alt='facebook' />
            <img src='/image/instagram.svg' alt='instagram' />
            <img src='/image/twitter.svg' alt='twitter' />
          </div>
        </div>
      </div>
      <div className='footer-caption'>
        <div>
          <small>2019 &copy; All right reversedby BoyePanthera.com</small>
        </div>
        <div>
          <small>Designed with ❤ by BlagMac Design</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
