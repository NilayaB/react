import React from "react";
import Brand from "../Components/Brand";
import CTA from "../Components/CTA";
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
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possiblity />
            <CTA />
            <Blog />
            <Footer />
        </>
    )
}

export default Home;