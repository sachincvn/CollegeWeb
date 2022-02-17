import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const navBar = () => {
  return (
    <>
      <nav>
        <div className="logo">The-SUK</div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="services">
              <a href="/">Services</a>
              <ul className="dropdown">
                <li>
                  <a href="/">Dropdown 1 </a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default navBar;
