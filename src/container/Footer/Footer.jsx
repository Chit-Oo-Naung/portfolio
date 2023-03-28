import React, { useState, useRef } from "react";

// import Socialmedia from '../../components/Socialmedia';
import { images } from "../../constants";
import { AppWrap, AppWrap2, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import emailjs from "emailjs-com";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { username, email, message } = formData;

  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    // console.log(formData.name + formData.email + formData.message);
    var templateParams = {
      to_name: formData.name,
      from_name: formData.email,
      message: formData.message,
    };
    emailjs
      .send(
        "portfolio_service",
        "portfolio_template",
        templateParams,
        "niyazGvzRbZU9VdeG"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsFormSubmitted(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // e.target.reset();
  };

  return (
    <>
      <h2 className="head-text">Contact</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:chitoonaung.ts@gmail.com" className="p-text">
            chitoonaung.ts@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+95 9966680686" className="p-text">
            +95 9966680686
          </a>
        </div>
      </div>

      {/* 
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="username"
            value={username}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
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
        
        <button
          type="button"
          className="p-text"
          onClick={() => (window.location = "mailto:chitoonaung.ts@gmail.com")}
        >
          Send Message
        </button>
      </div>
*/}
      {!isFormSubmitted ? (
        <form
          className="app__footer-form app__flex"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="app__flex">
            {/* <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} /> */}
            <input
              className="p-text"
              type="text"
              placeholder="Your Full Name"
              name="name"
              value={username}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            {/* <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} /> */}
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            {/* <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} /> */}
            <textarea
              className="p-text"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary p-text">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h5 className="head-text">Thank you for getting in touch!</h5>
        </div>
      )}
    </>
  );
};

export default AppWrap2(
  AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg")
);

// import React, { useRef } from 'react';
// import "./Contact.css";

// import { MdOutlineEmail } from "react-icons/md";
// import { IoLogoLinkedin } from "react-icons/io";
// import { SiWhatsapp } from 'react-icons/si';

// import emailjs from 'emailjs-com'

// const Contact = () => {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_42uv30r', 'template_89shhdn', form.current, 'FFrFPPtIHOpwclUHi')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//     e.target.reset();
//   };

//   return (
//     <section id="contact">
//       <h5>Get In Touch</h5>
//       <h2>Contact</h2>
//       <div className="container contact__container">
//         <div className="contact__options">
//           <article className="contact__option">
//             <MdOutlineEmail className="contact__option-icon" />
//             <h4>Email</h4>
//             <h5>hwy.dev@gmail.com</h5>
//             <a href="mailto:hwy.dev@gmail.com" target="_blank">Send a message</a>
//           </article>
//           <article className="contact__option">
//             <IoLogoLinkedin className="contact__option-icon" />
//             <h4>Linked In</h4>
//             <h5>Htet Wai Yan</h5>
//             <a href="https://www.linkedin.com/in/htet-waiyan/" target="_blank">Send a message</a>
//           </article>
//           <article className="contact__option">
//             <SiWhatsapp className="contact__option-icon" />
//             <h4>WhatsApp</h4>
//             <h5>(+95)9 786883358</h5>
//             <a href=" https://wa.me/959786883358" target="_blank">Send a message</a>
//           </article>
//         </div>
//         <form ref={form} onSubmit={sendEmail}>
//           <input type="text" placeholder="Your Full Name" name="name" required/>
//           <input type="email" placeholder="Your Email" name="email" required/>
//           <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
//           <button type="submit" className="btn btn-primary">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default AppWrap2(AppWrap(
//   MotionWrap(Footer, 'app__footer'),
//   'contact',
//   'app__whitebg',
// ));
