import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer__text'>© 2024 Edusity. All rights reserved.</p>
      
      <ul className='footer__list'>
        <li className='footer__list-item'>Terms of Services</li>
        <li className='footer__list-item'>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
