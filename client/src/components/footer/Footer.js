import React from "react";
import "./footer.css";
import Links from "./Links";
import SocialMedia from "./SocialMedia";
import Form from "./Form";
import Skills from "./Skills";

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-xs-block d-md-flex justify-content-evenly">
        <Links/>
        <Form/>
      </div> 
     
      <hr className="text-white w-3"/>  
      <div className="mt-6 d-xs-block d-md-flex justify-content-evenly">
        <SocialMedia/>
        <Skills/>
      </div>   
    </div>
  );
};

export default Footer;
