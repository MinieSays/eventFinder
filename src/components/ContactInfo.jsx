import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact__page--info">
        <div className="contact__page--info-box">
          <FontAwesomeIcon className="contact__page--icons" icon="phone" />
          <div className="contact__page--info-para">519-888-4444</div>
        </div>
        <div className="contact__page--info-box">
          <FontAwesomeIcon className="contact__page--icons" icon="envelope" />
          <div className="contact__page--info-para">
            contact@eventfinder.com
          </div>
        </div>
        <div className="contact__page--info-box">
          <FontAwesomeIcon
            className="contact__page--icons"
            icon="location-dot"
          />
          <div className="contact__page--info-para">
            Toronto, Ontario, Canada
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
