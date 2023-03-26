import React from "react";
import Navbar from "./Navbar";
import Box from "./Box";
import Footer from "./Footer";

const Header = () => {

    const data = {
        name: "Grow Together",
        para: "Generate meaningful discussions with you audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
        img: "images/illustration-grow-together.svg",
        name1: "Flowing Conversations",
        para1: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
        img1: "images/illustration-flowing-conversation.svg",
        name2: "Your Users",
        para2:"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
        img2:"images/illustration-your-users.svg",
    }





    return (
        <>
        <div className="navbar-heading">
            <Navbar />
        </div>
        <div className="container">
        <Box myData={data} />
        </div>

        <Footer />
        </>
    )
}

export default Header;