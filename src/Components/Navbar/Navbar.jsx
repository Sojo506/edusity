import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`nav container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='logo' className='nav__logo' />

      <ul className={`nav__links ${mobileMenu ? 'show-mobile-menu' : ''}`}>
        <li className='nav__item'>
          <Link to='hero' smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>

        <li className='nav__item'>
          <Link to='program' smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>

        <li className='nav__item'>
          <Link to='about-us' smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>

        <li className='nav__item'>
          <Link to='campus' smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>

        <li className='nav__item'>
          <Link to='testimonials' smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>

        <li className='nav__item'>
          <Link
            className='btn'
            to='contact-us'
            smooth={true}
            offset={-260}
            duration={500}
          >
            Contact us
          </Link>
        </li>
      </ul>

      <img
        src={menu_icon}
        alt='menu icon'
        className='nav__menu-icon'
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
