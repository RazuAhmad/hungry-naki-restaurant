import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";

import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__about-container app__bg section__padding">
    <div className="app_about-GImage">
      <img src={images.G} alt="G background" />
    </div>
    <div className="app__aboutUS">
      <SubHeading title="About Us" />
      <p className="p__openSans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et.
      </p>
      <button className="custom__button">Know More</button>
    </div>
    <div className="app_about-knife">
      <img src={images.knife} alt="" />
    </div>
    <div className="app__about-ourHistory">
      <SubHeading title="Our History" />
      <p className="p__openSans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et.
      </p>
      <button className="custom__button">Know More</button>
    </div>
  </div>
);

export default AboutUs;
