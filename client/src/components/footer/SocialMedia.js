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
    <div className="d-flex container link m-auto">
        <h6>Follow Me on :</h6>
      <a href="https://www.facebook.com">
        <FontAwesomeIcon size="2x" icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com">
        <FontAwesomeIcon size="2x" icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com">
        <FontAwesomeIcon size="2x" icon={faLinkedin} />
      </a>
      <a href="https://www.github.com/SEWLESEWBIAZEN">
        <FontAwesomeIcon size="2x" icon={faGithub} />
      </a>
      <a href="https://www.twitter.com">
        <FontAwesomeIcon size="2x" icon={faTimes} />
      </a>
      
    </div>
  );
};

export default SocialMedia;
