import React from "react";
import "../Style/Contact.css";
import MetaData from "./MetaData";
import ContactForm from "./ContactForm";
import PageBanner from "./PageBanner";

const Contact = () => {
  return (
    <div>
      <MetaData title="Contact - eCommerce Solutions Provider, Magento 2 Services" />
      <div className="main-contact">
        <PageBanner title="Contact Us" />
        <div className="contact-container">
          <h1>Let's Send Us a Message Below</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
