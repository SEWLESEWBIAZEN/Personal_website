import React from "react";
import pimg from "../../assets/images/profile.jpg";
import './about.css'

const About = () => {
  return (
    <div className="container d-block background">
      <div className="d-block">
       <br/>  <br/>
        <h1 className="title">About</h1>
        < div className="title-line mx-auto mb-2"></div>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <br/><br/>
        <div className="d-xs-block d-md-flex justify-content-between ">
          < img className=" me-4 profile-picture my-auto" width={300} height={300} src={pimg} />
          <div className="d-block">
            <h3>Front-End Developer/ React Developer</h3>
            <p className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>  <br/><br/>
            <div className="d-xs-block d-sm-flex basic-info ">
              <div className="me-2">                
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
                    <h5>Address:</h5>
                  </td>
                  <td>
                    <p>Addis Ababa, Ethiopia</p>
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

              <div className="ms-2">                
                <tr>
                  <td>                   
                    <h5>Degree:</h5>
                  </td>
                  <td>
                    <p>BSc</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Field of Study:</h5>
                  </td>
                  <td>
                    <p>Computer Science</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Work Experience:</h5>
                  </td>
                  <td>
                    <p>2+ years in Frontend development</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Institution:</h5>
                  </td>
                  <td>
                    <p>Addis Ababa University(AAU)</p>
                  </td>
                </tr>                
              </div>              
            </div>
           <br/>
            <p className="about-last-paragraph">
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
