import React from "react";

function ServicesSection({ image, title }) {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
            <img src={image} alt="" />
            <h5 className="s-title">{title}</h5>
            <p className="s-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ex!
            </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
