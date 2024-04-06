import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import figma from "../../assets/img/about/figma.png";
import word from "../../assets/img/about/word.png";
import html from "../../assets/img/about/html.png";
import bootstrap from "../../assets/img/about/bootstrap.svg";
import reacticon from "../../assets/img/about/react.svg";
import reduxicon from "../../assets/img/about/reduxicon.svg";
import cssIcon from "../../assets/img/about/css.svg";
import tailwindcss from "../../assets/img/about/tailwindcss.svg";
import sassIcon from "../../assets/img/about/sass.svg";
import chakraui from "../../assets/img/about/chakraui.jpg";

const skillsList = [
  {
    id: 5,
    skill: "React js",
    percentage: "90%",
    image: reacticon,
  },
  {
    id: 6,
    skill: "Redux Toolkit",
    percentage: "90%",
    image: reduxicon,
  },
  {
    id: 8,
    skill: "Tailwind CSS",
    percentage: "90%",
    image: tailwindcss,
  },
  {
    id: 10,
    skill: "Chakra UI",
    percentage: "70%",
    image: chakraui,
  },

  {
    id: 3,
    skill: "HTML",
    percentage: "95%",
    image: html,
  },
  {
    id: 7,
    skill: "CSS",
    percentage: "98%",
    image: cssIcon,
  },
  {
    id: 9,
    skill: "Sass",
    percentage: "98%",
    image: sassIcon,
  },
  {
    id: 4,
    skill: "Bootstrap",
    percentage: "97%",
    image: bootstrap,
  },
  {
    id: 1,
    skill: "Figma",
    percentage: "60%",
    image: figma,
  },
 

 
  
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Skills</h2>
              <p>
              I am a seasoned Frontend Developer with expertise in React.js, Redux Toolkit, HTML, CSS, Tailwind CSS, Chakra UI, and SCSS. Holding an MSc in Computer Science, my 4+ years of experience encompass 30+ successful projects, showcasing my proficiency in creating dynamic, responsive web applications with a keen eye for design. With a foundation in algorithm design and a commitment to continuous learning, I bring a holistic skill set that combines technical prowess with a passion for delivering seamless user experiences.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({id, skill, image, percentage}) => {
                    return (
                      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                        <div className="abox myskill__item">
                          <div className="thumb cicle">
                            <img height='80' width='80' src={image} alt="img" />
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block">{skill}</span>
                            <h1 className="fw-600">{percentage}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
