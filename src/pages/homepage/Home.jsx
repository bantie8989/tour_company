import Topbar from "./components/topbarComponent/Topbar";
import Hero from "./components/heroComponent/Hero";
import "./home.css";
import FeaturedTrours from "./components/featuredTours/FeatureTours";
import Testimonial from "./components/testimonialComponent/Testimonial";
import Footer from "./components/footerComponent/Footer";
import Faq from "./components/faqComponent/Faq";
import React from "react";

function Home() {
  return (
    <div className="homeContainer">

      <div className="topbarComponent">
        <Topbar/> 
      </div>
      <div className="heroComponent">
        <Hero />
      </div>
      <div className="featuredTours">
        <FeaturedTrours />
      </div>
      <div className="testimonialComponent">
        <Testimonial />
      </div>
      <div className="faqComponent">
        <Faq />
      </div>
      <div className="footerComponent">
        <Footer/>    
      </div>
    </div>
  );
}

export default Home;
