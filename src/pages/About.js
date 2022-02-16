import React from 'react';
import NavBar from '../components/NavBar';
import './About.css'
import Footer from '../components/Footer';

function About () {
	return <>
        <div className="navbar">
        <NavBar/>
        </div>
        
        <div className="container-header">
            <h1>About Us</h1>
            <p>Who We Are ? </p>
        </div>
        <div className="container">
            <div className="col1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias facere veniam labore eveniet! Veritatis itaque libero dolorum exercitationem, magnam ratione facere? Ratione, dolores quisquam saepe odit quae rerum consequatur sit doloremque deserunt, consequuntur ullam aperiam fuga. Totam assumenda repudiandae, exercitationem eaque doloribus omnis facilis perferendis nostrum optio. Beatae, minus?
            </div>
            <div className="col2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ipsa nobis dolorum aliquid sunt iste aspernatur similique? Ratione vero ipsa expedita suscipit voluptates, velit recusandae voluptate cumque magni ad eligendi maxime dolores aliquid sapiente perspiciatis illum soluta doloribus numquam! Iure rerum nobis repudiandae officiis eum pariatur eligendi earum dolorum vitae.
            </div>
        </div>
		<Footer/>
	</>
}
export default About;
