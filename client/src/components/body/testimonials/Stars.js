import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = () => {
  return (
    <div className="mt-4">
      {[...Array(5)].map(star => {
        return (
          <>
            <label className="mx-1">              
              <FontAwesomeIcon color="#f9ab00" icon={faStar}/>
            </label>

          </>
        );
      })}(5 of 5)
    </div>
  );
};

export default Stars;
