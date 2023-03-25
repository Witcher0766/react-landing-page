import React from "react";


const Navbar = () => {

    return (
        <>
        <div className="main-container">
        <img src="../images/bg-hero-desktop.svg" alt="bg-hero-desktop" />
        <nav className="main-nav">
        <a href="#" className="logo">
            <img className="sub-logo" src="../images/logo.svg" alt="logo" />
        </a>
        <button className="head-btn">Try it free</button>
        </nav>

        <div className="sub-nav">
            <div className="nav-text">
                <h3>Build The Community Your Fans Will Love</h3>
                <p>Huddle re-imagines the way we build communities.
                You have a voice, but so does your audience. Create connections 
                with your users as you engage in genuine discussion.
                </p>
                <button className="sub-head-btn">Get Started For Free</button>
            </div>
            <img src="../images/illustration-mockups.svg" alt="mockups" />
        </div>
        </div>
        </>
    )
}

export default Navbar;