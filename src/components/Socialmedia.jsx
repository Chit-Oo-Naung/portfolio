import React from 'react';
import { BsTwitter, BsInstagram,BsYoutube} from 'react-icons/bs';
import { FaFacebookF,FaLinkedinIn,FaGithub} from 'react-icons/fa';

const Socialmedia = () => {
  return (
    <div className='app__social'>
      

      <div className='app__socialmedia'>

       <a href="https://www.linkedin.com/in/chit-oo-naung" 
       target="_blank" rel="noreferrer"><FaLinkedinIn/></a> 

      </div>

      <div className='app__socialmedia'>

       <a href="https://github.com/Chit-Oo-Naung" 
       target="_blank" rel="noreferrer"><FaGithub/></a> 

      </div>


      <div className='app__socialmedia'>
      <a href="https://www.facebook.com/ChitoonaungCypher" 
       target="_blank" rel="noreferrer"><FaFacebookF /></a> 
        
      </div>
      
     
    </div>
  )
}

export default Socialmedia;