import React from "react";
import "../Style/WeDo.css";
import { Link } from "react-router-dom";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingCartOutlined";
import SettingsSystemDaydreamIcon from "@material-ui/icons/Settings";

const WeDo = () => {
  return (
    <div className="main_WeDo">
      <div className="WeDo_container">
        <div className="our_service_div">
          <div class="our_service_first">
            <span>Our Services</span>
            <h2>We Provide a Wide Variety of IT Services</h2>
            <p>
              We Provide and Develop Many Varieties of Software, Websites, And
              Mobile Applications. We also provide Digital Marketing And Bulk
              SMS services.
            </p>
          </div>
          <div className="service-card-div">
            <div className="service-div">
              <div class="services-card">
                <DesktopWindowsIcon />
                <h4>
                  <Link to="service-details.html">Website Designing</Link>
                </h4>
                <p>
                  Building your business requires a creative website that helps
                  you drive more clients and grow your business. A website with
                  an appealing UI makes you stand out of the crowd and let you
                  serve your clients in a better way that is best-suited for
                  your business.
                </p>
              </div>
              <div class="services-card">
                <SettingsIcon />
                <h4>
                  <Link to="service-details.html">Website Development</Link>
                </h4>
                <p>
                  Our professionals are expatriates covering all aspects while
                  outsourcing robust web and app development solutions. Octocub
                  Software is the most effective host for all sort of
                  development services for global clients.
                </p>
              </div>
              <div class="services-card">
                <ShoppingBasketIcon />
                <h4>
                  <Link to="service-details.html">E-commerce</Link>
                </h4>
                <p>
                  Our in-house team of experts offer the best eCommerce solution
                  and help build brand new online stores on diverse platforms
                  like Shopify, WooCommerce, Wix, Magento, etc., using
                  cutting-edge technologies for saleable results. We also offer
                  easy migration of existing online stores to any other platform
                  successfully and seamlessly.
                </p>
              </div>
              <div class="services-card">
                <SettingsSystemDaydreamIcon />
                <h4>
                  <Link to="service-details.html">Digital Marketing</Link>
                </h4>
                <p>
                  We design the best digital marketing strategies for different
                  industries on the basis of their prior benefits including
                  corporate identity, Social media marketing, Technical SEO,
                  Email marketing, ppc etc.
                </p>
              </div>
              <div class="services-card">
                <SettingsIcon />
                <h4>
                  <Link to="service-details.html">Magento Development</Link>
                </h4>
                <p>
                  Globally, Magento is the undisputed choice of the many when it
                  involves choosing a CMS platform for creating features-rich,
                  spectacular, and highly functional websites. Magento avails
                  many useful plugins and themes for your website.
                </p>
              </div>
              <div class="services-card">
                <SettingsIcon />
                <h4>
                  <Link to="service-details.html">Custom PHP Solutions</Link>
                </h4>
                <p>
                  PHP has increased its enormous prevalence within the present
                  occasions by being adaptable yet simple to stay up website
                  structuring and development stage. PHP is being utilized for
                  creating highlight-rich websites having first-rate usefulness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
