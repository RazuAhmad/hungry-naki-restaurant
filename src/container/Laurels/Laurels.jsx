import React from "react";
import { SubHeading } from "../../components";
import { awards } from "../../constants/data";
import images from "../../constants/images";
import AwardCard from "../AwardCard/AwardCard";

import "./Laurels.css";

const Laurels = () => (
  <div className="app__laurels-container app__bg section__padding" id="awards">
    <div className="app__award-content">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headText__cormorant">Our Laurels</h1>
      <div className="app__award-lists">
        {awards.map((allAwards, index) => (
          <AwardCard
            key={index}
            awardImg={allAwards.imgUrl}
            title={allAwards.title}
            subtitle={allAwards.subtitle}
          />
        ))}
      </div>
    </div>
    <div className="app__award-image">
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
