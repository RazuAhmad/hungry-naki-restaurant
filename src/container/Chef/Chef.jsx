import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";

import "./Chef.css";

const Chef = () => (
  <div className="app__chef-container section__padding ">
    <div className="app__chef-image">
      <img src={images.chef} alt="" />
    </div>
    <div className="app__chef-texts">
      <SubHeading title="Chef's word" />
      <h1 className="headText__cormorant">What We Believe In</h1>
      <div className="app__chef-quotation">
        <img src={images.quote} alt="quotes" />
        <p className="p__openSans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
        </p>
      </div>
      <p className="p__openSans">
        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
        Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
        lectus eu. Congue iaculis integer curabitur semper sit nunc.{" "}
      </p>
      <h3 style={{ color: "gray", marginTop: "2rem" }}>China Mama</h3>
      <h2 style={{ color: "white", margin: "1rem 0 2rem 0" }}>
        Chef & Founder
      </h2>
      <p>
        <img style={{ width: "50%" }} src={images.sign} alt="" />
      </p>
    </div>
  </div>
);

export default Chef;
