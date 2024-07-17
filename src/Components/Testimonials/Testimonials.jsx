import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider__list = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }

    slider__list.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }

    slider__list.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div id='testimonials' className='testimonials'>
      <img
        className='next-btn'
        src={next_icon}
        alt='arrow next icon'
        onClick={slideForward}
      />
      <img
        className='back-btn'
        src={back_icon}
        alt='arrow back icon'
        onClick={slideBackward}
      />

      <div className='slider'>
        <ul className='slider__list' ref={slider__list}>
          <li className='slider__item'>
            <div className='slider__slide'>
              <div className='slider__user-info'>
                <img
                  className='slider__user-image'
                  src={user_1}
                  alt='story person'
                />

                <div className='slider__user-details'>
                  <h3 className='slider__user-name'>Emily Brown</h3>
                  <span className='slider__user-location'>Edusity, USA</span>
                </div>
              </div>

              <p className='slider__testimonial'>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li className='slider__item'>
            <div className='slider__slide'>
              <div className='slider__user-info'>
                <img
                  className='slider__user-image'
                  src={user_2}
                  alt='story person'
                />

                <div className='slider__user-details'>
                  <h3 className='slider__user-name'>Michael Davis</h3>
                  <span className='slider__user-location'>Edusity, USA</span>
                </div>
              </div>

              <p className='slider__testimonial'>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li className='slider__item'>
            <div className='slider__slide'>
              <div className='slider__user-info'>
                <img
                  className='slider__user-image'
                  src={user_3}
                  alt='story person'
                />

                <div className='slider__user-details'>
                  <h3 className='slider__user-name'>Sarah White</h3>
                  <span className='slider__user-location'>Edusity, USA</span>
                </div>
              </div>

              <p className='slider__testimonial'>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li className='slider__item'>
            <div className='slider__slide'>
              <div className='slider__user-info'>
                <img
                  className='slider__user-image'
                  src={user_4}
                  alt='story person'
                />

                <div className='slider__user-details'>
                  <h3 className='slider__user-name'>William Jackson</h3>
                  <span className='slider__user-location'>Edusity, USA</span>
                </div>
              </div>

              <p className='slider__testimonial'>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
