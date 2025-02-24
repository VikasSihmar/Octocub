import React from "react";
import "../Style/ContactForm.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";

const ContactForm = () => {
  return (
    <div className="contactInfo-form">
      <div className="contact-form-container">
        <div className="contact-info">
          <span>Contact Info</span>
          <h2>Let's Connect With Us</h2>
          <p>
            Request a Quote to learn more about Octocub Software and our web
            development solutions. Reach us right away to get started on your
            business’s online journey.
          </p>
          <ul>
            <li>
              <div className="content">
                <CallIcon />
                <h3>Phone Number</h3>
                <a href="tel:+91 9587765430">+91 9587765430</a>
              </div>
            </li>
            <li>
              <div className="content">
                <LocationOnIcon />
                <h3>Address</h3>
                <span>
                  Octocub Softwere Pvt. Ltd. , Sameja Kothi, Raisinghnagar, Sri
                  Ganganagar
                </span>
              </div>
            </li>
            <li>
              <div className="content">
                <EmailIcon />
                <h3>Contact Info</h3>
                <a href="mailto:info@octocubsoftware.com">
                  info@octocubsoftware.com
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="form-div">
          <form id="contactForm">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Your Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    required
                    data-error="Please Enter Your Name"
                    placeholder="Name"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Your Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                    data-error="Please Enter Your Email"
                    placeholder="Email"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Phone Number <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    required
                    data-error="Please Enter Your number"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Your Subject <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="msg_subject"
                    id="msg_subject"
                    className="form-control"
                    required
                    data-error="Please Enter Your Subject"
                    placeholder="Your Subject"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group has-error">
                  <label>
                    Your Message <span>*</span>
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    cols={30}
                    rows={8}
                    required
                    data-error="Write your message"
                    placeholder="Your Message"
                    style={{ height: 88 }}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="agree-label">
                  <input type="checkbox" id="chb1" />
                  <label htmlFor="chb1">
                    Accept{" "}
                    <a href="terms-condition.html">Terms &amp; Conditions</a>{" "}
                    And <a href="privacy-policy.html">Privacy Policy.</a>
                  </label>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 text-center button-class">
                <button type="submit">Send Message</button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
