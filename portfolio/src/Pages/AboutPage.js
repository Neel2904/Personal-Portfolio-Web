import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />

      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skill-container">
        <SkillsSection skill={"Python"} progress={"70%"} width={"70%"} />
        <SkillsSection
          skill={"Machine Learning"}
          progress={"50%"}
          width={"50%"}
        />
        <SkillsSection skill={"Deep Learning"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"Data Science"} progress={"45%"} width={"45%"} />
        <SkillsSection
          skill={"HTML/CSS/JavaScript"}
          progress={"65%"}
          width={"65%"}
        />
        <SkillsSection skill={"React JS"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"Web Design"} progress={"60%"} width={"60%"} />
      </div>
      <div className="services-container">
          <ServicesSection image={design} title={'Web Design'} />
          <ServicesSection image={design} title={'Web Design'} />
          <ServicesSection image={design} title={'Web Design'} />
      </div>
    </div>
  );
}

export default AboutPage;
