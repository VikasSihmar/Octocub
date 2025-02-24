import React from "react";
import MetaData from "./MetaData";
import PageBanner from "./PageBanner";
import ContactForm from "./ContactForm";

const Enquire = () => {
  return (
    <div>
      <MetaData title="Enquire - eCommerce Solutions Provider, Magento 2 Services" />
      <div className="main-enquire">
        <PageBanner title="Enquire Now !" />
        <h2 className="text-center mt-3">We are all set to help you out.</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Enquire;
