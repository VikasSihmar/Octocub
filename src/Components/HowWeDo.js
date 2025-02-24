import React from "react";
import "../Style/HowWeDo.css";
import howWeDoImg from "../images/mimi-thian-ZKBzlifgkgw-unsplash-2048x1536.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";

const HowWeDo = () => {
  return (
    <div className="main-how-we-do">
      <div className="how-we-do-container">
        <div className="how-we-do-img">
          <div className="how-we-do-img-div">
            <img src={howWeDoImg} alt="howWeDoImg_image" />
          </div>
        </div>
        <div className="how-we-do-contant">
          <h2>How We Do</h2>
          <span class="wn-deep-subtitle">-----------</span>
          <p>
            With our approach to Web Design, our methods continue to be proven
            in a continuous challenging marketplace with delivering what we
            promise.
          </p>
          <div className="progress-div">
            <span>HTML & CSS</span>
            <ProgressBar animated now={100} label="100%" />
          </div>
          <div className="progress-div">
            <span>PHP & MySQL</span>
            <ProgressBar animated now={95} label="95%" />
          </div>
          <div className="progress-div">
            <span>Java Script</span>
            <ProgressBar animated now={90} label="90%" />
          </div>
          <div className="progress-div">
            <span>MAGENTO</span>
            <ProgressBar animated now={95} label="95%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
