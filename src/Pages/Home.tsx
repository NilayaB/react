import React from "react";
import Brand from "../Components/Brand";
import CTA from "../Components/CTA";
import Feature from "../Components/Feature";
import Navbar from "../Components/Navbar";
import Blog from "../Container/Blog";
import Features from "../Container/Features";
import Footer from "../Container/Footer";
import Header from "../Container/Header";
import Possiblity from "../Container/Possiblity";
import WhatGPT3 from "../Container/WhatGPT3";

const Home = () => {
    return (
        <>
            <div className="gradient__bg">
                <Navbar children={<div></div>} />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Feature />
            <Possiblity />
            <CTA />
            <Footer />
        </>
    )
}

export default Home;