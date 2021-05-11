import React from "react";
import about from "../img/about.png";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span>Neel Gorasiya</span>
        </h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          iure obcaecati itaque facilis accusamus culpa quaerat laudantium
          mollitia quam adipisci!
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Country</p>
          </div>
          <div className="right-section">
            <p>: Neel Gorasiya</p>
            <p>: 19</p>
            <p>: Indian</p>
            <p>: Emglish, Hindi, Gujarati</p>
            <p>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil provident iusto quos dolore doloribus nulla.</p>
            <p>: India, Canada</p>
          </div>
        </div>
        <button className="btn">Download Resume</button>
      </div>
    </div>
  );
}

export default ImageSection;
