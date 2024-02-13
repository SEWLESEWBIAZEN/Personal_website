import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./nav.css";

/** font awesome imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

  //const [active,setActive]= useState("home");
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success bg-body-primary fixed-top">
        <div class="container-fluid container">
          <a class="navbar-brand" href="/">
            SB
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{color:"#f9ab00"}}/>
          </button>
          <div
            className="collapse navbar-collapse m-auto justify-content-center "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./">
                  My Portifolios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./">
                  My Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact-me" aria-disabled="true">
                  Contact Me
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true">
                  Sign Up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
