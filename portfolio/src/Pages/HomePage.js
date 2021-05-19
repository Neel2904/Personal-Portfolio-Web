import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I'm
          <span> Neel Gorasiya</span>
        </h1>
        <p className="h-sub-text">
        It's Neel here. I am currently pursuing BE in computer engineering at GEC, Bhavnagar. Highely interested in Machine learning and Deep learning with Python. Always ready to learn new things. I would also like to meet with people and to do conversation having the same interest.
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/neel.gorasiya.29/" target="_blank" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
          </a>
          <a href="https://github.com/Neel2904" target="_blank" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh"/>
          </a>
          <a href="https://twitter.com/Neel_2904" target="_blank" className="icon-holder">
            <FontAwesomeIcon icon={faTwitter} className="icon tw"/>
          </a>
          <a href="https://www.linkedin.com/in/gorasiyaneel/" target="_blank" className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
