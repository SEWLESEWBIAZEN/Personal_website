import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin, 
  faGithub
  
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className="d-flex container link m-auto">
        <h6>Follow Me on :</h6>
      <a>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      
    </div>
  );
};

export default SocialMedia;
