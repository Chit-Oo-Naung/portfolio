import React, { useState } from 'react';

// import Socialmedia from '../../components/Socialmedia';
import { images } from '../../constants';
import { AppWrap, AppWrap2, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  return (
    <>
      <h2 className="head-text">Contact</h2>

      <div className="app__footer-cards">

        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:chitoonaung.ts@gmail.com" className="p-text">chitoonaung.ts@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+95 9966680686" className="p-text">+95 9966680686</a>
        </div>

      </div>
      
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          {/* <button type="button" className="p-text"  onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button> */}
          <button type="button" className="p-text" onClick={() => window.location = 'mailto:chitoonaung.ts@gmail.com'}>'Send Message'</button>
          
        </div>
      ) 
      
     
    </>
  );
};

export default AppWrap2(AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
));