import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="contact__page--text-container">
            <h1 className="contact__page--title">Contact Us</h1>
            <p className="contact__para">Get in touch</p>
          </div>
          <div className="container contact__info-wrapper">
            <ContactInfo />
            <div className="contact__page--form-container">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
