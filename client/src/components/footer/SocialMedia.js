import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin, 
  faGithub,
  
  
} from "@fortawesome/free-brands-svg-icons";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SocialMedia = () => {
  return (
    <div className="d-flex ">
        
      <a href="https://www.facebook.com" className="mx-2">
        <FontAwesomeIcon className='facebook' color="white" icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com" className="mx-2">
        <FontAwesomeIcon className='instagram'  color="white" icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com" className="mx-2">
        <FontAwesomeIcon className='linkedin'  color="white" icon={faLinkedin} />
      </a>
      <a href="https://www.github.com/SEWLESEWBIAZEN" className="mx-2">
        <FontAwesomeIcon className='github'  color="white" icon={faGithub} />
      </a>
      <a href="https://www.twitter.com" className="mx-2">
        <FontAwesomeIcon className="twitter"  color="white" icon={faTimes} />
      </a>
      
    </div>
  );
};

export default SocialMedia;
