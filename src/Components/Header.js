import React from "react";
import "../Style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedIncon from "@material-ui/icons/LinkedIn";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import logo from "../images/Octocub-logo-04-03.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const currTime = new Date().toLocaleTimeString();
  const date = new Date().toLocaleString("en-us", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="main-header is-sticky">
      <div className="top_navbar">
        <div className="top_bar">
          <div className="time_date_div">
            <p>
              Today:{date},{currTime}
            </p>
          </div>
          <div className="top_header_icons_div">
            <SearchIcon className="search_icon" />
            <div className="social_link">
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
                <LinkedIncon className="social_icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}

      <div className="navbar">
        <div className="nav">
          <div className="log_div">
            <div className="logo">
              <Link to="/" onClick={handleScrollToTop}>
                <img src={logo} alt="Octocubsoftware" />
              </Link>
            </div>
          </div>
          <div className="navigation">
            <ul>
              <li>
                <Link to="/" onClick={handleScrollToTop}>
                  Home
                </Link>
              </li>
              <li className="ourServices">
                <Link>
                  Our Services
                  <ArrowDropDownIcon />
                </Link>
                <ul className="ourServicesCantent">
                  <li>
                    <Link>E-COMMERCE SERVICES</Link>
                  </li>
                  <li>
                    <Link>Magento Development</Link>
                  </li>
                  <li>
                    <Link>Web Design Services</Link>
                  </li>
                  <li>
                    <Link>Web Development Services</Link>
                  </li>
                  <li>
                    <Link>Prestashop development services</Link>
                  </li>
                  <li>
                    <Link>Opencart development services</Link>
                  </li>
                  <li>
                    <Link>Mobile App Development</Link>
                  </li>
                </ul>
              </li>
              <li className="hiring">
                <Link>
                  Hiring
                  <ArrowDropDownIcon />
                </Link>
                <div className="hiringCantentDiv">
                  <div className="hiringCantentDivFlex">
                    <ul className="hiringCantent1">
                      <li>
                        <Link>Hire PHP Developers </Link>
                      </li>
                      <li>
                        <Link>Hire Magento Developers</Link>
                      </li>
                      <li>
                        <Link>Hire Android Developers</Link>
                      </li>
                      <li>
                        <Link>Hire CakePHP Developers</Link>
                      </li>
                      <li>
                        <Link>Hire WordPress Developers</Link>
                      </li>
                      <li>
                        <Link>Hire Drupal Developers</Link>
                      </li>
                      <li>
                        <Link>Hire Joomla Developers</Link>
                      </li>
                      <li>
                        <Link>Hire Codeigniter Developers</Link>
                      </li>
                    </ul>
                    <ul className="hiringCantent2">
                      <li>
                        <Link>Hire Laravel Developers</Link>
                      </li>
                      <li>
                        <Link>Hire Open Cart Developers</Link>
                      </li>
                      <li>
                        <Link>Hire Shopify Developers</Link>
                      </li>
                      <li>
                        <Link>Hire Hybrid Developers</Link>
                      </li>
                      <li>
                        <Link>Hire Flutter Developers</Link>
                      </li>
                      <li>
                        <Link>Hire React Native Developers</Link>
                      </li>
                      <li>
                        <Link>Hire Prestashop Developers</Link>
                      </li>
                      <li>
                        <Link>Hire BigCommerce Developers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="aboutCompany">
                <Link>
                  About Company
                  <ArrowDropDownIcon />
                </Link>
                <ul className="aboutCompanyCantent">
                  <li>
                    <Link to="/howWeWork" onClick={handleScrollToTop}>
                      How We Work
                    </Link>
                  </li>
                  <li>
                    <Link>Our Team</Link>
                  </li>
                  <li>
                    <Link to="/portfolio" onClick={handleScrollToTop}>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={handleScrollToTop}>
                      About Us
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog" onClick={handleScrollToTop}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleScrollToTop}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="meetBtn">
            <Link to="/contact" onClick={handleScrollToTop}>
              Meet With Us
            </Link>
          </div>
          <div className="mobile-nav">
            <FontAwesomeIcon icon={faBars} className="mobile-nav-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
