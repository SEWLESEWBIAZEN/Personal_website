import React from "react";
import { FaStar } from "react-icons/fa";

const Stars = () => {
  return (
    <div>
      {[...Array(5)].map((star) => {
        return (
          <>
            <label>              
              <FaStar size={25} />
            </label>
          </>
        );
      })}
    </div>
  );
};

export default Stars;
