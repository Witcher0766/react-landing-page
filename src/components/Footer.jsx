import React from "react";

const Footer = () => {

    return (
        <>
        <div className="footer-container">
            <div className="sub-container">
                <h3>Read To Build Your Community?</h3>
                <button className="sub-head-btn-1">Get Started For Free</button>
            </div>

            <div className="sub-container-1">
            <div className="footer-1">
            <img className="footer-logo" src="../images/logo-white.svg" alt="logo" />
             <p>Lorem ipsum dolor sit amet consectetur, 
            <br />
             adipisicing elit. 
            Quod, doloribus? Lorem
            <br />
            adipisicing elit. Odit, commodi!</p>
            <p>+1-543-123-4567</p>
            <p>example@huddle.com</p>
            </div>
            <div className="footer-2">
            <li><a href="">About Us</a></li>
            <li><a href="">What We Do</a></li>
            <li><a href="">FAQ</a></li>
            </div>
            <div className="footer-3">
                <li><a href="">Career</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact Us</a></li>
            </div>
            {/* <div className="footer-4">

            </div> */}
            </div>
            <div className="copyright">
            <p>© Copyright 2023 Huddle. All rights reserved.</p>
            <p>Challenge by <a href="">Frontend Mentor</a></p>
            </div>
        </div>
        </>
    )
}

export default Footer;