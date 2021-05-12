import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../Components/Title";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59286.790314030724!2d72.11988655864774!3d21.76382996471251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5081abb84e2f%3A0xf676d64c6e13716c!2sBhavnagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1620725757644!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            frameBorder="0"
            tabIndex="0"
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+91 878 0871 286"}
            text2={"+91 878 0871 286"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"mgorasiya1974@gmail.com"}
            text2={"neelg3056@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"3, Chandralok app., Vijayrajnagar, Bhavnagar."}
            text2={"India"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
