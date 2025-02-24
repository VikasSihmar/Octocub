import React from "react";
import "../Style/Footer.css";
import footerLogo from "../images/Octocub-logo-04-03.png";
import { Link } from "react-router-dom";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="footer-contant">
          <div className="first-contant">
            <div className="footer-logo">
              <Link to="/" onClick={handleScrollToTop}>
                <img src={footerLogo} alt="Octocub-Logo" />
              </Link>
            </div>
            <div className="contant">
              <p>
                Our Company Provides many Softwares, Application, Websites etc.
                We can work with high priority.
              </p>
              <div className="footer-call-content">
                <h3>Talk to Our Support</h3>
                <span>
                  <a href="tel:+91 9587765430">+91 9587765430</a>
                </span>
                <HeadsetMicIcon />
              </div>
            </div>
          </div>
          <div className="footer-servies">
            <h2>Services</h2>
            <ul>
              <li>
                <Link>
                  <KeyboardArrowRightIcon />
                  E-COMMERCE SERVICES
                </Link>
              </li>
              <li>
                <Link>
                  <KeyboardArrowRightIcon />
                  Magento Development
                </Link>
              </li>
              <li>
                <Link>
                  <KeyboardArrowRightIcon />
                  Web Design Services
                </Link>
              </li>
              <li>
                <Link>
                  <KeyboardArrowRightIcon />
                  Web Development Services
                </Link>
              </li>
              <li>
                <Link>
                  <KeyboardArrowRightIcon />
                  Prestashop development services
                </Link>
              </li>
              <li>
                <Link>
                  <KeyboardArrowRightIcon />
                  Opencart development services
                </Link>
              </li>
              <li>
                <Link>
                  <KeyboardArrowRightIcon />
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/blog">
                  <KeyboardArrowRightIcon />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleScrollToTop}>
                  <KeyboardArrowRightIcon />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={handleScrollToTop}>
                  <KeyboardArrowRightIcon />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleScrollToTop}>
                  <KeyboardArrowRightIcon />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-address">
            <h2>Address</h2>
            <p>
              <LocationOnIcon />
              Octocub Softwere Pvt. Ltd. , Sameja Kothi, Raisinghnagar, Sri
              Ganganagar
            </p>
            <p>
              <CallIcon />
              +91 9587765430
            </p>
            <p>
              <EmailIcon />
              info@octocubsoftware.com
            </p>
            <div className="footer-social-link">
              <a
                href="https://www.facebook.com/octocub"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon className="social_icon" />
              </a>
              <a
                href="https://x.com/OctocubSoftware/"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon className="social_icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/octocub-software-pvt-ltd/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="social_icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyRight-div">
          <div className="copy-right-text">
            <p>
              Copyright © 2024 Octocub Softwares Pvt. Ltd. All Rights Reserved
              by
              <a
                href="https://octocubsoftware.com/"
                target="_blank"
                rel="noreferrer"
              >
                Octocub Softwares Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
