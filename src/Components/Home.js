import React from "react";
import "../Style/Home.css";
import MetaData from "./MetaData";
import { Link } from "react-router-dom";
import helpingImg from "../images/mimi-thian-ZKBzlifgkgw-unsplash-1-768x576.jpg";
import ContactSupportIcon from "@material-ui/icons/ContactSupportOutlined";
import ExploreIcon from "@material-ui/icons/ContactSupportOutlined";
import WeDo from "./WeDo";
import HowWeWork from "./HowWeWork";
import ContactForm from "./ContactForm";

const Home = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <MetaData title="Home - eCommerce Solutions Provider, Magento 2 Services" />
      <div className="main-banner-div">
        <div className="banner-text">
          <div className="banner-div">
            <span>Only High Quality Services</span>
            <h1>We expertise in Website designing and Web Development.</h1>
            <p>
              Empowering businesses through creative website designs &
              result-oriented development by our experienced and qualified
              Octocub Software professionals.
            </p>
            <Link
              className="learn-more-btn"
              to="/about"
              onClick={handleScrollToTop}
            >
              Learn More
            </Link>
            <Link className="get-quote-btn" to="/enquire" target="_blank">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
      <div className="helping-companies-div">
        <div className="helping-companies-container">
          <div className="helping-contant">
            <h4>More than 10 Years of Experience</h4>
            <h2>
              Helping <span>Companies</span> Build great business Idea
            </h2>
            <p>
              Octocub Software has a young, enthusiastic, Dynamic, Result
              oriented Website Development, Digital marketing, mobile app
              development company based in Jaipur. We focus on creating the best
              and most optimized product for our customers. After taking the
              project in hand, we closely work with our customers, understanding
              their requirements and put our creativity and efforts to make the
              project successful. We believe in writing success stories in the
              digital world: globally, hence we have also built our strong
              support system by many happy clients.
            </p>
          </div>
          <div className="helping-img">
            <div className="helping-img-div">
              <img src={helpingImg} alt="Helping_image" />
            </div>
          </div>
        </div>
        <div class="experience-support-container">
          <div class="Experience-content-card">
            <ExploreIcon />
            <h3>Experience</h3>
            <p>
              We have delivered many projects in working year which have been
              successfully submitted on time.
            </p>
          </div>

          <div class="Support-content-card">
            <ContactSupportIcon />
            <h3>Quick Support</h3>
            <p>
              If you have any Errors or Complaints with your project, then our
              support is available 24*7 hours.
            </p>
          </div>
        </div>
      </div>
      <WeDo />
      <HowWeWork />
      <ContactForm />
    </React.Fragment>
  );
};

export default Home;
