import React from "react";
import "../Style/HowWeWork.css";
import howWeWorkImg from "../images/annie-spratt-g9KFpAfQ5bc-unsplash-2048x1679.jpg";
import { Link } from "react-router-dom";

const HowWeWork = () => {
  return (
    <div className="main-how-we-work">
      <div className="how-we-work-container">
        <div className="how-we-work-img">
          <div className="how-we-work-img-div">
            <img src={howWeWorkImg} alt="HowWeWorkImg_image" />
          </div>
        </div>
        <div className="how-we-work-contant">
          <h2>How We Work</h2>
          <span class="wn-deep-subtitle">-----------</span>
          <p>
            Octocub Software is a team of in-house professionals and certified
            web developers that offer profound solutions to brand and business
            owners. With our eCommerce solutions, many global businesses,
            whether small or large, have a powerful online presence.
          </p>
          <Link to="/enquire" role="button" target="_blank">
            Let’s Discuss
          </Link>
        </div>
      </div>
      <div className="counter-chart">
        <div className="counter-chart-container">
          <div className="chart-box box1">
            <h2>4</h2>
            <p>Year of Industry</p>
          </div>
          <div className="chart-box box2">
            <h2>200</h2>
            <p>Delighted Clients</p>
          </div>
          <div className="chart-box box3">
            <h2>30</h2>
            <p>Team Members</p>
          </div>
          <div className="chart-box box4">
            <h2>50%</h2>
            <p>Senior and Expert Staff</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
