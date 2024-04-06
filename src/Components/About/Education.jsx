import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Education = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
              I hold a strong academic foundation with 16 years of education, culminating in a Master of Science in Computer Science (MSc Computer Science). My journey through the realm of computer science has equipped me with a comprehensive understanding of theoretical concepts and practical applications.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2016-2018</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">B.Sc. Computer Science</h4>
                    <p className="fz-18 pra d-block">Government College University Faisalabad</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2018-2020</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">M.Sc. Computer Science</h4>
                    <p className="fz-18 pra d-block">Government College University Faisalabad</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2019</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Course of basic python programming</h4>
                    <p className="fz-18 pra d-block">Saylani Mass It Training</p>
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

export default Education;
