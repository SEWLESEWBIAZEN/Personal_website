import React from "react";
import TestimonyPicture from "./TestimonyPicture";
import TestimonyText from "./TestimonyText";
import "./index.css";
import Previous from "./Previous";
import Next from "./Next";

const Index = () => {
  return (
    <div className="d-block">
      <h3 className="text-center"> TESTIMONIALS</h3>
      <div className="d-xs-block d-sm-flex">
      <Previous/>
      <div className="container container-testimonial d-xs-block d-sm-flex mb-4 p-4">
        <TestimonyPicture />
        <TestimonyText />
      </div>
      <Next/>
      </div>
    </div>
  );
};

export default Index;
