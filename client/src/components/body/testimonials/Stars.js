import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = () => {
  return (
    <div>
      {[...Array(5)].map(star => {
        return (
          <>
            <label>              
              <FontAwesomeIcon icon={faStar}/>
            </label>
          </>
        );
      })}
    </div>
  );
};

export default Stars;
