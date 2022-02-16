import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navBar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <h1>Sharnbasva University</h1>
        </div>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="">Admission</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default navBar;
