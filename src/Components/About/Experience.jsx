import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Experience = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
              Hello there! 👋 I'm a seasoned Frontend Developer with a passion for crafting seamless and visually stunning user experiences. With over 4 years of hands-on experience, I've successfully delivered 30+ projects that showcase my expertise in cutting-edge technologies. My toolkit includes React.js, Redux Toolkit, HTML, CSS, Tailwind CSS, Chakra UI, and SCSS.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2020</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Trainee Web developer</h4>
                    <p className="fz-18 pra d-block">Madina groups</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2021</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Frontend developer</h4>
                    <p className="fz-18 pra d-block">Dzine Media Software House</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Currently working</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Senior Frontend developer</h4>
                    <p className="fz-18 pra d-block">Dzine Media Software house</p>
                    <p className="fz-18 pra d-block">Fiverr.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
