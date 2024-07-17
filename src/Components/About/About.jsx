import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div id='about-us' className='about'>
      <div className='about__left'>
        <img
          className='about__left__img'
          src={about_img}
          alt='graduated students'
        />
        <img
          className='about__left__icon--play'
          src={play_icon}
          alt='play icon'
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>

      <div className='about__right'>
        <h3 className='about__right__title'>About University</h3>
        <h2 className='about__right__subTitle'>
          Nurturin Tomorrow's Leaders Today
        </h2>

        <p className='about__text'>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className='about__text'>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p className='about__text'>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
