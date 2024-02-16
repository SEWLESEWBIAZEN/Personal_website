import React, { Suspense } from "react";
import pimg from "../body/home/profile.jpg";
import './about.css'

const About = () => {
  return (
    <div className="container d-block">
      <div className="d-block">
        <h1>About</h1>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <br/><br/>
        <div className="d-flex justify-content-between">
          <img className="img-fluid me-4" width={300} height={300} src={pimg} />
          <div className="d-block">
            <h2>Front-End Developer/ React Developer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="d-flex justify-content-between">
              <div>                
                <tr>
                  <td>                   
                    <h5>Birthday:</h5>
                  </td>
                  <td>
                    <p>December 03 1997</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Phone Number:</h5>
                  </td>
                  <td>
                    <p>+251 947 367 528</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Phone Number:</h5>
                  </td>
                  <td>
                    <p>+251 947 367 528</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Email Address:</h5>
                  </td>
                  <td>
                    <p>sewlesewbiazen65@gmail.com</p>
                  </td>
                </tr>
                
              </div>
              <div>                
                <tr>
                  <td>                   
                    <h5>Birthday:</h5>
                  </td>
                  <td>
                    <p>December 03 1997</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Phone Number:</h5>
                  </td>
                  <td>
                    <p>+251 947 367 528</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Phone Number:</h5>
                  </td>
                  <td>
                    <p>+251 947 367 528</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Email Address:</h5>
                  </td>
                  <td>
                    <p>sewlesewbiazen65@gmail.com</p>
                  </td>
                </tr>
                
              </div>
              
            </div>
            <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
             Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
