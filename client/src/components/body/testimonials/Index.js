import React, { useState, useEffect } from "react";
import TestimonyPicture from "./TestimonyPicture";
import TestimonyText from "./TestimonyText";
import "./index.css";
import Previous from "./Previous";
import Next from "./Next";
import tData from "./Testimonials";

const Index = () => {
  const [data, setData] = useState(tData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setData(tData);
  }, []);

  return (
    <div className="d-block">
      <h3 className="text-center"> TESTIMONIALS</h3>
      <div className="d-xs-block d-sm-flex">
        <Previous index={index} setIndex={setIndex} data={data} />
        <div className="container container-testimonial d-xs-block d-sm-flex mb-4 p-4">
          <TestimonyPicture image={data[index].picture} />
          <TestimonyText data={data[index]} />
        </div>
        <Next index={index} setIndex={setIndex} data={data} />
      </div>
    </div>
  );
};

export default Index;
