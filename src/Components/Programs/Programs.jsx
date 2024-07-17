import React from 'react';
import './Programs.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Programs = () => {
  return (
    <div id='program' className='programs'>
      <div className='programs__item'>
        <img src={program_1} alt='graduated person' />

        <div className='programs__item-caption'>
          <img src={program_icon_1} alt='graduation icon' />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className='programs__item'>
        <img src={program_2} alt='graduated person' />

        <div className='programs__item-caption'>
          <img src={program_icon_2} alt='master degree icon' />
          <p>Master Degree</p>
        </div>
      </div>

      <div className='programs__item'>
        <img src={program_3} alt='graduated person' />

        <div className='programs__item-caption'>
          <img src={program_icon_3} alt='post graduation icon' />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
