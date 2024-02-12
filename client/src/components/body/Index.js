import React from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// local component import
import Home from "./home/Index";
import Services from "./servicesection/Index";
import Testimonials from "./testimonials/Index";
import Previous from "./testimonials/Previous";
import Next from "./testimonials/Next";

const Index = () => {
  return (
    <div className="pb-4">
      <Home />
      <hr />
      <Services />
      <hr className="text-success" />
      <div className="d-xs-block d-sm-flex">
        <Previous />
        <Testimonials />
        <Next />
      </div>
    </div>
  );
};

export default Index;
