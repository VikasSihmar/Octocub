import React from "react";
import "../Style/About.css";
import MetaData from "./MetaData";
import ContactForm from "./ContactForm";
import howWeWorkImg from "../images/annie-spratt-g9KFpAfQ5bc-unsplash-2048x1679.jpg";
import PageBanner from "./PageBanner";
import HowWeDo from "./HowWeDo";
import Methodology from "./Methodology";

const About = () => {
  return (
    <div>
      <MetaData title="About - eCommerce Solutions Provider, Magento 2 Services" />
      <div className="main-about">
        <PageBanner title="About Us" />
        <div className="about-container">
          <div className="about-contant">
            <h2>ABOUT US</h2>
            <span>-----------</span>
            <p>
              We think,and design, best software solutions for web and mobile
              technologies. We do octocub software to provide 360 result-driven
              digital marketing solutions to market businesses online also.
            </p>
          </div>
          <div className="about-img">
            <div className="about-img-div">
              <img src={howWeWorkImg} alt="HowWeWorkImg_image" />
            </div>
          </div>
        </div>
        <HowWeDo />
        <div className="about-counter-chart-container">
          <div className="about-chart-box box1">
            <h2>99 %</h2>
            <p>Happy Customers</p>
          </div>
          <div className="about-chart-box box2">
            <h2>30</h2>
            <p>Team Mambers</p>
          </div>
          <div className="about-chart-box box3">
            <h2>200</h2>
            <p>Successful Projects</p>
          </div>
          <div className="about-chart-box box4">
            <h2>4</h2>
            <p>Years Experience</p>
          </div>
        </div>
        <Methodology />
        <ContactForm />
      </div>
    </div>
  );
};

export default About;
