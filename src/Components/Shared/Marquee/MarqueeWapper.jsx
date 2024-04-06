import React from "react";
import Marquee from "react-fast-marquee";


const MarqueeWapper = ({images, direction}) => {
  return (
    <div className="marquee-wrapper text-slider">
      <div className="marquee-inner text-dark fw-bold">
        <Marquee direction={direction}>
          {/* {
            images?.map(({id, image})=> <img key={id} src={image} alt=""/>)
          } */}
          <span className="me-4 pe-5">JavaScript</span>
          <span className="me-4 pe-5">React js</span>
          <span className="me-4 pe-5">React tsx</span>
          <span className="me-4 pe-5">Redux Toolkit</span>
          <span className="me-4 pe-5">HTML 5</span>
          <span className="me-4 pe-5">CSS3</span>
          <span className="me-4 pe-5">SCSS</span>
          <span className="me-4 pe-5">Tailwind CSS</span>
          <span className="me-4 pe-5">Bootstrap 4/5</span>

         
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeWapper;
