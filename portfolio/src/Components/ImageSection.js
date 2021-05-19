import React from "react";
import about from "../img/about.jpeg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          <span>Neel Gorasiya</span>
        </h4>
        <p className="about-text">
        It's Neel here. I am currently pursuing BE in computer engineering at GEC, Bhavnagar. Highely interested in Machine learning and Deep learning with Python. Always ready to learn new things. I would also like to meet with people and to do conversation having the same interest. <br />Strongly encouraged and self disciplined learner with major interest in Mathematics and Python. Want to make a stunning career in Data Science and Artificial Intelligence.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Country</p>
          </div>
          <div className="right-section">
            <p>: Neel Gorasiya</p>
            <p>: 19</p>
            <p>: Indian</p>
            <p>: Emglish, Hindi, Gujarati</p>
            <p>: India, Canada</p>
          </div>
        </div>
        <button className="btn" onClick={()=> window.location.href="https://drive.google.com/u/0/uc?id=1DY-uxR5J-X_TtJaPK5JqB51-TVClwkWl&export=download"}>Download Resume</button>
      </div>
    </div>
  );
}

export default ImageSection;
