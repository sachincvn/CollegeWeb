import React from "react";
import Navbar from "./NavBar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
      <Navbar />
        <div className="content">
          <p className="slide-left"> Welcome To Sharnbasva University </p>
          <h1 className="slide-left">
            Education is the best <br /> key success in life
          </h1>
          <div className="links slide-left">
            <a  className="btn1" href="">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
