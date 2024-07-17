import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'b0818818-b157-4978-b3ba-3b47ade3ebb0');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact-us' className='contact'>
      <div className='contact__col'>
        <h3 className='contact__col-title'>
          Send us a message <img src={msg_icon} alt='message icon' />
        </h3>
        <p className='contact__col-text'>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>

        <ul className='contact__col-list'>
          <li>
            <img src={mail_icon} alt='mail icon' /> justdoit@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt='phone icon' />
            +506 87947110
          </li>
          <li>
            <img src={location_icon} alt='location icon' />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>

      <div className='contact__col'>
        <form onSubmit={onSubmit} className='contact__col-form'>
          <label htmlFor='name'>Your name</label>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Enter your name'
            required
          />

          <label htmlFor='phone'>Phone number</label>
          <input
            id='phone'
            type='tel'
            name='phone'
            placeholder='Enter your mobile number'
            required
          />

          <label htmlFor='email'>Your email</label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='Enter your email'
            required
          />

          <label htmlFor='message'>Write your messages here</label>
          <textarea
            name='message'
            id='message'
            rows='6'
            placeholder='Enter your message'
            required
          ></textarea>

          <button type='submit' className='btn dark-btn'>
            Submit now <img src={white_arrow} alt='white arrow' />
          </button>
        </form>
        <span className='contact__col-notification'>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
