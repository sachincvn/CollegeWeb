import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import './Header.css'

const Header = () => {
  return (
    <>
      
        
        <div className="header">
        <Navbar/>
        <div className="content">
            <p className="slide-left"> Welcome To sharnbasv auniversity</p>
            <h1 className="slide-left">Education Is The <br/>Key To Success</h1>
            <div className="links">
            <a  className="btn1 slide-left" href="">Contact US</a>
            </div>
        </div>
        </div>
		{/* <Footer/> */}
    </>
  );
};

export default Header;
