import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div id='hero' className='hero container'>
      <div className='hero__content'>
        <h1 className='hero__title'>
          We Ensure better education for a better world
        </h1>
        <p className='hero__text'>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and expperiences needed to excel in the dynamic
          field of education
        </p>
        <button className='hero__btn btn'>
          Explore more <img src={dark_arrow} alt='dark arrow' />
        </button>
      </div>
    </div>
  );
};

export default Hero;
